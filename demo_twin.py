# %%
# Setup InfluxDB
import os
import serial
from os.path import join, dirname
from dotenv import load_dotenv
from datetime import datetime
import time

from influxdb_client import InfluxDBClient, Point, WritePrecision
from influxdb_client.client.write_api import SYNCHRONOUS

load_dotenv()

com = os.getenv("COM")
token = os.getenv("TOKEN")
org = os.getenv("ORG")
bucket = os.getenv("BUCKET")
url = os.getenv("URL")

arduino = serial.Serial(com, 115200, timeout=1)
client = InfluxDBClient(url=url, token=token)
write_api = client.write_api(write_options=SYNCHRONOUS)

# %%
# Dirty event loop with log

period = 5.0
starttime = time.time()


def wait_period():
    time.sleep(period - ((time.time() - starttime) % period))


def log_millis():
    arduino.write(b"M")
    millis = arduino.readline().decode()
    data = f"arduino=arduino1 millis={millis}"
    write_api.write(bucket, org, data)


while True:
    log_millis()
    wait_period()

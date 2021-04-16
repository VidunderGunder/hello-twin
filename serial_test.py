# %%
import os
import time
import serial
from dotenv import load_dotenv

load_dotenv()

com = os.getenv("COM")
arduino = serial.Serial(com, 115200, timeout=1)

# %%
# TURN ON LED
arduino.write(b"H")

# %%
# TURN OFF LED
arduino.write(b"L")

# %%
# RESET
arduino.write(b"R")

# %%
# MILLISECONDS SINCE STARTUP
arduino.write(b"M")
# time.sleep(0.05)
millis = arduino.readline().decode()
print(millis)

# %%
# CLOSE SERIAL CONNECTION
arduino.close()

# Hello Twin (Backend + MCU) <!-- omit in toc -->

Backend and microcontroller part of a minimum digital twin example.

## Table of Contents <!-- omit in toc -->

- [Requirements](#requirements)
- [Quickstart](#quickstart)
  - [Arduino and VSCode](#arduino-and-vscode)
  - [Python (not needed for server)](#python-not-needed-for-server)
  - [InfluxDB](#influxdb)
  - [Node](#node)
- [Heads-Up](#heads-up)

## Requirements

- [x] Computer
- [x] Arduino UNO
- [x] Internet

## Quickstart

Install [VSCode](https://code.visualstudio.com/)

Install [Arduino IDE](https://www.arduino.cc/en/software)

Install [Anaconda](https://www.anaconda.com/products/individual) (or any variant you prefer)

### Arduino and VSCode

Open VSCode

Install recommended extensions (most importantly [Arduino](https://marketplace.visualstudio.com/items?itemName=vsciot-vscode.vscode-arduino))

Run `Arduino: Board Config`

Choose Arduino UNO

Run `Arduino: Select Serial Port` and choose your Arduino's port  
*Remember the port, as we'll need it later*

Open `DemoTwin.ino`

Run `Arduino: Initialize`

Upload `DemoTwin.ino` to your board

Run `Arduino: Change Baud Rate` and set it to `9600`

Try running `Arduino: Send Text to Serial Port`, and turn the LED on and off by sending `H` and `L`

### Python (not needed for server)

Open up your terminal, and run these commands:

```shell
conda create --name arduino python=3.7
```

```shell
conda activate arduino
```

```shell
conda install pyserial
```

Choose the new Arduino environment as the default Python interpreter in VSCode, by running `Python: Select Interpreter`.

Create a file in the project root called `.env`.

Set the correct COM-port in `.env` (`COM5` in my case), like so:

```env
COM="COM5"
```

Open `serial_test.py` in VSCode.

Run cell by cell with IPython.

### InfluxDB

[Create a free InfluxDB-account](https://cloud2.influxdata.com/signup)

Choose Azure as your bucket if prompted and you're not sure.

Go to `Load Data -> Buckets` and press `Create Bucket`.

Call it `HelloTwin Bucket`.

Go to `Load Data -> Tokens` and press `Generate Token`, and pick `Read/Write Token`.

Set description as `HelloTwin` and enable read and write access to `HelloTwin Bucket`.

Click on the token you created and `Copy to Clipboard`.

*Add* the following to your `.env`-file, with *your* info:

```env
BUCKET="HelloTwin Bucket"
URL="https://your-thingy-thang.influxdata.com" # Replace
TOKEN="Th3T0k3nY0uJu5tC0pI3d" # Replace
ORG="hacker@mainframe.gg" # Replace
```

### Node

Install everything:

```shell
yarn
```

Run development server:

```shell
yarn run dev
```

The server starts in `src/index.ts`.

You can test queries with [Insomnia](https://insomnia.rest/download) (or [Postman](https://www.postman.com/downloads/), if you prefer).

## Heads-Up

This project formats Python code with *black*, so accept installing it if prompted by VSCode, if you want auto-formatting.

In general, you should accept what VSCode recommends you to install, unless you know what you're doing.

If you get permission denied when doing anything COM-port related, make sure you close all active processes using the COM (e.g., Interactive Python or the Arduino Serial Monitor), and try again.
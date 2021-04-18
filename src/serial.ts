import SerialPort from "serialport";
import sleep from "util";

require("dotenv").config();
const Readline = SerialPort.parsers.Readline;
const com = process.env.COM ?? "";
const serialPort = new SerialPort(com, { baudRate: 115200 });
const parser = serialPort.pipe(new Readline({ delimiter: "\n" }));
let delay = sleep.promisify(setTimeout);

export async function arduinoTest() {
  await delay(3000);
  console.log("Arduino test running...");

  let ledOn: boolean = false;
  for (let i = 0; i < 2; i++) {
    ledOn = !ledOn;
    led(ledOn);
    await delay(500);
  }

  await millis();
  await reset();
}

export function led(on: boolean = true) {
  if (on) {
    console.log("LED on");
    serialPort.write("H");
  } else {
    console.log("LED off");
    serialPort.write("L");
  }
}

export async function reset() {
  console.log("Reset");
  serialPort.write("R");
  await delay(3000);
}

export function millis(): Promise<string> {
  console.log("Asking for ms since startup...");

  let ms: Promise<string> = new Promise((resolve, _reject) => {
    serialPort.write("M", function () {
      parser.once("data", (data) => {
        console.log("Millis:", data);
        resolve(data);
      });
    });
  });

  return ms;
}

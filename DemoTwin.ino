const int ledPin = 13;
int incomingByte;
void (*resetFunc)(void) = 0;

void setup()
{
  Serial.begin(115200);
  pinMode(ledPin, OUTPUT);

  // Clearly indicate that the device has been reset,
  // as resetFunc() doesn't trigger the usual indication
  for (size_t i = 0; i < 10; i++)
  {
    digitalWrite(ledPin, HIGH);
    delay(50);
    digitalWrite(ledPin, LOW);
    delay(50);
  }
}

void loop()
{
  if (Serial.available() > 0)
  {
    incomingByte = Serial.read();

    switch (incomingByte)
    {
    case 'H':
      digitalWrite(ledPin, HIGH);
      break;
    case 'L':
      digitalWrite(ledPin, LOW);
      break;
    case 'R':
      resetFunc();
      break;
    case 'M':
      Serial.println(String(millis()));
      break;
    }
  }
}

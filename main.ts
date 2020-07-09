input.onButtonPressed(Button.A, function () {
    SuperBit.Music(SuperBit.enMusic.entertainer)
    if (speed < 255) {
        speed += 20
    }
    updtservo(speed, speed)
})
input.onButtonPressed(Button.AB, function () {
    SuperBit.Music(SuperBit.enMusic.prelude)
    updtservo(SPEEDNIL, SPEEDNIL)
})
input.onButtonPressed(Button.B, function () {
    SuperBit.Music(SuperBit.enMusic.dadadum)
    if (speed > -250) {
        speed += -20
    }
    updtservo(speed, speed)
})
function updtservo (speed_left: number, speed_right: number) {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M2,
    speed_left,
    SuperBit.enMotors.M3,
    speed_right
    )
    basic.pause(100)
}
let speed = 0
let SPEEDNIL = 0
let pos = 35
SPEEDNIL = 0
speed = SPEEDNIL
updtservo(speed, 1)
let strip = neopixel.create(DigitalPin.P12, 4, NeoPixelMode.RGB)
strip.setBrightness(10)
strip.showRainbow(1, 360)
basic.forever(function () {
    strip.rotate(3)
    strip.show()
    while (pos < 55) {
        SuperBit.Servo(SuperBit.enServo.S2, pos)
        pos += 5
        basic.pause(50)
    }
    while (pos > 20) {
        SuperBit.Servo(SuperBit.enServo.S2, pos)
        pos += -5
        basic.pause(50)
    }
})

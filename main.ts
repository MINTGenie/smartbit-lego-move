input.onButtonPressed(Button.A, function () {
    if (speed < 255) {
        speed += 20
    }
    updtservo(speed, 1)
})
input.onButtonPressed(Button.AB, function () {
    updtservo(SPEEDNIL, 1)
})
input.onButtonPressed(Button.B, function () {
    if (speed > -250) {
        speed += -20
    }
    updtservo(speed, 1)
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
basic.forever(function () {
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

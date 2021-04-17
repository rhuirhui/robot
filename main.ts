radio.onReceivedString(function (receivedString) {
    if (receivedString == "forward") {
        pins.servoWritePin(AnalogPin.P1, 30)
        pins.servoWritePin(AnalogPin.P2, 150)
    } else if (receivedString == "backward") {
        pins.servoWritePin(AnalogPin.P1, 150)
        pins.servoWritePin(AnalogPin.P2, 30)
    } else if (receivedString == "left") {
        pins.servoWritePin(AnalogPin.P1, 150)
        pins.servoWritePin(AnalogPin.P2, 90)
    } else if (receivedString == "right") {
        pins.servoWritePin(AnalogPin.P1, 90)
        pins.servoWritePin(AnalogPin.P2, 150)
    } else {
        pins.servoWritePin(AnalogPin.P1, 90)
        pins.servoWritePin(AnalogPin.P2, 90)
    }
})
radio.setGroup(1)
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
})

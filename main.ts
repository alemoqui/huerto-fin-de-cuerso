let lectura = 0
radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(lectura)
    basic.pause(100)
    basic.showNumber(input.temperature())
    basic.pause(100)
    basic.showNumber(input.lightLevel())
    basic.pause(100)
})
radio.onReceivedString(function (receivedString) {
    radio.sendNumber(lectura)
})
basic.forever(function () {
    radio.setGroup(19)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        lectura = pins.analogReadPin(AnalogPin.P0)
        basic.clearScreen()
        basic.showNumber(lectura)
    }
    if (input.buttonIsPressed(Button.AB)) {
        radio.sendString("temperatura")
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.showNumber(input.temperature())
    }
})
basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        basic.showNumber(input.lightLevel())
    }
})

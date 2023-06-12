let lectura = 0
radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(lectura)
})
basic.forever(function () {
    radio.setGroup(123456789123456780)
})
basic.forever(function () {
    lectura = pins.analogReadPin(AnalogPin.P0)
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        basic.pause(50)
        basic.showNumber(lectura)
        radio.sendNumber(lectura)
    }
})

let lectura = 0
basic.forever(function () {
    radio.setGroup(123456789123456780)
})
basic.forever(function () {
    lectura = pins.digitalReadPin(DigitalPin.P0)
    led.plotBarGraph(
    lectura,
    1023
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        basic.pause(100)
        basic.showNumber(lectura)
        radio.sendNumber(lectura)
    }
})

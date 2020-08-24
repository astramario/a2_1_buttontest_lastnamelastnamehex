let Animation: Image = null
let FlexValue = 0
let PressureSensor = 0
let degrees = 0
input.onButtonPressed(Button.A, function () {
    Animation = images.iconImage(IconNames.House)
    Animation.scrollImage(1, 100)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Hello!")
})
basic.forever(function () {
    serial.writeValue("fx", FlexValue)
    serial.writeValue("px", PressureSensor)
})
basic.forever(function () {
    FlexValue = pins.analogReadPin(AnalogPin.P0)
    basic.showString("F:" + FlexValue)
    if (FlexValue <= 500) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    } else {
        basic.showIcon(IconNames.Happy)
    }
    PressureSensor = pins.analogReadPin(AnalogPin.P1)
    basic.showString("P:" + PressureSensor)
    if (PressureSensor <= 200) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    } else {
        basic.showIcon(IconNames.Happy)
    }
    Animation = images.iconImage(IconNames.House)
    if (input.lightLevel() <= 128) {
        Animation.scrollImage(1, 100)
        basic.pause(300)
        basic.showLeds(`
        . # # # .
        # # # # #
        . # # # .
        . # . # .
        . . . . .
        `, 100)
basic.showLeds(`
        # # # # #
        . # # # .
        . # . # .
        . . . . .
        . . . . .
        `, 100)
basic.showLeds(`
        . # # # .
        . # . # .
        . . . . .
        . . . . .
        . . . . .
        `, 100)
basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `, 100)
basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `, 100)
    } else {
        led.stopAnimation()
        basic.showString("Bright!")
    }
    degrees = input.compassHeading()
    if (degrees > 0 && degrees < 90) {
        basic.showLeds(`
            . . . # #
            . . . # .
            # # # # #
            # . # # .
            # . # # #
            `)
    } else if (degrees == 90) {
        basic.showLeds(`
            # # # # .
            # . . . .
            # # # # .
            # . . . .
            # # # # .
            `)
    } else if (degrees > 90 && degrees < 180) {
        basic.showLeds(`
            # # . # #
            # . . # .
            # # . # #
            . # . # .
            # # . # #
            `)
    } else if (degrees == 180) {
        basic.showLeds(`
            # # # # .
            # . . . .
            # # # # .
            . . . # .
            # # # # .
            `)
    } else if (degrees > 180 && degrees < 270) {
        basic.showLeds(`
            # # . . .
            # . # . #
            # # # . #
            . # # # #
            # # # # #
            `)
    } else if (degrees == 270) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # . # . #
            # . # . #
            # # # # #
            `)
    } else if (degrees > 270 && degrees < 360) {
        basic.showLeds(`
            . . # . #
            . . # . #
            # # # . #
            # . # # #
            # . # # #
            `)
    } else if (degrees == 0) {
        basic.showLeds(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `)
    }
})

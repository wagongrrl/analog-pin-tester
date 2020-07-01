input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showIcon(IconNames.Square)
    music.playMelody("G B A G C5 B A B ", 120)
})

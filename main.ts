input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendString("smile")
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    radio.sendString("jump")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "smile") {
        basic.showIcon(IconNames.Happy)
    } else if (receivedString == "love") {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.StickFigure)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    radio.sendString("love")
})
radio.setGroup(12)

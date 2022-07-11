datalogger.onLogFull(function () {
    basic.showIcon(IconNames.No)
    Testencours = false
})
input.onButtonPressed(Button.A, function () {
    Testencours = true
})
input.onButtonPressed(Button.B, function () {
    datalogger.deleteLog()
})
let Testencours = false
Testencours = false
loops.everyInterval(1000, function () {
    if (Testencours == true) {
        datalogger.log(datalogger.createCV("lum", input.lightLevel()))
        led.toggle(0, 0)
    }
})

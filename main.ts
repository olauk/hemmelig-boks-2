input.onButtonPressed(Button.A, function () {
    kode = "" + kode + "A"
})
input.onButtonPressed(Button.B, function () {
    kode = "" + kode + "B"
})
let kode = ""
let løsning = "ABBA"
basic.forever(function () {
    if (kode == løsning) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Asleep)
    }
})

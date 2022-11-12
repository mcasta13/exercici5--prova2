for (let index = 0; index < 10; index++) {
    for (let indexx = 0; indexx <= 4; indexx++) {
        led.toggle(indexx, 2)
    }
    basic.pause(200)
}
basic.forever(function () {
	
})

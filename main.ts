input.onButtonPressed(Button.A, function () {
    powerfunctions.setSpeed(PowerFunctionsMotor.Blue4, 7)
    pfTransmitter.singleOutputMode(PfChannel.Channel4, PfOutput.Blue, PfSingleOutput.FullBackward)
})
input.onButtonPressed(Button.B, function () {
    powerfunctions.setSpeed(PowerFunctionsMotor.Blue4, 7)
    pfTransmitter.singleOutputMode(PfChannel.Channel4, PfOutput.Blue, PfSingleOutput.FullForward)
})
powerfunctions.connectIrLed(AnalogPin.P0)
basic.forever(function () {
	
})



var serialPort = require('serialport');
var port = new serialPort('/dev/ttyAMA0', {
	baudRate: 115200
});

var dataToSend;

function WriteChars(array)
{
	var length = array.length;
	var stringus = "";
	for(var index = 0; index<length; index+=1)
		stringus += String.fromCharCode(array[index]);
	return stringus;
}

exports.OpenPort = port.open(function(msg){
	if(msg){
		console.log(msg.message);
	}
});

port.on('open', function(msg){
	console.log('port Openened!');
});

port.on('error', function(err){
	console.log(err.message);
});

port.on('close', function() {
	console.log('Closing...');
});

exports.getTempData = 
port.on('data', function(data){
	var length = data.length;
	var stringus = "";
	for(var index = 0; index<length; index+=1)
		stringus += String.fromCharCode(data[index]);
	return stringus;
});
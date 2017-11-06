var serialPort = require('serialport');
var port = new serialPort('/dev/ttyAMA0', {
	baudRate: 115200
});

var dataToSend;

/*setInterval(function(){ port.write("data\r\n",'utf8',function(){
	var appel = port.read(1024);
	if(appel != null)
		console.log(WriteChars(appel));
	else
		console.log("no content given");
}); }, 1000);

serialPort.list(function (err,ports){
	ports.forEach(function(port){
		console.log(port.comName);
	});
});*/

/*function WriteChars(array)
{
	var length = array.length;
	var stringus = "";
	for(var index = 0; index<length; index+=1)
		stringus += String.fromCharCode(array[index]);
	return stringus;
}*/

port.open(function(msg){
	if(msg){
		console.log(msg.message);
	}
});

/*port.write("hallo\r\n",'utf8', function(){
	console.log('data was sent');
});*/

port.on('open', function(msg){
	console.log('port Openened!');
});

port.on('error', function(err){
	console.log(err.message);
});

port.on('close', function() {
	console.log('Closing...');
});

port.on('data', function(data){
	var length = data.length;
	var stringus = "";
	for(var index = 0; index<length; index+=1)
		stringus += String.fromCharCode(data[index]);
	dataToSend = stringus;
	//console.log(WriteChars(data));
});

/**
 * returns a string containing the temperature
 * @return {string}
 */
exports.temperature = function()
{
	return dataToSend;
}







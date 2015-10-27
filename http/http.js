var http=require('http');
var fs=require('fs');
var onResponce=function(respons){
	console.log(respons.statusCode);
	console.log(respons.headers);
	respons.on('data', function (chunk) {
    fs.writeFileSync('a.txt',chunk)
  })
};
var onerror=function(e){
	console.log(e);
};
http.get("http://www.google.com/index.html",onResponce).on('error',onerror)
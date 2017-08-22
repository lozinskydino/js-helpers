getBase64: function() {
	//Get File from form
	var file = document.querySelector('#curriculo').files[0];
	
	//start to read the file
	var reader = new FileReader();
	
	//turns into base64
	reader.readAsDataURL(file);
	
	//when done, do something
	reader.onload = function () {
		//Put your base64 in some variable to send
		that.form.curriculo = reader.result;
	};
	//If doesn't work throw the error
	reader.onerror = function (error) {
		console.log('Error: ', error);
	};
}

function normalizeImageHeight(){
	//Set height to use it in loop and set new height from images
	var height = 0;
	
	//Get the list of images that you want normalize
	$(".item .produto img").each(function(i, v){
		/*Set all images to height:auto, this way you avoid bugs
		 if use it with window resize*/
		$(this).heigth('auto');
		
		//Do a loop to get the highest image and set the var height
		// To get the smallest image, set the height to 99999999 and change the > to < on if below
		if($(this).height() > height){
			height = $(this).height();
		}
	});
	
	//Set the height from highest image in all of them
	$(".item .produto img").each(function(i, v){
		$(this).height(height);
	});
}

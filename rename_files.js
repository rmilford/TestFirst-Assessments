var renameFiles = function(){
	var newArr = [];
	var counter = 0;
	for(var i = 0; i < arguments[0].length; i++){
		debugger;
		if(newArr.indexOf(arguments[0][i])=== -1){
			newArr.push(arguments[0][i]);
		}
		else {
			counter = 1;
			while (newArr.indexOf(arguments[0][i]+'('+counter + ')')!== -1) {
				counter++;
			}
			newArr.push(arguments[0][i]+ '('+counter + ')');
		}
	}
	return newArr;
	
};
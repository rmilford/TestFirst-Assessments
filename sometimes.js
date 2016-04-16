var sometimes = function (func) {
  var counter = 0;
  var newFunc = function() {
    counter++;
    if (counter===4) {
    	return "I do not know!";
    }
    else if ((counter>4) && (counter%2===0)){
	    return "I do not know!";	
    }
   	return func.apply(null, arguments);
  };
  return newFunc;
};

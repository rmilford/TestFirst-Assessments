var dot = function(obj, str){
	if(Object.hasOwnProperty.call(obj,str)) {
		return obj[str];
	}
	else{
		return dot(Object.getPrototypeOf(obj),str);
	}

};

var dotCall = function(obj, prop, arguments){
	if(typeof dot(obj, prop) !== "function"){
		throw 'The property "'+prop+'" is not a function';
	}
	else{
		debugger;
		var arr = [];
		arr.push(arguments);
	return dot(obj, prop).apply(obj, arr);
}
};
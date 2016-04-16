var MyEventEmitter = function () {

	this.events = {};
	
};

MyEventEmitter.prototype.addListener = function(str, func){

	if(typeof this.events[str]==='undefined'){
		this.events[str] = [];
	}
	this.events[str].push(func);
	return func;
};

MyEventEmitter.prototype.emit = function(str, name){
	debugger;
	for(var i =0; i < this.events[str].length; i++){
		this.events[str][i].apply(this,[name]);
	}
};


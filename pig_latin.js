var translate = function(str){
	var subStr = "";
	var strArr = str.split(' ');
	for(var i = 0; i < strArr.length; i++){
		str = strArr[i];
	if((str.charAt(0)==="a")||(str.charAt(0)==="e")||(str.charAt(0)==="i")||(str.charAt(0)==="o")||(str.charAt(0)==="u")){
		str += "ay";
	}
	else{
		while (!(((str.charAt(0)==="a")||(str.charAt(0)==="e")||(str.charAt(0)==="i")||(str.charAt(0)==="o")||(str.charAt(0)==="u")))) {
			if(str.substring(0,2)==="qu"){
				subStr = str.substring(2,str.length) + str.substring(0,2);
				str = subStr;	
			}
			else {
				subStr = str.substring(1,str.length) + str.charAt(0);
				str = subStr;
			}
		}
		str += "ay";
	}
	strArr[i] = str;
}
	return strArr.join(' ');
};
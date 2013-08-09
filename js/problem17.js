


$(document).ready(function() {	
	NumberLetterCounts.init();
});

var NumberLetterCounts = (function(o){

	
	//one two three four five six seven eight nine ten 
	//eleven twelve thirteen forteen fifteen sixteen seventeen eighteen nineteen twenty
	//twenty- ...   thrity
	//thirty forty fifty sixty seventy eighty ninety 	
	//hundred 
	// [
	// 	3,3,5,4,4,3,5,5,5,3,
	// 	6,6,8,7,7,7,8,8,8,6,		
	// ]


	o.init = function(){
		var sum = 0;
		//1~9
		sum += (3+3+5+4+4+3+5+5+4); //36
		//10~19
		sum += (3+6+6+8+8+7+7+9+8+8);
		//20~99
		sum += 10*(6+6+5+5+5+7+6+6) + 8*36; //748  total: 854


		//100~999  7 => hundred , 10 => hundred and 
		sum += 854*9 + 7*9 + 10*99*9 + 36*100
		//10000
		sum += 11;

		alert(sum);
	}

	return o;


})( NumberLetterCounts || {} );
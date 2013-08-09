

var digitOfNum = function(num){	
	var count = 0;
	while(num > 1){
		count++;
		num /=10;
	}
	return count;
}

var isPalindromic = function(num){
	var digits = digitOfNum(num);
	var leftNum = 0 , rightNum = 0;
	var checkPosition = 0;

	while(checkPosition < digits/2){
		rightNum = Math.floor(num/(Math.pow(10 , checkPosition)))%10;
		leftNum = Math.floor(num/(Math.pow(10 ,(digits-checkPosition-1))))%10;		
		checkPosition++;
		if(rightNum != leftNum)
			return false;
	}
	return true;
}



//We only check the 6-digit number
var min = 317;
var max = 999;
var large = 100000;

for(var i = max ; i > min ; i--){
	for(var j = i ; j > min ; j--){
		var num = i*j;
		if(isPalindromic(num)){
			if(num > large)				
				large = num;
		}				
	}
}
console.log(large);

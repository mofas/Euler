

var primeCheck = function(num){		
	var factor = Math.floor(Math.sqrt(num));	
	while(factor > 1){		
		if((num%factor) == 0){				
			return false;
		}				
		factor--;
	}
	return true;
}


var factorNum = function(num){
	var tempArray = [];
	var limit = Math.floor(Math.sqrt(num));
	while(limit > 1){		
		if((num%limit) == 0){				
			tempArray.push(num/limit);
			tempArray.push(limit);
		}
		limit--;
	}
	return tempArray.sort(function(a ,b){return a-b;});
}


$(document).ready(function() {			
	var large = 0;
	var factorArray = [600851475143];
	var primeArray = [];
	var tempArray = [];

	
	while(factorArray.length > 0 ){
		var factorArrayLength = factorArray.length;
		var nextCheckArray = [];
		var tempArray;
		for(var i=0; i < factorArrayLength ; i++){			
			var number = factorArray[i];			
			if(primeCheck(number)){				
				primeArray.push(number);
			}
			else{						
				tempArray = factorNum(factorArray[i]);
				for(var j =0;j < tempArray.length ; j++){
					var target = tempArray[j];
					if(nextCheckArray.indexOf(target) < 0){
						nextCheckArray.push(target);
					}
				}
			}
		}			
		factorArray = nextCheckArray;
	}
	primeArray.sort(function(a ,b){return a-b;});

	console.log(primeArray);

});
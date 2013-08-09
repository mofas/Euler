



var amicableNumbers = (function(o){


	var amicableNumberPair = [];

	o.sumOfProperDivisors = function(num){
		var limit = Math.sqrt(num);		
		var divisorsArray = [1];

		for(var i = 2 ; i < limit ; i++){
			if(num % i == 0){
				divisorsArray.push(i);
				divisorsArray.push(num/i);
			}
		}

		var sum = 0;
		for(var i = 0 ; i < divisorsArray.length ; i++){
			sum += divisorsArray[i];
		}
		return sum;
	}

	o.init = function(){
		for(var i = 100 ; i < 10000 ; i++){
			var j = o.sumOfProperDivisors(i);
			if(j <= i)
				continue;
			else{
				var check = o.sumOfProperDivisors(j);
				if(check == i)
					amicableNumberPair.push([i,j]);
			}
		}
		console.log(amicableNumberPair);
		var sum = 0
		for(var i=0; i < amicableNumberPair.length ; i++){
			sum += amicableNumberPair[i][0] + amicableNumberPair[i][1];
		}
		return sum;
	}

	o.getAmicableNumberPair = function(){
		return amicableNumberPair;
	}
	

	return o;

})( amicableNumbers || {} );
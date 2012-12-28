
var searchPrime = (function(o){

	var primeArray = [2,3,5];
	var targetNo = 0;



	var checkPrimeByPrimeArray = function(num){
		var primeLength = primeArray.length;
		var prime;
		var limit = Math.sqrt(num);				
		for(var i = 0 ; i < primeLength ; i++){			
			prime = primeArray[i];

			if((num%prime) == 0){
				return false;
			}

			if(prime > limit){
				return true;
			}
		}		
		return true;
	}

	o.searchNext = function(){
		var lastPrime = o.getLastPrime();
		var checkNum = lastPrime+=2;
		while(!checkPrimeByPrimeArray(checkNum)){
			checkNum+=2;
		}

		primeArray.push(checkNum);
	}

	o.searchNextN = function(n){		
		var targetLength = primeArray.length + n;
		while(primeArray.length < targetLength){
			o.searchNext();
		}		
	}

	o.returnPrimeArray = function(){
		return primeArray;
	}

	o.getLastPrime = function(){
		return primeArray[primeArray.length-1];
	}

	o.getSumOfPrime =function(){
		var sum = 0;
		for(var i = 0; i < primeArray.length ; i++){
			sum += primeArray[i];
		}
		return sum;
	}


	o.searchLastPrimeBelow = function(num){
		var startTime = new Date().getTime();
		var lastPrime = 0;
		var sum;		
		while(lastPrime < num){			
			o.searchNext();			
			lastPrime = o.getLastPrime();
		}
		primeArray.pop();		
		sum = o.getSumOfPrime();
		var endTime = new Date().getTime();
		console.log(endTime-startTime);
		return sum;
	}

	return o;

})( searchPrime || {} );
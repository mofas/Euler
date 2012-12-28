
var searchPrime = (function(o){

	var primeArray = [2,3,5];
	var targetNo = 0;



	var checkPrimeByPrimeArray = function(num){
		var primeLength = primeArray.length;
		var prime;
		for(var i=0; i < primeLength ; i++){
			prime = primeArray[i];
			if((num%prime) == 0)
				return false;
		}		
		return true;
	}

	o.searchNext = function(){
		var lastPrime = o.getLastPrime();
		var checkNum = lastPrime;
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
		console.log(primeArray.length , primeArray);
	}

	o.returnPrimeArray = function(){
		return primeArray;
	}

	o.getLastPrime = function(){
		return lastPrime = primeArray[primeArray.length-1];
	}

	return o;

})( searchPrime || {} );
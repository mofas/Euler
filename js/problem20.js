

var factorialDigitSum = (function(o){

	var primeArray = [2,3,5,7];

	var factPrimeCountArray = [0,0,0,0];

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

	o.getLastPrime = function(){
		return primeArray[primeArray.length-1];
	}

	o.searchNextPrime = function(){
		var lastPrime = o.getLastPrime();
		var checkNum = lastPrime+=2;
		while(!checkPrimeByPrimeArray(checkNum)){
			checkNum+=2;
		}

		primeArray.push(checkNum);
		factPrimeCountArray.push(0);
	}



	o.factor = function(num){		
		var limit = Math.sqrt(num);
		
		while(num >= o.getLastPrime()){
			o.searchNextPrime();			
		}		

		var factorCount = new Array(primeArray.length);
		for(var i =0; i < factorCount.length ; i++){
			factorCount[i] = 0;
		}

		var count = 1;
		var prime = 2;
		var tempNum;
		while(prime <= limit+prime){
			tempNum = num;						
			while(tempNum % prime == 0){
				tempNum /= prime;
				factorCount[count-1]++;				
			}
			prime = primeArray[count];
			count++;			
		}

		//if count = 1 == > isPrime
		if(count == 1)
			primeArray[primeArray.indexOf(count)]++;

		return factorCount;
	}

	o.factorialFactor = function(num){
		var countArray = o.factor(num);
		for(var i =0; i < countArray.length ; i++){
			factPrimeCountArray[i] += countArray[i];
		}		
	}


	o.bigNumberOperation = function(array , operation){
		var overflowHandle = function(array){
			for(var i = 0; i < array.length ; i++){
				while(array[i] >= 10){
					if((i+1) == array.length){
						array.push(0);
					}
					array[i+1]++;
					array[i] -= 10;
				}
			}
			if(array[array.length-1] == 0)
				array.pop();
		}		
		var newArray = array.map(operation);
		//console.log(newArray);
		overflowHandle(newArray);		
		return newArray;
	}

	o.init = function(){
		for(var i=1 ; i <= 100 ; i++){
			o.factorialFactor(i);
		}
		//console.log(primeArray , factPrimeCountArray);

		//remove 2*5 factor number as possible
		while(factPrimeCountArray[0] > 0 && factPrimeCountArray[2] > 0){
			factPrimeCountArray[0]--;
			factPrimeCountArray[2]--;
		}		
		//console.log(primeArray , factPrimeCountArray);

		var facNum = 1;
		var facNumArray = [1];
		for(var i =0;i < primeArray.length ;i++){
			while(factPrimeCountArray[i] > 0){
				facNumArray = o.bigNumberOperation(facNumArray , function(value){
					return value*primeArray[i];
				});	
				factPrimeCountArray[i]--;
			}						
		}
		console.log(facNumArray);
		var digitSum = 0;
		for(var i = 0 ; i < facNumArray.length ; i++){
			digitSum += facNumArray[i];
		}
		console.log(digitSum);
	}


	return o;

})( factorialDigitSum || {} );
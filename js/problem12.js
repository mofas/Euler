


var HDTN = (function(o){

	var primeArray = [2,3,5];

	var triangleArray = [1,3,6,10];

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

	o.triangularNumberGenegrator = function(n){
		return sum = (1+n)*n/2;
	}

	// num > 1
	o.factor = function(num){
		var limit = Math.sqrt(num);

		//if limit > lastPrime => genegrate next prime
		while(limit >= o.getLastPrime()){
			o.searchNextPrime();			
		}

		var factorCount = new Array(primeArray.length);
		for(var i =0; i < factorCount.length ; i++){
			factorCount[i] = 0;
		}

		var count = 1;
		var prime = 2;
		var tempNum;
		while(prime <= limit){
			tempNum = num;						
			while(tempNum % prime == 0){
				tempNum /= prime;
				factorCount[count-1]++;				
			}
			prime = primeArray[count];
			count++;			
		}

		//run last 1
		prime = primeArray[count-1];
		tempNum = num;						
		while(tempNum % prime == 0){
			tempNum /= prime;
			factorCount[count-1]++;				
		}		

		var diverNum = 1;
		for(var i =0; i < factorCount.length ; i++){
			diverNum *= factorCount[i]+1;
		}

		return diverNum;
	}

	o.searchNextPrime = function(){
		var lastPrime = o.getLastPrime();
		var checkNum = lastPrime+=2;
		while(!checkPrimeByPrimeArray(checkNum)){
			checkNum+=2;
		}

		primeArray.push(checkNum);
	}

	o.getLastPrime = function(){
		return primeArray[primeArray.length-1];
	}

	o.init = function(){
		var count = 1;
		var num = 2;
		var diverNum = 1;
		while(diverNum < 500){
			num = o.triangularNumberGenegrator(count);
			count++;
			diverNum = o.factor(num);		
		}
		console.log(num);

	}

	return o;

})( HDTN || {} );



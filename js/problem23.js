


var NonAbundantSums = (function(o){

	var resultArray = [];

	var abundantNumArray = [12];

	o.sumOfProperDivisors = function(num){
		var limit = Math.sqrt(num);				
		var sum = 1;
		for(var i = 2 ; i < limit ; i++){			
			if(num % i == 0){
				sum = sum + i + num/i;
			}			
		}	

		if(i*i == num)
			sum += i;

		return sum;
	}


	o.abundantCheck = function(num){
		return (o.sumOfProperDivisors(num) > num) ? true : false;
	}

	o.sumOfTwoAbundantNumbersCheck = function(num){
		var limit = Math.ceil(num/2)+1;		

		while(limit > o.getLastAbundantNum()){
			o.searchNextAbundantNum();
		}	

		var count = 0;
		var a1 = abundantNumArray[0] , a2 = num - a1;		

		while(a1 < limit){			
			if(o.abundantCheck(a2)){
				return true;
			}				
			else{
				count++;
				a1 = abundantNumArray[count];
				a2 = num - a1;	
			}			
		}
		return false;
	}

	o.searchNextAbundantNum = function(){
		var checkNum = o.getLastAbundantNum()+1;		
		while(!o.abundantCheck(checkNum)){
			checkNum++;
		}		
		abundantNumArray.push(checkNum);
	}

	o.getLastAbundantNum = function(){
		return abundantNumArray[abundantNumArray.length-1];
	}


	o.init = function(){		
		resultArray = [];
		for(var i = 1 ; i <= 28123 ; i++){			
			if(!o.sumOfTwoAbundantNumbersCheck(i)){
				resultArray.push(i);
			}				
		}		
		console.log(resultArray);

		var sum = 0;
		for(var i = 0 ; i < resultArray.length ; i++){
			sum += resultArray[i];
		}
		console.log(sum);
	}

	o.returnResultArray = function(){
		return resultArray;
	}



	return o;

})( NonAbundantSums || {} );
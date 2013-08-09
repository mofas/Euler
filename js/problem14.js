
var longestCollatzSequence = (function(o){

	var limit = 1000*1000;
	//var limit = 20;
	var max = 1;
	var maxNum = 1;

	var sequenceArray = [];

	// we must in order
	var getSequenctNo = function(num , count){						
		//console.log(num , count);				
		if(num < sequenceArray.length){			
			return count+sequenceArray[num-1]-1;
		}
		
		if(num == 1){			
			return count;
		}

		count++;

		if(num % 2 == 0){			
			return getSequenctNo(num/2 , count);
		}
		else{
			return getSequenctNo(num*3+1, count);	
		}
	}


	o.getSequenctNo = getSequenctNo;

	o.getSequenceArray = function(){return sequenceArray;}

	o.init = function(){
				
		for(var i = 1 ; i <= limit ; i++){
			var sen = getSequenctNo(i,1);
			if(sen > max){
				max = sen;
				maxNum = i;
			}				
			sequenceArray.push(sen);
		}
		console.log(maxNum , max);
	}

	return o;

})( longestCollatzSequence || {} );


longestCollatzSequence.init();
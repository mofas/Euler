

var drawTheSameFactor = function(array , targetNum , sameFactorArray){
	var IndexOfElementWhicHasTheFactor = [];
	for(var i = 0 ; i < array.length ; i++){
		if(array[i]%targetNum == 0){
			IndexOfElementWhicHasTheFactor.push(i);
		}
	}	

	if(IndexOfElementWhicHasTheFactor.length > 1){
		for(var i = 0 ; i < IndexOfElementWhicHasTheFactor.length ; i++){		
			array[IndexOfElementWhicHasTheFactor[i]] = array[IndexOfElementWhicHasTheFactor[i]]/targetNum;
		}
		sameFactorArray.push(targetNum);

		return true;		
	}
	return false;

}


$(document).ready(function() {

	var sum = 1;
	var multiples = [];
	var sameFactorArray = [];

	for(var i = 1; i < 21 ; i++){
		multiples.push(i);
	}
	
	//draw the same factor 
	var targetFactorNum = 2;
	while(targetFactorNum < 21){
		if(!drawTheSameFactor(multiples , targetFactorNum , sameFactorArray)){
			targetFactorNum++;
		}
	}
	
	for(var i= 0; i < 20 ; i++){
		sum *= multiples[i];
	}

	for(var i = 0; i < sameFactorArray.length ; i++){
		sum *= sameFactorArray[i];	
	}

	console.log(sum);
});


var LexicographicPermutations = (function(o){


	var fa1 = 1,
		fa2 = 2,
		fa3 = 6,
		fa4 = 24, 
		fa5 = 120,
		fa6 = 720,
		fa7 = 5040,
		fa8 = 40320,
		fa9 = 362880,
		fa10 = 3628800;		

	var digitsVar = [fa10 , fa9 , fa8 , fa7 , fa6 , fa5 , fa4 , fa3 , fa2 , fa1];		

	//var targetTh = 1000*1000;

	var order;


	var repeatNum = function(num){
		for(var i = 0 ; i < order.length ;i++){
			if(num == order[i])
				return true;
		}
		return false;
	}

	o.init = function(targetTh){		
		order = new Array(10);
		order.map(function(x){ return 0; });
		
		var digits = 0;

		var diff = targetTh-1;
		var Num = 0;  //the number of digits
		var needBack = false;

		while(diff >= 0 && digits < digitsVar.length){

			//console.log(diff , digits , digitsVar[digits] , Num);
			if(diff/digitsVar[digits] >= 1){				
					diff -= digitsVar[digits];		
					if(needBack == true){
						Num++;
						while(repeatNum(Num)){
							Num++;
						}
					}
					needBack = true;					
			}			
			else{				
				if(needBack){					
					digits--;					
					order[digits] = Num--;
				}else{
					order[digits] = Num;	
				}				
				// Num set to the lowest number
				Num = 0;
				while(repeatNum(Num)){
					Num++;
				}
				digits++;
				needBack = false;
			}			
		}					

		while(digits < digitsVar.length){			
			Num = 0;
			while(repeatNum(Num)){
				Num++;
			}
			order[digits] = Num;	
			digits++;
		}			
		
		console.log(order);

	}

	

	return o;

})( LexicographicPermutations || {} );
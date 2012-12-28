


var findPythagorean = (function(o){


	var minCount = 36;
	var maxCount = 500;


	//a , b , c
	var checkPythagorean = function(i , j , k){		
		if((i*i + j*j) == k*k)
			return true;
		
		return false;
	}

	// i^2 + j^2 = k^2
	//i < j < k
	//j = 1000 -i -k
	//i < 332 
	//k > j    >>    k > 1000 -i -k   >> 2k > 1000 - i   >>   k > 334
	//i^2 = k^2 - j^2 ==> i > 36
	o.search = function(){
		for(var k = 334 ; k < 500 ; k++){
			for(var i = minCount ; i < 332 ; i++){
				var j = 1000 - i - k;
				if(j > k || j < i)
					continue;				

				if(checkPythagorean(i , j , k)){
					alert(i*j*k);
					return i*j*k;
				}
			}
		}
	}	


	return o;

})( findPythagorean || {} );
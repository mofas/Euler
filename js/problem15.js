
var LatticePaths = (function(o){

	
	var factorialArray = new Array();

	var factorial = function(n){
	  if (n==0 || n==1)
		return 1;
	  if(factorialArray[n]>0)
	    return factorialArray[n];
	  else
	    return factorialArray[n] = factorial(n-1)*n;
	}

	var getRoutes = function(row , col){
		//console.log(factorial(row+col) , (factorial(row)*factorial(col)));
		return factorial(row+col)/(factorial(row)*factorial(col));
	}

	o.getRoutesByGrid = getRoutes;

	o.init = function(){

	}

	return o;

})( LatticePaths || {} );


LatticePaths.init();
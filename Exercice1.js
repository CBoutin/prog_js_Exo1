//Fonctions adder et mult de base

function adder(l, r){
	return function(v){
		return l(v) + r(v);
	}
}

function mult(v){
	return function(e){
		return v*e;
	}
}


//Fonction sub suivie de sa batterie de tests

function sub(v){
  return function(e){
    return v-e;
  }
}

sub(0)(0); // 0
sub(2)(1); // 1
sub(2)(2); // 0
sub(2)(4); // -2


//Fonction adder acceptant un nombre indeterminé de paramètres et sa batterie de tests


function adder(){
	
	var args = Array.prototype.slice.call(arguments);
	var sum=0;
	
	return function(v){ 
		args.forEach(
			function(val)
			{
				sum+=val(v);
			}
		);
		return sum;
	}
}

adder()(0); // 0
adder()(1); // 0
adder(mult(2))(1); // 2
adder(mult(2), mult(2))(1); // 4
adder(mult(2), mult(2), mult(2))(1); // 6
adder(mult(2), sub(2), mult(2))(1); // 5

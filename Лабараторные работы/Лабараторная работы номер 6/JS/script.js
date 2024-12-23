
	  var op; 
	  function func() {
	    var result;
	    var num1 = Number(document.getElementById("num1").value);
	    var num2 = Number(document.getElementById("num2").value);
	    switch (op) {
	      case '+':
	        result = num1 + num2;
	        break;
	      case '-':
	        result = num1 - num2;
	        break;
	      case '*':
	        result = num1 * num2;
	        break;
	      case '/':
	        result = num1 / num2;
	        break;
	    }
	    document.getElementById("result").innerHTML = result;
	  }

	
	  function find_number() {
		var  res, num4;
		var num3 = Number(document.getElementById("num3").value);
		res = num3 * 2 + 7;
		num4 = num3
		document.getElementById("res").innerHTML = res;
		document.getElementById("num4").innerHTML = num4;
		}

		function name_finder(){
			var name = prompt('Как вас зовут?');
			document.getElementById("name").innerHTML=name;
		}

		function age_finder(){
			var age;
			var year = prompt('В каком году вы родились?');
			age = 2024 - year;
			document.getElementById("age").innerHTML = age;
		}
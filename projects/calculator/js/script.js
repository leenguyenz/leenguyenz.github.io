document.addEventListener("DOMContentLoaded", function(){

var input = document.getElementById('input'),
	number = document.getElementsByClassName('number'),
	operator = document.getElementsByClassName('operator'),
	xsqrt = document.getElementById('sqrt'),
	x2 = document.getElementById('x2'),
	n = document.getElementById('n'),
	percent = document.getElementById('percent'),
	x1 = document.getElementById('x1'),
	f5 = document.getElementById('f5'),
	result = document.getElementById('result'),
	back = document.getElementById('back'),
	flag = false;

	// refresh
	f5.addEventListener('click',function(){
		input.innerHTML = '';
	})

	// Add number
	for(var i = 0; i < number.length; i++){
		number[i].addEventListener('click',function(){
			var inputVal = input.innerHTML,
				lastVal = inputVal[inputVal.length - 1];
			if(flag === false){
				input.innerHTML += this.innerHTML;
			}
			else if(flag === true && lastVal === '+' || lastVal === '-' || lastVal === '×' || lastVal === '÷'){
				input.innerHTML += this.innerHTML;
				flag = false;
			}
			else{
				flag = false;
				input.innerHTML = "";
				input.innerHTML += this.innerHTML;
			}
		});
	}

	// Add operator: + - × ÷
	for(var i = 0; i < operator.length; i++){
		operator[i].addEventListener('click',function(){
			var inputVal= input.innerHTML,
				lastVal = inputVal[inputVal.length - 1];

			if(lastVal === '+' || lastVal === '-' || lastVal === '×' || lastVal === '÷'){
				var newstr = inputVal.substring(0, inputVal.length -1) + this.innerHTML;
				input.innerHTML = newstr;
			}
			else 
				if(inputVal == ''){
				input.innerHTML = '';
			}
			else{
				input.innerHTML += this.innerHTML;
			}
		})
	}

	// Event result clicked
	result.addEventListener('click',function(){
		var inputVal = input.innerHTML,
			lastVal = inputVal[inputVal.length - 1],
			equation = inputVal,
			equation = equation.replace(/÷/g, '/').replace(/×/g, '*');

		//lastVal = operator => remove
		for(var i = 0; i < operator.length; i++){
			if(operator[i].innerHTML.indexOf(lastVal) > -1){
				equation = equation.replace(/.$/, '');
			}
		}
		if(equation){
			input.innerHTML = eval(equation);
		}
		flag = true;
	})

	// √ clicked
	xsqrt.addEventListener('click', function(){
		var newstring = input.innerHTML;
		if(input.innerHTML != ''){
			input.innerHTML = Math.sqrt(newstring);
		}
	})

	// x² clicked
	x2.addEventListener('click', function(){
		var newstring = input.innerHTML;
		if(input.innerHTML != ''){
			input.innerHTML = eval(newstring*newstring);
		}
	})

	// n! clicked
	n.addEventListener('click', function(){
		var newstring = input.innerHTML;	
		if(newstring == '0'){
			input.innerHTML = 1;
		}
		else{
			for(var i = 1; i < newstring; i++){
				input.innerHTML *= i;
			}
			return input.innerHTML;
		}
	})

	// del clicked
	back.addEventListener('click', function(){
		var inputVal = input.innerHTML;
		if(inputVal != ''){
			var newstr = inputVal.substring(0, inputVal.length -1)
			input.innerHTML = newstr;
		}
	})

	// % clicked
	percent.addEventListener('click', function(){
		var regExp = /[\+\-\×\÷\%]/,
			perItemArr = input.innerHTML.split(regExp),      
			perItem = perItemArr.pop();

		input.innerHTML = input.innerHTML.substring(0,input.innerHTML.length-perItem.length) + perItem/100;
			
	})

	// 1/x clicked
	x1.addEventListener('click', function(){
		var regExp = /[\+\-\×\÷\%]/,
			perItemArr = input.innerHTML.split(regExp),       
			perItem = perItemArr.pop();

		input.innerHTML = input.innerHTML.substring(0,input.innerHTML.length-perItem.length) + 1/perItem;
	})

},false)
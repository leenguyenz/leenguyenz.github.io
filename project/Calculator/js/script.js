		var input = document.getElementById('input');
		var number = document.getElementsByClassName('number')
		var operator = document.getElementsByClassName('operator');
		var xsqrt = document.getElementById('sqrt');
		var x2 = document.getElementById('x2');
		var n = document.getElementById('n');
		var percent = document.getElementById('percent');
		var x1 = document.getElementById('x1');
		var f5 = document.getElementById('f5');
		var result = document.getElementById('result');
		var back = document.getElementById('back');
		var display = false;

// refresh equation
f5.addEventListener('click',function(){
	input.innerHTML = '';
})
// add number
for(var i = 0; i < number.length; i++){
	number[i].addEventListener('click',function(){
		inputVal = input.innerHTML;
		lastVal = inputVal[inputVal.length - 1];
		if(display === false){
			input.innerHTML += this.innerHTML;
		}
		else if(display === true && lastVal === '+' || lastVal === '-' || lastVal === '×' || lastVal === '÷'){
			display = false;
			input.innerHTML += this.innerHTML;
		}
		else{
			display = false;
			input.innerHTML = "";
			input.innerHTML += this.innerHTML;
		}
	});
}

// add operator: + - × ÷
for(var i = 0; i < operator.length; i++){
	operator[i].addEventListener('click',function(){
		var inputVal= input.innerHTML;
		var lastVal = inputVal[inputVal.length - 1];

		if(lastVal === '+' || lastVal === '-' || lastVal === '×' || lastVal === '÷'){
			var newstr = inputVal.substring(0, inputVal.length -1) + this.innerHTML;
			input.innerHTML = newstr;
		}
		else if(inputVal == ''){
			input.innerHTML = '';
		}
		else{
			input.innerHTML += this.innerHTML;
		}
	})
}

// Event result clicked
result.addEventListener('click',function(){
	var inputVal = input.innerHTML;
	var lastVal = inputVal[inputVal.length - 1];
	var equation = inputVal;
	equation = equation.replace(/÷/g, '/').replace(/×/g, '*');

	//lastVal = operator => remove
	for(var i =0; i < operator.length; i++){
		if(operator[i].innerHTML.indexOf(lastVal) > -1){
			equation = equation.replace(/.$/, '');
		}
	}
	if(equation){
		input.innerHTML = eval(equation);
		
	}
	display = true;

	
})
//====================================================================================
// √ is clicked
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
	var regExp = /[\+\-\×\÷\%]/;
	var perItemArr = input.innerHTML.split(regExp);       
	var perItem = perItemArr.pop();  
	input.innerHTML = input.innerHTML.substring(0,input.innerHTML.length-perItem.length) + perItem/100;
		
})
// 1/x clicked
x1.addEventListener('click', function(){
		var regExp = /[\+\-\×\÷\%]/;
		var perItemArr = input.innerHTML.split(regExp);       
		var perItem = perItemArr.pop(); 
		input.innerHTML = input.innerHTML.substring(0,input.innerHTML.length-perItem.length) + 1/perItem;
})
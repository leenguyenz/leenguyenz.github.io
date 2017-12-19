function increment(id,skill){

	var currVal = document.getElementById(id);

	var width = 0;

	var time = setInterval(run,15);

	function run(){
		if(width < skill){
			width ++;
			currVal.style.width = width + '%';
			currVal.innerHTML = width + '%';
		}
		else{
			clearInterval(time);
		}
	}
}
increment(1,70);
increment(2,60);
increment(3,50);
increment(4,90);
increment(5,85);
increment(6,75);
increment(7,75);
increment(8,70);
increment(9,65);




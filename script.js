document.getElementById('show-element').onclick = function(){
	var element = document.getElementById('to-show');
	if(element.className == 'hide'){
		element.className = 'show';
	}else{
		element.className ='hide';
	}
}
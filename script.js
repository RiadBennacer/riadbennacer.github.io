var progressBar = (function(){
	
	let value = 1;
	const balloons = [];
	let margin_balloon_left = 18;
	
	// cache DOM
	const progress_container = document.getElementById("progress_container__js");
	const progBar = document.getElementById("progress_bar__js");
	const balloon = document.getElementById("balloon");
	const progress = document.getElementById("progress");
	
	
	add_balloons();
	_render();
	// events binding
	let id_interval = setInterval(function(){
//		if(value < 50){
			increase_by(1)
//		}
		
	}, 50)
	
	
	
	
	
	function chose_balloon(){
		balloons.forEach(function(bal, i){
			console.log(bal)
			bal.onclick = function(e) {
				bal.src = "lootbox3.png";
				balloons.forEach(function(ball, ii){
					if(i !== ii){
						ball.style.display = "none";
					}
				})
			}
		})
	}
	
	function add_balloons(){
		balloons.push(balloon);
		for(let i=1;i<5;i++){
			let bal = balloon.cloneNode(true);
			bal.style.left = (margin_balloon_left * (i+1)) + "%";
			progress_container.appendChild(bal);
			balloons.push(bal)
		}
	}
	
	function progress_to(val){
		if (!_setValue(val)){
			return false;
		}
		_render();
	}
	
	function increase_by(val){
		if (!_setValue(value + val)){
			return false;
		}
		_render();
	}
	
	function _setValue(val){
		if (val < 0 || val > 100){
			return false;
		}else{
			value = val;
			return true;
		}
	}
	
	function _render() {
		progBar.style.width = value + "%";
		progress.innerHTML = value + "%";
		if(value % margin_balloon_left == 0 && value != 100){
			let index = parseInt(value / margin_balloon_left) - 1;
//			if (index === balloons.length - 1){
//				balloons[index].classList.add("loot-release");
//				setTimeout(function() {
//					balloons[index].classList.add("balloon-pop");
//					balloons[index].src = "lootbox2.png";
//				}, 4000)
//				
//			}else{
			console.log(index);
			balloons[index].classList.add("release");
//			}
			
		}
		if(value === 100) {
			console.log(value)
			clearInterval(id_interval);
			chose_balloon();
		}
	}
	
})();

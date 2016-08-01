window.onload=function(){
	console.log("hello world");
	var audioBtn=document.getElementById('audioBtn'),
	audio=document.getElementsByTagName('audio')[0],
	toP2=document.getElementById('toP2'),
	pages=document.querySelectorAll('.page');
// audio
	audioBtn.addEventListener("click",function(){//touchstart
		if(audio.paused){
			audio.play();
			// audioBtn.style.animationPlayState="running";
			audioBtn.className="audio run";
		}else{
			audio.pause();
			// audioBtn.style.animationPlayState="paused";
			audioBtn.className="audio";
		}
	},false);
	audio.addEventListener("ended",function(){
		audioBtn.className="audio";
	});

// page2	
	toP2.addEventListener("click",function(){
		console.log(pages);
		pages[0].style.display="none";
		pages[1].style.display="block";
		pages[2].style.display="block";
		
		setTimeout(function(){
			pages[1].style.bottom="100%";
			pages[2].style.bottom="0";
		},2000);
		
	},false);

}
document.addEventListener("DOMContentLoaded",function(){
	var cacnut=document.querySelectorAll('.nut .fa'),
		cacinfo=document.querySelectorAll('.if');
		console.log(cacnut);
		console.log(cacinfo);
		for(var i=0;i<cacnut.length;i++){
			cacnut[i].addEventListener('click',function(){
				for (var i = 0; i < cacnut.length; i++) {
					cacnut[i].classList.remove('activenut');
				}
				this.classList.add('activenut');
				var nameif=this.getAttribute('data-name');
				for (var i = 0; i < cacinfo.length; i++) {
					cacinfo[i].classList.remove('active');
				}
				var ifhientai=document.querySelector('.'+nameif);
				ifhientai.classList.add('active');
			})
		}

},false)
 
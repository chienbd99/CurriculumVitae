document.addEventListener("DOMContentLoaded",function(){
	var cacnut=document.querySelectorAll('.nut .fa'),
		cacinfo=document.querySelectorAll('.if');
		console.log(cacnut);
		console.log(cacinfo);
		var trangthai = true;
		for(var i=0;i<cacnut.length;i++){
			cacnut[i].addEventListener('click',function(){
				if (trangthai==false) {
					return false;
				}
				var tranght=document.querySelector('.active');
				var nutht=document.querySelector('.activenut');
				var nameif=this.getAttribute('data-name');
				var trangtt=document.querySelector('.'+nameif);

				console.log(tranght);
				console.log(trangtt);
				if(trangtt==tranght){
					return false;
				}
				trangthai=false;


				if(nutht.offsetTop<this.offsetTop){
					tranght.classList.add('tranghtlen');
				}
				else{
					tranght.classList.add('tranghtxuong');
				}
				trangtt.classList.add("trangtt");
				var dem=0;
				var xuLyHienTaiKT = function(){
					tranght.classList.remove("active");
					tranght.classList.remove("tranghtlen");
					tranght.classList.remove("tranghtxuong");
					dem++;
					if(dem==2){
						trangthai=true;
					}
				}
				tranght.addEventListener("webkitAnimationEnd",xuLyHienTaiKT);
				var xuLyTiepTheoKT = function(){
					trangtt.classList.add("active");
					trangtt.classList.remove("trangtt");
					dem++;
					if(dem==2){
						trangthai=true;
					}

				}
				trangtt.addEventListener("webkitAnimationEnd",xuLyTiepTheoKT);
				for (var i = 0; i < cacnut.length; i++) {
					cacnut[i].classList.remove('activenut');
				}
				this.classList.add('activenut');
				
				for (var i = 0; i < cacinfo.length; i++) {
					cacinfo[i].classList.remove('active');
				}
				
			})

		}


},false)
 
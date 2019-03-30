function real(){
	var html=document.getElementsByTagName('html')[0];
	var currentW=document.documentElement.clientWidth;
	if( currentW >= 600){
		currentW=600
	}
	html.style.fontSize=100/375*currentW+'px'
}
real();
window.onresize=real;
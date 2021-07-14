		window.addEventListener('DOMContentLoaded', function(){

			document.getElementById('sidemenu').style.visibility = 'hidden';

			document.getElementById('sidemenu').addEventListener('transitionend', function(){

				if( document.getElementById('sidemenu').className !== 'view' ) {
					document.getElementById('sidemenu').style.visibility = 'hidden';
				}
			});

			window.addEventListener('scroll', function(){
				if( 350 < window.scrollY ) {
					document.getElementById('sidemenu').style.visibility = 'visible';
					document.getElementById('sidemenu').classList.add('view');

				} else if( 300 > window.scrollY ) {
					document.getElementById('sidemenu').classList.remove('view');
				}
			});
		});
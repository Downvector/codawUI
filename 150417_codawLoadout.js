window.addEventListener('load',eventWindowLoaded,false);
function eventWindowLoaded() {
	canvasApp();
}
function canvasApp() {
	var appState = 0;
	var keyPressList = {};

	document.onkeydown = function(e) {
        e=e?e:window.event;
        keyPressList[e.keyCode]=true;
    }
    
    document.onkeyup = function(e) {
        e=e?e:window.event;
        keyPressList[e.keyCode]=false;
        //console.log(e.keyCode);
    }

	function inputManager(e) {
		if(keyPressList[32]==true) {
			console.log(appState);
		} //spacebar

    	if(keyPressList[27]==true) {
			appState = 0;
		} //escape

		$('li').on('mouseover', function(e) {
		    $(this).css({
		    	'border':'1px solid #FF7F24	'
	    	});
		});

		$('li').on('mouseout', function() {
			$(this).css({
				'border' : '1px solid #000'
			});
		});

		$('li').on('click', function() {
			if ($(this).is("#first")) {
				appState=2;
				console.log(appState);
			} else {
				appState =1;
				console.log(appState);
			}
		});
	/*	$('#newItemsList').on('click', function() {
			if( $('#newItemsList').css('visibility') == 'hidden')
				$('#newItemsList').css('visibility','visible');
			else
				$('#newItemsList').css('visibility', 'hidden');
		}); */
	}

    function update() {
		switch (appState) {
			case 0: //default
				$("#containerDefault").css('visibility', 'visible');
				$("#containerNewItems").css('visibility', 'hidden');
				break;

			case 1: 
			    break;

			case 2: //newItems
				$("#containerDefault").css('visibility', 'hidden');
				$("#containerNewItems").css('visibility', 'visible');
			    break;

			case 3:
			    break;

			case 4:
			    break;

			case 5:
			    break;

			case 6:
			    break;

			case 7:
			    break;

			case 8:
			    break;

			case 9:
			    break;
		}
    }
	
    function draw() {

    }


	var FRAME_RATE=12;
	var intervalTime = 1000/FRAME_RATE;

	gameLoop();

	function gameLoop() {
		inputManager();
		update();
		draw();
		window.setTimeout(gameLoop,intervalTime);
	}
}
	var memory_array = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L'],
		memory_values = [],
		memory_tile_ids = [],
		tiles_flipped = 0;

		function newBoard(){
			var output = '';
			memory_array.shuffle();
			for(var i=0; i<memory_array.length; i++){
				output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+memory_array[i]+'\')"></div>';
			}
			document.getElementById('memory_board').innerHTML = output;
		}

		function memoryFlipTile(tile,val){

			if (tile.innerHTML == '' && memory_values.length < 2 ) {
				tile.style.background = 'white';
				tile.innerHTML = val;

				if ( memory_values.length == 0 ) {

					memory_values.push(val);
					memory_tile_ids.push(tile.id);

				} else if( memory_values.length == 1 ){

					memory_values.push(val);
					memory_tile_ids.push(tile.id);

					if(memory_values[0] == memory_values[1]){

						tiles_flipped += 2;
						memory_values = [];
						memory_tile_ids = [];

						if (tiles_flipped == memory_array.length) {
							alert(" You won the game .... clearing theboard please wait ... ");
							document.getElementById('memory_board').innerHTML = "";
							newBoard();
						}

					}else {

						function flipBack(){

							var card1 = document.getElementById(memory_tile_ids[0]);
								card1.style.background = 'url(bckgd.jpg) no-repeat'; 
								card1.innerHTML = '';
							var card2 = document.getElementById(memory_tile_ids[1]);
								card2.style.background = 'url(bckgd.jpg) no-repeat'; 
								card2.innerHTML = '';	

							memory_values = [];
							memory_tile_ids = [];	
						}

						setTimeout(flipBack, 700);

					}

				}
				


			}

		}

		newBoard();
		



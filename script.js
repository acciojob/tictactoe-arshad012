//your JS code here. If required.
const message = document.querySelector('.message');
let player_one = '';
let player_two = '';

let turn = true;
let sign = true;

function showBoard() {
	document.getElementById('inputDiv').style.display = 'none';
	player_one = document.getElementById('player1').value;
	player_two = document.getElementById('player2').value;
	
	const message = document.querySelector('.message');
	message.innerText = `${turn ? player_one : player_two}, you're up`;
	
	document.getElementById('board').style.display = 'block';
	value();
}

let grid = [
	[null,null,null],
	[null,null,null],
	[null,null,null]
];

let click_events_applied = false;

function value() {
    const allBoxes = document.querySelectorAll('#grid > div');
	let boxIndex = 0;

    for(let i=0; i<grid.length; i++) {
        for(let j=0; j<grid.length; j++) {
			allBoxes[boxIndex].innerText = grid[i][j];
			boxIndex++;
		}
    }

	const result = check_winner();
	if(result[0]) {
		message.innerText = `${!turn ? player_one : player_two}, congratulations you won!`;
		
	} else {
		message.innerText = `${turn ? player_one : player_two}, you're up`;
	}

	if(!click_events_applied) {
		click_events_applied = true;
		apply_click_event();
	}
}

function apply_click_event() {
	const allBoxes = document.querySelectorAll('#grid > div');
    allBoxes.forEach((box,i) => {
        box.addEventListener('click', () => {
			switch(i) {
				case 0:
					if(!grid[0][0]) {
						grid[0][0] = sign ? 'X' : 'O';
						sign = !sign;
						turn = !turn;
					}
					value();
					break;
				case 1:
					if(!grid[0][1]) {
						grid[0][1] = sign ? 'X' : 'O';
						sign = !sign;
						turn = !turn;
					}
					value();
					break;
				case 2:
					if(!grid[0][2]) {
						grid[0][2] = sign ? 'X' : 'O';
						sign = !sign;
						turn = !turn;
					}
					value();
					break;
				case 3:
					if(!grid[1][0]) {
						grid[1][0] = sign ? 'X' : 'O';
						sign = !sign;
						turn = !turn;
					}
					value();
					break;
				case 4:
					if(!grid[1][1]) {
						grid[1][1] = sign ? 'X' : 'O';
						sign = !sign;
						turn = !turn;
					}
					value();
					break;
				case 5:
					if(!grid[1][2]) {
						grid[1][2] = sign ? 'X' : 'O';
						sign = !sign;
						turn = !turn;
					}
					value();
					break;
				case 6:
					if(!grid[2][0]) {
						grid[2][0] = sign ? 'X' : 'O';
						sign = !sign;
						turn = !turn;
					}
					value();
					break;
				case 7:
					if(!grid[2][1]) {
						grid[2][1] = sign ? 'X' : 'O';
						sign = !sign;
						turn = !turn;
					}
					value();
					break;
				case 8:
					if(!grid[2][2]) {
						grid[2][2] = sign ? 'X' : 'O';
						sign = !sign;
						turn = !turn;
					}
					value();
					break;
			}
        })
    })
}


function check_winner() {
	for(let i=0; i<grid.length; i++) {
		if((grid[i][0] == grid[i][1] && grid[i][0] == grid[i][2]) && grid[i][0]) {
			return [true, [i,0],[i,1],[i,2]];
		}
	}

	for(let i=0; i<grid.length; i++) {
		if((grid[0][i] == grid[1][i] && grid[0][i] == grid[2][i]) && grid[0][i]) {
			return [true, [0,i],[1,i],[2,i]];
		}
	}
	
	if(grid[0][0] && (grid[0][0] == grid[1][1] && grid[0][0] == grid[2][2])) {
		return [true, [0,0],[1,1],[2,2]];
	}

	if(grid[0][2] && (grid[0][2] == grid[1][1] && grid[0][2] == grid[2][0])) {
		return [true, [0,2],[1,1],[2,0]];
	}

	return [false];
}



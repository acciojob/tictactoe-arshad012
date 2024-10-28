//your JS code here. If required.
const message = document.querySelector('.message');
let player_one = '';
let player_two = '';

let turn = true;
let sign = true;

const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
	e.preventDefault();
	let player_one = document.getElementById('player-1').value;
	let player_two = document.getElementById('player-2').value;
	
	// document.getElementById('player-1').value = '';
	// document.getElementById('player-2').value = '';
	// console.log(player_one);
	// console.log(player_two);
	
	
	message.innerText = `${turn ? player_one : player_two}, you are' up`;
	
	document.getElementById('board').style.display = 'block';

	value();
});

let grid = [
	[null,null,null],
	[null,null,null],
	[null,null,null]
];

let events_applies = false;
function value() {
    const allBoxes = document.querySelectorAll('#grid > div');
	let boxIndex = 0;

    for(let i=0; i<grid.length; i++) {
        for(let j=0; j<grid.length; j++) {
			allBoxes[boxIndex].innerText = grid[i][j];
			boxIndex++;
		}
    }

	message.innerText = `${turn ? player_one : player_two}, you are' up`;

	if(!events_applies) {
		events_applies = true;
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




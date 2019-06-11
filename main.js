let square1 = document.querySelector('.square1');
let coord_x = 0;
let coord_y = 0;

window.addEventListener('mouseover', move );

function move (e) {
    coord_x = Number(e.pageX);
    coord_y = Number(e.pageY);
    square1.style.top = (coord_y + delta_top) + 'px';
    square1.style.left = (coord_x + delta_left) + 'px';
}

window.removeEventListener('mouseup', move);


let coordinates_square1 = square1.getBoundingClientRect();
let top_square1 = Number(coordinates_square1.top);
let left_square1 =  Number(coordinates_square1.left);

let delta_top = coord_y - top_square1;
let delta_left = coord_x - left_square1;

console.log(top_square1);
console.log(left_square1);

console.log(coord_x);
console.log(coord_y);















let square1 = document.querySelector('.square1');
let square_big = document.querySelector('.square_big');
let coord_x = 0;
let coord_y = 0;
let mouse_button_press = 0;

let coordinates_square1 = square1.getBoundingClientRect();
let top_square1 = Number(coordinates_square1.top);
let left_square1 =  Number(coordinates_square1.left);
let bottom_square1 = Number(coordinates_square1.bottom);
let right_square1 =  Number(coordinates_square1.right);

let coordinates_square_big = square_big.getBoundingClientRect();
let top_square_big = Number(coordinates_square_big.top);
let bottom_square_big = Number(coordinates_square_big.bottom);
let left_square_big =  Number(coordinates_square_big.left);
let right_square_big =  Number(coordinates_square_big.right);

let delta_top = bottom_square1 - top_square1;
let delta_left = right_square1 - left_square1;

/*square_big.addEventListener('mousedown', function() {
    square_big.addEventListener('mouseover', move );
    square_big.removeEventListener('mouseup', move);
});*/


function move (e) {
    mouse_button_press = e.button;
    coord_x = e.offsetX;
    coord_y = e.offsetY;

   if (left_square1 >= left_square_big && right_square1 <= right_square_big &&
       top_square1 >= top_square_big && bottom_square1 <= bottom_square_big){

        square1.style.top = (coord_y - delta_top/2 ) + 'px';
        square1.style.left = (coord_x - delta_left/2 ) + 'px';}

console.log(coord_x);
console.log(coord_y);
    console.log( square1.style.top);
    console.log(square1.style.left);
}

square_big.addEventListener('mousemove', move );

console.log(delta_top);
console.log(delta_left);








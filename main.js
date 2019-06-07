let square1 = document.querySelector('.square1');
let square2 = document.querySelector('.square2');
let point = document.querySelector('.point');
let point2 = document.querySelector('.point2');


let cx = 0;
let cy = 0;
let number_x = 0;
let number_y = 0;

//delta for point2
let delta_right = document.body.getBoundingClientRect();


window.addEventListener('mousemove', function  (e) {

    cx = e.pageX;
    cy = e.pageY;
    number_x = 0 + cx;
    number_y = 0 + cy;
    if (number_x >= left_square1_number && number_x <=right_square1_number &&
        number_y >= top_square1_number && number_y <=bottom_square1_number){
        point.style.top = (number_y + delta_top) + 'px';
        point.style.left = (number_x + delta_left) + 'px';

        //2nd point navigation
        point2.style.bottom = (number_y + delta_top + delta_right.bottom + bottom_square2_number + margin_top) + 'px';
        point2.style.right = (number_x + delta_left + delta_right.right - right_square2_number) + 'px';
        console.log(point2.style.bottom);
        console.log(point2.style.right);
        console.log(cx);
    }
});

let top_square1_number = 0;
let right_square1_number = 0;
let bottom_square1_number = 0;
let left_square1_number = 0;

let coordinates_square1 = square1.getBoundingClientRect();
let top_square1 = coordinates_square1.top;
let right_square1 = coordinates_square1.right;
let bottom_square1 = coordinates_square1.bottom;
let left_square1 = coordinates_square1.left;

top_square1_number = 0 + top_square1;
right_square1_number = 0 + right_square1;
bottom_square1_number = 0 + bottom_square1;
left_square1_number = 0 + left_square1;


let top_square2_number = 0;
let right_square2_number = 0;
let bottom_square2_number = 0;
let left_square2_number = 0;

let coordinates_square2 = square2.getBoundingClientRect();
let top_square2 = coordinates_square2.top;
let right_square2 = coordinates_square2.right;
let bottom_square2 = coordinates_square2.bottom;
let left_square2 = coordinates_square2.left;

top_square2_number = 0 + top_square2;
right_square2_number = 0 + right_square2;
bottom_square2_number = 0 + bottom_square2;
left_square2_number = 0 + left_square2;



let delta_top = top_square2_number - top_square1_number;
let delta_left = left_square2_number - left_square1_number;

point.style.top = (number_y + delta_top) + 'px';
point.style.left = (number_x + delta_left) + 'px';

console.log(point.style.top);
console.log(point.style.left);

//console.log(e.pageX);
console.log(number_y);


let margin_top =  bottom_square1_number - top_square2_number;



















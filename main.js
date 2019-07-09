let left1 = document.querySelector('#left1');
let left2 = document.querySelector('#left2');
let left3 = document.querySelector('#left3');
let left4 = document.querySelector('#left4');
let right1 = document.querySelector('#right1');
let right2 = document.querySelector('#right2');
let right3 = document.querySelector('#right3');
let right4 = document.querySelector('#right4');
let life_left1 = 7;
let life_left2 = 7;
let life_left3 = 7;
let life_left4 = 7;
let life_right1 = 7;
let life_right2 = 7;
let life_right3 = 7;
let life_right4 = 7;

let timeout = Math.floor((Math.random()+0.5)*1000);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}



function buttle_left1 () {

        let fire_left1 =  getRandomInt(1, 5);
        if (fire_left1 ===  1 && life_right1 !==0 && life_left1 !==0) {
            life_right1 --;
            console.log('r1'+life_right1);
            right1.innerHTML = life_right1;
        }
        if (fire_left1 ===  2 && life_right2 !==0 && life_left1 !==0) {
            life_right2 --;
            console.log('r2'+life_right2);
            right2.innerHTML = life_right2;
        }
        if (fire_left1 ===  3 && life_right3 !==0 && life_left1 !==0) {
            life_right3 --;
            console.log('r3'+life_right3);
            right3.innerHTML = life_right3;
        }
        if (fire_left1 ===  4 && life_right4 !==0 && life_left1 !==0) {
            life_right4 --;
            console.log('r4'+life_right4);
            right4.innerHTML = life_right4;
        }
}

for (let i = 1; i<=56; i++) {

    console.log(timeout);
setTimeout(  buttle_left1, timeout);
}


function buttle_left2 () {

    let fire_left2 =  getRandomInt(1, 5);
    if (fire_left2 ===  1 && life_right1 !==0 && life_left2 !==0) {
        life_right1 --;
        console.log('2r1'+life_right1);
        right1.innerHTML = life_right1;
    }
    if (fire_left2 ===  2 && life_right2 !==0 && life_left2 !==0) {
        life_right2 --;
        console.log('2r2'+life_right2);
        right2.innerHTML = life_right2;
    }
    if (fire_left2 ===  3 && life_right3 !==0 && life_left2 !==0) {
        life_right3 --;
        console.log('2r3'+life_right3);
        right3.innerHTML = life_right3;
    }
    if (fire_left2 ===  4 && life_right4 !==0 && life_left2 !==0) {
        life_right4 --;
        console.log('2r4'+life_right4);
        right4.innerHTML = life_right4;
    }
}

for (let i = 1; i<=56; i++) {

    console.log(timeout);
    setTimeout(  buttle_left2, timeout);
}

function buttle_left3 () {

    let fire_left3 =  getRandomInt(1, 5);
    if (fire_left3 ===  1 && life_right1 !==0) {
        life_right1 --;
        console.log('3r1'+life_right1);
        right1.innerHTML = life_right1;
    }
    if (fire_left3 ===  2 && life_right2 !==0) {
        life_right2 --;
        console.log('3r2'+life_right2);
        right2.innerHTML = life_right2;
    }
    if (fire_left3 ===  3 && life_right3 !==0) {
        life_right3 --;
        console.log('3r3'+life_right3);
        right3.innerHTML = life_right3;
    }
    if (fire_left3 ===  4 && life_right4 !==0) {
        life_right4 --;
        console.log('3r4'+life_right4);
        right4.innerHTML = life_right4;
    }
}

for (let i = 1; i<=56; i++) {

    console.log(timeout);
    setTimeout(  buttle_left3, timeout);
}

function buttle_left4 () {

    let fire_left4 =  getRandomInt(1, 5);
    if (fire_left4 ===  1 && life_right1 !==0) {
        life_right1 --;
        console.log('4r1'+life_right1);
        right1.innerHTML = life_right1;
    }
    if (fire_left4 ===  2 && life_right2 !==0) {
        life_right2 --;
        console.log('4r2'+life_right2);
        right2.innerHTML = life_right2;
    }
    if (fire_left4 ===  3 && life_right3 !==0) {
        life_right3 --;
        console.log('4r3'+life_right3);
        right3.innerHTML = life_right3;
    }
    if (fire_left4 ===  4 && life_right4 !==0) {
        life_right4 --;
        console.log('4r4'+life_right4);
        right4.innerHTML = life_right4;
    }
}

for (let i = 1; i<=56; i++) {

    console.log(timeout);
    setTimeout(  buttle_left4, timeout);
}


function buttle_right1 () {

    let fire_right1 =  getRandomInt(1, 5);
    if (fire_right1 ===  1 && life_left1 !==0) {
        life_left1 --;
        console.log('4l1'+life_left1);
        left1.innerHTML = life_left1;
    }
    if (fire_right1 ===  2 && life_left2 !==0) {
        life_left2 --;
        console.log('4l2'+life_left2);
        left2.innerHTML = life_left2;
    }
    if (fire_right1 ===  3 && life_left3 !==0) {
        life_left3 --;
        console.log('4l3'+life_left3);
        left3.innerHTML = life_left3;
    }
    if (fire_right1 ===  4 && life_left4 !==0) {
        life_left4 --;
        console.log('4l4'+life_left4);
        left4.innerHTML = life_left4;
    }
}

for (let i = 1; i<=56; i++) {

    console.log(timeout);
    setTimeout(  buttle_right1, timeout);
}


function buttle_right2 () {

    let fire_right2 =  getRandomInt(1, 5);
    if (fire_right2 ===  1 && life_left1 !==0) {
        life_left1 --;
        console.log('4l1'+life_left1);
        left1.innerHTML = life_left1;
    }
    if (fire_right2 ===  2 && life_left2 !==0) {
        life_left2 --;
        console.log('4l2'+life_left2);
        left2.innerHTML = life_left2;
    }
    if (fire_right2 ===  3 && life_left3 !==0) {
        life_left3 --;
        console.log('4l3'+life_left3);
        left3.innerHTML = life_left3;
    }
    if (fire_right2 ===  4 && life_left4 !==0) {
        life_left4 --;
        console.log('4l4'+life_left4);
        left4.innerHTML = life_left4;
    }
}

for (let i = 1; i<=56; i++) {

    console.log(timeout);
    setTimeout(  buttle_right2, timeout);
}


function buttle_right3 () {

    let fire_right3 =  getRandomInt(1, 5);
    if (fire_right3 ===  1 && life_left1 !==0) {
        life_left1 --;
        console.log('4l1'+life_left1);
        left1.innerHTML = life_left1;
    }
    if (fire_right3 ===  2 && life_left2 !==0) {
        life_left2 --;
        console.log('4l2'+life_left2);
        left2.innerHTML = life_left2;
    }
    if (fire_right3 ===  3 && life_left3 !==0) {
        life_left3 --;
        console.log('4l3'+life_left3);
        left3.innerHTML = life_left3;
    }
    if (fire_right3 ===  4 && life_left4 !==0) {
        life_left4 --;
        console.log('4l4'+life_left4);
        left4.innerHTML = life_left4;
    }
}

for (let i = 1; i<=56; i++) {

    console.log(timeout);
    setTimeout(  buttle_right3, timeout);
}





function buttle_right4 () {

    let fire_right4 =  getRandomInt(1, 5);
    if (fire_right4 ===  1 && life_left1 !==0) {
        life_left1 --;
        console.log('4l1'+life_left1);
        left1.innerHTML = life_left1;
    }
    if (fire_right4 ===  2 && life_left2 !==0) {
        life_left2 --;
        console.log('4l2'+life_left2);
        left2.innerHTML = life_left2;
    }
    if (fire_right4 ===  3 && life_left3 !==0) {
        life_left3 --;
        console.log('4l3'+life_left3);
        left3.innerHTML = life_left3;
    }
    if (fire_right4 ===  4 && life_left4 !==0) {
        life_left4 --;
        console.log('4l4'+life_left4);
        left4.innerHTML = life_left4;
    }
}

for (let i = 1; i<=56; i++) {

    console.log(timeout);
    setTimeout(  buttle_right4, timeout);
}












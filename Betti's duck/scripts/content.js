function randomBool() {
  let num = Math.floor(Math.random() * 10);
  if (num < 7) {
    return false;
  }
  else {
    return true;
  }
}

let duck = document.createElement('img');
let step = false;

const init = function() {
  try {
    const searchForm = document.getElementById('searchform');
    duck.style.position = 'absolute';
    duck.id = "duckyduck"
    duck.style.right = '0px';
    duck.style.top = '0px';
    duck.src = 'https://i.ibb.co/YZZWJV6/duck-128.png';
    duck.style.width = '48px';
    duck.style.height = '48px';
    duck.style.transition = 'all .5s';
    duck.style.scale = '1.01'
    searchForm.appendChild(duck);
  }
  catch {}
}
function move() {
  let right = parseInt(duck.style.right.replace('px', ''));
  if (randomBool()) {
    if (right > 4) {
      right -= 5;
      duck.style.transform = 'rotateY(0deg)'
    }
    else {
      right -= right;
    }
  }
  else {
    right += 5;
    duck.style.transform = 'rotateY(180deg)'
  }
  if (step) {
    duck.src = 'https://i.ibb.co/pbLxG9D/duck-step-128.png';
    step = !step;
  }
  else {
    duck.src = 'https://i.ibb.co/YZZWJV6/duck-128.png';
    step = !step;
  }
  duck.style.right = `${right}px`;
  setTimeout(move, 500);
}
init();
move();
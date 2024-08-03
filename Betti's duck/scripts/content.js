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
const grassTexture = 'https://i.ibb.co/PChPfhS/grass.png';

function init() {
  try {
    const searchForm = document.getElementById('searchform');

    for (let i = 0; i < 30; i++) {
      let grass = document.createElement('img');
      grass.style.position = 'absolute';
      grass.style.width = '200px';
      grass.style.left = `${i * 200}px`;
      grass.style.bottom = '-10px';
      grass.style.zIndex = '999';
      grass.style.marginLeft = `-${i * 6}px`;
      grass.style.padding = '0';
      grass.src = grassTexture;
      searchForm.appendChild(grass);
    }

    duck.style.position = 'absolute';
    duck.id = "duckyduck"
    duck.style.right = '0px';
    duck.style.top = '0px';
    duck.src = 'https://i.ibb.co/YZZWJV6/duck-128.png';
    duck.style.width = '48px';
    duck.style.height = '48px';
    duck.style.transition = 'all .5s';
    duck.style.scale = '1.01';
    duck.style.zIndex = '998';
    duck.style.cursor = 'grab';
    searchForm.appendChild(duck);
  }
  catch {}
}

let index = 0;
let moveIndex = 5;
let interval = 500;
let bmove = false;
let step = false;

function Duck() {
  let right = parseInt(duck.style.right.replace('px', ''));
  duck.style.cursor = 'grab';

  if (right < 0) {
    duck.style.right = `5px`;
    bmove = !bmove;
  }
  else if (right > window.width - 31) {
    duck.style.right = `${window.width - 30}px`;
    bmove = !bmove;
  }
  else {
    if (step) {
      duck.src = 'https://i.ibb.co/pbLxG9D/duck-step-128.png';
    }
    else {
      duck.src = 'https://i.ibb.co/YZZWJV6/duck-128.png';
    }
    step = !step;
    if (index < moveIndex) {
      if (bmove) {
        duck.style.transform = 'rotateY(0deg)';
        duck.style.right = `${right - 5}px`;
      }
      else {
        duck.style.transform = 'rotateY(180deg)';
        duck.style.right = `${right + 5}px`;
      }
      index++;
    }
    else {
      if (bmove) {
        duck.style.transform = 'rotateY(0deg)';
        duck.style.right = `${right - 5}px`;
      }
      else {
        duck.style.transform = 'rotateY(180deg)';
        duck.style.right = `${right + 5}px`;
      }
      index = 0;
      bmove = randomBool();
    }
  }
  if (index === moveIndex) {
    moveIndex = 10;
    interval = 500;
  }
  duck.style.scale = '1';
  setTimeout(Duck, interval);
}

duck.onclick = () => {
  duck.style.scale = '.8';
  index = 0;
  moveIndex = 100;
  interval = 50;
  duck.style.cursor = 'grabbing';
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    index = 0;
    moveIndex = 100;
    interval = 50;
    }
});

init();
Duck();
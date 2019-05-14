let cps = 0;
let coinTotal = 0;
let maxCoins = 0;
let clicks = 0;
let resources = [
  {
    name: 'Miner',
    identity: 'Miner',
    owned: 0,
    cps: 1,
    cost: 50,
    img: '/Users/avtargrewal/Decode/incremental-game-project/imgs/miner.jpeg',
  },
  {
    name: 'Computer',
    identity: 'Computer',
    owned: 0,
    cps: 10,
    cost: 500,
    img: '/Users/avtargrewal/Decode/incremental-game-project/imgs/computer.png',
  },
  {
    name: 'Data Center',
    identity: 'DataCenter',
    owned: 0,
    cps: 100,
    cost: 2000,
    img:
      '/Users/avtargrewal/Decode/incremental-game-project/imgs/datacenter.png',
  },
  {
    name: 'Super Computer',
    identity: 'SuperComputer',
    owned: 0,
    cps: 1000,
    cost: 50000,
    img:
      '/Users/avtargrewal/Decode/incremental-game-project/imgs/supercomputer.jpg',
  },
  {
    name: 'Quantam Computer',
    identity: 'QuantamComputer',
    owned: 0,
    cps: 10000,
    cost: 200000,
    img:
      '/Users/avtargrewal/Decode/incremental-game-project/imgs/quantumcomputer.jpg',
  },
  {
    name: 'AI',
    identity: 'AI',
    owned: 0,
    cps: 100000,
    cost: 5000000,
    img: '/Users/avtargrewal/Decode/incremental-game-project/imgs/AI.png',
  },
  {
    name: 'Matrioshka brain',
    identity: 'Matrioshkabrain',
    owned: 0,
    cps: 1000000,
    cost: 20000000,
    img:
      '/Users/avtargrewal/Decode/incremental-game-project/imgs/matrioshka.jpg',
  },
  {
    name: 'Simulation',
    identity: 'Simulation',
    owned: 0,
    cps: 0,
    cost: 1000000000,
    img:
      '/Users/avtargrewal/Decode/incremental-game-project/imgs/simulation.jpg',
  },
];
let achievementBox1 = document.getElementById('achievement1');
let achievementBox2 = document.getElementById('achievement2');
let achievementBox3 = document.getElementById('achievement3');
let achievementBox4 = document.getElementById('achievement4');
let achievementBox5 = document.getElementById('achievement5');
let achievementBox6 = document.getElementById('achievement6');
let achievements = [
  {
    message: 'Entrepreneur!!!',
    isComplete: function() {
      if (resources[0].owned >= 5) {
        //achievementBox.className = 'achievement';
        let a = document.createTextNode(achievements[0].message);
        achievementBox1.appendChild(a);
        achievementBox1.className = 'achievementShow';
        achievements[0].seen = true;
      }
    },
    seen: false,
  },
  {
    message: 'From rags to riches',
    isComplete: function() {
      if (maxCoins >= 1000) {
        let a = document.createTextNode(achievements[1].message);
        achievementBox2.appendChild(a);
        achievementBox2.className = 'achievementShow';
        achievements[1].seen = true;
      }
    },
    seen: false,
  },
  {
    message: 'Click madness',
    isComplete: function() {
      if (clicks >= 100) {
        let a = document.createTextNode(achievements[2].message);
        achievementBox3.appendChild(a);
        achievementBox3.className = 'achievementShow';
        achievements[2].seen = true;
      }
    },
    seen: false,
  },
  {
    message: 'Money rocket',
    isComplete: function() {
      if (cps >= 1000) {
        let a = document.createTextNode(achievements[3].message);
        achievementBox4.appendChild(a);
        achievementBox4.className = 'achievementShow';
        achievements[3].seen = true;
      }
    },
    seen: false,
  },
  {
    message: 'Singularity',
    isComplete: function() {
      if (resources[5].owned >= 1) {
        let a = document.createTextNode(achievements[4].message);
        achievementBox5.appendChild(a);
        achievementBox5.className = 'achievementShow';
        achievements[4].seen = true;
      }
    },
    seen: false,
  },
  {
    message: 'Ready for simulation',
    isComplete: function() {
      if (maxCoins >= resources[7].cost) {
        let a = document.createTextNode(achievements[5].message);
        achievementBox6.appendChild(a);
        achievementBox6.className = 'achievementShow';
        achievements[5].seen = true;
      }
    },
    seen: false,
  },
];

function playCoinSound() {
  let audio = new Audio(
    '/Users/avtargrewal/Decode/incremental-game-project/sounds/coin.mp3'
  );
  audio.play();
}

function playResSound() {
  let audio = new Audio(
    '/Users/avtargrewal/Decode/incremental-game-project/sounds/buy.mp3'
  );
  audio.play();
}

function printCoin() {
  let million = 1000000;
  let billion = 1000000000;
  if (coinTotal <= million) {
    document.getElementById('coinCount').textContent =
      Math.round(coinTotal) + ' Coins';
  } else if (coinTotal > million && coinTotal < billion) {
    document.getElementById('coinCount').textContent =
      Math.round((coinTotal / million) * 100) / 100 + 'M Coins';
  } else {
    document.getElementById('coinCount').textContent =
      Math.round((coinTotal / billion) * 100) / 100 + 'B Coins';
  }
}

let coinButton = document.querySelector('.coinButton');
let coinDisplay = document.querySelector('.coinDisplay');
let first = document.querySelector('.console');
let shop = document.querySelector('.shop');
let inventory = document.querySelector('.inventory');
coinButton.addEventListener('click', () => {
  if (cps <= 1) {
    clicks = clicks + 1;
    playCoinSound();
    coinTotal = coinTotal + 1;
    maxCoins = maxCoins + 1;
    printCoin();
  } else {
    clicks = clicks + 1;
    playCoinSound();
    coinTotal = coinTotal + cps;
    maxCoins = maxCoins + cps;
    printCoin();
  }
});

function restart() {
  document.location.reload();
}

function createResource(i) {
  let resource = document.createElement('div');
  resource.className = 'resourceButton';
  let circle = document.createElement('div');
  circle.className = 'circle';
  circle.textContent = resources[i].owned;
  let picture = document.createElement('img');
  picture.src = resources[i].img;
  let textdiv = document.createElement('div');
  textdiv.className = 'buytext';
  let text = document.createElement('span');
  let t = document.createTextNode(resources[i].name);
  text.appendChild(t);
  let logo = document.createElement('img');
  logo.src = 'imgs/coin.png';
  let cost = document.createElement('p');
  let c = document.createTextNode(resources[i].cost);
  cost.appendChild(c);
  textdiv.appendChild(text);
  textdiv.appendChild(logo);
  textdiv.appendChild(cost);
  resource.appendChild(picture);
  resource.appendChild(textdiv);
  resource.appendChild(circle);
  resource.addEventListener('click', () => {
    if (i <= 6) {
      buyResource(resources[i]);
      clicks = clicks + 1;
      playResSound();
    } else if ((i = 7)) {
      restart();
    }
  });
  return resource;
}

function createResources() {
  for (let i = 0; i < resources.length; i++) {
    const resourceElement = createResource(i);
    const resource = resources[i];
    resource.element = resourceElement;
    shop.appendChild(resourceElement);
  }
}

function updateResources() {
  for (let i = 0; i < resources.length; i++) {
    const obj = resources[i].element;
    if (maxCoins >= resources[i].cost / 2) {
      obj.classList.add('resourceButtonVis');
    }
    if (coinTotal >= resources[i].cost) {
      obj.classList.add('resourceButtonAvailable');
    }
    if (resources[i].owned > 0) {
      let circle = obj.querySelector('.circle');
      circle.textContent = resources[i].owned;
    }
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function bonusCoin() {
  let body = document.querySelector('body');
  let btn = document.getElementById('bonus');
  let availW = body.offsetWidth - 150;
  let availH = body.offsetHeight - 150;
  btn.style.top = Math.round(Math.random() * availH);
  btn.style.left = Math.round(Math.random() * availW);
  btn.className = 'bonusCoinShow';
  let bCoin = document.getElementById('bonus');
  bCoin.addEventListener('click', () => {
    clicks = clicks + 1;
    let x = getRandomInt(2, 10) * cps;
    coinTotal = coinTotal + x;
    maxCoins = maxCoins + x;
    playCoinSound();
    printCoin();
    dissapearCoin();
  });
}

function dissapearCoin() {
  let bCoin = document.getElementById('bonus');
  bCoin.className = 'bonusCoin';
}

function buyResource(resource) {
  if (coinTotal >= resource.cost) {
    coinTotal = coinTotal - resource.cost;
    resource.owned = resource.owned + 1;
    cps = cps + resource.cps;
    let picture = document.createElement('img');
    picture.src = resource.img;
    let row = document.querySelector(`.${resource.identity}`);
    if (resource.owned <= 20) {
      row.appendChild(picture);
    }
    printCoin();
  }
}

function addCoin() {
  coinTotal = coinTotal + cps / 100;
  maxCoins = maxCoins + cps / 100;
  printCoin();
}

function changeBackground() {
  if (cps > 1000) {
    first.className = 'console1';
  }
  if (cps > 100000) {
    first.className = 'console2';
  }
  if (cps > 1000000) {
    first.className = 'console3';
  }
}

function checkAchievements() {
  for (let i = 0; i < achievements.length; i++) {
    if (achievements[i].seen === false) {
      achievements[i].isComplete();
    }
  }
}
function setPointer() {
  x = event.screenX;
  y = event.screenY;
}

createResources();

setInterval(() => {
  updateResources();
  addCoin();
  changeBackground();
  checkAchievements();
}, 10);

setInterval(() => {
  setTimeout(() => {
    bonusCoin();
    setTimeout(() => {
      dissapearCoin();
    }, 10000);
  }, getRandomInt(0, 60000));
}, 40000);

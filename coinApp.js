let cps = 0;
let coinTotal = 0;
let maxCoins = 0;
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
let achievements = [
  {
    message: 'Entrepreneur',
    isComplete: function() {},
    seen: false,
  },
  {
    message: 'From rags to riches',
    isComplete: function() {},
    seen: false,
  },
  {
    message: 'Click madness',
    isComplete: function() {},
    seen: false,
  },
  {
    message: 'Money rocket',
    isComplete: function() {},
    seen: false,
  },
  {
    message: 'Singularity',
    isComplete: function() {},
    seen: false,
  },
  {
    message: 'Ready for simulation',
    isComplete: function() {},
    seen: false,
  },
];

let coinButton = document.querySelector('.coinButton');
let coinDisplay = document.querySelector('.coinDisplay');
let first = document.querySelector('.console');
let shop = document.querySelector('.shop');
let inventory = document.querySelector('.inventory');
coinButton.addEventListener('click', () => {
  if (cps <= 1) {
    coinTotal = coinTotal + 1;
    maxCoins = maxCoins + 1;
    document.getElementById('coinCount').textContent =
      Math.round(coinTotal) + ' Coins';
  } else {
    coinTotal = coinTotal + cps;
    maxCoins = maxCoins + cps;
    document.getElementById('coinCount').textContent =
      Math.round(coinTotal) + ' Coins';
  }
});

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
    buyResource(resources[i]);
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
    document.getElementById('coinCount').textContent = coinTotal + ' Coins';
  }
}

function addCoin() {
  coinTotal = coinTotal + cps / 100;
  document.getElementById('coinCount').textContent =
    Math.round(coinTotal) + ' Coins';
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

createResources();

setInterval(() => {
  updateResources();
  addCoin();
  changeBackground();
}, 10);

function generate() {
  const backgrounds = [
    'Black.png',
    'Blue.png',
    'Green.png',
    'Grey.png',
    'Purple.png',
  ];
  const props = ['Blood.png', 'Colors.png', 'Leaves.png', 'Numbers.png'];
  const colors = [
    'Black.png',
    'Blue.png',
    'Green.png',
    'Red.png',
    'Yellow.png',
  ];
  const eyes = ['Small.png', 'Wide.png'];
  const pupils = ['Black.png', 'Green.png', 'Purple.png', 'Red.png'];
  const mouths = [
    'O-Black.png',
    'O-Yellow.png',
    'Sad-Blue.png',
    'Sad-Purple.png',
    'Straight-Blue.png',
  ];

  const canvas = document.getElementById('nft');
  const ctx = canvas.getContext('2d');

  // create new image objects
  const backgroundImage = new Image();
  const propImage = new Image();
  const colorImage = new Image();
  const eyeImage = new Image();
  const pupilImage = new Image();
  const mouthImage = new Image();

  // Randomly pick each attribute
  const background =
    backgrounds[Math.floor(Math.random() * backgrounds.length)];
  const prop = props[Math.floor(Math.random() * props.length)];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const eye = eyes[Math.floor(Math.random() * eyes.length)];
  const pupil = pupils[Math.floor(Math.random() * pupils.length)];
  const mouth = mouths[Math.floor(Math.random() * mouths.length)];

  // set image sources
  const backgroundImagePath = '/images/Background/';
  const propImagePath = '/images/Props/';
  const colorImagePath = '/images/Color/';
  const eyeImagePath = '/images/Eyes/';
  const pupilImagePath = '/images/Pupils/';
  const mouthImagePath = '/images/Mouth/';

  backgroundImage.src = backgroundImagePath + background;
  propImage.src = propImagePath + prop;
  colorImage.src = colorImagePath + color;
  eyeImage.src = eyeImagePath + eye;
  pupilImage.src = pupilImagePath + pupil;
  mouthImage.src = mouthImagePath + mouth;

  // wait for imagse to load before rendering them
  backgroundImage.addEventListener('load', function () {
    ctx.drawImage(backgroundImage, 0, 0, 640, 360);
  });

  propImage.addEventListener('load', function () {
    ctx.drawImage(propImage, 0, 0, 640, 360);
  });
  colorImage.addEventListener('load', function () {
    ctx.drawImage(colorImage, 0, 0, 640, 360);
  });

  eyeImage.addEventListener('load', function () {
    ctx.drawImage(eyeImage, 0, 0, 640, 360);
  });
  pupilImage.addEventListener('load', function () {
    ctx.drawImage(pupilImage, 0, 0, 640, 360);
  });

  mouthImage.addEventListener('load', function () {
    ctx.drawImage(mouthImage, 0, 0, 640, 360);
  });
}

function download() {
  const canvas = document.getElementById('nft');
  const canvasUrl = canvas.toDataURL();
  const createEl = document.createElement('a');
  createEl.href = canvasUrl;

  // This is the name of our downloaded file
  createEl.download = 'download-this-canvas';
  createEl.click();
  createEl.remove();
}

const ATTRIBUTE = 7;

const backgrounds = [
  'Black.png',
  'Blue.png',
  'Green.png',
  'Grey.png',
  'Purple.png',
];
const props = ['Blood.png', 'Colors.png', 'Leaves.png', 'Numbers.png'];
const colors = ['Black.png', 'Blue.png', 'Green.png', 'Red.png', 'Yellow.png'];
const eyes = ['Small.png', 'Wide.png'];
const pupils = ['Black.png', 'Green.png', 'Purple.png', 'Red.png'];
const mouths = [
  'O-Black.png',
  'O-Yellow.png',
  'Sad-Blue.png',
  'Sad-Purple.png',
  'Straight-Blue.png',
];
const accessories = ['Glasses.png', '3D-Glasses.png', 'Nerd.png'];

function generate() {
  const canvas = document.getElementById('display');
  const ctx = canvas.getContext('2d');

  // create new image objects
  const backgroundImage = new Image();
  const propImage = new Image();
  const colorImage = new Image();
  const eyeImage = new Image();
  const pupilImage = new Image();
  const mouthImage = new Image();
  const accessoryImage = new Image();

  // Randomly pick each attribute
  const background =
    backgrounds[Math.floor(Math.random() * backgrounds.length)];
  const prop = props[Math.floor(Math.random() * props.length)];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const eye = eyes[Math.floor(Math.random() * eyes.length)];
  const pupil = pupils[Math.floor(Math.random() * pupils.length)];
  const mouth = mouths[Math.floor(Math.random() * mouths.length)];
  const accessory = accessories[Math.floor(Math.random() * accessories.length)];

  // set image sources
  const backgroundImagePath = '/images/Background/';
  const propImagePath = '/images/Props/';
  const colorImagePath = '/images/Color/';
  const eyeImagePath = '/images/Eyes/';
  const pupilImagePath = '/images/Pupils/';
  const mouthImagePath = '/images/Mouth/';
  const accessoryImagePath = '/images/Accessories/';

  backgroundImage.src = backgroundImagePath + background;
  propImage.src = propImagePath + prop;
  colorImage.src = colorImagePath + color;
  eyeImage.src = eyeImagePath + eye;
  pupilImage.src = pupilImagePath + pupil;
  mouthImage.src = mouthImagePath + mouth;
  accessoryImage.src = accessoryImagePath + accessory;

  // load images
  function loadImages() {
    let count = 0;

    // draw images
    function drawImages() {
      // increment loaded image count until they're all loaded
      count++;

      // when all images are loaded start to draw them in order
      if (count === ATTRIBUTE) {
        ctx.drawImage(backgroundImage, 0, 0, 640, 360);
        ctx.drawImage(propImage, 0, 0, 640, 360);
        ctx.drawImage(colorImage, 0, 0, 640, 360);
        ctx.drawImage(eyeImage, 0, 0, 640, 360);
        ctx.drawImage(pupilImage, 0, 0, 640, 360);
        ctx.drawImage(mouthImage, 0, 0, 640, 360);
        ctx.drawImage(accessoryImage, 0, 0, 640, 360);
      }
    }

    // when an image loads try to draw them
    backgroundImage.addEventListener('load', drawImages);
    propImage.addEventListener('load', drawImages);
    colorImage.addEventListener('load', drawImages);
    eyeImage.addEventListener('load', drawImages);
    pupilImage.addEventListener('load', drawImages);
    mouthImage.addEventListener('load', drawImages);
    accessoryImage.addEventListener('load', drawImages);
  }

  loadImages();

  // Set output to match generated results
  const backgroundOutput = document.getElementById('background');
  const propOutput = document.getElementById('prop');
  const colorOutput = document.getElementById('color');
  const eyeOutput = document.getElementById('eye');
  const pupilOutput = document.getElementById('pupil');
  const mouthOutput = document.getElementById('mouth');
  const accessoryOutput = document.getElementById('accessory');

  backgroundOutput.textContent = background.substring(
    0,
    background.indexOf('.')
  );
  propOutput.textContent = prop.substring(0, prop.indexOf('.'));
  colorOutput.textContent = color.substring(0, color.indexOf('.'));
  eyeOutput.textContent = eye.substring(0, eye.indexOf('.'));
  pupilOutput.textContent = pupil.substring(0, pupil.indexOf('.'));
  mouthOutput.textContent = mouth.substring(0, mouth.indexOf('.'));
  accessoryOutput.textContent = accessory.substring(0, accessory.indexOf('.'));
}

function download() {
  const canvas = document.getElementById('display');
  const canvasUrl = canvas.toDataURL();
  const createEl = document.createElement('a');
  createEl.href = canvasUrl;

  // This is the name of our downloaded file
  createEl.download = 'your-avatar';
  createEl.click();
  createEl.remove();
}

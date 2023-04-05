function generate() {
  const backgrounds = [];

  const canvas = document.getElementById('nft');
  const ctx = canvas.getContext('2d');
  // create new image object
  const img = new Image();
  const img2 = new Image();

  // set image source
  img.src = '/images/Background/Grey.png';
  img2.src = '/images/Color/Green.png';

  // wait for image to load before rendering it
  img.addEventListener('load', function () {
    ctx.drawImage(img, 0, 0, 640, 360);
  });

  img2.addEventListener('load', function () {
    ctx.drawImage(img2, 0, 0, 640, 360);
  });
}

function download() {
  const canvas = document.getElementById('nft');
  const canvasUrl = canvas.toDataURL('/output');
  const createEl = document.createElement('a');
  createEl.href = canvasUrl;

  // This is the name of our downloaded file
  createEl.download = 'download-this-canvas';
  createEl.click();
  createEl.remove();
}

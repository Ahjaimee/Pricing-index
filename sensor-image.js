(function () {
  const sensorImage = document.querySelector('[data-sensor-image]');
  if (!sensorImage) {
    return;
  }

  sensorImage.src = 'Picture6.png';
  sensorImage.decoding = 'async';
  sensorImage.loading = 'lazy';
})();

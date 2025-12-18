(function () {
  const sensorImages = document.querySelectorAll('[data-sensor-image]');
  if (!sensorImages.length) {
    return;
  }

  sensorImages.forEach((image) => {
    image.src = 'Cogvis fall detection sensor.png';
    image.decoding = 'async';
    image.loading = 'lazy';
  });
})();

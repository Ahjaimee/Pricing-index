(function () {
  const sensorImages = document.querySelectorAll('[data-sensor-image]');
  if (!sensorImages.length) {
    return;
  }

  sensorImages.forEach((image) => {
    image.src = 'Picture6.png';
    image.decoding = 'async';
    image.loading = 'lazy';
  });
})();

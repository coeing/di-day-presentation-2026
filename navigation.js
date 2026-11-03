document.addEventListener('keydown', (event) => {
  const directions = {
    ArrowLeft: '.slide-nav-prev[href]',
    ArrowRight: '.slide-nav-next[href]'
  };
  const selector = directions[event.key];

  if (!selector) {
    return;
  }

  const target = document.querySelector(selector);
  if (target) {
    event.preventDefault();
    window.location.href = target.href;
  }
});

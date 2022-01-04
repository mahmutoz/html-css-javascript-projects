const d = document;
const allUrls = d.querySelectorAll('a');
const frameEl = d.querySelector('iframe');

allUrls.forEach((url) => {
  url.addEventListener('click', (e) => {
    e.preventDefault();
    frameEl.src = url.href;
    return false;
  });
});

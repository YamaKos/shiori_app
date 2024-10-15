const menuButton = document.getElementById('menuButton');
const toc = document.getElementById('toc');
const carousel = document.querySelector('.carousel');
const pageIndicator = document.getElementById('pageIndicator');

let currentPage = 0;

menuButton.addEventListener('click', () => {
  toc.classList.toggle('hidden');
});

carousel.addEventListener('scroll', () => {
  const pageWidth = window.innerWidth;
  currentPage = Math.round(carousel.scrollLeft / pageWidth);
  updatePageIndicator();
});

function updatePageIndicator() {
  const totalPages = document.querySelectorAll('.page').length;
  pageIndicator.textContent = `${currentPage + 1} / ${totalPages}`;
}

function goToPage(page) {
  const pageWidth = window.innerWidth;
  carousel.scrollTo({
    left: page * pageWidth,
    behavior: 'smooth'
  });
  toc.classList.add('hidden');
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then(() => console.log('Service Worker registered'))
        .catch((error) => console.error('Service Worker registration failed:', error));
    });
  }

  // 閉じるボタンで目次を閉じる
closeButton.addEventListener('click', () => {
    toc.classList.add('hidden');
  });
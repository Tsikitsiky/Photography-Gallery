console.log('it works')
const images = document.querySelectorAll('.image-slider__list');
const mainImage = document.querySelector('.image-slider__active-image');
const sourceLg = mainImage.querySelector('[media="(min-width: 1170px)"]');
const sourceMd = mainImage.querySelector('[media="(min-width: 690px)"]');
const smallImg = mainImage.querySelector('img');
const nextButton = document.createElement('button');
const prevButton = document.createElement('button');
let activeImage;

// append the butttons in the DOM
nextButton.classList.add('next');
prevButton.classList.add('prev');
mainImage.appendChild(nextButton);
mainImage.appendChild(prevButton);



  //loop through the images list
images.forEach(image => {
  image.addEventListener('click', e => {
    let imageToDisplayPicEl = e.target.parentNode;
    e.target.classList.add('active-image');
    showImg(imageToDisplayPicEl);
  });
});

// show the image in above
function showImg(el) {
    sourceLg.srcset = el.children[0].srcset;
    sourceMd.srcset = el.children[1].srcset;
    smallImg.src = el.children[2].src;
    
}

// show the next and previous img
function showNextImg() {
  showImg(activeImage.nextElementSibling || images.firstElementChild);
}

function showPreviousImg() {
  showImg(activeImage.previousElementSibling || images.lastElementChild);
}

// Buttons
nextButton.textContent = '>';
prevButton.textContent = '<'

const handleBtnClick = (e) => {
  if(e.target.matches('.next')) {
    showNextImg()
  }
  if(e.target.matches('.prev')) {
    showPreviousImg();
  }
}


mainImage.addEventListener('click', handleBtnClick);



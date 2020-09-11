
function Slider(pictures) {
const images = Array.from(pictures.querySelectorAll('picture'));
const mainImage = document.querySelector('.image-slider__active-image');
const sourceLg = mainImage.querySelector('[media="(min-width: 1170px)"]');
const sourceMd = mainImage.querySelector('[media="(min-width: 690px)"]');
const smallImg = mainImage.querySelector('img');
const nextButton = document.createElement('button');
const prevButton = document.createElement('button');

//Grab each pictures
const firstPic = document.querySelector('.first-pic');
const secondPic = document.querySelector('.second-pic');
const thirdPic = document.querySelector('.third-pic');
const fourthPic = document.querySelector('.fourth-pic');
const fifthPic = document.querySelector('.fifth-pic');
const sixthPic = document.querySelector('.sixth-pic');
const seventhPic = document.querySelector('.seventh-pic');
const eighthPic = document.querySelector('.eighth-pic');
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

// show the image by clicking a specific image
function showImg(el) {
    sourceLg.srcset = el.children[0].srcset;
    sourceMd.srcset = el.children[1].srcset;
    smallImg.src = el.children[2].src;
    activeImage = el;
}


// show the next and previous img
// function showNextImg() {
//   showImg(activeImage.nextElementSibling || images.firstElementChild);
// }

// function showPreviousImg() {
//   showImg(activeImage.previousElementSibling || images.lastElementChild);
// }

// Buttons
nextButton.textContent = '>';
prevButton.textContent = '<'

const handleBtnClick = (e) => {
  activeImage = document.querySelector('.active-image');

  if(e.target.matches('.next')) {
    if(activeImage = firstPic) {
      showImg(secondPic);
    }
    if(activeImage = secondPic) {
      showImg(thirdPic);
    }
    if(activeImage = thirdPic) {
      showImg(fourthPic);
    }
    if(activeImage = fourthPic) {
      showImg(fifthPic);
    }
    if(activeImage = fifthPic) {
      showImg(sixthPic);
    }
    if(activeImage = sixthPic) {
      showImg(seventhPic);
    }
    if(activeImage = seventhPic) {
      showImg(eighthPic);
    }
    if(activeImage = eighthPic) {
      showImg(firstPic);
    }
  }
  if(e.target.matches('.prev')) {
    
    if(activeImage = firstPic) {
      showImg(eighthPic);
    }
    if(activeImage = secondPic) {
      showImg(firstPic);
    }
    if(activeImage = thirdPic) {
      showImg(secondPic);
    }
    if(activeImage = fourthPic) {
      showImg(thirdPic);
    }
    if(activeImage = fifthPic) {
      showImg(fourthPic);
    }
    if(activeImage = sixthPic) {
      showImg(fifthPic);
    }
    if(activeImage = seventhPic) {
      showImg(sixthPic);
    }
    if(activeImage = eighthPic) {
      showImg(seventhPic);
    }
  }
}



mainImage.addEventListener('click', handleBtnClick);

}

Slider(document.querySelector('.image-slider__list'));
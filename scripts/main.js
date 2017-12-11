var OVERLAY_SEL = '[data-overlay]';
var CLOSER_SEL = '[data-overlay-closer]';
var MAIN_IMG_SEL = '[data-overlay-image]';
var THUMBNAIL_CONTAINER_SEL = '[data-thumbnail-container]';
var ALL_THUMBNAILS_SEL = '[data-trigger]';

var images = [
  "http://i0.kym-cdn.com/photos/images/facebook/001/037/295/4fe.jpg",
  "http://www.calgaryherald.com/cms/binary/10035261.jpg?size=640x420",
  "https://pbs.twimg.com/profile_images/848471660860538880/pevXVsIp.jpg",
];

var overlayElement = document.querySelector(OVERLAY_SEL);
var thumbnailContainer = document.querySelector(THUMBNAIL_CONTAINER_SEL);
// var thumbnailItems = document.querySelectorAll(ALL_THUMBNAILS_SEL);
var closer = document.querySelector(CLOSER_SEL);
var mainImage = document.querySelector(MAIN_IMG_SEL);

function createThumbnail(imgUrl) {
  var imgEl = document.createElement('img');
  imgEl.setAttribute('src', imgUrl);

  var anchorEl = document.createElement('a');
  anchorEl.setAttribute('href', imgUrl);
  anchorEl.setAttribute('data-trigger', '');
  anchorEl.appendChild(imgEl);

  var imgFrame = document.createElement('div');
  imgFrame.classList.add('thumbnail-item');
  imgFrame.appendChild(anchorEl);

  return imgFrame;
}

function appendFrameToContainer(imgFrame) {
  thumbnailContainer.appendChild(imgFrame);
}

function drawThumbnails(imgArray) {
  imgArray.map(createThumbnail)
        .forEach(appendFrameToContainer);
}

function openOverlayWithImage(imgUrl) {
  mainImage.setAttribute('src', imgUrl);
  overlayElement.classList.remove('hidden');
}

function addThumbnailClickListeners() {

  // $(document.body).on('click', function (event) {
  //   console.log('at the body');
  // });

  $(THUMBNAIL_CONTAINER_SEL).on('click', 'a', function (event) {
    event.preventDefault();
    console.log('at the thumbnail container (delegated)');
    // console.log(event.target);
    console.log(event.currentTarget);
    var url = $(event.currentTarget).attr('href');
    openOverlayWithImage(url);
  });

  // $(THUMBNAIL_CONTAINER_SEL).on('click', function (event) {
  //   event.preventDefault();
  //   console.log('at the thumbnail container');
  //   // console.log(event.target);
  //   // openOverlayWithImage(url);
  // });

  // $('img').on('click', function (event) {
  //   console.log('at the img');
  // });

  // $('a').on('click', function (event) {
  //   console.log('at the a');
  // });


  // var thumbnailItems = document.querySelectorAll(ALL_THUMBNAILS_SEL);
  // thumbnailItems.forEach(function (thumb) {
  //   var url = thumb.getAttribute('href');
  //   thumb.addEventListener('click', function (event) {
  //     event.preventDefault();
  //     openOverlayWithImage(url);
  //   })
  //   console.log('done with addEventListener');
  // })
  // console.log('done with forEach');
  // console.log('done with addThumbnailClickListeners');
}

function addCloserListener() {
  closer.addEventListener('click', function (event) {
    event.preventDefault();
    overlayElement.classList.add('hidden');
  })
}

function main() {
  drawThumbnails(images);
  addThumbnailClickListeners();
  // $(THUMBNAIL_CONTAINER_SEL).on('click', 'a', function (event) {
  //   event.preventDefault();
  //   console.log('got a click');
  //   // openOverlayWithImage(url);
  // });
  addCloserListener();
}

main();

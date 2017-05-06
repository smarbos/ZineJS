
"use strict";

var structure = {
  metadata: {

  },
  data: {
    slides: {
      0: {
        id: 0,
        type: "text",
        title: "Praesent et aliquet purus.",
        content: "Praesent quis eleifend est, et aliquet purus. Integer porttitor sollicitudin dictum. Donec laoreet odio ac ipsum convallis commodo. Duis sed nulla porta, dignissim justo nec, scelerisque enim. Sed lobortis id sapien non mattis. Donec eget quam et arcu lobortis iaculis at non ex. Integer sed ex vitae arcu hendrerit vulputate at at dui. Phasellus at lorem ut elit molestie mollis. Morbi tristique consectetur vulputate. Suspendisse potenti. Vivamus nec turpis nec quam suscipit varius. Cras suscipit augue ligula, dictum viverra ligula egestas non. Integer nec lorem eget justo aliquam porttitor quis mollis sem. Suspendisse vitae hendrerit neque. Pellentesque consectetur mattis eros, sed pellentesque metus aliquam non. Quisque libero tellus, tristique ac lectus quis, dignissim egestas mauris."
      },
      1: {
        id: 1,
        type: "image",
        title: "Nais kitten",
        image: "http://www.pitodoble.com/imagenes/acertijo-geometrico.jpg"
      },
      2: {
        id: 2,
        type: "text",
        title: "Interdum et malesuada fames ac ante ipsum primis in faucibus.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id consectetur ipsum, quis euismod sem. Praesent eu dui vestibulum, sollicitudin nulla in, suscipit quam. In mi neque, porta eget rhoncus sit amet, sodales ut lacus. Nulla elit enim, accumsan et mauris ut, posuere pharetra sapien. Nam at ipsum risus. Integer dapibus auctor pulvinar. Nullam suscipit mauris vel elit scelerisque, id interdum felis ullamcorper."
      },
      3: {
        id: 3,
        type: "image",
        title: "Long Life Mr. Kitten.",
        image: "http://doughnutkitten.com/PNGs/1_doughnut_kitten_Tania_Hennessy.png"
      },
      4: {
        id: 4,
        type: "text",
        title: "Duis luctus maximus commodo.",
        content: "Curabitur sapien ligula, iaculis et nunc eget, accumsan gravida nunc. Duis luctus maximus commodo. Praesent tortor enim, blandit at feugiat nec, congue vel ipsum. Praesent lacinia vitae est lobortis fringilla. Phasellus dignissim sapien urna, vitae laoreet arcu mollis vel. Ut et mi elit. Nam tristique nisl eu ornare dictum. Suspendisse rhoncus, justo et blandit laoreet, justo erat consectetur turpis, non maximus diam nunc quis nibh. Mauris semper justo risus, a rhoncus turpis tincidunt vel. Aenean ultrices, nisl non porttitor ornare, dui quam pulvinar nunc, at auctor turpis lorem at nisl. Donec vel tellus lectus. Curabitur quis efficitur risus, semper bibendum sem. Praesent quis erat vel orci bibendum congue. Aenean ornare, ante sit amet congue venenatis, ante tellus sollicitudin diam, et posuere magna lorem sit amet odio. Sed pharetra varius sem. Sed ullamcorper tortor viverra efficitur consectetur."
      },
      5: {
        id: 5,
        type: "image",
        title: "Cariplan Love",
        image: "https://www.royalcanin.com/~/media/Royal-Canin/Content/persian-kittens.ashx"
      },
      6: {
        id: 6,
        type: "text",
        title: "Duo ea cetero copiosae.",
        content: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras eget nisi sed nulla pulvinar iaculis. Praesent placerat erat ut tempus imperdiet. Aliquam finibus lectus sed varius convallis. Curabitur quis nunc in urna consequat fringilla sit amet at arcu. Duis tincidunt molestie erat, id ultricies magna facilisis sed. Nunc lobortis velit gravida leo sollicitudin congue. Donec iaculis odio nec sagittis efficitur. Phasellus interdum ante eget nisl accumsan condimentum. Praesent laoreet sapien et elementum volutpat. Nullam ex purus, scelerisque sed justo et, eleifend tincidunt erat. Fusce dapibus augue quis tellus condimentum efficitur. Curabitur vitae elit vitae turpis vulputate finibus sed eu ex. Vivamus volutpat blandit rhoncus."
      },
      7: {
        id: 7,
        type: "image",
        title: "Mashic",
        image: "http://www.warrenphotographic.co.uk/photography/bigs/10398-Silver-exotic-kitten-white-background.jpg"
      },
      8: {
        id: 8,
        type: "text",
        title: "Lorem ipsum dolor sit amet.",
        content: "Nunc interdum justo at suscipit ultricies. Nunc orci est, sagittis at varius et, congue ac dui. Suspendisse mattis cursus massa. Phasellus venenatis ligula eget ex molestie vehicula. Morbi ornare velit non ipsum volutpat, eget auctor eros pharetra. Suspendisse imperdiet ac eros in tempus. Phasellus ac sem nisi. Donec id efficitur nisi."
      }
    }
  }
};

function checkSlideState(slide) {
  return (slide.classList.contains('active')) ? true : false;
}

function getAllSlides() {
  return document.getElementsByClassName('slide');
}

function animate() {

  setTimeout(function(){
    animate()
    allSlides = getAllSlides();

    var totalSlidesAmount = allSlides.length;
    if(counter < totalSlidesAmount){
      counter++;
    } else {
      counter = 0;
    }
    for (var i = 0; i < allSlides.length; i++) {
      allSlides[i].classList.remove('active');
    }
    allSlides[counter].classList.add('active')

  }, 2000);
}

function removeActiveFromAllSlides() {
  var allSlides = getAllSlides();
  for (var i = 0; i < allSlides.length; i++) {
      allSlides[i].classList.remove('active');
    }
}

function gotoPage(pageNumber) {

    pageNumber = (pageNumber < 0) ? 0 : pageNumber;

    var allSlides = getAllSlides();
    var totalSlidesAmount = allSlides.length;
    if(pageNumber < totalSlidesAmount) {
      removeActiveFromAllSlides()
      allSlides[pageNumber].classList.add('active')
    } else {
      removeActiveFromAllSlides()
      allSlides[0].classList.add('active')
    }

}


function makeStack( elem, x, y, count, total ) {
  var promise = new Promise(function(resolve, reject) {

    var left = parseInt( css( elem, 'left' ), 10 ),
        top = parseInt( css( elem, 'top' ), 10 ),
        dx = left - x,
        dy = top - y,
        i = 1,
        delay = 10;

    function loop() {
      // console.log(count)
      if ( i >= count ) {
        elem.style.left = 0;
        elem.style.top = 0;
        elem.classList.remove('square');
        elem.classList.add('slide-full');
        resolve(i);
        return;
       }
       else{
         elem.style.left = ( left - ( dx * i / count ) ).toFixed( 0 ) + 'px';
         elem.style.top = ( top - ( dy * i / count ) ).toFixed( 0 ) + 'px';
       }

        i += 1;

        setTimeout( loop, delay );
    }

    loop();
  })
  return promise;
}


function css( element, property ) {
    return window.getComputedStyle( element, null ).getPropertyValue( property );
}


function createSlide(slideData){

  var promise = new Promise(function(resolve, reject) {

    if (slideData.type === "image") {
      var slideTemplate = document.querySelector('#slider-image-template');
    }

    if (slideData.type === "text") {
      var slideTemplate = document.querySelector('#slider-text-template');
    }

    var slide = document.importNode(slideTemplate.content, true);

    if (slideData.id === 0) {
      slide.querySelector(".slide").classList.add('active');
    }

    slide.querySelector(".slide").setAttribute("id", slideData.id);
    slide.querySelector(".slide").classList.add('square');
    slide.querySelector(".slide").classList.add('slide_'+slideData.id);
    slide.querySelector(".slideTitle").innerHTML = slideData.title;
    if (slideData.type === "text") {
      slide.querySelector(".slideContent").innerHTML = slideData.content;
    }
    if (slideData.type === "image") {
      slide.querySelector(".slideContent").src = slideData.image;
    }

    document.getElementById("app").appendChild(slide);
    var newSlide = document.getElementsByClassName("slide_"+slideData.id);
    resolve(newSlide);
  });

  return promise;
}

function getScreenSize() {
  var screenSize = {
    width: document.querySelector('#center').offsetWidth,
    height: document.querySelector('#center').offsetHeight
  }

  return screenSize;
}
function createAllSlides () {
  var allSlides = [];
  var promise = new Promise(function(resolve, reject) {
    for(let i=0; i < Object.keys(structure.data.slides).length; i++){
      createSlide(structure.data.slides[i]).then(function (response) {
        allSlides.push(response);
        if (i === Object.keys(structure.data.slides).length-1) {
          document.querySelector('.totalPages').innerHTML = allSlides.length;
          resolve(allSlides);
        }
      }).catch(function (error) {
        reject(error);
      });
    }
  });
  return promise;
}

function isOdd(num) { return num % 2;}
function roundToEven(number) {
  number = 2 * Math.round(number / 2);
  return number;
}
function getSlideSize(allSlides) {

  var promise = new Promise(function(resolve, reject){
    var slideSize;
    var amountOfSlides = allSlides.length;
    var numberOfRows = roundToEven(amountOfSlides/4)+1;
    var numberOfLines = roundToEven(amountOfSlides/4)+1;
    var screenSize = getScreenSize();
    var thumbnailWidth = screenSize.width/numberOfRows;
    var thumbnailHeight = screenSize.height/numberOfLines;

    var allSlidesAndslideSize = {
      'slideSize': {
        'width': thumbnailWidth,
        'height': thumbnailHeight,
        'numberOfRows': numberOfRows,
        'numberOfLines': numberOfLines
      },
      'allSlides': allSlides
    }
    resolve(allSlidesAndslideSize);
  });

  return promise;
}

function setSlidesPosition(coordinatesAndslideSize) {
  var promise = new Promise(function (resolve, reject) {

    var sheet = (function() {
      var style = document.createElement("style");
      style.appendChild(document.createTextNode(""));
      document.head.appendChild(style);
      return style.sheet;
    })();

    for (var i = 0; i < coordinatesAndslideSize.coordinates.length; i++) {
      sheet.insertRule("@media all { .slide_"+i+" { z-index: -"+i+"; top: "+coordinatesAndslideSize.coordinates[i].x+"px; left: "+coordinatesAndslideSize.coordinates[i].y+"px; height: "+coordinatesAndslideSize.slideSize.height+"px; width: "+coordinatesAndslideSize.slideSize.width+"px; } }", i);
    }

    resolve('[... MY JOB IS DONE ...]');
    // reject('[... I DIED ...]');
  });

  return promise;
}

function getCoordinatesForSlides(allSlidesAndslideSize) {
  var slideSize = allSlidesAndslideSize.slideSize;
  var coordinates = [];
  var x = 0;
  var y = 0;
  var lineCounter = 0;

  var promise = new Promise(function(resolve, reject) {

  for (var i = 0; i < allSlidesAndslideSize.allSlides.length; i++) {

    if(i % allSlidesAndslideSize.slideSize.numberOfLines === 0) {
      if (i === 0) {
        x = 0;
        y = 0;
      } else {
        x = 0;
        y = y + allSlidesAndslideSize.slideSize.width;
      }
      lineCounter++;
    }
    else {
      x = x + allSlidesAndslideSize.slideSize.height;
      y = y;
    }
    coordinates.push({ x: x, y: y })

    if (i === allSlidesAndslideSize.allSlides.length-1) {
      var coordinatesAndslideSize = {
        coordinates: coordinates,
        slideSize: slideSize
      }
      resolve(coordinatesAndslideSize);
    }
  }
  });

  return promise;
}

var data = [];
function start() {
  console.log("[1] ... Creating All Slides ...");
  createAllSlides()
    .then(function(allSlides) {
      data['slides'] = allSlides;
      console.log("[2] ... All slides have been created ...");
      console.log("[3] ... Calculating the Slides Sizes ...");
      getSlideSize(data['slides'])
        .then(function(allSlidesAndslideSize){
          data['slideSize'] = allSlidesAndslideSize;
          console.log("[4] ... Getting Coordinates For Slides ...");
          getCoordinatesForSlides(data['slideSize'])
            .then(function(coordinatesAndslideSize){
              data['coordinates'] = coordinatesAndslideSize;
              console.log(coordinatesAndslideSize)
              console.log("[5] ... The Coordinates Have Been Calculated ...");
              console.log("[6] ... Setting The Slides Positions In The Screen...");
              setSlidesPosition(data['coordinates']).then(function(confirmation){
                data['confirmation'] = confirmation;
                console.table(coordinatesAndslideSize.coordinates);
                setTimeout(function () {
                  var allSlides = document.getElementsByClassName('square');

                  var screenSize = getScreenSize();
                  getSlideSize(allSlides).then(function(response){
                    data['confirmation']
                    console.log(response)
                    for (var i = 0; i < allSlides.length; i++) {
                      makeStack(allSlides[i], (screenSize.width/2)-(response.slideSize.width/2), (screenSize.height/2)-(response.slideSize.height/2), 300, allSlides.length)
                      .then(function(response) {
                        console.log(response)
                        data.currentMode = 'ready';
                      })
                      .catch(function(error) {
                        console.log(error)
                      });
                    }
                  })

                }, 600);
                console.log("[7] ... The T-H-I-N-G Is Ready! ...");
                console.log(confirmation);
              }).catch(function(error){
                console.log("[8] ... Everything Is B-R-O-K-E-N! ...");
                console.log(error);
              });
            })
            .catch(function(error){
              console.log(error);
            })
          })
        .catch(function(error){
          console.log(error);
      })
    })
    .catch(function (error) {
      console.log(error);
    });
}

function checkKey(e) {
  if (e.keyCode == '38') {
    console.log(data)
  }
  else if (e.keyCode == '40') {
  }
  else if (e.keyCode == '37') {
     gotoPage(getPageNumber()-1);
  }
  else if (e.keyCode == '39') {
    gotoPage(getPageNumber()+1);
  }
}

function getPageNumber () {
  var pageNumber = Number(document.getElementsByClassName('active')[0].id);
  document.querySelector('.currentPage').innerHTML = pageNumber;
  return pageNumber;
}

function setBackground() {
  console.log(document.body);
  var background = 'imgs/backgrounds/noche2.jpg';
  document.body.setAttribute("style", "background: url('"+background+"') no-repeat center center fixed;");
}

function arrangeTileView() {
  setSlidesPosition(data['coordinates']).then(function(confirmation){
    var allSlides = document.getElementsByClassName('square');
    var screenSize = getScreenSize();
  }).catch(function(error){
    console.log(error);
  });
  var allSlides = document.getElementsByClassName('slide');
  for (var i = 0; i < allSlides.length; i++) {
    allSlides[i].classList.remove('slide-full');
    allSlides[i].classList.add('square');
    allSlides[i].style.removeProperty('left');
    allSlides[i].style.removeProperty('top');
  }
}

function arrangeStackView() {
  var allSlides = document.getElementsByClassName('slide');
  for (var i = 0; i < allSlides.length; i++) {
    allSlides[i].classList.add('slide-full');
    allSlides[i].classList.remove('square');
  }
}

function expandOrCollapse(name) {
  if(document.querySelector(name).style.display === "block") {
    document.querySelector(name).style.display = "none";
    return false;
  } else {
    document.querySelector(name).style.display = "block";
    return true;
  }
}

(function() {
  data.currentMode = 'processing';
  start();
  setBackground();
  window.onresize = function(event) {
    // location.reload();
  };
  document.querySelector('.next-icon').addEventListener('click', function (event) {
    gotoPage(getPageNumber()+1);
  });
  document.querySelector('.prev-icon').addEventListener('click', function (event) {
    gotoPage(getPageNumber()-1);
  });
  document.querySelector('#header-right i').addEventListener('click', function (event) {
    if(data.currentMode === "ready") {
      console.log("switch-mode");
      if(document.querySelector('#layout-switcher').classList.contains('active')){
        document.querySelector('#layout-switcher').classList.remove('active');
        document.querySelector('#layout-switcher i').innerHTML = "view_comfy";
        document.querySelector('#pageIndicator').style.visibility = "visible";
        document.querySelector('#left').style.visibility = "visible";
        document.querySelector('#right').style.visibility = "visible";
        arrangeStackView();
      } else {
        document.querySelector('#layout-switcher').classList.add('active');
        document.querySelector('#layout-switcher i').innerHTML = "pageview";
        document.querySelector('#pageIndicator').style.visibility = "hidden";
        document.querySelector('#left').style.visibility = "hidden";
        document.querySelector('#right').style.visibility = "hidden";
        arrangeTileView();
      }
    } else {
      console.log("[switch-mode] NOT READY");
    }
  });
  document.querySelector('#more-menu').addEventListener('click', function (event) {
    expandOrCollapse('#more-menu');
  });
  document.querySelector('#footer-left i').addEventListener('click', function (event) {
    expandOrCollapse('#more-menu');
  });
  document.querySelector('.slot3').addEventListener('click', function (event) {
    expandOrCollapse('.slider-info');
  });
  document.onkeydown = checkKey;
})();

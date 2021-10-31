function main() {
  const shuffle = (copyOfPics) => {
    let myArr = copyOfPics.slice().sort( () => Math.random() - 0.5 );
    return myArr;
};

var pics = Array.from(document.getElementsByClassName('pic'));
const copyOfPics = pics.slice();
const shuffled = Array.from(shuffle(copyOfPics));

var images = document.querySelectorAll("img");
images = Array.from(images);

var pickedElementParent;
var cursor = document.querySelector('.pointer');

cursor.style.top = "27%";

shuffled.forEach((element) => {
    element.style.position = "absolute";
});


shuffled[0].style.top = shuffled[1].style.top = shuffled[2].style.top = "0%";
shuffled[3].style.top = shuffled[4].style.top = shuffled[5].style.top = "25%";
shuffled[6].style.top = shuffled[7].style.top = shuffled[8].style.top = "50%";
shuffled[9].style.top = shuffled[10].style.top = shuffled[11].style.top = "75%";


shuffled[0].style.left = shuffled[3].style.left = shuffled[6].style.left = shuffled[9].style.left = "0%";
shuffled[1].style.left = shuffled[4].style.left = shuffled[7].style.left = shuffled[10].style.left = "33%";
shuffled[2].style.left = shuffled[5].style.left = shuffled[8].style.left = shuffled[11].style.left = "66%";


images.forEach(image => {
    
  image.addEventListener('click' , handleClickAndTouch);

});

function handleClickAndTouch(event) {
    let holdPickedElement;
    let left , top;
    if (pickedElementParent == undefined) {
        pickedElementParent = event.target.parentElement;
        pickedElementParent.style.transform = "translate(-5%, -5%)";
        pickedElementParent.style.zIndex = 2;
        pickedElementParent.style.boxShadow = "0px 0px 50px rgba(0, 0, 0, 0.63)";
        
    } else if(pickedElementParent.style.zIndex == 2){
        
        holdPickedElement = pickedElementParent;
        holdPickedElement.style.transform = "";
        holdPickedElement.style.zIndex = 0;
        holdPickedElement.style.boxShadow = "";
        top = holdPickedElement.style.top;
        left = holdPickedElement.style.left;


        pickedElementParent = event.target.parentElement;

        holdPickedElement.style.top = pickedElementParent.style.top;
        holdPickedElement.style.left = pickedElementParent.style.left;

        pickedElementParent.style.top = top;
        pickedElementParent.style.left = left;
       
        pickedElementParent = undefined;
    }
   
}

var pointer = function(){
  cursor.style.display = "block";
  let initialElement , finalElement;
  
  shuffled.forEach(element => {
    if (element.style.top == "25%" && element.style.left == "33%") {
      initialElement = element;
    }
    else if (element.style.top == "75%" && element.style.left == "33%") {
      finalElement = element;
    }
  });
  
  
  setTimeout(function () {
      cursor.style.border = "4px solid white";
      initialElement.style.transform = "translate(-5%, -5%)";
      initialElement.style.zIndex = 2;
      initialElement.style.boxShadow = "0px 0px 50px rgba(0, 0, 0, 0.63)";
  } , 1400);
  
  setTimeout(function () {
      cursor.style.top = "77%";
      cursor.style.border = "";
  } , 1700);

  setTimeout(() => {
      cursor.style.border = "4px solid white";
      initialElement.style.top = "75%";
      initialElement.style.left = "33";

      finalElement.style.top = "25%";
      finalElement.style.left = "33%";

      initialElement.style.transform = "";
      initialElement.style.zIndex = 0;
      initialElement.style.boxShadow = "";
  }, 2400);


  setTimeout(() => {
      cursor.style.display = "none";
  }, 3000);

}


setTimeout(pointer , 1300);

}



window.addEventListener('load' , function () {
  // if (window.innerWidth > 400) document.getElementById('info').style.display = "block";  
  setTimeout(main , 1000);
})

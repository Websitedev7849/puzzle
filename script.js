function main() {
  const shuffle = (copyOfPics) => {
    let myArr = copyOfPics.slice().sort( () => Math.random() - 0.5 );
    return myArr;
};

var container = document.getElementsByClassName('container')[0];

var pics = Array.from(document.getElementsByClassName('pic'));
const copyOfPics = pics.slice();
const shuffled = Array.from(shuffle(copyOfPics));

var images = document.querySelectorAll("img");
images = Array.from(images);

var pickedElementParent;
var dropElementChild;
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


container.addEventListener("dragstart", function(event) {
    //to swap element 1
    pickedElementParent = event.target.parentElement;
    event.dataTransfer.setData("Text", event.target.id);    
    event.target.style.opacity = "0.4";
  });
  
 
  
  // Output some text when finished dragging the p element and reset the opacity
  container.addEventListener("dragend", function(event) {
    event.target.style.opacity = "1";
  });
  
  /* Events fired on the drop target */
  
  // When the draggable p element enters the droptarget, change the DIVS's border style
  container.addEventListener("dragenter", function(event) {
  });
  
  // By default, data/elements cannot be dropped in other elements. To allow a drop, we must prevent the default handling of the element
  container.addEventListener("dragover", function(event) {
    event.preventDefault();
    
  });
  
  // When the draggable p element leaves the droptarget, reset the DIVS's border style
  container.addEventListener("dragleave", function(event) {
    if ( event.target.className == "pic droptarget" ) {
      event.target.style.border = "";
    }
  });
  
  document.addEventListener("drop", function(event) {
    event.preventDefault();
        if ( event.target.className == "pic droptarget") {
            event.target.style.border = "";
            var data = event.dataTransfer.getData("Text");
            event.target.appendChild(document.getElementById(data));
      
            //to swap element 2
            dropElementChild = event.target.children[0];
            pickedElementParent.appendChild(dropElementChild);

          
    }
    
});

images.forEach(image => {
    image.addEventListener('drop' , function (event) {
        event.preventDefault();
        if ( event.target.parentElement.className == "pic droptarget") {
            event.target.parentElement.style.border = "";
            var data = event.dataTransfer.getData("Text");
            event.target.parentElement.appendChild(document.getElementById(data));
            //to swap element 2
            dropElementChild = event.target.parentElement.children[0];
            pickedElementParent.appendChild(dropElementChild);
        }
    });

    image.addEventListener('touchstart' , function (event) {
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
       
    });

});

var pointer = function(){
  if(window.innerWidth < 400) cursor.style.display = "block";
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
    if (window.innerWidth < 400) {
      cursor.style.border = "4px solid white";
      initialElement.style.transform = "translate(-5%, -5%)";
      initialElement.style.zIndex = 2;
      initialElement.style.boxShadow = "0px 0px 50px rgba(0, 0, 0, 0.63)";
    }
  } , 1400);
  
  setTimeout(function () {
    if (window.innerWidth < 400) {
      cursor.style.top = "77%";
      cursor.style.border = "";
    }
  } , 1700);

  setTimeout(() => {
    if (window.innerWidth < 400) {
      cursor.style.border = "4px solid white";
      initialElement.style.top = "75%";
      initialElement.style.left = "33";

      finalElement.style.top = "25%";
      finalElement.style.left = "33%";

      initialElement.style.transform = "";
      initialElement.style.zIndex = 0;
      initialElement.style.boxShadow = "";
    }
  }, 2400);


  setTimeout(() => {
    if (window.innerWidth < 400) {
      cursor.style.display = "none";
    }
  }, 3000);

}


setTimeout(pointer , 1300);

}



window.addEventListener('load' , function () {
  if (window.innerWidth > 400) document.getElementById('info').style.display = "block";  
  setTimeout(main , 1000);
})


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

    preventLongPressMenu(image);

});

function absorbEvent(event) {
    var e = event || window.event;
    e.preventDefault && e.preventDefault();
    e.stopPropagation && e.stopPropagation();
    e.cancelBubble = true;
    e.returnValue = false;
    return false;
}

function preventLongPressMenu(node) {
    node.ontouchstart = absorbEvent;
    node.ontouchmove = absorbEvent;
    node.ontouchend = absorbEvent;
    node.ontouchcancel = absorbEvent;
}




// for (let i=0; i<=11 ; i++) {
    
    
// }

//   pickedElementParent.appendChild(event.target.children[0]);
//   event.target.appendChild(pickedElementParent.children[1]);

   /*
    container.children[i].addEventListener('mousedown' , function (e) {
        this.style.top = e.pageY + "px";
        this.style.left = e.pageX + "px";
        this.style.transform = "translate(-90%,-90%)";
       
        mousedown = true;
        
       
    });    
    
   
    container.children[i].addEventListener('drag' , function (e) {
        if (mousedown == true) {
            this.style.zIndex = "1";
            this.style.top = e.pageY + "px";
            this.style.left = e.pageX + "px";
            this.style.transform = "translate(-90%,-90%)";
        }
    });   
    */
// var containerHeight = container.style.height;
// var containerWidth = container.style.width;
// var containerMargin = container.style.marginTop;


// const sliced = (hw) => hw.slice(0,-2) ;

// // heigth and width in pixels
// containerHeight = sliced(containerHeight);
// containerWidth = sliced(containerWidth);
// containerMargin = sliced(containerMargin);

// var cursor = document.getElementById('cursor');
// var page = document.getElementsByClassName('page');
// cursor.style.position = "absolute";

// window.addEventListener('mousemove' , function (e) {
    
//     cursor.style.top = e.pageY + "px";
//     cursor.style.left = e.pageX + "px";

//     page[0].innerHTML = cursor.style.top;
//     page[1].innerHTML = cursor.style.left;
// });

 
 // droptarget[0].style.top = droptarget[1].style.top = droptarget[2].style.top = "0%";
// droptarget[3].style.top = droptarget[4].style.top = droptarget[5].style.top = "25%";
// droptarget[6].style.top = droptarget[7].style.top = droptarget[8].style.top = "50%";
// droptarget[9].style.top = droptarget[10].style.top = droptarget[11].style.top = "75%";


// droptarget[0].style.left = droptarget[3].style.left = droptarget[6].style.left = droptarget[9].style.left = "0%";
// droptarget[1].style.left = droptarget[4].style.left = droptarget[7].style.left = droptarget[10].style.left = "33%";
// droptarget[2].style.left = droptarget[5].style.left = droptarget[8].style.left = droptarget[11].style.left = "66%";

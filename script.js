function shuffle(copyOfPics) {
  let myArr = copyOfPics.slice().sort( () => Math.random() - 0.5 );
  return myArr;
};

const pics = Array.from(document.querySelectorAll('.pic'));
const copyOfPics = pics.slice();
const shuffled = Array.from(shuffle(copyOfPics));
let pickedElementParent;

const cursor = document.querySelector('.pointer');
cursor.style.top = "27%";


function main() {

    shuffled[0].style.top = shuffled[1].style.top = shuffled[2].style.top = "0%";
    shuffled[3].style.top = shuffled[4].style.top = shuffled[5].style.top = "25%";
    shuffled[6].style.top = shuffled[7].style.top = shuffled[8].style.top = "50%";
    shuffled[9].style.top = shuffled[10].style.top = shuffled[11].style.top = "75%";


    shuffled[0].style.left = shuffled[3].style.left = shuffled[6].style.left = shuffled[9].style.left = "0%";
    shuffled[1].style.left = shuffled[4].style.left = shuffled[7].style.left = shuffled[10].style.left = "33%";
    shuffled[2].style.left = shuffled[5].style.left = shuffled[8].style.left = shuffled[11].style.left = "66%";


    shuffled.forEach(elem => {
        
      elem.addEventListener('click' , handleClickAndTouch);

    });

    setTimeout(pointerAnimation , 1300);

}

function isPuzzleSoved(pics) {

  const top0 = (pics[0].style.top == '0%' && pics[1].style.top == '0%' && pics[2].style.top == '0%');
  const top25 = (pics[3].style.top == '25%' && pics[4].style.top == '25%' && pics[5].style.top == '25%');
  const top50 = (pics[6].style.top == '50%' && pics[7].style.top == '50%' && pics[8].style.top == '50%');
  const top75 = (pics[9].style.top == '75%' && pics[10].style.top == '75%' && pics[11].style.top == '75%');

  const left0 = (pics[0].style.left == '0%' && pics[3].style.left == '0%' && pics[6].style.left == '0%' && pics[9].style.left == '0%');
  const left33 = (pics[1].style.left == '33%' && pics[4].style.left == '33%' && pics[7].style.left == '33%' && pics[10].style.left == '33%');
  const left66 = (pics[2].style.left == '66%' && pics[5].style.left == '66%' && pics[8].style.left == '66%' && pics[11].style.left == '66%');

  // console.log(top0 ,top25 ,top50 ,top75 , left0, left33, left66);

  if (top0 && top25 && top50 && top75 && left0 && left33 && left66) 
    return true;
  
  return false;
  
}

function handleClickAndTouch(event) {
  let holdPickedElement;
  let left , top;
  if (pickedElementParent == undefined) { // 0 pic selected
      pickedElementParent = event.target.parentElement;
      pickedElementParent.style.transform = "translate(-5%, -5%)";
      pickedElementParent.style.zIndex = 2;
      pickedElementParent.style.boxShadow = "0px 0px 50px rgba(0, 0, 0, 0.63)";
      
  } else if(pickedElementParent.style.zIndex == 2){ // 1 pic selected to be replaced
      
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

  /** check if the puzzle is solved on every move */
  if (isPuzzleSoved(pics)) {
    console.log("puzzle solved");
  }
 

}

/**
 * pointerAnimation function is used to animate the cursor.
 * we are using javascript function to animate pointer because...
 * we can't find middle element and second last element in css after shuffling elements
 */
function pointerAnimation(){
  cursor.style.display = "block";

  // middle element
  let initialElement = shuffled.find(element => element.style.top == "25%" && element.style.left == "33%"); 

  // second last element
  let finalElement = shuffled.find(element => element.style.top == "75%" && element.style.left == "33%");
  
  // click animation
  setTimeout(function () {
      cursor.style.border = "4px solid white";
      initialElement.style.transform = "translate(-5%, -5%)";
      initialElement.style.zIndex = 2;
      initialElement.style.boxShadow = "0px 0px 50px rgba(0, 0, 0, 0.63)";
  } , 1400);
  
  // move cursor down animation
  setTimeout(function () {
      cursor.style.top = "77%";
      cursor.style.border = "";
  } , 1700);

  // click in to-be-replaced element animation
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


  // hide cursor
  setTimeout(() => {
      cursor.style.display = "none";
  }, 3000);

}


window.addEventListener('load' , function () {
  setTimeout(main , 1000);
})

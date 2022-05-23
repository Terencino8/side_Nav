const menubtn = document.getElementById('menubtn');
let dropdown = document.getElementById('dropdown');
let btn0 = document.getElementById('btn0');


menubtn.addEventListener('click', function(e){
    dropdown.style.display = "flex";
})

  window.onclick = function(event) {
    if (event.target == btn0) {
      dropdown.style.display = null;
    }
    else if(event.target == dropdown) {
        dropdown.style.display = null;
    };
  };






const homecontent = document.getElementById('homecontent');
const displaybox = document.getElementById('displaybox');
let body = document.getElementById('body');


  // homecontent.setAttribute('class', 'homecontent');
  // homecontent.innerHTML = "Welcome";
  // body.appendChild('homeContent');




let btn1 = document.getElementById('one');
let btn2 = document.getElementById('two');
let btn3 = document.getElementById('three');
let btn4 = document.getElementById('four');
let btn5 = document.getElementById('five');




btn1.addEventListener('click', e=>{
  if(e.target == btn1){
    dropdown.style.display = null;
    homecontent.style.display = null;
    displaybox.style.display = "flex";
    displaybox.style.backgroundColor = "grey";
    displaybox.innerHTML = "Button 1";

  };
});


btn2.addEventListener('click', e=>{
  if(e.target == btn2){
    dropdown.style.display = null;
    homecontent.style.display = null;
    displaybox.style.display = "flex";
    displaybox.style.backgroundColor = "green";
    displaybox.innerHTML = "Button 2";

  };
});

btn3.addEventListener('click', e=>{
  if(e.target == btn3){
    dropdown.style.display = null;
    homecontent.style.display = null;
    displaybox.style.display = "flex";
    displaybox.style.backgroundColor = "black";
    displaybox.style.color = "gold";
    displaybox.innerHTML = "Button 3";

  };
});

btn4.addEventListener('click', e=>{
  if(e.target == btn4){
    dropdown.style.display = null;
    homecontent.style.display = null;
    displaybox.style.display = "flex";
    displaybox.style.backgroundColor = "red";
    displaybox.style.color = "gold";
    displaybox.innerHTML = "Button 4";

  };
});

btn5.addEventListener('click', e=>{
  if(e.target == btn5){
    dropdown.style.display = null;
    homecontent.style.display = null;
    displaybox.style.display = "flex";
    displaybox.style.backgroundColor = "purple";
    displaybox.style.color = "red";
    displaybox.innerHTML = "Button 5";

  };
});
 





// let span = document.createElement('span');


// these are the boxes displaying the items the side bars numbers are carrying
// const box1 = document.createElement('div');
// const box2 = document.createElement('div');
// const box3 = document.createElement('div');
// const box4 = document.createElement('div');
// const box5 = document.createElement('div');

// setting a class for the above div
// box1.setAttribute("class", "displaybox" );
// box2.setAttribute("class", "displaybox" );
// box3.setAttribute("class", "displaybox" );
// box4.setAttribute("class", "displaybox" );
// box5.setAttribute("class", "displaybox" );

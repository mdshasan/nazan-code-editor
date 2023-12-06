/* JavaScript code for the code editor functionality */
const htmlCode=document.getElementById("html-code");
const cssCode=document.getElementById("css-code");
const jsCode=document.getElementById("js-code");
const output=document.querySelector(".output");
const dragger = document.getElementById('dragger');
const boxContainer = document.querySelector('.box-container');
const textArea=document.getElementsByTagName("textarea"); 
const textLabel=document.getElementsByTagName("label");

// Event listener for loading values on window load
window.addEventListener("load",function(){
  loadValues();
  updateOutput();
});

// Function to update the output
function updateOutput(){
  return  document.querySelector(".output").innerHTML=htmlCode.value+"<style>"+cssCode.value+"</style>"+"<script>"+jsCode.value+"</"+"script>";
}

// Event listeners for input in code areas
htmlCode.addEventListener("input",function(){
  saveValues();
  updateOutput();
});

cssCode.addEventListener("input",function(){
  saveValues();
  updateOutput();
});

jsCode.addEventListener("input",function(){
  saveValues();
  updateOutput();
  executeJs();
});

// Function to execute JavaScript code
function executeJs(){
  try{
    const scriptFunction= new Function(jsCode.value);
    scriptFunction();
  }catch(err){
    console.error("error in JS",err);
  }
}

// Function to save values to local storage
function saveValues() {
  localStorage.setItem('htmlCode', htmlCode.value);
  localStorage.setItem('cssCode', cssCode.value);
  localStorage.setItem('jsCode', jsCode.value);
}

// Function to load values from local storage
function loadValues() {
  htmlCode.value = localStorage.getItem('htmlCode') || '';
  cssCode.value = localStorage.getItem('cssCode') || '';
  jsCode.value = localStorage.getItem('jsCode') || '';
}

// Variable to track dragging state
let isDragging = false;

// Event listener for mouse down on dragger
dragger.addEventListener('mousedown', (e) => {
  isDragging = true;
});

// Event listener for mouse up anywhere on the document
document.addEventListener('mouseup', () => {
  isDragging = false;
});

// Function to get the height of the label element
function labelHeight(){
  const labelArr=[...textLabel];
  const elHeight= labelArr[0].offsetHeight;
  return elHeight;
}

// Setting initial output height based on window height and box container height
output.style.height=`${window.innerHeight-boxContainer.clientHeight}px`;

// Event listener for mouse move on the document
document.addEventListener('mousemove', (e) => {
  const textArr=[...textArea];

  if (isDragging) {
    const boxContainerHeight = e.clientY;
    
    boxContainer.style.height = `${boxContainerHeight}px`;
    output.style.height = `calc(${window.innerHeight}px - ${boxContainerHeight}px)`;
    
    textArr.forEach(el => {
      el.style.height=`${boxContainerHeight-labelHeight()}px`;
    });
  }
});


// const htmlCode=document.getElementById("html-code");
// const cssCode=document.getElementById("css-code");
// const jsCode=document.getElementById("js-code");
// const output=document.querySelector(".output");
// const dragger = document.getElementById('dragger');
// const boxContainer = document.querySelector('.box-container');
// const textArea=document.getElementsByTagName("textarea"); 
// const textLabel=document.getElementsByTagName("label");


// window.addEventListener("load",function(){
// loadValues();
// updateOutput();
// })

// function updateOutput(){
//   return  document.querySelector(".output").innerHTML=htmlCode.value+"<style>"+cssCode.value+"</style>"+"<script>"+jsCode.value+"</"+"script>";
// }

// htmlCode.addEventListener("input",function(){
//   saveValues();
// updateOutput();
// })
// cssCode.addEventListener("input",function(){
//   saveValues();
//   updateOutput();
// })
// jsCode.addEventListener("input",function(){
//   saveValues();
//   updateOutput();
//   executeJs();
// })

// function executeJs(){
// try{
// const scriptFunction= new Function(jsCode.value);
// scriptFunction();
// }catch(err){
// console.error("error in JS",err);
// }
// }



// function saveValues() {
//     localStorage.setItem('htmlCode', htmlCode.value);
//     localStorage.setItem('cssCode', cssCode.value);
//     localStorage.setItem('jsCode', jsCode.value);
//   }

//   function loadValues() {
//     htmlCode.value = localStorage.getItem('htmlCode') || '';
//     cssCode.value = localStorage.getItem('cssCode') || '';
//     jsCode.value = localStorage.getItem('jsCode') || '';
//   }


//   let isDragging = false;

//   dragger.addEventListener('mousedown', (e) => {
//     isDragging = true;
//   });

//   document.addEventListener('mouseup', () => {
//     isDragging = false;
//   });

//   function labelHeight(){
//     const labelArr=[...textLabel];
//     const elHeight= labelArr[0].offsetHeight;
//     return elHeight;
//   }



// output.style.height=`${window.innerHeight-boxContainer.clientHeight}px`;


//   document.addEventListener('mousemove', (e) => {
//     const textArr=[...textArea];
    

//     if (isDragging) {
//       const boxContainerHeight = e.clientY;
      
//       boxContainer.style.height = `${boxContainerHeight}px`;
//       output.style.height = `calc(${window.innerHeight}px - ${boxContainerHeight}px)`;
      
//     textArr.forEach(el => {
//       el.style.height=`${boxContainerHeight-labelHeight()}px`;
       
//       })

    
//     }
//   });


  
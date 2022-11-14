// printing the initial document object
console.log(document);

//finding the element h1 by its tag name and changing its content 
const h1_arr = document.getElementsByTagName("h1");
let h= h1_arr[0];
h.innerHTML = 'Lab12 Assignment';
h.style.color = 'blue';
//document.body.appendChild(h1);

//adding a horizontal line
let hr1 = document.createElement("hr");
document.body.appendChild(hr1);

//adding the "Task" line and changing its style
let h21 = document.createElement("h2");
h21.innerHTML = "Task";
h21.style.color = "red";
document.body.appendChild(h21);

//creating a new paragraph
let p1 = document.createElement("p");
p1.innerHTML = "In this task you have to reproduce this HTML page as is using <strong>only</strong> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:";
document.body.appendChild(p1);

//creating an unordered list
var ul1 = document.createElement("ul");

var li1 = document.createElement("li");
li1.innerHTML = "find elements in the DOM <strong>(5 points)</strong>;";
li1.classList.add("odd");
ul1.appendChild(li1);

var li2 = document.createElement("li");
li2.innerHTML = "create/add/remove elements <strong>(5 points)</strong>;";
li2.classList.add("even");
ul1.appendChild(li2);

var li3 = document.createElement("li");
li3.innerHTML = "change content of the elements <strong>(5 points)</strong>;";
ul1.appendChild(li3);
li3.classList.add("odd");

var li4 = document.createElement("li");
li4.innerHTML = "change styles of the elements <strong>(5 points)</strong>;";
li4.classList.add("even");
ul1.appendChild(li4);

var li5 = document.createElement("li");
li5.innerHTML = "change attributes of the elements <strong>(5 points)</strong>;";
ul1.appendChild(li5);
li5.classList.add("odd");

var li6 = document.createElement("li");
li6.innerHTML = "change classes of the elements <strong>(5 points)</strong>.";
li6.classList.add("even");
ul1.appendChild(li6);

document.body.appendChild(ul1);


//creating one more paragraph
let p2 = document.createElement("p");
p2.innerHTML = "Basic necessary code can be found in the supplementary materials to the Lecture 12 via this ";


let a1 = document.createElement("a");
a1.setAttribute("href", "https://github.com/yessen/nu_web_programming/tree/main/week12/lab12");
a1.innerText = "link";
p2.appendChild(a1);
document.body.appendChild(p2);

//adding a horizontal line
let hr2 = document.createElement("hr");
document.body.appendChild(hr2);


//adding the "Submission" line and changing its style
let h22 = document.createElement("h2");
h22.innerHTML = "Submission";
h22.style.color = "red";
document.body.appendChild(h22);


//creating a new paragraph
let p3 = document.createElement("p");
p3.innerHTML = "To submit your work, follow these instructions:";
document.body.appendChild(p3);

//creating an unordered list
var ul2 = document.createElement("ul");

var li11 = document.createElement("li");
li11.innerHTML = "Create a new repository on Github, named <strong>lab12 (1 point)</strong>.";
ul2.appendChild(li11);
li11.classList.add("odd");

var li12 = document.createElement("li");
li12.innerHTML = "Clone this repository to your local machine and work inside it.";
li12.classList.add("even");
ul2.appendChild(li12);

var li13 = document.createElement("li");
li13.innerHTML = "Create a new HTML file, called <strong>index.html</strong>, which has only one &lth1&gt tag with \"Hello, World!\" message <strong>(1 point)</strong>.";
ul2.appendChild(li13);
li13.classList.add("odd");


var li14 = document.createElement("li");
li14.innerHTML = "Create a new JavaScript file, called <strong>main.js</strong>, which must contain your program (assignment) described above <strong>(1 point)</strong>.";
li14.classList.add("even");
ul2.appendChild(li14);

var li15 = document.createElement("li");
li15.innerHTML = "Link this <strong>main.js</strong> file to your <strong>index.html</strong> file (Note: place your script at the end of the <strong>body</strong> section).";
ul2.appendChild(li15);
li15.classList.add("odd");

var li16 = document.createElement("li");
li16.innerHTML = "Write a JavaScript program in <strong>main.js</strong> to make your <strong>index.html</strong> look identical to this HTML file <strong>(5 points)</strong>.";
li16.classList.add("even");
ul2.appendChild(li16);

var li17 = document.createElement("li");
li17.innerHTML = "After you finish your work, submit it to the Github <strong>(2 points)</strong>.";
ul2.appendChild(li17);
li17.classList.add("odd");

document.body.appendChild(ul2);


const X = document.getElementsByClassName("odd");
console.log(X); 

for (let i=0; i<X.length;i++) {
	X[i].style.color = 'green';
}

const Y = document.getElementsByClassName("even");
console.log(Y); 

for (let i=0; i<Y.length;i++) {
	Y[i].style.color = 'purple';
}


let hr3 = document.createElement("hr");
document.body.appendChild(hr3);
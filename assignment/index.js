// Use the provided index.html
// -----------------------------------------------------------------------------------

// 1. USA
// Define function getUSA()
// Find the html element that contains "USA".
// Print that element's contents.
function getUSA() {
   
    const result = document.getElementsByTagName('span');
    let element = '';
    for (const i in result) {
        if (result[i].innerText === 'USA') {
            element = result[i];
       
        }
    }
    console.log(element);
}
getUSA();

// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.

function getPeopleInSales() {
    
    const result = document.getElementsByTagName('sd')
    let employees = [];

    for (const i of result) {
        let children = key.children;
        if(children[1].innerText === 'Sales') {
            employees.push(children[0].innerText)
        }
        
    }

 console.log(employees);
}
getPeopleInSales();


// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>

function getAnchorChildren() {
   
    const result = document.getElementsByTagName('a')
    let spans = [];

   
    for (const i of result) {
        
        let child = key.getElementsByTagName('span');
        
         
        if(child[0]) {
            
            spans.push(child[0].innerText)
            
        }
        
    }

 console.log(spans);
}
getAnchorChildren();


// 4. Hobbies
// Define function getHobbies()
// Find the selected 'hobby' in the select element.
// Print the value and the contents.

function getHobbies() {
    const hobbiearr = [];
    let temphold, selectArr = document.getElementsByTagName('select');

    for (let i = 0; i < selectArr.length; i++) {
        if (selectArr[i].name === 'hobbies') {
            temphold = selectArr[i];
        }
    }

    for (let i = 0; i< temphold.children.length; i++) {
        if (temphold.children.item(i).getAttribute('selected')) {
            hobbiearr.push(temphold.children.item(i).innerText);
        }
    }

    return hobbiearr;
}
console.log(getHobbies());

// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute.

function getCustomAttribute() {
    let elemarr = [];

    elemtAttr = document.querySelectorAll('[data-customAttr]');
    elemtAttr.forEach((value) => {
        console.log(value, value.innerText);
    })
}
getCustomAttribute();

// 6. Sum Event
// Regarding these elements:
// 	<input id="num1" class="nums" type="text"/>
// 	<input id="num2" class="nums" type="text"/>
// 	<h3>Sum: <span id="sum"></span></h3>  
// Define onchange event handler.
// Add <input> element values.
// Put the sum in the <span> element.
// If values cannot be added, put "Cannot add" in the <span> element


function sumEvent() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let sum = document.getElementById('sum');
    if(isNaN(num1) || isNaN(num2) || num1 === '' || num2 === ''){
        sum.innerText = 'Cannot add'
    }else {

        sum.innerText = `${Number(num1)+Number(num2)}`
    }


}
document.addEventListener("change", sumEvent)


// 7. Skills Event
// When user selects a skill, create an alert with a message similar to:
// 	"Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.
// Note: Try bootstrap model rather then alert



// 8. Favorite Color Event
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
// 	"So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor


function Color() {
    const color = document.getElementsByName('favoriteColor');
    let oldColor = 'white', newColor;
    color.forEach((element) => {
        element.addEventListener('change', function() {
            alert(`So you like ${element.value} more than ${oldColor} now?`);
            oldColor = element.value
            newColor = element.value;
            document.getElementsByTagName('body').item(0).style.backgroundColor = newColor;
        });
    });
} Color();



// 9. Show/Hide Event
// When user hovers over an employees name:
// 	Hide the name if shown.
// 	Show the name if hidden.
//  Note: Might want to just change color of text to hide the element

const employeesName = document.getElementsByClassName('employeeName');
for(emp of employeesNname) {
    emp.style.opacity = '1';
}

for(emp of employeesName) {
    emp.addEventListener('mouseover', function(e) {
        if(this.style.opacity==='1') {
            this.style.opacity = '0';
        } else {
            this.style.opacity = '1';
        }
    });
}


// 10. Current Time
// Regarding this element:
// 	<h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.
// تناعت لتا عاهلا عنا timerUpdater();
// setInterval( () => {
//     document.getElementById("currentTime")
//     .innerText = new Date()
//     .toLocaleTimeString('en-US')
//     }, 100)
function Time(){
	document.getElementById("currentTime").innerHTML = new Date().toLocaleTimeString();
}

setInterval(Time, 500);

  


// 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.


// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).

//مسنتيبى تنيىبل هعفقلت ىفت تف تفلتف


function walkTheDOM(node, func){
	let branch ='';
	for (let i = 0; i < func; i++) {branch+='-';}
	console.log(branch, node.nodeName);
	func++;
	node.childNodes.forEach(child => {
		walkTheDOM(child, func);
	});
}

walkTheDOM(document, 0);
console.log();
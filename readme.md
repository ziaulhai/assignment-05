1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?


Ans-  document.getElementById() - It can select one element with the given id. IDs should be unique in a page, so you always get only one element.

getElementsByClassName()- It can select all elements that have the given class. We must use indexing ([0], [1], etc.) or loop to accessing elements

querySelector()- It selects the first element that matches the css selector like
 ID, class, tag, attribute, descendant, etc.


querySelectorAll()- It selects all elements matching the CSS selector. It can use indexing, forEach, etc. to accessing elements.


How do you create and insert a new element into the DOM?


Ans- Existing HTML: <div id="container">
                          <p id="first-item">First item</p>
                    </div>

js:

// Step 1: Create
const newParagraph = document.createElement("p");

// Step 2: Add content & class
newParagraph.textContent = "I'm a new paragraph!";
newParagraph.className = "highlight";

// Step 3: Insert
const container = document.getElementById("container");
container.appendChild(newParagraph);


Result: 
<div id="container">
  <p id="first-item">First item</p>
  <p class="highlight">I'm a new paragraph!</p>
</div>


What is Event Bubbling and how does it work?

Ans-  Event bubbling is the process where an event starts from the targeted deepest element that was actually clicked/triggered and then bubbles up to its parent elements.


It works-
1st: Event target
2nd: Bubbling phase
3rd: Event keeps traveling upward unless we stop it.


What is Event Delegation in JavaScript? Why is it useful?

Ans: Event Delegation is a technique in JavaScript where you attach a single event listener to a parent element, instead of attaching separate listeners to each child.
When an event happens on a child, it bubbles up, and the parent’s event listener can check which child triggered it.

Why is it useful: 
Performance, Fewer event listeners, less memory usage.
Cleaner code, Easier to maintain.



What is the difference between preventDefault() and stopPropagation() methods?

Ans:  event.preventDefault() prevents the default browser action from happening.
   
   event.stopPropagation() stops the event from bubbling up.
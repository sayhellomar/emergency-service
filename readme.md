## Answers

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

**Answer:** 
    - By **getElementById**, we can select a specific element from the DOM with the id.
    - Using **getElementsByClassName**, we can get all elements of the DOM which are matched with specific class.
    - We use **querySelector**, when we want to select the first element from the DOM whether it's a class or id.
    - With **querySelectorAll**, we can get all the elements of the DOM which are matched whether it's a class or id, but it's a good practice to make id unique. We generally use **querySelectorAll** to select classes.
**getElementsByClassName** returns an HTMLCollection where **querySelectorAll** returns a NodeList.

2. How do you **create and insert a new element into the DOM**?

**Answer:**
```bash
const div = document.createElement('div');
document.appendChild(div);
```
3. What is **Event Bubbling** and how does it work?

**Answer: Event Bubbling** is a JavaScript machanism which is related to an event. When an event occurs, JavaScript first try to capture the event from top to bottom and when capturing phase found the triggered element then it goes to top from bottom and it's called **Event Bubbling**
4. What is **Event Delegation** in JavaScript? Why is it useful?

**Answer: Event Delegation** is a technique, which developers use using event bubbling mechanism. Generally, an event hooked into it's parent element instead of child element and get the target element to do something. It's useful to reduce multiple event, can target the element which was not on the DOM initially. Also, useful for organized code & future maintenance.
5. What is the difference between **preventDefault() and stopPropagation()** methods?

**Answer:** **preventDefault()** stops the default behavior of forms, buttons or anchor where **stopPropagation()** use to stop default machanism of event bubbling.
# 📝 Task Manager App

🌐 **Live Demo:** https://mytask-manager-ass7.netlify.app/

A responsive **Task Manager (Todo List)** built using **HTML, CSS, and JavaScript**. This project helped me strengthen my understanding of **DOM manipulation, event handling, state management, and dynamic user interfaces** without using any external libraries or frameworks.

---

## 🚀 Features

- ➕ Add new tasks
- ✏️ Edit existing tasks
- ✅ Mark tasks as completed and undo completion
- 🗑️ Delete tasks with a confirmation dialog
- 🌙 Light/Dark theme toggle
- 🏷️ Assign task categories
- 📊 Live task statistics (Total, Completed, Pending)
- 📱 Responsive design for desktop and mobile devices

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

---

## 📚 Browser Rendering & JavaScript Concepts

### 🔹 1. Parsing

**Definition**

Parsing is the process where the browser reads the HTML or CSS code and converts it into a structure that it can understand. During parsing, the browser identifies elements, attributes, and their relationships before creating the DOM and CSSOM trees.

**Example**

```html
<body>
    <h1>Hello World</h1>
    <p>Welcome!</p>
</body>
```

The browser parses this HTML and prepares it for creating the DOM Tree.

---

### 🔹 2. Tokenization

**Definition**

Tokenization is the first step of parsing. The browser breaks the HTML source code into small meaningful pieces called **tokens** such as start tags, end tags, text nodes, and attributes.

**Example**

```html
<p class="text">Hello</p>
```

Generated Tokens:

```text
Start Tag  -> <p>
Attribute  -> class="text"
Text       -> Hello
End Tag    -> </p>
```

These tokens are later used to build the DOM Tree.

---

### 🔹 3. DOM Tree (Document Object Model)

**Definition**

The DOM Tree is a tree-like representation of an HTML document. Every HTML element becomes an object (node) that JavaScript can access and manipulate.

**HTML**

```html
<body>
    <div>
        <p>Hello</p>
    </div>
</body>
```

**DOM Tree**

```text
Document
│
└── html
    │
    └── body
        │
        └── div
            │
            └── p
```

**JavaScript Example**

```javascript
const heading = document.querySelector("p");

heading.textContent = "Hello JavaScript!";
```

---

### 🔹 4. CSSOM Tree (CSS Object Model)

**Definition**

The CSSOM Tree is created by parsing CSS. It contains all CSS rules and styles that the browser uses to style the webpage.

**CSS**

```css
p{
    color: blue;
    font-size: 20px;
}
```

The browser stores these rules inside the CSSOM Tree before combining them with the DOM Tree.

---

### 🔹 5. Render Tree

**Definition**

The Render Tree is created by combining the DOM Tree and the CSSOM Tree. It contains only the visible elements with their computed styles. Elements with `display: none` are not included.

**Rendering Pipeline**

```text
HTML
 ↓
Parsing
 ↓
Tokenization
 ↓
DOM Tree

CSS
 ↓
Parsing
 ↓
CSSOM Tree

DOM + CSSOM
 ↓
Render Tree
 ↓
Layout
 ↓
Paint
 ↓
Screen
```

---

### 🔹 6. Event Bubbling

**Definition**

Event Bubbling is the default event flow in JavaScript. When an event occurs, it starts from the target element and moves upward through its parent elements until it reaches the `document`.

**HTML**

```html
<div id="parent">
    <button id="child">Click Me</button>
</div>
```

**JavaScript**

```javascript
const parent = document.getElementById("parent");
const child = document.getElementById("child");

parent.addEventListener("click", () => {
    console.log("Parent Clicked");
});

child.addEventListener("click", () => {
    console.log("Button Clicked");
});
```

**Output**

```text
Button Clicked
Parent Clicked
```

---

### 🔹 7. Event Capturing

**Definition**

Event Capturing is the opposite of Event Bubbling. The event starts from the outermost ancestor and travels down to the target element.

**JavaScript**

```javascript
parent.addEventListener(
    "click",
    () => {
        console.log("Parent");
    },
    true
);

child.addEventListener(
    "click",
    () => {
        console.log("Button");
    },
    true
);
```

**Output**

```text
Parent
Button
```

---

### 🔹 8. Event Delegation

**Definition**

Event Delegation is a technique where a single event listener is attached to a parent element to handle events for all of its child elements using Event Bubbling. It is especially useful when elements are created dynamically.

**HTML**

```html
<ul id="list">
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
```

**JavaScript**

```javascript
const list = document.getElementById("list");

list.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        console.log(event.target.textContent);
    }
});
```

If you click **CSS**, the output will be:

```text
CSS
```

---

# 🚀 Browser Rendering Pipeline

```text
HTML
 │
 ▼
Parsing
 │
 ▼
Tokenization
 │
 ▼
DOM Tree

CSS
 │
 ▼
Parsing
 │
 ▼
CSSOM Tree

DOM Tree + CSSOM Tree
 │
 ▼
Render Tree
 │
 ▼
Layout
 │
 ▼
Paint
 │
 ▼
Screen
```

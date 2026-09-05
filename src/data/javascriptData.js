// JavaScript Introduction
// JavaScript Comments
// JavaScript Variables (var, let, const)
// JavaScript User Input (prompt, readline, form inputs)
// JavaScript Data Types (Primitives & Reference Types)
// JavaScript Type Conversion & Coercion
// JavaScript Operators
// JavaScript Conditional Statements (if-else, switch, ternary)
// JavaScript Loops (for, while, do-while, for...in, for...of)
// JavaScript Strings & Template Literals
// JavaScript Arrays & Array Methods
// JavaScript Functions (Declarations, Expressions, Arrow Functions)
// JavaScript Objects & Object Literals
// JavaScript Classes & Constructors
// JavaScript Scope & Closures
// JavaScript Encapsulation (Private fields #)
// JavaScript Prototypes & Prototypal Inheritance
// JavaScript Polymorphism
// JavaScript Abstraction
// JavaScript Modules (import / export)
// JavaScript Error Handling (try...catch, throw)
// JavaScript Web Storage & File API (localStorage, Blob, FileReader)
// JavaScript Collections (Map, Set, WeakMap, WeakSet)
// JavaScript Asynchronous Programming (Callbacks, Promises, async/await)
// JavaScript Event Loop & Concurrency Model
// JavaScript DOM Manipulation & Events
// JavaScript Higher-Order Functions (map, filter, reduce)
// JavaScript Destructuring & Rest/Spread Operators
export const javascriptData = {
  subjectTitle: "JavaScript",
  subjectCode: "javascript", 
  topics: [
    // ================= TOPIC 0: JAVASCRIPT introduction =================
    {
      id: "javascript-introduction",
      title: "JavaScript Introduction",
      subjectCode: "javascript",
      intro:
        "JavaScript is a high-level, interpreted (or just-in-time compiled) programming language conforming to the ECMAScript specification. Originally created to make web pages interactive, it has evolved into a versatile, multi-paradigm language that powers client-side web browsers, server-side environments like Node.js, and cross-platform desktop and mobile applications.",
      sections: [
        {
          heading: "What is JavaScript?",
          content: [
            {
              type: "text",
              value:
                "JavaScript is one of the core technologies of the World Wide Web, alongside HTML (structure) and CSS (presentation). While HTML sets up the page and CSS styles it, JavaScript provides interactivity, dynamic content updates, event handling, and asynchronous communication with servers.",
            },
            {
              type: "list",
              items: [
                " Lightweight, interpreted or JIT-compiled language",
                " Dynamic typing and prototype-based object model",
                " First-class functions (functions can be treated like variables)",
                " Single-threaded with an asynchronous event-driven runtime model",
              ],
            },
          ],
        },
        {
          heading: "How JavaScript Runs in HTML",
          content: [
            {
              type: "text",
              value:
                "JavaScript can be included directly inside an HTML document using the <code>&lt;script&gt;</code> tag, or placed in an external file with a <code>.js</code> extension and linked into the HTML page.",
            },
            {
              type: "text",
              value: "<strong>Syntax:</strong>",
            },
            {
              type: "code",
              value: `<script>\n  // JavaScript code goes here\n</script>`,
            },
            {
              type: "text",
              value: "<strong>Example (Inline JavaScript):</strong>",
            },
            {
              type: "code",
              value: `<!DOCTYPE html>
<html>
<head>
  <title>JS Demo</title>
</head>
<body>
  <h1 id="heading">Hello World</h1>

  <script>
    document.getElementById("heading").innerText = "Welcome to JavaScript!";
  </script>
</body>
</html>`,
            },
            {
              type: "text",
              value:
                "<strong>Example (External JavaScript file - script.js):</strong>",
            },
            {
              type: "code",
              value: `// Link inside HTML: <script src="script.js"></script>\nconsole.log("Hello from external file!");`,
            },
          ],
        },
        {
          heading: "Writing Your First JavaScript Program",
          content: [
            {
              type: "text",
              value:
                "The easiest way to display output in JavaScript is by using <code>console.log()</code>, which prints data to the browser's developer console or the terminal in Node.js.",
            },
            {
              type: "text",
              value: "<strong>Syntax:</strong>",
            },
            {
              type: "code",
              value: `console.log(message);`,
            },
            {
              type: "text",
              value: "<strong>Example:</strong>",
            },
            {
              type: "code",
              value: `let greeting = "Hello, World!";
console.log(greeting);`,
            },
            {
              type: "text",
              value: "<strong>Output:</strong><br/>Hello, World!",
            },
          ],
        },
        {
          heading: "Key Features of JavaScript",
          content: [
            {
              type: "list",
              items: [
                " Cross-Platform: Runs on all modern web browsers and backend servers via Node.js.",
                " Rich Ecosystem: Access to thousands of libraries and packages via npm (Node Package Manager).",
                " Asynchronous Processing: Handles heavy network requests and timers without freezing user interfaces using Promises and async/await.",
                " Dynamic DOM Manipulation: Allows adding, deleting, and updating HTML elements in response to user actions.",
              ],
            },
          ],
        },
      ],
      // ==========================================
      // PLAYGROUND ADDED HERE
      // ==========================================
      playground: [
        {
          title: "Hello World in Console",
          code: `let greeting = "Hello, World!";\nconsole.log(greeting);`,
          output: "Hello, World!",
        },
        {
          title: "Basic Math Operation",
          code: `let a = 10;\nlet b = 20;\nlet sum = a + b;\nconsole.log("Sum is: " + sum);`,
          output: "Sum is: 30",
        },
      ],
      conclusion:
        "JavaScript is the foundational language of modern web development. Mastering JavaScript unlocks frontend frameworks like React and Vue, backend development with Node.js, and mobile and desktop software ecosystems.",
    },
    // ================= TOPIC 1: JAVASCRIPT COMMENTS =================
    {
      id: "javascript-comments",
      title: "JavaScript Comments",
      subjectCode: "javascript",
      intro:
        "JavaScript comments are annotations in the source code that are ignored by JavaScript engines during execution. Comments can be used to explain code logic, make it more readable, provide metadata, or temporarily disable sections of code during debugging.",
      sections: [
        {
          heading: "Types of JavaScript Comments",
          content: [
            {
              type: "text",
              value: "There are primarily 2 standard comment syntaxes in JavaScript, along with a specialized documentation standard called JSDoc.",
            },
            {
              type: "list",
              items: [
                " Single Line Comment",
                " Multi Line Comment",
                " Documentation Comment (JSDoc)",
              ],
            },
          ],
        },
        {
          heading: "1. JavaScript Single Line Comment",
          content: [
            {
              type: "text",
              value:
                "Single line comments start with two forward slashes (//). Any text between // and the end of the line is ignored by the browser or runtime.",
            },
            {
              type: "text",
              value: "<strong>Syntax:</strong>",
            },
            {
              type: "code",
              value: `// This is a single line comment`,
            },
            {
              type: "text",
              value: "<strong>Example:</strong>",
            },
            {
              type: "code",
              value: `let name = "W3CODER"; // Here, name is a variable
console.log(name);`,
            },
            {
              type: "text",
              value: "<strong>Output:</strong><br/>W3CODER",
            },
          ],
        },
        {
          heading: "2. JavaScript Multi Line Comment",
          content: [
            {
              type: "text",
              value:
                "Multi line comments start with /* and end with */. Any text between them will be ignored by JavaScript.",
            },
            {
              type: "text",
              value: "<strong>Syntax:</strong>",
            },
            {
              type: "code",
              value: `/*\nThis\nis a\nmulti line\ncomment\n*/`,
            },
            {
              type: "text",
              value: "<strong>Example:</strong>",
            },
            {
              type: "code",
              value: `/* Let's declare and
print variable in JavaScript. */

let name = "w3coder";
console.log(name);`,
            },
            {
              type: "text",
              value: "<strong>Output:</strong><br/>w3coder",
            },
          ],
        },
        {
          heading: "3. JavaScript Documentation Comment (JSDoc)",
          content: [
            {
              type: "text",
              value:
                "JSDoc comments start with /** and end with */. They are used to annotate functions, types, and modules. Tools like VS Code use JSDoc for rich autocomplete and type checking, while tools like the jsdoc CLI generate HTML API documentation.",
            },
            {
              type: "text",
              value: "<strong>Syntax:</strong>",
            },
            {
              type: "code",
              value: `/**\n * Description of the function\n * @param {type} paramName\n * @returns {type}\n */`,
            },
            {
              type: "text",
              value: "<strong>Example:</strong>",
            },
            {
              type: "code",
              value: `/**
 * Adds two numbers together.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of a and b.
 */
function add(a, b) {
  return a + b;
}

console.log(add(5, 10));`,
            },
            {
              type: "text",
              value: "<strong>Generate Documentation using jsdoc CLI:</strong>",
            },
            {
              type: "code",
              value: `npx jsdoc script.js`,
            },
            {
              type: "text",
              value:
                "An <code>out/</code> directory containing complete HTML documentation will be created. Open <code>index.html</code> in a browser to explore the generated API pages.",
            },
          ],
        },
      ],
      // ==========================================
      // PLAYGROUND ADDED HERE
      // ==========================================
      playground: [
        {
          title: "Single Line Comment",
          code: `let name = "W3CODER"; // Here, name is a variable\nconsole.log(name);`,
          output: "W3CODER",
        },
        {
          title: "Multi Line Comment",
          code: `/* Let's declare and\n   print variable in JavaScript. */\nlet name = "w3coder";\nconsole.log(name);`,
          output: "w3coder",
        },
      ],
      conclusion:
        "Comments in JavaScript are vital for writing maintainable code and collaborating with other engineers. They allow developers to clarify complex algorithms, document API signatures with JSDoc, and debug effectively without modifying program execution.",
    },
    // ================= TOPIC 2: JAVASCRIPT VARIABLES =================
    {
      id: "javascript-variables",
      title: "JavaScript Variables",
      subjectCode: "javascript",
      intro:
        "Variables are containers for storing data values. In JavaScript, variables can be declared using three keywords: var, let, and const. Each keyword determines how the variable behaves regarding scope, reassignment, and hoisting.",
      sections: [
        {
          heading: "Ways to Declare a Variable",
          content: [
            {
              type: "text",
              value:
                "JavaScript provides three keywords to declare variables, along with different rules for mutability and scope.",
            },
            {
              type: "list",
              items: [
                " let: Block-scoped, reassignable, preferred for mutable variables (introduced in ES6).",
                " const: Block-scoped, read-only reference, cannot be reassigned (introduced in ES6).",
                " var: Function-scoped or globally-scoped, can be redeclared and reassigned (legacy keyword).",
              ],
            },
          ],
        },
        {
          heading: "1. The let Keyword",
          content: [
            {
              type: "text",
              value:
                "Variables defined with <code>let</code> cannot be redeclared within the same block scope, but their values can be reassigned.",
            },
            {
              type: "text",
              value: "<strong>Syntax:</strong>",
            },
            {
              type: "code",
              value: `let variableName = value;`,
            },
            {
              type: "text",
              value: "<strong>Example:</strong>",
            },
            {
              type: "code",
              value: `let score = 100;
score = 150; // Valid reassignment
console.log(score);`,
            },
            {
              type: "text",
              value: "<strong>Output:</strong><br/>150",
            },
          ],
        },
        {
          heading: "2. The const Keyword",
          content: [
            {
              type: "text",
              value:
                "Variables declared with <code>const</code> maintain constant values. They cannot be reassigned or redeclared, and they must be assigned a value when declared.",
            },
            {
              type: "text",
              value: "<strong>Syntax:</strong>",
            },
            {
              type: "code",
              value: `const variableName = value;`,
            },
            {
              type: "text",
              value: "<strong>Example:</strong>",
            },
            {
              type: "code",
              value: `const PI = 3.14159;
console.log(PI);

// PI = 3.14; // Uncaught TypeError: Assignment to constant variable.`,
            },
            {
              type: "text",
              value: "<strong>Output:</strong><br/>3.14159",
            },
          ],
        },
        {
          heading: "3. The var Keyword (Legacy)",
          content: [
            {
              type: "text",
              value:
                "Before ES6 (2015), <code>var</code> was the only way to declare variables. It has function scope (ignores block boundaries like <code>if</code> and <code>for</code> loops) and gets hoisted to the top with a default value of <code>undefined</code>. It is recommended to use <code>let</code> and <code>const</code> instead.",
            },
            {
              type: "text",
              value: "<strong>Example:</strong>",
            },
            {
              type: "code",
              value: `var city = "Delhi";
var city = "Mumbai"; // Allowed: Redeclaration
console.log(city);`,
            },
            {
              type: "text",
              value: "<strong>Output:</strong><br/>Mumbai",
            },
          ],
        },
        {
          heading: "Variable Naming Rules",
          content: [
            {
              type: "list",
              items: [
                " Names must begin with a letter, an underscore (_), or a dollar sign ($).",
                " Names cannot begin with a number.",
                " Names can only contain alphanumeric characters, underscores, and dollar signs.",
                " Names are case-sensitive (age and Age are different variables).",
                " Reserved JavaScript keywords (such as class, return, function) cannot be used as variable names.",
              ],
            },
          ],
        },
      ],
      // ==========================================
      // PLAYGROUND ADDED HERE
      // ==========================================
      playground: [
        {
          title: "Reassigning with let",
          code: `let count = 5;\ncount = count + 1;\nconsole.log(count);`,
          output: "6",
        },
        {
          title: "Constant Values with const",
          code: `const company = "OpenAI";\nconsole.log("Welcome to " + company);`,
          output: "Welcome to OpenAI",
        },
      ],
      conclusion:
        "Modern JavaScript best practice is to default to const for all variable declarations. Only switch to let when you know the variable's value must change over time, and avoid using var.",
    },
    // ================= TOPIC 4: JAVASCRIPT USER INPUT =================
    {
      id: "javascript-user-input",
      title: "JavaScript User Input",
      subjectCode: "javascript",
      intro:
        "User input refers to receiving data from an end-user during program execution. In JavaScript, taking input varies depending on the platform: browsers provide interactive modal dialogs and HTML form controls, while backend runtimes like Node.js rely on standard input streams using the built-in readline module.",
      sections: [
        {
          heading: "Methods to Capture Input in JavaScript",
          content: [
            {
              type: "text",
              value:
                "JavaScript handles user interaction differently based on where the code executes:",
            },
            {
              type: "list",
              items: [
                " Browser Modal Dialog (prompt): Quick pop-up dialog box directly inside the browser.",
                " Web Form Controls (DOM): Reading input fields, textareas, and select menus using document APIs.",
                " Node.js Terminal Input (readline): Reading command-line arguments and terminal streams via process.stdin.",
              ],
            },
          ],
        },
        {
          heading: "1. Browser Input using prompt()",
          content: [
            {
              type: "text",
              value:
                "The <code>window.prompt()</code> method displays a modal dialog with an optional message prompting the user for text. It halts execution until the user clicks OK (returns a string) or Cancel (returns <code>null</code>).",
            },
            {
              type: "text",
              value: "<strong>Syntax:</strong>",
            },
            {
              type: "code",
              value: `let input = prompt(message, defaultValue);`,
            },
            {
              type: "text",
              value: "<strong>Example:</strong>",
            },
            {
              type: "code",
              value: `let userName = prompt("Enter your name:", "Guest");

if (userName !== null) {
  console.log("Welcome, " + userName + "!");
} else {
  console.log("User cancelled the prompt.");
}`,
            },
            {
              type: "text",
              value: "<strong>Output (Console):</strong><br/>Welcome, Guest!",
            },
          ],
        },
        {
          heading: "2. Input from HTML Form Elements (DOM)",
          content: [
            {
              type: "text",
              value:
                "In real-world web applications, user data is collected through HTML forms. JavaScript accesses the entered value using the <code>value</code> property of the targeted DOM node.",
            },
            {
              type: "text",
              value: "<strong>Example (HTML + JavaScript):</strong>",
            },
            {
              type: "code",
              value: `<!-- HTML Structure -->
<input type="text" id="usernameInput" placeholder="Enter your username" />
<button id="submitBtn">Submit</button>

<!-- JavaScript Logic -->
<script>
  const button = document.getElementById("submitBtn");
  
  button.addEventListener("click", () => {
    const inputField = document.getElementById("usernameInput");
    const enteredValue = inputField.value.trim();
    
    console.log("Submitted Username: " + enteredValue);
  });
</script>`,
            },
            {
              type: "text",
              value:
                "<strong>Note:</strong> Values fetched from HTML inputs are always of type <code>string</code>. Use <code>Number()</code> or <code>parseInt()</code> if working with numeric calculations.",
            },
          ],
        },
        {
          heading: "3. Terminal Input in Node.js (readline)",
          content: [
            {
              type: "text",
              value:
                "For server-side and command-line interfaces in Node.js, the built-in <code>readline</code> module allows reading user input line-by-line from the standard input stream (<code>process.stdin</code>).",
            },
            {
              type: "text",
              value: "<strong>Example:</strong>",
            },
            {
              type: "code",
              value: `const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your favorite programming language? ", (answer) => {
  console.log("You selected: " + answer);
  rl.close();
});`,
            },
          ],
        },
      ],
      // ==========================================
      // PLAYGROUND ADDED HERE
      // ==========================================
      playground: [
        {
          title: "Handling and Greeting Input",
          code: `// Simulating input received from an input field or prompt\nlet userInput = "John Doe";\nlet greeting = "Hello, " + userInput.trim() + "!";\nconsole.log(greeting);`,
          output: "Hello, John Doe!",
        },
        {
          title: "Numeric Input & Type Casting",
          code: `// All inputs arrive as strings\nlet rawInput = "42";\nlet parsedNumber = Number(rawInput);\n\nconsole.log("Original Type: " + typeof rawInput);\nconsole.log("Converted Type: " + typeof parsedNumber);\nconsole.log("Result + 10: " + (parsedNumber + 10));`,
          output: "Original Type: string\nConverted Type: number\nResult + 10: 52",
        },
      ],
      conclusion:
        "Capturing user input is central to making software interactive. Whether reading modal pop-ups via prompt, parsing text fields with DOM events, or streaming CLI entries with Node.js readline, remember that all captured values arrive as strings and must be parsed when numerical operations are required.",
    },
    // ================= TOPIC 5: JAVASCRIPT DATA TYPES =================
    {
      id: "javascript-data-types",
      title: "JavaScript Data Types",
      subjectCode: "javascript",
      intro:
        "Data types define the kind of data that can be stored and manipulated within a program. JavaScript is a dynamically typed language, meaning variables are not bound to a specific data type; instead, types are associated with the underlying values at runtime. In JavaScript, data types are broadly divided into two categories: Primitive types and Reference (Non-Primitive) types.",
      sections: [
        {
          heading: "Classification of JavaScript Data Types",
          content: [
            {
              type: "text",
              value:
                "JavaScript values fall into two distinct groups based on how they are stored and accessed in memory:",
            },
            {
              type: "list",
              items: [
                " Primitive Types: Immutable values stored directly on the stack by value.",
                " Reference Types: Complex data structures stored on the heap, accessed through memory references.",
              ],
            },
          ],
        },
        {
          heading: "1. Primitive Data Types",
          content: [
            {
              type: "text",
              value:
                "Primitives represent single, immutable values. There are 7 primitive data types in modern JavaScript:",
            },
            {
              type: "list",
              items: [
                " String: Textual data enclosed in single, double quotes, or backticks (e.g., 'Hello').",
                " Number: Integer and floating-point values up to ±(2^53 - 1).",
                " BigInt: Arbitrary precision integers for values exceeding safe integer limits.",
                " Boolean: Logical entity having two values: true or false.",
                " Undefined: A variable that has been declared but not assigned a value.",
                " Null: Intentional absence of any object value.",
                " Symbol: Unique and immutable identifier commonly used as object property keys.",
              ],
            },
            {
              type: "text",
              value: "<strong>Example:</strong>",
            },
            {
              type: "code",
              value: `let username = "Aman";          // String
let age = 24;                   // Number
let largeNum = 9007199254740995n; // BigInt
let isEnrolled = true;          // Boolean
let unassignedVar;              // Undefined
let selectedItem = null;        // Null
let uniqueId = Symbol("id");    // Symbol

console.log(typeof username);   // string
console.log(typeof age);        // number
console.log(typeof isEnrolled); // boolean`,
            },
            {
              type: "text",
              value:
                "<strong>Note:</strong> <code>typeof null</code> returns <code>'object'</code>. This is a well-known legacy bug in JavaScript maintained for backward compatibility.",
            },
          ],
        },
        {
          heading: "2. Reference (Non-Primitive) Data Types",
          content: [
            {
              type: "text",
              value:
                "Reference types represent collections of properties or executable blocks. They are mutable, and variables hold a memory reference pointing to where the object resides in the heap.",
            },
            {
              type: "list",
              items: [
                " Object: Key-value pairs used to store complex structures.",
                " Array: Ordered list of values indexed numerically.",
                " Function: Callable block of code that acts as a first-class object.",
                " Date & RegExp: Built-in standard utility objects.",
              ],
            },
            {
              type: "text",
              value: "<strong>Example:</strong>",
            },
            {
              type: "code",
              value: `// Object
let student = { name: "Rohit", rollNumber: 101 };

// Array
let marks = [85, 92, 78];

// Function
function greet() {
  return "Hello World";
}

console.log(typeof student); // object
console.log(typeof marks);   // object
console.log(typeof greet);   // function`,
            },
          ],
        },
        {
          heading: "Primitive vs Reference: Value vs Reference",
          content: [
            {
              type: "text",
              value:
                "The critical difference between primitive and reference types lies in how copies are handled. Primitives copy the actual value, while reference types copy the memory address.",
            },
            {
              type: "code",
              value: `// Primitive Copy (Passed by Value)
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 (a does not change)

// Reference Copy (Passed by Reference)
let user1 = { name: "Priya" };
let user2 = user1;
user2.name = "Sneha";
console.log(user1.name); // "Sneha" (user1 is mutated!)`,
            },
          ],
        },
      ],
      // ==========================================
      // PLAYGROUND ADDED HERE
      // ==========================================
      playground: [
        {
          title: "Checking Primitive Types",
          code: `let site = "W3Coder";\nlet rating = 4.9;\nlet isLive = true;\nlet status = null;\n\nconsole.log(typeof site);\nconsole.log(typeof rating);\nconsole.log(typeof isLive);\nconsole.log(typeof status);`,
          output: "string\nnumber\nboolean\nobject",
        },
        {
          title: "Reference Mutation Demo",
          code: `let original = [1, 2, 3];\nlet alias = original;\n\nalias.push(4);\nconsole.log("Original Array: " + JSON.stringify(original));\nconsole.log("Alias Array:    " + JSON.stringify(alias));`,
          output: "Original Array: [1,2,3,4]\nAlias Array:    [1,2,3,4]",
        },
      ],
      conclusion:
        "JavaScript provides 7 primitive types (String, Number, BigInt, Boolean, Undefined, Null, Symbol) and reference types (Objects, Arrays, Functions). Understanding that primitives are stored by value while reference types are stored by reference is essential for preventing unintended state mutations and debugging complex data flows.",
    },
    // ================= TOPIC 6: JAVASCRIPT TYPE CONVERSION & COERCION =================
    {
      id: "javascript-type-conversion",
      title: "JS Type Conversion",
      subjectCode: "javascript",
      intro:
        "Type conversion is the process of translating a value from one data type to another. In JavaScript, this happens in two distinct ways: Explicit Conversion (Type Casting), where the developer manually transforms the type, and Implicit Conversion (Type Coercion), where JavaScript automatically converts types behind the scenes to complete an operation.",
      sections: [
        {
          heading: "Conversion vs Coercion",
          content: [
            {
              type: "text",
              value:
                "Understanding the distinction between developer-driven conversion and engine-driven coercion is critical for avoiding subtle runtime bugs:",
            },
            {
              type: "list",
              items: [
                " Explicit Conversion (Type Casting): Done intentionally via built-in constructor functions like Number(), String(), and Boolean().",
                " Implicit Conversion (Type Coercion): Done automatically by JavaScript when operators encounter mismatched types.",
              ],
            },
          ],
        },
        {
          heading: "1. Explicit Type Conversion (Manual)",
          content: [
            {
              type: "text",
              value:
                "Developers can explicitly convert values between primitive data types using standard global methods and constructor functions.",
            },
            {
              type: "text",
              value: "<strong>Converting to String:</strong>",
            },
            {
              type: "code",
              value: `let count = 100;
let str1 = String(count);      // "100"
let str2 = count.toString();   // "100"
let boolStr = String(true);    // "true"`,
            },
            {
              type: "text",
              value: "<strong>Converting to Number:</strong>",
            },
            {
              type: "code",
              value: `let num1 = Number("42");       // 42
let num2 = Number("42px");     // NaN (Not a Number)
let num3 = parseInt("42px");   // 42 (parses leading digits)
let num4 = parseFloat("3.14"); // 3.14
let num5 = Number(true);       // 1
let num6 = Number(false);      // 0
let num7 = Number(null);       // 0
let num8 = Number(undefined);  // NaN`,
            },
            {
              type: "text",
              value: "<strong>Converting to Boolean:</strong>",
            },
            {
              type: "code",
              value: `// Falsy values: 0, "", null, undefined, NaN, false
console.log(Boolean(0));         // false
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false

// Truthy values: everything else, including empty arrays and objects
console.log(Boolean("Hello"));   // true
console.log(Boolean(123));       // true
console.log(Boolean([]));        // true
console.log(Boolean({}));        // true`,
            },
          ],
        },
        {
          heading: "2. Implicit Type Coercion (Automatic)",
          content: [
            {
              type: "text",
              value:
                "When operators act on values of different types, the JavaScript engine converts one or both values under predefined coercion rules.",
            },
            {
              type: "text",
              value: "<strong>String Coercion with the '+' Operator:</strong>",
            },
            {
              type: "text",
              value:
                "When the <code>+</code> operator is used between a string and any other type, JavaScript defaults to string concatenation.",
            },
            {
              type: "code",
              value: `let res1 = "Total: " + 50;   // "Total: 50" (Number coerced to String)
let res2 = "5" + 2;          // "52"
let res3 = "5" + true;       // "5true"`,
            },
            {
              type: "text",
              value: "<strong>Numeric Coercion with Arithmetic Operators:</strong>",
            },
            {
              type: "text",
              value:
                "Operators such as <code>-</code>, <code>*</code>, <code>/</code>, and <code>%</code> convert strings and booleans to numbers before calculating.",
            },
            {
              type: "code",
              value: `let diff = "10" - 4;    // 6 ("10" coerced to 10)
let prod = "6" * "3";   // 18 (both strings coerced to numbers)
let div  = "20" / 2;    // 10
let fail = "hello" - 2; // NaN (invalid numeric string)`,
            },
          ],
        },
        {
          heading: "Strict Equality (===) vs Loose Equality (==)",
          content: [
            {
              type: "text",
              value:
                "The equality operator is one of the most common sources of coercion errors in JavaScript.",
            },
            {
              type: "list",
              items: [
                " Loose Equality (==): Compares two values AFTER applying type coercion.",
                " Strict Equality (===): Compares both value and type WITHOUT applying coercion.",
              ],
            },
            {
              type: "code",
              value: `console.log(5 == "5");   // true  (string "5" is coerced to number 5)
console.log(5 === "5");  // false (types 'number' and 'string' do not match)

console.log(0 == false);  // true  (both coerced to number 0)
console.log(0 === false); // false (number vs boolean)

console.log(null == undefined);  // true
console.log(null === undefined); // false`,
            },
          ],
        },
      ],
      // ==========================================
      // PLAYGROUND ADDED HERE
      // ==========================================
      playground: [
        {
          title: "Explicit Parsing & Arithmetic",
          code: `let strNum = "150";\nlet tax = "18";\n\n// Explicit conversion using Number()\nlet total = Number(strNum) + Number(tax);\nconsole.log("Total: " + total);\nconsole.log("Type: " + typeof total);`,
          output: "Total: 168\nType: number",
        },
        {
          title: "Coercion Traps and Comparisons",
          code: `console.log("5" + 2); // String concatenation\nconsole.log("5" - 2); // Numeric subtraction\nconsole.log(true + 1); // true coerced to 1\nconsole.log(10 == "10"); // Loose equality\nconsole.log(10 === "10"); // Strict equality`,
          output: "52\n3\n2\ntrue\nfalse",
        },
      ],
      conclusion:
        "Type conversion can occur explicitly using constructors like Number(), String(), and Boolean(), or implicitly via JavaScript coercion rules during operations. To keep applications predictable and bug-free, always prefer explicit conversion for input handling and rely on strict equality (===) over loose equality (==).",
    },
    // ================= TOPIC 7: JAVASCRIPT OPERATORS =================
    {
      id: "javascript-operators",
      title: "JavaScript Operators",
      subjectCode: "javascript",
      intro:
        "Operators are special symbols and keywords used to perform operations on operands (values and variables). JavaScript features a comprehensive set of operators ranging from basic arithmetic and value assignments to logical evaluations, comparisons, and modern nullish handling operators.",
      sections: [
        {
          heading: "Types of Operators in JavaScript",
          content: [
            {
              type: "text",
              value:
                "JavaScript categorizes operators based on the specific type of computation they execute:",
            },
            {
              type: "list",
              items: [
                " Arithmetic Operators: Perform mathematical calculations like addition, multiplication, and modulus.",
                " Assignment Operators: Assign and update values stored in variables.",
                " Comparison Operators: Compare two values and return a boolean (true or false).",
                " Logical Operators: Combine or invert boolean conditions.",
                " Bitwise Operators: Treat operands as 32-bit sequences of binary zeroes and ones.",
                " Special & Modern Operators: Ternary, typeof, nullish coalescing (??), and optional chaining (?.).",
              ],
            },
          ],
        },
        {
          heading: "1. Arithmetic Operators",
          content: [
            {
              type: "text",
              value:
                "Arithmetic operators compute numerical values. Note that the <code>+</code> operator doubles as a string concatenation operator when one operand is a string.",
            },
            {
              type: "list",
              items: [
                " + (Addition) and - (Subtraction)",
                " * (Multiplication) and / (Division)",
                " % (Modulus / Remainder) and ** (Exponentiation)",
                " ++ (Increment) and -- (Decrement)",
              ],
            },
            {
              type: "code",
              value: `let a = 10;
let b = 3;

console.log(a + b);  // 13
console.log(a % b);  // 1 (Remainder)
console.log(a ** b); // 1000 (10^3)

let count = 5;
count++;
console.log(count);  // 6`,
            },
          ],
        },
        {
          heading: "2. Comparison Operators: == vs ===",
          content: [
            {
              type: "text",
              value:
                "Comparison operators evaluate equality or relative rank. The most critical distinction is between loose equality (<code>==</code>), which coerces types, and strict equality (<code>===</code>), which checks both value and data type without coercion.",
            },
            {
              type: "code",
              value: `console.log(5 == "5");  // true  (loose: coerces string to number)
console.log(5 === "5"); // false (strict: different data types)

console.log(10 != "10");  // false (loose inequality)
console.log(10 !== "10"); // true  (strict inequality)

console.log(15 > 10);  // true
console.log(20 <= 20); // true`,
            },
            {
              type: "text",
              value:
                "<strong>Best Practice:</strong> Always use strict equality (<code>===</code>) and strict inequality (<code>!==</code>) to avoid unintended type coercion bugs.",
            },
          ],
        },
        {
          heading: "3. Logical Operators",
          content: [
            {
              type: "text",
              value:
                "Logical operators are used to evaluate boolean expressions. JavaScript uses short-circuit evaluation, meaning the second operand is only evaluated if the first operand does not suffice to determine the outcome.",
            },
            {
              type: "list",
              items: [
                " && (Logical AND): Returns true only if both operands evaluate to true.",
                " || (Logical OR): Returns true if at least one operand evaluates to true.",
                " ! (Logical NOT): Inverts the boolean truth value of an operand.",
              ],
            },
            {
              type: "code",
              value: `let hasToken = true;
let isAdmin = false;

console.log(hasToken && isAdmin); // false
console.log(hasToken || isAdmin); // true
console.log(!hasToken);           // false`,
            },
          ],
        },
        {
          heading: "4. Modern Operators: ?? and ?.",
          content: [
            {
              type: "text",
              value:
                "Modern JavaScript (ES2020+) introduced syntax to handle nullable states without boilerplate nested checks:",
            },
            {
              type: "list",
              items: [
                " Nullish Coalescing (??): Returns the right-hand value only if the left-hand operand is null or undefined (unlike ||, which falls back on 0 or \"\").",
                " Optional Chaining (?.): Safely accesses nested object properties or methods without throwing an error if a reference is nullish.",
              ],
            },
            {
              type: "code",
              value: `// Nullish Coalescing
let score = 0;
let finalScore = score ?? 100;
let fallbackScore = score || 100;

console.log(finalScore);    // 0  (0 is valid, not null/undefined)
console.log(fallbackScore); // 100 (|| treats 0 as falsy)

// Optional Chaining
const user = { profile: { name: "Aman" } };
console.log(user.profile?.name);   // "Aman"
console.log(user.address?.city);   // undefined (no error thrown)`,
            },
          ],
        },
      ],
      // ==========================================
      // PLAYGROUND ADDED HERE
      // ==========================================
      playground: [
        {
          title: "Strict vs Loose Equality",
          code: `const val1 = 42;\nconst val2 = "42";\n\nconsole.log("Loose Equality (==):  " + (val1 == val2));\nconsole.log("Strict Equality (===): " + (val1 === val2));\nconsole.log("Strict Unequal (!==):  " + (val1 !== val2));`,
          output: "Loose Equality (==):  true\nStrict Equality (===): false\nStrict Unequal (!==):  true",
        },
        {
          title: "Nullish Coalescing vs OR",
          code: `let userCount = 0;\n\n// Logical OR falls back on falsy values (0, "", false)\nlet displayCountOR = userCount || 10;\n\n// Nullish coalescing only falls back on null or undefined\nlet displayCountNullish = userCount ?? 10;\n\nconsole.log("Using OR (||):  " + displayCountOR);\nconsole.log("Using Nullish (??): " + displayCountNullish);`,
          output: "Using OR (||):  10\nUsing Nullish (??): 0",
        },
      ],
      conclusion:
        "Operators are fundamental building blocks in JavaScript for computing values, evaluating expressions, and directing control flows. Relying on strict equality (===) prevents implicit coercion errors, while modern operators like optional chaining (?.) and nullish coalescing (??) make navigating complex data structures clean and safe.",
    },
    // ================= TOPIC 7: JAVASCRIPT CONDITIONAL STATEMENTS =================
    {
      id: "javascript-conditional-statements",
      title: "Conditional Statements",
      subjectCode: "javascript",
      intro:
        "Conditional statements are used to perform different actions based on different conditions. In JavaScript, execution flow can be controlled using if, else if, else branches, switch statements for multi-case matching, and ternary expressions for concise inline evaluations.",
      sections: [
        {
          heading: "Types of Conditional Statements",
          content: [
            {
              type: "text",
              value:
                "JavaScript provides several control structures to direct execution based on truthy or falsy checks:",
            },
            {
              type: "list",
              items: [
                " if statement: Executes a code block if the specified condition evaluates to true.",
                " else statement: Executes an alternative block if the condition evaluates to false.",
                " else if statement: Evaluates a new condition if the preceding condition is false.",
                " switch statement: Evaluates an expression against multiple potential case clauses using strict equality (===).",
                " Ternary operator (? :): Concise inline syntax for simple binary condition branching.",
              ],
            },
          ],
        },
        {
          heading: "1. The if, else if, and else Statements",
          content: [
            {
              type: "text",
              value:
                "Use the <code>if</code> structure to execute code conditionally, adding <code>else if</code> for intermediate conditions and <code>else</code> as a final fallback.",
            },
            {
              type: "text",
              value: "<strong>Syntax:</strong>",
            },
            {
              type: "code",
              value: `if (condition1) {
  // runs if condition1 is true
} else if (condition2) {
  // runs if condition1 is false and condition2 is true
} else {
  // runs if both condition1 and condition2 are false
}`,
            },
            {
              type: "text",
              value: "<strong>Example:</strong>",
            },
            {
              type: "code",
              value: `let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 75) {
  console.log("Grade: B");
} else if (score >= 50) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}`,
            },
            {
              type: "text",
              value: "<strong>Output:</strong><br/>Grade: B",
            },
          ],
        },
        {
          heading: "2. The switch Statement",
          content: [
            {
              type: "text",
              value:
                "The <code>switch</code> statement matches an expression's value against multiple <code>case</code> clauses using strict equality (<code>===</code>). Use the <code>break</code> statement to prevent fall-through execution into subsequent cases.",
            },
            {
              type: "text",
              value: "<strong>Syntax:</strong>",
            },
            {
              type: "code",
              value: `switch (expression) {
  case value1:
    // code block
    break;
  case value2:
    // code block
    break;
  default:
    // fallback code block
}`,
            },
            {
              type: "text",
              value: "<strong>Example:</strong>",
            },
            {
              type: "code",
              value: `let dayNumber = 3;
let dayName;

switch (dayNumber) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  default:
    dayName = "Weekend";
}

console.log("Day: " + dayName);`,
            },
            {
              type: "text",
              value: "<strong>Output:</strong><br/>Day: Wednesday",
            },
          ],
        },
        {
          heading: "3. Ternary Operator & Short-Circuiting",
          content: [
            {
              type: "text",
              value:
                "For concise assignments or conditional returns, the ternary operator (<code>condition ? val1 : val2</code>) or logical short-circuiting (<code>&&</code>, <code>||</code>) provide functional alternatives to verbose <code>if...else</code> blocks.",
            },
            {
              type: "code",
              value: `let age = 20;

// Ternary assignment
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // "Adult"

// Short-circuit execution (runs RHS only if LHS is truthy)
let isLoggedIn = true;
isLoggedIn && console.log("User session active");`,
            },
          ],
        },
      ],
      // ==========================================
      // PLAYGROUND ADDED HERE
      // ==========================================
      playground: [
        {
          title: "Grade Evaluation with if-else",
          code: `let marks = 72;\n\nif (marks >= 80) {\n  console.log("Distinction");\n} else if (marks >= 60) {\n  console.log("First Class");\n} else if (marks >= 40) {\n  console.log("Pass");\n} else {\n  console.log("Fail");\n}`,
          output: "First Class",
        },
        {
          title: "Role Checker with Switch",
          code: `let role = "editor";\n\nswitch (role) {\n  case "admin":\n    console.log("Full Admin Access");\n    break;\n  case "editor":\n    console.log("Content Edit Access");\n    break;\n  case "viewer":\n    console.log("Read-only Access");\n    break;\n  default:\n    console.log("No Access Assigned");\n}`,
          output: "Content Edit Access",
        },
      ],
      conclusion:
        "Conditional statements control execution pathways in JavaScript. Use if-else structures for range-based or dynamic relational checks, switch statements for discrete value matching with strict equality, and the ternary operator for concise inline expressions.",
    },
    // ================= TOPIC 8: JAVASCRIPT LOOPS =================
    {
      id: "javascript-loops",
      title: "JavaScript Loops",
      subjectCode: "javascript",
      intro:
        "Loops are control-flow structures used to repeatedly execute a block of code as long as a specified condition evaluates to true. JavaScript supports standard iteration loops such as for, while, and do...while, as well as modern collection iterators like for...of for iterables and for...in for object properties.",
      sections: [
        {
          heading: "Overview of Loops in JavaScript",
          content: [
            {
              type: "text",
              value:
                "Selecting the right loop depends on the task at hand—whether iterating a predetermined number of times, evaluating conditions dynamically, or traversing objects and arrays:",
            },
            {
              type: "list",
              items: [
                " for loop: Standard counter-based loop with initialization, condition, and increment expressions.",
                " while loop: Executes a block of code repeatedly as long as its target condition evaluates to true.",
                " do...while loop: Guarantees at least one execution because the condition is evaluated after the block runs.",
                " for...of loop: Iterates over the values of iterable collections such as Arrays, Strings, Maps, and Sets.",
                " for...in loop: Iterates over the enumerable property keys of an object.",
              ],
            },
          ],
        },
        {
          heading: "1. The Standard for Loop",
          content: [
            {
              type: "text",
              value:
                "The classic <code>for</code> loop repeats an action using three optional expressions: initialization, condition check, and final step counter update.",
            },
            {
              type: "text",
              value: "<strong>Syntax:</strong>",
            },
            {
              type: "code",
              value: `for (initialization; condition; increment/decrement) {
  // code block to be executed
}`,
            },
            {
              type: "text",
              value: "<strong>Example:</strong>",
            },
            {
              type: "code",
              value: `for (let i = 1; i <= 3; i++) {
  console.log("Iteration: " + i);
}`,
            },
            {
              type: "text",
              value: "<strong>Output:</strong><br/>Iteration: 1<br/>Iteration: 2<br/>Iteration: 3",
            },
          ],
        },
        {
          heading: "2. The while and do...while Loops",
          content: [
            {
              type: "text",
              value:
                "A <code>while</code> loop verifies its condition before executing. In contrast, a <code>do...while</code> loop executes the body once first and only checks the condition afterward.",
            },
            {
              type: "code",
              value: `// while loop (pre-test)
let count = 0;
while (count < 2) {
  console.log("while count: " + count);
  count++;
}

// do...while loop (post-test, runs at least once)
let num = 10;
do {
  console.log("Runs once despite false condition: " + num);
  num++;
} while (num < 5);`,
            },
          ],
        },
        {
          heading: "3. The for...of Loop (Iterables)",
          content: [
            {
              type: "text",
              value:
                "Introduced in ES6, <code>for...of</code> traverses the direct <em>values</em> of iterable structures like Arrays, Strings, and NodeLists cleanly without tracking numeric indices.",
            },
            {
              type: "text",
              value: "<strong>Syntax & Example:</strong>",
            },
            {
              type: "code",
              value: `const colors = ["red", "green", "blue"];

for (const color of colors) {
  console.log(color);
}`,
            },
            {
              type: "text",
              value: "<strong>Output:</strong><br/>red<br/>green<br/>blue",
            },
          ],
        },
        {
          heading: "4. The for...in Loop (Object Keys)",
          content: [
            {
              type: "text",
              value:
                "The <code>for...in</code> loop iterates over all enumerable string properties and <em>keys</em> of an object.",
            },
            {
              type: "code",
              value: `const user = {
  name: "Sara",
  role: "Developer",
  experience: 3
};

for (const key in user) {
  console.log(key + ": " + user[key]);
}`,
            },
            {
              type: "text",
              value:
                "<strong>Note:</strong> Avoid using <code>for...in</code> to iterate standard Arrays when order is important, as it visits arbitrary enumerable properties and indices as strings.",
            },
          ],
        },
        {
          heading: "5. Loop Control: break and continue",
          content: [
            {
              type: "list",
              items: [
                " break: Immediately terminates the loop and jumps to the code following it.",
                " continue: Skips the remainder of the current iteration and advances to the next cycle.",
              ],
            },
            {
              type: "code",
              value: `for (let i = 1; i <= 5; i++) {
  if (i === 2) continue; // skip 2
  if (i === 4) break;    // exit when reaching 4
  console.log(i);
}`,
            },
            {
              type: "text",
              value: "<strong>Output:</strong><br/>1<br/>3",
            },
          ],
        },
      ],
      // ==========================================
      // PLAYGROUND ADDED HERE
      // ==========================================
      playground: [
        {
          title: "Array Traversal with for...of",
          code: `const languages = ["JavaScript", "Python", "Go"];\n\nfor (const lang of languages) {\n  console.log("Learning: " + lang);\n}`,
          output: "Learning: JavaScript\nLearning: Python\nLearning: Go",
        },
        {
          title: "Skipping with continue",
          code: `let result = [];\nfor (let i = 1; i <= 6; i++) {\n  if (i % 2 === 0) continue; // skip even numbers\n  result.push(i);\n}\nconsole.log("Odd numbers: " + result.join(", "));`,
          output: "Odd numbers: 1, 3, 5",
        },
      ],
      conclusion:
        "Loops automate repetitive computational tasks. Use the classic for loop when an explicit numeric counter is required, while or do...while when looping depends on dynamic conditions, for...of to cleanly iterate over array values, and for...in to inspect object keys.",
    },
    // ================= TOPIC 9: JAVASCRIPT STRINGS & TEMPLATE LITERALS =================
    {
      id: "javascript-strings",
      title: "Strings & Literals",
      subjectCode: "javascript",
      intro:
        "Strings represent sequences of characters used to store and manipulate text. In JavaScript, strings are primitive, immutable data types that can be declared using single quotes, double quotes, or modern ES6 template literals (backticks) which support multi-line text and embedded expressions.",
      sections: [
        {
          heading: "Ways to Define Strings",
          content: [
            {
              type: "text",
              value:
                "JavaScript provides three mechanisms to declare string literals:",
            },
            {
              type: "list",
              items: [
                " Single Quotes ('...'): Standard text literal.",
                " Double Quotes (\"...\"): Standard text literal, identical in functionality to single quotes.",
                " Template Literals (`...`): ES6 feature wrapped in backticks supporting string interpolation and multi-line strings.",
              ],
            },
            {
              type: "code",
              value: `let single = 'Single quote string';\nlet double = "Double quote string";\nlet template = \`Template literal string\`;`,
            },
          ],
        },
        {
          heading: "1. Template Literals & String Interpolation",
          content: [
            {
              type: "text",
              value:
                "Template literals use backticks (`) instead of quotes. They permit embedded expressions via the <code>\${expression}</code> syntax, eliminating messy string concatenation with the <code>+</code> operator.",
            },
            {
              type: "text",
              value: "<strong>Syntax:</strong>",
            },
            {
              type: "code",
              value: `const message = \`Hello, \${userName}! You have \${count * 2} notifications.\`;`,
            },
            {
              type: "text",
              value: "<strong>Example:</strong>",
            },
            {
              type: "code",
              value: `let product = "Laptop";\nlet price = 75000;\nlet taxRate = 0.18;\n\n// Multi-line and embedded math expression\nlet invoice = \`Item: \${product}\nTotal: ₹\${price + price * taxRate}\`;\n\nconsole.log(invoice);`,
            },
            {
              type: "text",
              value: "<strong>Output:</strong><br/>Item: Laptop<br/>Total: ₹88500",
            },
          ],
        },
        {
          heading: "2. String Immutability and Length",
          content: [
            {
              type: "text",
              value:
                "JavaScript strings are immutable; once created, individual character indices cannot be modified directly. The <code>.length</code> property returns the character count.",
            },
            {
              type: "code",
              value: `let str = "Hello";\nconsole.log(str.length); // 5\n\nstr[0] = "J"; // Silent fail (or TypeError in strict mode)\nconsole.log(str); // "Hello" (unchanged)`,
            },
          ],
        },
        {
          heading: "3. Essential String Methods",
          content: [
            {
              type: "text",
              value:
                "Methods return new strings rather than mutating the original string in place:",
            },
            {
              type: "list",
              items: [
                " toUpperCase() / toLowerCase(): Converts string case.",
                " trim(): Trims whitespace from both ends.",
                " slice(start, end): Extracts a segment from start up to (but not including) end.",
                " includes(substring): Checks whether a substring exists (returns true/false).",
                " replace(target, replacement): Replaces matching occurrence with new value.",
                " split(delimiter): Divides string into an array of substrings.",
              ],
            },
            {
              type: "code",
              value: `let text = "  JavaScript Strings  ";\n\nconsole.log(text.trim());                  // "JavaScript Strings"\nconsole.log(text.trim().toUpperCase());    // "JAVASCRIPT STRINGS"\nconsole.log(text.includes("Script"));      // true\nconsole.log("apple,banana,grape".split(",")); // ["apple", "banana", "grape"]\nconsole.log("Good Morning".replace("Morning", "Evening")); // "Good Evening"`,
            },
          ],
        },
      ],
      // ==========================================
      // PLAYGROUND ADDED HERE
      // ==========================================
      playground: [
        {
          title: "Template Literal Interpolation",
          code: `let name = "Alex";\nlet role = "Frontend Developer";\nlet experienceYears = 3;\n\nlet profile = \`Name: \${name}\\nRole: \${role}\\nNext Milestone: \${experienceYears + 1} years\`;\nconsole.log(profile);`,
          output: "Name: Alex\nRole: Frontend Developer\nNext Milestone: 4 years",
        },
        {
          title: "String Methods in Action",
          code: `let rawDomain = "  w3coder.dev  ";\nlet cleanDomain = rawDomain.trim();\n\nconsole.log("Cleaned: " + cleanDomain);\nconsole.log("Is Dev: " + cleanDomain.endsWith(".dev"));\nconsole.log("Prefix: " + cleanDomain.slice(0, 7));`,
          output: "Cleaned: w3coder.dev\nIs Dev: true\nPrefix: w3coder",
        },
      ],
      conclusion:
        "Strings represent text and are immutable in JavaScript. While single and double quotes handle standard text literals, modern ES6 template literals offer far superior flexibility with string interpolation, embedded expressions, and multi-line strings without concatenation overhead.",
    },
    // ================= TOPIC 10: JAVASCRIPT ARRAYS & ARRAY METHODS =================
    {
      id: "javascript-arrays",
      title: "JavaScript Arrays",
      subjectCode: "javascript",
      intro:
        "An array is an ordered collection of values where each element is identified by a numerical index starting from zero. In JavaScript, arrays are resizable reference objects capable of holding mixed data types, and they come equipped with an extensive suite of built-in methods for traversal, transformation, and manipulation.",
      sections: [
        {
          heading: "Creating and Accessing Arrays",
          content: [
            {
              type: "text",
              value:
                "Arrays can be instantiated using array literal syntax <code>[]</code> or via the <code>Array()</code> constructor. Elements are accessed and modified using zero-based bracket indexing.",
            },
            {
              type: "text",
              value: "<strong>Syntax:</strong>",
            },
            {
              type: "code",
              value: `const items = ["Apple", "Banana", "Cherry"];
console.log(items[0]); // "Apple"
console.log(items.length); // 3`,
            },
          ],
        },
        {
          heading: "1. Mutating Methods (Modifies Original Array)",
          content: [
            {
              type: "text",
              value:
                "These operations modify the elements or length of the original array in place:",
            },
            {
              type: "list",
              items: [
                " push(...items): Appends one or more items to the end and returns new length.",
                " pop(): Removes and returns the last element.",
                " unshift(...items): Adds elements to the beginning and returns new length.",
                " shift(): Removes and returns the first element.",
                " splice(start, deleteCount, ...items): Adds or removes elements at any index.",
                " reverse(): Reverses the elements of the array in place.",
              ],
            },
            {
              type: "code",
              value: `let nums = [10, 20, 30];

nums.push(40);     // [10, 20, 30, 40]
nums.pop();        // [10, 20, 30]
nums.unshift(5);   // [5, 10, 20, 30]
nums.shift();      // [10, 20, 30]

// splice(startIndex, deleteCount, ...insertItems)
nums.splice(1, 1, 99); // Replaces 20 with 99 -> [10, 99, 30]
console.log(nums);`,
            },
            {
              type: "text",
              value: "<strong>Output:</strong><br/>[10, 99, 30]",
            },
          ],
        },
        {
          heading: "2. Non-Mutating Methods (Returns New Value or Array)",
          content: [
            {
              type: "text",
              value:
                "These methods leave the original array untouched and return transformed copies or scalar values:",
            },
            {
              type: "list",
              items: [
                " slice(start, end): Returns a shallow copy of a portion of the array.",
                " concat(...arrays): Merges two or more arrays into a new array.",
                " join(separator): Concatenates all elements into a single string.",
                " indexOf(item) / includes(item): Locates elements or checks existence.",
              ],
            },
            {
              type: "code",
              value: `const fruits = ["Mango", "Apple", "Orange", "Grape"];

const sliceSubset = fruits.slice(1, 3); // ["Apple", "Orange"]
const joinedStr = fruits.join(" - ");    // "Mango - Apple - Orange - Grape"

console.log(fruits.includes("Apple"));  // true
console.log(sliceSubset);`,
            },
          ],
        },
        {
          heading: "3. Iteration & Functional Methods",
          content: [
            {
              type: "text",
              value:
                "Modern JavaScript relies heavily on declarative higher-order array methods that accept callback functions to process data:",
            },
            {
              type: "list",
              items: [
                " forEach(callback): Executes a callback function on each element without returning a new array.",
                " map(callback): Transforms each element and returns a brand-new array of equal length.",
                " filter(callback): Returns a new array containing only elements that satisfy the test condition.",
                " find(callback): Returns the first element that satisfies the testing condition.",
                " reduce(callback, initialValue): Accumulates array elements into a single resulting value.",
              ],
            },
            {
              type: "code",
              value: `const numbers = [1, 2, 3, 4, 5];

// map: Double each element
const doubled = numbers.map(n => n * 2); // [2, 4, 6, 8, 10]

// filter: Keep even numbers only
const evens = numbers.filter(n => n % 2 === 0); // [2, 4]

// reduce: Sum all elements
const totalSum = numbers.reduce((acc, curr) => acc + curr, 0); // 15

console.log(doubled);
console.log(evens);
console.log("Sum: " + totalSum);`,
            },
          ],
        },
      ],
      // ==========================================
      // PLAYGROUND ADDED HERE
      // ==========================================
      playground: [
        {
          title: "Push, Pop & Slice",
          code: `let tasks = ["Write Code", "Review PR"];\ntasks.push("Deploy Build");\n\nconsole.log("Current Tasks: " + tasks.join(", "));\nconsole.log("Completed: " + tasks.pop());\nconsole.log("Remaining: " + tasks.length);`,
          output: "Current Tasks: Write Code, Review PR, Deploy Build\nCompleted: Deploy Build\nRemaining: 2",
        },
        {
          title: "Data Pipeline: Filter and Map",
          code: `const prices = [50, 120, 250, 80, 300];\n\n// Filter items over 100, then apply 10% discount\nconst discounted = prices\n  .filter(p => p > 100)\n  .map(p => p * 0.9);\n\nconsole.log("Original: " + prices.join(", "));\nconsole.log("Discounted: " + discounted.join(", "));`,
          output: "Original: 50, 120, 250, 80, 300\nDiscounted: 108, 225, 270",
        },
      ],
      conclusion:
        "Arrays are the primary data structure for managing ordered collections in JavaScript. Mastering the distinction between mutating methods like push or splice and non-mutating functional methods like map, filter, and slice is crucial for writing predictable, modern, and bug-free code.",
    },
    // ================= TOPIC 11: JAVASCRIPT FUNCTIONS =================
    {
      id: "javascript-functions",
      title: "JavaScript Functions",
      subjectCode: "javascript",
      intro:
        "A function is a reusable block of code designed to perform a specific task. In JavaScript, functions are first-class citizens, meaning they can be assigned to variables, passed as arguments to other functions, and returned from functions. JavaScript supports function declarations, function expressions, and modern ES6 arrow functions.",
      sections: [
        {
          heading: "Ways to Define Functions in JavaScript",
          content: [
            {
              type: "text",
              value:
                "JavaScript provides multiple syntaxes to declare and invoke executable routines:",
            },
            {
              type: "list",
              items: [
                " Function Declaration: Traditional hoisted function defined with the function keyword.",
                " Function Expression: Anonymous or named function assigned directly to a variable.",
                " Arrow Function (ES6): Concise syntax with lexical this binding, ideal for callbacks.",
                " Anonymous Function: Function without a name, frequently passed inline as an argument.",
              ],
            },
          ],
        },
        {
          heading: "1. Function Declaration (Hoisted)",
          content: [
            {
              type: "text",
              value:
                "Function declarations are hoisted to the top of their enclosing scope, meaning they can be safely invoked before their formal definition appears in the code.",
            },
            {
              type: "text",
              value: "<strong>Syntax:</strong>",
            },
            {
              type: "code",
              value: `function functionName(param1, param2) {
  // code block
  return param1 + param2;
}`,
            },
            {
              type: "text",
              value: "<strong>Example:</strong>",
            },
            {
              type: "code",
              value: `// Calling before declaration works due to hoisting
console.log(calculateArea(5, 4));

function calculateArea(width, height) {
  return width * height;
}`,
            },
            {
              type: "text",
              value: "<strong>Output:</strong><br/>20",
            },
          ],
        },
        {
          heading: "2. Function Expression",
          content: [
            {
              type: "text",
              value:
                "In a function expression, a function is created and assigned to a variable. Unlike declarations, function expressions are not hoisted and cannot be invoked before the variable assignment executes.",
            },
            {
              type: "text",
              value: "<strong>Syntax & Example:</strong>",
            },
            {
              type: "code",
              value: `const greetUser = function (name) {
  return "Welcome, " + name + "!";
};

console.log(greetUser("Aman"));`,
            },
            {
              type: "text",
              value: "<strong>Output:</strong><br/>Welcome, Aman!",
            },
          ],
        },
        {
          heading: "3. ES6 Arrow Functions",
          content: [
            {
              type: "text",
              value:
                "Arrow functions offer a shorter syntax using the <code>=&gt;</code> fat arrow. For single-line bodies, the <code>return</code> keyword and curly braces can be omitted (implicit return). Arrow functions also do not have their own <code>this</code> context.",
            },
            {
              type: "text",
              value: "<strong>Syntax:</strong>",
            },
            {
              type: "code",
              value: `// Concise single-line arrow function (implicit return)
const add = (a, b) => a + b;

// Multi-line arrow function (explicit return)
const getDiscount = (price, rate) => {
  let discount = price * rate;
  return price - discount;
};`,
            },
            {
              type: "text",
              value: "<strong>Example:</strong>",
            },
            {
              type: "code",
              value: `const multiply = (x, y) => x * y;
console.log(multiply(6, 7));`,
            },
            {
              type: "text",
              value: "<strong>Output:</strong><br/>42",
            },
          ],
        },
        {
          heading: "4. Default and Rest Parameters",
          content: [
            {
              type: "text",
              value:
                "ES6 introduced default parameter fallbacks when arguments are missing or undefined, and the rest operator (<code>...</code>) to collect an arbitrary number of arguments into a single array.",
            },
            {
              type: "code",
              value: `// Default parameter
function power(base, exponent = 2) {
  return base ** exponent;
}
console.log(power(5));    // 25 (uses default 2)
console.log(power(5, 3)); // 125

// Rest parameters
function sumAll(...numbers) {
  return numbers.reduce((acc, val) => acc + val, 0);
}
console.log(sumAll(10, 20, 30, 40)); // 100`,
            },
          ],
        },
      ],
      // ==========================================
      // PLAYGROUND ADDED HERE
      // ==========================================
      playground: [
        {
          title: "Arrow Function with Default Param",
          code: `const greet = (name = "Developer") => \`Hello, \${name}!\`;\n\nconsole.log(greet("W3Coder"));\nconsole.log(greet());`,
          output: "Hello, W3Coder!\nHello, Developer!",
        },
        {
          title: "Rest Parameter Calculations",
          code: `const findMax = (...values) => {\n  return Math.max(...values);\n};\n\nconsole.log("Maximum: " + findMax(12, 45, 89, 23, 7));`,
          output: "Maximum: 89",
        },
      ],
      conclusion:
        "Functions encapsulate logic into modular and testable units. Use standard function declarations when hoisting is beneficial, function expressions for dynamic bindings, and ES6 arrow functions for concise syntax and lexical this scoping across modern codebases.",
    },
    // ================= TOPIC 12: JAVASCRIPT OBJECTS & OBJECT LITERALS =================
    {
      id: "javascript-objects",
      title: "Objects & Literals",
      subjectCode: "javascript",
      intro:
        "Objects are collections of key-value pairs used to store related data and complex entities. In JavaScript, almost everything is an object under the hood. Keys (properties) are strings or symbols, while values can be any data type, including primitive values, arrays, functions (methods), or nested objects.",
      sections: [
        {
          heading: "Creating and Accessing Objects",
          content: [
            {
              type: "text",
              value:
                "The most common way to create an object is using the object literal syntax <code>{}</code>. Object properties can be read and modified using dot notation or bracket notation.",
            },
            {
              type: "text",
              value: "<strong>Syntax:</strong>",
            },
            {
              type: "code",
              value: `const person = {
  key1: "value1",
  key2: "value2",
};`,
            },
            {
              type: "text",
              value: "<strong>Example:</strong>",
            },
            {
              type: "code",
              value: `const user = {
  name: "Priya",
  age: 26,
  "home address": "Mumbai, India", // Multi-word keys require quotes
};

// Dot notation
console.log(user.name); // "Priya"

// Bracket notation (required for dynamic keys or keys with spaces)
console.log(user["home address"]); // "Mumbai, India"

let propKey = "age";
console.log(user[propKey]); // 26`,
            },
            {
              type: "text",
              value: "<strong>Output:</strong><br/>Priya<br/>Mumbai, India<br/>26",
            },
          ],
        },
        {
          heading: "1. Modifying, Adding, and Deleting Properties",
          content: [
            {
              type: "text",
              value:
                "JavaScript objects are mutable by default. You can add new properties, update existing ones, or remove properties using the <code>delete</code> operator.",
            },
            {
              type: "code",
              value: `const car = {
  brand: "Tesla",
  model: "Model 3"
};

// Add property
car.year = 2024;

// Update property
car.model = "Model Y";

// Delete property
delete car.brand;

console.log(car);`,
            },
            {
              type: "text",
              value: "<strong>Output:</strong><br/>{ model: 'Model Y', year: 2024 }",
            },
          ],
        },
        {
          heading: "2. Object Methods and 'this' Keyword",
          content: [
            {
              type: "text",
              value:
                "When a function is stored as an object property, it is called a method. Inside a standard method, the <code>this</code> keyword points to the object executing the call.",
            },
            {
              type: "code",
              value: `const student = {
  firstName: "Aman",
  lastName: "Gupta",
  fullName() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(student.fullName());`,
            },
            {
              type: "text",
              value: "<strong>Output:</strong><br/>Aman Gupta",
            },
            {
              type: "text",
              value:
                "<strong>Note:</strong> Avoid using arrow functions for object methods if you need access to <code>this</code>, because arrow functions inherit <code>this</code> lexically from the outer scope rather than binding to the object.",
            },
          ],
        },
        {
          heading: "3. Useful Object Utility Methods",
          content: [
            {
              type: "text",
              value:
                "The global <code>Object</code> constructor provides static utility methods to inspect, copy, and freeze objects:",
            },
            {
              type: "list",
              items: [
                " Object.keys(obj): Returns an array of an object's enumerable property names.",
                " Object.values(obj): Returns an array of an object's enumerable property values.",
                " Object.entries(obj): Returns an array of [key, value] pairs.",
                " Object.assign(target, ...sources): Copies properties from source objects to a target object.",
                " Object.freeze(obj): Freezes an object so existing properties cannot be added, modified, or removed.",
              ],
            },
            {
              type: "code",
              value: `const config = { host: "localhost", port: 5000 };

console.log(Object.keys(config));   // ['host', 'port']
console.log(Object.values(config)); // ['localhost', 5000]
console.log(Object.entries(config));// [['host', 'localhost'], ['port', 5000]]`,
            },
          ],
        },
      ],
      // ==========================================
      // PLAYGROUND ADDED HERE
      // ==========================================
      playground: [
        {
          title: "Accessing and Updating Properties",
          code: `const laptop = {\n  brand: "Apple",\n  model: "MacBook Air",\n  ramGB: 8\n};\n\nlaptop.ramGB = 16;\nlaptop.color = "Space Gray";\n\nconsole.log(laptop.brand + " " + laptop.model);\nconsole.log("RAM: " + laptop.ramGB + "GB");\nconsole.log("Color: " + laptop.color);`,
          output: "Apple MacBook Air\nRAM: 16GB\nColor: Space Gray",
        },
        {
          title: "Inspecting Keys and Values",
          code: `const scores = { math: 95, physics: 88, english: 91 };\n\nconst subjects = Object.keys(scores);\nconst marks = Object.values(scores);\n\nconsole.log("Subjects: " + subjects.join(", "));\nconsole.log("Marks: " + marks.join(", "));`,
          output: "Subjects: math, physics, english\nMarks: 95, 88, 91",
        },
      ],
      conclusion:
        "Objects are foundational to JavaScript architecture, storing structured key-value data. Use object literals for concise instantiation, dot or bracket notation for property lookups, regular method functions to preserve the this context, and static Object methods like Object.keys() and Object.entries() to iterate and transform object data.",
    },
    // ================= TOPIC 13: JAVASCRIPT CLASSES & CONSTRUCTORS =================
    {
      id: "javascript-classes",
      title: "Classes & Constructors",
      subjectCode: "javascript",
      intro:
        "Introduced in ES6 (ECMAScript 2015), JavaScript classes offer a clean, syntactic sugar over JavaScript's existing prototype-based inheritance model. Classes serve as blueprints for instantiating objects, encapsulating data with fields and methods, and supporting object-oriented concepts like inheritance and polymorphism with familiar, clear syntax.",
      sections: [
        {
          heading: "Declaring a Class and Constructor",
          content: [
            {
              type: "text",
              value:
                "A class is defined using the <code>class</code> keyword. The <code>constructor</code> method is a special method automatically executed whenever a new instance is created using the <code>new</code> operator.",
            },
            {
              type: "text",
              value: "<strong>Syntax:</strong>",
            },
            {
              type: "code",
              value: `class ClassName {
  constructor(param1, param2) {
    this.prop1 = param1;
    this.prop2 = param2;
  }

  methodName() {
    // instance method logic
  }
}`,
            },
            {
              type: "text",
              value: "<strong>Example:</strong>",
            },
            {
              type: "code",
              value: `class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  displayProfile() {
    return \`User: \${this.name} (\${this.email})\`;
  }
}

const user1 = new User("Rahul Sharma", "rahul@example.com");
console.log(user1.displayProfile());`,
            },
            {
              type: "text",
              value: "<strong>Output:</strong><br/>User: Rahul Sharma (rahul@example.com)",
            },
          ],
        },
        {
          heading: "1. Class Inheritance using extends and super",
          content: [
            {
              type: "text",
              value:
                "Classes can inherit properties and methods from parent classes using the <code>extends</code> keyword. Inside the child constructor, calling <code>super()</code> executes the parent constructor and initializes the <code>this</code> context.",
            },
            {
              type: "text",
              value: "<strong>Example:</strong>",
            },
            {
              type: "code",
              value: `class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }

  start() {
    return \`\${this.brand} is starting.\`;
  }
}

class Car extends Vehicle {
  constructor(brand, model) {
    super(brand); // Call parent class constructor
    this.model = model;
  }

  getDetails() {
    return \`\${this.start()} Model: \${this.model}\`;
  }
}

const myCar = new Car("Toyota", "Corolla");
console.log(myCar.getDetails());`,
            },
            {
              type: "text",
              value: "<strong>Output:</strong><br/>Toyota is starting. Model: Corolla",
            },
          ],
        },
        {
          heading: "2. Static Methods and Properties",
          content: [
            {
              type: "text",
              value:
                "Methods and fields declared with the <code>static</code> keyword belong directly to the class itself rather than instances. They are invoked on the class without creating an object.",
            },
            {
              type: "code",
              value: `class MathUtility {
  static PI = 3.14159;

  static calculateCircleArea(radius) {
    return this.PI * radius * radius;
  }
}

console.log(MathUtility.PI); // 3.14159
console.log(MathUtility.calculateCircleArea(5)); // 78.53975

// const util = new MathUtility();
// util.calculateCircleArea(5); // TypeError: util.calculateCircleArea is not a function`,
            },
          ],
        },
        {
          heading: "3. Getters and Setters",
          content: [
            {
              type: "text",
              value:
                "Getters and setters allow you to define methods that execute when a property is read or assigned, enabling validation and data normalization.",
            },
            {
              type: "code",
              value: `class BankAccount {
  constructor(balance) {
    this._balance = balance;
  }

  get balance() {
    return \`₹\${this._balance}\`;
  }

  set balance(amount) {
    if (amount < 0) {
      console.log("Balance cannot be negative!");
      return;
    }
    this._balance = amount;
  }
}

const account = new BankAccount(5000);
account.balance = 7500; // Calls setter
console.log(account.balance); // Calls getter: ₹7500`,
            },
          ],
        },
      ],
      // ==========================================
      // PLAYGROUND ADDED HERE
      // ==========================================
      playground: [
        {
          title: "Class Instantiation & Method Call",
          code: `class Product {\n  constructor(name, price) {\n    this.name = name;\n    this.price = price;\n  }\n\n  applyDiscount(percent) {\n    this.price -= (this.price * percent) / 100;\n    return this.price;\n  }\n}\n\nconst item = new Product("Wireless Mouse", 1200);\nitem.applyDiscount(10);\nconsole.log(item.name + " Final Price: " + item.price);`,
          output: "Wireless Mouse Final Price: 1080",
        },
        {
          title: "Subclassing with extends and super",
          code: `class Employee {\n  constructor(name) {\n    this.name = name;\n  }\n}\n\nclass Manager extends Employee {\n  constructor(name, department) {\n    super(name);\n    this.department = department;\n  }\n\n  getInfo() {\n    return \`\${this.name} manages \${this.department}\`;\n  }\n}\n\nconst mgr = new Manager("Ananya", "Engineering");\nconsole.log(mgr.getInfo());`,
          output: "Ananya manages Engineering",
        },
      ],
      conclusion:
        "JavaScript classes provide structured, object-oriented design patterns with constructor initialization, prototypal inheritance through extends and super, static class-level utilities, and getter/setter property accessors while maintaining full backwards compatibility with JavaScript prototypes.",
    },
    // ================= TOPIC 14: JAVASCRIPT SCOPE & CLOSURES =================
    {
      id: "javascript-scope-closures",
      title: "Scope & Closures",
      subjectCode: "javascript",
      intro:
        "Scope determines the accessibility and lifetime of variables, functions, and objects across different parts of your code. A closure is a fundamental JavaScript feature where an inner function retains access to the outer enclosing function's variables, scope chain, and state even after the outer function has finished executing.",
      sections: [
        {
          heading: "Understanding Scope in JavaScript",
          content: [
            {
              type: "text",
              value:
                "JavaScript features three primary layers of scope that dictate where declared identifiers are reachable:",
            },
            {
              type: "list",
              items: [
                " Global Scope: Variables declared outside any function or block, accessible anywhere in the program.",
                " Function (Local) Scope: Variables declared inside a function body, accessible only within that function.",
                " Block Scope: Introduced in ES6 via let and const, variables are confined to the enclosing curly braces {}.",
              ],
            },
            {
              type: "code",
              value: `let globalVar = "Accessible everywhere";

function checkScope() {
  let functionVar = "Accessible only in checkScope()";

  if (true) {
    let blockVar = "Accessible only inside this if block";
    var functionScopedVar = "Accessible anywhere in checkScope()";
    console.log(blockVar); // Valid
  }

  // console.log(blockVar); // ReferenceError: blockVar is not defined
  console.log(functionScopedVar); // Valid (var ignores curly blocks)
}

checkScope();`,
            },
          ],
        },
        {
          heading: "1. The Scope Chain & Lexical Environment",
          content: [
            {
              type: "text",
              value:
                "JavaScript uses lexical scoping, meaning the accessibility of variables is determined by their physical location in the source code. When resolving a variable, the engine looks inside the current local scope first; if not found, it traverses upward through parent scopes until reaching the global scope.",
            },
            {
              type: "code",
              value: `const siteName = "W3Coder";

function outer() {
  const outerText = "Outer Scope";

  function inner() {
    const innerText = "Inner Scope";
    // Resolves innerText locally, outerText from outer(), and siteName from global
    console.log(\`\${siteName} -> \${outerText} -> \${innerText}\`);
  }

  inner();
}

outer();`,
            },
            {
              type: "text",
              value: "<strong>Output:</strong><br/>W3Coder -&gt; Outer Scope -&gt; Inner Scope",
            },
          ],
        },
        {
          heading: "2. What is a Closure?",
          content: [
            {
              type: "text",
              value:
                "A closure is formed whenever a function is created, giving it access to its lexical environment. When an inner function is returned or passed out of an outer function, it preserves a live reference to the variables in that outer function's scope.",
            },
            {
              type: "text",
              value: "<strong>Syntax & Example:</strong>",
            },
            {
              type: "code",
              value: `function createGreeting(salutation) {
  // salutation is stored in the outer function's scope
  return function (name) {
    return \`\${salutation}, \${name}!\`;
  };
}

const greetMorning = createGreeting("Good Morning");
const greetEvening = createGreeting("Good Evening");

console.log(greetMorning("Aman"));
console.log(greetEvening("Priya"));`,
            },
            {
              type: "text",
              value: "<strong>Output:</strong><br/>Good Morning, Aman!<br/>Good Evening, Priya!",
            },
          ],
        },
        {
          heading: "3. Practical Use Case: Data Encapsulation & Private State",
          content: [
            {
              type: "text",
              value:
                "Before native private class fields were introduced, closures served as the standard technique to create private state and emulate object encapsulation.",
            },
            {
              type: "code",
              value: `function createCounter() {
  let count = 0; // Private variable, cannot be modified directly from outside

  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getCount() {
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.count);       // undefined (private!)`,
            },
          ],
        },
      ],
      // ==========================================
      // PLAYGROUND ADDED HERE
      // ==========================================
      playground: [
        {
          title: "Closure State Retention",
          code: `function makeMultiplier(multiplier) {\n  return function (x) {\n    return x * multiplier;\n  };\n}\n\nconst double = makeMultiplier(2);\nconst triple = makeMultiplier(3);\n\nconsole.log("Double 7: " + double(7));\nconsole.log("Triple 7: " + triple(7));`,
          output: "Double 7: 14\nTriple 7: 21",
        },
        {
          title: "Block Scope Isolation",
          code: `let external = "Safe";\n\n{\n  let internal = "Hidden";\n  console.log("Inside block: " + internal);\n}\n\nconsole.log("Outside block: " + external);`,
          output: "Inside block: Hidden\nOutside block: Safe",
        },
      ],
      conclusion:
        "Scope governs variable visibility across global, function, and block boundaries, while lexical scoping dictates identifier resolution along the scope chain. Closures allow inner functions to retain access to their defining lexical environment, making them an indispensable pattern for data privacy, state retention, factory functions, and higher-order functional programming.",
    },
    // ================= TOPIC 15: JAVASCRIPT ENCAPSULATION (PRIVATE FIELDS #) =================
    {
      id: "javascript-encapsulation",
      title: "JavaScript Encapsulation",
      subjectCode: "javascript",
      intro:
        "Encapsulation is one of the core principles of Object-Oriented Programming (OOP). It involves bundling data (properties) and methods that operate on that data into a single unit, while restricting direct access to internal implementation details. Modern JavaScript provides native language-level encapsulation using the hash prefix (#) for private fields, methods, and accessors.",
      sections: [
        {
          heading: "What is Encapsulation?",
          content: [
            {
              type: "text",
              value:
                "Encapsulation protects an object's internal state from unintended external modifications and hides complex implementation details, exposing only controlled public interfaces.",
            },
            {
              type: "list",
              items: [
                " Data Hiding: Prevents external code from corrupting sensitive internal state.",
                " Controlled Access: Interacts with internal variables solely via public getter, setter, or worker methods.",
                " Loose Coupling: Allows developers to refactor internal logic without breaking external consumers relying on the public API.",
              ],
            },
          ],
        },
        {
          heading: "1. The Hash (#) Syntax for Private Class Fields",
          content: [
            {
              type: "text",
              value:
                "Prefixing a property name with a hash symbol (<code>#</code>) marks it as a private field. Private fields must be declared at the top level of the class body before they can be assigned inside the constructor or methods. Attempting to access or mutate them outside the class results in a hard syntax error.",
            },
            {
              type: "text",
              value: "<strong>Syntax:</strong>",
            },
            {
              type: "code",
              value: `class Example {
  #privateProperty; // Declared private field

  constructor(val) {
    this.#privateProperty = val;
  }
}`,
            },
            {
              type: "text",
              value: "<strong>Example:</strong>",
            },
            {
              type: "code",
              value: `class BankAccount {
  #balance; // Private field

  constructor(initialDeposit) {
    this.#balance = initialDeposit;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(\`Deposited: ₹\${amount}\`);
    }
  }

  getBalance() {
    return \`Current Balance: ₹\${this.#balance}\`;
  }
}

const account = new BankAccount(5000);
account.deposit(2000);
console.log(account.getBalance());

// Attempting direct access:
// console.log(account.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class`,
            },
            {
              type: "text",
              value: "<strong>Output:</strong><br/>Deposited: ₹2000<br/>Current Balance: ₹7000",
            },
          ],
        },
        {
          heading: "2. Private Methods and Accessors",
          content: [
            {
              type: "text",
              value:
                "Just like instance properties, methods, getters, and setters can also be made private using the <code>#</code> prefix to handle internal calculations and validations securely.",
            },
            {
              type: "code",
              value: `class PaymentProcessor {
  #apiKey;

  constructor(apiKey) {
    this.#apiKey = apiKey;
  }

  // Private helper method
  #validateKey() {
    return this.#apiKey.startsWith("sk_live_");
  }

  // Public API
  processPayment(amount) {
    if (!this.#validateKey()) {
      return "Transaction failed: Invalid credentials.";
    }
    return \`Processed payment of ₹\${amount} successfully.\`;
  }
}

const gateway = new PaymentProcessor("sk_live_998877");
console.log(gateway.processPayment(1500));

// gateway.#validateKey(); // SyntaxError: Private field '#validateKey' must be declared in an enclosing class`,
            },
            {
              type: "text",
              value: "<strong>Output:</strong><br/>Processed payment of ₹1500 successfully.",
            },
          ],
        },
        {
          heading: "3. Convention (_prefix) vs Native (#prefix)",
          content: [
            {
              type: "text",
              value:
                "Historically, developers used an underscore (<code>_balance</code>) to signal that a variable was intended to be private. However, this was purely a naming convention and offered no runtime security. The <code>#</code> syntax enforces true privacy at the engine level.",
            },
            {
              type: "list",
              items: [
                " Underscore (_prop): Soft convention. Fully accessible, modifiable, and visible in Object.keys().",
                " Hash (#prop): Hard engine-level privacy. Inaccessible outside the class, invisible in Object.keys(), and throws a SyntaxError on unauthorized access.",
              ],
            },
          ],
        },
      ],
      // ==========================================
      // PLAYGROUND ADDED HERE
      // ==========================================
      playground: [
        {
          title: "Securing State with Private Fields",
          code: `class SecureVault {\n  #secretCode;\n\n  constructor(code) {\n    this.#secretCode = code;\n  }\n\n  unlock(enteredCode) {\n    return enteredCode === this.#secretCode ? "Access Granted" : "Access Denied";\n  }\n}\n\nconst vault = new SecureVault("alpha99");\nconsole.log(vault.unlock("wrongPass"));\nconsole.log(vault.unlock("alpha99"));`,
          output: "Access Denied\nAccess Granted",
        },
        {
          title: "Controlled Mutations via Getters/Setters",
          code: `class UserProfile {\n  #age = 18;\n\n  get age() {\n    return this.#age;\n  }\n\n  set age(newAge) {\n    if (newAge < 0 || newAge > 120) {\n      console.log("Invalid age provided");\n      return;\n    }\n    this.#age = newAge;\n  }\n}\n\nconst user = new UserProfile();\nuser.age = 25;\nconsole.log("Updated Age: " + user.age);\nuser.age = -5;`,
          output: "Updated Age: 25\nInvalid age provided",
        },
      ],
      conclusion:
        "Encapsulation safeguards internal object integrity by restricting unauthorized mutations. With the introduction of the native hash (#) prefix for private fields, methods, and accessors, JavaScript offers true compile-time and runtime privacy, replacing informal underscore conventions with robust language-level guarantees.",
    },
    // ================= TOPIC 16: INHERITANCE =================
    {
      id: "javascript-prototypes",
      title: "JavaScript Inheritance",
      subjectCode: "javascript",
      intro:
        "Unlike class-based languages like Java or C++, JavaScript uses a prototype-based inheritance model. Every JavaScript object has an internal link to another object called its prototype. When attempting to access a property or method that does not exist directly on an object, JavaScript searches for it up the prototype chain until it either finds the property or reaches null.",
      sections: [
        {
          heading: "What is a Prototype?",
          content: [
            {
              type: "text",
              value:
                "In JavaScript, objects inherit features directly from other objects. A prototype functions as a fallback repository for shared properties and methods.",
            },
            {
              type: "list",
              items: [
                " [[Prototype]] / __proto__: The internal link inside every object pointing to its prototype.",
                " prototype property: A property present on constructor functions and classes used to assign shared methods to instances.",
                " Prototype Chain: The chain of references traversed when resolving property lookups.",
                " Object.prototype: The root of the prototype chain, whose own prototype is null.",
              ],
            },
          ],
        },
        {
          heading: "1. The Prototype Property on Constructor Functions",
          content: [
            {
              type: "text",
              value:
                "When creating multiple objects using constructor functions, attaching methods directly to <code>this</code> creates duplicate function copies in memory for every instance. Attaching methods to the constructor's <code>prototype</code> shares a single copy among all instances.",
            },
            {
              type: "text",
              value: "<strong>Syntax & Example:</strong>",
            },
            {
              type: "code",
              value: `function Person(name, role) {
  this.name = name;
  this.role = role;
}

// Adding a shared method to Person.prototype
Person.prototype.introduce = function () {
  return \`Hi, I am \${this.name} and I work as a \${this.role}.\`;
};

const dev1 = new Person("Aman", "Frontend Engineer");
const dev2 = new Person("Priya", "DevOps Specialist");

console.log(dev1.introduce());
console.log(dev2.introduce());
console.log(dev1.introduce === dev2.introduce); // true (memory shared)`,
            },
            {
              type: "text",
              value:
                "<strong>Output:</strong><br/>Hi, I am Aman and I work as a Frontend Engineer.<br/>Hi, I am Priya and I work as a DevOps Specialist.<br/>true",
            },
          ],
        },
        {
          heading: "2. The Prototype Chain Lookup Mechanism",
          content: [
            {
              type: "text",
              value:
                "When you access <code>obj.prop</code>, the JavaScript runtime performs the following sequence:",
            },
            {
              type: "list",
              items: [
                " 1. Inspects the object itself for an own property named prop.",
                " 2. If not found, checks the object's prototype (Object.getPrototypeOf(obj)).",
                " 3. Follows the chain upward step-by-step through successive prototypes.",
                " 4. Returns undefined if the top of the chain (Object.prototype) is reached without a match.",
              ],
            },
            {
              type: "code",
              value: `const scores = [10, 20, 30];

// scores has no own method named 'includes'
console.log(scores.hasOwnProperty("includes")); // false

// 'includes' is found on Array.prototype
console.log(Array.prototype.hasOwnProperty("includes")); // true

// 'toString' is found higher up on Object.prototype
console.log(Object.prototype.hasOwnProperty("toString")); // true`,
            },
          ],
        },
        {
          heading: "3. Prototypal Inheritance with Object.create()",
          content: [
            {
              type: "text",
              value:
                "<code>Object.create()</code> creates a new object using an existing object as its explicit prototype, enabling clean inheritance without invoking constructor functions.",
            },
            {
              type: "code",
              value: `const animal = {
  makeSound() {
    return \`\${this.sound}!\`;
  }
};

const dog = Object.create(animal);
dog.sound = "Woof";

console.log(dog.makeSound()); // "Woof!"
console.log(Object.getPrototypeOf(dog) === animal); // true`,
            },
            {
              type: "text",
              value: "<strong>Output:</strong><br/>Woof!<br/>true",
            },
          ],
        },
      ],
      // ==========================================
      // PLAYGROUND ADDED HERE
      // ==========================================
      playground: [
        {
          title: "Prototype Method Sharing",
          code: `function Car(brand) {\n  this.brand = brand;\n}\n\nCar.prototype.honk = function() {\n  return this.brand + " says Beep Beep!";\n};\n\nconst car1 = new Car("Hyundai");\nconst car2 = new Car("Honda");\n\nconsole.log(car1.honk());\nconsole.log(car2.honk());\nconsole.log("Shared Method: " + (car1.honk === car2.honk));`,
          output: "Hyundai says Beep Beep!\nHonda says Beep Beep!\nShared Method: true",
        },
        {
          title: "Prototype Delegation with Object.create",
          code: `const basePrinter = {\n  print() {\n    return "Printing: " + this.doc;\n  }\n};\n\nconst invoice = Object.create(basePrinter);\ninvoice.doc = "Tax Invoice #1024";\n\nconsole.log(invoice.print());\nconsole.log("Own Property: " + invoice.hasOwnProperty("doc"));\nconsole.log("Own Print Method: " + invoice.hasOwnProperty("print"));`,
          output: "Printing: Tax Invoice #1024\nOwn Property: true\nOwn Print Method: false",
        },
      ],
      conclusion:
        "Prototypal inheritance is the underlying mechanism powering code reuse and object relationships in JavaScript. Rather than copying methods to each instance, objects delegate unresolved property lookups upward along the prototype chain, delivering high memory efficiency and dynamic flexibility across functions, objects, and ES6 classes.",
    },
    // ================= TOPIC 17: JAVASCRIPT POLYMORPHISM =================
    {
      id: "javascript-polymorphism",
      title: "JavaScript Polymorphism",
      subjectCode: "javascript",
      intro:
        "Polymorphism is a core Object-Oriented Programming concept meaning 'many forms'. It allows different objects to respond to the same method call in their own specific ways. In JavaScript, polymorphism is primarily achieved through method overriding across inheritance hierarchies, as well as duck typing facilitated by dynamic typing.",
      sections: [
        {
          heading: "Understanding Polymorphism in JavaScript",
          content: [
            {
              type: "text",
              value:
                "Polymorphism enables a single interface or function to handle objects of different types seamlessly, executing the appropriate implementation at runtime:",
            },
            {
              type: "list",
              items: [
                " Method Overriding (Subtype Polymorphism): A child class provides a custom implementation of a method already defined in its parent class.",
                " Duck Typing: A dynamically typed approach where an object's suitability is determined by the presence of specific methods or properties rather than its formal class inheritance ('If it walks like a duck and quacks like a duck, it is a duck').",
                " Method Overloading Emulation: Simulating multiple method signatures by inspecting argument counts or types within a single function body.",
              ],
            },
          ],
        },
        {
          heading: "1. Method Overriding in ES6 Classes",
          content: [
            {
              type: "text",
              value:
                "When a subclass defines a method with the same name as a method in its parent class, the child's version overrides the parent's version for instances of that subclass.",
            },
            {
              type: "text",
              value: "<strong>Syntax & Example:</strong>",
            },
            {
              type: "code",
              value: `class Animal {
  makeSound() {
    return "Some generic animal sound";
  }
}

class Dog extends Animal {
  makeSound() {
    return "Bark! Bark!";
  }
}

class Cat extends Animal {
  makeSound() {
    return "Meow!";
  }
}

const animals = [new Animal(), new Dog(), new Cat()];

animals.forEach(animal => {
  console.log(animal.makeSound());
});`,
            },
            {
              type: "text",
              value:
                "<strong>Output:</strong><br/>Some generic animal sound<br/>Bark! Bark!<br/>Meow!",
            },
          ],
        },
        {
          heading: "2. Polymorphism via Duck Typing",
          content: [
            {
              type: "text",
              value:
                "Because JavaScript is dynamically typed, a function does not need to check an object's formal class. As long as the object exposes the expected method, the caller can execute it polymorphically.",
            },
            {
              type: "code",
              value: `class PayPalProcessor {
  pay(amount) {
    return \`Paid ₹\${amount} via PayPal.\`;
  }
}

class StripeProcessor {
  pay(amount) {
    return \`Paid ₹\${amount} via Stripe.\`;
  }
}

// Function depends on interface contract (.pay()), not parent class
function executeTransaction(paymentGateway, amount) {
  console.log(paymentGateway.pay(amount));
}

executeTransaction(new PayPalProcessor(), 1500);
executeTransaction(new StripeProcessor(), 3000);`,
            },
            {
              type: "text",
              value:
                "<strong>Output:</strong><br/>Paid ₹1500 via PayPal.<br/>Paid ₹3000 via Stripe.",
            },
          ],
        },
        {
          heading: "3. Simulating Method Overloading",
          content: [
            {
              type: "text",
              value:
                "JavaScript does not support native method overloading with multiple signatures of the same name. Instead, developers emulate it by checking <code>arguments.length</code> or testing parameter types.",
            },
            {
              type: "code",
              value: `class AreaCalculator {
  calculate(a, b) {
    if (b === undefined) {
      return a * a; // Single parameter -> Square area
    }
    return a * b;   // Two parameters -> Rectangle area
  }
}

const calc = new AreaCalculator();
console.log("Square: " + calc.calculate(5));       // 25
console.log("Rectangle: " + calc.calculate(5, 8));  // 40`,
            },
          ],
        },
      ],
      // ==========================================
      // PLAYGROUND ADDED HERE
      // ==========================================
      playground: [
        {
          title: "Polymorphic Render Hierarchy",
          code: `class Shape {\n  render() {\n    return "Rendering generic shape";\n  }\n}\n\nclass Circle extends Shape {\n  render() {\n    return "Drawing Circle [O]";\n  }\n}\n\nclass Square extends Shape {\n  render() {\n    return "Drawing Square [ ]";\n  }\n}\n\nconst shapes = [new Circle(), new Square(), new Shape()];\nshapes.forEach(s => console.log(s.render()));`,
          output: "Drawing Circle [O]\nDrawing Square [ ]\nRendering generic shape",
        },
        {
          title: "Duck Typing Interface",
          code: `const emailNotifier = { send: msg => "Email Sent: " + msg };\nconst smsNotifier = { send: msg => "SMS Sent: " + msg };\n\nfunction notifyUser(service, message) {\n  return service.send(message);\n}\n\nconsole.log(notifyUser(emailNotifier, "Welcome aboard!"));\nconsole.log(notifyUser(smsNotifier, "OTP: 482910"));`,
          output: "Email Sent: Welcome aboard!\nSMS Sent: OTP: 482910",
        },
      ],
      conclusion:
        "Polymorphism allows code to interact with varying object types through a shared interface. In JavaScript, polymorphism shines through class method overriding and flexible runtime duck typing, allowing applications to stay extensible, decoupled, and simple to maintain as new types are added.",
    },
    // ================= TOPIC 18: JAVASCRIPT ABSTRACTION =================
    {
      id: "javascript-abstraction",
      title: "JavaScript Abstraction",
      subjectCode: "javascript",
      intro:
        "Abstraction is a fundamental Object-Oriented Programming (OOP) principle that focuses on hiding complex implementation details and showing only the essential features of an object to the outside world. In JavaScript, abstraction is achieved using abstract base class patterns, factory functions, closures, and private methods to present simple, clean public interfaces.",
      sections: [
        {
          heading: "What is Abstraction?",
          content: [
            {
              type: "text",
              value:
                "Abstraction reduces code complexity by separating what an object does from how it accomplishes it internally.",
            },
            {
              type: "list",
              items: [
                " Interface Simplicity: Consumers interact with intuitive high-level methods without worrying about underlying mechanics.",
                " Implementation Hiding: Internal calculations, API calls, or hardware interactions remain internal.",
                " Modularity & Isolation: Internal implementations can be refactored or upgraded without altering the public API surface.",
              ],
            },
          ],
        },
        {
          heading: "1. Abstraction using Abstract Base Classes",
          content: [
            {
              type: "text",
              value:
                "While JavaScript does not have a dedicated <code>abstract</code> keyword like Java, abstraction can be enforced by checking <code>new.target</code> inside a base class constructor to prevent direct instantiation and require subclasses to implement abstract methods.",
            },
            {
              type: "text",
              value: "<strong>Example:</strong>",
            },
            {
              type: "code",
              value: `class DatabaseConnector {
  constructor() {
    // Prevent direct instantiation of abstract base class
    if (new.target === DatabaseConnector) {
      throw new Error("Cannot instantiate abstract class DatabaseConnector directly.");
    }
  }

  // Abstract method blueprint
  connect() {
    throw new Error("Abstract method 'connect()' must be implemented by subclass.");
  }
}

class MySQLConnector extends DatabaseConnector {
  connect() {
    return "Connected successfully to MySQL database.";
  }
}

// const db = new DatabaseConnector(); // Throws Error
const mysql = new MySQLConnector();
console.log(mysql.connect());`,
            },
            {
              type: "text",
              value:
                "<strong>Output:</strong><br/>Connected successfully to MySQL database.",
            },
          ],
        },
        {
          heading: "2. Hiding Complexity with Private Helper Methods",
          content: [
            {
              type: "text",
              value:
                "Modern classes abstract away multi-step internal routines by exposing a single public orchestrator method while delegating fine-grained steps to private methods (<code>#method</code>).",
            },
            {
              type: "code",
              value: `class CoffeeMachine {
  #boilWater() {
    return "Water boiled to 95°C";
  }

  #grindBeans() {
    return "Beans freshly ground";
  }

  #brew() {
    return "Espresso extracted";
  }

  // Abstracted Public Interface: Single action hides three complex steps
  makeCoffee() {
    console.log(this.#boilWater());
    console.log(this.#grindBeans());
    console.log(this.#brew());
    return "Your fresh coffee is ready!";
  }
}

const machine = new CoffeeMachine();
console.log(machine.makeCoffee());`,
            },
            {
              type: "text",
              value:
                "<strong>Output:</strong><br/>Water boiled to 95°C<br/>Beans freshly ground<br/>Espresso extracted<br/>Your fresh coffee is ready!",
            },
          ],
        },
        {
          heading: "3. Abstraction with Factory Functions",
          content: [
            {
              type: "text",
              value:
                "Factory functions combine closures and object literals to expose only selected methods while maintaining all operational variables and helper routines entirely hidden within lexical scope.",
            },
            {
              type: "code",
              value: `function createAudioPlayer() {
  let volume = 50; // Internal abstracted state

  function clamp(val) {
    return Math.max(0, Math.min(100, val));
  }

  return {
    turnUp() {
      volume = clamp(volume + 10);
      return \`Volume: \${volume}%\`;
    },
    turnDown() {
      volume = clamp(volume - 10);
      return \`Volume: \${volume}%\`;
    }
  };
}

const player = createAudioPlayer();
console.log(player.turnUp());
console.log(player.turnDown());`,
            },
          ],
        },
      ],
      // ==========================================
      // PLAYGROUND ADDED HERE
      // ==========================================
      playground: [
        {
          title: "Abstracting Device Power Cycle",
          code: `class SmartLight {\n  #voltage = 220;\n\n  #verifyCircuit() {\n    return this.#voltage === 220;\n  }\n\n  // Public interface hiding electrical verification\n  turnOn() {\n    if (!this.#verifyCircuit()) {\n      return "Power surge detected. Aborting.";\n    }\n    return "Light illuminates at full brightness.";\n  }\n}\n\nconst bulb = new SmartLight();\nconsole.log(bulb.turnOn());`,
          output: "Light illuminates at full brightness.",
        },
        {
          title: "Enforcing Subclass Contract",
          code: `class NotificationSender {\n  constructor() {\n    if (new.target === NotificationSender) {\n      throw new Error("Abstract class!");\n    }\n  }\n  send(msg) {\n    throw new Error("Must implement send()");\n  }\n}\n\nclass PushSender extends NotificationSender {\n  send(msg) {\n    return "Push Alert: " + msg;\n  }\n}\n\nconst push = new PushSender();\nconsole.log(push.send("Server online"));`,
          output: "Push Alert: Server online",
        },
      ],
      conclusion:
        "Abstraction conceals internal complexity and presents simple, robust interfaces to consumers. In JavaScript, abstraction is achieved by emulating abstract classes via new.target checks, encapsulating helper steps within private hash (#) methods, and building clean interfaces using functional factory closures.",
    },
    // ================= TOPIC 19: JAVASCRIPT MODULES (IMPORT / EXPORT) =================
    {
      id: "javascript-modules",
      title: "JavaScript Modules",
      subjectCode: "javascript",
      intro:
        "JavaScript modules allow developers to divide code into separate, reusable, and maintainable files. Standardized in ES6 (ES Modules / ESM), each module has its own top-level scope rather than polluting the global namespace. Code entities such as functions, objects, and primitives are explicitly shared between files using the export and import keywords.",
      sections: [
        {
          heading: "Why Use Modules?",
          content: [
            {
              type: "text",
              value:
                "Before native ES Modules, JavaScript relied on global variables or external loaders like CommonJS (require/module.exports) in Node.js. ES Modules bring native, standardized modularity directly to browsers and runtimes.",
            },
            {
              type: "list",
              items: [
                " Scope Isolation: Variables declared inside a module are not added to the global window or global scope.",
                " Reusability: Code can be written once and imported across multiple files and projects.",
                " Maintainability: Clear separation of concerns makes large codebases easier to test and navigate.",
                " Tree Shaking: Modern bundlers can remove unused exports from production builds to optimize bundle sizes.",
              ],
            },
          ],
        },
        {
          heading: "1. Named Exports and Imports",
          content: [
            {
              type: "text",
              value:
                "Named exports allow sharing multiple values from a single module. When importing, the names must match exactly unless aliased using the <code>as</code> keyword, and they are enclosed inside curly braces <code>{}</code>.",
            },
            {
              type: "text",
              value: "<strong>Exporting (mathUtils.js):</strong>",
            },
            {
              type: "code",
              value: `// Inline named exports
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}`,
            },
            {
              type: "text",
              value: "<strong>Importing (main.js):</strong>",
            },
            {
              type: "code",
              value: `// Import specific named exports
import { add, PI, subtract as minus } from "./mathUtils.js";

console.log(add(10, 5));     // 15
console.log(PI);             // 3.14159
console.log(minus(10, 4));   // 6

// Import all named exports into a single namespace object
import * as MathOps from "./mathUtils.js";
console.log(MathOps.add(20, 30)); // 50`,
            },
          ],
        },
        {
          heading: "2. Default Exports and Imports",
          content: [
            {
              type: "text",
              value:
                "A file can have at most one <code>export default</code>. Default exports do not use curly braces upon import and can be imported under any custom identifier name.",
            },
            {
              type: "text",
              value: "<strong>Exporting (User.js):</strong>",
            },
            {
              type: "code",
              value: `export default class User {
  constructor(name) {
    this.name = name;
  }
}`,
            },
            {
              type: "text",
              value: "<strong>Importing (app.js):</strong>",
            },
            {
              type: "code",
              value: `// No curly braces required; name can be customized
import AppUser from "./User.js";

const user = new AppUser("Aman");
console.log(user.name); // "Aman"`,
            },
          ],
        },
        {
          heading: "3. Combining Named and Default Exports",
          content: [
            {
              type: "text",
              value:
                "A module can export one default entity alongside multiple named helpers, which can then be brought in with a unified import statement.",
            },
            {
              type: "code",
              value: `// logger.js
export const LOG_LEVEL = "DEBUG";

export default function log(message) {
  console.log(\`[\${LOG_LEVEL}] \${message}\`);
}

// client.js
import log, { LOG_LEVEL } from "./logger.js";
log("System initialized with level " + LOG_LEVEL);`,
            },
          ],
        },
        {
          heading: "4. Loading Modules in HTML",
          content: [
            {
              type: "text",
              value:
                "To use ES modules directly inside web browsers without a bundler, add <code>type=\"module\"</code> to the <code>&lt;script&gt;</code> tag. This enables strict mode automatically and defers script execution until HTML parsing completes.",
            },
            {
              type: "code",
              value: `<script type="module" src="./main.js"></script>`,
            },
          ],
        },
      ],
      // ==========================================
      // PLAYGROUND ADDED HERE
      // ==========================================
      playground: [
        {
          title: "Simulated Named Module Pattern",
          code: `// Simulating module exports using an object namespace\nconst StringModule = {\n  capitalize: str => str.charAt(0).toUpperCase() + str.slice(1),\n  shout: str => str.toUpperCase() + "!"\n};\n\n// Simulating destructuring import { capitalize, shout }\nconst { capitalize, shout } = StringModule;\n\nconsole.log(capitalize("javascript"));\nconsole.log(shout("modular code"));`,
          output: "Javascript\nMODULAR CODE!",
        },
        {
          title: "Simulated Default Module Export",
          code: `// Simulating default export with internal private helper\nconst createUserManager = () => {\n  let users = ["Rohit", "Sneha"];\n  return {\n    list: () => users.join(", "),\n    add: name => users.push(name)\n  };\n};\n\nconst userManager = createUserManager();\nuserManager.add("Priya");\nconsole.log("Registered Users: " + userManager.list());`,
          output: "Registered Users: Rohit, Sneha, Priya",
        },
      ],
      conclusion:
        "JavaScript ES Modules (ESM) provide a standardized, native solution for organizing scalable applications. By leveraging named exports for multiple utility members, default exports for primary modules, and scoped module scripts in the browser, code remains clean, modular, and optimized for modern build systems.",
    },
     // ================= TOPIC 20: JAVASCRIPT ERROR HANDLING (TRY...CATCH, THROW) =================  
    {
      id: "javascript-error-handling",
      title: "JS Error Handling ",
      subjectCode: "javascript",
      intro:
        "Error handling is the process of anticipating, catching, and resolving runtime errors in an application. Without error handling, unexpected exceptions cause the JavaScript engine to stop program execution immediately. Using try, catch, finally, and the throw statement, developers can handle failures gracefully without crashing the application.",
      sections: [
        {
          heading: "Core Error Handling Mechanism",
          content: [
            {
              type: "text",
              value:
                "JavaScript provides four primary statements to construct robust fault-tolerant control flows:",
            },
            {
              type: "list",
              items: [
                " try: Wraps a block of code to be tested for errors while it is being executed.",
                " catch: Defines a block of code to execute if an error occurs in the try block.",
                " finally: Executes code after try and catch regardless of the outcome (success or error).",
                " throw: Creates and throws custom exceptions or standard Error objects manually.",
              ],
            },
          ],
        },
        {
          heading: "1. The try...catch Statement",
          content: [
            {
              type: "text",
              value:
                "When code inside the <code>try</code> block throws a runtime exception, execution stops inside the block and jumps immediately to the <code>catch</code> block, passing an error object containing diagnostic information.",
            },
            {
              type: "text",
              value: "<strong>Syntax:</strong>",
            },
            {
              type: "code",
              value: `try {
  // Code that may throw an error
} catch (error) {
  // Code to handle the error
  console.error(error.name);
  console.error(error.message);
}`,
            },
            {
              type: "text",
              value: "<strong>Example:</strong>",
            },
            {
              type: "code",
              value: `try {
  // Calling an undefined function
  nonExistentFunction();
} catch (err) {
  console.log("Caught an error: " + err.message);
}

console.log("Program execution continues normally.");`,
            },
            {
              type: "text",
              value:
                "<strong>Output:</strong><br/>Caught an error: nonExistentFunction is not defined<br/>Program execution continues normally.",
            },
          ],
        },
        {
          heading: "2. The throw Statement & Custom Errors",
          content: [
            {
              type: "text",
              value:
                "The <code>throw</code> statement allows developers to generate custom exceptions. While you can technically throw strings or numbers, the recommended practice is to throw an instance of the built-in <code>Error</code> object to capture call stack traces.",
            },
            {
              type: "text",
              value: "<strong>Example:</strong>",
            },
            {
              type: "code",
              value: `function withdrawMoney(balance, amount) {
  if (amount <= 0) {
    throw new Error("Withdrawal amount must be greater than zero.");
  }
  if (amount > balance) {
    throw new Error("Insufficient funds available.");
  }
  return balance - amount;
}

try {
  let remaining = withdrawMoney(1000, 1500);
  console.log("Remaining Balance: " + remaining);
} catch (error) {
  console.log("Transaction Failed: " + error.message);
}`,
            },
            {
              type: "text",
              value:
                "<strong>Output:</strong><br/>Transaction Failed: Insufficient funds available.",
            },
          ],
        },
        {
          heading: "3. The finally Block",
          content: [
            {
              type: "text",
              value:
                "The <code>finally</code> block executes regardless of whether an error was thrown or handled. It is commonly used for cleanup operations such as closing database connections, canceling loaders, or resetting form states.",
            },
            {
              type: "code",
              value: `function processData() {
  console.log("Opening connection...");
  try {
    throw new Error("Network timeout!");
  } catch (err) {
    console.log("Handling error: " + err.message);
  } finally {
    console.log("Connection closed safely.");
  }
}

processData();`,
            },
            {
              type: "text",
              value:
                "<strong>Output:</strong><br/>Opening connection...<br/>Handling error: Network timeout!<br/>Connection closed safely.",
            },
          ],
        },
        {
          heading: "4. Standard Built-in Error Types",
          content: [
            {
              type: "list",
              items: [
                " ReferenceError: Raised when an invalid dereference or undeclared variable is accessed.",
                " TypeError: Raised when an operand or argument is passed to a function incompatible with that type.",
                " SyntaxError: Raised when attempting to interpret syntactically invalid code (often in JSON.parse).",
                " RangeError: Raised when a numeric variable or parameter is outside its valid range.",
              ],
            },
            {
              type: "code",
              value: `try {
  JSON.parse("{ invalid json }");
} catch (e) {
  console.log(e.name); // SyntaxError
}`,
            },
          ],
        },
      ],
      // ==========================================
      // PLAYGROUND ADDED HERE
      // ==========================================
      playground: [
        {
          title: "Safe JSON Parsing with try...catch",
          code: `function parseSafe(jsonString) {\n  try {\n    const data = JSON.parse(jsonString);\n    return "User: " + data.name;\n  } catch (err) {\n    return "Fallback: Could not parse input payload.";\n  }\n}\n\nconsole.log(parseSafe('{"name": "Aman"}'));\nconsole.log(parseSafe('bad_json_string'));`,
          output: "User: Aman\nFallback: Could not parse input payload.",
        },
        {
          title: "Input Validation with Custom throw",
          code: `function validateAge(age) {\n  try {\n    if (age < 18) throw new Error("Must be 18 or older.");\n    console.log("Access Granted. Age: " + age);\n  } catch (error) {\n    console.log("Denied: " + error.message);\n  } finally {\n    console.log("Validation check finished.");\n  }\n}\n\nvalidateAge(15);`,
          output: "Denied: Must be 18 or older.\nValidation check finished.",
        },
      ],
      conclusion:
        "Error handling prevents sudden application crashes and provides meaningful feedback to end users. By isolating volatile operations inside try blocks, diagnosing failures with typed Error objects in catch, and running mandatory cleanup routines inside finally, applications remain stable and resilient against unpredictable runtime failures.",
    },
    // ================= TOPIC 21: JAVASCRIPT WEB STORAGE & FILE API =================
    {
      id: "javascript-web-storage-file-api",
      title: "Web Storage & File",
      subjectCode: "javascript",
      intro:
        "Web applications often need to persist state locally and handle binary or text files uploaded by users. The Web Storage API (localStorage and sessionStorage) provides straightforward, client-side key-value storage mechanisms, while the File and Blob APIs, alongside FileReader, allow JavaScript to inspect, read, and manipulate files directly in the browser without server roundtrips.",
      sections: [
        {
          heading: "1. Web Storage: localStorage vs sessionStorage",
          content: [
            {
              type: "text",
              value:
                "Web Storage stores string-based key-value pairs directly in the user's browser, offering much larger capacity (around 5MB to 10MB) than traditional HTTP cookies.",
            },
            {
              type: "list",
              items: [
                " localStorage: Persists indefinitely across browser restarts and tabs until explicitly cleared by user or script.",
                " sessionStorage: Scoped to the individual browser tab session; data is cleared as soon as the tab is closed.",
              ],
            },
            {
              type: "text",
              value: "<strong>Core Storage Methods:</strong>",
            },
            {
              type: "code",
              value: `// Save key-value pair (must serialize objects with JSON.stringify)
const userProfile = { name: "Rohit", theme: "dark" };
localStorage.setItem("user", JSON.stringify(userProfile));

// Retrieve and deserialize item
const storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser.name); // "Rohit"

// Remove specific key or clear all keys
localStorage.removeItem("user");
localStorage.clear();`,
            },
          ],
        },
        {
          heading: "2. Working with Blobs (Binary Large Objects)",
          content: [
            {
              type: "text",
              value:
                "A <code>Blob</code> represents raw, immutable binary data. Blobs can be constructed dynamically in JavaScript to represent text, images, or documents, and converted into downloadable URLs using <code>URL.createObjectURL()</code>.",
            },
            {
              type: "text",
              value: "<strong>Syntax & Example:</strong>",
            },
            {
              type: "code",
              value: `// Creating a text blob
const textContent = "Hello, W3Coder Notes!";
const textBlob = new Blob([textContent], { type: "text/plain" });

console.log("Blob Size (bytes):", textBlob.size);
console.log("MIME Type:", textBlob.type);

// Generate a temporary browser URL pointing to the Blob
const downloadUrl = URL.createObjectURL(textBlob);
console.log("Downloadable URL:", downloadUrl);
// Free memory when no longer needed:
// URL.revokeObjectURL(downloadUrl);`,
            },
            {
              type: "text",
              value:
                "<strong>Output:</strong><br/>Blob Size (bytes): 21<br/>MIME Type: text/plain",
            },
          ],
        },
        {
          heading: "3. Reading Files with FileReader",
          content: [
            {
              type: "text",
              value:
                "The <code>FileReader</code> object allows web applications to asynchronously read the contents of files (or raw data buffers) stored on the user's computer via HTML <code>&lt;input type=\"file\"&gt;</code> elements or drag-and-drop operations.",
            },
            {
              type: "list",
              items: [
                " readAsText(blob): Reads content as plain textual string.",
                " readAsDataURL(blob): Encodes file contents as a base64 Data URL (ideal for image previews).",
                " readAsArrayBuffer(blob): Reads raw binary data into a fixed-length memory buffer.",
              ],
            },
            {
              type: "text",
              value: "<strong>Example (Handling File Upload):</strong>",
            },
            {
              type: "code",
              value: `<!-- HTML File Input -->
<input type="file" id="filePicker" accept=".txt,image/*" />

<!-- JavaScript Handling -->
<script>
  const fileInput = document.getElementById("filePicker");

  fileInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (!file) return;

    console.log(\`Selected: \${file.name}, Size: \${file.size} bytes\`);

    const reader = new FileReader();

    // Event fired when read operation completes
    reader.onload = (e) => {
      const fileContents = e.target.result;
      console.log("File loaded successfully:", fileContents);
    };

    reader.onerror = () => {
      console.error("Error reading file:", reader.error);
    };

    // Read the file as text
    reader.readAsText(file);
  });
</script>`,
            },
          ],
        },
      ],
      // ==========================================
      // PLAYGROUND ADDED HERE
      // ==========================================
      playground: [
        {
          title: "Simulated Web Storage Serialization",
          code: `// Simulating localStorage storage flow with JSON serialization\nconst sessionCache = {};\n\nfunction saveItem(key, val) {\n  sessionCache[key] = JSON.stringify(val);\n}\n\nfunction getItem(key) {\n  return sessionCache[key] ? JSON.parse(sessionCache[key]) : null;\n}\n\nsaveItem("settings", { volume: 80, theme: "dark" });\nconst loaded = getItem("settings");\n\nconsole.log("Raw Stored: " + sessionCache["settings"]);\nconsole.log("Parsed Volume: " + loaded.volume);\nconsole.log("Parsed Theme: " + loaded.theme);`,
          output: 'Raw Stored: {"volume":80,"theme":"dark"}\nParsed Volume: 80\nParsed Theme: dark',
        },
        {
          title: "Inspect Blob Properties",
          code: `const logData = "INFO: Server started at port 8080\\nSTATUS: OK";\nconst logBlob = new Blob([logData], { type: "text/plain" });\n\nconsole.log("Blob Created: " + (logBlob instanceof Blob));\nconsole.log("Total Size: " + logBlob.size + " bytes");\nconsole.log("Type: " + logBlob.type);`,
          output: "Blob Created: true\nTotal Size: 47 bytes\nType: text/plain",
        },
      ],
      conclusion:
        "The Web Storage and File APIs bridge the gap between client-side persistence and local system interaction. Use localStorage and sessionStorage for caching application settings and state, and combine Blobs with FileReader to read, preview, and generate user-uploaded files entirely within the client environment.",
    },
    // ================= TOPIC 22: JAVASCRIPT COLLECTIONS (MAP, SET, WEAKMAP, WEAKSET) =================
    {
      id: "javascript-collections",
      title: "Collections (Map, Set)",
      subjectCode: "javascript",
      intro:
        "Introduced in ES6 (ECMAScript 2015), keyed collections provide dedicated, optimized data structures for managing collections of values and key-value associations. While plain Objects and Arrays handle standard structures, Map, Set, WeakMap, and WeakSet provide superior performance for frequent additions and removals, permit arbitrary key types, enforce value uniqueness, and allow garbage-collection-friendly weak references.",
      sections: [
        {
          heading: "Overview of Modern Collections",
          content: [
            {
              type: "text",
              value:
                "JavaScript includes four specialized collection types designed to solve specific data-organization challenges:",
            },
            {
              type: "list",
              items: [
                " Map: Ordered collection of key-value pairs where keys can be of any data type (primitives, objects, functions).",
                " Set: Ordered collection of unique values where duplicate entries are automatically discarded.",
                " WeakMap: Key-value collection where keys must be objects or non-registered symbols, held weakly to allow garbage collection.",
                " WeakSet: Collection of unique objects held weakly without preventing garbage collection.",
              ],
            },
          ],
        },
        {
          heading: "1. The Map Collection",
          content: [
            {
              type: "text",
              value:
                "Unlike standard JavaScript objects whose keys must be strings or symbols, a <code>Map</code> allows any value—including functions, objects, or primitive types—to serve as a key. It also preserves insertion order and exposes a direct <code>.size</code> property.",
            },
            {
              type: "text",
              value: "<strong>Syntax & Methods:</strong>",
            },
            {
              type: "code",
              value: `const userRoles = new Map();

const user1 = { name: "Aman" };
const user2 = { name: "Priya" };

// Set key-value pairs
userRoles.set(user1, "Admin");
userRoles.set(user2, "Editor");
userRoles.set(101, "Numeric Key ID");

// Lookup and verification
console.log(userRoles.get(user1));     // "Admin"
console.log(userRoles.has(user2));     // true
console.log(userRoles.size);           // 3

// Delete and iteration
userRoles.delete(101);
for (const [key, role] of userRoles) {
  console.log(\`\${key.name}: \${role}\`);
}`,
            },
            {
              type: "text",
              value:
                "<strong>Output:</strong><br/>Admin<br/>true<br/>3<br/>Aman: Admin<br/>Priya: Editor",
            },
          ],
        },
        {
          heading: "2. The Set Collection",
          content: [
            {
              type: "text",
              value:
                "A <code>Set</code> is a collection of unique values. Attempting to add an element that already exists has no effect. This makes Set the ideal tool for deduplicating arrays and conducting membership tests.",
            },
            {
              type: "text",
              value: "<strong>Syntax & Example:</strong>",
            },
            {
              type: "code",
              value: `const tags = new Set();

tags.add("javascript");
tags.add("react");
tags.add("javascript"); // Duplicate: ignored silently

console.log(tags.has("react")); // true
console.log(tags.size);         // 2

// Deduplicating an array using Set and the spread operator
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); // [1, 2, 3, 4, 5]`,
            },
            {
              type: "text",
              value: "<strong>Output:</strong><br/>true<br/>2<br/>[1, 2, 3, 4, 5]",
            },
          ],
        },
        {
          heading: "3. WeakMap and WeakSet",
          content: [
            {
              type: "text",
              value:
                "<code>WeakMap</code> and <code>WeakSet</code> hold weak references to their object items. If there are no other references to a key object in memory, the engine can garbage collect it automatically, preventing memory leaks.",
            },
            {
              type: "list",
              items: [
                " Keys (for WeakMap) and values (for WeakSet) MUST be objects or non-registered symbols.",
                " Not iterable: Because values may be garbage-collected at any time, they have no size property, keys() method, or for...of iteration.",
                " Ideal for storing private metadata, DOM node associations, or caches that should disappear when the primary object is destroyed.",
              ],
            },
            {
              type: "code",
              value: `const metadataCache = new WeakMap();

let domElement = { tag: "button", id: "submit-btn" };

// Attach metadata without preventing garbage collection
metadataCache.set(domElement, { clickCount: 0 });
console.log(metadataCache.get(domElement)); // { clickCount: 0 }

// If domElement is dereferenced, its entry is eligible for GC
domElement = null; // Memory freed automatically`,
            },
          ],
        },
        {
          heading: "Map vs Object: Quick Reference",
          content: [
            {
              type: "list",
              items: [
                " Key Types: Object keys are strictly Strings or Symbols; Map keys can be any type.",
                " Size: Object requires manual counting (Object.keys(obj).length); Map provides instantaneous .size.",
                " Iteration: Object requires Object.entries(); Map is inherently iterable in insertion order.",
                " Performance: Map performs significantly better in scenarios involving frequent additions and deletions of key-value pairs.",
              ],
            },
          ],
        },
      ],
      // ==========================================
      // PLAYGROUND ADDED HERE
      // ==========================================
      playground: [
        {
          title: "Deduplicating Array with Set",
          code: `const rawCategories = ["Tech", "Design", "Tech", "Business", "Design"];\nconst uniqueCategories = [...new Set(rawCategories)];\n\nconsole.log("Original Count: " + rawCategories.length);\nconsole.log("Unique Count:   " + uniqueCategories.length);\nconsole.log("Categories:     " + uniqueCategories.join(", "));`,
          output: "Original Count: 5\nUnique Count:   3\nCategories:     Tech, Design, Business",
        },
        {
          title: "Object-Keyed Map Lookups",
          code: `const sessionMap = new Map();\nconst activeUser = { id: 101, username: "dev_alex" };\n\nsessionMap.set(activeUser, { token: "auth_xyz789", loginTime: "10:30 AM" });\n\nconsole.log("Has Session: " + sessionMap.has(activeUser));\nconsole.log("Token:       " + sessionMap.get(activeUser).token);\nconsole.log("Map Size:    " + sessionMap.size);`,
          output: "Has Session: true\nToken:       auth_xyz789\nMap Size:    1",
        },
      ],
      conclusion:
        "Modern JavaScript collections provide performant and versatile alternatives to traditional objects and arrays. Use Map when keys are dynamic or non-string and when order preservation is vital; use Set to enforce value uniqueness and deduplicate arrays; and utilize WeakMap or WeakSet to bind metadata to objects without risking memory leaks.",
    },
    // ================= TOPIC 23: JAVASCRIPT ASYNCHRONOUS PROGRAMMING (CALLBACKS, PROMISES, ASYNC/AWAIT) =================
    {
      id: "javascript-asynchronous-programming",
      title: "Async, Promises, Await",
      subjectCode: "javascript",
      intro:
        "JavaScript is a single-threaded language, meaning it executes code sequentially on a single call stack. To manage time-intensive operations like API network requests, timers, and file input/output without freezing the browser or runtime, JavaScript relies on an asynchronous event-driven model powered by callbacks, Promises, and the modern async/await syntax.",
      sections: [
        {
          heading: "The Evolution of Asynchronous JavaScript",
          content: [
            {
              type: "text",
              value:
                "Asynchronous code in JavaScript has evolved across three key milestones to enhance readability, error handling, and maintainability:",
            },
            {
              type: "list",
              items: [
                " Callbacks: The original pattern where a function is passed as an argument to execute upon task completion (susceptible to 'Callback Hell').",
                " Promises (ES6): First-class objects representing eventual completion or failure, enabling clean method chaining (.then, .catch).",
                " async/await (ES8): Syntactic sugar built directly on Promises that allows writing asynchronous workflows with synchronous structure.",
              ],
            },
          ],
        },
        {
          heading: "1. Asynchronous Callbacks & Callback Hell",
          content: [
            {
              type: "text",
              value:
                "A callback is a function passed into an asynchronous routine to be invoked once the operation completes. When operations must be run in sequence, nesting multiple callbacks inside one another results in hard-to-maintain code known as the 'Pyramid of Doom'.",
            },
            {
              type: "text",
              value: "<strong>Example (Timer Callback):</strong>",
            },
            {
              type: "code",
              value: `console.log("Start");

setTimeout(() => {
  console.log("Executed after 1000ms delay");
}, 1000);

console.log("End");`,
            },
            {
              type: "text",
              value:
                "<strong>Output:</strong><br/>Start<br/>End<br/>Executed after 1000ms delay",
            },
          ],
        },
        {
          heading: "2. Promises (ES6)",
          content: [
            {
              type: "text",
              value:
                "A <code>Promise</code> represents an operation that has not completed yet but is expected in the future. It exists in one of three mutually exclusive states: <strong>Pending</strong>, <strong>Fulfilled</strong> (resolved with data), or <strong>Rejected</strong> (failed with an error).",
            },
            {
              type: "text",
              value: "<strong>Promise Methods:</strong>",
            },
            {
              type: "list",
              items: [
                " .then(onFulfilled): Receives the resolved value when the promise completes successfully.",
                " .catch(onRejected): Catches any error or rejection thrown anywhere in the promise chain.",
                " .finally(onSettled): Executes cleanup logic regardless of success or failure.",
              ],
            },
            {
              type: "text",
              value: "<strong>Syntax & Example:</strong>",
            },
            {
              type: "code",
              value: `const fetchUser = new Promise((resolve, reject) => {
  const success = true;

  setTimeout(() => {
    if (success) {
      resolve({ id: 101, username: "aman_shakya" });
    } else {
      reject(new Error("Unable to fetch user record."));
    }
  }, 500);
});

fetchUser
  .then((user) => {
    console.log("Loaded:", user.username);
  })
  .catch((err) => {
    console.error("Error:", err.message);
  })
  .finally(() => {
    console.log("Operation complete.");
  });`,
            },
            {
              type: "text",
              value:
                "<strong>Output:</strong><br/>Loaded: aman_shakya<br/>Operation complete.",
            },
          ],
        },
        {
          heading: "3. Modern async/await (ES8)",
          content: [
            {
              type: "text",
              value:
                "The <code>async</code> keyword marks a function as asynchronous, guaranteeing that it always returns a Promise. The <code>await</code> keyword pauses execution within that function until the specified Promise resolves or rejects, eliminating chained <code>.then()</code> callbacks.",
            },
            {
              type: "text",
              value: "<strong>Syntax & Error Handling:</strong>",
            },
            {
              type: "code",
              value: `const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function executeTaskFlow() {
  try {
    console.log("Starting tasks...");
    await delay(300);
    console.log("Task 1 finished");

    await delay(300);
    console.log("Task 2 finished");

    return "All tasks completed successfully!";
  } catch (error) {
    console.error("Pipeline failed:", error.message);
  }
}

executeTaskFlow().then((result) => console.log(result));`,
            },
            {
              type: "text",
              value:
                "<strong>Output:</strong><br/>Starting tasks...<br/>Task 1 finished<br/>Task 2 finished<br/>All tasks completed successfully!",
            },
          ],
        },
        {
          heading: "4. Concurrent Execution: Promise Combinators",
          content: [
            {
              type: "text",
              value:
                "When asynchronous operations do not depend on each other, running them sequentially with consecutive <code>await</code> calls introduces unnecessary latency. JavaScript offers static combinator methods to execute tasks concurrently:",
            },
            {
              type: "list",
              items: [
                " Promise.all([p1, p2]): Executes all promises in parallel; rejects immediately if any single promise fails.",
                " Promise.allSettled([p1, p2]): Waits until all promises complete regardless of outcome, returning array of results with status fields.",
                " Promise.race([p1, p2]): Resolves or rejects as soon as the fastest promise settles.",
                " Promise.any([p1, p2]): Resolves as soon as the first promise fulfills successfully, ignoring rejections unless all fail.",
              ],
            },
            {
              type: "code",
              value: `const p1 = Promise.resolve("Posts loaded");
const p2 = Promise.resolve("Comments loaded");

Promise.all([p1, p2]).then(([posts, comments]) => {
  console.log(posts + " & " + comments);
});`,
            },
          ],
        },
      ],
      // ==========================================
      // PLAYGROUND ADDED HERE
      // ==========================================
      playground: [
        {
          title: "Promise Chaining Calculation",
          code: `function multiplyByTwo(val) {\n  return new Promise((resolve) => {\n    resolve(val * 2);\n  });\n}\n\nmultiplyByTwo(15)\n  .then((res) => {\n    console.log("Initial result: " + res);\n    return res + 20;\n  })\n  .then((total) => {\n    console.log("Calculated total: " + total);\n  });`,
          output: "Initial result: 30\nCalculated total: 50",
        },
        {
          title: "Async/Await with Error Recovery",
          code: `const fetchProduct = async (id) => {\n  if (!id) throw new Error("ID not provided");\n  return { id: id, title: "Mechanical Keyboard" };\n};\n\nasync function run() {\n  try {\n    const item = await fetchProduct(105);\n    console.log("Product: " + item.title);\n  } catch (err) {\n    console.log("Failed: " + err.message);\n  }\n}\n\nrun();`,
          output: "Product: Mechanical Keyboard",
        },
      ],
      conclusion:
        "Asynchronous programming is central to writing non-blocking, responsive JavaScript code. While callbacks laid the foundation, modern applications rely on Promises and async/await paired with try...catch to produce readable, modular, and maintainable asynchronous codebases.",
    },
    // ================= TOPIC 23.5: JAVASCRIPT EVENT LOOP & CONCURRENCY MODEL =================
    {
      id: "javascript-event-loop",
      title: "JS Event Loop ",
      subjectCode: "javascript",
      intro:
        "JavaScript runs on a single-threaded runtime model, meaning it has one call stack and can execute only one task at any given instant. To handle non-blocking asynchronous operations such as network requests, user interactions, and timers without freezing user interfaces, JavaScript environments rely on a concurrency mechanism orchestrating the Call Stack, Web APIs, Microtask Queue, and Callback (Macrotask) Queue via the Event Loop.",
      sections: [
        {
          heading: "Architecture of the JavaScript Runtime",
          content: [
            {
              type: "text",
              value:
                "The JavaScript runtime environment (in the browser or Node.js) consists of several cooperating components that coordinate synchronous and asynchronous execution:",
            },
            {
              type: "list",
              items: [
                " Call Stack: A LIFO (Last In, First Out) stack that tracks the current execution context and function calls.",
                " Web APIs (or Node C++ APIs): Background browser threads handling long-running work like HTTP requests, timers (setTimeout), and DOM events.",
                " Microtask Queue: A high-priority queue holding Promise callbacks (.then, .catch, .finally) and MutationObserver jobs.",
                " Macrotask (Callback) Queue: A queue holding broader asynchronous callbacks like setTimeout, setInterval, setImmediate, and I/O tasks.",
                " Event Loop: A continuous background loop that monitors the Call Stack. When the Call Stack is completely empty, it pushes waiting tasks from the queues into the stack.",
              ],
            },
          ],
        },
        {
          heading: "1. The Call Stack in Action",
          content: [
            {
              type: "text",
              value:
                "Synchronous code executes sequentially on the call stack. When a function is invoked, its execution frame is pushed onto the stack. When the function returns, its frame is popped off.",
            },
            {
              type: "code",
              value: `function first() {
  console.log("First function");
}

function second() {
  first();
  console.log("Second function");
}

second();`,
            },
            {
              type: "text",
              value:
                "<strong>Execution Order:</strong> <code>second()</code> is pushed &rarr; <code>first()</code> is pushed &rarr; logs 'First function' &rarr; <code>first()</code> pops &rarr; logs 'Second function' &rarr; <code>second()</code> pops.",
            },
          ],
        },
        {
          heading: "2. Microtasks vs Macrotasks: Queue Priorities",
          content: [
            {
              type: "text",
              value:
                "The fundamental rule of the Event Loop is <strong>Microtask Priority</strong>. Whenever the Call Stack empties, the Event Loop processes and drains the entire Microtask Queue before it picks up a single task from the Macrotask (Callback) Queue.",
            },
            {
              type: "text",
              value: "<strong>Example:</strong>",
            },
            {
              type: "code",
              value: `console.log("1. Script Start");

// Macrotask
setTimeout(() => {
  console.log("4. setTimeout (Macrotask)");
}, 0);

// Microtask
Promise.resolve().then(() => {
  console.log("3. Promise Callback (Microtask)");
});

console.log("2. Script End");`,
            },
            {
              type: "text",
              value:
                "<strong>Output Order:</strong><br/>1. Script Start<br/>2. Script End<br/>3. Promise Callback (Microtask)<br/>4. setTimeout (Macrotask)",
            },
          ],
        },
        {
          heading: "3. Step-by-Step Event Loop Lifecycle",
          content: [
            {
              type: "list",
              items: [
                " 1. Execute all synchronous code currently residing in the Call Stack until it is completely empty.",
                " 2. Inspect the Microtask Queue. Execute every microtask sequentially until the Microtask Queue is empty (even if microtasks schedule new microtasks).",
                " 3. Perform DOM rendering and screen repaints (in browser environments).",
                " 4. Pick the oldest available macrotask from the Macrotask Queue and push it onto the Call Stack for execution.",
                " 5. Repeat the loop continuously from step 1.",
              ],
            },
          ],
        },
      ],
      // ==========================================
      // PLAYGROUND ADDED HERE
      // ==========================================
      playground: [
        {
          title: "Execution Priority Simulation",
          code: `console.log("A: Synchronous Start");\n\nsetTimeout(() => {\n  console.log("D: Macrotask Timer");\n}, 0);\n\nPromise.resolve()\n  .then(() => {\n    console.log("C: Microtask Promise");\n  });\n\nconsole.log("B: Synchronous End");`,
          output: "A: Synchronous Start\nB: Synchronous End\nC: Microtask Promise\nD: Macrotask Timer",
        },
        {
          title: "Chained Microtasks Before Macrotask",
          code: `setTimeout(() => console.log("Macrotask Done"), 0);\n\nPromise.resolve()\n  .then(() => {\n    console.log("Microtask 1");\n    return "Microtask 2";\n  })\n  .then((res) => {\n    console.log(res);\n  });`,
          output: "Microtask 1\nMicrotask 2\nMacrotask Done",
        },
      ],
      conclusion:
        "Understanding the JavaScript Event Loop is key to writing high-performance web applications and avoiding thread-blocking bottlenecks. By orchestrating execution between the Call Stack, high-priority Microtasks (Promises), and Macrotasks (Timers and I/O), JavaScript achieves responsive, non-blocking asynchronous concurrency within a single-threaded runtime.",
    },
    // ================= TOPIC 24: JAVASCRIPT DOM MANIPULATION & EVENTS =================
    {
      id: "javascript-dom-events",
      title: "DOM & Events",
      subjectCode: "javascript",
      intro:
        "The Document Object Model (DOM) is a programming interface for web documents. It represents the page as a structured tree of objects that JavaScript can dynamically access, inspect, and modify. By combining DOM traversal, element mutation, and event listeners, developers create interactive, responsive user interfaces that react to user inputs like clicks, typing, and scrolling.",
      sections: [
        {
          heading: "What is the DOM?",
          content: [
            {
              type: "text",
              value:
                "When a browser loads an HTML document, it constructs a Document Object Model tree where every HTML element, attribute, and text node becomes a scriptable JavaScript object.",
            },
            {
              type: "list",
              items: [
                " Document Root: The entry point provided via the global document object.",
                " Node Hierarchy: Elements exist as parent, child, and sibling nodes.",
                " Dynamic Interactivity: JavaScript can change content, toggle CSS styles, insert new nodes, and listen to browser events.",
              ],
            },
          ],
        },
        {
          heading: "1. Selecting and Traversing DOM Elements",
          content: [
            {
              type: "text",
              value:
                "Modern JavaScript uses standard CSS selector methods on the <code>document</code> object to locate and return references to target DOM elements.",
            },
            {
              type: "list",
              items: [
                " document.getElementById(id): Fast lookup matching an element by its unique ID attribute.",
                " document.querySelector(selector): Returns the first matching element using any CSS selector.",
                " document.querySelectorAll(selector): Returns a static NodeList of all elements matching the CSS selector.",
              ],
            },
            {
              type: "text",
              value: "<strong>Example:</strong>",
            },
            {
              type: "code",
              value: `// Select by ID
const titleHeading = document.getElementById("main-title");

// Select first match using CSS selector
const primaryBtn = document.querySelector(".btn-primary");

// Select all matching elements
const cardItems = document.querySelectorAll(".card-item");
cardItems.forEach(card => card.style.opacity = "1");`,
            },
          ],
        },
        {
          heading: "2. Modifying Content, Attributes, and Styles",
          content: [
            {
              type: "text",
              value:
                "Once selected, elements can be updated in real-time by setting text, injecting HTML structures, toggling CSS classes, or applying inline styles.",
            },
            {
              type: "code",
              value: `const box = document.querySelector("#banner");

// Modifying text vs HTML
box.textContent = "Updated Notification Title";
box.innerHTML = "<strong>Alert:</strong> Session expiring soon!";

// Manipulating classes (recommended over inline styles)
box.classList.add("active");
box.classList.remove("hidden");
box.classList.toggle("highlight");

// Manipulating attributes and inline styles
box.setAttribute("data-status", "verified");
box.style.backgroundColor = "#e0f2fe";`,
            },
          ],
        },
        {
          heading: "3. Creating and Appending Elements",
          content: [
            {
              type: "text",
              value:
                "You can construct new nodes dynamically in memory using <code>document.createElement()</code> and append them to the existing document tree.",
            },
            {
              type: "code",
              value: `// Create new list item
const newListItem = document.createElement("li");
newListItem.textContent = "Learn Modern JavaScript";
newListItem.className = "todo-item";

// Append to target container
const todoList = document.getElementById("todo-list");
todoList.appendChild(newListItem);

// Removing an element
// newListItem.remove();`,
            },
          ],
        },
        {
          heading: "4. Event Handling & Event Delegation",
          content: [
            {
              type: "text",
              value:
                "Events are signals sent by the browser when actions occur (clicks, keypresses, submissions). Attach listeners using <code>addEventListener()</code> without overwriting existing handlers.",
            },
            {
              type: "text",
              value: "<strong>Event Listener Syntax:</strong>",
            },
            {
              type: "code",
              value: `const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Prevents default browser reload behavior
  console.log("Button clicked at coordinates:", event.clientX, event.clientY);
});`,
            },
            {
              type: "text",
              value: "<strong>Event Delegation Pattern:</strong>",
            },
            {
              type: "text",
              value:
                "Because events bubble up through ancestor elements in the DOM hierarchy, you can attach a single event listener to a parent container to manage events triggered by existing or dynamically added child elements.",
            },
            {
              type: "code",
              value: `const listContainer = document.getElementById("item-list");

// Single listener on parent handles clicks on all current and future buttons
listContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    console.log("Clicked item text: " + event.target.innerText);
  }
});`,
            },
          ],
        },
      ],
      // ==========================================
      // PLAYGROUND ADDED HERE
      // ==========================================
      playground: [
        {
          title: "Simulated DOM Tree Manipulation",
          code: `// Simulating DOM node structure in memory\nconst mockElement = {\n  tag: "div",\n  classList: new Set(["card"]),\n  textContent: "Old Card Content",\n  attributes: {}\n};\n\nmockElement.textContent = "Refreshed Card Content";\nmockElement.classList.add("active-card");\nmockElement.attributes["data-id"] = "card_101";\n\nconsole.log("Tag: " + mockElement.tag);\nconsole.log("Text: " + mockElement.textContent);\nconsole.log("Classes: " + [...mockElement.classList].join(", "));\nconsole.log("Data ID: " + mockElement.attributes["data-id"]);`,
          output: "Tag: div\nText: Refreshed Card Content\nClasses: card, active-card\nData ID: card_101",
        },
        {
          title: "Event Dispatch & Handling Simulation",
          code: `function handleButtonClick(event) {\n  return \`Action: \${event.type} triggered on ID: \${event.targetId}\`;\n}\n\nconst mockClickEvent = {\n  type: "click",\n  targetId: "download-btn",\n  timestamp: 1600\n};\n\nconsole.log(handleButtonClick(mockClickEvent));`,
          output: "Action: click triggered on ID: download-btn",
        },
      ],
      conclusion:
        "The Document Object Model (DOM) connects JavaScript logic directly to live web presentation. By mastering robust selection with querySelector, clean updates using classList and innerText, dynamic node creation, and scalable event delegation, developers can build fast, interactive, and modular user experiences.",
    },
    // ================= TOPIC 25: JAVASCRIPT HIGHER-ORDER FUNCTIONS (MAP, FILTER, REDUCE) =================
    {
      id: "javascript-higher-order-functions",
      title: "Higher-Order Functions",
      subjectCode: "javascript",
      intro:
        "A Higher-Order Function (HOF) is a function that either accepts one or more functions as arguments, returns a function, or both. In JavaScript, because functions are first-class citizens, higher-order functional utilities like map, filter, and reduce provide declarative, immutable, and expressive patterns for transforming, querying, and aggregating data collections.",
      sections: [
        {
          heading: "What are Higher-Order Functions?",
          content: [
            {
              type: "text",
              value:
                "Higher-order functions enable declarative programming—describing what you want to achieve rather than writing verbose imperative step-by-step loop controls with manual counter variables.",
            },
            {
              type: "list",
              items: [
                " Functions as Arguments: Callbacks passed to drive transformation or decision criteria.",
                " Functions as Return Values: Functions creating specialized functions (currying and factory functions).",
                " Immutability: Standard higher-order array methods return new values or arrays without mutating original source data.",
              ],
            },
          ],
        },
        {
          heading: "1. The map() Method: Transformation",
          content: [
            {
              type: "text",
              value:
                "The <code>map()</code> method creates a brand-new array populated with the results of calling a provided callback function on every element in the calling array. The output array always has the exact same length as the input array.",
            },
            {
              type: "text",
              value: "<strong>Syntax:</strong>",
            },
            {
              type: "code",
              value: `const newArray = array.map((currentValue, index, array) => {
  return transformedValue;
});`,
            },
            {
              type: "text",
              value: "<strong>Example:</strong>",
            },
            {
              type: "code",
              value: `const pricesInINR = [100, 250, 500];
const pricesWithGST = pricesInINR.map(price => price + (price * 0.18));

console.log(pricesWithGST);`,
            },
            {
              type: "text",
              value: "<strong>Output:</strong><br/>[ 118, 295, 590 ]",
            },
          ],
        },
        {
          heading: "2. The filter() Method: Selection",
          content: [
            {
              type: "text",
              value:
                "The <code>filter()</code> method creates a shallow copy of a portion of a given array, filtered down to just the elements that pass the test implemented by the provided callback function (evaluating to a truthy value).",
            },
            {
              type: "text",
              value: "<strong>Syntax:</strong>",
            },
            {
              type: "code",
              value: `const filteredArray = array.filter((currentValue, index, array) => {
  return condition; // returns true to keep the element, false to discard
});`,
            },
            {
              type: "text",
              value: "<strong>Example:</strong>",
            },
            {
              type: "code",
              value: `const students = [
  { name: "Aman", marks: 82 },
  { name: "Priya", marks: 45 },
  { name: "Rohit", marks: 74 },
  { name: "Sneha", marks: 33 }
];

const passedStudents = students.filter(student => student.marks >= 50);
console.log(passedStudents);`,
            },
            {
              type: "text",
              value:
                "<strong>Output:</strong><br/>[ { name: 'Aman', marks: 82 }, { name: 'Rohit', marks: 74 } ]",
            },
          ],
        },
        {
          heading: "3. The reduce() Method: Aggregation",
          content: [
            {
              type: "text",
              value:
                "The <code>reduce()</code> method executes a user-supplied 'reducer' callback function on each element of the array, passing the return value from the calculation on the preceding element. The final result of running the reducer across all elements is a single unified value (number, string, object, or aggregated array).",
            },
            {
              type: "text",
              value: "<strong>Syntax:</strong>",
            },
            {
              type: "code",
              value: `const result = array.reduce((accumulator, currentValue, index, array) => {
  return updatedAccumulator;
}, initialValue);`,
            },
            {
              type: "text",
              value: "<strong>Example:</strong>",
            },
            {
              type: "code",
              value: `const cart = [
  { item: "Keyboard", price: 1200 },
  { item: "Mouse", price: 600 },
  { item: "Mousepad", price: 300 }
];

// Summing total cart value with initial value 0
const cartTotal = cart.reduce((acc, product) => acc + product.price, 0);
console.log("Total Invoice: ₹" + cartTotal);`,
            },
            {
              type: "text",
              value: "<strong>Output:</strong><br/>Total Invoice: ₹2100",
            },
          ],
        },
        {
          heading: "4. Method Chaining: Composing Pipelines",
          content: [
            {
              type: "text",
              value:
                "Because <code>map()</code> and <code>filter()</code> return new arrays, you can chain them sequentially to build clean, multi-stage data processing pipelines.",
            },
            {
              type: "code",
              value: `const transactions = [500, -200, 1500, -80, 3000, -600];

// Step: Filter credits (>0), apply 2% bonus, and sum the total
const totalCreditedWithBonus = transactions
  .filter(amount => amount > 0)
  .map(credit => credit * 1.02)
  .reduce((sum, val) => sum + val, 0);

console.log("Net Credited: ₹" + totalCreditedWithBonus);`,
            },
            {
              type: "text",
              value: "<strong>Output:</strong><br/>Net Credited: ₹5100",
            },
          ],
        },
      ],
      // ==========================================
      // PLAYGROUND ADDED HERE
      // ==========================================
      playground: [
        {
          title: "Map & Filter Pipeline",
          code: `const numbers = [1, 2, 3, 4, 5, 6];\n\n// Pick odd numbers and square them\nconst oddSquares = numbers\n  .filter(n => n % 2 !== 0)\n  .map(n => n * n);\n\nconsole.log("Original: " + numbers.join(", "));\nconsole.log("Odd Squares: " + oddSquares.join(", "));`,
          output: "Original: 1, 2, 3, 4, 5, 6\nOdd Squares: 1, 9, 25",
        },
        {
          title: "Grouping Data with Reduce",
          code: `const words = ["apple", "banana", "avocado", "cherry", "blueberry"];\n\n// Group words by first letter\nconst grouped = words.reduce((acc, word) => {\n  const letter = word[0];\n  if (!acc[letter]) acc[letter] = [];\n  acc[letter].push(word);\n  return acc;\n}, {});\n\nconsole.log("Grouped A: " + grouped["a"].join(", "));\nconsole.log("Grouped B: " + grouped["b"].join(", "));`,
          output: "Grouped A: apple, avocado\nGrouped B: banana, blueberry",
        },
      ],
      conclusion:
        "Higher-order functions like map, filter, and reduce are essential building blocks of modern functional JavaScript. By decoupling the iteration mechanism from business logic and prioritizing immutability, they produce readable, declarative, and easily testable code across data-heavy applications.",
    },
    // ================= TOPIC 26: JAVASCRIPT DESTRUCTURING & REST/SPREAD OPERATORS =================
    {
      id: "javascript-destructuring-rest-spread",
      title: "Destructuring & Rest",
      subjectCode: "javascript",
      intro:
        "Introduced in ES6, destructuring assignment and the three-dots (...) syntax—serving as both the Rest and Spread operators—are among the most widely used features in modern JavaScript. Destructuring unpacks values from arrays or properties from objects into distinct variables, while Spread expands iterables into elements and Rest condenses multiple elements into a single collection.",
      sections: [
        {
          heading: "Overview of Syntax and Modern Usage",
          content: [
            {
              type: "text",
              value:
                "These features eliminate boilerplate assignment code and make working with objects, arrays, and function parameters concise and readable:",
            },
            {
              type: "list",
              items: [
                " Array Destructuring: Unpacks elements sequentially based on their index position.",
                " Object Destructuring: Extracts properties based on their key names, supporting renaming and default values.",
                " Spread Operator (...): Expands an iterable (like an array or string) or object into individual elements or properties.",
                " Rest Operator (...): Collects multiple remaining elements or arguments into a single structured array.",
              ],
            },
          ],
        },
        {
          heading: "1. Array Destructuring",
          content: [
            {
              type: "text",
              value:
                "Array destructuring extracts values into variables according to their position in the array. You can skip elements using extra commas or provide fallback default values.",
            },
            {
              type: "text",
              value: "<strong>Syntax & Examples:</strong>",
            },
            {
              type: "code",
              value: `const colors = ["Red", "Green", "Blue", "Yellow"];

// Positional extraction and skipping the third element
const [primary, secondary, , accent] = colors;
console.log(primary);   // "Red"
console.log(secondary); // "Green"
console.log(accent);    // "Yellow"

// Swapping variables without a temporary variable
let a = 10, b = 20;
[a, b] = [b, a];
console.log(a, b);      // 20, 10

// Default values
const [x = 1, y = 2] = [99];
console.log(x, y);      // 99, 2`,
            },
            {
              type: "text",
              value: "<strong>Output:</strong><br/>Red<br/>Green<br/>Yellow<br/>20 10<br/>99 2",
            },
          ],
        },
        {
          heading: "2. Object Destructuring",
          content: [
            {
              type: "text",
              value:
                "Object destructuring matches keys from the source object. You can extract values directly, assign them to new variable names, set defaults, and unpack deeply nested structures.",
            },
            {
              type: "text",
              value: "<strong>Syntax & Examples:</strong>",
            },
            {
              type: "code",
              value: `const developer = {
  username: "amar_dev",
  role: "Fullstack",
  experience: 4,
  location: {
    city: "Noida",
    country: "India"
  }
};

// Basic extraction and property renaming (username -> handle)
const { username: handle, role, status = "Active" } = developer;
console.log(handle); // "amar_dev"
console.log(role);   // "Fullstack"
console.log(status); // "Active" (fallback)

// Nested destructuring
const { location: { city } } = developer;
console.log(city);   // "Noida"`,
            },
            {
              type: "text",
              value: "<strong>Output:</strong><br/>amar_dev<br/>Fullstack<br/>Active<br/>Noida",
            },
          ],
        },
        {
          heading: "3. The Spread Operator (...)",
          content: [
            {
              type: "text",
              value:
                "The <code>...</code> operator acts as <strong>Spread</strong> when it expands an array, string, or object into its constituent elements. It is widely used to create shallow copies and merge data structures immutably.",
            },
            {
              type: "code",
              value: `// Merging arrays & adding items
const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Express"];
const fullStack = [...frontend, "React", ...backend];

// Shallow copying and overriding object properties
const baseConfig = { theme: "dark", fontSize: 14 };
const userConfig = { ...baseConfig, fontSize: 16, autoSave: true };

console.log(fullStack);
console.log(userConfig);`,
            },
            {
              type: "text",
              value:
                "<strong>Output:</strong><br/>[ 'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express' ]<br/>{ theme: 'dark', fontSize: 16, autoSave: true }",
            },
          ],
        },
        {
          heading: "4. The Rest Operator (...)",
          content: [
            {
              type: "text",
              value:
                "The <code>...</code> operator acts as <strong>Rest</strong> when it bundles multiple remaining elements into an array. It must always be placed as the final element in destructuring or function parameter lists.",
            },
            {
              type: "code",
              value: `// Rest in array destructuring
const [lead, coLead, ...teamMembers] = ["Aman", "Rohan", "Pooja", "Vikram", "Neha"];
console.log(lead);        // "Aman"
console.log(teamMembers); // ["Pooja", "Vikram", "Neha"]

// Rest in object destructuring (excluding specific keys)
const userRecord = { id: 101, passwordHash: "x8f#2", email: "user@test.com", active: true };
const { passwordHash, ...publicProfile } = userRecord;
console.log(publicProfile); // { id: 101, email: "user@test.com", active: true }

// Rest in function signatures
function tallyScores(teamName, ...scores) {
  const total = scores.reduce((sum, score) => sum + score, 0);
  return \`\${teamName}: \${total} points\`;
}
console.log(tallyScores("Coders", 25, 30, 45)); // "Coders: 100 points"`,
            },
          ],
        },
      ],
      // ==========================================
      // PLAYGROUND ADDED HERE
      // ==========================================
      playground: [
        {
          title: "Immutable State Update with Spread",
          code: `const initialCart = [\n  { id: 1, name: "Keyboard", qty: 1 },\n  { id: 2, name: "Mouse", qty: 2 }\n];\n\nconst newProduct = { id: 3, name: "Headphones", qty: 1 };\nconst updatedCart = [...initialCart, newProduct];\n\nconsole.log("Original Items: " + initialCart.length);\nconsole.log("Updated Items:  " + updatedCart.length);\nconsole.log("Last Added:     " + updatedCart[updatedCart.length - 1].name);`,
          output: "Original Items: 2\nUpdated Items:  3\nLast Added:     Headphones",
        },
        {
          title: "Destructuring Function Arguments",
          code: `function printBadge({ name, role = "Member", department = "General" }) {\n  return \`[\${department.toUpperCase()}] \${name} - \${role}\`;\n}\n\nconst employee = { name: "Sneha Roy", department: "Engineering" };\nconsole.log(printBadge(employee));\nconsole.log(printBadge({ name: "Kunal" }));`,
          output: "[ENGINEERING] Sneha Roy - Member\n[GENERAL] Kunal - Member",
        },
      ],
      conclusion:
        "Destructuring and the Rest/Spread operators form the backbone of modern, idiomatic JavaScript. By unpacking properties declaratively, combining data structures without mutation, and condensing variable argument lists cleanly, they make application code concise, predictable, and maintainable.",
    }


  ]
};
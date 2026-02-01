export const javascriptData = {
  subjectTitle: "JavaScript",
  subjectCode: "javascript", // URL: /course/javascript
  topics: [
    // ================= TOPIC 1: JAVASCRIPT BASICS =================
    {
      id: "basics", // URL: /course/javascript/basics
      title: "JavaScript Basics",
      intro: "JavaScript is a high-level, interpreted programming language that is primarily used to add interactivity and dynamic behavior to websites.",
      sections: [
        {
          heading: "1. Adding JavaScript to HTML",
          content: [
            { type: "text", value: "JavaScript can be added to HTML in three ways:" },
            {
              type: "list",
              items: [
                "Inline",
                "Internal (within <script> tag)",
                "External (linked using a separate .js file)"
              ]
            },
            {
              type: "code",
              value: `<script>
  alert('Hello, JavaScript!');
</script>`
            }
          ]
        },
        {
          heading: "2. Output in JavaScript",
          content: [
            {
              type: "list-html", // HTML tags allow karne ke liye
              items: [
                "<code>alert()</code> – Displays alert dialog",
                "<code>console.log()</code> – Outputs to browser console",
                "<code>document.write()</code> – Writes to HTML document"
              ]
            },
            {
              type: "code",
              value: `console.log("Hello Console");
document.write("Hello Page");
alert("Hello Alert");`
            }
          ]
        },
        {
          heading: "3. Variables in JavaScript",
          content: [
            { type: "text", value: "Variables store data values. Use let, const, or var." },
            {
              type: "code",
              value: `let name = "John";
const PI = 3.14;
var age = 25;`
            }
          ]
        },
        {
          heading: "4. Data Types",
          content: [
            {
              type: "list",
              items: ["String", "Number", "Boolean", "Undefined", "Null", "Object"]
            },
            {
              type: "code",
              value: `let str = "Hello";
let num = 100;
let isTrue = true;
let x;
let y = null;`
            }
          ]
        },
        {
          heading: "5. Basic Syntax",
          content: [
            { type: "text", value: "JavaScript statements end with semicolons and are case-sensitive. Use curly braces {} to group blocks of code." },
            {
              type: "code",
              value: `if (age >= 18) {
  console.log("Adult");
}`
            }
          ]
        }
      ],
      conclusion: "JavaScript is the foundation of client-side web programming. Mastering its basics is essential to building interactive web pages."
    },

    // ================= TOPIC 2: JAVASCRIPT OPERATORS =================
    {
      id: "operators", // URL: /course/javascript/operators
      title: "JavaScript Operators",
      intro: "Operators are symbols that perform operations on operands (variables and values). JavaScript includes many types of operators.",
      sections: [
        {
          heading: "1. Arithmetic Operators",
          content: [
            {
              type: "list-html",
              items: [
                "<code>+</code> (Addition)",
                "<code>-</code> (Subtraction)",
                "<code>*</code> (Multiplication)",
                "<code>/</code> (Division)",
                "<code>%</code> (Modulus)",
                "<code>**</code> (Exponentiation)",
                "<code>++</code> (Increment)",
                "<code>--</code> (Decrement)"
              ]
            },
            {
              type: "code",
              value: `let a = 10, b = 3;
console.log(a + b);  // 13
console.log(a % b);  // 1`
            }
          ]
        },
        {
          heading: "2. Assignment Operators",
          content: [
            {
              type: "list-html",
              items: [
                "<code>=</code>", "<code>+=</code>", "<code>-=</code>", "<code>*=</code>", "<code>/=</code>", "<code>%=</code>"
              ]
            },
            {
              type: "code",
              value: `let x = 5;
x += 2;  // same as x = x + 2 → x = 7`
            }
          ]
        },
        {
          heading: "3. Comparison Operators",
          content: [
            {
              type: "list-html",
              items: [
                "<code>==</code> (Equal to)",
                "<code>===</code> (Equal value and type)",
                "<code>!=</code> (Not equal)",
                "<code>!==</code> (Not equal value or type)",
                "<code>&gt;</code> (Greater than)",
                "<code>&lt;</code> (Less than)",
                "<code>&gt;=</code> (Greater than or equal to)",
                "<code>&lt;=</code> (Less than or equal to)"
              ]
            },
            {
              type: "code",
              value: `console.log(5 == "5");    // true
console.log(5 === "5");   // false`
            }
          ]
        },
        {
          heading: "4. Logical Operators",
          content: [
            {
              type: "list-html",
              items: [
                "<code>&&</code> (Logical AND)",
                "<code>||</code> (Logical OR)",
                "<code>!</code> (Logical NOT)"
              ]
            },
            {
              type: "code",
              value: `let age = 20;
console.log(age > 18 && age < 25);  // true`
            }
          ]
        },
        {
          heading: "5. String Operators",
          content: [
            { type: "text", value: "The + operator can also be used to concatenate (combine) strings." },
            {
              type: "code",
              value: `let firstName = "John";
let lastName = "Doe";
console.log(firstName + " " + lastName);  // "John Doe"`
            }
          ]
        },
        {
          heading: "6. Type Operators",
          content: [
            {
              type: "list-html",
              items: [
                "<code>typeof</code> – Returns the type of a variable",
                "<code>instanceof</code> – Returns true if an object is an instance of a specific class"
              ]
            },
            {
              type: "code",
              value: `console.log(typeof 123);         // "number"
console.log([] instanceof Array); // true`
            }
          ]
        }
      ],
      conclusion: "JavaScript operators are essential for performing calculations, comparisons, logic, and more. Mastering them is key to building dynamic applications."
    },

    // ================= TOPIC 3: VARIABLES & DATA TYPES =================
    {
      id: "variables-datatypes", // URL: /course/javascript/variables-datatypes
      title: "JS Variables & Data Types",
      intro: "Variables are containers for storing data values, and data types specify what kind of data can be stored.",
      sections: [
        {
          heading: "1. Variables in JavaScript",
          content: [
            { type: "text", value: "Variables are containers for storing data values. JavaScript provides three keywords to declare variables:" },
            {
              type: "list-html",
              items: [
                "<code>var</code> – function-scoped (older, avoid using)",
                "<code>let</code> – block-scoped, can be updated",
                "<code>const</code> – block-scoped, cannot be updated"
              ]
            },
            {
              type: "code",
              value: `var name = "John";
let age = 25;
const country = "India";`
            }
          ]
        },
        {
          heading: "2. Rules for Naming Variables",
          content: [
            {
              type: "list-html",
              items: [
                "Names must begin with a letter, underscore (_), or dollar sign ($).",
                "They are case-sensitive (e.g., <code>age</code> and <code>Age</code> are different).",
                "Cannot use reserved JavaScript keywords as names."
              ]
            }
          ]
        },
        {
          heading: "3. Primitive Data Types",
          content: [
            {
              type: "list-html",
              items: [
                "<code>String</code>: Textual data → <code>'Hello'</code>",
                "<code>Number</code>: Integer or float → <code>100, 3.14</code>",
                "<code>Boolean</code>: True or false → <code>true</code>",
                "<code>Undefined</code>: Variable declared but not assigned a value",
                "<code>Null</code>: Intentionally empty value",
                "<code>BigInt</code>: Large integers",
                "<code>Symbol</code>: Unique identifiers"
              ]
            },
            {
              type: "code",
              value: `let name = "Alice"; // String
let age = 30;        // Number
let isStudent = true; // Boolean
let x;               // Undefined
let y = null;        // Null`
            }
          ]
        },
        {
          heading: "4. Non-Primitive Data Types",
          content: [
            {
              type: "list-html",
              items: [
                "<code>Object</code>: Key-value pairs",
                "<code>Array</code>: Ordered collection",
                "<code>Function</code>: Reusable block of code"
              ]
            },
            {
              type: "code",
              value: `let person = { name: "John", age: 30 };
let numbers = [1, 2, 3, 4];
function greet() {
  console.log("Hello!");
}`
            }
          ]
        }
      ],
      conclusion: "Variables are fundamental in JavaScript and data types help define the kind of values we work with. Understanding both is essential to begin programming in JavaScript."
    }
  ]
};
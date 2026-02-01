export const cssData = {
  subjectTitle: "CSS",
  subjectCode: "css", // URL: /course/css
  topics: [
    // ================= TOPIC 1: CSS INTRODUCTION =================
    {
      id: "intro", // URL: /course/css/intro
      title: "CSS Introduction",
      intro: "CSS (Cascading Style Sheets) is used to style and layout web pages. It allows you to control the look and feel of HTML elements, including colors, fonts, spacing, positioning, and more.",
      sections: [
        {
          heading: "1. Why Use CSS?",
          content: [
            {
              type: "list",
              items: [
                "Improves the appearance of web content",
                "Makes design consistent across pages",
                "Separates structure (HTML) from style (CSS)",
                "Speeds up page loading and easier maintenance"
              ]
            }
          ]
        },
        {
          heading: "2. Types of CSS",
          content: [
            {
              type: "list-html", // Bold tags ke liye html list
              items: [
                "<strong>Inline CSS:</strong> Applied directly inside HTML tags using the <code>style</code> attribute",
                "<strong>Internal CSS:</strong> Defined in the <code>&lt;style&gt;</code> tag inside the HTML <code>&lt;head&gt;</code>",
                "<strong>External CSS:</strong> Linked through an external file using the <code>&lt;link&gt;</code> tag"
              ]
            },
            {
              type: "code",
              value: `<link rel="stylesheet" href="styles.css" />`
            }
          ]
        },
        {
          heading: "3. CSS Syntax",
          content: [
            {
              type: "code",
              value: `selector {
  property: value;
}`
            },
            { type: "text", value: "Example:" },
            {
              type: "code",
              value: `p {
  color: blue;
  font-size: 16px;
}`
            }
          ]
        }
      ],
      conclusion: "CSS is an essential tool for web development, enabling developers to create visually appealing and responsive websites by separating design from structure."
    },

    // ================= TOPIC 2: CSS SYNTAX =================
    {
      id: "syntax", // URL: /course/css/syntax
      title: "CSS Syntax",
      intro: "CSS syntax is the set of rules that dictate how CSS styles are written. It consists of selectors, properties, and values.",
      sections: [
        {
          heading: "1. CSS Rule Set",
          content: [
            { type: "text", value: "A CSS rule set consists of a selector, which defines which HTML element to apply styles to, and a declaration block, which contains one or more declarations." },
            ,
            {
              type: "code",
              value: `selector {
  property: value;
}`
            }
          ]
        },
        {
          heading: "2. Selectors",
          content: [
            { type: "text", value: "The selector targets the HTML element to apply styles. Common selectors include:" },
            {
              type: "list-html",
              items: [
                "<strong>Element Selector:</strong> Targets all elements of a specific type. Example: <code>p {}</code>",
                "<strong>Class Selector:</strong> Targets elements with a specific class. Example: <code>.class-name {}</code>",
                "<strong>ID Selector:</strong> Targets an element with a specific ID. Example: <code>#id-name {}</code>",
                "<strong>Universal Selector:</strong> Targets all elements. Example: <code>* {}</code>"
              ]
            }
          ]
        },
        {
          heading: "3. Properties and Values",
          content: [
            { type: "text", value: "CSS properties define the characteristics of an element (e.g., color, font-size), and values define the settings for each property." },
            {
              type: "code",
              value: `p {
  color: red;
  font-size: 18px;
}`
            },
            { type: "text", value: "In the example above, color is the property, and red is the value. Similarly, font-size is a property, and 18px is its value." }
          ]
        },
        {
          heading: "4. Multiple Declarations",
          content: [
            { type: "text", value: "You can write multiple declarations within a single rule set, each separated by a semicolon." },
            {
              type: "code",
              value: `p {
  color: blue;
  font-size: 16px;
  text-align: center;
}`
            }
          ]
        }
      ],
      conclusion: "CSS syntax is fundamental for web styling. By mastering the structure of selectors, properties, and values, you can effectively apply and manage styles across a web page."
    },

    // ================= TOPIC 3: CSS SELECTORS =================
    {
      id: "selectors", // URL: /course/css/selectors
      title: "CSS Selectors",
      intro: "CSS selectors are used to select the HTML elements you want to style. They can be simple or complex, depending on how specific you need to be when targeting elements.",
      sections: [
        {
          heading: "1. Types of CSS Selectors",
          content: [
            // Using 'block' type for boxed content styling
            {
              type: "block",
              subheading: "1.1 Universal Selector",
              text: "The universal selector (*) targets all elements in the document.",
              code: `* {
  color: blue;
}`
            },
            {
              type: "block",
              subheading: "1.2 Type Selector (Element Selector)",
              text: "The type selector (e.g., p, h1) targets elements by their tag name.",
              code: `p {
  color: red;
}`
            },
            {
              type: "block",
              subheading: "1.3 Class Selector",
              text: "The class selector (.class-name) targets elements with a specific class attribute.",
              code: `.highlight {
  background-color: yellow;
}`
            },
            {
              type: "block",
              subheading: "1.4 ID Selector",
              text: "The ID selector (#id-name) targets an element with a specific ID attribute. IDs must be unique within a page.",
              code: `#main {
  font-size: 20px;
}`
            },
            {
              type: "block",
              subheading: "1.5 Attribute Selector",
              text: "The attribute selector targets elements based on their attributes and values.",
              code: `a[href="https://example.com"] {
  color: green;
}`
            },
            {
              type: "block",
              subheading: "1.6 Descendant Selector",
              text: "The descendant selector targets elements that are inside another element.",
              code: `div p {
  color: blue;
}`
            },
            {
              type: "block",
              subheading: "1.7 Child Selector",
              text: "The child selector (>) selects direct child elements of a specific parent element.",
              code: `ul > li {
  list-style-type: square;
}`
            },
            {
              type: "block",
              subheading: "1.8 Pseudo-classes",
              text: "Pseudo-classes target elements in specific states, like when a link is hovered over.",
              code: `a:hover {
  color: red;
}`
            },
            {
              type: "block",
              subheading: "1.9 Pseudo-elements",
              text: "Pseudo-elements are used to style parts of an element, such as its first letter or first line.",
              code: `p::first-letter {
  font-size: 2em;
}`
            }
          ]
        }
      ],
      conclusion: "CSS selectors are powerful tools that enable you to target and style elements in a flexible and efficient manner. By combining different types of selectors, you can create complex and responsive web designs."
    }
  ]
};
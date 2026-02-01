export const htmlData = {
  subjectTitle: "HTML",
  subjectCode: "html",
  topics: [
    // ================= TOPIC 1: HTML INTRODUCTION =================
    {
      id: "intro", // URL: /course/html/intro
      title: "HTML Introduction",
      intro: "HTML (HyperText Markup Language) is the standard markup language used to create web pages. It describes the structure of web content using elements represented by tags.",
      sections: [
        {
          heading: "1. What is HTML?",
          content: [
            { type: "text", value: "HTML stands for HyperText Markup Language. It is used to structure content on the web such as text, images, videos, forms, and links." },
            { type: "text", value: "HTML is not a programming language; it's a markup language used to define the structure of web pages." }
          ]
        },
        {
          heading: "2. Basic Structure of an HTML Document",
          content: [
            {
              type: "code",
              value: `<!DOCTYPE html>
<html>
  <head>
    <title>My First Web Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is a paragraph.</p>
  </body>
</html>`
            }
          ]
        },
        {
          heading: "3. Key Features of HTML",
          content: [
            {
              type: "list",
              items: [
                "HTML uses tags to define elements.",
                "Tags usually come in pairs: an opening tag and a closing tag.",
                "HTML is interpreted by web browsers.",
                "It supports embedding of images, audio, video, and scripts."
              ]
            }
          ]
        },
        {
          heading: "4. Commonly Used Tags",
          content: [
            {
              type: "code",
              value: `<h1> to <h6>  // Headings
<p>             // Paragraph
<a>             // Anchor/Link
<img>           // Image
<div>           // Container
<span>          // Inline Container`
            }
          ]
        }
      ],
      conclusion: "HTML is the foundation of every website. Understanding HTML is the first step toward web development, enabling you to create structured and meaningful web content."
    },

    // ================= TOPIC 2: HTML BASICS =================
    {
      id: "basics", // URL: /course/html/basics
      title: "HTML Basics",
      intro: "HTML is the backbone of all web pages. It uses a system of tags and elements to structure content for the web.",
      sections: [
        {
          heading: "1. HTML Tags",
          content: [
            { type: "text", value: "HTML uses tags enclosed in angle brackets (e.g., <p>) to define elements. Most tags have opening and closing versions." },
            {
              type: "code",
              value: `<p>This is a paragraph.</p>`
            }
          ]
        },
        {
          heading: "2. HTML Elements",
          content: [
            { type: "text", value: "An HTML element includes the start tag, content, and end tag." },
            {
              type: "code",
              value: `<h1>Hello World</h1>`
            }
          ]
        },
        {
          heading: "3. Nesting of Elements",
          content: [
            { type: "text", value: "HTML elements can be nested inside one another." },
            {
              type: "code",
              value: `<div>
  <h2>Title</h2>
  <p>Description goes here.</p>
</div>`
            }
          ]
        },
        {
          heading: "4. Empty Elements",
          content: [
            { type: "text", value: "Some HTML elements do not have closing tags and are self-closing." },
            {
              type: "code",
              value: `<br />  // Line break
<img src="image.jpg" alt="Image" />`
            }
          ]
        }
      ],
      conclusion: "Understanding the basics of HTML is essential to building web pages. It all begins with learning how to use tags, elements, and nesting properly."
    },

    // ================= TOPIC 3: HTML EDITORS =================
    {
      id: "editors", // URL: /course/html/editors
      title: "HTML Editors",
      intro: "HTML editors are tools used to write and edit HTML code. They range from simple text editors to full-featured Integrated Development Environments (IDEs).",
      sections: [
        {
          heading: "1. Basic Text Editors",
          content: [
            { type: "text", value: "You can write HTML using basic editors like:" },
            {
              type: "list",
              items: ["Notepad (Windows)", "TextEdit (Mac)"]
            },
            { type: "text", value: "Save the file with a .html extension and open it in a browser to view the result." }
          ]
        },
        {
          heading: "2. Popular HTML Code Editors",
          content: [
            { type: "text", value: "These editors provide syntax highlighting, code suggestions, and file management features:" },
            {
              type: "list",
              items: [
                "Visual Studio Code (VS Code)",
                "Sublime Text",
                "Atom",
                "Brackets",
                "Notepad++"
              ]
            }
          ]
        },
        {
          heading: "3. Online HTML Editors",
          content: [
            { type: "text", value: "These allow you to write, preview, and share HTML code directly in your browser:" },
            {
              type: "list-html", // HTML List taaki Links (<a>) kaam karein
              items: [
                "CodePen (<a href='https://codepen.io' target='_blank'>codepen.io</a>)",
                "JSFiddle (<a href='https://jsfiddle.net' target='_blank'>jsfiddle.net</a>)",
                "W3Schools Tryit Editor (<a href='https://www.w3schools.com/html/tryit.asp' target='_blank'>w3schools.com</a>)"
              ]
            }
          ]
        }
      ],
      conclusion: "Choosing the right HTML editor can greatly improve productivity and ease of development. Beginners can start with simple editors and transition to advanced ones as they gain experience."
    }
  ]
}; 
// HTML Introduction
// HTML Basic Structure
// HTML Elements & Tags
// HTML Attributes
// HTML Headings
// HTML Paragraphs
// HTML Text Formatting
// HTML Comments
// HTML Colors
// HTML Links
// HTML Images
// HTML Tables
// HTML Lists
// HTML Block and Inline
// HTML Div and Span
// HTML Semantic Elements
// HTML Forms
// HTML Form Attributes
// HTML Input Types
// HTML Input Attributes
// HTML Media Audio and Video
// HTML Iframes
// HTML Head and Meta
// HTML Layout
// HTML Responsive Web Design
// HTML Canvas and SVG
// HTML Accessibility
// HTML Web Storage
// HTML Geolocation

export const htmlData = {
  subjectTitle: "HTML",
  subjectCode: "html",
  topics: [
  // ================= TOPIC 0: HTML INTRODUCTION =================
  {
    id: "html-introduction",
    title: "HTML Introduction",
    subjectCode: "html",
    intro:
      "HTML (HyperText Markup Language) is the universally recognized standard markup language that forms the backbone of the World Wide Web. Conceived by Tim Berners-Lee in 1991 at CERN, HTML provides the essential semantic structure for web documents. It informs web browsers how to render text hierarchies, embed rich multimedia streams, organize complex tabular data, capture user input through forms, and link billions of disparate documents together across global networks.",
    sections: [
      {
        heading: "What is HTML & How Does the Web Use It?",
        content: [
          {
            type: "text",
            value:
              "HTML is not a programming language; it is a declarative markup language that relies on a structured hierarchy of tags to classify and contextualize digital content. When you navigate to a URL, your browser requests plain-text HTML files from a web server, interprets the nested tag tree, and constructs the <strong>Document Object Model (DOM)</strong> to present visual interfaces.",
          },
          {
            type: "list",
            items: [
              " HyperText: Clickable hyperlinks that connect independent web pages, allowing non-linear navigation across the Internet.",
              " Markup Language: A standardized syntax of bracketed tags (<tagname>) that annotate raw text for visual display and semantic meaning.",
              " Platform-Independent Architecture: Renders natively across any operating system (Windows, macOS, Linux, Android, iOS) and all modern browsers without requiring local software runtimes.",
              " Core Component of Frontend Architecture: HTML defines structure; CSS applies typography, layout, and colors; JavaScript adds dynamic reactivity and business logic.",
              " SEO & Web Indexing: Search engine crawlers (like Googlebot) read semantic HTML to parse, catalog, and rank your content on Search Engine Results Pages (SERPs).",
            ],
          },
        ],
      },
      {
        heading: "Basic Structure of an HTML5 Document",
        content: [
          {
            type: "text",
            value:
              "Every standard HTML5 web page follows a strict skeleton that dictates document handling, character encodings, viewport sizing, and visible content containers.",
          },
          {
            type: "list",
            items: [
              " <!DOCTYPE html>: The document type declaration that forces modern browser rendering engines to operate in full HTML5 standards mode.",
              " <html lang='en'>: The root parent container for all code; the lang attribute specifies language for screen readers and search crawlers.",
              " <head>: The non-rendering configuration block containing essential metadata, title tags, responsive viewport definitions, and resource links.",
              " <meta charset='UTF-8'>: Standard character encoding that ensures correct rendering of international characters and symbols without mojibake errors.",
              " <meta name='viewport' content='width=device-width, initial-scale=1.0'>: Essential responsive directive that aligns document width with real device screen width.",
              " <body>: The visible viewport container housing all text, layout divisions, graphics, interactive widgets, and links.",
            ],
          },
          {
            type: "text",
            value: "<strong>Syntax / Skeleton:</strong>",
          },
          {
            type: "code",
            value: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document Title</title>
</head>
<body>
  <!-- Visible web page content goes here -->
</body>
</html>`,
          },
          {
            type: "text",
            value: "<strong>Runnable Example:</strong>",
          },
          {
            type: "code",
            value: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My First HTML Page</title>
</head>
<body>

  <h1>Welcome to the Modern Web</h1>
  <p>This is a foundational paragraph rendered through native semantic markup.</p>
  <p>HTML provides the structure that CSS and JavaScript bring to life.</p>

</body>
</html>`,
          },
          {
            type: "text",
            value: "<strong>Output:</strong>",
          },
          {
            type: "text",
            value: `<div style="font-family: sans-serif; background: #ffffff; padding: 20px; border: 1px solid #cbd5e1; border-radius: 8px; box-sizing: border-box;">
  <h1 style="margin: 0 0 10px 0; font-size: 24px; color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">Welcome to the Modern Web</h1>
  <p style="margin: 0 0 8px 0; font-size: 15px; color: #334155; line-height: 1.6;">This is a foundational paragraph rendered through native semantic markup.</p>
  <p style="margin: 0; font-size: 15px; color: #334155; line-height: 1.6;">HTML provides the structure that CSS and JavaScript bring to life.</p>
</div>`,
          },
        ],
      },
      {
        heading: "HTML Tags vs. HTML Elements",
        content: [
          {
            type: "text",
            value:
              "Although the terms 'tag' and 'element' are frequently used interchangeably in casual developer discourse, they have specific technical meanings in DOM specifications.",
          },
          {
            type: "list",
            items: [
              " Opening Tag (<tagname>): Signals where an element begins in the DOM tree.",
              " Closing Tag (</tagname>): Signals element termination, marked by a forward slash prefix.",
              " HTML Element: The complete structural unit composed of the opening tag, inner text or child nodes, and the closing tag.",
              " Void / Self-Closing Elements: Tags that do not wrap content and require no closing tag (e.g., <br>, <hr>, <img>, <input>, <meta>).",
            ],
          },
          {
            type: "text",
            value: "<strong>Syntax Comparison:</strong>",
          },
          {
            type: "code",
            value: `<!-- Standard Element -->
<tagname>Content goes here...</tagname>

<!-- Void (Empty) Element -->
<input type="text">`,
          },
          {
            type: "text",
            value: "<strong>Runnable Example: Nested Elements & Void Breaks:</strong>",
          },
          {
            type: "code",
            value: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Elements Demo</title>
</head>
<body>

  <article>
    <h2>Semantic Formatting & Elements</h2>
    <p>This line demonstrates an element holding <strong>bold text</strong> and <em>emphasized text</em>.</p>
    <hr>
    <p>First line of text<br>Second line of text after a void break tag</p>
  </article>

</body>
</html>`,
          },
          {
            type: "text",
            value: "<strong>Output:</strong>",
          },
          {
            type: "text",
            value: `<div style="font-family: sans-serif; background: #ffffff; padding: 20px; border: 1px solid #cbd5e1; border-radius: 8px; box-sizing: border-box;">
  <h2 style="margin: 0 0 10px 0; font-size: 20px; color: #0f172a;">Semantic Formatting & Elements</h2>
  <p style="margin: 0 0 12px 0; font-size: 14px; color: #475569; line-height: 1.6;">This line demonstrates an element holding <strong style="color: #0f172a;">bold text</strong> and <em style="color: #0284c7;">emphasized text</em>.</p>
  <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 12px 0;">
  <p style="margin: 0; font-size: 14px; color: #475569; line-height: 1.6;">First line of text<br>Second line of text after a void break tag</p>
</div>`,
          },
        ],
      },
      {
        heading: "Core Features & Best Practices for SEO and Accessibility",
        content: [
          {
            type: "list",
            items: [
              " Meaning Over Appearance: Use tags for semantic purpose rather than styling defaults (e.g., use <h1> for the primary topic of the document, not just to enlarge text size).",
              " Descriptive Metadata: Keep unique, keyword-optimized <title> and <meta name='description'> values on every page to boost search engine indexing and click-through rates.",
              " Strict Lowercase Syntax: Always write tag and attribute names in lowercase (use <p>, not <P>) to conform to industry standards and modern build tooling.",
              " Accessibility (a11y) Baseline: Screen readers rely directly on correct document structure to translate visual layouts into synthesized speech and refreshable braille displays.",
            ],
          },
        ],
      },
    ],
    conclusion:
      "HTML forms the structural foundation of every website on the Internet. Mastering semantic HTML tags, document hierarchy, and nesting rules is mandatory before layering visual styles with CSS or writing logic with JavaScript.",
  },
// ================= TOPIC 1: HTML BASIC STRUCTURE =================
  {
    id: "html-basic-structure",
    title: "HTML Basic Structure",
    subjectCode: "html",
    intro:
      "Every modern web page conforms to a standardized architectural blueprint known as the HTML boilerplate. This structural skeleton instructs the browser engine on how to parse the file, configures character encoding and device viewport constraints, and establishes a strict separation between machine-readable backstage metadata and user-facing viewport content.",
    sections: [
      {
        heading: "The Essential HTML5 Boilerplate",
        content: [
          {
            type: "text",
            value:
              "An HTML document is constructed as a nested hierarchical tree. At the very top sits the document type declaration, followed by the root element containing two mandatory operational branches: the <code>&lt;head&gt;</code> (metadata hub) and the <code>&lt;body&gt;</code> (visual interface).",
          },
          {
            type: "list",
            items: [
              " <!DOCTYPE html>: The document type declaration that forces browser rendering engines to operate in modern HTML5 standards mode, preventing legacy quirks mode.",
              " <html lang='en'>: The root parent element wrapping all document code. The lang attribute defines content language for search engine crawlers and screen readers.",
              " <head>: Contains document configuration, character sets, title tags, scripts, and stylesheet links not displayed directly on the screen.",
              " <body>: Houses all user-facing content including headings, paragraphs, images, videos, tables, and buttons.",
            ],
          },
          {
            type: "text",
            value: "<strong>Syntax / Boilerplate Template:</strong>",
          },
          {
            type: "code",
            value: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document Title</title>
</head>
<body>
  <h1>Main Heading</h1>
  <p>Your user-facing content goes here.</p>
</body>
</html>`,
          },
        ],
      },
      {
        heading: "Inside the <head> Configuration Hub",
        content: [
          {
            type: "text",
            value:
              "The <code>&lt;head&gt;</code> element acts as the configuration hub for your page. Browsers, social graph parsers, and search engine crawlers parse this information before processing visible elements.",
          },
          {
            type: "list",
            items: [
              " <meta charset='UTF-8'>: Declares the universal character encoding so symbols, emojis, and non-Latin alphabets render cleanly without mojibake errors.",
              " <meta name='viewport' content='width=device-width, initial-scale=1.0'>: Essential responsive instruction that forces screen width to match real device pixels.",
              " <title>: Defines the label displayed on the browser tab, in search engine result pages (SERPs), and inside user bookmarks.",
              " <link rel='stylesheet' href='style.css'>: Connects external CSS files to keep styling decoupled from structural markup.",
            ],
          },
        ],
      },
      {
        heading: "Inside the <body> Viewport Hub",
        content: [
          {
            type: "text",
            value:
              "Everything placed inside the <code>&lt;body&gt;</code> tag renders directly onto the browser canvas. Contemporary architectures divide the body into semantic structural sections.",
          },
          {
            type: "text",
            value: "<strong>Runnable Example:</strong>",
          },
          {
            type: "code",
            value: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Basic Structure Demo</title>
</head>
<body>

  <header>
    <h1>Modern Web Architecture</h1>
  </header>
  
  <main>
    <p>This paragraph lives directly inside the user-facing body element.</p>
    <p>Metadata in the head runs silently in the background.</p>
  </main>

  <footer>
    <small>&copy; 2026 Web Engineering Inc.</small>
  </footer>

</body>
</html>`,
          },
          {
            type: "text",
            value: "<strong>Output:</strong>",
          },
          {
            type: "text",
            value: `<div style="font-family: sans-serif; background: #ffffff; padding: 20px; border: 1px solid #cbd5e1; border-radius: 8px; box-sizing: border-box;">
  <header style="border-bottom: 2px solid #0284c7; padding-bottom: 8px; margin-bottom: 12px;">
    <h1 style="margin: 0; font-size: 22px; color: #0f172a;">Modern Web Architecture</h1>
  </header>
  <main>
    <p style="margin: 0 0 8px 0; font-size: 14px; color: #334155; line-height: 1.5;">This paragraph lives directly inside the user-facing body element.</p>
    <p style="margin: 0 0 12px 0; font-size: 14px; color: #334155; line-height: 1.5;">Metadata in the head runs silently in the background.</p>
  </main>
  <footer style="border-top: 1px solid #e2e8f0; padding-top: 8px;">
    <small style="color: #64748b; font-size: 12px;">&copy; 2026 Web Engineering Inc.</small>
  </footer>
</div>`,
          },
        ],
      },
      {
        heading: "Critical Structural Rules & Boilerplate Mistakes",
        content: [
          {
            type: "list",
            items: [
              " Single Root Rule: There can only ever be one <html> element wrapping everything below the doctype.",
              " Strict Separation: Never place visual tags (e.g., <h1>, <p>, <div>) inside the <head>. Doing so breaks the DOM tree.",
              " Do Not Omit the DOCTYPE: Omitting <!DOCTYPE html> sends browsers into legacy quirks mode, causing erratic CSS rendering.",
            ],
          },
        ],
      },
    ],
    conclusion:
      "Mastering the basic HTML skeleton is the first requirement before authoring content. The doctype, html, head, and body tags establish the clean boundary between machine-readable metadata and user-facing structure.",
  },

  // ================= TOPIC 2: HTML ELEMENTS & TAGS =================
  {
    id: "html-elements-tags",
    title: "HTML Elements & Tags",
    subjectCode: "html",
    intro:
      "HTML elements are the fundamental modular building blocks used to construct web pages. While developers frequently use 'tag' and 'element' interchangeably, an element technically comprises the opening tag, optional attributes, nested inner content, and the closing tag. Understanding container tags versus void tags and proper nesting hierarchies is vital to authoring well-formed markup.",
    sections: [
      {
        heading: "Tags vs. Elements: The Technical Distinction",
        content: [
          {
            type: "text",
            value:
              "A <strong>tag</strong> refers strictly to the bracketed syntax delimiter (e.g., <code>&lt;p&gt;</code> or <code>&lt;/p&gt;</code>). An <strong>element</strong> represents the entire functional node from opening tag through closing tag, including all enclosed content.",
          },
          {
            type: "list",
            items: [
              " Opening Tag (<tagname>): Signals where an element begins inside the DOM hierarchy.",
              " Content: The text string, embedded media asset, or nested child elements living inside.",
              " Closing Tag (</tagname>): Signals where the element terminates, marked by a forward slash prefix.",
              " HTML Element: The comprehensive whole (e.g., <p>Learn HTML</p> is the complete element).",
            ],
          },
          {
            type: "text",
            value: "<strong>Syntax Anatomy:</strong>",
          },
          {
            type: "code",
            value: `<tagname attribute="value">Inner Content</tagname>`,
          },
        ],
      },
      {
        heading: "Container Elements vs. Void (Empty) Elements",
        content: [
          {
            type: "text",
            value:
              "HTML elements fall into two distinct anatomical classifications based on whether they encapsulate content:",
          },
          {
            type: "list",
            items: [
              " Container Elements: Elements that wrap text, media, or other tags and must have an explicit closing tag (e.g., <div>, <h1>, <p>, <ul>).",
              " Void / Empty Elements: Elements that cannot contain text or child nodes. They insert an asset, trigger a break, or declare metadata, and do not use a closing tag (e.g., <br>, <hr>, <img>, <input>, <meta>, <link>).",
            ],
          },
        ],
      },
      {
        heading: "Runnable Example: Nested Elements & Void Dividers",
        content: [
          {
            type: "text",
            value:
              "The following example demonstrates proper element nesting alongside void elements like <code>&lt;hr&gt;</code> (horizontal rule) and <code>&lt;br&gt;</code> (line break).",
          },
          {
            type: "text",
            value: "<strong>Code:</strong>",
          },
          {
            type: "code",
            value: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Elements Demo</title>
</head>
<body>

  <article>
    <h2>Semantic Formatting Hierarchy</h2>
    <p>
      An element can contain nested elements, such as <strong>bold keywords</strong> 
      and <em>emphasized descriptions</em>.
    </p>
    
    <hr>
    
    <p>
      Engineering HQ, Block C<br>
      New Delhi, India
    </p>
  </article>

</body>
</html>`,
          },
          {
            type: "text",
            value: "<strong>Output:</strong>",
          },
          {
            type: "text",
            value: `<div style="font-family: sans-serif; background: #ffffff; padding: 20px; border: 1px solid #cbd5e1; border-radius: 8px; box-sizing: border-box;">
  <h2 style="margin: 0 0 8px 0; font-size: 20px; color: #0f172a;">Semantic Formatting Hierarchy</h2>
  <p style="margin: 0 0 12px 0; font-size: 14px; color: #334155; line-height: 1.6;">
    An element can contain nested elements, such as <strong style="color: #0f172a;">bold keywords</strong> 
    and <em style="color: #0284c7;">emphasized descriptions</em>.
  </p>
  <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 12px 0;">
  <p style="margin: 0; font-size: 14px; color: #334155; line-height: 1.6;">
    Engineering HQ, Block C<br>
    New Delhi, India
  </p>
</div>`,
          },
        ],
      },
      {
        heading: "The Strict First-In, Last-Out (FILO) Nesting Rule",
        content: [
          {
            type: "text",
            value:
              "Elements must be closed in the exact reverse order of how they were opened. Overlapping closing tags breaks the DOM tree and causes unpredictable CSS inheritance errors.",
          },
          {
            type: "list",
            items: [
              " Correct (FILO): <p>This is <strong>properly nested</strong>.</p>",
              " Incorrect (Overlapping): <p>This is <strong>improperly closed.</p></strong>",
              " Lowercase Convention: Always write tags in lowercase (<p>, not <P>) to conform to modern W3C/WHATWG industry standards.",
            ],
          },
        ],
      },
    ],
    conclusion:
      "Understanding the anatomy of HTML tags, the distinction between content elements and void tags, and the rules of clean nesting ensures documents are well-formed, accessible, and reliably rendered by modern web browsers.",
  },

  // ================= TOPIC 3: HTML ATTRIBUTES =================
  {
    id: "html-attributes",
    title: "HTML Attributes",
    subjectCode: "html",
    intro:
      "HTML attributes provide supplementary configuration parameters, identity markers, and behavioral rules for HTML elements. Located exclusively inside opening tags, attributes control properties like unique element identification, styling hooks, hyperlink navigation destinations, and accessibility metadata.",
    sections: [
      {
        heading: "What are HTML Attributes?",
        content: [
          {
            type: "text",
            value:
              "Attributes modify the default behavior or appearance of an element. They are always specified in the opening tag and never in the closing tag. Most attributes consist of a name and a value separated by an equals sign.",
          },
          {
            type: "list",
            items: [
              " Attribute Name: Specifies the setting or property you want to configure (e.g., href, src, id, class).",
              " Attribute Value: Specifies the assignment, enclosed within quotes (e.g., 'https://example.com').",
              " Space Delimitation: Elements can receive multiple attributes separated by standard spaces.",
              " Case Sensitivity: Attribute names are case-insensitive, but lowercase is universal convention.",
            ],
          },
          {
            type: "text",
            value: "<strong>Syntax:</strong>",
          },
          {
            type: "code",
            value: `<tagname attribute_name="attribute_value">Content</tagname>`,
          },
        ],
      },
      {
        heading: "Core Resource & Navigation Attributes",
        content: [
          {
            type: "text",
            value:
              "Specific elements rely on dedicated attributes to resolve network paths and external hyperlinks:",
          },
          {
            type: "list",
            items: [
              " href: Specifies the target URL destination for <a> hyperlink anchor tags.",
              " src: Defines the asset path for embedded media like <img>, <script>, and <iframe>.",
              " alt: Provides alternative text for images when they fail to load, crucial for screen readers and SEO.",
              " target: Controls where to open linked documents (e.g., target='_blank' launches a new tab).",
            ],
          },
        ],
      },
      {
        heading: "Global and Boolean Attributes",
        content: [
          {
            type: "text",
            value:
              "Global attributes can be applied to any valid HTML element, while boolean attributes toggle features purely by their presence:",
          },
          {
            type: "list",
            items: [
              " id (Global): Assigns a unique identifier across the entire document for CSS, JS DOM targeting, and anchor jumps.",
              " class (Global): Assigns one or more reusable classification labels for CSS styling rules.",
              " title (Global): Displays advisory hover tooltip text natively in desktop browsers.",
              " required, disabled, checked (Boolean): Require no explicit values; their presence activates the true state.",
            ],
          },
          {
            type: "text",
            value: "<strong>Runnable Example:</strong>",
          },
          {
            type: "code",
            value: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Attributes Demo</title>
</head>
<body>

  <!-- Link with href, target, and title attributes -->
  <p>
    <a href="https://www.w3.org" target="_blank" title="Official Web Standards Body">
      Visit Official W3C Website &rarr;
    </a>
  </p>

  <!-- Input with type, placeholder, and disabled (boolean) attributes -->
  <p>
    <input type="text" placeholder="Read-only field" disabled>
  </p>

</body>
</html>`,
          },
          {
            type: "text",
            value: "<strong>Output:</strong>",
          },
          {
            type: "text",
            value: `<div style="font-family: sans-serif; background: #ffffff; padding: 20px; border: 1px solid #cbd5e1; border-radius: 8px; box-sizing: border-box;">
  <p style="margin: 0 0 12px 0;">
    <a href="#" title="Official Web Standards Body" style="color: #0284c7; text-decoration: none; font-weight: 600; font-size: 14px;">
      Visit Official W3C Website &rarr;
    </a>
  </p>
  <p style="margin: 0;">
    <input type="text" placeholder="Read-only field" disabled style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 4px; font-size: 14px; background-color: #f1f5f9; color: #94a3b8; cursor: not-allowed; width: 200px;">
  </p>
</div>`,
          },
        ],
      },
      {
        heading: "Best Practices & Common Attribute Mistakes",
        content: [
          {
            type: "list",
            items: [
              " Always Quote Values: Omitting quotes around attribute values with spaces breaks HTML parsers.",
              " Unique ID Enforcement: Reusing the same id value on multiple elements is invalid HTML and breaks JavaScript querySelector behavior.",
              " Always Provide alt on Images: Empty alt='' is valid for decorative images, but omitting the alt attribute entirely violates accessibility standards.",
            ],
          },
        ],
      },
    ],
    conclusion:
      "HTML attributes empower static elements by adding identifiers, media sources, interaction flags, and metadata. Mastery over core, global, and boolean attributes is essential for styling with CSS, programming with JavaScript, and ensuring accessibility compliance.",
  },

 // ================= TOPIC 4: HTML HEADINGS =================
  {
    id: "html-headings",
    title: "HTML Headings",
    subjectCode: "html",
    intro:
      "HTML headings establish the semantic architecture, structural outline, and informational hierarchy of a webpage. Ranging from <h1> down to <h6>, headings indicate content importance, allow search engine crawlers to catalog document topics accurately, and enable assistive technologies like screen readers to navigate content blocks efficiently without linear reading friction.",
    sections: [
      {
        heading: "The Six Levels of Document Headings",
        content: [
          {
            type: "text",
            value:
              "HTML specifies six heading elements running in a descending scale of structural importance. <code>&lt;h1&gt;</code> denotes the top-tier document title, while <code>&lt;h6&gt;</code> represents the deepest, most localized sub-heading level.",
          },
          {
            type: "list",
            items: [
              " <h1>: The primary page topic or document headline. In modern SEO architecture, each page should feature exactly one <h1>.",
              " <h2>: Major section headings that divide the page into distinct thematic topics.",
              " <h3>: Sub-sections nested directly under a preceding <h2> heading.",
              " <h4>: Granular subdivisions under an <h3> heading.",
              " <h5>: Deep sub-sections reserved for dense, complex technical outlines.",
              " <h6>: The lowest structural heading tier in HTML specifications.",
            ],
          },
          {
            type: "text",
            value: "<strong>Syntax / Hierarchy Levels:</strong>",
          },
          {
            type: "code",
            value: `<h1>Primary Document Heading (H1)</h1>
<h2>Major Topic Section (H2)</h2>
<h3>Sub-topic Subsection (H3)</h3>
<h4>Detail Component (H4)</h4>
<h5>Minor Component (H5)</h5>
<h6>Footnote Component (H6)</h6>`,
          },
        ],
      },
      {
        heading: "Semantic Hierarchy vs. Visual Styling",
        content: [
          {
            type: "text",
            value:
              "Headings should represent the logical outline of your content rather than styling choices. Never select a heading tag simply to enlarge or bold text—use CSS font properties for presentation instead. Skipping heading tiers downwards (such as jumping directly from an <code>&lt;h1&gt;</code> to an <code>&lt;h3&gt;</code>) breaks the document outline for screen readers and search crawlers.",
          },
          {
            type: "text",
            value: "<strong>Runnable Example: Structured Content Outline:</strong>",
          },
          {
            type: "code",
            value: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Headings Structure</title>
</head>
<body>

  <h1>Frontend Engineering Guide</h1>
  
  <h2>HTML Essentials</h2>
  <p>Core structural markup and semantic standards.</p>
  
  <h3>Semantic Tagging</h3>
  <p>Using semantic elements improves indexing and accessibility.</p>
  
  <h2>CSS Fundamentals</h2>
  <p>Visual styling, cascading logic, and responsive layouts.</p>
  
  <h3>Layout Engines</h3>
  <p>Mastering Flexbox and CSS Grid systems.</p>

</body>
</html>`,
          },
          {
            type: "text",
            value: "<strong>Output:</strong>",
          },
          {
            type: "text",
            value: `<div style="font-family: sans-serif; background: #ffffff; padding: 20px; border: 1px solid #cbd5e1; border-radius: 8px; box-sizing: border-box;">
  <h1 style="margin: 0 0 10px 0; font-size: 24px; color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px;">Frontend Engineering Guide</h1>
  
  <h2 style="margin: 14px 0 6px 0; font-size: 19px; color: #0284c7;">HTML Essentials</h2>
  <p style="margin: 0 0 10px 0; font-size: 14px; color: #475569; line-height: 1.5;">Core structural markup and semantic standards.</p>
  
  <h3 style="margin: 10px 0 4px 0; font-size: 16px; color: #334155;">Semantic Tagging</h3>
  <p style="margin: 0 0 14px 0; font-size: 14px; color: #475569; line-height: 1.5;">Using semantic elements improves indexing and accessibility.</p>
  
  <h2 style="margin: 14px 0 6px 0; font-size: 19px; color: #0284c7;">CSS Fundamentals</h2>
  <p style="margin: 0 0 10px 0; font-size: 14px; color: #475569; line-height: 1.5;">Visual styling, cascading logic, and responsive layouts.</p>
  
  <h3 style="margin: 10px 0 4px 0; font-size: 16px; color: #334155;">Layout Engines</h3>
  <p style="margin: 0; font-size: 14px; color: #475569; line-height: 1.5;">Mastering Flexbox and CSS Grid systems.</p>
</div>`,
          },
        ],
      },
      {
        heading: "Accessibility, SEO Impact & Best Practices",
        content: [
          {
            type: "list",
            items: [
              " Single <h1> Standard: Confine each page to a single <h1> that succinctly describes the main subject. Multiple <h1> tags dilute keyword relevance on search engines.",
              " Strict Sequential Downward Nesting: Step down sequentially (H1 &rarr; H2 &rarr; H3). You can step up freely (e.g., from an H3 back up to an H2) when initiating a fresh major section.",
              " Screen Reader Tree Navigation: Visually impaired users rely on heading hotkeys (such as pressing 'H' in NVDA/JAWS) to jump across sections without reading every word.",
              " Keyword Weighting: Search engine algorithms prioritize terms placed within heading tags over body paragraphs when calculating query relevance.",
            ],
          },
        ],
      },
    ],
    conclusion:
      "HTML headings form the semantic backbone of any document. By maintaining a logical, sequential hierarchy from <h1> through <h6> and avoiding presentational abuse, web pages remain accessible, easily scannable, and optimized for search engine indexing.",
  },

  // ================= TOPIC 5: HTML PARAGRAPHS =================
  {
    id: "html-paragraphs",
    title: "HTML Paragraphs",
    subjectCode: "html",
    intro:
      "HTML paragraphs are the standard structural containers used to format continuous running text. Defined by the <p> tag, paragraphs are block-level elements that browsers automatically separate with vertical margins. Understanding whitespace handling, inline line breaks via <br>, thematic shifts with <hr>, and preformatted text blocks via <pre> is essential for clean web typography.",
    sections: [
      {
        heading: "The <p> Element & Block-Level Characteristics",
        content: [
          {
            type: "text",
            value:
              "The <code>&lt;p&gt;</code> element represents a distinct paragraph of text. Because it is a block-level element, the browser always begins a paragraph on a new line and applies default top and bottom margins to separate it from surrounding content.",
          },
          {
            type: "list",
            items: [
              " Automatic Line Wrapping: Paragraph text reflows fluidly to fill the available width of the parent container.",
              " Block Margins: Browsers attach vertical margins by default (typically 1em top and bottom) to ensure natural reading intervals.",
              " Mandatory Closing Tag: While older HTML specifications allowed omitting the closing </p>, modern standards mandate explicit closing tags to prevent cascading layout bugs.",
            ],
          },
        ],
      },
      {
        heading: "Whitespace Collapsing & Line Breaks (<br>)",
        content: [
          {
            type: "text",
            value:
              "Web browsers automatically collapse multiple spaces, tabs, and carriage returns within your source HTML into a single space. When you need to break a line without creating an entirely new paragraph, use the void <code>&lt;br&gt;</code> element.",
          },
          {
            type: "list",
            items: [
              " Whitespace Normalization: Extra spacing in source code does not alter layout on screen.",
              " <br> Element: Inserts an inline carriage return. Ideal for street addresses, poetry, or lyric stanzas.",
              " Structural Warning: Never stack multiple <br><br> tags to artificially generate spacing between sections; spacing must always be handled via CSS margin or padding.",
            ],
          },
        ],
      },
      {
        heading: "Preserving Formatting with <pre> & Section Breaks with <hr>",
        content: [
          {
            type: "text",
            value:
              "When exact indentation, tabular columns, or multi-space formatting must be preserved (e.g., code snippets, terminal outputs, or ASCII tables), use the <code>&lt;pre&gt;</code> element. For thematic transitions between topics, use the <code>&lt;hr&gt;</code> horizontal rule element.",
          },
          {
            type: "text",
            value: "<strong>Runnable Example: Paragraphs, Breaks, Dividers & Preformatted Text:</strong>",
          },
          {
            type: "code",
            value: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Paragraphs Demo</title>
</head>
<body>

  <!-- Standard Paragraphs -->
  <p>This is the opening paragraph introducing our core engineering philosophy.</p>
  <p>
    Customer Support Desk<br>
    742 Evergreen Terrace<br>
    Springfield, OR 97477
  </p>

  <!-- Thematic Divider -->
  <hr>

  <!-- Preformatted Block -->
  <pre>
STATUS    SERVICE      LATENCY
[OK]      Auth API     24ms
[OK]      Database     12ms
  </pre>

</body>
</html>`,
          },
          {
            type: "text",
            value: "<strong>Output:</strong>",
          },
          {
            type: "text",
            value: `<div style="font-family: sans-serif; background: #ffffff; padding: 20px; border: 1px solid #cbd5e1; border-radius: 8px; box-sizing: border-box;">
  <p style="margin: 0 0 12px 0; font-size: 14px; color: #334155; line-height: 1.6;">This is the opening paragraph introducing our core engineering philosophy.</p>
  
  <p style="margin: 0 0 14px 0; font-size: 14px; color: #334155; line-height: 1.6;">
    Customer Support Desk<br>
    742 Evergreen Terrace<br>
    Springfield, OR 97477
  </p>
  
  <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 14px 0;">
  
  <pre style="font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace; font-size: 12px; background: #f8fafc; padding: 12px; border: 1px solid #e2e8f0; border-radius: 6px; margin: 0; color: #0f172a; overflow-x: auto;">STATUS    SERVICE      LATENCY
[OK]      Auth API     24ms
[OK]      Database     12ms</pre>
</div>`,
          },
        ],
      },
    ],
    conclusion:
      "Paragraph elements (<p>) provide the core structural framework for readable online text. Combining them with intentional line breaks (<br>), thematic rules (<hr>), and preformatted blocks (<pre>) allows you to present textual information cleanly while maintaining full semantic validity.",
  },

  // ================= TOPIC 6: HTML TEXT FORMATTING =================
  {
    id: "html-text-formatting",
    title: "HTML Text Formatting",
    subjectCode: "html",
    intro:
      "HTML provides specialized inline formatting elements designed to alter text appearance and convey structural meaning. Modern web standards divide text formatting tags into physical tags (which modify visual presentation) and semantic tags (which convey programmatic importance, tone, or revisions to search engines, screen readers, and automated web parsers).",
    sections: [
      {
        heading: "Semantic vs. Physical Formatting Tags",
        content: [
          {
            type: "text",
            value:
              "While pairs like <code>&lt;b&gt;</code> and <code>&lt;strong&gt;</code> look identical in browsers, their programmatic meaning differs significantly:",
          },
          {
            type: "list",
            items: [
              " <b> vs <strong>: <b> bolds text stylistically without indicating importance; <strong> signals high urgency, seriousness, or critical importance (spoken with heavier emphasis by screen readers).",
              " <i> vs <em>: <i> italicizes text for alternate voices, foreign terms, or scientific designations; <em> conveys stress emphasis that alters sentence meaning.",
              " <mark>: Highlights relevant text with a bright background tint, denoting search matches or reference points.",
              " <small>: Shrinks text scale for legal disclaimers, copyrights, or auxiliary side notes.",
            ],
          },
        ],
      },
      {
        heading: "Editorial Revisions, Subscripts & Superscripts",
        content: [
          {
            type: "text",
            value:
              "Specialized formatting tags denote document changes, math notations, and chemical formulas:",
          },
          {
            type: "list",
            items: [
              " <del> & <ins>: <del> marks removed text with a strikethrough; <ins> marks inserted text with an underline, representing document change tracking.",
              " <s>: Strikethrough indicating content that is no longer accurate, without implying editorial tracking.",
              " <sub>: Drops text below the baseline (subscript) for chemical notations like H<sub>2</sub>O.",
              " <sup>: Raises text above the baseline (superscript) for mathematical powers (x<sup>2</sup>) and ordinal suffixes (1<sup>st</sup>).",
            ],
          },
        ],
      },
      {
        heading: "Runnable Example: Text Formatting in Action",
        content: [
          {
            type: "text",
            value:
              "Below is a complete, runnable demonstration covering semantic emphasis, highlighted keywords, price updates with revision tags, and scientific notation.",
          },
          {
            type: "text",
            value: "<strong>Code:</strong>",
          },
          {
            type: "code",
            value: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Text Formatting Demo</title>
</head>
<body>

  <article>
    <p>Security Warning: <strong>Never share your password</strong> with third parties.</p>
    <p>We need to focus on <em>client-side performance</em> this quarter.</p>
    <p>Search query matches appear in <mark>bright yellow</mark>.</p>
    
    <p>Discounted Subscription: <del>$120/year</del> <ins>$89/year</ins>!</p>
    
    <p>Chemical composition: H<sub>2</sub>SO<sub>4</sub> (Sulfuric Acid)</p>
    <p>Einstein Equation: E = mc<sup>2</sup></p>
    
    <p><small>&copy; 2026 Developer Documentation Portal. All rights reserved.</small></p>
  </article>

</body>
</html>`,
          },
          {
            type: "text",
            value: "<strong>Output:</strong>",
          },
          {
            type: "text",
            value: `<div style="font-family: sans-serif; background: #ffffff; padding: 20px; border: 1px solid #cbd5e1; border-radius: 8px; box-sizing: border-box; color: #334155; font-size: 14px; line-height: 1.6;">
  <p style="margin: 0 0 8px 0;">Security Warning: <strong style="color: #0f172a;">Never share your password</strong> with third parties.</p>
  <p style="margin: 0 0 8px 0;">We need to focus on <em style="color: #0284c7;">client-side performance</em> this quarter.</p>
  <p style="margin: 0 0 8px 0;">Search query matches appear in <mark style="background-color: #fef08a; color: #854d0e; padding: 2px 6px; border-radius: 4px;">bright yellow</mark>.</p>
  
  <p style="margin: 0 0 8px 0;">Discounted Subscription: <del style="color: #94a3b8;">$120/year</del> <ins style="color: #16a34a; font-weight: 600; text-decoration: none; border-bottom: 2px solid #16a34a;">$89/year</ins>!</p>
  
  <p style="margin: 0 0 8px 0;">Chemical composition: H<sub style="font-size: 11px;">2</sub>SO<sub style="font-size: 11px;">4</sub> (Sulfuric Acid)</p>
  <p style="margin: 0 0 12px 0;">Einstein Equation: E = mc<sup style="font-size: 11px; font-weight: bold;">2</sup></p>
  
  <p style="margin: 0; color: #64748b; font-size: 12px; border-top: 1px solid #e2e8f0; padding-top: 8px;">&copy; 2026 Developer Documentation Portal. All rights reserved.</p>
</div>`,
          },
        ],
      },
      {
        heading: "Best Practices & Common Formatting Mistakes",
        content: [
          {
            type: "list",
            items: [
              " Prioritize Semantics: Use <strong> and <em> when the text carries genuine informational weight. Use CSS font-weight or font-style for purely cosmetic decoration.",
              " Do Not Abuse Underlines (<u> / <ins>): Underlined text on the web is universally assumed to be a clickable hyperlink. Using decorative underlines confuses visitors.",
              " Correct Stacking of Inline Elements: Always close inline tags in strict reverse order (e.g., <strong><em>word</em></strong>, never <strong><em>word</strong></em>).",
            ],
          },
        ],
      },
    ],
    conclusion:
      "HTML text formatting elements combine visual polish with programmatic meaning. Choosing the correct semantic elements ensures your text is readable, accessible to screen readers, and fully contextualized for modern search engines.",
  },
 // ================= TOPIC 7: HTML COMMENTS =================
  {
    id: "html-comments",
    title: "HTML Comments",
    subjectCode: "html",
    intro:
      "HTML comments allow developers to insert documentation, explanatory notes, and structural boundaries directly inside markup files without rendering them on the visible browser canvas. Comments are indispensable for team workflows, isolating bugs during development, and organizing modular frontend templates.",
    sections: [
      {
        heading: "HTML Comment Syntax & Delimiters",
        content: [
          {
            type: "text",
            value:
              "HTML comments begin with the opening delimiter <code>&lt;!--</code> and terminate with the closing delimiter <code>--&gt;</code>. Anything placed between these boundaries is completely ignored by browser layout engines.",
          },
          {
            type: "list",
            items: [
              " Opening Delimiter: <!-- (less-than, exclamation mark, two hyphens)",
              " Closing Delimiter: --> (two hyphens, greater-than)",
              " Client Visibility: Hidden on the rendered screen, but entirely public to anyone using browser developer tools or 'View Page Source'.",
              " Non-Execution: Scripts or elements enclosed within comment markers are skipped during DOM node construction.",
            ],
          },
          {
            type: "text",
            value: "<strong>Syntax Pattern:</strong>",
          },
          {
            type: "code",
            value: `<!-- Single-line comment -->

<!--
  Multi-line documentation block
  Used for header notes and structural boundaries
-->`,
          },
        ],
      },
      {
        heading: "Section Organization & Debugging Markup",
        content: [
          {
            type: "text",
            value:
              "Developers commonly use comments to delineate major sections (like navigation, hero blocks, and footers) or to temporarily 'comment out' broken markup during diagnostic troubleshooting.",
          },
          {
            type: "text",
            value: "<strong>Runnable Example:</strong>",
          },
          {
            type: "code",
            value: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Comments Demo</title>
</head>
<body>

  <!-- ================= HEADER SECTION ================= -->
  <header>
    <h2>Engineering Portal</h2>
  </header>

  <!-- Notice banner currently visible -->
  <p>Production deployment scheduled for 02:00 UTC.</p>

  <!-- Temporarily disabled during maintenance:
  <div class="maintenance-alert">
    <button>Renew Certificate</button>
  </div>
  -->

</body>
</html>`,
          },
          {
            type: "text",
            value: "<strong>Output:</strong>",
          },
          {
            type: "text",
            value: `<div style="font-family: sans-serif; background: #ffffff; padding: 20px; border: 1px solid #cbd5e1; border-radius: 8px; box-sizing: border-box;">
  <header style="border-bottom: 2px solid #0284c7; padding-bottom: 6px; margin-bottom: 10px;">
    <h2 style="margin: 0; font-size: 20px; color: #0f172a;">Engineering Portal</h2>
  </header>
  <p style="margin: 0; font-size: 14px; color: #334155; line-height: 1.5;">Production deployment scheduled for 02:00 UTC.</p>
</div>`,
          },
        ],
      },
      {
        heading: "Security Considerations & Parsing Pitfalls",
        content: [
          {
            type: "list",
            items: [
              " Never Store Secrets: Avoid leaving passwords, sensitive internal endpoints, or private developer notes in comments, as all production HTML comments are delivered to end users.",
              " No Nested Comments: Comments cannot be nested (e.g., <!-- outer <!-- inner --> -->); the browser terminates the comment at the very first --> it encounters, spilling raw syntax onto the page.",
              " Avoid Double Hyphens: Refrain from typing double hyphens (--) inside comment copy to avoid unexpected parsing errors across legacy engines.",
            ],
          },
        ],
      },
    ],
    conclusion:
      "HTML comments provide essential context and organization for maintainable markup. Because they remain visible in public source files, keep comments focused on architecture and avoid leaking sensitive project details.",
  },

  // ================= TOPIC 8: HTML COLORS =================
  {
    id: "html-colors",
    title: "HTML Colors",
    subjectCode: "html",
    intro:
      "Colors in HTML are applied using CSS styling attributes to define text colors, background colors, and border outlines. HTML elements support multiple color formats, including standard color names, HEX, RGB, and HSL notation with alpha transparency channels.",
    sections: [
      {
        heading: "HTML Color Formats Explained",
        content: [
          {
            type: "text",
            value:
              "Colors can be assigned directly to elements via inline <code>style</code> attributes or external stylesheets using four primary representation models.",
          },
          {
            type: "list",
            items: [
              " Named Keywords: 140 standardized keywords supported natively by all web browsers (e.g., DodgerBlue, Tomato, SlateGray).",
              " Hexadecimal (#RRGGBB): 6-digit base-16 notation defining Red, Green, and Blue intensities from 00 to FF.",
              " RGB: Functional rgb(red, green, blue) coordinates with integer channels running from 0 to 255.",
              " HSL: Cylindrical hsl(hue, saturation, lightness) values mapping angles and percentages on the color wheel.",
              " Alpha Transparency: RGBA, HSLA, and 8-digit HEX formats support an opacity channel ranging from 0.0 (transparent) to 1.0 (opaque).",
            ],
          },
          {
            type: "text",
            value: "<strong>Syntax Comparison:</strong>",
          },
          {
            type: "code",
            value: `<!-- Named Color -->
<p style="color: Crimson;">Crimson Text</p>

<!-- HEX -->
<p style="color: #0284c7;">Sky Blue Hex</p>

<!-- RGB -->
<p style="color: rgb(16, 185, 129);">Emerald RGB</p>

<!-- RGBA with Opacity -->
<p style="background-color: rgba(239, 68, 68, 0.2);">Translucent Red Box</p>`,
          },
        ],
      },
      {
        heading: "Styling Text, Backgrounds, and Borders",
        content: [
          {
            type: "text",
            value:
              "Colors apply across different box-model surfaces through dedicated CSS properties embedded directly in element attributes.",
          },
          {
            type: "text",
            value: "<strong>Runnable Example:</strong>",
          },
          {
            type: "code",
            value: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Colors Demo</title>
</head>
<body>

  <!-- Card with HEX border, RGB text, and RGBA background -->
  <div style="background-color: rgba(2, 132, 199, 0.08); border: 2px solid #0284c7; padding: 16px; border-radius: 8px;">
    <h3 style="color: #0f172a; margin: 0 0 6px 0;">Color Coordination Card</h3>
    <p style="color: rgb(51, 65, 85); margin: 0; font-size: 14px;">
      This container demonstrates translucent backgrounds paired with solid borders and high-contrast text.
    </p>
  </div>

</body>
</html>`,
          },
          {
            type: "text",
            value: "<strong>Output:</strong>",
          },
          {
            type: "text",
            value: `<div style="font-family: sans-serif; background-color: rgba(2, 132, 199, 0.08); border: 2px solid #0284c7; padding: 16px; border-radius: 8px; box-sizing: border-box;">
  <h3 style="color: #0f172a; margin: 0 0 6px 0; font-size: 18px;">Color Coordination Card</h3>
  <p style="color: rgb(51, 65, 85); margin: 0; font-size: 14px; line-height: 1.5;">
    This container demonstrates translucent backgrounds paired with solid borders and high-contrast text.
  </p>
</div>`,
          },
        ],
      },
      {
        heading: "Contrast Guidelines & Accessibility (a11y)",
        content: [
          {
            type: "list",
            items: [
              " WCAG 2.1 AA Compliance: Maintain a minimum contrast ratio of 4.5:1 for body copy and 3:1 for large display titles.",
              " Redundant Indicators: Do not rely solely on color shifts to communicate critical states (e.g., combine red error alerts with clear text descriptions or icons).",
              " System Theming: Pair standard light colors with media-query-based dark variants to support system-level accessibility settings.",
            ],
          },
        ],
      },
    ],
    conclusion:
      "Selecting the appropriate color format—whether HEX for brand assets, RGB for programmatic calculations, or RGBA for subtle transparency—provides full control over page presentation while keeping content compliant with digital accessibility standards.",
  },
 // ================= TOPIC 9: HTML LINKS =================
  {
    id: "html-links",
    title: "HTML Links",
    subjectCode: "html",
    intro:
      "Hyperlinks are the defining mechanism of the World Wide Web, enabling seamless navigation across documents, external domains, file downloads, in-page bookmark anchors, and native communication protocols like email and telephone dialing. In HTML, hyperlinks are declared using the <a> (anchor) element paired with the essential href (hypertext reference) attribute.",
    sections: [
      {
        heading: "The Anchor Element & href Attribute",
        content: [
          {
            type: "text",
            value:
              "The <code>&lt;a&gt;</code> tag creates an interactive hyperlink. The destination endpoint is supplied via the <code>href</code> attribute, which can take web URLs, local document paths, element IDs, or protocol handlers.",
          },
          {
            type: "list",
            items: [
              " href: Defines the destination address or action trigger.",
              " Link Text / Nested Nodes: The clickable surface inside the anchor tags (can be plain text, inline badges, or entire image blocks).",
              " Native Visual States: Unvisited links render underlined blue; visited links render underlined purple; active clicked links flash red.",
              " Keyboard Accessibility: Anchor links receive default tab focus and can be triggered via the Enter key.",
            ],
          },
          {
            type: "text",
            value: "<strong>Syntax Pattern:</strong>",
          },
          {
            type: "code",
            value: `<a href="destination_url">Clickable Anchor Text</a>`,
          },
        ],
      },
      {
        heading: "Absolute vs. Relative URLs",
        content: [
          {
            type: "text",
            value:
              "Choosing the correct URL format ensures links resolve accurately whether pointing to third-party web domains or internal site directories.",
          },
          {
            type: "list",
            items: [
              " Absolute URLs: Include the full protocol and domain name (e.g., https://developer.mozilla.org). Required when linking outward to third-party sites.",
              " Relative URLs: Reference a file relative to the current file location or server root (e.g., about.html, /blog/index.html). Preferred for internal site pages because they remain functional across local development and staging environments.",
            ],
          },
        ],
      },
      {
        heading: "Security & Window Target Controls: target and rel",
        content: [
          {
            type: "text",
            value:
              "The <code>target</code> attribute determines where the linked resource opens, while the <code>rel</code> attribute establishes the security and relationship parameters between referring and destination documents.",
          },
          {
            type: "list",
            items: [
              " target='_self': Default behavior; navigates within the existing browser tab.",
              " target='_blank': Opens the target in a fresh browser tab or window.",
              " rel='noopener noreferrer': Essential security companion for target='_blank'. It blocks tab-nabbing vulnerabilities where malicious destination pages manipulate the window.opener object of the parent tab.",
              " rel='nofollow': Tells search engine crawlers not to endorse or transfer page authority (PageRank) to the destination URL.",
            ],
          },
        ],
      },
      {
        heading: "Communication Protocols & In-Page Bookmarks",
        content: [
          {
            type: "text",
            value:
              "Anchor elements can link directly to specific section IDs on the same page, initiate device telephone calls, or launch pre-addressed email drafts.",
          },
          {
            type: "text",
            value: "<strong>Runnable Example: Navigation, Bookmarks & Action Protocols:</strong>",
          },
          {
            type: "code",
            value: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Links Demo</title>
</head>
<body>

  <!-- External Tab Link with Security Tokens -->
  <p>
    <a href="https://www.w3.org" target="_blank" rel="noopener noreferrer">
      Visit W3C Standards (Opens in new tab) &rarr;
    </a>
  </p>

  <!-- In-Page Bookmark Jump -->
  <p>
    <a href="#contact-details">Jump to Contact Section</a>
  </p>

  <div style="margin-top: 40px; padding-top: 10px; border-top: 1px dashed #cbd5e1;" id="contact-details">
    <h3>Direct Contact Methods</h3>
    <!-- Protocol Action Links -->
    <a href="mailto:support@example.com">Email Technical Support</a><br>
    <a href="tel:+18005550199">Call +1 (800) 555-0199</a>
  </div>

</body>
</html>`,
          },
          {
            type: "text",
            value: "<strong>Output:</strong>",
          },
          {
            type: "text",
            value: `<div style="font-family: sans-serif; background: #ffffff; padding: 20px; border: 1px solid #cbd5e1; border-radius: 8px; box-sizing: border-box;">
  <p style="margin: 0 0 12px 0;">
    <a href="#" style="color: #0284c7; text-decoration: underline; font-weight: 600; font-size: 14px;">
      Visit W3C Standards (Opens in new tab) &rarr;
    </a>
  </p>
  <p style="margin: 0 0 16px 0;">
    <a href="#contact-details-preview" style="color: #475569; text-decoration: underline; font-size: 14px;">
      Jump to Contact Section
    </a>
  </p>
  <div style="padding-top: 12px; border-top: 1px dashed #cbd5e1;" id="contact-details-preview">
    <h3 style="margin: 0 0 8px 0; font-size: 16px; color: #0f172a;">Direct Contact Methods</h3>
    <a href="mailto:support@example.com" style="color: #0284c7; text-decoration: underline; font-size: 13px;">Email Technical Support</a><br>
    <a href="tel:+18005550199" style="color: #0284c7; text-decoration: underline; font-size: 13px;">Call +1 (800) 555-0199</a>
  </div>
</div>`,
          },
        ],
      },
      {
        heading: "SEO & Usability Best Practices for Links",
        content: [
          {
            type: "list",
            items: [
              " Descriptive Anchor Text: Avoid generic phrases like 'click here' or 'read more'. Use descriptive keywords (e.g., 'Download the 2026 Annual Audit PDF') to improve screen reader navigation and SEO keyword indexing.",
              " Never Strip Focus Indicators: Ensure keyboard navigators can trace their location via visible :focus outlines when styling links with custom CSS.",
              " Explicit Download Flags: When linking files, append the boolean download attribute (e.g., download='report.pdf') to trigger direct download dialogs.",
            ],
          },
        ],
      },
    ],
    conclusion:
      "The anchor element forms the foundational web of hyperlinked documents. Employing descriptive anchor text, configuring secure target attributes with rel='noopener noreferrer', and utilizing standard protocol handlers guarantees intuitive, accessible, and secure user navigation.",
  },

  // ================= TOPIC 10: HTML IMAGES =================
  {
    id: "html-images",
    title: "HTML Images",
    subjectCode: "html",
    intro:
      "Images bring visual clarity, brand identity, and editorial richness to web applications. In HTML, raster photographs and vector graphics are embedded using the <img> void element. Correct implementation requires understanding asset sourcing, accessibility descriptions via the alt attribute, layout preservation with explicit dimensions, native performance optimizations like lazy loading, and semantic figure wrappers.",
    sections: [
      {
        heading: "The <img> Tag and Critical Core Attributes",
        content: [
          {
            type: "text",
            value:
              "The <code>&lt;img&gt;</code> element is a self-closing void tag that does not wrap content and has no closing tag. Browsers fetch the external asset specified in the <code>src</code> attribute and draw it inline into the document canvas.",
          },
          {
            type: "list",
            items: [
              " src (Source): The relative path or absolute URL pointing to the image asset.",
              " alt (Alternative Text): Essential textual description for screen readers, search engine crawlers, and fallback display when images fail over poor connections.",
              " width & height: Declares intrinsic display dimensions in pixels without unit labels. Setting these attributes enables the browser to reserve spatial aspect-ratio boxes immediately, eliminating Cumulative Layout Shift (CLS).",
              " loading='lazy': Native browser instruction that defers downloading off-screen images until the user scrolls near them, reducing initial bandwidth consumption.",
            ],
          },
          {
            type: "text",
            value: "<strong>Syntax:</strong>",
          },
          {
            type: "code",
            value: `<img src="path/image.webp" alt="Detailed description of visible subject" width="600" height="400" loading="lazy">`,
          },
        ],
      },
      {
        heading: "Modern Web Image Formats",
        content: [
          {
            type: "text",
            value:
              "Selecting the correct image format directly impacts site rendering speed, visual sharpness, and user data usage:",
          },
          {
            type: "list",
            items: [
              " WebP / AVIF: Contemporary next-gen formats offering superior lossy and lossless compression algorithms compared to legacy formats.",
              " SVG (Scalable Vector Graphics): XML-based vector code that scales infinitely to any screen resolution without pixelation, ideal for icons and logos.",
              " PNG: Preferred when lossless transparency masks and crisp geometric UI lines are needed.",
              " JPEG / JPG: Standard lossy format best suited for complex photographs with rich color spectrums.",
            ],
          },
        ],
      },
      {
        heading: "Semantic Figure & Caption Architecture",
        content: [
          {
            type: "text",
            value:
              "When an image, diagram, code sample, or chart requires an editorial caption, wrap the element in a semantic <code>&lt;figure&gt;</code> container paired with a child <code>&lt;figcaption&gt;</code> tag.",
          },
          {
            type: "text",
            value: "<strong>Runnable Example: Structured Image with Caption & Styling:</strong>",
          },
          {
            type: "code",
            value: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Images Demo</title>
</head>
<body>

  <figure style="margin: 0; max-width: 400px;">
    <!-- Inline SVG Placeholder Image -->
    <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg" style="border-radius: 6px; width: 100%; height: auto; display: block;">
      <rect width="100%" height="100%" fill="#0284c7"/>
      <circle cx="200" cy="100" r="50" fill="#38bdf8"/>
      <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-size="16" font-weight="bold">Responsive Vector Image</text>
    </svg>
    <figcaption style="font-family: sans-serif; font-size: 13px; color: #64748b; margin-top: 8px; text-align: center;">
      Figure 1.1: Scalable graphic demonstration rendered without external asset latency.
    </figcaption>
  </figure>

</body>
</html>`,
          },
          {
            type: "text",
            value: "<strong>Output:</strong>",
          },
          {
            type: "text",
            value: `<div style="font-family: sans-serif; background: #ffffff; padding: 20px; border: 1px solid #cbd5e1; border-radius: 8px; box-sizing: border-box; max-width: 440px;">
  <figure style="margin: 0;">
    <svg width="100%" height="180" xmlns="http://www.w3.org/2000/svg" style="border-radius: 6px; display: block;">
      <rect width="100%" height="100%" fill="#0284c7"/>
      <circle cx="50%" cy="50%" r="45" fill="#38bdf8"/>
      <text x="50%" y="52%" dominant-baseline="middle" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-size="15" font-weight="bold">Responsive Vector Image</text>
    </svg>
    <figcaption style="font-size: 13px; color: #64748b; margin-top: 8px; text-align: center;">
      Figure 1.1: Scalable graphic demonstration rendered without external asset latency.
    </figcaption>
  </figure>
</div>`,
          },
        ],
      },
      {
        heading: "Accessibility, SEO & Performance Guidelines",
        content: [
          {
            type: "list",
            items: [
              " Decorative vs. Informative alt Text: Informative images require descriptive alt text explaining visible content. Purely decorative graphics (dividers, background flourishes) should carry alt='' so screen readers skip them cleanly.",
              " Prevent Layout Shifts: Always declare width and height attributes in HTML; CSS can override them responsively using max-width: 100% and height: auto.",
              " Responsive Art Direction: Use the <picture> element containing nested <source> tags when you need to serve cropped or alternative images across mobile and desktop viewports.",
            ],
          },
        ],
      },
    ],
    conclusion:
      "HTML images expand narrative impact when paired with robust technical optimizations. Providing accurate alt descriptions, setting explicit dimensional boundaries to eliminate CLS, and leveraging modern formats like WebP or SVG ensures fast-loading, accessible web experiences across all screen sizes.",
  },
 // ================= TOPIC 11: HTML TABLES =================
  {
    id: "html-tables",
    title: "HTML Tables",
    subjectCode: "html",
    intro:
      "HTML tables allow developers to arrange multi-dimensional tabular data—such as financial ledgers, product specifications, scheduling matrices, and statistical reports—into structured rows and columns. When constructed using semantic sections (thead, tbody, tfoot) and explicit cell association attributes, tables maintain accessible programmatic relationships that assist screen readers, search engine scrapers, and data parsers.",
    sections: [
      {
        heading: "Basic Table Structure & Anatomy",
        content: [
          {
            type: "text",
            value:
              "An HTML table is defined using the <code>&lt;table&gt;</code> element. Rows are created horizontally with <code>&lt;tr&gt;</code>, column header cells with <code>&lt;th&gt;</code>, and data cells with <code>&lt;td&gt;</code>.",
          },
          {
            type: "list",
            items: [
              " <table>: The root container wrapping all table content and structures.",
              " <tr> (Table Row): Encapsulates a horizontal line of header or data cells.",
              " <th> (Table Header): Denotes a header cell; browsers render text bold and centered by default.",
              " <td> (Table Data): Represents standard data cells containing text, numbers, badges, or links.",
            ],
          },
          {
            type: "text",
            value: "<strong>Syntax Blueprint:</strong>",
          },
          {
            type: "code",
            value: `<table>
  <tr>
    <th>Header A</th>
    <th>Header B</th>
  </tr>
  <tr>
    <td>Data 1</td>
    <td>Data 2</td>
  </tr>
</table>`,
          },
        ],
      },
      {
        heading: "Semantic Architecture: thead, tbody, tfoot & caption",
        content: [
          {
            type: "text",
            value:
              "To improve accessibility and parsing, tables are split into semantic divisions. Adding <code>&lt;caption&gt;</code> provides a screen-reader-friendly title for the entire dataset.",
          },
          {
            type: "list",
            items: [
              " <caption>: Placed immediately after the opening <table> tag; describes the dataset's purpose.",
              " <thead>: Isolates column header rows, enabling repeated headers when printing multi-page documents.",
              " <tbody>: Wraps the primary data rows of the table.",
              " <tfoot>: Houses summary rows, calculations, column averages, or financial totals.",
            ],
          },
        ],
      },
      {
        heading: "Cell Spanning: colspan and rowspan",
        content: [
          {
            type: "text",
            value:
              "Cells can merge across multiple columns using <code>colspan</code> or down across rows using <code>rowspan</code> to handle irregular data structures.",
          },
          {
            type: "list",
            items: [
              " colspan: Merges a cell horizontally across a specified number of columns.",
              " rowspan: Merges a cell vertically down across a specified number of rows.",
            ],
          },
          {
            type: "text",
            value: "<strong>Runnable Example: Structured Table with Merged Headers:</strong>",
          },
          {
            type: "code",
            value: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Table Demo</title>
</head>
<body>

  <table style="width: 100%; border-collapse: collapse; font-family: sans-serif; font-size: 14px;">
    <caption style="text-align: left; font-weight: bold; margin-bottom: 8px; color: #0f172a;">
      Employee Directory & Shift Schedule
    </caption>
    <thead>
      <tr style="background-color: #f1f5f9; text-align: left;">
        <th style="padding: 10px; border: 1px solid #cbd5e1;">Employee</th>
        <th style="padding: 10px; border: 1px solid #cbd5e1;">Department</th>
        <th style="padding: 10px; border: 1px solid #cbd5e1;">Shift</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 10px; border: 1px solid #cbd5e1;">Aditi Rao</td>
        <td style="padding: 10px; border: 1px solid #cbd5e1;">Engineering</td>
        <td style="padding: 10px; border: 1px solid #cbd5e1;">Morning</td>
      </tr>
      <tr>
        <td style="padding: 10px; border: 1px solid #cbd5e1;">Vikram Sen</td>
        <td style="padding: 10px; border: 1px solid #cbd5e1;">Quality Assurance</td>
        <td style="padding: 10px; border: 1px solid #cbd5e1;">Evening</td>
      </tr>
    </tbody>
    <tfoot>
      <tr style="background-color: #f8fafc; font-weight: 600;">
        <td colspan="2" style="padding: 10px; border: 1px solid #cbd5e1;">Total Active Staff</td>
        <td style="padding: 10px; border: 1px solid #cbd5e1;">2 On Duty</td>
      </tr>
    </tfoot>
  </table>

</body>
</html>`,
          },
          {
            type: "text",
            value: "<strong>Output:</strong>",
          },
          {
            type: "text",
            value: `<div style="font-family: sans-serif; background: #ffffff; padding: 20px; border: 1px solid #cbd5e1; border-radius: 8px; box-sizing: border-box;">
  <table style="width: 100%; border-collapse: collapse; font-size: 14px; text-align: left;">
    <caption style="text-align: left; font-weight: bold; margin-bottom: 8px; color: #0f172a; font-size: 15px;">
      Employee Directory & Shift Schedule
    </caption>
    <thead>
      <tr style="background-color: #f1f5f9;">
        <th style="padding: 10px; border: 1px solid #cbd5e1; color: #0f172a;">Employee</th>
        <th style="padding: 10px; border: 1px solid #cbd5e1; color: #0f172a;">Department</th>
        <th style="padding: 10px; border: 1px solid #cbd5e1; color: #0f172a;">Shift</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 10px; border: 1px solid #cbd5e1; color: #334155;">Aditi Rao</td>
        <td style="padding: 10px; border: 1px solid #cbd5e1; color: #334155;">Engineering</td>
        <td style="padding: 10px; border: 1px solid #cbd5e1; color: #334155;">Morning</td>
      </tr>
      <tr>
        <td style="padding: 10px; border: 1px solid #cbd5e1; color: #334155;">Vikram Sen</td>
        <td style="padding: 10px; border: 1px solid #cbd5e1; color: #334155;">Quality Assurance</td>
        <td style="padding: 10px; border: 1px solid #cbd5e1; color: #334155;">Evening</td>
      </tr>
    </tbody>
    <tfoot>
      <tr style="background-color: #f8fafc; font-weight: 600;">
        <td colspan="2" style="padding: 10px; border: 1px solid #cbd5e1; color: #0f172a;">Total Active Staff</td>
        <td style="padding: 10px; border: 1px solid #cbd5e1; color: #0284c7;">2 On Duty</td>
      </tr>
    </tfoot>
  </table>
</div>`,
          },
        ],
      },
      {
        heading: "Accessibility, SEO & Best Practices",
        content: [
          {
            type: "list",
            items: [
              " Never Use Tables for Page Layouts: Tables are meant strictly for tabular, relational data. Using them for visual layout damages screen reader navigation and mobile responsiveness.",
              " scope Attribute: Use scope='col' or scope='row' on <th> tags so screen readers announce which header corresponds to each data cell.",
              " Responsive Overflow Wrappers: Tables do not shrink below their content width. Always wrap them in a container with overflow-x: auto to prevent mobile viewport clipping.",
            ],
          },
        ],
      },
    ],
    conclusion:
      "HTML tables organize relational datasets into transparent rows and columns. Adhering to semantic thead, tbody, and tfoot structures alongside scope attributes ensures your data remains accessible, SEO-friendly, and maintainable.",
  },

  // ================= TOPIC 12: HTML LISTS =================
  {
    id: "html-lists",
    title: "HTML Lists",
    subjectCode: "html",
    intro:
      "HTML lists group related information into structured, scannable hierarchies. HTML provides three distinct list variants: unordered lists (bulleted items), ordered lists (numbered sequences), and description lists (key-value term pairs). Beyond simple text outlines, lists serve as the semantic foundation for navigation menus, breadcrumbs, and multi-step forms.",
    sections: [
      {
        heading: "The Three Types of HTML Lists",
        content: [
          {
            type: "text",
            value:
              "Choosing the correct list tag signals item relationships to search engines, screen readers, and stylesheet systems:",
          },
          {
            type: "list",
            items: [
              " Unordered Lists (<ul>): Used when the sequence of items is arbitrary. Browsers render each item prefixed by a bullet marker.",
              " Ordered Lists (<ol>): Used when numerical progression, ranking, or sequential steps matter. Items receive incremental numbers by default.",
              " Description Lists (<dl>): Groups terms (<dt>) with corresponding explanations or values (<dd>), ideal for glossaries, metadata displays, and key-value summaries.",
            ],
          },
        ],
      },
      {
        heading: "Attributes for Ordered Lists",
        content: [
          {
            type: "text",
            value:
              "The <code>&lt;ol&gt;</code> element supports native attributes to adjust numbering without CSS:",
          },
          {
            type: "list",
            items: [
              " type: Sets numbering format ('1' for decimal, 'A' or 'a' for letters, 'I' or 'i' for Roman numerals).",
              " start: Sets an alternate starting index (e.g., start='4' begins numbering at 4).",
              " reversed: Reverses numerical numbering order (e.g., 3, 2, 1) for countdowns and leaderboards.",
            ],
          },
        ],
      },
      {
        heading: "Runnable Example: Nested Lists & Description Dictionaries",
        content: [
          {
            type: "text",
            value:
              "The following example contrasts an ordered procedural workflow with a semantic description list.",
          },
          {
            type: "text",
            value: "<strong>Code:</strong>",
          },
          {
            type: "code",
            value: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Lists Demo</title>
</head>
<body>

  <!-- Ordered Procedure -->
  <h3>Deployment Workflow</h3>
  <ol type="1">
    <li>Run automated test suite</li>
    <li>Build production distribution bundle</li>
    <li>Deploy assets to CDN</li>
  </ol>

  <!-- Description List -->
  <h3>Core Web Terminology</h3>
  <dl>
    <dt><strong>DOM</strong></dt>
    <dd>Document Object Model representing parsed HTML nodes.</dd>
    <dt><strong>Semantic HTML</strong></dt>
    <dd>Tags that describe their intended meaning to machines and humans.</dd>
  </dl>

</body>
</html>`,
          },
          {
            type: "text",
            value: "<strong>Output:</strong>",
          },
          {
            type: "text",
            value: `<div style="font-family: sans-serif; background: #ffffff; padding: 20px; border: 1px solid #cbd5e1; border-radius: 8px; box-sizing: border-box;">
  <h3 style="margin: 0 0 8px 0; font-size: 16px; color: #0f172a;">Deployment Workflow</h3>
  <ol style="margin: 0 0 16px 0; padding-left: 20px; color: #334155; font-size: 14px; line-height: 1.6;">
    <li>Run automated test suite</li>
    <li>Build production distribution bundle</li>
    <li>Deploy assets to CDN</li>
  </ol>

  <h3 style="margin: 0 0 8px 0; font-size: 16px; color: #0f172a;">Core Web Terminology</h3>
  <dl style="margin: 0; color: #334155; font-size: 14px; line-height: 1.5;">
    <dt style="color: #0284c7; font-weight: bold;">DOM</dt>
    <dd style="margin: 2px 0 10px 14px; color: #475569;">Document Object Model representing parsed HTML nodes.</dd>
    <dt style="color: #0284c7; font-weight: bold;">Semantic HTML</dt>
    <dd style="margin: 2px 0 0 14px; color: #475569;">Tags that describe their intended meaning to machines and humans.</dd>
  </dl>
</div>`,
          },
        ],
      },
      {
        heading: "Semantic Nesting & Navigation Menus",
        content: [
          {
            type: "list",
            items: [
              " Direct Child Rule: A <ul> or <ol> must contain only <li> elements as direct children. Nesting a sub-list requires placing it inside an <li>, never directly inside a parent <ul> or <ol>.",
              " Navigation Semantic Backbone: Modern navbars are structured using <nav><ul><li><a href='...'>Link</a></li></ul></nav>, which allows assistive screen readers to announce the total count of available navigation links to visually impaired visitors.",
            ],
          },
        ],
      },
    ],
    conclusion:
      "HTML lists provide structured grouping across all categories of content. Whether presenting unordered feature lists, ranked sequential instructions, or key-value glossary terms, lists communicate clear document organization to both users and assistive devices.",
  },
 // ================= TOPIC 13: HTML BLOCK AND INLINE =================
  {
    id: "html-block-and-inline",
    title: "HTML Block and Inline Elements",
    subjectCode: "html",
    intro:
      "In HTML, every visual element possesses a default display mode that governs how it participates in the document layout flow. Elements are primarily classified as block-level elements—which force line breaks and stretch across full container widths—or inline elements, which sit seamlessly alongside text without disrupting paragraph flow. Mastering this distinction is crucial for building predictable page layouts, avoiding unexpected line wrapping, and ensuring valid HTML nesting hierarchies.",
    sections: [
      {
        heading: "Block-Level Elements Explained",
        content: [
          {
            type: "text",
            value:
              "A block-level element always begins on a fresh line, pushing down any subsequent content. By default, browsers expand block elements edge-to-edge across the entire available width of their parent container and append default vertical margins above and below.",
          },
          {
            type: "list",
            items: [
              " Automatic Line Break: Always initiates on a new line and forces following sibling elements onto the next line.",
              " Full-Width Expansion: Stretches to fill 100% of the available horizontal space inside its containing block unless explicitly restricted by CSS width properties.",
              " Complete Box-Model Support: Fully respects all dimensional CSS declarations, including width, height, margin, and padding across all four axes.",
              " Structural Containers: Designed to encapsulate other block elements, inline elements, and raw text nodes.",
              " Common Block Tags: <div>, <p>, <h1> through <h6>, <section>, <article>, <header>, <footer>, <main>, <ul>, <ol>, <li>, <table>, <form>, and <blockquote>.",
            ],
          },
        ],
      },
      {
        heading: "Inline Elements Explained",
        content: [
          {
            type: "text",
            value:
              "An inline element does not trigger a line break before or after itself. It occupies only the exact horizontal space required to display its enclosed text, glyphs, or inline assets, flowing naturally within surrounding paragraph copy.",
          },
          {
            type: "list",
            items: [
              " Seamless Flow: Renders side-by-side with adjacent text and inline siblings along the normal horizontal reading axis.",
              " Content-Fitted Width: Spans strictly the width of its internal characters or nested inline assets.",
              " Box-Model Limitations: Explicit CSS width and height declarations have no effect. While horizontal padding and margins work predictably, vertical margins and padding do not push surrounding block elements away.",
              " Containment Rules: Should only wrap text nodes or other inline elements; placing block elements inside inline tags violates HTML5 nesting standards (with a modern exception for the anchor <a> tag).",
              " Common Inline Tags: <span>, <a>, <strong>, <em>, <img>, <mark>, <small>, <code>, <label>, <input>, and <button>.",
            ],
          },
        ],
      },
      {
        heading: "Key Architectural Differences",
        content: [
          {
            type: "list",
            items: [
              " Line Break Behavior: Block elements enforce line breaks; inline elements flow continuously on the active row.",
              " Dimensional Control: Block elements accept explicit width and height properties; inline elements ignore width and height properties.",
              " Overriding via CSS: An element's default display mode can be transformed using the CSS display property (e.g., display: block, display: inline, display: inline-block, display: flex).",
            ],
          },
          {
            type: "text",
            value: "<strong>Runnable Example: Block Containers vs. Inline Formatting:</strong>",
          },
          {
            type: "code",
            value: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Block and Inline Demo</title>
</head>
<body>

  <!-- Block Elements Stacking -->
  <div style="background-color: #dbeafe; color: #1e40af; padding: 12px; margin-bottom: 10px; border-radius: 6px;">
    <strong>Block Element 1:</strong> Takes full available width and forces a new line.
  </div>

  <div style="background-color: #fef9c3; color: #854d0e; padding: 12px; margin-bottom: 16px; border-radius: 6px;">
    <strong>Block Element 2:</strong> Sits below Block 1 automatically.
  </div>

  <!-- Inline Elements Flowing in a Paragraph -->
  <p style="color: #334155; line-height: 1.6;">
    This standard paragraph flows continuously while supporting 
    <span style="background-color: #fee2e2; color: #991b1b; padding: 2px 6px; border-radius: 4px; font-weight: bold;">inline span badges</span>, 
    nested <em style="color: #0284c7;">italic emphasis</em>, and clickable 
    <a href="#" style="color: #2563eb; text-decoration: underline;">inline hyperlinks</a> 
    without breaking the sentence into separate lines.
  </p>

</body>
</html>`,
          },
          {
            type: "text",
            value: "<strong>Output:</strong>",
          },
          {
            type: "text",
            value: `<div style="font-family: sans-serif; background: #ffffff; padding: 20px; border: 1px solid #cbd5e1; border-radius: 8px; box-sizing: border-box;">
  <div style="background-color: #dbeafe; color: #1e40af; padding: 12px; margin-bottom: 10px; border-radius: 6px; font-size: 14px;">
    <strong>Block Element 1:</strong> Takes full available width and forces a new line.
  </div>
  <div style="background-color: #fef9c3; color: #854d0e; padding: 12px; margin-bottom: 16px; border-radius: 6px; font-size: 14px;">
    <strong>Block Element 2:</strong> Sits below Block 1 automatically.
  </div>
  <p style="margin: 0; color: #334155; font-size: 14px; line-height: 1.6;">
    This standard paragraph flows continuously while supporting 
    <span style="background-color: #fee2e2; color: #991b1b; padding: 2px 6px; border-radius: 4px; font-weight: bold;">inline span badges</span>, 
    nested <em style="color: #0284c7;">italic emphasis</em>, and clickable 
    <a href="#" style="color: #2563eb; text-decoration: underline;">inline hyperlinks</a> 
    without breaking the sentence into separate lines.
  </p>
</div>`,
          },
        ],
      },
      {
        heading: "HTML Nesting Rules & Common Pitfalls",
        content: [
          {
            type: "list",
            items: [
              " The Paragraph Limitation: The HTML5 specification strictly prohibits embedding block-level containers (such as <div>, <ul>, <ol>, <table>, or nested <p> tags) inside a <p> element. Browsers will prematurely terminate the paragraph if a block tag is encountered.",
              " Inline Tag Boundaries: Never place a block <div> inside an inline <span> tag. While modern CSS allows changing display properties, violating this HTML markup rule damages accessibility parsing trees.",
              " The Anchor Tag Exception: HTML5 officially permits wrapping entire block-level cards (containing <div>, <h3>, <p>, and <img> elements) inside an <a> tag to make whole UI components clickable.",
            ],
          },
        ],
      },
    ],
    conclusion:
      "Understanding the behavioral differences between block-level and inline elements provides the foundational structural knowledge required for web design. Block elements establish macro layouts, cards, and sections, while inline elements style words, phrases, and granular interactive triggers without disrupting the natural flow of reading.",
  },

  // ================= TOPIC 14: HTML DIV AND SPAN =================
  {
    id: "html-div-and-span",
    title: "HTML Div and Span",
    subjectCode: "html",
    intro:
      "The <div> and <span> elements are generic, non-semantic grouping containers in HTML. Unlike semantic tags such as <article> or <strong>, neither <div> nor <span> carries inherent descriptive meaning about the content they hold. Instead, they act as neutral architectural hooks for CSS styling, Flexbox and Grid layouts, and JavaScript DOM selection when no dedicated semantic element is appropriate.",
    sections: [
      {
        heading: "The <div> Element: Generic Block Container",
        content: [
          {
            type: "text",
            value:
              "The <code>&lt;div&gt;</code> (division) element is a block-level container. It is the primary building block used to group disparate HTML components together into cohesive interface modules such as profile cards, hero panels, modal dialogs, and grid columns.",
          },
          {
            type: "list",
            items: [
              " Block-Level Default: Automatically starts on a new line and expands to 100% of parent width.",
              " Comprehensive Content Wrapping: Capable of encapsulating headings, paragraphs, lists, forms, images, and other nested <div> blocks.",
              " CSS & JS Target: Paired with class or id attributes to serve as flex containers, grid areas, or animation triggers.",
              " Non-Semantic Utility: Perfect for purely presentational wrappers (such as centering outer layout shells) where semantic tags would be inaccurate.",
            ],
          },
        ],
      },
      {
        heading: "The <span> Element: Generic Inline Container",
        content: [
          {
            type: "text",
            value:
              "The <code>&lt;span&gt;</code> element is a generic inline container. It isolates a small fragment of text, an icon glyph, or an inline numerical metric without disrupting the horizontal flow of the containing sentence or paragraph.",
          },
          {
            type: "list",
            items: [
              " Inline Default: Does not force a line break; remains on the same row as surrounding text.",
              " Minimal Footprint: Constrains its dimensions strictly to the length of the nested text or characters.",
              " Micro-Styling Hook: Ideal for altering word color, highlighting keywords, applying badges, or attaching JavaScript click handlers to specific phrases.",
              " Accessibility Neutral: Does not announce extra structural transitions to screen readers unless configured with explicit ARIA roles.",
            ],
          },
        ],
      },
      {
        heading: "Div vs. Span Architectural Matrix",
        content: [
          {
            type: "list",
            items: [
              " Display Behavior: <div> defaults to display: block; <span> defaults to display: inline.",
              " Nesting Capability: <div> can nest other <div> blocks, semantic sections, and inline elements; <span> must only nest inline elements or raw text.",
              " Architectural Scope: <div> establishes macro layout boundaries; <span> manages micro-level typography and phrase accents.",
            ],
          },
          {
            type: "text",
            value: "<strong>Runnable Example: Grouped Card Component Using Div and Span:</strong>",
          },
          {
            type: "code",
            value: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Div and Span Demo</title>
</head>
<body>

  <!-- Block-Level Container (div) creating a structured card component -->
  <div style="background-color: #ffffff; border: 1px solid #cbd5e1; border-left: 5px solid #0284c7; border-radius: 8px; padding: 18px; max-width: 380px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); font-family: sans-serif;">
    <h3 style="margin: 0 0 6px 0; font-size: 18px; color: #0f172a;">Production Server</h3>
    
    <p style="margin: 0 0 12px 0; font-size: 14px; color: #475569;">
      Current Status: 
      <!-- Inline Containers (span) highlighting metrics and status tags -->
      <span style="background-color: #dcfce7; color: #166534; padding: 3px 8px; border-radius: 9999px; font-weight: 600; font-size: 12px;">Operational</span>
    </p>
    
    <p style="margin: 0; font-size: 13px; color: #64748b;">
      Response Latency: <span style="color: #0284c7; font-weight: bold;">18ms</span> across all regions.
    </p>
  </div>

</body>
</html>`,
          },
          {
            type: "text",
            value: "<strong>Output:</strong>",
          },
          {
            type: "text",
            value: `<div style="font-family: sans-serif; background: #ffffff; padding: 20px; border: 1px solid #cbd5e1; border-radius: 8px; box-sizing: border-box;">
  <div style="background-color: #ffffff; border: 1px solid #cbd5e1; border-left: 5px solid #0284c7; border-radius: 8px; padding: 18px; max-width: 380px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
    <h3 style="margin: 0 0 6px 0; font-size: 18px; color: #0f172a;">Production Server</h3>
    <p style="margin: 0 0 12px 0; font-size: 14px; color: #475569;">
      Current Status: 
      <span style="background-color: #dcfce7; color: #166534; padding: 3px 8px; border-radius: 9999px; font-weight: 600; font-size: 12px;">Operational</span>
    </p>
    <p style="margin: 0; font-size: 13px; color: #64748b;">
      Response Latency: <span style="color: #0284c7; font-weight: bold;">18ms</span> across all regions.
    </p>
  </div>
</div>`,
          },
        ],
      },
      {
        heading: "Avoiding 'Div Soup' & Best Semantic Practices",
        content: [
          {
            type: "list",
            items: [
              " Prioritize Semantic Elements: Use <header>, <nav>, <main>, <article>, <section>, and <footer> whenever the content fits those roles. Overusing generic <div> elements (termed 'Div Soup') harms SEO and screen reader accessibility.",
              " Avoid Redundant Div Nesting: Do not wrap a single heading or paragraph inside an extra <div> if that <div> does not provide dedicated layout utility.",
              " Reserve Span for Micro-Styling: If inline text carries genuine importance or emphasis, prefer <strong>, <em>, or <mark>; reserve <span> for purely visual modifications like custom colors or font styling.",
            ],
          },
        ],
      },
    ],
    conclusion:
      "The <div> and <span> elements serve as essential generic scaffolding for modern frontend development. Knowing when to use <div> for macro component grouping and <span> for inline phrase highlighting—while avoiding excessive non-semantic nesting—ensures clean, maintainable, and highly performant web applications.",
  },
  // ================= TOPIC 15: HTML SEMANTIC ELEMENTS =================
  {
    id: "html-semantic-elements",
    title: "HTML Semantic Elements",
    subjectCode: "html",
    intro:
      "Semantic HTML elements clearly communicate their purpose and meaning to both the browser rendering engine and human developers. Introduced as a primary pillar of HTML5, semantic layout landmarks replace meaningless generic <div> wrappers with expressive structural containers like <header>, <nav>, <main>, <article>, <section>, and <footer>. Writing semantic markup drastically improves web accessibility (a11y), streamlines assistive device navigation, and optimizes search engine indexing algorithms.",
    sections: [
      {
        heading: "What are Semantic Elements & Why They Matter",
        content: [
          {
            type: "text",
            value:
              "A semantic element conveys the explicit nature of the content enclosed within it (e.g., <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;article&gt;</code>). Non-semantic tags like <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code> are purely neutral buckets that declare nothing about their structural role.",
          },
          {
            type: "list",
            items: [
              " Built-In Accessibility (a11y): Screen readers recognize semantic tags as landmarks, allowing visually impaired users to jump directly between primary navigation, main editorial copy, and footers using shortcut keys.",
              " Search Engine Optimization (SEO): Web spiders (such as Googlebot) assign higher thematic weight to content framed inside <article> and <main> tags, boosting topic relevance.",
              " Developer Efficiency: Codebases written with semantic landmarks are dramatically easier to scan, debug, and maintain than deeply nested 'div soup'.",
              " Responsive Adaptation: Semantic tags provide predictable structure for browser Reader Modes, converting busy web pages into distraction-free reading views.",
            ],
          },
        ],
      },
      {
        heading: "Core Document Landmarks: Header, Nav, Main, and Footer",
        content: [
          {
            type: "text",
            value:
              "Modern web architecture organizes a document into well-defined global landmark regions:",
          },
          {
            type: "list",
            items: [
              " <header>: Introduces a page or section, housing branding logos, top-level headings, or search bars.",
              " <nav>: Identifies major navigation link blocks (primary menus, breadcrumbs, pagination).",
              " <main>: Encloses the unique, central content of the document. Each page must contain only one visible <main> element.",
              " <footer>: Concludes a page or article, containing copyright notices, sitemaps, legal disclaimers, and author links.",
            ],
          },
          {
            type: "text",
            value: "<strong>Syntax Blueprint:</strong>",
          },
          {
            type: "code",
            value: `<header>
  <h1>Site Identity</h1>
  <nav>
    <a href="#home">Home</a>
    <a href="#docs">Docs</a>
  </nav>
</header>
<main>
  <!-- Primary unique page content -->
</main>
<footer>
  <p>&copy; 2026 Developer Portal</p>
</footer>`,
          },
        ],
      },
      {
        heading: "Content Partitioning: Section, Article, and Aside",
        content: [
          {
            type: "text",
            value:
              "Inside the primary <code>&lt;main&gt;</code> container, HTML provides specialized elements to separate independent content from thematic sections and secondary sidebars:",
          },
          {
            type: "list",
            items: [
              " <article>: A self-contained, independently distributable entity that could stand alone in an RSS feed or syndication reader (e.g., blog post, news report, product card).",
              " <section>: A thematic grouping of content, typically introduced by its own heading tag (e.g., features section, customer reviews, contact details).",
              " <aside>: Content tangentially related to the main topic, such as sidebars, callout boxes, glossaries, or advertising slots.",
            ],
          },
          {
            type: "text",
            value: "<strong>Runnable Example: Semantic Layout & Disclosure Accordion:</strong>",
          },
          {
            type: "code",
            value: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Semantic Elements Demo</title>
</head>
<body>

  <!-- Top-Level Semantic Header -->
  <header style="border-bottom: 2px solid #0284c7; padding-bottom: 10px; margin-bottom: 16px;">
    <h2 style="margin: 0; color: #0f172a;">Engineering Journal</h2>
    <nav style="margin-top: 8px;">
      <a href="#" style="color: #0284c7; text-decoration: none; font-weight: 600; margin-right: 12px;">Articles</a>
      <a href="#" style="color: #64748b; text-decoration: none;">Tutorials</a>
    </nav>
  </header>

  <!-- Main Landmark with Article and Section -->
  <main>
    <article style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; margin-bottom: 16px;">
      <header>
        <h3 style="margin: 0 0 4px 0; color: #0f172a;">Building for Web Accessibility</h3>
        <small style="color: #64748b;">Published on September 10, 2026</small>
      </header>
      <p style="color: #334155; font-size: 14px; line-height: 1.6;">
        Semantic landmarks give assistive software clear navigation paths across complex interfaces.
      </p>
      
      <!-- Interactive Semantic Disclosure -->
      <details style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 4px; padding: 8px; margin-top: 10px;">
        <summary style="font-weight: 600; cursor: pointer; color: #0284c7;">Frequently Asked Questions</summary>
        <p style="margin: 8px 0 0 0; font-size: 13px; color: #475569;">
          Native details and summary elements build accessible accordions without requiring custom JavaScript.
        </p>
      </details>
    </article>
  </main>

  <!-- Semantic Footer -->
  <footer style="border-top: 1px solid #e2e8f0; padding-top: 8px; font-size: 12px; color: #64748b;">
    <p style="margin: 0;">&copy; 2026 Engineering Journal. All rights reserved.</p>
  </footer>

</body>
</html>`,
          },
          {
            type: "text",
            value: "<strong>Output:</strong>",
          },
          {
            type: "text",
            value: `<div style="font-family: sans-serif; background: #ffffff; padding: 20px; border: 1px solid #cbd5e1; border-radius: 8px; box-sizing: border-box;">
  <header style="border-bottom: 2px solid #0284c7; padding-bottom: 10px; margin-bottom: 16px;">
    <h2 style="margin: 0; font-size: 20px; color: #0f172a;">Engineering Journal</h2>
    <nav style="margin-top: 8px;">
      <a href="#" style="color: #0284c7; text-decoration: none; font-weight: 600; margin-right: 12px; font-size: 13px;">Articles</a>
      <a href="#" style="color: #64748b; text-decoration: none; font-size: 13px;">Tutorials</a>
    </nav>
  </header>

  <main>
    <article style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; margin-bottom: 16px;">
      <header>
        <h3 style="margin: 0 0 4px 0; color: #0f172a; font-size: 16px;">Building for Web Accessibility</h3>
        <small style="color: #64748b; font-size: 12px;">Published on September 10, 2026</small>
      </header>
      <p style="color: #334155; font-size: 14px; line-height: 1.6; margin: 8px 0;">
        Semantic landmarks give assistive software clear navigation paths across complex interfaces.
      </p>
      
      <details style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 4px; padding: 8px; margin-top: 10px;">
        <summary style="font-weight: 600; cursor: pointer; color: #0284c7; font-size: 13px;">Frequently Asked Questions</summary>
        <p style="margin: 8px 0 0 0; font-size: 13px; color: #475569; line-height: 1.5;">
          Native details and summary elements build accessible accordions without requiring custom JavaScript.
        </p>
      </details>
    </article>
  </main>

  <footer style="border-top: 1px solid #e2e8f0; padding-top: 8px; font-size: 12px; color: #64748b;">
    <p style="margin: 0;">&copy; 2026 Engineering Journal. All rights reserved.</p>
  </footer>
</div>`,
          },
        ],
      },
      {
        heading: "Best Practices & Common Semantic Traps",
        content: [
          {
            type: "list",
            items: [
              " Do Not Confuse <section> with <div>: Use <section> only when grouping content that shares a common theme and begins with a heading tag. For purely visual layout wrappers (e.g., centering shells or flex containers), use a plain <div>.",
              " Maintain One <main> Landmark: Avoid placing multiple <main> elements on a single page, as this confuses screen reader landmark parsers.",
              " Nesting <header> and <footer>: Beyond the root page level, <article> and <section> tags can also feature their own internal <header> and <footer> elements for author attribution and meta badges.",
            ],
          },
        ],
      },
    ],
    conclusion:
      "Semantic HTML tags like <header>, <nav>, <main>, <article>, and <footer> form the foundation of accessible and well-indexed web layouts. Replacing generic divisions with intentional structural landmarks guarantees your content is understandable to search engine crawlers, assistive devices, and fellow developers.",
  },

  // ================= TOPIC 16: HTML FORMS =================
  {
    id: "html-forms",
    title: "HTML Forms",
    subjectCode: "html",
    intro:
      "HTML forms are the core mechanism for capturing user input and transmitting data to web servers. Whether processing authentication credentials, search queries, payment checkouts, or survey responses, the <form> element orchestrates input controls, interactive selections, form validation, and server dispatch protocols.",
    sections: [
      {
        heading: "The <form> Element & Core Attributes",
        content: [
          {
            type: "text",
            value:
              "The <code>&lt;form&gt;</code> element wraps interactive input controls, defining the destination server endpoint and the communication protocol used to transmit the input payload.",
          },
          {
            type: "list",
            items: [
              " action: The target URL or API endpoint responsible for receiving and processing form data upon submission.",
              " method: Specifies the HTTP request method, primarily GET (appends data into URL query parameters) or POST (embeds data securely within the HTTP request body).",
              " target: Dictates where to render server response data (_self, _blank).",
              " autocomplete: Configures automated browser credential or profile completion (on, off).",
              " enctype: Declares MIME encoding for submitted data; mandatory as 'multipart/form-data' whenever forms include binary file uploads.",
            ],
          },
          {
            type: "text",
            value: "<strong>Syntax Blueprint:</strong>",
          },
          {
            type: "code",
            value: `<form action="/api/v1/submit" method="POST">
  <!-- Interactive Form Controls -->
</form>`,
          },
        ],
      },
      {
        heading: "Core Form Controls: Label, Textarea, Select, and Fieldset",
        content: [
          {
            type: "text",
            value:
              "Forms rely on a diverse family of interactive elements to capture different data formats cleanly:",
          },
          {
            type: "list",
            items: [
              " <label>: Binds human-readable text to an input field via matching the 'for' attribute with the input's 'id'. Expands clickable hit-box areas for touchscreens and enables screen reader announcements.",
              " <textarea>: Generates a multi-line, scrollable plain-text editor with customizable rows and columns.",
              " <select> & <option>: Builds drop-down selection menus, supporting single-choice or multi-choice values.",
              " <fieldset> & <legend>: Semantically and visually clusters related inputs (e.g., Shipping Address vs. Billing Info) with an embedded caption.",
              " <button>: Standard submission trigger when configured with type='submit'.",
            ],
          },
        ],
      },
      {
        heading: "HTTP Methods: GET vs. POST",
        content: [
          {
            type: "list",
            items: [
              " GET Method: Serializes inputs into the browser URL (e.g., /search?query=html). Intended strictly for idempotent, read-only operations like search queries. Never use GET for passwords or sensitive data.",
              " POST Method: Transmits payload data privately inside the HTTP request body. Mandatory for passwords, payment details, sensitive records, and state-changing actions.",
              " Name Attribute Rule: Any input lacking an explicit 'name' attribute will be ignored during form submission, preventing its value from reaching the server.",
            ],
          },
          {
            type: "text",
            value: "<strong>Runnable Example: Structured Support Request Form:</strong>",
          },
          {
            type: "code",
            value: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Forms Demo</title>
</head>
<body>

  <form action="/submit-ticket" method="POST" style="font-family: sans-serif; max-width: 380px;">
    
    <fieldset style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; background-color: #f8fafc;">
      <legend style="font-weight: 700; color: #0f172a; padding: 0 6px;">Support Ticket</legend>

      <!-- Text Input with Explicit Label -->
      <label for="user-email" style="display: block; font-size: 13px; font-weight: 600; color: #334155; margin-bottom: 4px;">Email Address:</label>
      <input type="email" id="user-email" name="email" required placeholder="user@example.com" style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 4px; box-sizing: border-box; margin-bottom: 12px; font-size: 14px;">

      <!-- Dropdown Selection -->
      <label for="ticket-department" style="display: block; font-size: 13px; font-weight: 600; color: #334155; margin-bottom: 4px;">Department:</label>
      <select id="ticket-department" name="department" style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 4px; box-sizing: border-box; margin-bottom: 12px; font-size: 14px; background: #ffffff;">
        <option value="billing">Billing & Subscriptions</option>
        <option value="technical">Technical Support</option>
      </select>

      <!-- Multi-line Text Area -->
      <label for="ticket-msg" style="display: block; font-size: 13px; font-weight: 600; color: #334155; margin-bottom: 4px;">Issue Details:</label>
      <textarea id="ticket-msg" name="message" rows="3" placeholder="Describe your issue..." style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 4px; box-sizing: border-box; margin-bottom: 14px; font-size: 14px; font-family: sans-serif;"></textarea>

      <!-- Submit Action -->
      <button type="submit" style="background-color: #0284c7; color: #ffffff; border: none; padding: 9px 18px; border-radius: 4px; font-weight: 600; cursor: pointer; font-size: 14px;">
        Submit Ticket &rarr;
      </button>

    </fieldset>

  </form>

</body>
</html>`,
          },
          {
            type: "text",
            value: "<strong>Output:</strong>",
          },
          {
            type: "text",
            value: `<div style="font-family: sans-serif; background: #ffffff; padding: 20px; border: 1px solid #cbd5e1; border-radius: 8px; box-sizing: border-box; max-width: 420px;">
  <form style="margin: 0;">
    <fieldset style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; background-color: #f8fafc;">
      <legend style="font-weight: 700; color: #0f172a; padding: 0 6px; font-size: 15px;">Support Ticket</legend>

      <label for="preview-user-email" style="display: block; font-size: 13px; font-weight: 600; color: #334155; margin-bottom: 4px;">Email Address:</label>
      <input type="email" id="preview-user-email" placeholder="user@example.com" style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 4px; box-sizing: border-box; margin-bottom: 12px; font-size: 14px; background-color: #ffffff;">

      <label for="preview-department" style="display: block; font-size: 13px; font-weight: 600; color: #334155; margin-bottom: 4px;">Department:</label>
      <select id="preview-department" style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 4px; box-sizing: border-box; margin-bottom: 12px; font-size: 14px; background: #ffffff;">
        <option value="billing">Billing & Subscriptions</option>
        <option value="technical">Technical Support</option>
      </select>

      <label for="preview-msg" style="display: block; font-size: 13px; font-weight: 600; color: #334155; margin-bottom: 4px;">Issue Details:</label>
      <textarea id="preview-msg" rows="3" placeholder="Describe your issue..." style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 4px; box-sizing: border-box; margin-bottom: 14px; font-size: 14px; font-family: sans-serif; background-color: #ffffff;"></textarea>

      <button type="button" style="background-color: #0284c7; color: #ffffff; border: none; padding: 9px 18px; border-radius: 4px; font-weight: 600; cursor: pointer; font-size: 14px;">
        Submit Ticket &rarr;
      </button>
    </fieldset>
  </form>
</div>`,
          },
        ],
      },
    ],
    conclusion:
      "HTML forms represent the cornerstone of interactive web applications. By pairing structural <form>, <fieldset>, and <legend> tags with accessible <label> elements and selecting the appropriate HTTP method, developers create reliable, secure, and user-friendly data collection interfaces.",
  },
 // ================= TOPIC 17: HTML FORM ATTRIBUTES =================
  {
    id: "html-form-attributes",
    title: "HTML Form Attributes",
    subjectCode: "html",
    intro:
      "HTML form attributes configure the transmission, security, encoding, and client-side behavior of the <form> container. By leveraging attributes like action, method, enctype, novalidate, and target, developers dictate precisely how user payloads are prepared, encoded, validated, and dispatched to backend processing endpoints.",
    sections: [
      {
        heading: "Core Submission Attributes: action & method",
        content: [
          {
            type: "text",
            value:
              "The operational foundation of any HTML form relies on <code>action</code> and <code>method</code>, which designate the target server endpoint and the HTTP verb governing the request pipeline.",
          },
          {
            type: "list",
            items: [
              " action: Specifies the URI where collected data is sent. If omitted, the browser defaults to submitting the payload back to the current page URL.",
              " method='get': Serializes form controls into URL query string parameters (e.g., /search?q=syntax). Ideal for idempotent read queries that can be bookmarked and cached, but strictly unsuitable for private or sensitive credentials.",
              " method='post': Packs data inside the HTTP request body. Mandatory for passwords, payment gateways, and database mutation actions, keeping payloads out of browser histories and URL address bars.",
            ],
          },
          {
            type: "text",
            value: "<strong>Syntax Pattern:</strong>",
          },
          {
            type: "code",
            value: `<form action="/api/v1/auth" method="post">
  <!-- Interactive elements -->
</form>`,
          },
        ],
      },
      {
        heading: "Data Encoding & Transmission: The enctype Attribute",
        content: [
          {
            type: "text",
            value:
              "The <code>enctype</code> attribute specifies the MIME type used to encode payload data when submitting via the <code>post</code> method.",
          },
          {
            type: "list",
            items: [
              " application/x-www-form-urlencoded: The default encoding standard. Converts special symbols to hex pairs and spaces to '+' symbols.",
              " multipart/form-data: Mandatory whenever the form contains file uploads (<input type='file'>); packages binary file data in separate multi-part MIME boundaries without character distortion.",
              " text/plain: Sends data in raw, unencoded plain text; used primarily for low-level network debugging.",
            ],
          },
        ],
      },
      {
        heading: "Validation, Autocomplete & Target Controls",
        content: [
          {
            type: "text",
            value:
              "The <code>&lt;form&gt;</code> container supports several behavioral flags to tailor client validation and browser assistance:",
          },
          {
            type: "list",
            items: [
              " novalidate: A boolean attribute instructing the browser parser to bypass native client-side validation checks before dispatching the payload.",
              " autocomplete: Directs the browser engine to suggest saved form entries ('on' or 'off').",
              " target: Identifies the browsing context or window frame used to render the server response (_self, _blank, _top, _parent).",
              " rel: Establishes security constraints when targeting secondary browsing contexts (e.g., rel='noopener noreferrer' when paired with target='_blank').",
            ],
          },
          {
            type: "text",
            value: "<strong>Runnable Example: Multi-Action Form with Button Overrides:</strong>",
          },
          {
            type: "code",
            value: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Form Attributes Demo</title>
</head>
<body>

  <form action="/publish" method="post" autocomplete="off" style="font-family: sans-serif; max-width: 400px;">
    
    <div style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px;">
      <label for="post-title" style="display: block; font-size: 13px; font-weight: 600; color: #334155; margin-bottom: 4px;">Article Title:</label>
      <input type="text" id="post-title" name="title" required placeholder="Enter article headline" style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 4px; box-sizing: border-box; margin-bottom: 14px; font-size: 14px;">

      <!-- Primary Submit Button -->
      <button type="submit" style="background-color: #0284c7; color: #ffffff; border: none; padding: 8px 16px; border-radius: 4px; font-weight: 600; cursor: pointer; margin-right: 8px;">
        Publish Post
      </button>

      <!-- Secondary Submit Button Overriding Action & Validation -->
      <button type="submit" formaction="/drafts" formnovalidate style="background-color: #f1f5f9; color: #334155; border: 1px solid #cbd5e1; padding: 8px 14px; border-radius: 4px; font-weight: 600; cursor: pointer;">
        Save Draft
      </button>
    </div>

  </form>

</body>
</html>`,
          },
          {
            type: "text",
            value: "<strong>Output:</strong>",
          },
          {
            type: "text",
            value: `<div style="font-family: sans-serif; background: #ffffff; padding: 20px; border: 1px solid #cbd5e1; border-radius: 8px; box-sizing: border-box; max-width: 440px;">
  <form style="margin: 0;">
    <div style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px;">
      <label for="demo-post-title" style="display: block; font-size: 13px; font-weight: 600; color: #334155; margin-bottom: 4px;">Article Title:</label>
      <input type="text" id="demo-post-title" placeholder="Enter article headline" style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 4px; box-sizing: border-box; margin-bottom: 14px; font-size: 14px; background: #ffffff;">
      <button type="button" style="background-color: #0284c7; color: #ffffff; border: none; padding: 8px 16px; border-radius: 4px; font-weight: 600; cursor: pointer; margin-right: 8px; font-size: 13px;">
        Publish Post
      </button>
      <button type="button" style="background-color: #ffffff; color: #334155; border: 1px solid #cbd5e1; padding: 8px 14px; border-radius: 4px; font-weight: 600; cursor: pointer; font-size: 13px;">
        Save Draft
      </button>
    </div>
  </form>
</div>`,
          },
        ],
      },
      {
        heading: "Button-Level Form Submission Overrides",
        content: [
          {
            type: "text",
            value:
              "HTML allows individual submit buttons to override the configuration rules declared on the parent <code>&lt;form&gt;</code> container using dedicated <code>form*</code> attributes:",
          },
          {
            type: "list",
            items: [
              " formaction: Redirects submission to an alternative endpoint URL specifically for that trigger.",
              " formmethod: Changes the request method (e.g., swapping a form's default POST to a GET request).",
              " formenctype: Overrides the designated MIME encoding type for that specific button click.",
              " formnovalidate: Completely suppresses constraint validation (indispensable for 'Save Draft' or 'Cancel' triggers).",
              " formtarget: Overrides the parent form's target window destination.",
            ],
          },
        ],
      },
    ],
    conclusion:
      "Configuring container-level attributes on an HTML form guarantees that payloads reach their intended backend endpoints securely, safely, and in the expected encoding format. Utilizing button-level overrides and flags like novalidate grants fine-grained authority over complex, multi-stage submission workflows.",
  },

  // ================= TOPIC 18: HTML INPUT TYPES =================
  {
    id: "html-input-types",
    title: "HTML Input Types",
    subjectCode: "html",
    intro:
      "The <input> element is the most versatile and fundamental interactive control in HTML. Controlled by its 'type' attribute, it morphs functionally and visually to capture alphanumeric text, masked passwords, numerical ranges, calendar dates, operating-system color palettes, and binary disk files. Selecting the correct input type enhances mobile usability by launching device-optimized virtual keyboards and enforcing native client-side validation.",
    sections: [
      {
        heading: "Textual, Secure & Communication Inputs",
        content: [
          {
            type: "text",
            value:
              "Text-based input variants capture string entries. HTML5 introduces dedicated semantic subtypes that trigger specialized touch keypads and validate structural formats automatically before dispatch.",
          },
          {
            type: "list",
            items: [
              " text: The standard, single-line plain text entry control.",
              " password: Masks typed characters with dots or asterisks, protecting sensitive passphrases from shoulder-surfing.",
              " email: Enforces standard email syntax (requiring an '@' symbol and domain) and surfaces an '@'-optimized virtual keyboard on touch devices.",
              " url: Requires absolute protocol prefixes (such as https://) and validates link format integrity.",
              " tel: Optimized for phone numbers; automatically brings up a telephone dialpad on mobile devices without enforcing rigid character restrictions.",
              " search: Designed for search inputs; modern browsers often inject an inline clear icon ('x') to purge text quickly.",
            ],
          },
        ],
      },
      {
        heading: "Numeric, Range, and Temporal Pickers",
        content: [
          {
            type: "text",
            value:
              "Modern HTML provides native graphical controls for quantities, sliders, calendar dates, and color selection without requiring external JavaScript widgets:",
          },
          {
            type: "list",
            items: [
              " number: Restricts input strictly to numerical digits; supports step increments along with min and max bounds.",
              " range: Displays a draggable slider widget for selecting approximate numerical values within declared minimum and maximum limits.",
              " date & time: Displays native calendar and clock widgets, eliminating the need for bulky JavaScript datepicker plugins.",
              " color: Activates the host operating system's native color picker palette, returning a standard 7-character hexadecimal string (#rrggbb).",
            ],
          },
        ],
      },
      {
        heading: "Selection, File, and Action Triggers",
        content: [
          {
            type: "list",
            items: [
              " checkbox: Toggles a binary checked state; allows multiple independent selections within the same form.",
              " radio: Restricts choices to a single mutually exclusive option within a group sharing the exact same 'name' attribute.",
              " file: Launches local operating system file-browsing dialogs, optionally restricted via the 'accept' attribute.",
              " hidden: Stores non-visual variables (such as CSRF security tokens, transaction IDs, or user IDs) passed silently with the submission payload.",
            ],
          },
          {
            type: "text",
            value: "<strong>Runnable Example: Multi-Input Control Showcase:</strong>",
          },
          {
            type: "code",
            value: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Input Types Demo</title>
</head>
<body>

  <form style="font-family: sans-serif; max-width: 360px; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px;">
    
    <!-- Email with mobile keyboard optimization -->
    <label for="demo-email" style="display: block; font-size: 13px; font-weight: 600; color: #334155; margin-bottom: 4px;">User Account Email:</label>
    <input type="email" id="demo-email" name="email" placeholder="alex@domain.com" required style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 4px; box-sizing: border-box; margin-bottom: 12px; font-size: 14px;">

    <!-- Range Slider with Step Values -->
    <label for="demo-range" style="display: block; font-size: 13px; font-weight: 600; color: #334155; margin-bottom: 4px;">Satisfaction Score (1-10):</label>
    <input type="range" id="demo-range" name="score" min="1" max="10" value="8" style="width: 100%; margin-bottom: 14px;">

    <!-- Color and Checkbox Controls -->
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px;">
      <label for="demo-color" style="font-size: 13px; font-weight: 600; color: #334155;">Accent Color:</label>
      <input type="color" id="demo-color" name="theme_color" value="#0284c7" style="border: none; width: 36px; height: 32px; cursor: pointer;">
    </div>

    <label style="display: flex; align-items: center; gap: 8px; font-size: 13px; color: #334155; margin-bottom: 14px; cursor: pointer;">
      <input type="checkbox" name="newsletter" checked>
      Subscribe to weekly developer updates
    </label>

    <button type="submit" style="background-color: #0284c7; color: #ffffff; border: none; padding: 9px 18px; border-radius: 4px; font-weight: 600; cursor: pointer; font-size: 14px; width: 100%;">
      Save Preferences
    </button>

  </form>

</body>
</html>`,
          },
          {
            type: "text",
            value: "<strong>Output:</strong>",
          },
          {
            type: "text",
            value: `<div style="font-family: sans-serif; background: #ffffff; padding: 20px; border: 1px solid #cbd5e1; border-radius: 8px; box-sizing: border-box; max-width: 400px;">
  <form style="margin: 0;">
    <label for="preview-input-email" style="display: block; font-size: 13px; font-weight: 600; color: #334155; margin-bottom: 4px;">User Account Email:</label>
    <input type="email" id="preview-input-email" placeholder="alex@domain.com" style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 4px; box-sizing: border-box; margin-bottom: 12px; font-size: 14px; background: #ffffff;">

    <label for="preview-input-range" style="display: block; font-size: 13px; font-weight: 600; color: #334155; margin-bottom: 4px;">Satisfaction Score (1-10):</label>
    <input type="range" id="preview-input-range" min="1" max="10" value="8" style="width: 100%; margin-bottom: 14px;">

    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px;">
      <span style="font-size: 13px; font-weight: 600; color: #334155;">Accent Color:</span>
      <input type="color" value="#0284c7" style="border: none; width: 36px; height: 32px; cursor: pointer; background: none;">
    </div>

    <label style="display: flex; align-items: center; gap: 8px; font-size: 13px; color: #334155; margin-bottom: 14px; cursor: pointer;">
      <input type="checkbox" checked>
      Subscribe to weekly developer updates
    </label>

    <button type="button" style="background-color: #0284c7; color: #ffffff; border: none; padding: 9px 18px; border-radius: 4px; font-weight: 600; cursor: pointer; font-size: 14px; width: 100%;">
      Save Preferences
    </button>
  </form>
</div>`,
          },
        ],
      },
    ],
    conclusion:
      "Selecting the appropriate input type optimizes the mobile keyboard presentation, triggers automated client-side format checks, and activates browser-native widgets for pickers and sliders, decreasing reliance on heavy external UI dependencies.",
  },
 
 // ================= TOPIC 20: HTML MEDIA AUDIO AND VIDEO =================
  {
    id: "html-media-audio-and-video",
    title: "HTML Media (Audio & Video)",
    subjectCode: "html",
    intro:
      "HTML5 introduced native multimedia playback directly into web browsers through the <audio> and <video> elements, eliminating historical dependencies on proprietary, security-vulnerable plugins like Adobe Flash. Modern web applications stream podcasts, high-definition videos, animated UI backgrounds, and sound cues natively with fine-grained control over buffering, accessibility captions via WebVTT tracks, and cross-codec fallback pipelines.",
    sections: [
      {
        heading: "The <audio> Element: Native Sound Playback",
        content: [
          {
            type: "text",
            value:
              "The <code>&lt;audio&gt;</code> element embeds audio resources directly into the document. Browsers provide built-in playback interfaces equipped with play/pause triggers, progress seekbars, volume adjustments, and playback speed toggles.",
          },
          {
            type: "list",
            items: [
              " controls: Renders the browser's native audio interface toolbar.",
              " autoplay: Initiates playback automatically as soon as sufficient data buffers (modern browsers restrict autoplay unless muted).",
              " loop: Automatically restarts audio playback from the beginning once it concludes.",
              " muted: Sets initial playback state to silent.",
              " preload: Directs browser buffering strategy ('none' saves bandwidth, 'metadata' downloads track duration/dimensions, 'auto' buffers immediately).",
            ],
          },
          {
            type: "text",
            value: "<strong>Syntax Blueprint:</strong>",
          },
          {
            type: "code",
            value: `<audio controls preload="metadata">
  <source src="audio-track.mp3" type="audio/mpeg">
  <source src="audio-track.ogg" type="audio/ogg">
  Your browser does not support native audio playback.
</audio>`,
          },
        ],
      },
      {
        heading: "The <video> Element: Direct Video Streaming",
        content: [
          {
            type: "text",
            value:
              "The <code>&lt;video&gt;</code> element displays motion pictures, animations, and video streams. Supplying explicit dimensions prevents Cumulative Layout Shift (CLS) as video buffers load.",
          },
          {
            type: "list",
            items: [
              " poster: Displays a custom placeholder graphic until the user initiates video playback.",
              " width & height: Sets the player's intrinsic pixel canvas dimensions, preventing visual layout jumping.",
              " playsinline: Critical mobile attribute that plays video directly inside document flow rather than forcing OS full-screen mode.",
              " Standard Video Codecs: MP4 (H.264/AAC for universal compatibility) and WebM (VP9/AV1 for efficient modern compression).",
            ],
          },
        ],
      },
      {
        heading: "Multi-Source Fallbacks & Subtitles with <track>",
        content: [
          {
            type: "text",
            value:
              "Different browsers support different audio and video codecs. Supplying multiple nested <code>&lt;source&gt;</code> tags ensures cross-browser compatibility. To comply with digital accessibility standards, the <code>&lt;track&gt;</code> tag embeds timed subtitles and captions formatted in WebVTT (.vtt).",
          },
          {
            type: "list",
            items: [
              " kind: Declares track purpose ('subtitles', 'captions', 'descriptions', 'chapters').",
              " srclang: Two-letter ISO language code (e.g., 'en', 'hi', 'es').",
              " label: Human-readable title displayed in the player's closed-caption menu.",
              " default: Designates the primary subtitle track enabled automatically.",
            ],
          },
          {
            type: "text",
            value: "<strong>Runnable Example: Responsive Multimedia Player:</strong>",
          },
          {
            type: "code",
            value: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Media Showcase</title>
</head>
<body>

  <!-- Audio Player Container -->
  <div style="font-family: sans-serif; max-width: 480px; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px;">
    <h3 style="margin: 0 0 8px 0; font-size: 16px; color: #0f172a;">Product Demo Podcast</h3>
    <p style="margin: 0 0 12px 0; font-size: 13px; color: #64748b;">Episode 1: The Architecture of HTML5 Native Media</p>
    
    <!-- Native Audio Player with Multi-Source Fallbacks -->
    <audio controls style="width: 100%; margin-bottom: 16px;">
      <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg">
      <source src="https://www.w3schools.com/html/horse.ogg" type="audio/ogg">
      Your browser does not support audio playback.
    </audio>

    <!-- Native Video Player with Subtitle Track -->
    <video width="100%" height="auto" controls style="border-radius: 6px; display: block; background: #0f172a;">
      <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
      <track kind="captions" src="captions_en.vtt" srclang="en" label="English" default>
      Your browser does not support native video playback.
    </video>
  </div>

</body>
</html>`,
          },
          {
            type: "text",
            value: "<strong>Output:</strong>",
          },
          {
            type: "text",
            value: `<div style="font-family: sans-serif; background: #ffffff; padding: 20px; border: 1px solid #cbd5e1; border-radius: 8px; box-sizing: border-box; max-width: 500px;">
  <h3 style="margin: 0 0 6px 0; font-size: 16px; color: #0f172a;">Product Demo Podcast</h3>
  <p style="margin: 0 0 12px 0; font-size: 13px; color: #64748b;">Episode 1: The Architecture of HTML5 Native Media</p>
  
  <audio controls style="width: 100%; margin-bottom: 14px;">
    <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg">
    Your browser does not support audio playback.
  </audio>

  <video width="100%" height="200" controls style="border-radius: 6px; display: block; background-color: #0f172a;">
    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
    Your browser does not support native video playback.
  </video>
</div>`,
          },
        ],
      },
      {
        heading: "Autoplay Policies & Performance Best Practices",
        content: [
          {
            type: "list",
            items: [
              " Autoplay Browser Policies: Browsers block unmuted autoplay media to conserve user bandwidth and prevent startling noise. Ambient background videos must declare both attributes: <video autoplay muted loop playsinline>.",
              " Lazy Loading Strategy: Keep preload='none' or preload='metadata' on non-critical media assets so mobile visitors do not expend bandwidth downloading megabytes of audio or video data prior to hitting play.",
              " Codec Accessibility: Always supply MP4 as a universal baseline, alongside WebM for browsers that support optimized open-source VP9/AV1 encoding.",
            ],
          },
        ],
      },
    ],
    conclusion:
      "Native HTML5 <audio> and <video> elements deliver fast, plugin-free multimedia experiences. By layering responsive dimensioning, multi-codec source fallbacks, and accessible <track> captions, developers build engaging, inclusive media experiences optimized across modern devices.",
  },

  // ================= TOPIC 21: HTML IFRAMES =================
  {
    id: "html-iframes",
    title: "HTML Iframes",
    subjectCode: "html",
    intro:
      "An HTML iframe (Inline Frame) embeds another completely independent HTML browsing context directly inside the parent web document. Declared via the <iframe> tag, iframes are the industry standard for embedding third-party widgets, interactive Google Maps, YouTube video embeds, payment merchant gateways, and isolated sandboxed code execution environments.",
    sections: [
      {
        heading: "The <iframe> Element & Core Attributes",
        content: [
          {
            type: "text",
            value:
              "An iframe establishes an isolated document browsing context. Text or tags placed between opening <code>&lt;iframe&gt;</code> and closing <code>&lt;/iframe&gt;</code> tags act as fallback content for older environments that do not support inline frames.",
          },
          {
            type: "list",
            items: [
              " src: The URL address of the external web resource or document to embed.",
              " title: Mandatory accessibility attribute describing frame contents for screen reader users.",
              " width & height: Declares display dimensions in CSS pixels or percentages (default is 300x150px).",
              " loading='lazy': Defers frame downloading until the iframe approaches the user's viewport, improving initial page load speeds.",
            ],
          },
          {
            type: "text",
            value: "<strong>Syntax Pattern:</strong>",
          },
          {
            type: "code",
            value: `<iframe src="https://example.com" title="External Document Preview" width="100%" height="300" loading="lazy">
  Fallback link for unsupported browsers.
</iframe>`,
          },
        ],
      },
      {
        heading: "Hardening Security with the sandbox Attribute",
        content: [
          {
            type: "text",
            value:
              "Embedding untrusted third-party content introduces severe security vulnerabilities like cross-site scripting (XSS), phishing, and clickjacking. The <code>sandbox</code> attribute imposes strict security constraints on the framed document.",
          },
          {
            type: "list",
            items: [
              " sandbox (empty): Enforces maximum restrictions; disables JavaScript execution, prevents form submissions, blocks popups, prevents parent navigation, and isolates origins.",
              " allow-scripts: Selectively allows the embedded frame to execute JavaScript.",
              " allow-same-origin: Allows the frame to access its own cookies, local storage, and same-origin privileges.",
              " allow-forms: Re-enables form submissions inside the frame.",
              " allow-popups: Allows the frame to open new browsing tabs via target='_blank' or window.open().",
            ],
          },
        ],
      },
      {
        heading: "Hardware Permissions Policy with the allow Attribute",
        content: [
          {
            type: "text",
            value:
              "The <code>allow</code> attribute enforces a granular Permissions Policy, dictating which browser APIs and hardware capabilities the framed resource may access.",
          },
          {
            type: "list",
            items: [
              " allowfullscreen: A boolean attribute enabling the framed document to request full-screen mode (mandatory for video players).",
              " allow='camera; microphone': Controls access to hardware recording peripherals.",
              " allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture': Standard permission set required by streaming services like YouTube.",
            ],
          },
          {
            type: "text",
            value: "<strong>Runnable Example: Secure Sandboxed Iframe with Inline HTML:</strong>",
          },
          {
            type: "code",
            value: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Iframes Demo</title>
</head>
<body>

  <!-- Sandboxed Iframe using srcdoc for Safe Execution -->
  <div style="font-family: sans-serif; max-width: 480px; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px;">
    <h3 style="margin: 0 0 6px 0; font-size: 16px; color: #0f172a;">Isolated Execution Environment</h3>
    <p style="margin: 0 0 12px 0; font-size: 13px; color: #64748b;">
      The sandbox below runs inside an isolated browsing context, preventing it from executing unauthorized scripts on the parent page.
    </p>

    <iframe 
      title="Sandboxed Document Preview"
      srcdoc="<div style='font-family:sans-serif; padding:12px; background:#f0fdf4; border:1px solid #bbf7d0; border-radius:6px; color:#166534;'><h4 style='margin:0 0 4px 0;'>Sandboxed Sub-document</h4><p style='margin:0; font-size:13px;'>Rendered securely via the srcdoc attribute.</p></div>"
      sandbox="allow-same-origin"
      width="100%" 
      height="110" 
      loading="lazy"
      style="border: 1px solid #cbd5e1; border-radius: 6px; display: block;">
    </iframe>
  </div>

</body>
</html>`,
          },
          {
            type: "text",
            value: "<strong>Output:</strong>",
          },
          {
            type: "text",
            value: `<div style="font-family: sans-serif; background: #ffffff; padding: 20px; border: 1px solid #cbd5e1; border-radius: 8px; box-sizing: border-box; max-width: 500px;">
  <h3 style="margin: 0 0 6px 0; font-size: 16px; color: #0f172a;">Isolated Execution Environment</h3>
  <p style="margin: 0 0 12px 0; font-size: 13px; color: #64748b;">
    The sandbox below runs inside an isolated browsing context, preventing it from executing unauthorized scripts on the parent page.
  </p>

  <iframe 
    title="Sandboxed Document Preview"
    srcdoc="<div style='font-family:sans-serif; padding:12px; background:#f0fdf4; border:1px solid #bbf7d0; border-radius:6px; color:#166534;'><h4 style='margin:0 0 4px 0;'>Sandboxed Sub-document</h4><p style='margin:0; font-size:13px;'>Rendered securely via the srcdoc attribute.</p></div>"
    sandbox="allow-same-origin"
    width="100%" 
    height="110" 
    loading="lazy"
    style="border: 1px solid #cbd5e1; border-radius: 6px; display: block; box-sizing: border-box;">
  </iframe>
</div>`,
          },
        ],
      },
      {
        heading: "Best Practices for Accessibility and Security",
        content: [
          {
            type: "list",
            items: [
              " Always Include a Descriptive title: Screen readers announce the iframe's title to visually impaired users so they can choose whether to enter the embedded frame.",
              " Implement Least Privilege with sandbox: Never use allow-scripts together with allow-same-origin on untrusted user-uploaded HTML, as that combination allows embedded code to remove its own sandbox restrictions.",
              " Use loading='lazy' for Embedded Maps & Videos: Third-party iframes load external scripts, fonts, and assets; lazy loading prevents these heavy assets from degrading initial page speed.",
            ],
          },
        ],
      },
    ],
    conclusion:
      "HTML iframes provide a modular architecture for incorporating third-party services, web applications, and embedded media. Implementing sandbox restrictions, explicit allow permissions policies, and accessible title attributes ensures seamless third-party integration without compromising performance, privacy, or site security.",
  },

 // ================= TOPIC 22: HTML HEAD AND META =================
  {
    id: "html-head-and-meta",
    title: "HTML Head and Meta",
    subjectCode: "html",
    intro:
      "The <head> element serves as the configuration and metadata hub for an HTML document. Unlike the <body>, its contents are not rendered directly onto the visible browser canvas. Instead, the head houses machine-readable directives that govern character encoding, search engine indexing rules, responsive viewport constraints, social graph previews, and links to external assets like stylesheets, web fonts, and scripts.",
    sections: [
      {
        heading: "The <head> Element & Primary Child Tags",
        content: [
          {
            type: "text",
            value:
              "The <code>&lt;head&gt;</code> element is placed directly between the opening <code>&lt;html&gt;</code> tag and the <code>&lt;body&gt;</code> tag. It accepts a specific collection of configuration tags parsed by browser engines, social media crawlers, and search engine spiders.",
          },
          {
            type: "list",
            items: [
              " <title>: Sets the document title shown in browser tab bars, bookmark managers, and search engine results pages (SERPs).",
              " <meta>: Specifies machine-readable key-value pairs detailing character set, responsive scaling, author attribution, and search engine rules.",
              " <link>: Resolves external relationships such as CSS stylesheets, canonical URLs, preloaded fonts, and favicon icons.",
              " <style>: Embeds document-level internal CSS declarations directly inside the document.",
              " <script>: Loads external JavaScript files or executes inline client-side scripts (often configured with defer or async).",
              " <base>: Sets a universal base URL and target window for all relative hyperlinks throughout the document.",
            ],
          },
          {
            type: "text",
            value: "<strong>Syntax Blueprint:</strong>",
          },
          {
            type: "code",
            value: `<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Optimized Page Title</title>
  <link rel="stylesheet" href="styles.css">
</head>`,
          },
        ],
      },
      {
        heading: "Critical <meta> Tags for SEO & Viewports",
        content: [
          {
            type: "text",
            value:
              "The void <code>&lt;meta&gt;</code> tag defines structured metadata. Modern websites require a standardized baseline of meta declarations to guarantee proper unicode rendering, mobile viewport scaling, and search indexing.",
          },
          {
            type: "list",
            items: [
              " charset='UTF-8': Enforces UTF-8 character encoding, preventing mojibake errors and rendering international alphabets, emojis, and symbols cleanly.",
              " name='viewport': Sets width=device-width and initial-scale=1.0, instructing mobile rendering engines to match the physical screen width rather than zooming out to a 980px desktop canvas.",
              " name='description': Supplies a concise summary (150-160 characters) utilized by search engines as the display snippet beneath your search title.",
              " name='robots': Commands search engine bots whether to index the page and follow internal links (e.g., content='index, follow' or 'noindex, nofollow').",
              " http-equiv: Emulates HTTP response headers (e.g., http-equiv='refresh' content='30').",
            ],
          },
        ],
      },
      {
        heading: "Social Graph Metadata (Open Graph & Twitter Cards)",
        content: [
          {
            type: "text",
            value:
              "When URLs are shared across platforms like LinkedIn, Facebook, Discord, Slack, or X (Twitter), social scrapers inspect Open Graph (OG) and Twitter meta tags to build rich visual link previews.",
          },
          {
            type: "list",
            items: [
              " og:title: The bold headline rendered inside the social preview card.",
              " og:description: A 1-2 sentence synopsis accompanying the headline.",
              " og:image: The absolute URL of the high-resolution banner image (recommended 1200x630px).",
              " og:url: The canonical URL destination of the shared resource.",
              " twitter:card: Dictates card presentation, such as 'summary' or 'summary_large_image'.",
            ],
          },
          {
            type: "text",
            value: "<strong>Runnable Example: Production-Grade Head Setup with Rendered Card:</strong>",
          },
          {
            type: "code",
            value: `<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Character Set & Viewport -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Primary SEO Metadata -->
  <title>Frontend Architecture Guide</title>
  <meta name="description" content="Master HTML5 head metadata, Open Graph cards, and performance preloading.">
  <meta name="robots" content="index, follow">

  <!-- Open Graph / Social Sharing -->
  <meta property="og:title" content="Frontend Architecture Guide">
  <meta property="og:description" content="Master HTML5 head metadata, Open Graph cards, and performance preloading.">
  <meta property="og:image" content="https://example.com/social-cover.jpg">

  <!-- Internal Styling -->
  <style>
    .meta-status-card {
      font-family: sans-serif;
      background: #f8fafc;
      border: 1px solid #cbd5e1;
      border-left: 5px solid #0284c7;
      border-radius: 8px;
      padding: 18px;
      max-width: 440px;
    }
  </style>
</head>
<body>

  <div class="meta-status-card">
    <h3 style="margin: 0 0 6px 0; color: #0f172a; font-size: 17px;">Metadata Configured</h3>
    <p style="margin: 0 0 10px 0; font-size: 13px; color: #475569; line-height: 1.5;">
      The <code>&lt;head&gt;</code> coordinates character encoding, viewport scaling, 
      and social preview generation behind the scenes.
    </p>
    <small style="color: #0284c7; font-weight: bold;">UTF-8 &bull; Viewport Scale 1.0 &bull; Index/Follow</small>
  </div>

</body>
</html>`,
          },
          {
            type: "text",
            value: "<strong>Output:</strong>",
          },
          {
            type: "text",
            value: `<div style="font-family: sans-serif; background: #ffffff; padding: 20px; border: 1px solid #cbd5e1; border-radius: 8px; box-sizing: border-box; max-width: 480px;">
  <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-left: 5px solid #0284c7; border-radius: 8px; padding: 18px;">
    <h3 style="margin: 0 0 6px 0; color: #0f172a; font-size: 17px;">Metadata Configured</h3>
    <p style="margin: 0 0 10px 0; font-size: 13px; color: #475569; line-height: 1.5;">
      The <code style="background:#e2e8f0; padding:2px 4px; border-radius:3px;">&lt;head&gt;</code> coordinates character encoding, viewport scaling, 
      and social preview generation behind the scenes.
    </p>
    <small style="color: #0284c7; font-weight: bold; font-size: 12px;">UTF-8 &bull; Viewport Scale 1.0 &bull; Index/Follow</small>
  </div>
</div>`,
          },
        ],
      },
      {
        heading: "Asset Preloading & Resource Hints",
        content: [
          {
            type: "list",
            items: [
              " rel='preload': Instructs browser network engines to fetch critical assets (such as priority web fonts or LCP hero images) immediately, bypassing discovery delays.",
              " rel='preconnect' & rel='dns-prefetch': Initiates early TCP and TLS handshakes with third-party servers (like Google Fonts or CDNs) before assets are requested.",
              " Favicon Best Practices: Declare modern SVG favicons (<link rel='icon' type='image/svg+xml' href='/favicon.svg'>) alongside standard PNG touch icons for multi-device support.",
            ],
          },
        ],
      },
    ],
    conclusion:
      "The <head> element is the architectural command center of every HTML document. Correctly configuring character sets, mobile viewport limits, search descriptions, and social graph cards ensures that web documents render accurately on all screens, share elegantly on social platforms, and rank competitively in search engine results.",
  },

  // ================= TOPIC 23: HTML LAYOUT =================
  {
    id: "html-layout",
    title: "HTML Layout",
    subjectCode: "html",
    intro:
      "HTML layout establishes the visual and structural blueprint of a website by dividing content into functional architectural zones. While modern CSS controls dimensional sizing, spatial positioning, and responsive reflow, HTML supplies the semantic scaffolding using structural containers to delineate headers, navigation menus, main content streams, contextual sidebars, and footers.",
    sections: [
      {
        heading: "Semantic Layout Architecture vs. Legacy Div Soup",
        content: [
          {
            type: "text",
            value:
              "Early web layouts relied heavily on nested tables and unsemantic <code>&lt;div class='wrapper'&gt;</code> tags. Contemporary standards enforce semantic structural containers that convey meaning directly to search spiders, screen readers, and stylesheet systems.",
          },
          {
            type: "list",
            items: [
              " <header>: Houses site branding, logos, utility toolbars, and primary search bars.",
              " <nav>: Encapsulates major site navigation menus, breadcrumbs, and directory lists.",
              " <main>: The primary, unique content stream of the document (strictly one per page).",
              " <section>: Groups thematic blocks of content that logically begin with a heading tag.",
              " <article>: Self-contained, independently redistributable units (posts, cards, product modules).",
              " <aside>: Tangential content, contextual sidebars, related reading lists, or advertisement slots.",
              " <footer>: Terminal region carrying copyright details, privacy policies, and contact information.",
            ],
          },
          {
            type: "text",
            value: "<strong>Structural Layout Blueprint:</strong>",
          },
          {
            type: "code",
            value: `<body>
  <header>...</header>
  <nav>...</nav>
  <div class="layout-container">
    <main>
      <section>...</section>
    </main>
    <aside>...</aside>
  </div>
  <footer>...</footer>
</body>`,
          },
        ],
      },
      {
        heading: "Common Web Page Layout Patterns",
        content: [
          {
            type: "text",
            value:
              "Modern user interfaces typically rely on standardized structural patterns to deliver familiar navigation and balanced visual weight:",
          },
          {
            type: "list",
            items: [
              " Single-Column Layout: Stacks header, content stream, and footer in a centered vertical strip; optimal for editorial articles, reading modes, and mobile-first screens.",
              " Two-Column (Sidebar + Content): Sits a supplemental <aside> adjacent to the primary <main> column; common across documentation hubs and blogs.",
              " Three-Column (Dashboard Pattern): Features a left-hand navigation rail, a wide central workspace, and a right-hand contextual panel (standard in SaaS dashboards).",
              " Multi-Card Grid: Groups modular <article> containers inside a responsive multi-column grid for e-commerce products, portfolio items, and media feeds.",
            ],
          },
        ],
      },
      {
        heading: "Integrating Semantic Layout with CSS Display Engines",
        content: [
          {
            type: "text",
            value:
              "While HTML tags define document nodes, CSS layout modules (Flexbox and Grid) transform those structural nodes into multi-dimensional interfaces.",
          },
          {
            type: "text",
            value: "<strong>Runnable Example: Semantic Two-Column Layout Wireframe:</strong>",
          },
          {
            type: "code",
            value: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Layout Demo</title>
</head>
<body>

  <!-- Comprehensive Semantic Layout Shell -->
  <div style="font-family: sans-serif; max-width: 520px; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden;">
    
    <!-- Top-Level Header -->
    <header style="background-color: #0f172a; color: #ffffff; padding: 12px 16px;">
      <h3 style="margin: 0; font-size: 16px;">CloudEngine Console</h3>
    </header>

    <!-- Navigation Bar -->
    <nav style="background-color: #f1f5f9; border-bottom: 1px solid #e2e8f0; padding: 8px 16px; font-size: 13px;">
      <a href="#" style="color: #0284c7; text-decoration: none; font-weight: 600; margin-right: 12px;">Clusters</a>
      <a href="#" style="color: #64748b; text-decoration: none; margin-right: 12px;">Networking</a>
      <a href="#" style="color: #64748b; text-decoration: none;">Security</a>
    </nav>

    <!-- Body Layout Container: Two-Column Flex Grid -->
    <div style="display: flex; gap: 12px; padding: 14px; background: #ffffff;">
      
      <!-- Primary Main Content -->
      <main style="flex: 2; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 12px;">
        <article>
          <h4 style="margin: 0 0 6px 0; color: #0f172a; font-size: 14px;">Active Cluster US-East</h4>
          <p style="margin: 0; font-size: 12px; color: #475569; line-height: 1.5;">
            Nodes running smoothly with automated container scaling enabled.
          </p>
        </article>
      </main>

      <!-- Tangential Sidebar -->
      <aside style="flex: 1; background-color: #f8fafc; border: 1px dashed #cbd5e1; border-radius: 6px; padding: 12px;">
        <h5 style="margin: 0 0 6px 0; color: #0f172a; font-size: 13px;">Metrics</h5>
        <small style="color: #16a34a; font-weight: 600;">99.99% Uptime</small>
      </aside>

    </div>

    <!-- Terminal Footer -->
    <footer style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; text-align: center; padding: 8px; font-size: 11px; color: #64748b;">
      &copy; 2026 CloudEngine Inc. All systems operational.
    </footer>

  </div>

</body>
</html>`,
          },
          {
            type: "text",
            value: "<strong>Output:</strong>",
          },
          {
            type: "text",
            value: `<div style="font-family: sans-serif; background: #ffffff; padding: 20px; border: 1px solid #cbd5e1; border-radius: 8px; box-sizing: border-box; max-width: 560px;">
  <div style="border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden;">
    <header style="background-color: #0f172a; color: #ffffff; padding: 12px 16px;">
      <h3 style="margin: 0; font-size: 16px;">CloudEngine Console</h3>
    </header>

    <nav style="background-color: #f1f5f9; border-bottom: 1px solid #e2e8f0; padding: 8px 16px; font-size: 13px;">
      <a href="#" style="color: #0284c7; text-decoration: none; font-weight: 600; margin-right: 12px;">Clusters</a>
      <a href="#" style="color: #64748b; text-decoration: none; margin-right: 12px;">Networking</a>
      <a href="#" style="color: #64748b; text-decoration: none;">Security</a>
    </nav>

    <div style="display: flex; gap: 12px; padding: 14px; background: #ffffff;">
      <main style="flex: 2; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 12px;">
        <article>
          <h4 style="margin: 0 0 6px 0; color: #0f172a; font-size: 14px;">Active Cluster US-East</h4>
          <p style="margin: 0; font-size: 12px; color: #475569; line-height: 1.5;">
            Nodes running smoothly with automated container scaling enabled.
          </p>
        </article>
      </main>

      <aside style="flex: 1; background-color: #f8fafc; border: 1px dashed #cbd5e1; border-radius: 6px; padding: 12px;">
        <h5 style="margin: 0 0 6px 0; color: #0f172a; font-size: 13px;">Metrics</h5>
        <small style="color: #16a34a; font-weight: 600;">99.99% Uptime</small>
      </aside>
    </div>

    <footer style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; text-align: center; padding: 8px; font-size: 11px; color: #64748b;">
      &copy; 2026 CloudEngine Inc. All systems operational.
    </footer>
  </div>
</div>`,
          },
        ],
      },
      {
        heading: "Accessibility & Source Order Discipline",
        content: [
          {
            type: "list",
            items: [
              " DOM Order vs. Visual Flow: Screen readers parse elements in the order they appear in source markup. Always arrange semantic tags logically in HTML rather than relying on CSS flex-order or grid positions to fix misplaced content.",
              " Skip Links: Include an accessible skip navigation anchor at the top of the body (e.g., <a href='#main-content' class='skip-link'>Skip to Content</a>) so keyboard users can bypass repetitive navigation bars.",
              " Landmarking Clarity: Maintain strict landmark separation (<header>, <nav>, <main>, <footer>) so assistive devices can generate high-level structural document maps.",
            ],
          },
        ],
      },
    ],
    conclusion:
      "A well-engineered HTML layout harmonizes semantic landmarks like <header>, <main>, <article>, and <footer> with contemporary CSS display engines like Flexbox and Grid. Maintaining a disciplined source order ensures web architectures remain accessible to assistive devices, transparent to search crawlers, and straightforward to scale.",
  },
  // ================= TOPIC 24: HTML RESPONSIVE WEB DESIGN =================
  {
    id: "html-responsive-web-design",
    title: "HTML Responsive Web Design",
    subjectCode: "html",
    intro:
      "Responsive Web Design (RWD) ensures that web documents adapt cleanly and fluidly across the entire continuum of modern devices—from handheld smartphones and foldables to tablets, laptops, and ultra-wide desktop monitors. While CSS media queries and modern display modules drive graphical styling rules, HTML establishes the essential structural triggers through viewport meta directives, resolution-aware image switching, and art-directed picture elements.",
    sections: [
      {
        heading: "The Viewport Meta Directive",
        content: [
          {
            type: "text",
            value:
              "Without an explicit viewport meta tag, mobile browsers assume they are rendering a legacy desktop page and default to a synthetic 980-pixel wide viewport. The browser then shrinks the rendered document down to fit the smaller physical screen, resulting in unreadable micro-typography and horizontal scroll friction. Declaring the viewport meta tag inside the <code>&lt;head&gt;</code> instructs the browser to align canvas coordinates with physical device dimensions.",
          },
          {
            type: "list",
            items: [
              " width=device-width: Configures the page width to follow the screen width in device-independent pixels (DIPs).",
              " initial-scale=1.0: Establishes a 1:1 ratio between CSS pixels and device-independent pixels upon first render.",
              " viewport-fit=cover: Directs the viewport to fill all screen real estate, including areas surrounding sensor notches and rounded hardware corners.",
            ],
          },
          {
            type: "text",
            value: "<strong>Standard Meta Configuration:</strong>",
          },
          {
            type: "code",
            value: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`,
          },
        ],
      },
      {
        heading: "Resolution Switching: srcset and sizes",
        content: [
          {
            type: "text",
            value:
              "The standard <code>&lt;img&gt;</code> element can be enhanced with <code>srcset</code> and <code>sizes</code> attributes to support dynamic resolution switching. This allows the browser to inspect the user's screen density (e.g., Retina 2x/3x) and active viewport width, automatically requesting only the most bandwidth-efficient image asset.",
          },
          {
            type: "list",
            items: [
              " srcset: A comma-delimited catalog of image asset URIs accompanied by their intrinsic width descriptors (e.g., banner-small.webp 480w, banner-large.webp 1200w).",
              " sizes: Expresses media conditions alongside layout slot widths, informing the browser how wide the image will render before download starts.",
              " src: Serves as a fallback for legacy browser parsers that do not evaluate modern responsive image attributes.",
            ],
          },
        ],
      },
      {
        heading: "Art Direction with the <picture> Element",
        content: [
          {
            type: "text",
            value:
              "While <code>srcset</code> handles resolution switching for the same photo, the <code>&lt;picture&gt;</code> container enables art direction—serving entirely different crops, aspects, or next-generation formats (AVIF/WebP) based on media conditions.",
          },
          {
            type: "list",
            items: [
              " <picture>: An architectural container enclosing zero or more <source> tags and exactly one terminal fallback <img> tag.",
              " <source media='...'>: Evaluates CSS media queries to dynamically swap image assets based on viewport thresholds.",
              " <source type='...'>: Enables progressive enhancement by serving advanced compression formats like image/avif and image/webp with traditional JPEG fallbacks.",
            ],
          },
          {
            type: "text",
            value: "<strong>Runnable Example: Responsive Fluid Containers & Art Direction:</strong>",
          },
          {
            type: "code",
            value: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML Responsive Design Demo</title>
</head>
<body>

  <!-- Fluid Responsive Component -->
  <div style="font-family: sans-serif; max-width: 480px; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px;">
    <h3 style="margin: 0 0 6px 0; font-size: 17px; color: #0f172a;">Adaptive Media Component</h3>
    <p style="margin: 0 0 12px 0; font-size: 13px; color: #64748b; line-height: 1.5;">
      The image container below adapts dynamically to viewport boundaries using vector art direction.
    </p>

    <!-- Art Directed Visual Representation via SVG -->
    <picture>
      <source media="(max-width: 400px)" srcset="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='120'%3E%3Crect width='100%25' height='100%25' fill='%230284c7'/%3E%3Ctext x='50%25' y='55%25' fill='%23ffffff' font-family='sans-serif' font-size='14' text-anchor='middle' dominant-baseline='middle'%3EMobile View (Narrow Crop)%3C/text%3E%3C/svg%3E">
      <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='440' height='120'%3E%3Crect width='100%25' height='100%25' fill='%230f172a'/%3E%3Ctext x='50%25' y='55%25' fill='%2338bdf8' font-family='sans-serif' font-size='14' text-anchor='middle' dominant-baseline='middle'%3EDesktop View (Wide Banner)%3C/text%3E%3C/svg%3E" alt="Responsive layout graphic" style="width: 100%; height: auto; border-radius: 6px; display: block;">
    </picture>
  </div>

</body>
</html>`,
          },
          {
            type: "text",
            value: "<strong>Output:</strong>",
          },
          {
            type: "text",
            value: `<div style="font-family: sans-serif; background: #ffffff; padding: 20px; border: 1px solid #cbd5e1; border-radius: 8px; box-sizing: border-box; max-width: 520px;">
  <h3 style="margin: 0 0 6px 0; font-size: 17px; color: #0f172a;">Adaptive Media Component</h3>
  <p style="margin: 0 0 12px 0; font-size: 13px; color: #64748b; line-height: 1.5;">
    The image container below adapts dynamically to viewport boundaries using vector art direction.
  </p>
  <picture>
    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='440' height='120'%3E%3Crect width='100%25' height='100%25' fill='%230f172a'/%3E%3Ctext x='50%25' y='55%25' fill='%2338bdf8' font-family='sans-serif' font-size='14' text-anchor='middle' dominant-baseline='middle'%3EDesktop View (Wide Banner)%3C/text%3E%3C/svg%3E" alt="Responsive layout graphic" style="width: 100%; height: auto; border-radius: 6px; display: block; box-sizing: border-box;">
  </picture>
</div>`,
          },
        ],
      },
      {
        heading: "Fluid Layout Principles & Mobile-First Best Practices",
        content: [
          {
            type: "list",
            items: [
              " Universal Fluid Media Rule: Set max-width: 100% and height: auto on embedded assets (<img>, <video>, <canvas>) so they contract smoothly inside shrinking parent wrappers without causing horizontal viewport scrolling.",
              " Proportional Units Over Rigid Pixels: Use relative CSS units (rem, em, %, vw, vh) to ensure font hierarchies and margin gutters scale comfortably when users adjust browser base zoom settings.",
              " Mobile-First DOM Sequence: Structure the HTML source tree so that primary content sits first in reading order, making single-column mobile presentation clean prior to multi-column desktop styling.",
            ],
          },
        ],
      },
    ],
    conclusion:
      "Responsive web design starts in the HTML layer with the viewport meta tag and extends to bandwidth-conscious asset delivery through srcset, sizes, and <picture>. Pairing responsive HTML elements with fluid container styling guarantees crisp typography and fast page loads on every screen size.",
  },

  // ================= TOPIC 25: HTML CANVAS AND SVG =================
  {
    id: "html-canvas-and-svg",
    title: "HTML Canvas and SVG",
    subjectCode: "html",
    intro:
      "HTML offers two primary technologies for generating graphics natively within browser viewports: the HTML5 <canvas> element and Scalable Vector Graphics (SVG). While Canvas operates as an immediate-mode raster bitmap surface drawn through JavaScript, SVG provides a retained-mode vector system integrated directly into the Document Object Model (DOM) as scalable XML nodes.",
    sections: [
      {
        heading: "Architectural Comparison: Canvas vs. SVG",
        content: [
          {
            type: "text",
            value:
              "Both technologies render custom illustrations, interactive charts, and animations natively, but their underlying graphical rendering engines differ significantly:",
          },
          {
            type: "list",
            items: [
              " <canvas> (Immediate-Mode Raster): Acts as an unmanaged pixel canvas. Shapes are rendered imperatively via JavaScript commands. It possesses no child DOM elements, meaning individual drawn shapes cannot bind DOM event listeners.",
              " <svg> (Retained-Mode Vector): Retains an active tree of vector shapes (<rect>, <circle>, <path>) directly inside the DOM. Each element can be styled via CSS rules and receive native mouse/touch event listeners.",
              " Resolution Scalability: SVG is mathematically described, scaling infinitely to any zoom level or high-DPI display without blurriness. Canvas is raster-based and pixelates when enlarged unless resized programmatically.",
              " Performance Profile: Canvas handles thousands of rapidly updating graphical particles (ideal for games and physics models); SVG handles UI icons, logos, dashboards, and interactive vector maps.",
            ],
          },
        ],
      },
      {
        heading: "The <canvas> Element & The 2D Context Pipeline",
        content: [
          {
            type: "text",
            value:
              "The <code>&lt;canvas&gt;</code> element creates a drawing surface with explicit coordinate buffer dimensions defined via <code>width</code> and <code>height</code> attributes. Drawing logic is executed through JavaScript context methods.",
          },
          {
            type: "list",
            items: [
              " Attribute Dimensions vs. CSS: Setting width and height as HTML attributes defines the actual pixel resolution of the drawing buffer. Resizing canvas solely via CSS stretches or squashes the resulting bitmap.",
              " getContext('2d'): The JavaScript API method used to access the 2D rendering engine for rendering paths, fills, strokes, and gradients.",
              " Fallback Text: Any markup placed between opening and closing <canvas> tags renders only on legacy clients lacking canvas support.",
            ],
          },
          {
            type: "text",
            value: "<strong>Syntax Pattern:</strong>",
          },
          {
            type: "code",
            value: `<canvas id="chartCanvas" width="300" height="150">
  Fallback description for non-supporting browsers.
</canvas>`,
          },
        ],
      },
      {
        heading: "Inline Scalable Vector Graphics (<svg>)",
        content: [
          {
            type: "text",
            value:
              "Inline SVG allows developers to embed scalable vector shapes directly into the HTML markup without external HTTP network requests.",
          },
          {
            type: "list",
            items: [
              " <svg>: The root container declaring the viewBox coordinate window and display boundaries.",
              " <rect>: Generates rectangular boxes with x, y, width, height, and rx/ry corner radiuses.",
              " <circle>: Generates circles using center coordinates (cx, cy) and radius (r).",
              " <path>: Defines complex geometric silhouettes using path command syntax (M=Move, L=Line, C=Cubic Curve, Z=Close).",
            ],
          },
          {
            type: "text",
            value: "<strong>Runnable Example: Inline Vector Graphics Showcase:</strong>",
          },
          {
            type: "code",
            value: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Canvas and SVG Demo</title>
</head>
<body>

  <!-- Inline Scalable Vector Component -->
  <div style="font-family: sans-serif; max-width: 440px; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px;">
    <h3 style="margin: 0 0 6px 0; font-size: 16px; color: #0f172a;">Inline Vector Visualization</h3>
    <p style="margin: 0 0 14px 0; font-size: 13px; color: #64748b; line-height: 1.5;">
      Each shape inside this SVG exists as an independent DOM node with native fill and stroke styling.
    </p>

    <!-- Inline Scalable Shapes -->
    <svg width="100%" height="90" viewBox="0 0 360 90" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; display: block;">
      <!-- Vector Rectangle -->
      <rect x="20" y="15" width="60" height="60" rx="8" fill="#0284c7" />
      
      <!-- Vector Circle -->
      <circle cx="140" cy="45" r="30" fill="#22c55e" />
      
      <!-- Vector Accent Line -->
      <line x1="210" y1="20" x2="250" y2="70" stroke="#ef4444" stroke-width="4" stroke-linecap="round" />
      
      <!-- Vector Text Label -->
      <text x="280" y="50" fill="#0f172a" font-family="sans-serif" font-size="14" font-weight="bold">SVG</text>
    </svg>
  </div>

</body>
</html>`,
          },
          {
            type: "text",
            value: "<strong>Output:</strong>",
          },
          {
            type: "text",
            value: `<div style="font-family: sans-serif; background: #ffffff; padding: 20px; border: 1px solid #cbd5e1; border-radius: 8px; box-sizing: border-box; max-width: 480px;">
  <h3 style="margin: 0 0 6px 0; font-size: 16px; color: #0f172a;">Inline Vector Visualization</h3>
  <p style="margin: 0 0 14px 0; font-size: 13px; color: #64748b; line-height: 1.5;">
    Each shape inside this SVG exists as an independent DOM node with native fill and stroke styling.
  </p>
  <svg width="100%" height="90" viewBox="0 0 360 90" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; display: block; box-sizing: border-box;">
    <rect x="20" y="15" width="60" height="60" rx="8" fill="#0284c7" />
    <circle cx="140" cy="45" r="30" fill="#22c55e" />
    <line x1="210" y1="20" x2="250" y2="70" stroke="#ef4444" stroke-width="4" stroke-linecap="round" />
    <text x="280" y="50" fill="#0f172a" font-family="sans-serif" font-size="14" font-weight="bold">SVG</text>
  </svg>
</div>`,
          },
        ],
      },
      {
        heading: "Best Practices: When to Choose Canvas vs. SVG",
        content: [
          {
            type: "list",
            items: [
              " Choose SVG for UI Assets & Infographics: Vector paths retain crisp edges on any display scale, support CSS hover and active states, and expose text nodes to search engine crawlers and screen readers.",
              " Choose Canvas for High-Frequency Frame Rendering: Because canvas draws directly to a bitmap surface without DOM node overhead, it is the clear choice for fast-paced 2D games, procedural physics simulations, video filters, and raw image processing.",
              " Ensure Canvas Accessibility: Always supply screen-reader accessible descriptions or complementary data tables alongside canvas visualizations.",
            ],
          },
        ],
      },
    ],
    conclusion:
      "HTML Canvas and SVG provide flexible, complementary approaches for native web graphics. Choosing SVG for resolution-independent interface assets and Canvas for high-frequency pixel manipulation ensures optimal visual clarity and fast rendering performance across modern browsers.",
  },
// ================= TOPIC 26: HTML ACCESSIBILITY =================
  {
    id: "html-accessibility",
    title: "HTML Accessibility",
    subjectCode: "html",
    intro:
      "Web accessibility (abbreviated as a11y) is the engineering practice of designing and coding digital interfaces so that all people—including individuals with auditory, cognitive, neurological, physical, speech, or visual disabilities—can perceive, understand, navigate, and interact with the web. Writing well-formed semantic HTML serves as the foundational backbone of digital accessibility, automatically supplying built-in keyboard navigation hooks, native focus rings, and screen-reader accessibility tree mappings.",
    sections: [
      {
        heading: "Foundations of Accessible Semantic Markup",
        content: [
          {
            type: "text",
            value:
              "The most effective approach to accessible frontend architecture is prioritizing native semantic elements over custom scripted div widgets. Browsers expose native semantic controls directly to operating system accessibility APIs without requiring custom ARIA retrofitting.",
          },
          {
            type: "list",
            items: [
              " Native Interactive Elements: Always use authentic <button> and <a> elements instead of assigning click listeners to generic <div> or <span> tags. Native buttons provide out-of-the-box keyboard support (Space and Enter activation) and announce their interactive role to screen readers.",
              " Root Document Language: Always declare the primary human language on the root html tag (e.g., <html lang='en'>). This informs speech synthesizers which accent, vocabulary dictionary, and inflection rules to use.",
              " Strict Heading Hierarchy: Nest <h1> through <h6> sequentially without skipping levels downwards so assistive software can generate an outline for quick navigation.",
              " Contextual Link Phrasing: Avoid vague link text like 'click here' or 'read more'. Phrasing must describe the destination or payload (e.g., 'Download the Q3 Financial Audit PDF').",
            ],
          },
        ],
      },
      {
        heading: "Accessible Media, Forms & Accessible Names",
        content: [
          {
            type: "text",
            value:
              "Forms and media assets require explicit textual descriptions so visitors utilizing screen-reading software or voice-command tools understand input targets and visual subjects.",
          },
          {
            type: "list",
            items: [
              " Informative vs Decorative alt Text: Provide clear, context-aware descriptions for informative graphics. Use an empty alt='' attribute for purely decorative flourishes so screen readers skip them cleanly.",
              " Explicit Label Association: Pair every <label> to its companion <input> using matching 'for' and 'id' values. This gives the input an accessible name and expands the touch target boundary.",
              " Form Clustering: Group related inputs (like radio groups or address blocks) within <fieldset> containers labeled with a descriptive <legend>.",
              " Multimedia Synchronized Tracks: Provide closed captions and transcripts using the <track kind='captions'> element for video and audio content.",
            ],
          },
        ],
      },
      {
        heading: "WAI-ARIA: Roles, States & The First Rule of ARIA",
        content: [
          {
            type: "text",
            value:
              "WAI-ARIA (Web Accessibility Initiative &ndash; Accessible Rich Internet Applications) provides attributes to communicate roles, states, and properties when native HTML elements cannot express custom component behavior. The First Rule of ARIA states: <em>If a native HTML element or attribute already provides the semantic role and behavior you need, do not use ARIA</em>.",
          },
          {
            type: "list",
            items: [
              " role: Informs assistive tech what a widget does when semantic tags are insufficient (e.g., role='dialog', role='tablist', role='alert').",
              " aria-label: Provides an invisible accessible name for icon-only buttons or controls lacking visible text.",
              " aria-labelledby & aria-describedby: References IDs of visible text nodes to assign accessible names or supplementary instructions.",
              " aria-expanded: Signals whether a collapsible disclosure widget or navigation dropdown is currently open ('true') or closed ('false').",
              " aria-hidden='true': Hides purely decorative visual items (like SVG icons) from the accessibility tree.",
            ],
          },
          {
            type: "text",
            value: "<strong>Runnable Example: Accessible Form & Icon Button Pattern:</strong>",
          },
          {
            type: "code",
            value: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Accessibility Demo</title>
</head>
<body>

  <!-- Accessible Component Wrapper -->
  <div style="font-family: sans-serif; max-width: 400px; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px;">
    
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
      <h3 style="margin: 0; font-size: 16px; color: #0f172a;">Account Security</h3>
      
      <!-- Accessible Icon-Only Button with aria-label -->
      <button type="button" aria-label="Dismiss security notice" style="background: transparent; border: 1px solid #cbd5e1; border-radius: 4px; padding: 4px 8px; cursor: pointer; color: #64748b;">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <form>
      <!-- Explicit Label-to-Input Binding -->
      <label for="recovery-phone" style="display: block; font-size: 13px; font-weight: 600; color: #334155; margin-bottom: 4px;">
        Backup Phone Number <span style="color: #dc2626;" aria-hidden="true">*</span>:
      </label>
      <input 
        type="tel" 
        id="recovery-phone" 
        name="recovery_phone" 
        required 
        aria-required="true"
        aria-describedby="phone-hint"
        placeholder="+1 (555) 000-0000"
        style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 4px; box-sizing: border-box; font-size: 14px; margin-bottom: 4px;">
      
      <p id="phone-hint" style="margin: 0 0 14px 0; font-size: 12px; color: #64748b;">
        Used solely for two-factor SMS verification codes.
      </p>

      <button type="submit" style="background-color: #0284c7; color: #ffffff; border: none; padding: 8px 16px; border-radius: 4px; font-weight: 600; cursor: pointer; font-size: 13px;">
        Update Security Settings
      </button>
    </form>

  </div>

</body>
</html>`,
          },
          {
            type: "text",
            value: "<strong>Output:</strong>",
          },
          {
            type: "text",
            value: `<div style="font-family: sans-serif; background: #ffffff; padding: 20px; border: 1px solid #cbd5e1; border-radius: 8px; box-sizing: border-box; max-width: 440px;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
    <h3 style="margin: 0; font-size: 16px; color: #0f172a;">Account Security</h3>
    <button type="button" aria-label="Dismiss security notice" style="background: transparent; border: 1px solid #cbd5e1; border-radius: 4px; padding: 4px 8px; cursor: pointer; color: #64748b; font-size: 14px;">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>

  <form style="margin: 0;">
    <label for="demo-recovery-phone" style="display: block; font-size: 13px; font-weight: 600; color: #334155; margin-bottom: 4px;">
      Backup Phone Number <span style="color: #dc2626;" aria-hidden="true">*</span>:
    </label>
    <input 
      type="tel" 
      id="demo-recovery-phone" 
      placeholder="+1 (555) 000-0000"
      style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 4px; box-sizing: border-box; font-size: 14px; margin-bottom: 4px; background: #ffffff;">
    
    <p style="margin: 0 0 14px 0; font-size: 12px; color: #64748b;">
      Used solely for two-factor SMS verification codes.
    </p>

    <button type="button" style="background-color: #0284c7; color: #ffffff; border: none; padding: 8px 16px; border-radius: 4px; font-weight: 600; cursor: pointer; font-size: 13px;">
      Update Security Settings
    </button>
  </form>
</div>`,
          },
        ],
      },
      {
        heading: "Keyboard Navigation & Tabindex Control",
        content: [
          {
            type: "list",
            items: [
              " Preserving Natural Tab Flow: Ensure every interactive element can be reached using the Tab key and activated with Space or Enter without trapped focus.",
              " Never Strip Focus Indicators: Never set outline: none in stylesheets without replacing it with an accessible, high-contrast :focus-visible style.",
              " Tabindex Rules: Use tabindex='0' to add custom non-interactive elements into the natural tab order when necessary; use tabindex='-1' for programmatic focus targets (like error containers); avoid positive values (tabindex='1+') as they warp natural document tab flow.",
              " Skip Navigation Links: Provide an early skip link (<a href='#main-content'>Skip to content</a>) allowing keyboard-only users to bypass repetitive navigation header bars.",
            ],
          },
        ],
      },
    ],
    conclusion:
      "Web accessibility is not an optional add-on but a fundamental pillar of web standards. Choosing native semantic elements, coupling form controls with descriptive labels, respecting natural keyboard tab order, and applying WAI-ARIA attributes selectively ensures digital experiences remain inclusive, accessible, and compliant with universal WCAG standards.",
  },

  // ================= TOPIC 27: HTML WEB STORAGE =================
  {
    id: "html-web-storage",
    title: "HTML Web Storage",
    subjectCode: "html",
    intro:
      "The HTML5 Web Storage API provides native mechanisms that allow web browsers to store key-value pairs securely and locally within a user's client environment. Offering significantly larger storage limits than traditional HTTP cookies (typically 5MB to 10MB per origin versus 4KB), Web Storage preserves UI state, caching data, and offline preferences without transmitting records to the server with every HTTP network request.",
    sections: [
      {
        heading: "localStorage vs. sessionStorage Architecture",
        content: [
          {
            type: "text",
            value:
              "The Web Storage specification exposes two distinct client-side storage mechanisms on the global <code>window</code> object, differentiated by lifecycle persistence and session boundaries.",
          },
          {
            type: "list",
            items: [
              " localStorage: Persists indefinitely across browser sessions. Data remains available when tabs are closed, browsers are quit, or the operating system reboots. It is only purged via explicit script actions or user cache clearing.",
              " sessionStorage: Bound strictly to the lifetime of the active top-level browsing tab. Data survives page refreshes within that specific tab, but is completely flushed the moment the tab or window closes.",
              " Same-Origin Security Boundary: Storage is segregated strictly by origin (protocol + domain + port); a page hosted on https://example.com cannot inspect data stored by https://api.example.com or http://example.com.",
              " Zero HTTP Payload Overhead: Unlike cookies, Web Storage data is never automatically attached to outbound HTTP request headers, saving bandwidth on asset fetches.",
            ],
          },
        ],
      },
      {
        heading: "The Web Storage API Methods",
        content: [
          {
            type: "text",
            value:
              "Both <code>localStorage</code> and <code>sessionStorage</code> share an identical programmatic interface for setting, reading, inspecting, and evicting data entries.",
          },
          {
            type: "list",
            items: [
              " setItem(key, value): Stores a key-value record. Both the key and value are automatically coerced into string primitives.",
              " getItem(key): Returns the stored string value mapped to the provided key, or null if the key does not exist.",
              " removeItem(key): Deletes the specific key and its mapped value from storage.",
              " clear(): Purges all stored keys and values associated with that origin.",
              " key(index): Returns the name of the key at the given numerical index.",
              " length: Read-only property returning the total count of key-value items currently stored.",
            ],
          },
          {
            type: "text",
            value: "<strong>Syntax Blueprint:</strong>",
          },
          {
            type: "code",
            value: `// Storing a key-value pair
localStorage.setItem("theme_preference", "dark");

// Retrieving stored data
const theme = localStorage.getItem("theme_preference");

// Removing a single entry
localStorage.removeItem("theme_preference");

// Clearing all storage for the origin
localStorage.clear();`,
          },
        ],
      },
      {
        heading: "Serializing Complex Objects via JSON",
        content: [
          {
            type: "text",
            value:
              "Because Web Storage stores values exclusively as string primitives, attempting to store a raw JavaScript object directly converts it to the unusable string <code>'[object Object]'</code>. Storing structured arrays or objects requires serializing and deserializing through the native <code>JSON</code> object.",
          },
          {
            type: "list",
            items: [
              " JSON.stringify(object): Serializes JavaScript arrays and objects into a standard JSON string before invoking setItem().",
              " JSON.parse(string): Deserializes retrieved JSON string data back into functional objects or arrays following getItem().",
            ],
          },
          {
            type: "text",
            value: "<strong>Runnable Example: Client Preference Persistence Component:</strong>",
          },
          {
            type: "code",
            value: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Web Storage Demo</title>
</head>
<body>

  <!-- Client State Control Card -->
  <div style="font-family: sans-serif; max-width: 360px; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px;">
    <h3 style="margin: 0 0 6px 0; font-size: 16px; color: #0f172a;">User Preferences</h3>
    <p style="margin: 0 0 14px 0; font-size: 13px; color: #64748b; line-height: 1.5;">
      Select your preferred editor theme. Settings persist locally across sessions via localStorage.
    </p>

    <label for="theme-picker" style="display: block; font-size: 13px; font-weight: 600; color: #334155; margin-bottom: 4px;">Editor Colorway:</label>
    <select id="theme-picker" style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 4px; margin-bottom: 14px; font-size: 14px; background: #ffffff;">
      <option value="ocean-blue">Ocean Blue (Default)</option>
      <option value="emerald-green">Emerald Green</option>
      <option value="slate-dark">Slate Dark</option>
    </select>

    <button type="button" style="width: 100%; background-color: #0284c7; color: #ffffff; border: none; padding: 9px; border-radius: 4px; font-weight: 600; cursor: pointer; font-size: 13px;">
      Save Preference Locally
    </button>
  </div>

</body>
</html>`,
          },
          {
            type: "text",
            value: "<strong>Output:</strong>",
          },
          {
            type: "text",
            value: `<div style="font-family: sans-serif; background: #ffffff; padding: 20px; border: 1px solid #cbd5e1; border-radius: 8px; box-sizing: border-box; max-width: 400px;">
  <h3 style="margin: 0 0 6px 0; font-size: 16px; color: #0f172a;">User Preferences</h3>
  <p style="margin: 0 0 14px 0; font-size: 13px; color: #64748b; line-height: 1.5;">
    Select your preferred editor theme. Settings persist locally across sessions via localStorage.
  </p>

  <label for="demo-theme-picker" style="display: block; font-size: 13px; font-weight: 600; color: #334155; margin-bottom: 4px;">Editor Colorway:</label>
  <select id="demo-theme-picker" style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 4px; margin-bottom: 14px; font-size: 14px; background: #ffffff;">
    <option value="ocean-blue">Ocean Blue (Default)</option>
    <option value="emerald-green">Emerald Green</option>
    <option value="slate-dark">Slate Dark</option>
  </select>

  <button type="button" style="width: 100%; background-color: #0284c7; color: #ffffff; border: none; padding: 9px; border-radius: 4px; font-weight: 600; cursor: pointer; font-size: 13px;">
    Save Preference Locally
  </button>
</div>`,
          },
        ],
      },
      {
        heading: "Security Limitations & The Storage Event",
        content: [
          {
            type: "list",
            items: [
              " XSS Vulnerability: Web Storage has no HTTP-only protection flag like cookies. Any malicious JavaScript injected via Cross-Site Scripting (XSS) can read all data inside localStorage. Never store sensitive passwords, authentication JWTs, or credit card numbers in Web Storage.",
              " Synchronous Thread Blocking: Web Storage reads and writes execute synchronously on the main browser UI thread; storing massive payloads can trigger UI frame drops.",
              " The 'storage' Event: When storage data is modified in one tab, a 'storage' event fires across all other open tabs from the same origin, enabling seamless multi-tab state synchronization.",
            ],
          },
        ],
      },
    ],
    conclusion:
      "HTML5 Web Storage offers high-capacity, low-latency client-side data persistence through localStorage and sessionStorage. Paired with JSON serialization, it provides an efficient foundation for maintaining UI states, caching client-side preferences, and enabling cross-tab synchronization without HTTP cookie overhead.",
  },
  // ================= TOPIC 28: HTML GEOLOCATION API =================
  {
    id: "html-geolocation-api",
    title: "HTML Geolocation API",
    subjectCode: "html",
    intro:
      "The HTML Geolocation API grants web applications secure access to the geographical position of the host device. To safeguard end-user privacy, location telemetry is strictly guarded: browsers require explicit user permission through an unbypassable dialog, and execution is permitted solely within secure contexts (HTTPS or localhost). This API powers interactive mapping, proximity-based retail searches, regional localization, and real-time transit telemetry.",
    sections: [
      {
        heading: "The Geolocation Interface & Permission Architecture",
        content: [
          {
            type: "text",
            value:
              "The Geolocation API is exposed programmatically through the <code>navigator.geolocation</code> interface. Prior to initiating location queries, developers must verify browser support and understand the host security model.",
          },
          {
            type: "list",
            items: [
              " Explicit Permission Prompt: The user must explicitly click 'Allow' on a browser modal; client-side scripts cannot programmatically grant, bypass, or spoof this choice.",
              " Secure Context Requirement: Modern browsers block geolocation requests originating from insecure HTTP origins. Code must be served over HTTPS or executed on local testing domains (localhost).",
              " Triangulation Sources: Browsers resolve physical location using a blend of GPS hardware, Wi-Fi network routing tables, cellular tower triangulation, and IP address ranges.",
              " Feature Detection: Applications must gracefully handle legacy or restricted browsers by checking for 'geolocation' in the global navigator object.",
            ],
          },
          {
            type: "text",
            value: "<strong>Feature Detection Pattern:</strong>",
          },
          {
            type: "code",
            value: `if ("geolocation" in navigator) {
  // Geolocation API is ready and available
} else {
  // Fallback for unsupported or restricted environments
}`,
          },
        ],
      },
      {
        heading: "Retrieving Position via getCurrentPosition()",
        content: [
          {
            type: "text",
            value:
              "The primary entry point for fetching coordinates is <code>getCurrentPosition()</code>. This asynchronous method accepts a mandatory success callback function, an optional failure handler, and an optional configuration options object.",
          },
          {
            type: "list",
            items: [
              " Success Callback: Yields a GeolocationPosition object encapsulating timestamp data and coordinate telemetry.",
              " coords.latitude & coords.longitude: Decimal degrees representing the device's physical coordinates on Earth.",
              " coords.accuracy: Radial accuracy of latitude and longitude coordinates expressed in meters.",
              " coords.altitude & coords.speed: Secondary telemetry available on devices with dedicated hardware sensors.",
            ],
          },
          {
            type: "text",
            value: "<strong>Syntax Blueprint:</strong>",
          },
          {
            type: "code",
            value: `navigator.geolocation.getCurrentPosition(
  (position) => {
    const { latitude, longitude, accuracy } = position.coords;
    console.log(\`Position: \${latitude}, \${longitude} (±\${accuracy}m)\`);
  },
  (error) => {
    console.warn(\`Error (\${error.code}): \${error.message}\`);
  },
  { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
);`,
          },
        ],
      },
      {
        heading: "Error Classifications & Configuration Tuning",
        content: [
          {
            type: "text",
            value:
              "Location requests can fail due to system-level constraints, denied user consent, or signal attenuation. Failure callbacks receive a <code>GeolocationPositionError</code> object with numerical code flags:",
          },
          {
            type: "list",
            items: [
              " error.PERMISSION_DENIED (Code 1): The user clicked 'Block' or disabled site-wide location permissions in system settings.",
              " error.POSITION_UNAVAILABLE (Code 2): Internal positioning sources (satellite, network) failed to establish a coordinate fix.",
              " error.TIMEOUT (Code 3): The device failed to resolve location data within the designated time limit.",
              " enableHighAccuracy (Option): Requests the most precise coordinate fix available, activating hardware GPS chips at the expense of higher battery consumption.",
              " timeout (Option): Maximum duration in milliseconds allowed for position acquisition before an error.TIMEOUT is raised.",
              " maximumAge (Option): Maximum acceptable age of a cached coordinate fix in milliseconds before the browser must request a fresh sensor reading.",
            ],
          },
          {
            type: "text",
            value: "<strong>Runnable Example: Location Telemetry Card:</strong>",
          },
          {
            type: "code",
            value: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Geolocation Demo</title>
</head>
<body>

  <!-- Geolocation Status Card -->
  <div style="font-family: sans-serif; max-width: 440px; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px;">
    <h3 style="margin: 0 0 6px 0; font-size: 16px; color: #0f172a;">Device Location Services</h3>
    <p style="margin: 0 0 14px 0; font-size: 13px; color: #64748b; line-height: 1.5;">
      Click below to query your physical position through the native Geolocation interface.
    </p>

    <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 12px; margin-bottom: 14px;">
      <div style="font-size: 13px; color: #334155; margin-bottom: 4px;">
        <strong>Status:</strong> <span id="geo-status" style="color: #0284c7;">Awaiting prompt...</span>
      </div>
      <div style="font-size: 13px; color: #334155;">
        <strong>Telemetry:</strong> <span id="geo-coords" style="color: #64748b;">Latitude, Longitude</span>
      </div>
    </div>

    <button type="button" style="background-color: #0284c7; color: #ffffff; border: none; padding: 9px 16px; border-radius: 4px; font-weight: 600; cursor: pointer; font-size: 13px;">
      Request Coordinates
    </button>
  </div>

</body>
</html>`,
          },
          {
            type: "text",
            value: "<strong>Output:</strong>",
          },
          {
            type: "text",
            value: `<div style="font-family: sans-serif; background: #ffffff; padding: 20px; border: 1px solid #cbd5e1; border-radius: 8px; box-sizing: border-box; max-width: 480px;">
  <h3 style="margin: 0 0 6px 0; font-size: 16px; color: #0f172a;">Device Location Services</h3>
  <p style="margin: 0 0 14px 0; font-size: 13px; color: #64748b; line-height: 1.5;">
    Click below to query your physical position through the native Geolocation interface.
  </p>

  <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 12px; margin-bottom: 14px;">
    <div style="font-size: 13px; color: #334155; margin-bottom: 4px;">
      <strong>Status:</strong> <span style="color: #0284c7;">Awaiting prompt...</span>
    </div>
    <div style="font-size: 13px; color: #334155;">
      <strong>Telemetry:</strong> <span style="color: #64748b;">Latitude, Longitude</span>
    </div>
  </div>

  <button type="button" style="background-color: #0284c7; color: #ffffff; border: none; padding: 9px 16px; border-radius: 4px; font-weight: 600; cursor: pointer; font-size: 13px;">
    Request Coordinates
  </button>
</div>`,
          },
        ],
      },
      {
        heading: "Continuous Positional Tracking with watchPosition()",
        content: [
          {
            type: "text",
            value:
              "For navigation workflows, delivery tracking, and fitness tracking dashboards, <code>watchPosition()</code> registers an active listener that executes whenever the device coordinates shift significantly.",
          },
          {
            type: "list",
            items: [
              " watchPosition(): Continuously polls hardware sensors for movement updates, returning an integer handle identifier.",
              " clearWatch(watchId): Terminates tracking immediately, shutting down continuous GPS polling to preserve device battery life.",
              " Battery Optimization: Always clear active watch listeners when tracking views unmount or when users navigate away from active mapping routes.",
            ],
          },
        ],
      },
    ],
    conclusion:
      "The HTML Geolocation API provides web applications with secure access to physical latitude and longitude coordinates under user consent. By pairing getCurrentPosition and watchPosition with proper error fallbacks and HTTPS protection, developers can reliably power map lookups, regional localizations, and navigation tools.",
  },

  // ================= TOPIC 29: HTML DRAG AND DROP API =================
  {
    id: "html-drag-and-drop-api",
    title: "HTML Drag and Drop API",
    subjectCode: "html",
    intro:
      "The HTML Drag and Drop (DnD) API allows users to grab an element with a pointer device, drag it across the viewport, and release it over an eligible drop container. Built directly into the browser's Document Object Model, this native capability powers interactive interfaces such as kanban task boards, shopping carts, file upload drop zones, and sortable list components without requiring external JavaScript libraries.",
    sections: [
      {
        heading: "Activating Draggable Elements",
        content: [
          {
            type: "text",
            value:
              "By default, web browsers permit dragging only for text selections, image elements (<code>&lt;img&gt;</code>), and hyperlinks with an <code>href</code> attribute. Any other HTML element must be made draggable by applying the boolean <code>draggable</code> attribute.",
          },
          {
            type: "list",
            items: [
              " draggable='true': Enables native dragging mechanics on arbitrary block or inline tags (e.g., div, li, article).",
              " draggable='false': Explicitly disables dragging on natively draggable items like images or anchor tags.",
              " dragstart Event: Fires on the source element the moment the user begins dragging; used to initialize payload data.",
              " dragend Event: Fires on the dragged source element when the drag operation completes or is aborted.",
            ],
          },
          {
            type: "text",
            value: "<strong>Syntax Declaration:</strong>",
          },
          {
            type: "code",
            value: `<div id="task-card-1" draggable="true">Draggable Task Card</div>`,
          },
        ],
      },
      {
        heading: "The DataTransfer Pipeline",
        content: [
          {
            type: "text",
            value:
              "The <code>event.dataTransfer</code> property holds the data payload and visual feedback state transmitted between the originating source item and the target container.",
          },
          {
            type: "list",
            items: [
              " setData(format, data): Stores payload values into the drag pipeline during dragstart (typically 'text/plain' or custom MIME types).",
              " getData(format): Retrieves the stored payload string inside the terminal drop event handler.",
              " clearData(): Clears active data from the transfer bus.",
              " effectAllowed: Configures permitted drop actions ('copy', 'move', 'link', or 'all').",
              " dropEffect: Sets the visual pointer indicator displayed during dragover ('copy', 'move', 'link', or 'none').",
            ],
          },
        ],
      },
      {
        heading: "Configuring Valid Drop Targets",
        content: [
          {
            type: "text",
            value:
              "By default, browsers reject drop actions on standard HTML elements. To convert an element into an active drop zone, you must intercept the <code>dragover</code> event and invoke <code>event.preventDefault()</code>.",
          },
          {
            type: "list",
            items: [
              " dragover: Fires continuously as a dragged object hovers over a container. Calling event.preventDefault() flags the container as a valid drop target.",
              " dragenter: Fires once when the dragged item first crosses the target container boundary; useful for toggling visual highlight borders.",
              " dragleave: Fires when the dragged item exits container boundaries without completing a drop.",
              " drop: Fires when the dragged payload is released over the target. Call event.preventDefault() here to suppress default browser actions (such as opening dropped links).",
            ],
          },
          {
            type: "text",
            value: "<strong>Runnable Example: Interactive Kanban Drop Zone Component:</strong>",
          },
          {
            type: "code",
            value: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Drag and Drop Demo</title>
</head>
<body>

  <!-- Drag and Drop Interface Container -->
  <div style="font-family: sans-serif; max-width: 480px; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px;">
    <h3 style="margin: 0 0 6px 0; font-size: 16px; color: #0f172a;">Task Pipeline Board</h3>
    <p style="margin: 0 0 14px 0; font-size: 13px; color: #64748b; line-height: 1.5;">
      Grab the task item below and drag it across into the target processing stage.
    </p>

    <!-- Source and Target Columns -->
    <div style="display: flex; gap: 14px;">
      
      <!-- Source Column -->
      <div style="flex: 1; min-height: 90px; background: #f8fafc; border: 2px dashed #cbd5e1; border-radius: 6px; padding: 10px;">
        <span style="display: block; font-size: 11px; font-weight: bold; color: #64748b; margin-bottom: 8px; text-transform: uppercase;">In Backlog</span>
        
        <!-- Draggable Element -->
        <div draggable="true" style="background: #0284c7; color: #ffffff; padding: 8px 12px; border-radius: 4px; font-size: 13px; font-weight: 600; cursor: grab; user-select: none;">
          Task #104: Audit CSS
        </div>
      </div>

      <!-- Target Column -->
      <div style="flex: 1; min-height: 90px; background: #f0fdf4; border: 2px dashed #86efac; border-radius: 6px; padding: 10px;">
        <span style="display: block; font-size: 11px; font-weight: bold; color: #166534; margin-bottom: 8px; text-transform: uppercase;">Ready for Review</span>
        <div style="font-size: 12px; color: #86efac; text-align: center; margin-top: 14px;">
          Drop Target Active
        </div>
      </div>

    </div>
  </div>

</body>
</html>`,
          },
          {
            type: "text",
            value: "<strong>Output:</strong>",
          },
          {
            type: "text",
            value: `<div style="font-family: sans-serif; background: #ffffff; padding: 20px; border: 1px solid #cbd5e1; border-radius: 8px; box-sizing: border-box; max-width: 520px;">
  <h3 style="margin: 0 0 6px 0; font-size: 16px; color: #0f172a;">Task Pipeline Board</h3>
  <p style="margin: 0 0 14px 0; font-size: 13px; color: #64748b; line-height: 1.5;">
    Grab the task item below and drag it across into the target processing stage.
  </p>

  <div style="display: flex; gap: 14px;">
    <div style="flex: 1; min-height: 90px; background: #f8fafc; border: 2px dashed #cbd5e1; border-radius: 6px; padding: 10px;">
      <span style="display: block; font-size: 11px; font-weight: bold; color: #64748b; margin-bottom: 8px; text-transform: uppercase;">In Backlog</span>
      <div draggable="true" style="background: #0284c7; color: #ffffff; padding: 8px 12px; border-radius: 4px; font-size: 13px; font-weight: 600; cursor: grab; user-select: none;">
        Task #104: Audit CSS
      </div>
    </div>

    <div style="flex: 1; min-height: 90px; background: #f0fdf4; border: 2px dashed #86efac; border-radius: 6px; padding: 10px;">
      <span style="display: block; font-size: 11px; font-weight: bold; color: #166534; margin-bottom: 8px; text-transform: uppercase;">Ready for Review</span>
      <div style="font-size: 12px; color: #16a34a; text-align: center; margin-top: 14px;">
        Drop Target Active
      </div>
    </div>
  </div>
</div>`,
          },
        ],
      },
      {
        heading: "OS File Uploads & Keyboard Accessibility",
        content: [
          {
            type: "list",
            items: [
              " External File Drops: Users can drag files directly from their local operating system into a drop zone. Access the dropped FileList via event.dataTransfer.files inside the drop handler.",
              " Keyboard Accessibility (a11y): Pointer-driven drag and drop is inaccessible to screen-reader and keyboard-only users. Applications must provide accessible fallback controls (such as move-up/move-down buttons or standard file selection inputs).",
              " Visual State Cues: Leverage dragenter and dragleave listeners to add distinct focus borders or background tints, giving users clear confirmation that an area is ready to accept a drop.",
            ],
          },
        ],
      },
    ],
    conclusion:
      "The HTML Drag and Drop API provides a native, performant mechanism for transferring elements and external files across web interfaces. By combining draggable attributes with dataTransfer pipelines and event cancellations on dragover targets, developers can create interactive dashboards and kanban workflows natively.",
  },
  ]
}; 
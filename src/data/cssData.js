// CSS Introduction
// CSS Basic Syntax
// CSS Selectors
// CSS How To Add CSS
// CSS Comments
// CSS Colors
// CSS Backgrounds
// CSS Borders
// CSS Margins and Padding
// CSS Box Model
// CSS Height and Width
// CSS Text Formatting
// CSS Fonts
// CSS Icons
// CSS Links
// CSS Lists
// CSS Tables
// CSS Display Property
// CSS Position
// CSS Z-Index
// CSS Overflow
// CSS Float and Clear
// CSS Inline-Block
// CSS Flexbox
// CSS Grid
// CSS Responsive Web Design
// CSS Media Queries
// CSS Units
// CSS Transforms
// CSS Transitions
// CSS Animations
// CSS Variables

export const cssData = {
  subjectTitle: "CSS",
  subjectCode: "css", // URL: /course/css
  topics: [
  // ================= TOPIC 0: CSS INTRODUCTION =================
  {
    id: "css-introduction",
    title: "CSS Introduction",
    subjectCode: "css",
    intro:
      "CSS (Cascading Style Sheets) is the foundational design language of the open web. While HTML structures the raw content into headings, paragraphs, and multimedia tags, CSS is responsible for turning that bare-bones document into an engaging, accessible, and responsive user interface. Created by Håkon Wium Lie in 1994 and maintained by the W3C (World Wide Web Consortium), CSS controls every visual facet of modern web design—from colors, custom typography, and fluid multi-column grids to hardware-accelerated animations and device-specific layouts.",
    sections: [
      {
        heading: "What is CSS & Why is it Indispensable?",
        content: [
          {
            type: "text",
            value:
              "In the early days of the web, styling had to be embedded directly inside HTML tags using font tags, background attributes, and complex nested tables. This led to bloated, unmaintainable codebases where changing a single site-wide color required editing hundreds of files. CSS solved this by establishing a strict <strong>separation of concerns</strong>—decoupling content (HTML) from visual presentation (CSS).",
          },
          {
            type: "list",
            items: [
              " Cascading Architecture: Styles flow down like a waterfall. If conflicting rules target the same element, CSS resolves the conflict through a deterministic hierarchy of source order, specificity, and inheritance.",
              " Site-Wide Design Consistency: A single external stylesheet can control the aesthetic identity of millions of web pages simultaneously, slashing development and maintenance overhead.",
              " Bandwidth & Performance Optimization: Browsers cache external stylesheets after the initial visit, drastically speeding up subsequent page loads across an entire domain.",
              " Multi-Device Adaptability: Through CSS layout modules and responsive media rules, a single HTML document automatically adapts its geometry across smartwatches, phones, tablets, laptops, and ultra-wide desktop monitors.",
              " Rich Visual Capabilities: Native CSS replaces bulky image assets with procedural gradients, drop shadows, rounded corners, transitions, and vector transformations.",
            ],
          },
        ],
      },
      {
        heading: "How Browsers Parse and Render CSS",
        content: [
          {
            type: "text",
            value:
              "Understanding how CSS functions behind the scenes is critical for debugging rendering performance. When a browser loads a web page, it converts HTML into the <strong>DOM (Document Object Model)</strong> and converts CSS into the <strong>CSSOM (CSS Object Model)</strong>. The browser combines these two trees into a unified <strong>Render Tree</strong>, calculates the exact geometry of each element during the <strong>Layout</strong> phase, and finally paints pixels onto the screen.",
          },
          {
            type: "text",
            value: "<strong>Syntax / Rule Anatomy:</strong>",
          },
          {
            type: "code",
            value: `/* CSS Rule Structure */
selector {
  property: value; /* Individual Declaration */
}`,
          },
        ],
      },
      {
        heading: "Complete Browser-Ready Example",
        content: [
          {
            type: "text",
            value:
              "Here is a complete, runnable HTML document showing an internal CSS stylesheet transforming a standard document into a modern announcement card.",
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
  <title>CSS Introduction Demo</title>
  <style>
    .intro-card {
      max-width: 500px;
      margin: 20px auto;
      padding: 24px;
      background-color: #f8fafc;
      border: 1px solid #e2e8f0;
      border-left: 6px solid #2563eb;
      border-radius: 8px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }
    .intro-title {
      margin: 0 0 8px 0;
      color: #0f172a;
      font-size: 22px;
      font-weight: 700;
    }
    .intro-description {
      margin: 0 0 16px 0;
      color: #475569;
      font-size: 15px;
      line-height: 1.6;
    }
    .intro-badge {
      display: inline-block;
      background-color: #dbeafe;
      color: #1d4ed8;
      padding: 4px 12px;
      border-radius: 9999px;
      font-size: 13px;
      font-weight: 600;
    }
  </style>
</head>
<body>

  <div class="intro-card">
    <span class="intro-badge">CSS Fundamentals</span>
    <h2 class="intro-title">Separation of Concerns</h2>
    <p class="intro-description">
      By keeping styles inside CSS, our HTML stays clean, accessible, and lightweight. 
      This card layout uses background tints, subtle borders, and intentional typographic hierarchy.
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
            value: `<div style="max-width: 500px; margin: 10px 0; padding: 24px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 6px solid #2563eb; border-radius: 8px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; box-sizing: border-box;">
  <span style="display: inline-block; background-color: #dbeafe; color: #1d4ed8; padding: 4px 12px; border-radius: 9999px; font-size: 13px; font-weight: 600; margin-bottom: 10px;">CSS Fundamentals</span>
  <h2 style="margin: 0 0 8px 0; color: #0f172a; font-size: 20px; font-weight: 700;">Separation of Concerns</h2>
  <p style="margin: 0; color: #475569; font-size: 14px; line-height: 1.6;">
    By keeping styles inside CSS, our HTML stays clean, accessible, and lightweight. 
    This card layout uses background tints, subtle borders, and intentional typographic hierarchy.
  </p>
</div>`,
          },
        ],
      },
      {
        heading: "Best Practices & Common Pitfalls",
        content: [
          {
            type: "list",
            items: [
              " Never rely on presentational HTML tags: Avoid deprecated elements like <center> or <font>; use native CSS alignment and font properties instead.",
              " Always prefer external stylesheets in production: Inline styles pollute HTML, break caching benefits, and create maintenance bottlenecks.",
              " Respect Browser Defaults: Different browsers have minor variations in default paddings and margins. Using a lightweight CSS reset or Normalize.css creates a consistent baseline.",
            ],
          },
        ],
      },
    ],
    conclusion:
      "CSS is the stylistic backbone of the modern web. Understanding how CSS decouples layout rules from semantic HTML markup empowers developers to engineer visually compelling, easily maintainable, and high-performance digital applications.",
  },

  // ================= TOPIC 1: CSS BASIC SYNTAX =================
  {
    id: "css-basic-syntax",
    title: "CSS Basic Syntax",
    subjectCode: "css",
    intro:
      "CSS syntax establishes the formal grammatical blueprint required for browsers to parse and execute your styling directives without ambiguity. Writing valid CSS demands an intimate understanding of rule sets, selectors, declaration blocks, property-value bindings, and delimiter characters. Mastering this syntax prevents silent cascading failures and guarantees consistent cross-browser rendering.",
    sections: [
      {
        heading: "In-Depth Anatomy of a CSS Rule Set",
        content: [
          {
            type: "text",
            value:
              "A CSS document is fundamentally composed of individual statements called <strong>rulesets</strong> (or rules). A complete ruleset is divided into two distinct components: the <strong>Selector</strong> and the <strong>Declaration Block</strong>.",
          },
          {
            type: "list",
            items: [
              " Selector: The pattern positioned before the opening curly brace that points the browser engine toward which HTML nodes should receive the styling (e.g., h1, .callout, #nav).",
              " Declaration Block: The container wrapped between opening { and closing } curly braces that houses all intended styling properties.",
              " Property: The specific visual, dimensional, or behavioral characteristic you wish to alter (e.g., color, font-size, line-height).",
              " Value: The exact setting, unit, or keyword assigned to that property (e.g., #0284c7, 18px, bold).",
              " Colon (:): The strict separator symbol placed between a property and its assigned value.",
              " Semicolon (;): The critical statement terminator that signals the conclusion of one declaration before the next begins.",
            ],
          },
        ],
      },
      {
        heading: "Whitespace, Indentation & Multi-Line Structure",
        content: [
          {
            type: "text",
            value:
              "CSS is whitespace-insensitive: browsers ignore spaces, tabs, and line breaks within declaration blocks. However, standard professional development guidelines dictate writing one declaration per line with two or four spaces of indentation for maximum readability and easier code review diffs.",
          },
          {
            type: "text",
            value: "<strong>Syntax Blueprint:</strong>",
          },
          {
            type: "code",
            value: `/* Standard Formatted Rule */
selector {
  property-one: value;
  property-two: value;
}`,
          },
        ],
      },
      {
        heading: "Runnable Syntax Demonstration: Selectors & Declarations",
        content: [
          {
            type: "text",
            value:
              "In the runnable example below, observe how distinct declaration blocks target headings, lead paragraphs, and action links with specific property-value pairs.",
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
  <title>CSS Syntax Demo</title>
  <style>
    /* Rule Set 1: Targets article title */
    .article-header {
      color: #0f172a;
      font-family: Georgia, serif;
      font-size: 24px;
      margin-bottom: 6px;
    }

    /* Rule Set 2: Targets descriptive copy */
    .article-summary {
      color: #475569;
      font-family: sans-serif;
      font-size: 14px;
      line-height: 1.6;
      margin-bottom: 14px;
    }

    /* Rule Set 3: Targets action button */
    .action-btn {
      display: inline-block;
      background-color: #10b981;
      color: #ffffff;
      padding: 8px 16px;
      font-family: sans-serif;
      font-size: 13px;
      font-weight: 600;
      text-decoration: none;
      border-radius: 4px;
    }
  </style>
</head>
<body>

  <h2 class="article-header">Clean Syntax Matters</h2>
  <p class="article-summary">
    Every property requires a colon separator and a terminating semicolon. 
    Notice how each declaration alters a distinct characteristic of this layout.
  </p>
  <a href="#" class="action-btn">Continue Reading &rarr;</a>

</body>
</html>`,
          },
          {
            type: "text",
            value: "<strong>Output:</strong>",
          },
          {
            type: "text",
            value: `<div style="background: #ffffff; padding: 16px; border: 1px solid #cbd5e1; border-radius: 6px;">
  <h2 style="color: #0f172a; font-family: Georgia, serif; font-size: 22px; margin: 0 0 6px 0;">Clean Syntax Matters</h2>
  <p style="color: #475569; font-family: sans-serif; font-size: 14px; line-height: 1.6; margin: 0 0 14px 0;">
    Every property requires a colon separator and a terminating semicolon. 
    Notice how each declaration alters a distinct characteristic of this layout.
  </p>
  <a href="#" style="display: inline-block; background-color: #10b981; color: #ffffff; padding: 8px 16px; font-family: sans-serif; font-size: 13px; font-weight: 600; text-decoration: none; border-radius: 4px;">Continue Reading &rarr;</a>
</div>`,
          },
        ],
      },
      {
        heading: "Common Syntax Errors That Break Rendering",
        content: [
          {
            type: "list",
            items: [
              " Missing Semicolon: Omitting a semicolon at the end of a line causes the browser parser to concatenate that line with the following property, breaking both rules.",
              " Case Sensitivity in Values: While standard property names are case-insensitive, URLs, IDs, and custom variable names are case-sensitive.",
              " Unclosed Braces: A forgotten closing brace '}' will swallow subsequent selectors into the open block, corrupting the remainder of your stylesheet.",
            ],
          },
        ],
      },
    ],
    conclusion:
      "Writing syntactically immaculate CSS guarantees predictable cascade flow and eliminates hard-to-trace parsing errors. Rigorous adherence to property colons, terminating semicolons, and balanced curly braces forms the cornerstone of professional frontend engineering.",
  },

  // ================= TOPIC 2: CSS SELECTORS =================
  {
    id: "css-selectors",
    title: "CSS Selectors",
    subjectCode: "css",
    intro:
      "CSS selectors serve as the precision targeting engine of stylesheets. They inform the browser exactly which HTML nodes in the Document Object Model (DOM) should receive specific visual rules. From basic tag names and reusable classes to relational combinators, pseudo-classes, and structural pseudo-elements, selectors allow developers to style elements based on their identity, hierarchical placement, attributes, and user interaction states.",
    sections: [
      {
        heading: "Primary Categories of CSS Selectors",
        content: [
          {
            type: "text",
            value:
              "Modern CSS offers diverse selector mechanisms catering to different structural and organizational requirements.",
          },
          {
            type: "list",
            items: [
              " Type / Element Selector: Directly targets elements by their HTML tag name (e.g., p, h2, table). Ideal for broad typography and global base defaults.",
              " Class Selector (.classname): Prefixed by a dot, targets any element possessing that specific class attribute. Highly reusable and the preferred workhorse of component styling.",
              " ID Selector (#idname): Prefixed by a hash symbol, targets the single element matching that unique ID. Carries excessively high specificity and should be used sparingly.",
              " Universal Selector (*): Matches every single element within the target document. Frequently used in modern global box-sizing resets.",
              " Attribute Selector ([type='text']): Matches elements based on the presence or exact value of an HTML attribute.",
            ],
          },
        ],
      },
      {
        heading: "Combinator Selectors: Navigating the DOM Tree",
        content: [
          {
            type: "text",
            value:
              "Combinators express relationships between multiple selectors based on nesting and proximity in the HTML tree:",
          },
          {
            type: "list",
            items: [
              " Descendant Selector (space): Targets an element anywhere inside an ancestor node (e.g., .card p targets every paragraph inside .card).",
              " Child Combinator (>): Targets only immediate direct children of a parent (e.g., ul > li).",
              " Adjacent Sibling Combinator (+): Targets an element directly following another specific element at the same hierarchy level.",
              " General Sibling Combinator (~): Targets all subsequent sibling elements sharing the same parent.",
            ],
          },
        ],
      },
      {
        heading: "Practical Selector Targeting Demonstration",
        content: [
          {
            type: "text",
            value:
              "The following example illustrates how type selectors, class names, and descendant combinators coordinate to style a structured profile badge.",
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
  <title>CSS Selectors Demo</title>
  <style>
    /* Element Selector */
    section {
      font-family: sans-serif;
      padding: 16px;
      background-color: #f1f5f9;
      border-radius: 8px;
    }

    /* Class Selector */
    .profile-card {
      background-color: #ffffff;
      border: 1px solid #cbd5e1;
      padding: 16px;
      border-radius: 6px;
    }

    /* Descendant Selector: H3 inside .profile-card */
    .profile-card h3 {
      margin: 0 0 4px 0;
      color: #0f172a;
      font-size: 18px;
    }

    /* Child Combinator: direct role badge */
    .profile-card > .role-tag {
      display: inline-block;
      background-color: #fef3c7;
      color: #92400e;
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 600;
    }
  </style>
</head>
<body>

  <section>
    <div class="profile-card">
      <h3>Ananya Singhania</h3>
      <span class="role-tag">Senior UI Engineer</span>
    </div>
  </section>

</body>
</html>`,
          },
          {
            type: "text",
            value: "<strong>Output:</strong>",
          },
          {
            type: "text",
            value: `<div style="font-family: sans-serif; padding: 16px; background-color: #f1f5f9; border-radius: 8px;">
  <div style="background-color: #ffffff; border: 1px solid #cbd5e1; padding: 16px; border-radius: 6px;">
    <h3 style="margin: 0 0 4px 0; color: #0f172a; font-size: 18px;">Ananya Singhania</h3>
    <span style="display: inline-block; background-color: #fef3c7; color: #92400e; padding: 2px 8px; border-radius: 4px; font-size: 12px; font-weight: 600;">Senior UI Engineer</span>
  </div>
</div>`,
          },
        ],
      },
      {
        heading: "Selector Specificity & Weight Hierarchy",
        content: [
          {
            type: "text",
            value:
              "When competing rules target the same element with conflicting values, browsers calculate <strong>Specificity Weight</strong> using a four-tier score: (Inline Styles &gt; IDs &gt; Classes/Attributes/Pseudo-classes &gt; Elements). Keeping your selectors flat and avoiding deep nests prevents specificity wars.",
          },
        ],
      },
    ],
    conclusion:
      "CSS selectors give you fine-grained control over document styling. By leveraging modular class selectors and intentional combinators, you create predictable, scalable stylesheets that remain easy to refactor as applications grow.",
  },

  // ================= TOPIC 3: CSS HOW TO ADD CSS =================
  {
    id: "css-how-to-add-css",
    title: "CSS How To Add CSS",
    subjectCode: "css",
    intro:
      "There are three standardized techniques for integrating CSS into an HTML document: External Style Sheets, Internal Style Blocks, and Inline Styles. Each method fulfills distinct architectural use cases, possesses unique caching characteristics, and occupies a specific rank in the browser's cascading priority ladder.",
    sections: [
      {
        heading: "The Three Integration Methods Compared",
        content: [
          {
            type: "list",
            items: [
              " 1. External Style Sheet: CSS rules are written in a standalone file with a .css extension and linked in the HTML <head> using the <link rel='stylesheet' href='styles.css'> tag. This is the global industry standard for production websites because it enables complete caching and clean separation of concerns.",
              " 2. Internal / Embedded Styles: Placed directly within the <head> section of a specific HTML document wrapped in a <style> tag. Best suited for single-page applications, email templates, or critical above-the-fold CSS delivery.",
              " 3. Inline Styles: Declared directly on individual HTML elements using the style attribute (e.g., <p style='color: red;'>). Carries extremely high specificity and lacks caching, making it undesirable for general layout construction.",
            ],
          },
        ],
      },
      {
        heading: "The Cascade & Specificity Priority Order",
        content: [
          {
            type: "text",
            value:
              "When conflicting declarations target the exact same property of an element, browsers resolve the conflict according to the following priority hierarchy (highest priority wins):",
          },
          {
            type: "list",
            items: [
              " 1. Declarations with !important (Use sparingly for utility overrides).",
              " 2. Inline styles (written directly in the HTML element's style attribute).",
              " 3. Internal and External stylesheets (resolved by selector specificity and source order).",
              " 4. Browser default user-agent styles (the lowest priority baseline).",
            ],
          },
        ],
      },
      {
        heading: "Integration Demonstration in Single File",
        content: [
          {
            type: "text",
            value:
              "The following example contrasts internal styling rules with an inline style override on a banner alert component.",
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
  <title>How to Add CSS Demo</title>
  <!-- Internal Stylesheet -->
  <style>
    .notification-banner {
      font-family: sans-serif;
      padding: 14px 18px;
      background-color: #eff6ff;
      border: 1px solid #bfdbfe;
      color: #1e40af;
      border-radius: 6px;
      font-size: 14px;
      margin-bottom: 12px;
    }
    .urgent-banner {
      background-color: #fef2f2;
      border-color: #fecaca;
      color: #991b1b;
    }
  </style>
</head>
<body>

  <!-- Styled via Internal CSS -->
  <div class="notification-banner">
    <strong>System Update:</strong> Scheduled maintenance tonight at 02:00 UTC.
  </div>

  <!-- Styled via Internal CSS + Urgent Class Override -->
  <div class="notification-banner urgent-banner">
    <strong>Critical Alert:</strong> Please verify your billing credentials immediately.
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
            value: `<div style="font-family: sans-serif;">
  <div style="padding: 14px 18px; background-color: #eff6ff; border: 1px solid #bfdbfe; color: #1e40af; border-radius: 6px; font-size: 14px; margin-bottom: 12px;">
    <strong>System Update:</strong> Scheduled maintenance tonight at 02:00 UTC.
  </div>
  <div style="padding: 14px 18px; background-color: #fef2f2; border: 1px solid #fecaca; color: #991b1b; border-radius: 6px; font-size: 14px;">
    <strong>Critical Alert:</strong> Please verify your billing credentials immediately.
  </div>
</div>`,
          },
        ],
      },
    ],
    conclusion:
      "Deploying external stylesheets remains the architectural gold standard for modern web development. Knowing when to selectively harness internal blocks for critical path optimization or inline attributes for dynamic state injection gives you complete mastery over asset loading.",
  },

  // ================= TOPIC 4: CSS COMMENTS =================
  {
    id: "css-comments",
    title: "CSS Comments",
    subjectCode: "css",
    intro:
      "CSS comments are non-rendering textual annotations embedded within stylesheets. Browsers completely ignore comment blocks during parsing, making them invaluable for documenting architecture, organizing complex multi-section files, crediting third-party libraries, and temporarily disabling rules during testing and debugging.",
    sections: [
      {
        heading: "CSS Comment Syntax & Multi-Line Structure",
        content: [
          {
            type: "text",
            value:
              "Unlike languages like JavaScript or PHP that support double-slash (<code>//</code>) single-line comments, standard CSS strictly permits only the slash-asterisk delimiter syntax: <code>/* ... */</code>.",
          },
          {
            type: "list",
            items: [
              " Opening Delimiter: /* starts the comment block.",
              " Closing Delimiter: */ terminates the comment block.",
              " Multi-Line Capability: Comments can span across multiple lines without requiring special escape sequences.",
              " Inline Rule Commenting: You can place comments directly beside specific declarations to document reasoning behind unusual values or vendor quirks.",
            ],
          },
        ],
      },
      {
        heading: "Professional Stylesheet Sectioning",
        content: [
          {
            type: "text",
            value:
              "In production environments, developers structure large single stylesheets into distinct thematic sections using ASCII banner comments.",
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
  <title>CSS Comments Architecture</title>
  <style>
    /* =======================================================
       1. GLOBAL RESET & BASE TYPOGRAPHY
       ======================================================= */
    .comment-demo-box {
      font-family: sans-serif;
      padding: 16px;
      background-color: #f8fafc;
      border: 1px solid #cbd5e1;
      border-radius: 6px;
    }

    /* =======================================================
       2. INTERACTIVE BUTTON COMPONENTS
       ======================================================= */
    .save-btn {
      background-color: #0284c7; /* Primary brand hue */
      color: #ffffff;
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      font-weight: 600;
      cursor: pointer;
      /* opacity: 0.5; <- Disabled during active development */
    }
  </style>
</head>
<body>

  <div class="comment-demo-box">
    <p style="margin: 0 0 12px 0; color: #334155; font-size: 14px;">
      Comments in the stylesheet above document sections and explain rule intentions without affecting UI rendering.
    </p>
    <button class="save-btn">Publish Changes</button>
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
            value: `<div style="font-family: sans-serif; padding: 16px; background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px;">
  <p style="margin: 0 0 12px 0; color: #334155; font-size: 14px;">
    Comments in the stylesheet above document sections and explain rule intentions without affecting UI rendering.
  </p>
  <button style="background-color: #0284c7; color: #ffffff; padding: 10px 20px; border: none; border-radius: 4px; font-weight: 600; cursor: pointer;">Publish Changes</button>
</div>`,
          },
        ],
      },
      {
        heading: "Best Practices & Production Minification",
        content: [
          {
            type: "list",
            items: [
              " Document Complex Overrides: Always add a comment explaining why an unusual rule or hack is necessary, particularly when working around browser quirks.",
              " Minify in Production: While comments are crucial for developers, ensure your deployment pipeline runs a CSS minifier to strip comments out before serving assets to end users, reducing file weight.",
            ],
          },
        ],
      },
    ],
    conclusion:
      "CSS comments transform opaque code into clear, collaborative documentation. Clean commenting structures make large stylesheets easy to navigate, debug, and maintain across enterprise engineering teams.",
  },

// ================= TOPIC 5: CSS COLORS =================
  {
    id: "css-colors",
    title: "CSS Colors",
    subjectCode: "css",
    intro:
      "Color is the most immediate emotional and communicative instrument in web interface design. CSS provides an expansive suite of color spaces and notation systems—from standard human-readable keywords and hexadecimal notation to RGB, RGBA, HSL, HSLA, and modern wide-gamut models like OKLCH. Mastering color properties allows developers to craft branded themes, establish typographic contrast hierarchies, and ensure compliance with universal WCAG digital accessibility standards.",
    sections: [
      {
        heading: "CSS Color Notations & Mathematical Models",
        content: [
          {
            type: "text",
            value:
              "Different design workflows require different ways to specify colors. CSS supports several standardized notations, each catering to specific precision and opacity demands.",
          },
          {
            type: "list",
            items: [
              " Named Keywords: 140+ predefined human-readable names recognized across browsers (e.g., coral, steelblue, darkslategray, transparent).",
              " Hexadecimal Codes (#RRGGBB / #RRGGBBAA): Base-16 representations running from 00 (no intensity) to FF (maximum intensity). Supports an optional 8-digit alpha channel for transparency.",
              " RGB / RGBA: Functional notation rgb(red, green, blue) mapping integer values from 0 to 255. Adding an alpha parameter (0.0 fully transparent to 1.0 fully opaque) allows precise layering.",
              " HSL / HSLA: Cylindrical color model defining Hue (0-360 degrees on color wheel), Saturation (0% grayscale to 100% full color), and Lightness (0% pitch black to 100% pure white). Highly intuitive for programmatic dynamic theming.",
              " Modern Wide-Gamut (lch / oklch): Enables browsers on modern displays (like Apple Display P3) to render perceptually uniform, ultra-vivid colors that standard sRGB cannot represent.",
            ],
          },
        ],
      },
      {
        heading: "Where Colors Are Applied in CSS",
        content: [
          {
            type: "text",
            value:
              "Colors are not restricted to foreground text; they govern every layer of an element's presentation:",
          },
          {
            type: "list",
            items: [
              " color: Controls foreground text, list bullet markers, and typographic SVG icons.",
              " background-color: Fills the content and padding area beneath elements.",
              " border-color: Dictates perimeter outline hues.",
              " box-shadow / text-shadow: Uses translucent RGBA or HSLA values to build realistic elevation and depth without blocking underlying textures.",
            ],
          },
        ],
      },
      {
        heading: "Complete Color Formats Demonstration",
        content: [
          {
            type: "text",
            value:
              "The following example showcases named keywords, hex tokens, RGB, and translucent RGBA overlays combined in a unified card design.",
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
  <title>CSS Color Models</title>
  <style>
    .color-showcase {
      display: flex;
      flex-direction: column;
      gap: 12px;
      font-family: sans-serif;
      max-width: 480px;
    }
    .color-swatch {
      padding: 14px 18px;
      border-radius: 6px;
      font-size: 14px;
      font-weight: 600;
    }
    .hex-demo {
      background-color: #0284c7; /* Hexadecimal */
      color: #ffffff;
    }
    .rgb-demo {
      background-color: rgb(16, 185, 129); /* RGB */
      color: #ffffff;
    }
    .rgba-demo {
      background-color: rgba(239, 68, 68, 0.15); /* RGBA translucent */
      color: #991b1b;
      border: 1px solid rgba(239, 68, 68, 0.3);
    }
    .hsl-demo {
      background-color: hsl(262, 83%, 58%); /* HSL */
      color: #ffffff;
    }
  </style>
</head>
<body>

  <div class="color-showcase">
    <div class="color-swatch hex-demo">HEX: #0284c7 (Sky Blue)</div>
    <div class="color-swatch rgb-demo">RGB: rgb(16, 185, 129) (Emerald)</div>
    <div class="color-swatch rgba-demo">RGBA: rgba(239, 68, 68, 0.15) (Translucent Red Alert)</div>
    <div class="color-swatch hsl-demo">HSL: hsl(262, 83%, 58%) (Vibrant Purple)</div>
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
            value: `<div style="display: flex; flex-direction: column; gap: 10px; font-family: sans-serif; max-width: 480px;">
  <div style="padding: 12px 16px; border-radius: 6px; font-size: 14px; font-weight: 600; background-color: #0284c7; color: #ffffff;">HEX: #0284c7 (Sky Blue)</div>
  <div style="padding: 12px 16px; border-radius: 6px; font-size: 14px; font-weight: 600; background-color: rgb(16, 185, 129); color: #ffffff;">RGB: rgb(16, 185, 129) (Emerald)</div>
  <div style="padding: 12px 16px; border-radius: 6px; font-size: 14px; font-weight: 600; background-color: rgba(239, 68, 68, 0.15); color: #991b1b; border: 1px solid rgba(239, 68, 68, 0.3);">RGBA: rgba(239, 68, 68, 0.15) (Translucent Red Alert)</div>
  <div style="padding: 12px 16px; border-radius: 6px; font-size: 14px; font-weight: 600; background-color: hsl(262, 83%, 58%); color: #ffffff;">HSL: hsl(262, 83%, 58%) (Vibrant Purple)</div>
</div>`,
          },
        ],
      },
      {
        heading: "Accessibility Guidelines & WCAG Color Contrast",
        content: [
          {
            type: "list",
            items: [
              " Contrast Ratio Ratios: WCAG 2.1 Level AA requires a minimum contrast ratio of 4.5:1 for normal body text and 3:1 for large text (18pt+ or 14pt bold).",
              " Don't Rely Solely on Color: Never communicate state purely through color shifts (e.g., pairing a red error outline with an exclamation icon and written message prevents blocking color-blind users).",
            ],
          },
        ],
      },
    ],
    conclusion:
      "CSS color formats give you granular control over visual fidelity. By pairing structured HEX or HSL palettes with RGBA transparencies, developers ensure both high visual polish and accessible contrast for all users.",
  },

  // ================= TOPIC 6: CSS BACKGROUNDS =================
  {
    id: "css-backgrounds",
    title: "CSS Backgrounds",
    subjectCode: "css",
    intro:
      "The CSS background property suite provides total control over the decorative surfaces positioned beneath an element's text and child contents. Spanning flat background tints, procedural linear and radial gradients, repeating pattern tiles, and scalable responsive hero photographs, CSS backgrounds give web pages visual depth, texture, and structured branding without relying on heavy DOM markup.",
    sections: [
      {
        heading: "The Comprehensive Background Properties Suite",
        content: [
          {
            type: "text",
            value:
              "Rather than relying strictly on the generic shorthand, mastering the individual sub-properties prevents unexpected overrides and layout shifts.",
          },
          {
            type: "list",
            items: [
              " background-color: Declares the solid underlying canvas color. Always set a fallback color when using image assets in case assets fail over slow networks.",
              " background-image: Specifies one or more image sources via url() or procedural CSS gradient functions like linear-gradient(), radial-gradient(), and conic-gradient().",
              " background-repeat: Dictates whether an image tiles across axes (repeat, repeat-x, repeat-y, no-repeat).",
              " background-position: Positions the graphic anchor within its container (e.g., center, top right, 50% 50%).",
              " background-size: Scales the asset dynamically: 'cover' scales the graphic to fill the box while preserving aspect ratio (cropping edges if needed); 'contain' scales the entire graphic into view without cropping.",
              " background-attachment: Determines whether the graphic scrolls with page content (scroll) or remains latched in place against the viewport (fixed, producing subtle parallax effects).",
            ],
          },
        ],
      },
      {
        heading: "CSS Gradients: Procedural Visual Effects",
        content: [
          {
            type: "text",
            value:
              "Gradients are mathematically computed vector color transitions generated by the browser, meaning they download with zero network latency, scale infinitely without pixelation, and consume virtually no memory.",
          },
          {
            type: "list",
            items: [
              " Linear Gradients: Transition along a directional straight line (e.g., linear-gradient(135deg, #6366f1, #06b6d4)).",
              " Radial Gradients: Radiate outward from a central point or ellipse shape (e.g., radial-gradient(circle, #f43f5e, #881337)).",
              " Multi-Stop Gradients: Blend three or more color thresholds at exact percentage stop markers.",
            ],
          },
        ],
      },
      {
        heading: "Hero Banner Component with Gradient & Layering",
        content: [
          {
            type: "text",
            value:
              "The following example builds a rich, modern callout banner leveraging multi-stop angled linear gradients paired with translucent glass borders.",
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
  <title>CSS Backgrounds Demo</title>
  <style>
    .gradient-hero {
      background: linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%);
      color: #ffffff;
      padding: 32px 24px;
      border-radius: 12px;
      font-family: sans-serif;
      box-shadow: 0 10px 25px -5px rgba(49, 46, 129, 0.3);
      max-width: 520px;
    }
    .hero-tag {
      display: inline-block;
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(4px);
      padding: 4px 10px;
      border-radius: 9999px;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 1px;
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    .hero-title {
      margin: 0 0 8px 0;
      font-size: 22px;
      font-weight: 700;
    }
    .hero-copy {
      margin: 0;
      color: #cbd5e1;
      font-size: 14px;
      line-height: 1.6;
    }
  </style>
</head>
<body>

  <div class="gradient-hero">
    <span class="hero-tag">CSS Architecture</span>
    <h3 class="hero-title">Multi-Stop Linear Gradients</h3>
    <p class="hero-copy">
      This container blends three indigo hues procedurally at 135 degrees. 
      Because it is generated by CSS, it downloads instantly with zero HTTP image requests.
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
            value: `<div style="background: linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%); color: #ffffff; padding: 28px 22px; border-radius: 12px; font-family: sans-serif; box-shadow: 0 10px 25px -5px rgba(49, 46, 129, 0.3); max-width: 520px; box-sizing: border-box;">
  <span style="display: inline-block; background: rgba(255, 255, 255, 0.15); padding: 4px 10px; border-radius: 9999px; font-size: 11px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 10px;">CSS Architecture</span>
  <h3 style="margin: 0 0 8px 0; font-size: 20px; font-weight: 700; color: #ffffff;">Multi-Stop Linear Gradients</h3>
  <p style="margin: 0; color: #cbd5e1; font-size: 14px; line-height: 1.6;">
    This container blends three indigo hues procedurally at 135 degrees. 
    Because it is generated by CSS, it downloads instantly with zero HTTP image requests.
  </p>
</div>`,
          },
        ],
      },
    ],
    conclusion:
      "CSS background properties furnish modern layouts with texture and hierarchy. Prioritizing procedural gradients over static bitmap assets reduces data consumption while delivering sharp visuals on high-DPI displays.",
  },

  // ================= TOPIC 7: CSS BORDERS =================
  {
    id: "css-borders",
    title: "CSS Borders",
    subjectCode: "css",
    intro:
      "CSS borders represent the physical boundary encasing an element's padding and content area. Beyond standard box dividers, borders allow developers to craft delicate structural lines, bold accent badges, circular avatar frames, and custom visual pointers. With individual side controls and the border-radius property, borders form the structural baseline of modern component architecture.",
    sections: [
      {
        heading: "Anatomy of the Border Shorthand & Sub-Properties",
        content: [
          {
            type: "text",
            value:
              "The standard border declaration is a convenient shorthand combining three distinct properties: <code>border: [width] [style] [color];</code>.",
          },
          {
            type: "list",
            items: [
              " border-width: Determines edge thickness (e.g., 1px, 4px, or keywords thin, medium, thick).",
              " border-style: Dictates pattern rendering (solid, dashed, dotted, double, groove, ridge, inset, outset, or none). Note: If border-style is omitted or set to none, the border will NOT render, regardless of width.",
              " border-color: Specifies color tone. If unspecified, it automatically defaults to currentColor (inheriting the element's foreground text color).",
              " Directional Borders: You can target edges individually via border-top, border-right, border-bottom, and border-left.",
            ],
          },
        ],
      },
      {
        heading: "Mastering Curvature with Border-Radius",
        content: [
          {
            type: "text",
            value:
              "The <code>border-radius</code> property softens sharp rectangular corners by defining quarter-ellipse curvature radii. It can take single pixel lengths, rems, or percentage values.",
          },
          {
            type: "list",
            items: [
              " Subtle Rounding (4px - 8px): Standard for modern interface cards, inputs, and buttons.",
              " Pill Shapes (9999px): Produces fully rounded capsule buttons that adapt to arbitrary content widths.",
              " Perfect Circles (50%): When applied to containers with identical width and height, border-radius: 50% converts squares into circular avatar containers.",
            ],
          },
        ],
      },
      {
        heading: "Multi-Style Border Demonstration",
        content: [
          {
            type: "text",
            value:
              "The following example displays three common design patterns: an accent-edge callout, a dashed upload container, and a rounded pill tag.",
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
  <title>CSS Borders Demo</title>
  <style>
    .border-grid {
      display: flex;
      flex-direction: column;
      gap: 12px;
      font-family: sans-serif;
      max-width: 480px;
    }
    .accent-card {
      border: 1px solid #e2e8f0;
      border-left: 5px solid #0284c7; /* Left accent edge */
      background-color: #ffffff;
      padding: 14px;
      border-radius: 0 6px 6px 0;
    }
    .dropzone-box {
      border: 2px dashed #94a3b8; /* Dashed upload pattern */
      background-color: #f8fafc;
      padding: 16px;
      text-align: center;
      border-radius: 8px;
      color: #64748b;
      font-size: 13px;
    }
    .pill-badge {
      display: inline-block;
      border: 1px solid #10b981;
      color: #065f46;
      background-color: #d1fae5;
      padding: 4px 14px;
      border-radius: 9999px; /* Pill curvature */
      font-size: 12px;
      font-weight: 600;
      align-self: flex-start;
    }
  </style>
</head>
<body>

  <div class="border-grid">
    <div class="accent-card">
      <strong style="color: #0f172a; font-size: 15px;">Accent Border Card</strong>
      <p style="margin: 4px 0 0 0; color: #475569; font-size: 13px;">Thick solid left border highlighting container priority.</p>
    </div>

    <div class="dropzone-box">
      Drag & Drop files here or click to browse
    </div>

    <span class="pill-badge">&#10004; Verified Status</span>
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
            value: `<div style="display: flex; flex-direction: column; gap: 12px; font-family: sans-serif; max-width: 480px;">
  <div style="border: 1px solid #e2e8f0; border-left: 5px solid #0284c7; background-color: #ffffff; padding: 14px; border-radius: 0 6px 6px 0; box-shadow: 0 1px 2px rgba(0,0,0,0.05);">
    <strong style="color: #0f172a; font-size: 15px;">Accent Border Card</strong>
    <p style="margin: 4px 0 0 0; color: #475569; font-size: 13px;">Thick solid left border highlighting container priority.</p>
  </div>
  <div style="border: 2px dashed #94a3b8; background-color: #f8fafc; padding: 16px; text-align: center; border-radius: 8px; color: #64748b; font-size: 13px;">
    Drag & Drop files here or click to browse
  </div>
  <span style="display: inline-block; border: 1px solid #10b981; color: #065f46; background-color: #d1fae5; padding: 4px 14px; border-radius: 9999px; font-size: 12px; font-weight: 600; width: fit-content;">&#10004; Verified Status</span>
</div>`,
          },
        ],
      },
    ],
    conclusion:
      "CSS borders give shape and delineation to modular UI items. Combining directional styling with calculated border-radius values turns plain square containers into tactile, polished interface components.",
  },

  // ================= TOPIC 8: CSS MARGINS AND PADDING =================
  {
    id: "css-margins-and-padding",
    title: "CSS Margins and Padding",
    subjectCode: "css",
    intro:
      "Margins and padding are the two fundamental spatial engines of web design. While both generate empty distance around elements, they operate on completely different sides of an element's border. Padding creates breathing room inside the container around its content, while margin pushes adjacent sibling containers away on the outside. Understanding their distinct mechanics is the foundation of balanced visual spacing.",
    sections: [
      {
        heading: "Padding vs. Margin: The Critical Differences",
        content: [
          {
            type: "text",
            value:
              "To avoid common layout bugs, developers must recognize how each property behaves with backgrounds, clicks, and collisions:",
          },
          {
            type: "list",
            items: [
              " Padding (Inner Spacing): Expands the element's hit-box and inherits the element's background color or texture. Increases clickable target areas for buttons and links.",
              " Margin (Outer Spacing): Completely transparent exterior space clearing distance between neighboring elements. Does not register click events for the element.",
              " Clockwise Shorthand Syntax: Both accept 1, 2, 3, or 4 values matching clockwise direction: [top] [right] [bottom] [left]. Example: padding: 10px 20px means 10px vertical and 20px horizontal.",
              " Margin Auto Centering: Setting margin: 0 auto horizontally centers any block-level element with an explicit width inside its parent.",
            ],
          },
        ],
      },
      {
        heading: "The Margin Collapsing Phenomenon",
        content: [
          {
            type: "text",
            value:
              "A frequent source of confusion for developers is <strong>Margin Collapsing</strong>. When the vertical bottom margin of an element touches the vertical top margin of the following sibling, they do not add together. Instead, the browser collapses them into a single margin equal to the largest single value.",
          },
          {
            type: "list",
            items: [
              " Sibling Collapsing: If paragraph A has margin-bottom: 30px and paragraph B has margin-top: 20px, the physical gap between them will be 30px, not 50px.",
              " Horizontal Margins Never Collapse: Left and right margins always add together mathematically.",
              " Flex and Grid Items Do Not Collapse: Margins between items inside Flexbox or CSS Grid containers never collapse.",
            ],
          },
        ],
      },
      {
        heading: "Visual Demonstration of Spacing Mechanics",
        content: [
          {
            type: "text",
            value:
              "The following example visualizes the exact boundary where internal padding ends and external margin begins between nested cards.",
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
  <title>CSS Spacing Demo</title>
  <style>
    .outer-canvas {
      background-color: #e2e8f0;
      padding: 20px; /* Internal spacing of outer frame */
      border-radius: 8px;
      font-family: sans-serif;
    }
    .card-one {
      background-color: #ffffff;
      border: 1px solid #cbd5e1;
      padding: 16px; /* Internal content room */
      margin-bottom: 16px; /* External clearance pushing Card Two */
      border-radius: 6px;
    }
    .card-two {
      background-color: #ffffff;
      border: 1px solid #cbd5e1;
      padding: 16px;
      border-radius: 6px;
    }
  </style>
</head>
<body>

  <div class="outer-canvas">
    <div class="card-one">
      <strong style="color: #0f172a;">Card One</strong>
      <p style="margin: 4px 0 0 0; color: #475569; font-size: 13px;">Uses padding: 16px internally and margin-bottom: 16px externally.</p>
    </div>

    <div class="card-two">
      <strong style="color: #0f172a;">Card Two</strong>
      <p style="margin: 4px 0 0 0; color: #475569; font-size: 13px;">Separated cleanly from Card One without overlapping borders.</p>
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
            value: `<div style="background-color: #e2e8f0; padding: 20px; border-radius: 8px; font-family: sans-serif; box-sizing: border-box;">
  <div style="background-color: #ffffff; border: 1px solid #cbd5e1; padding: 16px; margin-bottom: 14px; border-radius: 6px;">
    <strong style="color: #0f172a; font-size: 15px;">Card One</strong>
    <p style="margin: 4px 0 0 0; color: #475569; font-size: 13px;">Uses padding: 16px internally and margin-bottom: 14px externally.</p>
  </div>
  <div style="background-color: #ffffff; border: 1px solid #cbd5e1; padding: 16px; border-radius: 6px;">
    <strong style="color: #0f172a; font-size: 15px;">Card Two</strong>
    <p style="margin: 4px 0 0 0; color: #475569; font-size: 13px;">Separated cleanly from Card One without overlapping borders.</p>
  </div>
</div>`,
          },
        ],
      },
    ],
    conclusion:
      "Mastering padding and margin separates amateur layouts from professional user interfaces. Balancing inner content breathing room with intentional exterior element separation prevents visual clutter and establishes clear spatial rhythms across the page.",
  },

 // ================= TOPIC 9: CSS BOX MODEL =================
  {
    id: "css-box-model",
    title: "CSS Box Model",
    subjectCode: "css",
    intro:
      "The CSS Box Model is the universal geometric blueprint that underpins all digital layouts on the web. Every element rendered by a browser engine—whether a tiny button, an image tag, or an entire navigation header—is treated as a nested physical rectangular box. The box consists of four sequential concentric layers: Content, Padding, Border, and Margin. Grasping how these concentric layers calculate dimensions is essential for preventing layout bugs, content overflow, and broken responsive grids.",
    sections: [
      {
        heading: "The Four Layers of the Box Model",
        content: [
          {
            type: "text",
            value:
              "Calculated from the innermost core to the outermost boundary, every block element is assembled from four distinct regions:",
          },
          {
            type: "list",
            items: [
              " 1. Content: The core center area where text, images, or child nested elements live. Its dimensions are primarily governed by width and height.",
              " 2. Padding: The transparent internal cushion wrapping the content area. Background colors and textures expand into this zone.",
              " 3. Border: The outer perimeter wrapping around the padding and content. Visually bounds the element.",
              " 4. Margin: The completely transparent exterior buffer separating this element's boundary from neighboring sibling elements in the layout flow.",
            ],
          },
        ],
      },
      {
        heading: "content-box vs. border-box (The Modern Sizing Standard)",
        content: [
          {
            type: "text",
            value:
              "The <code>box-sizing</code> property determines how a browser calculates an element's total physical width and height on screen:",
          },
          {
            type: "list",
            items: [
              " content-box (Historical Default): If you declare width: 200px, padding: 20px, and border: 5px, the browser renders a box that is actually 250px wide (200 + 40 + 10). This unexpected expansion frequently causes responsive layouts to wrap and break.",
              " border-box (Modern Standard): When width: 200px is declared, the browser automatically absorbs internal padding and borders into that 200px threshold. The content area shrinks dynamically to preserve the exact declared width.",
              " The Universal Reset: Industry best practices apply box-sizing: border-box globally across all elements via *, *::before, *::after.",
            ],
          },
        ],
      },
      {
        heading: "Visual Demonstration of Sizing Calculation",
        content: [
          {
            type: "text",
            value:
              "Below is a runnable browser demonstration illustrating how <code>border-box</code> keeps component dimensions perfectly locked and predictable.",
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
  <title>CSS Box Model Demo</title>
  <style>
    .box-model-container {
      font-family: sans-serif;
      max-width: 420px;
    }
    .modern-card {
      box-sizing: border-box;
      width: 100%;
      padding: 20px;
      border: 3px solid #0284c7;
      margin: 12px 0;
      background-color: #f0f9ff;
      border-radius: 8px;
    }
    .content-highlight {
      background-color: #bae6fd;
      border: 1px dashed #0369a1;
      padding: 10px;
      border-radius: 4px;
      text-align: center;
      color: #0369a1;
      font-weight: 600;
      font-size: 13px;
    }
  </style>
</head>
<body>

  <div class="box-model-container">
    <div class="modern-card">
      <div class="content-highlight">
        Inner Content Area (Safe Inside Padding & Border)
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
            value: `<div style="font-family: sans-serif; max-width: 420px; box-sizing: border-box;">
  <div style="box-sizing: border-box; width: 100%; padding: 20px; border: 3px solid #0284c7; margin: 10px 0; background-color: #f0f9ff; border-radius: 8px;">
    <div style="background-color: #bae6fd; border: 1px dashed #0369a1; padding: 10px; border-radius: 4px; text-align: center; color: #0369a1; font-weight: 600; font-size: 13px;">
      Inner Content Area (Safe Inside Padding & Border)
    </div>
  </div>
</div>`,
          },
        ],
      },
    ],
    conclusion:
      "The CSS Box Model is the cornerstone of browser geometry. Enforcing `box-sizing: border-box` across your stylesheet guarantees predictable dimensional math, eliminating accidental wrapping in responsive columns and fluid containers.",
  },

  // ================= TOPIC 10: CSS HEIGHT AND WIDTH =================
  {
    id: "css-height-and-width",
    title: "CSS Height and Width",
    subjectCode: "css",
    intro:
      "Controlling the physical dimensions of UI containers is fundamental to modern interface construction. While fixed dimensions were common in early web design, contemporary development relies on flexible constraints: maximum boundaries, minimum thresholds, and fluid dimensional ratios that adapt smoothly as browser viewports scale across mobile, tablet, and desktop screens.",
    sections: [
      {
        heading: "Dimensional Properties Breakdown",
        content: [
          {
            type: "text",
            value:
              "CSS offers six core dimensional properties that dictate how containers behave under different content volumes and screen widths:",
          },
          {
            type: "list",
            items: [
              " width & height: Sets an explicit length (px, rem) or percentage relative to the parent element's content area.",
              " max-width: Sets an upper boundary. The element will stretch up to this value, but contracts fluidly on viewports narrower than this threshold (indispensable for mobile-friendly containers).",
              " min-width: Sets a lower boundary below which an element cannot shrink, preventing internal content from collapsing.",
              " max-height & min-height: Controls vertical expansion limits. Useful for keeping dropdowns or scrollable modals within screen limits.",
              " auto: The default calculation. For width, block elements naturally take 100% of available space; for height, containers expand dynamically to fit their internal content.",
            ],
          },
        ],
      },
      {
        heading: "Preventing Mobile Breakage with max-width: 100%",
        content: [
          {
            type: "text",
            value:
              "A hardcoded <code>width: 600px</code> will trigger an ugly horizontal scrollbar on a smartphone with a 390px viewport. In contrast, setting <code>max-width: 600px; width: 100%;</code> ensures the container expands up to 600px on desktop screens while shrinking fluidly on smaller mobile viewports.",
          },
        ],
      },
      {
        heading: "Fixed vs. Fluid Dimension Demonstration",
        content: [
          {
            type: "text",
            value:
              "The following example illustrates the direct behavioral difference between a rigid container and a fluid, max-width bounded component.",
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
  <title>CSS Dimensions Demo</title>
  <style>
    .demo-wrapper {
      font-family: sans-serif;
      padding: 16px;
      background-color: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
    }
    .fluid-card {
      width: 100%;
      max-width: 360px;
      min-height: 70px;
      background-color: #dbeafe;
      border: 1px solid #93c5fd;
      border-radius: 6px;
      padding: 12px;
      box-sizing: border-box;
      color: #1e40af;
      font-size: 13px;
    }
  </style>
</head>
<body>

  <div class="demo-wrapper">
    <div class="fluid-card">
      <strong>Fluid Bounded Card (max-width: 360px)</strong><br/>
      Expands up to 360px on wide screens, but shrinks fluidly on smaller mobile devices without triggering horizontal scrollbars.
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
            value: `<div style="font-family: sans-serif; padding: 16px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px;">
  <div style="width: 100%; max-width: 360px; min-height: 70px; background-color: #dbeafe; border: 1px solid #93c5fd; border-radius: 6px; padding: 12px; box-sizing: border-box; color: #1e40af; font-size: 13px;">
    <strong>Fluid Bounded Card (max-width: 360px)</strong><br/>
    Expands up to 360px on wide screens, but shrinks fluidly on smaller mobile devices without triggering horizontal scrollbars.
  </div>
</div>`,
          },
        ],
      },
    ],
    conclusion:
      "Writing fluid interfaces means favoring `max-width` constraints over rigid fixed dimensions. Allowing containers to adapt to dynamic content length and screen dimensions guarantees responsive stability across the entire device ecosystem.",
  },

  // ================= TOPIC 11: CSS TEXT FORMATTING =================
  {
    id: "css-text-formatting",
    title: "CSS Text Formatting",
    subjectCode: "css",
    intro:
      "Typography is the primary vehicle for transmitting knowledge on the web. CSS text formatting properties empower developers to fine-tune readability, establish structural visual hierarchy, control paragraph rhythms, and modify capitalization without altering underlying semantic HTML. Balanced line lengths, deliberate letter-spacing, and clear alignment transform dense walls of text into scannable, engaging reading experiences.",
    sections: [
      {
        heading: "Essential CSS Text Formatting Properties",
        content: [
          {
            type: "text",
            value:
              "Text properties govern how character glyphs and sentences arrange themselves inside their parent block containers:",
          },
          {
            type: "list",
            items: [
              " text-align: Aligns text horizontally (left, right, center, justify). Left-alignment is universally recommended for body text in Western languages to maintain a consistent reading baseline.",
              " text-decoration: Manages underlines, strikethroughs, and overlines (e.g., text-decoration: none strips default browser link lines).",
              " text-transform: Alters character casing dynamically (uppercase, lowercase, capitalize) without changing the raw HTML string.",
              " letter-spacing: Fine-tunes horizontal spacing between characters (tracking). Essential for improving legibility in uppercase headings.",
              " line-height: Controls the vertical space between lines of text (leading). Optimal readability requires a line-height between 1.5 and 1.7 for body paragraphs.",
              " text-indent & word-spacing: Controls opening paragraph indentation and distance between entire word blocks.",
            ],
          },
        ],
      },
      {
        heading: "Editorial Typography & Visual Hierarchy",
        content: [
          {
            type: "text",
            value:
              "Below is a demonstration of how intentional line heights, tracking, and text transformations combine to build a modern editorial article header and body component.",
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
  <title>CSS Text Formatting Demo</title>
  <style>
    .article-container {
      font-family: sans-serif;
      max-width: 480px;
      padding: 20px;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
    }
    .eyebrow-tag {
      text-transform: uppercase;
      letter-spacing: 1.5px;
      font-size: 11px;
      font-weight: 700;
      color: #0284c7;
      margin-bottom: 6px;
    }
    .article-title {
      font-size: 20px;
      font-weight: 800;
      color: #0f172a;
      line-height: 1.3;
      margin: 0 0 10px 0;
    }
    .article-body {
      color: #475569;
      font-size: 14px;
      line-height: 1.65;
      margin: 0;
    }
  </style>
</head>
<body>

  <div class="article-container">
    <div class="eyebrow-tag">Frontend Architecture</div>
    <h3 class="article-title">The Discipline of Editorial Typography</h3>
    <p class="article-body">
      Balanced typography relies on adequate line spacing and deliberate tracking. 
      When body copy uses a comfortable line-height, users read with less ocular strain 
      and retain complex information with greater ease.
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
            value: `<div style="font-family: sans-serif; max-width: 480px; padding: 20px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; box-sizing: border-box;">
  <div style="text-transform: uppercase; letter-spacing: 1.5px; font-size: 11px; font-weight: 700; color: #0284c7; margin-bottom: 6px;">Frontend Architecture</div>
  <h3 style="font-size: 18px; font-weight: 800; color: #0f172a; line-height: 1.3; margin: 0 0 10px 0;">The Discipline of Editorial Typography</h3>
  <p style="color: #475569; font-size: 14px; line-height: 1.65; margin: 0;">
    Balanced typography relies on adequate line spacing and deliberate tracking. 
    When body copy uses a comfortable line-height, users read with less ocular strain 
    and retain complex information with greater ease.
  </p>
</div>`,
          },
        ],
      },
      {
        heading: "Best Practices for Web Readability",
        content: [
          {
            type: "list",
            items: [
              " Avoid Full Justification (text-align: justify): Full justification on the web creates uneven 'rivers of whitespace' between words, which severely hinders legibility for readers with dyslexia.",
              " Unitless Line Heights: Always declare line-height as a unitless ratio (e.g., line-height: 1.6) rather than fixed pixels, ensuring child elements scale their line height proportionally if font sizes adjust.",
            ],
          },
        ],
      },
    ],
    conclusion:
      "Polished text formatting is what elevates a raw site into an authoritative publication. Applying proportional line-heights, disciplined letter-spacing, and clear visual hierarchies ensures optimal reading comfort and accessibility across all screen sizes.",
  },

  // ================= TOPIC 12: CSS FONTS =================
  {
    id: "css-fonts",
    title: "CSS Fonts",
    subjectCode: "css",
    intro:
      "Typography defines the character, voice, and identity of a website. CSS font properties give developers complete control over typeface selection, weights, typographic slants, and sizes. From leveraging system-native font stacks for instant zero-latency rendering to importing bespoke external web fonts via the @font-face directive, CSS provides the tools necessary to craft distinctive, accessible, and fast-loading web typography.",
    sections: [
      {
        heading: "The Core CSS Font Properties Suite",
        content: [
          {
            type: "text",
            value:
              "Font styles are controlled using a collection of specialized sub-properties, or unified through the comprehensive font shorthand:",
          },
          {
            type: "list",
            items: [
              " font-family: Defines a prioritized fallback list of typefaces, ending with a generic system family (serif, sans-serif, monospace, cursive, fantasy).",
              " font-size: Establishes text scale. Relative units like rem and em are preferred over px to respect user browser accessibility preferences.",
              " font-weight: Specifies letter thickness, ranging from numeric values 100 (Thin) to 900 (Black), with 400 representing Normal and 700 representing Bold.",
              " font-style: Toggles standard vertical lettering versus italic or oblique slants.",
              " font-display: An essential @font-face descriptor that controls how web fonts render during network downloads (e.g., swap prevents invisible text while fonts load).",
            ],
          },
        ],
      },
      {
        heading: "System Font Stacks & Modern Web Performance",
        content: [
          {
            type: "text",
            value:
              "A 'System Font Stack' instructs the browser to use the pre-installed operating system font (San Francisco on Apple, Segoe UI on Windows, Roboto on Android). Because system fonts require no external network downloads, they eliminate Flash of Unstyled Text (FOUT), reduce layout shifts, and deliver near-instantaneous page render speeds.",
          },
        ],
      },
      {
        heading: "Typography Stacks Demonstration",
        content: [
          {
            type: "text",
            value:
              "The following example contrasts a modern system sans-serif interface stack against a dedicated developer monospaced code snippet card.",
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
  <title>CSS Fonts Demo</title>
  <style>
    .typography-card {
      max-width: 480px;
      padding: 20px;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
    }
    .system-font-heading {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 18px;
      font-weight: 700;
      color: #0f172a;
      margin: 0 0 6px 0;
    }
    .system-font-body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 14px;
      color: #475569;
      line-height: 1.6;
      margin: 0 0 14px 0;
    }
    .code-pill {
      font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
      font-size: 12px;
      background-color: #f1f5f9;
      color: #0f172a;
      padding: 6px 12px;
      border-radius: 4px;
      display: inline-block;
      border: 1px solid #cbd5e1;
    }
  </style>
</head>
<body>

  <div class="typography-card">
    <h3 class="system-font-heading">System-Native Typography</h3>
    <p class="system-font-body">
      Using native system font stacks guarantees zero network lag and provides familiar typography on every operating system.
    </p>
    <div class="code-pill">const layoutEngine = "CSS3";</div>
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
            value: `<div style="max-width: 480px; padding: 20px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; box-sizing: border-box;">
  <h3 style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 18px; font-weight: 700; color: #0f172a; margin: 0 0 6px 0;">System-Native Typography</h3>
  <p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; color: #475569; line-height: 1.6; margin: 0 0 14px 0;">
    Using native system font stacks guarantees zero network lag and provides familiar typography on every operating system.
  </p>
  <div style="font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace; font-size: 12px; background-color: #f1f5f9; color: #0f172a; padding: 6px 12px; border-radius: 4px; display: inline-block; border: 1px solid #cbd5e1;">const layoutEngine = "CSS3";</div>
</div>`,
          },
        ],
      },
    ],
    conclusion:
      "Thoughtful font styling sets the tone for your entire product. Prioritizing legible fallback stacks, implementing `font-display: swap` for remote assets, and declaring sizes in relative `rem` units guarantees scalable, high-performance web typography.",
  },
  // ================= TOPIC 13: CSS ICONS =================
  {
    id: "css-icons",
    title: "CSS Icons",
    subjectCode: "css",
    intro:
      "Icons play a critical role in modern web interfaces by providing instant visual cues, improving navigational usability, and reducing visual clutter. In CSS, icons are integrated using vector icon libraries, scalable vector graphics (SVGs), or font-based icon sets like Font Awesome, Google Material Symbols, and Bootstrap Icons. Because they are treated as vector graphics or fonts, you can manipulate their size, color, shadows, and hover animations seamlessly using standard CSS properties.",
    sections: [
      {
        heading: "How Icons Work in CSS",
        content: [
          {
            type: "text",
            value:
              "In web development, icons are rarely rendered as pixelated image files (like PNGs or JPEGs) because raster images lose sharpness on high-resolution Retina displays. Instead, developers rely on scalable vector formats that can be styled completely with CSS rules.",
          },
          {
            type: "list",
            items: [
              " Font Icon Kits: Services like Font Awesome turn vector symbols into custom web fonts. You customize their scale using font-size and color using the standard CSS color property.",
              " Inline SVG Icons: Embedding raw SVG code directly into HTML allows pinpoint CSS targeting for properties like fill, stroke, and stroke-width.",
              " Unicode Characters: Simple native browser symbols (such as arrows, stars, and checkmarks) that require no external HTTP requests.",
              " Performance Optimization: Font and SVG icon sets can be cached effectively, eliminating latency and reducing page load times.",
            ],
          },
        ],
      },
      {
        heading: "Styling Icons with Colors, Sizes, and Spacing",
        content: [
          {
            type: "text",
            value:
              "When an icon is rendered via font glyphs or inline SVGs, regular typographic and layout rules apply. You can set line-height, margin, cursor states, and background containers to build clean badges and actionable buttons.",
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
  <title>CSS Icon Badges</title>
  <style>
    .icon-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 16px;
      background-color: #f0fdf4;
      border: 1px solid #bbf7d0;
      border-radius: 9999px;
      color: #166534;
      font-family: sans-serif;
      font-size: 14px;
      font-weight: 600;
    }
    .icon-symbol {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 22px;
      height: 22px;
      background-color: #22c55e;
      color: #ffffff;
      border-radius: 50%;
      font-size: 12px;
    }
  </style>
</head>
<body>

  <div class="icon-badge">
    <span class="icon-symbol">&#10003;</span>
    <span>Payment Verified</span>
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
            value: `<div style="font-family: sans-serif; padding: 8px 0;">
  <div style="display: inline-flex; align-items: center; gap: 8px; padding: 10px 16px; background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 9999px; color: #166534; font-size: 14px; font-weight: 600;">
    <span style="display: inline-flex; justify-content: center; align-items: center; width: 22px; height: 22px; background-color: #22c55e; color: #ffffff; border-radius: 50%; font-size: 12px;">&#10003;</span>
    <span>Payment Verified</span>
  </div>
</div>`,
          },
        ],
      },
      {
        heading: "Best Practices & Accessibility for Icons",
        content: [
          {
            type: "list",
            items: [
              " Accessible Names: Always pair standalone icon buttons with aria-label attributes so screen readers can announce their purpose.",
              " Scalability: Stick with relative units (em, rem) for icon sizes so they automatically scale when parent text sizes adjust.",
              " Avoid Heavy Libraries: If your page only uses 3 icons, avoid importing entire multi-megabyte icon libraries; use inline SVG snippets instead.",
            ],
          },
        ],
      },
    ],
    conclusion:
      "CSS icon integration enhances user comprehension and interface polish. Using lightweight vector icons styled through native font and color declarations ensures sharp rendering and peak responsive performance across all screen resolutions.",
  },

  // ================= TOPIC 14: CSS LINKS =================
  {
    id: "css-links",
    title: "CSS Links",
    subjectCode: "css",
    intro:
      "Hyperlinks are the primary connective tissue of the World Wide Web. By default, browsers display links as blue underlined text, and purple when visited. With CSS, you can completely transform hyperlinks to match your brand identity, convert them into interactive buttons, and trigger responsive hover states using state-based pseudo-classes.",
    sections: [
      {
        heading: "The 4 Link States (Pseudo-classes)",
        content: [
          {
            type: "text",
            value:
              "A hyperlink cycles through different interaction states based on user behavior. CSS gives you full control over these states using pseudo-classes. To function correctly without cascade conflicts, these states must strictly follow the <strong>LVHA</strong> order:",
          },
          {
            type: "list",
            items: [
              " :link - Targets an unvisited hyperlink that has not yet been clicked by the user.",
              " :visited - Targets a link the user has previously navigated to in their browser history.",
              " :hover - Activates when the user hovers their cursor or pointing device over the link.",
              " :active - Triggers the exact split second the user clicks down on the link.",
            ],
          },
        ],
      },
      {
        heading: "Converting Links into Styled Buttons",
        content: [
          {
            type: "text",
            value:
              "In contemporary UI design, call-to-action (CTA) links are styled as buttons by stripping standard underlines and adding background colors, padding, and smooth transition properties.",
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
  <title>CSS Link Buttons</title>
  <style>
    .cta-link {
      display: inline-block;
      text-decoration: none;
      background-color: #2563eb;
      color: #ffffff;
      padding: 12px 24px;
      font-family: sans-serif;
      font-size: 15px;
      font-weight: 600;
      border-radius: 6px;
      box-shadow: 0 2px 4px rgba(37, 99, 235, 0.2);
    }
    .text-link {
      color: #0284c7;
      text-decoration: none;
      font-family: sans-serif;
      font-size: 15px;
      font-weight: 500;
      border-bottom: 2px solid transparent;
      margin-left: 16px;
    }
  </style>
</head>
<body>

  <a href="#" class="cta-link">Get Started Now &rarr;</a>
  <a href="#" class="text-link">Read Documentation</a>

</body>
</html>`,
          },
          {
            type: "text",
            value: "<strong>Output:</strong>",
          },
          {
            type: "text",
            value: `<div style="font-family: sans-serif; padding: 10px 0; display: flex; align-items: center;">
  <a href="#" style="display: inline-block; text-decoration: none; background-color: #2563eb; color: #ffffff; padding: 12px 24px; font-size: 15px; font-weight: 600; border-radius: 6px; box-shadow: 0 2px 4px rgba(37, 99, 235, 0.2);">Get Started Now &rarr;</a>
  <a href="#" style="color: #0284c7; text-decoration: underline; font-size: 15px; font-weight: 500; margin-left: 16px;">Read Documentation</a>
</div>`,
          },
        ],
      },
      {
        heading: "Link Usability & Focus Indicators",
        content: [
          {
            type: "list",
            items: [
              " Keyboard Accessibility: Never remove the outline property completely without replacing it with an explicit :focus or :focus-visible style for keyboard navigators.",
              " Text Distinction: Ensure hyperlinks inside paragraphs have enough contrast against regular body text so users can clearly identify click targets.",
            ],
          },
        ],
      },
    ],
    conclusion:
      "Styling links properly is essential for site engagement. Following the LVHA order, maintaining clear focus outlines, and converting links into obvious action items significantly enhances user experience and navigational flow.",
  },

  // ================= TOPIC 15: CSS LISTS =================
  {
    id: "css-lists",
    title: "CSS Lists",
    subjectCode: "css",
    intro:
      "HTML lists (ordered <ol> and unordered <ul>) are naturally styled with bullet points or ascending numbers and heavy default indentation. In CSS, list properties allow you to change bullet styles, replace bullets with custom images, or remove default spacing entirely to turn raw lists into modern navigation bars, tag sets, and card grids.",
    sections: [
      {
        heading: "Core CSS List Properties",
        content: [
          {
            type: "text",
            value:
              "CSS offers dedicated properties to configure list markers and how they interact with container boundaries.",
          },
          {
            type: "list",
            items: [
              " list-style-type: Defines bullet marker style (e.g., disc, circle, square, decimal, lower-alpha, or none).",
              " list-style-position: Controls marker placement (outside places bullets beyond content flow; inside tucks them inside text margins).",
              " list-style-image: Replaces standard bullets with custom external image assets.",
              " list-style: Convenient shorthand combining type, position, and image.",
            ],
          },
        ],
      },
      {
        heading: "Building Navigation Menus from Lists",
        content: [
          {
            type: "text",
            value:
              "Semantic web design recommends structuring site headers using unordered lists. By setting <code>list-style: none</code>, zeroing margins and padding, and using <code>display: flex</code>, a vertical list becomes a modern horizontal navigation bar.",
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
  <title>CSS List Navigation</title>
  <style>
    .nav-list {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      background-color: #0f172a;
      border-radius: 8px;
      overflow: hidden;
      font-family: sans-serif;
    }
    .nav-item a {
      display: block;
      color: #94a3b8;
      text-decoration: none;
      padding: 14px 20px;
      font-size: 14px;
      font-weight: 500;
    }
    .nav-item.active a {
      color: #ffffff;
      background-color: #1e293b;
      font-weight: 600;
    }
  </style>
</head>
<body>

  <ul class="nav-list">
    <li class="nav-item active"><a href="#">Home</a></li>
    <li class="nav-item"><a href="#">Tutorials</a></li>
    <li class="nav-item"><a href="#">Projects</a></li>
    <li class="nav-item"><a href="#">Contact</a></li>
  </ul>

</body>
</html>`,
          },
          {
            type: "text",
            value: "<strong>Output:</strong>",
          },
          {
            type: "text",
            value: `<ul style="list-style: none; margin: 0; padding: 0; display: flex; background-color: #0f172a; border-radius: 8px; overflow: hidden; font-family: sans-serif;">
  <li style="display: block;"><a href="#" style="display: block; color: #ffffff; background-color: #1e293b; text-decoration: none; padding: 14px 20px; font-size: 14px; font-weight: 600;">Home</a></li>
  <li style="display: block;"><a href="#" style="display: block; color: #94a3b8; text-decoration: none; padding: 14px 20px; font-size: 14px; font-weight: 500;">Tutorials</a></li>
  <li style="display: block;"><a href="#" style="display: block; color: #94a3b8; text-decoration: none; padding: 14px 20px; font-size: 14px; font-weight: 500;">Projects</a></li>
  <li style="display: block;"><a href="#" style="display: block; color: #94a3b8; text-decoration: none; padding: 14px 20px; font-size: 14px; font-weight: 500;">Contact</a></li>
</ul>`,
          },
        ],
      },
      {
        heading: "Important Reset Technique for Lists",
        content: [
          {
            type: "text",
            value:
              "Browsers attach an automatic 40px left padding to every <code>&lt;ul&gt;</code> and <code>&lt;ol&gt;</code>. Whenever you reset a list with <code>list-style: none</code>, you should always reset <code>padding: 0</code> and <code>margin: 0</code> to eliminate unintended indentation bugs.",
          },
        ],
      },
    ],
    conclusion:
      "CSS list properties bridge semantic HTML structure with flexible visual components. Whether building clean numbered feature steps or full responsive headers, mastering list resets and marker positioning is a fundamental skill.",
  },

  // ================= TOPIC 16: CSS TABLES =================
  {
    id: "css-tables",
    title: "CSS Tables",
    subjectCode: "css",
    intro:
      "HTML tables organize structured, multi-dimensional data such as analytics reports, pricing matrixes, and financial records. While unstyled browser tables appear plain and difficult to read, CSS table styling provides border collapsing, zebra striping, sticky headers, cell padding, and responsive wrapping to turn raw datasets into professional data dashboards.",
    sections: [
      {
        heading: "Key CSS Table Properties",
        content: [
          {
            type: "text",
            value:
              "Styling tables effectively requires understanding how table borders and cell alignments interact across rows and columns.",
          },
          {
            type: "list",
            items: [
              " border-collapse: collapse: Eliminates double borders between adjacent cells, merging them into single crisp dividing lines.",
              " border-spacing: Controls separation distance between cells when borders are not collapsed.",
              " text-align: Formats text alignment (standard convention is left-align for text, right-align for numerical values).",
              " vertical-align: Controls vertical alignment (top, middle, bottom) inside table cells.",
            ],
          },
        ],
      },
      {
        heading: "Creating a Striped, Professional Data Table",
        content: [
          {
            type: "text",
            value:
              "Zebra-striping using the <code>:nth-child(even)</code> pseudo-class improves scanability across wide datasets, making it easy for users to track individual records.",
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
  <title>CSS Data Table</title>
  <style>
    .data-table {
      width: 100%;
      border-collapse: collapse;
      font-family: sans-serif;
      font-size: 14px;
      text-align: left;
    }
    .data-table th {
      background-color: #f8fafc;
      color: #334155;
      font-weight: 600;
      padding: 12px;
      border-bottom: 2px solid #cbd5e1;
    }
    .data-table td {
      padding: 12px;
      border-bottom: 1px solid #e2e8f0;
      color: #475569;
    }
    .data-table tr:nth-child(even) {
      background-color: #f8fafc;
    }
    .status-active {
      color: #16a34a;
      font-weight: 600;
    }
  </style>
</head>
<body>

  <table class="data-table">
    <thead>
      <tr>
        <th>Student Name</th>
        <th>Course</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Aarav Sharma</td>
        <td>Full Stack Web Dev</td>
        <td class="status-active">Enrolled</td>
      </tr>
      <tr>
        <td>Priya Verma</td>
        <td>UI/UX Design</td>
        <td class="status-active">Enrolled</td>
      </tr>
      <tr>
        <td>Rohan Mehta</td>
        <td>Frontend Mastery</td>
        <td class="status-active">Enrolled</td>
      </tr>
    </tbody>
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
            value: `<table style="width: 100%; border-collapse: collapse; font-family: sans-serif; font-size: 14px; text-align: left;">
  <thead>
    <tr>
      <th style="background-color: #f8fafc; color: #334155; font-weight: 600; padding: 12px; border-bottom: 2px solid #cbd5e1;">Student Name</th>
      <th style="background-color: #f8fafc; color: #334155; font-weight: 600; padding: 12px; border-bottom: 2px solid #cbd5e1;">Course</th>
      <th style="background-color: #f8fafc; color: #334155; font-weight: 600; padding: 12px; border-bottom: 2px solid #cbd5e1;">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background-color: #ffffff;">
      <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #475569;">Aarav Sharma</td>
      <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #475569;">Full Stack Web Dev</td>
      <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #16a34a; font-weight: 600;">Enrolled</td>
    </tr>
    <tr style="background-color: #f8fafc;">
      <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #475569;">Priya Verma</td>
      <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #475569;">UI/UX Design</td>
      <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #16a34a; font-weight: 600;">Enrolled</td>
    </tr>
    <tr style="background-color: #ffffff;">
      <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #475569;">Rohan Mehta</td>
      <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #475569;">Frontend Mastery</td>
      <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #16a34a; font-weight: 600;">Enrolled</td>
    </tr>
  </tbody>
</table>`,
          },
        ],
      },
      {
        heading: "Handling Mobile Responsive Tables",
        content: [
          {
            type: "text",
            value:
              "Tables do not shrink naturally past their minimum cell content width. To ensure mobile devices don't break, wrap your table inside an outer container element styled with <code>overflow-x: auto; -webkit-overflow-scrolling: touch;</code> so mobile visitors can scroll sideways without breaking the viewport.",
          },
        ],
      },
    ],
    conclusion:
      "CSS table styling brings order and clarity to massive datasets. Combining `border-collapse: collapse`, alternating row colors, adequate cell padding, and responsive overflow wrappers makes numerical and tabular data easy to digest on any screen.",
  },
  // ================= TOPIC 17: CSS DISPLAY PROPERTY =================
  {
    id: "css-display-property",
    title: "CSS Display Property",
    subjectCode: "css",
    intro:
      "The CSS display property is the single most important property for controlling layout behavior on the web. It dictates how an element renders in relation to surrounding content—whether it forces a new line as a block-level container, flows inline with body copy, combines both characteristics as an inline-block component, or completely vanishes from the document tree using display: none.",
    sections: [
      {
        heading: "Core Display Values Explained",
        content: [
          {
            type: "text",
            value:
              "Every HTML element comes with a default display value assigned by the browser (usually block or inline). Overriding this default value enables flexible design composition.",
          },
          {
            type: "list",
            items: [
              " block: Takes up the full available width of its parent container and always starts on a fresh line (e.g., <div>, <h1>, <p>). Respects explicit width, height, padding, and margin.",
              " inline: Takes up only as much width as its internal text/content requires and sits side-by-side with adjacent elements (e.g., <span>, <a>, <strong>). Does NOT respect top/bottom margins or explicit width/height.",
              " inline-block: Flows alongside neighboring text like an inline element, but fully respects explicit width, height, and all padding/margin directions like a block element.",
              " none: Completely removes the element from rendering and layout calculation. The browser behaves as if the markup does not exist.",
            ],
          },
        ],
      },
      {
        heading: "Comparing Block, Inline, and Inline-Block",
        content: [
          {
            type: "text",
            value:
              "The following example illustrates the direct behavioral contrast between block, inline, and inline-block badges inside a standard layout.",
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
  <title>CSS Display Demo</title>
  <style>
    .block-box {
      display: block;
      background-color: #dbeafe;
      color: #1e40af;
      padding: 10px;
      margin-bottom: 10px;
      border-radius: 4px;
      font-family: sans-serif;
    }
    .inline-tag {
      display: inline;
      background-color: #fee2e2;
      color: #991b1b;
      padding: 4px 8px;
      border-radius: 4px;
      font-family: sans-serif;
    }
    .inline-block-btn {
      display: inline-block;
      width: 140px;
      text-align: center;
      background-color: #0284c7;
      color: #ffffff;
      padding: 8px 12px;
      margin-left: 8px;
      border-radius: 4px;
      font-family: sans-serif;
      font-weight: 500;
    }
  </style>
</head>
<body>

  <div class="block-box">Block Element: Takes full available width</div>
  
  <span>Surrounding text with an </span>
  <span class="inline-tag">inline badge</span>
  <span> followed by an </span>
  <div class="inline-block-btn">inline-block button</div>

</body>
</html>`,
          },
          {
            type: "text",
            value: "<strong>Output:</strong>",
          },
          {
            type: "text",
            value: `<div style="font-family: sans-serif; font-size: 14px;">
  <div style="display: block; background-color: #dbeafe; color: #1e40af; padding: 10px; margin-bottom: 10px; border-radius: 4px; font-weight: 500;">Block Element: Takes full available width</div>
  <div style="margin-top: 8px;">
    <span>Surrounding text with an </span>
    <span style="display: inline; background-color: #fee2e2; color: #991b1b; padding: 4px 8px; border-radius: 4px; font-weight: bold;">inline badge</span>
    <span> followed by an </span>
    <div style="display: inline-block; width: 140px; text-align: center; background-color: #0284c7; color: #ffffff; padding: 8px 12px; margin-left: 8px; border-radius: 4px; font-weight: 500;">inline-block button</div>
  </div>
</div>`,
          },
        ],
      },
      {
        heading: "display: none vs. visibility: hidden",
        content: [
          {
            type: "text",
            value:
              "A frequent source of developer confusion is the distinction between hiding elements using display versus visibility:",
          },
          {
            type: "list",
            items: [
              " display: none: Removes the element entirely from the visual flow. Surrounding elements collapse into the empty space.",
              " visibility: hidden: Hides the element visually, but its physical footprint, width, and height remain occupied on the page.",
            ],
          },
        ],
      },
    ],
    conclusion:
      "Understanding the mechanics of the display property is the gateway to mastering modern web architecture. It forms the base foundation before progressing to advanced multidimensional layout modules like Flexbox and CSS Grid.",
  },

  // ================= TOPIC 18: CSS POSITION =================
  {
    id: "css-position",
    title: "CSS Position",
    subjectCode: "css",
    intro:
      "The CSS position property specifies the exact positioning algorithm used to compute the physical coordinates of an element. By pairing positioning types with offset properties (top, right, bottom, left), developers can build floating tooltips, sticky navigation bars, modal overlays, and pinned badges with pixel-level precision.",
    sections: [
      {
        heading: "The 5 CSS Position Values",
        content: [
          {
            type: "text",
            value:
              "Each position keyword alters how the browser calculates an element's placement relative to the document flow or reference containers.",
          },
          {
            type: "list",
            items: [
              " static: Default browser setting. Elements follow the natural top-to-bottom, left-to-right document flow. Offsets (top, left, etc.) have no effect.",
              " relative: Keeps the element in its normal document space, but allows offsetting it relative to where it would naturally sit without disturbing neighboring elements.",
              " absolute: Removes the element completely from document flow and positions it relative to its closest non-static ancestor container (commonly an ancestor with position: relative).",
              " fixed: Removes the element from document flow and positions it relative to the browser viewport window. It stays in place during user scrolling.",
              " sticky: A hybrid state. Behaves as position: relative until a specified scroll threshold is crossed in the viewport, after which it latches into position like fixed.",
            ],
          },
        ],
      },
      {
        heading: "Real-World Pattern: Relative Parent with Absolute Child",
        content: [
          {
            type: "text",
            value:
              "The most widely adopted design pattern in UI components involves making a parent card <code>position: relative</code> so that child badges can be pinned to exact corners using <code>position: absolute</code>.",
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
  <title>Relative & Absolute Positioning</title>
  <style>
    .product-card {
      position: relative;
      width: 260px;
      padding: 20px;
      background-color: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      font-family: sans-serif;
    }
    .badge-sale {
      position: absolute;
      top: -10px;
      right: -10px;
      background-color: #ef4444;
      color: #ffffff;
      padding: 4px 10px;
      border-radius: 9999px;
      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;
    }
  </style>
</head>
<body>

  <div class="product-card">
    <span class="badge-sale">50% Off</span>
    <h3 style="margin: 0 0 6px 0; color: #0f172a;">Wireless Headphones</h3>
    <p style="margin: 0; color: #64748b; font-size: 14px;">Premium noise cancellation audio gear.</p>
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
            value: `<div style="padding: 14px 10px; font-family: sans-serif;">
  <div style="position: relative; width: 260px; padding: 20px; background-color: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
    <span style="position: absolute; top: -10px; right: -10px; background-color: #ef4444; color: #ffffff; padding: 4px 10px; border-radius: 9999px; font-size: 12px; font-weight: bold; text-transform: uppercase;">50% Off</span>
    <h3 style="margin: 0 0 6px 0; color: #0f172a; font-size: 16px;">Wireless Headphones</h3>
    <p style="margin: 0; color: #64748b; font-size: 14px;">Premium noise cancellation audio gear.</p>
  </div>
</div>`,
          },
        ],
      },
      {
        heading: "Important Rules When Using Positioning",
        content: [
          {
            type: "list",
            items: [
              " Anchor Context: An absolute element will travel all the way up to the <body> tag if none of its ancestor parents declare a relative, absolute, or sticky position.",
              " Document Reflow: Remember that absolute and fixed elements vacate their original space, which causes subsequent sibling elements to shift upward to fill the gap.",
            ],
          },
        ],
      },
    ],
    conclusion:
      "Mastery of the CSS position property gives you full spatial control over your viewport. Combining relative wrappers with absolute anchors allows you to engineer complex, responsive UI components without unintended overlap.",
  },

  // ================= TOPIC 19: CSS Z-INDEX =================
  {
    id: "css-z-index",
    title: "CSS Z-Index",
    subjectCode: "css",
    intro:
      "The CSS z-index property controls the vertical stacking order of overlapping elements along the virtual Z-axis (pointing outward toward the viewer). By assigning numerical values, developers can dictate which elements sit on top of others, preventing unwanted overlap bugs in sticky headers, dropdown menus, modals, and floating action buttons.",
    sections: [
      {
        heading: "How Z-Index Works & Stacking Contexts",
        content: [
          {
            type: "text",
            value:
              "The most common beginner trap with z-index is applying it to an element without defining its positioning. By default, <strong>z-index only functions on positioned elements</strong> (elements whose position is set to relative, absolute, fixed, or sticky).",
          },
          {
            type: "list",
            items: [
              " Default Stacking: Without z-index, elements appearing later in the HTML source code automatically stack on top of earlier siblings.",
              " Positive Values: Elements with higher integers (e.g., z-index: 10) render in front of elements with lower integers (e.g., z-index: 1).",
              " Negative Values: Allows an element to slip behind its normal parent content (e.g., z-index: -1 for decorative background shapes).",
              " Stacking Context: A self-contained layer hierarchy created by properties like opacity less than 1, transform, or position with z-index. Child layers cannot break outside their parent's stack.",
            ],
          },
        ],
      },
      {
        heading: "Visual Demonstration of Layer Stacking",
        content: [
          {
            type: "text",
            value:
              "Below, two overlapping positioned cards demonstrate how explicitly setting <code>z-index: 2</code> pulls Card 1 above Card 2, reversing the natural document order.",
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
  <title>CSS Z-Index Stacking</title>
  <style>
    .stack-container {
      position: relative;
      height: 140px;
      font-family: sans-serif;
    }
    .layer-one {
      position: absolute;
      top: 10px;
      left: 10px;
      width: 180px;
      height: 80px;
      background-color: #3b82f6;
      color: #ffffff;
      padding: 12px;
      border-radius: 6px;
      z-index: 2; /* Brought to the very front */
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
    }
    .layer-two {
      position: absolute;
      top: 40px;
      left: 70px;
      width: 180px;
      height: 80px;
      background-color: #f59e0b;
      color: #ffffff;
      padding: 12px;
      border-radius: 6px;
      z-index: 1; /* Sits underneath layer-one */
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
    }
  </style>
</head>
<body>

  <div class="stack-container">
    <div class="layer-one">Layer 1 (z-index: 2)<br/><small>On Top</small></div>
    <div class="layer-two">Layer 2 (z-index: 1)<br/><small>Underneath</small></div>
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
            value: `<div style="font-family: sans-serif; position: relative; height: 130px;">
  <div style="position: absolute; top: 10px; left: 10px; width: 180px; height: 75px; background-color: #3b82f6; color: #ffffff; padding: 12px; border-radius: 6px; z-index: 2; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15); box-sizing: border-box; font-size: 13px;">
    <strong>Layer 1</strong> (z-index: 2)<br/><span>Foreground</span>
  </div>
  <div style="position: absolute; top: 40px; left: 70px; width: 180px; height: 75px; background-color: #f59e0b; color: #ffffff; padding: 12px; border-radius: 6px; z-index: 1; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15); box-sizing: border-box; font-size: 13px;">
    <strong>Layer 2</strong> (z-index: 1)<br/><span>Background</span>
  </div>
</div>`,
          },
        ],
      },
      {
        heading: "Best Practices for Managing Z-Index Values",
        content: [
          {
            type: "list",
            items: [
              " Avoid Extreme Numbers: Do not write arbitrary numbers like z-index: 999999. Use structured design scales like 10 (dropdowns), 20 (sticky nav), 30 (drawers), and 40 (modals).",
              " Debugging Stacking Issues: If an element with a massive z-index is stuck beneath another, inspect parent containers for CSS transforms, opacity, or isolated stacking contexts.",
            ],
          },
        ],
      },
    ],
    conclusion:
      "Z-index is essential for managing visual depth on the web. By remembering that z-index requires a declared position property and respecting stacking contexts, you can build reliable, multi-layered interfaces.",
  },

  // ================= TOPIC 20: CSS OVERFLOW =================
  {
    id: "css-overflow",
    title: "CSS Overflow",
    subjectCode: "css",
    intro:
      "The CSS overflow property controls how a browser handles content that exceeds the physical boundaries of its parent container box. Whether you need to prevent unwanted horizontal page stretching, clip oversized images cleanly, or add smooth internal scrollbars to sidebars and data feeds, overflow is the standard control mechanism.",
    sections: [
      {
        heading: "The 4 Main Overflow Property Values",
        content: [
          {
            type: "text",
            value:
              "When an element's text or child nodes exceed its explicit width or height, the browser resolves the excess content based on one of four rules:",
          },
          {
            type: "list",
            items: [
              " visible: Default setting. Overflowing content spills outside the parent container and renders over neighboring elements without adding scrollbars.",
              " hidden: Clips all excess content outside the border box boundary. Overflowing content becomes completely invisible.",
              " scroll: Adds permanent horizontal and vertical scrollbars whether the content overflows or not.",
              " auto: Intelligent browser behavior. Adds scrollbars only when content exceeds container boundaries, keeping boxes clean when content fits.",
            ],
          },
        ],
      },
      {
        heading: "Practical Comparison: Hidden vs. Auto Scroll",
        content: [
          {
            type: "text",
            value:
              "The following example contrasts a clipped box against an internal scroll area using <code>overflow: auto</code> with constrained dimensions.",
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
  <title>CSS Overflow Types</title>
  <style>
    .scroll-box {
      width: 280px;
      height: 90px;
      overflow-y: auto;
      background-color: #f8fafc;
      border: 2px solid #0284c7;
      padding: 10px;
      border-radius: 6px;
      font-family: sans-serif;
      font-size: 13px;
      color: #334155;
      line-height: 1.5;
    }
  </style>
</head>
<body>

  <div class="scroll-box">
    <strong>Scrollable Container (overflow-y: auto):</strong><br/>
    CSS overflow controls content that spills past set boundaries. 
    This container has a fixed height of 90px. When multiple sentences 
    fill this box, the browser automatically enables smooth vertical 
    scrolling without breaking the outer page layout.
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
            value: `<div style="font-family: sans-serif; font-size: 13px;">
  <div style="width: 280px; height: 90px; overflow-y: auto; background-color: #f8fafc; border: 2px solid #0284c7; padding: 10px; border-radius: 6px; color: #334155; line-height: 1.5; box-sizing: border-box;">
    <strong style="color: #0284c7;">Scrollable Container (overflow-y: auto):</strong><br/>
    CSS overflow controls content that spills past set boundaries. This container has a fixed height of 90px. When multiple sentences fill this box, the browser automatically enables smooth vertical scrolling without breaking the outer page layout.
  </div>
</div>`,
          },
        ],
      },
      {
        heading: "Directional Control: overflow-x vs. overflow-y",
        content: [
          {
            type: "list",
            items: [
              " overflow-x: Manages solely horizontal overflow (useful for responsive tables, code blocks, and carousel sliders).",
              " overflow-y: Manages solely vertical overflow (ideal for chat message threads, sidebars, and dropdown lists).",
              " Mobile Breakage Tip: A common cause of unwanted horizontal page scrolling on smartphones is an oversized image. Applying overflow-x: hidden to the parent container prevents this.",
            ],
          },
        ],
      },
    ],
    conclusion:
      "Properly setting overflow rules ensures clean bounding boxes and accessible internal scrolling. It prevents visual breakage, protecting your layouts from unexpected text lengths and dynamic viewport shifts.",
  },
  // ================= TOPIC 21: CSS FLOAT AND CLEAR =================
  {
    id: "css-float-and-clear",
    title: "CSS Float and Clear",
    subjectCode: "css",
    intro:
      "The CSS float property was originally engineered for print-style layouts to allow text to wrap gracefully around embedded images. While modern layouts now rely on Flexbox and Grid, float and clear remain crucial legacy mechanisms for magazine-style editorial content, pull quotes, and understanding historical codebase architectures.",
    sections: [
      {
        heading: "How Float and Clear Function",
        content: [
          {
            type: "text",
            value:
              "When an element is floated, it is shifted to the far left or right of its containing block, allowing inline text content to flow alongside its opposite edge.",
          },
          {
            type: "list",
            items: [
              " float: left: Pushes the element to the left edge; surrounding inline content flows along its right edge.",
              " float: right: Pushes the element to the right edge; surrounding inline content flows along its left edge.",
              " clear: left / right / both: Prevents an element from sitting adjacent to previous floated items, forcing it to drop down below them.",
              " The Clearfix Technique: Floated child elements do not contribute to parent container height by default. Applying overflow: auto or a clearfix pseudo-element ensures parent containers expand to fully encapsulate floated children.",
            ],
          },
        ],
      },
      {
        heading: "Editorial Image Wrap Example",
        content: [
          {
            type: "text",
            value:
              "Below is a runnable browser demonstration showing a thumbnail floated to the left with narrative copy flowing naturally around its borders.",
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
  <title>CSS Float & Clear</title>
  <style>
    .article-box {
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 16px;
      background-color: #ffffff;
      font-family: sans-serif;
      overflow: auto; /* Clearfix prevents parent collapse */
    }
    .floating-thumb {
      float: left;
      width: 80px;
      height: 80px;
      background-color: #0284c7;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 11px;
      font-weight: bold;
      border-radius: 6px;
      margin-right: 14px;
      margin-bottom: 6px;
    }
    .article-text {
      color: #334155;
      font-size: 14px;
      line-height: 1.6;
      margin: 0;
    }
  </style>
</head>
<body>

  <div class="article-box">
    <div class="floating-thumb">IMG THUMB</div>
    <p class="article-text">
      The float property shifts this blue thumbnail to the left boundary. 
      Notice how this paragraph text wraps around the thumbnail cleanly 
      before continuing horizontally beneath it. The overflow: auto property 
      on the parent card ensures full height containment.
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
            value: `<div style="font-family: sans-serif; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; background-color: #ffffff; overflow: auto;">
  <div style="float: left; width: 80px; height: 80px; background-color: #0284c7; color: #ffffff; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: bold; border-radius: 6px; margin-right: 14px; margin-bottom: 6px; text-align: center; line-height: 80px;">IMG THUMB</div>
  <p style="color: #334155; font-size: 14px; line-height: 1.6; margin: 0;">
    The float property shifts this blue thumbnail to the left boundary. 
    Notice how this paragraph text wraps around the thumbnail cleanly 
    before continuing horizontally beneath it. The overflow: auto property 
    on the parent card ensures full height containment.
  </p>
</div>`,
          },
        ],
      },
    ],
    conclusion:
      "While modern full-page layouts are built with Flexbox and Grid, the float property remains the standard semantic method for wrapping long-form editorial copy around illustrations and pull-quote callouts.",
  },

  // ================= TOPIC 22: CSS INLINE-BLOCK =================
  {
    id: "css-inline-block",
    title: "CSS Inline-Block",
    subjectCode: "css",
    intro:
      "Before Flexbox gained universal adoption, display: inline-block was the primary technique for building horizontal multi-column layouts, button rows, and navigation menus. It merges the inline flow behavior of text elements with the dimensional box-model capabilities of block containers.",
    sections: [
      {
        heading: "Why Use Inline-Block?",
        content: [
          {
            type: "text",
            value:
              "Comparing standard block and inline elements highlights why inline-block serves as a versatile middle ground:",
          },
          {
            type: "list",
            items: [
              " Inline Elements: Sit side-by-side but strictly ignore top/bottom margins, top/bottom padding effects on line height, and custom width/height properties.",
              " Block Elements: Honor width, height, and all padding/margins, but force automatic line breaks before and after themselves.",
              " Inline-Block Elements: Sit horizontally in a row with adjacent elements while fully respecting explicit width, height, padding, and margin rules.",
              " The Whitespace Phenomenon: Because inline-block elements behave like letters in a sentence, standard HTML line breaks between tags create a subtle 4px visual gap that must be accounted for.",
            ],
          },
        ],
      },
      {
        heading: "Horizontal Card Grid via Inline-Block",
        content: [
          {
            type: "text",
            value:
              "This example shows three equal-width cards sitting neatly on a single line using <code>display: inline-block</code> without using floats or clearing hacks.",
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
  <title>CSS Inline Block Grid</title>
  <style>
    .grid-row {
      font-family: sans-serif;
      font-size: 0; /* Eliminates HTML whitespace gap */
    }
    .metric-card {
      display: inline-block;
      width: 31%;
      margin: 0 1%;
      padding: 14px;
      box-sizing: border-box;
      background-color: #f8fafc;
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      text-align: center;
      vertical-align: top;
      font-size: 14px; /* Restores text size */
    }
    .metric-num {
      font-size: 22px;
      font-weight: bold;
      color: #0284c7;
      margin-bottom: 4px;
    }
  </style>
</head>
<body>

  <div class="grid-row">
    <div class="metric-card">
      <div class="metric-num">99.9%</div>
      <span>Uptime</span>
    </div>
    <div class="metric-card">
      <div class="metric-num">1.2ms</div>
      <span>Latency</span>
    </div>
    <div class="metric-card">
      <div class="metric-num">50k+</div>
      <span>Active Users</span>
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
            value: `<div style="font-family: sans-serif; font-size: 0; width: 100%;">
  <div style="display: inline-block; width: 31%; margin: 0 1%; padding: 14px; box-sizing: border-box; background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px; text-align: center; vertical-align: top; font-size: 14px;">
    <div style="font-size: 20px; font-weight: bold; color: #0284c7; margin-bottom: 4px;">99.9%</div>
    <span style="color: #64748b;">Uptime</span>
  </div>
  <div style="display: inline-block; width: 31%; margin: 0 1%; padding: 14px; box-sizing: border-box; background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px; text-align: center; vertical-align: top; font-size: 14px;">
    <div style="font-size: 20px; font-weight: bold; color: #0284c7; margin-bottom: 4px;">1.2ms</div>
    <span style="color: #64748b;">Latency</span>
  </div>
  <div style="display: inline-block; width: 31%; margin: 0 1%; padding: 14px; box-sizing: border-box; background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px; text-align: center; vertical-align: top; font-size: 14px;">
    <div style="font-size: 20px; font-weight: bold; color: #0284c7; margin-bottom: 4px;">50k+</div>
    <span style="color: #64748b;">Active Users</span>
  </div>
</div>`,
          },
        ],
      },
    ],
    conclusion:
      "Inline-block offers predictable dimensions and horizontal alignment. While modern developers default to Flexbox for full page templates, inline-block remains an indispensable tool for buttons, badges, and inline UI elements.",
  },

  // ================= TOPIC 23: CSS FLEXBOX =================
  {
    id: "css-flexbox",
    title: "CSS Flexbox",
    subjectCode: "css",
    intro:
      "CSS Flexible Box Layout (Flexbox) is a one-dimensional layout model designed to distribute space along a single axis (either horizontally as a row or vertically as a column). Flexbox simplifies common alignment problems, dynamic space distribution, responsive card ordering, and vertical centering.",
    sections: [
      {
        heading: "Flexbox Architecture: Axes and Containers",
        content: [
          {
            type: "text",
            value:
              "Flexbox operates on a parent-child relationship. Setting <code>display: flex</code> on the parent transforms direct children into flex items governed by two distinct axes:",
          },
          {
            type: "list",
            items: [
              " Main Axis: The primary flow direction determined by flex-direction (row, row-reverse, column, column-reverse).",
              " Cross Axis: Runs perpendicular to the main axis.",
              " justify-content: Aligns items along the main axis (flex-start, flex-end, center, space-between, space-around, space-evenly).",
              " align-items: Aligns items along the cross axis (stretch, center, flex-start, flex-end, baseline).",
              " flex-wrap: Controls whether child items wrap onto multiple lines when constrained (nowrap, wrap).",
              " gap: Declares precise gutter spacing between flex items without manual margin calculations.",
            ],
          },
        ],
      },
      {
        heading: "Perfect Centering and Spacing with Flexbox",
        content: [
          {
            type: "text",
            value:
              "Below is a demonstration of space distribution with <code>justify-content: space-between</code> and vertical alignment with <code>align-items: center</code> inside a navigation header.",
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
  <title>CSS Flexbox Demo</title>
  <style>
    .flex-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #0f172a;
      color: #ffffff;
      padding: 12px 20px;
      border-radius: 8px;
      font-family: sans-serif;
    }
    .brand-title {
      font-size: 18px;
      font-weight: bold;
      color: #38bdf8;
    }
    .flex-actions {
      display: flex;
      gap: 10px;
    }
    .btn-login {
      background: transparent;
      color: #cbd5e1;
      border: 1px solid #475569;
      padding: 6px 14px;
      border-radius: 4px;
      font-size: 13px;
    }
    .btn-signup {
      background: #0284c7;
      color: #ffffff;
      border: none;
      padding: 6px 14px;
      border-radius: 4px;
      font-size: 13px;
      font-weight: 600;
    }
  </style>
</head>
<body>

  <header class="flex-header">
    <div class="brand-title">FlexBrand</div>
    <div class="flex-actions">
      <button class="btn-login">Log In</button>
      <button class="btn-signup">Sign Up</button>
    </div>
  </header>

</body>
</html>`,
          },
          {
            type: "text",
            value: "<strong>Output:</strong>",
          },
          {
            type: "text",
            value: `<header style="display: flex; justify-content: space-between; align-items: center; background-color: #0f172a; color: #ffffff; padding: 12px 20px; border-radius: 8px; font-family: sans-serif; box-sizing: border-box;">
  <div style="font-size: 18px; font-weight: bold; color: #38bdf8;">FlexBrand</div>
  <div style="display: flex; gap: 10px;">
    <button style="background: transparent; color: #cbd5e1; border: 1px solid #475569; padding: 6px 14px; border-radius: 4px; font-size: 13px; cursor: pointer;">Log In</button>
    <button style="background: #0284c7; color: #ffffff; border: none; padding: 6px 14px; border-radius: 4px; font-size: 13px; font-weight: 600; cursor: pointer;">Sign Up</button>
  </div>
</header>`,
          },
        ],
      },
    ],
    conclusion:
      "Flexbox is the definitive engine for one-dimensional layouts, simplifying equal height columns, vertical centering, and component-level distribution across responsive displays.",
  },

  // ================= TOPIC 24: CSS GRID =================
  {
    id: "css-grid",
    title: "CSS Grid",
    subjectCode: "css",
    intro:
      "CSS Grid Layout is the most powerful 2-dimensional layout system available in native web browsers. Unlike Flexbox, which operates primarily in one dimension at a time, CSS Grid controls both rows and columns simultaneously, enabling developers to build intricate web dashboard layouts, photo galleries, and magazine spreads without writing complex markup nests.",
    sections: [
      {
        heading: "Grid Architecture: Columns, Rows, and Fractional Units",
        content: [
          {
            type: "text",
            value:
              "Declaring <code>display: grid</code> establishes a grid formatting context, allowing you to define explicit columns and rows using fixed lengths, percentages, or flexible fractional units (<code>fr</code>).",
          },
          {
            type: "list",
            items: [
              " grid-template-columns: Defines column tracks (e.g., 1fr 2fr 1fr or repeat(3, 1fr)).",
              " grid-template-rows: Explicitly sizes horizontal row tracks.",
              " fr (Fractional Unit): Represents a fraction of the available free space inside the grid container.",
              " gap: Specifies spacing between rows and columns (e.g., gap: 16px).",
              " auto-fit and minmax(): Modern responsive design functions that automatically rearrange columns across screens without writing manual media queries.",
            ],
          },
        ],
      },
      {
        heading: "Responsive 3-Column Card Layout",
        content: [
          {
            type: "text",
            value:
              "The following example builds a clean, structured multi-column gallery card grid using <code>grid-template-columns: repeat(3, 1fr)</code> with unified gutters.",
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
  <title>CSS Grid Layout</title>
  <style>
    .grid-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      font-family: sans-serif;
    }
    .grid-item {
      background-color: #ffffff;
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      padding: 16px;
      text-align: center;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    }
    .grid-item h4 {
      margin: 0 0 6px 0;
      color: #0f172a;
      font-size: 15px;
    }
    .grid-item p {
      margin: 0;
      color: #64748b;
      font-size: 13px;
    }
  </style>
</head>
<body>

  <div class="grid-container">
    <div class="grid-item">
      <h4>Plan A</h4>
      <p>Starter Features</p>
    </div>
    <div class="grid-item">
      <h4 style="color: #0284c7;">Plan B</h4>
      <p>Professional Tier</p>
    </div>
    <div class="grid-item">
      <h4>Plan C</h4>
      <p>Enterprise Scale</p>
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
            value: `<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; font-family: sans-serif;">
  <div style="background-color: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; text-align: center; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
    <h4 style="margin: 0 0 6px 0; color: #0f172a; font-size: 15px;">Plan A</h4>
    <p style="margin: 0; color: #64748b; font-size: 13px;">Starter Features</p>
  </div>
  <div style="background-color: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; text-align: center; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
    <h4 style="margin: 0 0 6px 0; color: #0284c7; font-size: 15px;">Plan B</h4>
    <p style="margin: 0; color: #64748b; font-size: 13px;">Professional Tier</p>
  </div>
  <div style="background-color: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; text-align: center; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
    <h4 style="margin: 0 0 6px 0; color: #0f172a; font-size: 15px;">Plan C</h4>
    <p style="margin: 0; color: #64748b; font-size: 13px;">Enterprise Scale</p>
  </div>
</div>`,
          },
        ],
      },
    ],
    conclusion:
      "CSS Grid offers comprehensive structural control for complex two-dimensional designs. By coordinating rows, columns, and fractional spacing, Grid eliminates rigid framework dependencies and enables clean, maintainable web architectures.",
  },
  // ================= TOPIC 25: CSS RESPONSIVE WEB DESIGN =================
  {
    id: "css-responsive-web-design",
    title: "CSS Responsive Web Design",
    subjectCode: "css",
    intro:
      "Responsive Web Design (RWD) is the approach that suggests design and development should respond to the user's behavior and environment based on screen size, platform, and orientation. Practicing RWD ensures your website displays crisply and ergonomically whether accessed on a 4-inch smartphone, an 11-inch tablet, a laptop, or an ultra-wide 4K monitor, eliminating horizontal scroll issues and unreadable micro-typography.",
    sections: [
      {
        heading: "The Three Pillars of Responsive Design",
        content: [
          {
            type: "text",
            value:
              "Coined by Ethan Marcotte in 2010, modern responsive architecture rests on three indispensable technological fundamentals.",
          },
          {
            type: "list",
            items: [
              " The Meta Viewport Tag: Tells mobile browsers not to render the page as a shrunk-down 980px desktop view, but to match the screen's real device width (<meta name='viewport' content='width=device-width, initial-scale=1.0'>).",
              " Fluid Grid Layouts: Building layout systems with proportional percentages, viewport units, or CSS Grid / Flexbox rather than rigid, static pixel widths.",
              " Flexible Media Assets: Sizing images and video embeds with max-width: 100% and height: auto so they scale within their parent bounding boxes without overflowing.",
            ],
          },
        ],
      },
      {
        heading: "Fluid Container & Auto-Scaling Media",
        content: [
          {
            type: "text",
            value:
              "Below is a runnable example illustrating how a fluid wrapper and flexible card component scale automatically to occupy available container width without layout breakage.",
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
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Fluid Layout</title>
  <style>
    .fluid-wrapper {
      width: 100%;
      max-width: 520px;
      margin: 0 auto;
      padding: 16px;
      box-sizing: border-box;
      background-color: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      font-family: sans-serif;
    }
    .fluid-banner {
      width: 100%;
      height: 100px;
      background: linear-gradient(120deg, #3b82f6, #06b6d4);
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      font-weight: 600;
    }
    .fluid-text {
      margin-top: 12px;
      color: #334155;
      font-size: 14px;
      line-height: 1.5;
    }
  </style>
</head>
<body>

  <div class="fluid-wrapper">
    <div class="fluid-banner">100% Fluid Banner</div>
    <p class="fluid-text">
      This card contracts and expands fluidly with the screen width while 
      capping its expansion at 520px on wide monitors via max-width.
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
            value: `<div style="width: 100%; max-width: 520px; margin: 0 auto; padding: 16px; box-sizing: border-box; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; font-family: sans-serif;">
  <div style="width: 100%; height: 90px; background: linear-gradient(120deg, #3b82f6, #06b6d4); border-radius: 6px; display: flex; align-items: center; justify-content: center; color: #ffffff; font-weight: 600; font-size: 15px;">100% Fluid Banner</div>
  <p style="margin: 12px 0 0 0; color: #334155; font-size: 14px; line-height: 1.5;">
    This card contracts and expands fluidly with the screen width while capping its expansion at 520px on wide monitors via max-width.
  </p>
</div>`,
          },
        ],
      },
    ],
    conclusion:
      "Responsive Web Design transforms static online documents into fluid digital experiences. By pairing flexible units, relative viewports, and modern layout algorithms, developers deliver consistent user interfaces on every device category.",
  },

  // ================= TOPIC 26: CSS MEDIA QUERIES =================
  {
    id: "css-media-queries",
    title: "CSS Media Queries",
    subjectCode: "css",
    intro:
      "CSS Media Queries are conditional style directives introduced in CSS3 that allow you to apply tailored CSS rules based on specific device parameters such as screen width, resolution, device orientation, and user color preferences. They serve as the technical engine driving responsive web breakpoints.",
    sections: [
      {
        heading: "Media Query Syntax and Standard Breakpoints",
        content: [
          {
            type: "text",
            value:
              "Media queries evaluate expressions containing media types (e.g., <code>screen</code>, <code>print</code>) and media features (e.g., <code>min-width</code>, <code>max-width</code>).",
          },
          {
            type: "list",
            items: [
              " Mobile-First Pattern (@media (min-width: 768px)): Styles base mobile views first, progressively adding complexity as screen size expands.",
              " Standard Industry Breakpoints: 640px (large mobile/phablet), 768px (tablets), 1024px (laptops/desktops), 1280px (wide monitors).",
              " Media Types: screen (monitors, phones), print (printer page previews), all (universal match).",
              " User Preference Queries: (prefers-color-scheme: dark) targets system dark mode, and (prefers-reduced-motion: reduce) respects accessibility settings.",
            ],
          },
        ],
      },
      {
        heading: "Adaptive Responsive Layout Switch",
        content: [
          {
            type: "text",
            value:
              "In the example below, cards stack vertically on small widths and reflow into a horizontal multi-column structure once the viewport expands past 600px.",
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
  <title>Media Queries Breakpoint Demo</title>
  <style>
    .responsive-grid {
      display: flex;
      flex-direction: column;
      gap: 10px;
      font-family: sans-serif;
    }
    .card-item {
      background-color: #f1f5f9;
      border-left: 4px solid #0284c7;
      padding: 12px;
      border-radius: 4px;
      color: #0f172a;
      font-size: 14px;
    }
    /* Tablet and Desktop Screens */
    @media (min-width: 600px) {
      .responsive-grid {
        flex-direction: row;
      }
      .card-item {
        flex: 1;
      }
    }
  </style>
</head>
<body>

  <div class="responsive-grid">
    <div class="card-item">Feature One</div>
    <div class="card-item">Feature Two</div>
    <div class="card-item">Feature Three</div>
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
            value: `<div style="display: flex; gap: 10px; font-family: sans-serif; flex-wrap: wrap;">
  <div style="flex: 1; min-width: 140px; background-color: #f1f5f9; border-left: 4px solid #0284c7; padding: 12px; border-radius: 4px; color: #0f172a; font-size: 14px; font-weight: 500;">Feature One</div>
  <div style="flex: 1; min-width: 140px; background-color: #f1f5f9; border-left: 4px solid #0284c7; padding: 12px; border-radius: 4px; color: #0f172a; font-size: 14px; font-weight: 500;">Feature Two</div>
  <div style="flex: 1; min-width: 140px; background-color: #f1f5f9; border-left: 4px solid #0284c7; padding: 12px; border-radius: 4px; color: #0f172a; font-size: 14px; font-weight: 500;">Feature Three</div>
</div>`,
          },
        ],
      },
    ],
    conclusion:
      "Media queries give developers conditional control over device presentation. Adopting a mobile-first mindset with clean min-width breakpoints creates maintainable stylesheets and fast-rendering experiences across screen sizes.",
  },

  // ================= TOPIC 27: CSS UNITS =================
  {
    id: "css-units",
    title: "CSS Units",
    subjectCode: "css",
    intro:
      "CSS units define lengths and measurements for properties such as width, margin, padding, font-size, and border-thickness. CSS categorizes units into Absolute Units (which are fixed and unvarying) and Relative Units (which scale dynamically based on parent container dimensions or the browser viewport).",
    sections: [
      {
        heading: "Absolute vs. Relative Units Explained",
        content: [
          {
            type: "text",
            value:
              "Choosing the correct unit determines whether your layout remains rigid or adapts fluidly to user font scalings and responsive viewports.",
          },
          {
            type: "list",
            items: [
              " Absolute (px, pt, cm): Pixels (px) are fixed across zoom levels and environments. Useful for fine borders and fixed decorative icons.",
              " rem (Root EM): Relative to the font size of the root <html> element (default 1rem = 16px). Recommended for scalable typography and layout margins.",
              " em: Relative to the font size of the immediate parent container. Useful for components like buttons whose padding scales with their text size.",
              " % (Percentage): Relative to the dimensions of the direct parent bounding container.",
              " Viewport Units (vw, vh, vmin, vmax): 1vw equals 1% of the viewport width; 1vh equals 1% of the viewport height. Ideal for full-screen hero sections.",
            ],
          },
        ],
      },
      {
        heading: "Comparative Sizing in Practice",
        content: [
          {
            type: "text",
            value:
              "Below is a comparison showing fixed pixel sizing versus flexible rem and percentage containers.",
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
  <title>CSS Units Comparison</title>
  <style>
    .unit-container {
      font-family: sans-serif;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      padding: 16px;
      border-radius: 8px;
    }
    .px-box {
      width: 200px; /* Fixed length */
      background-color: #fee2e2;
      color: #991b1b;
      padding: 8px;
      margin-bottom: 8px;
      border-radius: 4px;
      font-size: 13px;
    }
    .pct-box {
      width: 80%; /* Fluid parent ratio */
      background-color: #dbeafe;
      color: #1e40af;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      font-size: 0.875rem;
    }
  </style>
</head>
<body>

  <div class="unit-container">
    <div class="px-box">Fixed Pixel: 200px</div>
    <div class="pct-box">Fluid Percentage: 80% with rem spacing</div>
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
            value: `<div style="font-family: sans-serif; background: #ffffff; border: 1px solid #e2e8f0; padding: 16px; border-radius: 8px;">
  <div style="width: 200px; background-color: #fee2e2; color: #991b1b; padding: 8px; margin-bottom: 8px; border-radius: 4px; font-size: 13px; box-sizing: border-box;">Fixed Pixel: 200px</div>
  <div style="width: 80%; background-color: #dbeafe; color: #1e40af; padding: 8px 16px; border-radius: 4px; font-size: 14px; box-sizing: border-box;">Fluid Percentage: 80% with rem spacing</div>
</div>`,
          },
        ],
      },
    ],
    conclusion:
      "Selecting the right CSS units is crucial for responsive design and accessibility. Use rem for typography to respect browser accessibility preferences, percentages and viewport units for fluid layouts, and pixels for fine-grained borders.",
  },

  // ================= TOPIC 28: CSS TRANSFORMS =================
  {
    id: "css-transforms",
    title: "CSS Transforms",
    subjectCode: "css",
    intro:
      "The CSS transform property lets you visually manipulate elements in two-dimensional (2D) or three-dimensional (3D) space without disturbing normal document flow. Using transform functions, developers can rotate badges, scale buttons during interactions, translate modals into center alignment, and skew graphic elements cleanly via hardware acceleration.",
    sections: [
      {
        heading: "Core 2D Transform Functions",
        content: [
          {
            type: "text",
            value:
              "Transform functions run efficiently on the GPU (Graphics Processing Unit), avoiding expensive browser layout recalculations.",
          },
          {
            type: "list",
            items: [
              " translate(x, y): Shifts the element from its current position along horizontal and vertical axes (e.g., transform: translateY(-5px)).",
              " scale(x, y): Resizes the element up or down (e.g., transform: scale(1.05) expands the element by 5%).",
              " rotate(deg): Rotates the element clockwise or counter-clockwise around its transform-origin (e.g., transform: rotate(15deg)).",
              " skew(x-deg, y-deg): Distorts the element along its planar axes, creating parallelogram visual effects.",
            ],
          },
        ],
      },
      {
        heading: "Interactive Card Scaling and Rotation",
        content: [
          {
            type: "text",
            value:
              "This example shows the visual output of combining <code>scale()</code> and subtle rotation on interface tags.",
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
  <title>CSS Transform Demo</title>
  <style>
    .transform-row {
      display: flex;
      gap: 24px;
      padding: 20px;
      font-family: sans-serif;
    }
    .rotated-tag {
      display: inline-block;
      background-color: #ef4444;
      color: #ffffff;
      padding: 8px 16px;
      border-radius: 6px;
      font-weight: bold;
      transform: rotate(-6deg);
    }
    .scaled-card {
      display: inline-block;
      background-color: #0284c7;
      color: #ffffff;
      padding: 8px 16px;
      border-radius: 6px;
      font-weight: bold;
      transform: scale(1.1);
    }
  </style>
</head>
<body>

  <div class="transform-row">
    <div class="rotated-tag">Rotated -6deg</div>
    <div class="scaled-card">Scaled 1.1x</div>
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
            value: `<div style="display: flex; gap: 24px; padding: 20px 10px; font-family: sans-serif; align-items: center;">
  <div style="display: inline-block; background-color: #ef4444; color: #ffffff; padding: 8px 16px; border-radius: 6px; font-weight: bold; font-size: 14px; transform: rotate(-6deg);">Rotated -6deg</div>
  <div style="display: inline-block; background-color: #0284c7; color: #ffffff; padding: 8px 16px; border-radius: 6px; font-weight: bold; font-size: 14px; transform: scale(1.1);">Scaled 1.1x</div>
</div>`,
          },
        ],
      },
    ],
    conclusion:
      "CSS transforms enable smooth, fluid UI micro-interactions. Because they do not trigger browser reflows or repaint operations, they are the preferred way to animate size, position, and orientation changes.",
  },
  // ================= TOPIC 29: CSS TRANSITIONS =================
  {
    id: "css-transitions",
    title: "CSS Transitions",
    subjectCode: "css",
    intro:
      "CSS transitions provide a way to control animation speed when changing CSS properties. Instead of having property changes take effect immediately, you can cause the changes in a property to take place over an allotted duration of time. This enables smooth, engaging micro-interactions on button hovers, card focus states, and interactive toggles without JavaScript overhead.",
    sections: [
      {
        heading: "The 4 Transition Sub-Properties",
        content: [
          {
            type: "text",
            value:
              "A smooth transition requires setting a trigger state (such as <code>:hover</code> or <code>:focus</code>) alongside four core timing properties:",
          },
          {
            type: "list",
            items: [
              " transition-property: Specifies the name of the CSS property to animate (e.g., background-color, transform, opacity, or all).",
              " transition-duration: Declares the time span of the transition in seconds (s) or milliseconds (ms) (e.g., 0.3s).",
              " transition-timing-function: Dictates the speed curve over time (ease, linear, ease-in, ease-out, ease-in-out, or cubic-bezier).",
              " transition-delay: Sets an idle countdown period before the transition effect begins.",
              " Shorthand Pattern: transition: [property] [duration] [timing-function] [delay]; (e.g., transition: all 0.3s ease;).",
            ],
          },
        ],
      },
      {
        heading: "Interactive Hover Button Transition",
        content: [
          {
            type: "text",
            value:
              "Below is a runnable example of a call-to-action button that transitions background color, box shadow, and vertical translation smoothly on hover.",
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
  <title>CSS Transition Demo</title>
  <style>
    .animated-btn {
      background-color: #2563eb;
      color: #ffffff;
      border: none;
      padding: 12px 24px;
      font-size: 15px;
      font-weight: 600;
      border-radius: 6px;
      cursor: pointer;
      box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.2);
      /* Smooth property interpolation */
      transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
    }
    .animated-btn:hover {
      background-color: #1d4ed8;
      transform: translateY(-2px);
      box-shadow: 0 8px 12px -1px rgba(37, 99, 235, 0.35);
    }
  </style>
</head>
<body>

  <button class="animated-btn">Hover Over Me</button>

</body>
</html>`,
          },
          {
            type: "text",
            value: "<strong>Output:</strong>",
          },
          {
            type: "text",
            value: `<div style="font-family: sans-serif; padding: 12px 0;">
  <button style="background-color: #2563eb; color: #ffffff; border: none; padding: 12px 24px; font-size: 15px; font-weight: 600; border-radius: 6px; cursor: pointer; box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.2); transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;">Hover Over Me</button>
</div>`,
          },
        ],
      },
      {
        heading: "Performance Best Practices for Transitions",
        content: [
          {
            type: "list",
            items: [
              " Hardware Acceleration: Animate opacity and transform properties wherever possible; animating width, height, or margin forces continuous browser layout recalculations.",
              " Avoid 'transition: all': Explicitly listing properties (e.g., transition: color 0.2s, background-color 0.2s) prevents unintended performance degradation.",
            ],
          },
        ],
      },
    ],
    conclusion:
      "CSS transitions bridge the gap between static styling and fluid interactivity. Applying sensible duration curves (between 150ms and 300ms) creates responsive, polished UI micro-interactions.",
  },

  // ================= TOPIC 30: CSS ANIMATIONS =================
  {
    id: "css-animations",
    title: "CSS Animations",
    subjectCode: "css",
    intro:
      "CSS animations allow developers to animate transitions between multiple CSS style configurations without JavaScript. Unlike simple transitions that only shift between two states (start and end on hover), CSS animations use @keyframes to create multi-stage, infinitely looping, and reversible sequences with complete temporal precision.",
    sections: [
      {
        heading: "Understanding @keyframes and Animation Properties",
        content: [
          {
            type: "text",
            value:
              "An animation is defined in two stages: establishing the motion timeline inside an <code>@keyframes</code> rule, and binding that timeline to an element using animation sub-properties.",
          },
          {
            type: "list",
            items: [
              " @keyframes: Defines intermediate milestone steps using percentages (0% to 100%) or from/to keywords.",
              " animation-name: Specifies the matching name of the @keyframes rule.",
              " animation-duration: Determines how many seconds or milliseconds one full cycle takes.",
              " animation-iteration-count: Controls loop count (e.g., 3, or infinite for continuous movement).",
              " animation-direction: Sets playback flow (normal, reverse, alternate, alternate-reverse).",
              " animation-fill-mode: Decides whether the element retains styles before starting or after finishing (forwards, backwards, both).",
            ],
          },
        ],
      },
      {
        heading: "Creating a Pulse Loading Indicator",
        content: [
          {
            type: "text",
            value:
              "The following example demonstrates a multi-step breathing pulse badge using <code>@keyframes</code> paired with continuous infinite loops.",
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
  <title>CSS Animation Demo</title>
  <style>
    @keyframes pulseEffect {
      0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
      }
      70% {
        transform: scale(1);
        box-shadow: 0 0 0 10px rgba(34, 197, 94, 0);
      }
      100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
      }
    }
    .status-indicator {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-family: sans-serif;
      font-size: 14px;
      color: #1e293b;
      font-weight: 500;
    }
    .pulse-dot {
      width: 12px;
      height: 12px;
      background-color: #22c55e;
      border-radius: 50%;
      animation: pulseEffect 2s infinite ease-in-out;
    }
  </style>
</head>
<body>

  <div class="status-indicator">
    <div class="pulse-dot"></div>
    <span>Live Server Active</span>
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
            value: `<div style="font-family: sans-serif; padding: 10px 0; display: flex; align-items: center; gap: 10px;">
  <style>
    @keyframes livePulseDemo {
      0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
      70% { transform: scale(1); box-shadow: 0 0 0 8px rgba(34, 197, 94, 0); }
      100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
    }
  </style>
  <div style="width: 12px; height: 12px; background-color: #22c55e; border-radius: 50%; animation: livePulseDemo 2s infinite ease-in-out;"></div>
  <span style="font-size: 14px; color: #1e293b; font-weight: 500;">Live Server Active</span>
</div>`,
          },
        ],
      },
    ],
    conclusion:
      "CSS keyframe animations unlock fluid, continuous visual motion without scripting overhead. Combining simple transforms with opacity produces high-performance loading spinners, entrance fades, and status indicators.",
  },

  // ================= TOPIC 31: CSS VARIABLES =================
  {
    id: "css-variables",
    title: "CSS Variables",
    subjectCode: "css",
    intro:
      "CSS Variables (officially termed Custom Properties) allow you to store reusable values throughout your stylesheet. By declaring design tokens like brand colors, base typography scales, and padding units in a centralized location, you can eliminate duplication, simplify maintenance, and implement dynamic runtime theme toggles (such as Dark Mode) with zero CSS preprocessors.",
    sections: [
      {
        heading: "Declaring and Consuming Custom Properties",
        content: [
          {
            type: "text",
            value:
              "Custom properties are declared using a double-dash prefix (<code>--</code>) and retrieved anywhere in the stylesheet using the <code>var()</code> function.",
          },
          {
            type: "list",
            items: [
              " Global Scope (:root): Declaring variables on the :root pseudo-class makes them accessible across every element on the page.",
              " Local Scope: Declaring variables inside a specific selector restricts their availability strictly to that element and its descendants.",
              " The var() Fallback: The var() function accepts an optional fallback value (e.g., var(--brand-blue, #0055ff)) in case the primary variable is undefined.",
              " Runtime Reactivity: Unlike SCSS variables that compile away into static values, CSS custom properties stay live in the browser DOM and can be updated instantly via JavaScript.",
            ],
          },
        ],
      },
      {
        heading: "Theme Component Using Custom Properties",
        content: [
          {
            type: "text",
            value:
              "Below is a demonstration showing how declaring variables on a card wrapper enables easy styling updates and theme reusability.",
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
  <title>CSS Custom Properties</title>
  <style>
    :root {
      --primary-color: #4f46e5;
      --card-bg: #f8fafc;
      --card-border: #e2e8f0;
      --card-radius: 8px;
      --text-muted: #64748b;
    }
    .custom-card {
      background-color: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: var(--card-radius);
      padding: 20px;
      font-family: sans-serif;
      max-width: 320px;
    }
    .card-heading {
      color: var(--primary-color);
      margin: 0 0 8px 0;
      font-size: 18px;
    }
    .card-description {
      color: var(--text-muted);
      margin: 0;
      font-size: 14px;
      line-height: 1.5;
    }
  </style>
</head>
<body>

  <div class="custom-card">
    <h3 class="card-heading">Reusable Tokens</h3>
    <p class="card-description">
      This card component reads all colors, borders, and margins directly 
      from CSS custom properties via var().
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
            value: `<div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; font-family: sans-serif; max-width: 320px; box-sizing: border-box;">
  <h3 style="color: #4f46e5; margin: 0 0 8px 0; font-size: 18px;">Reusable Tokens</h3>
  <p style="color: #64748b; margin: 0; font-size: 14px; line-height: 1.5;">
    This card component reads all colors, borders, and margins directly from CSS custom properties via var().
  </p>
</div>`,
          },
        ],
      },
    ],
    conclusion:
      "CSS Custom Properties modernize web typography and color systems. Centralizing styles into reusable tokens simplifies responsive adjustments, makes codebases cleaner, and allows for instant theme switching across entire web applications.",
  }, 
  ]
};
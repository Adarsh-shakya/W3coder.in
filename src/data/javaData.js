// java Introduction-done
// java Comments -done
// java Variables -done
// java User Input -done
// java Data Types -done
// java Type Casting -done
// java Operators -done
// java Conditional Statements
// java Loops
// java Strings
// java Arrays
// java Methods
// java Classes and Objects
// java Constructors
// java Modifiers
// java Encapsulation
// java Inheritance
// java Polymorphism
// java Abstraction
// java Interfaces
// java Enums
// java Packages
// java Exception Handling
// java File Handling
// java Collections
// java ArrayList
// java HashMap
// java Threads
// java Lambda Expressions

import java_Img from "../assets/images/java_img.webp";

import DataType from "../assets/images/DataType.webp";
import controlFlow_img from "../assets/images/controFlow_img.webp";
import Input_img from "../assets/images/Input_Img.webp";

export const javaData = {
  subjectTitle: "Java programming",
  subjectCode: "java",
  topics: [
    // ================= TOPIC 1.0: Introduction to Java =========
    {
      id: "java-introduction",
      title: "Introduction to Java",
      intro: "Java is a popular, high-level, class-based, object-oriented programming language originally developed by James Gosling at Sun Microsystems and released in 1995. It is famous for its 'write once, run anywhere' (WORA) philosophy.",
      sections: [
        // ==========================================
        // IMAGE ADDED HERE (Before Heading 1)
        // ==========================================
        {
          content: [
            {
              type: "image",
              url: java_Img, // <-- Insert your Java image path here
              alt: "Java Programming Language",
              className: "responsive-image"
            }
          ]
        },
        {
          heading: "1. What is Java used for?",
          content: [
            {
              type: "list-html",
              items: [
                "<strong>Mobile Applications:</strong> Specially Android app development.",
                "<strong>Enterprise Software:</strong> Large-scale business applications and banking systems.",
                "<strong>Web Applications:</strong> Server-side applications (using frameworks like Spring and Hibernate).",
                "<strong>Big Data Technologies:</strong> Processing massive data sets (e.g., Hadoop, Apache Kafka)."
              ],
            },
          ],
        },
        {
          heading: "2. Why choose Java?",
          content: [
            {
              type: "text",
              value: "Java remains one of the most widely used languages in the world because:",
            },
            {
              type: "list-html",
              items: [
                "It is platform-independent; compiled Java code runs on all platforms that support Java without the need for recompilation.",
                "It is purely object-oriented, which helps to keep the system modular, flexible, and extensible.",
                "It is highly secure and robust, with strong memory management and automatic garbage collection.",
                "It has a massive global community, excellent documentation, and rich API libraries."
              ],
            },
          ],
        },
        {
          heading: "3. Java vs Other Languages",
          content: [
            {
              type: "text",
              value: "Unlike Python, which relies on indentation and dynamic typing, Java is statically typed, requires all code to reside inside a class, and uses curly brackets `{}` to define scope and semicolons `;` to complete commands.",
            },
            {
              type: "code",
              value: `// Java uses curly brackets {} and semicolons ;\nif (5 > 2) {\n    System.out.println("Five is greater than two!");\n}`
            }
          ]
        }
      ],
      // ==========================================
      // PLAYGROUND ADDED HERE
      // ==========================================
      playground: [
        {
          title: "Hello World",
          code: `// Welcome to Java!\n// This is a single-line comment. Java ignores these.\n\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n        System.out.println("Welcome to W3coder's Java Tutorial.");\n    }\n}`,
          output: "Hello, World!\nWelcome to W3coder's Java Tutorial."
        },
        {
          title: "Simple Math",
          code: `// Java handles standard arithmetic operations\n\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("Addition: " + (10 + 5));\n        System.out.println("Multiplication: " + (10 * 5));\n        System.out.println("Power (10 to the power 3): " + (int)Math.pow(10, 3));\n    }\n}`,
          output: "Addition: 15\nMultiplication: 50\nPower (10 to the power 3): 1000"
        }
      ],
      conclusion: "Java is an incredibly powerful and foundational language to learn. Its strict structure and object-oriented principles teach excellent software design patterns, making it highly valued in enterprise-level development.",
    },
    // ================= TOPIC 1.1: Java Installation ============
    {
      id: "java-installation",
      title: "Installing Java (JDK)",
      intro: "Before you start writing Java code on your computer, you need to check if the Java Development Kit (JDK) is installed and, if not, install it properly.",
      sections: [
        {
          heading: "1. Check if Java is Already Installed",
          content: [
            {
              type: "text",
              value: "Some systems might already have Java installed. To check, open your Terminal (Mac/Linux) or Command Prompt (Windows) and type:",
            },
            {
              type: "code",
              value: `java -version\n# AND\njavac -version`
            },
          ],
        },
        {
          heading: "2. Downloading the JDK",
          content: [
            {
              type: "text",
              value: "If Java is not installed, you need to download the Java Development Kit (JDK) for free:",
            },
            {
              type: "list-html",
              items: [
                "Go to <strong><a href=\"https://www.oracle.com/java/technologies/downloads/\" target=\"_blank\">https://www.oracle.com/java/technologies/downloads/</a></strong> (or use OpenJDK providers like Adoptium).",
                "Download the installer for your specific operating system (e.g., JDK 21 or the latest LTS version)."
              ]
            }
          ]
        },
        {
          heading: "3. Installation & Environment Variables (CRITICAL STEP)",
          content: [
            {
              type: "text",
              value: "After running the installer on Windows, you usually need to set up your Environment Variables so your computer knows where Java is located.",
            },
            {
              type: "list-html",
              items: [
                "1. Open Windows Search and type <strong>'Environment Variables'</strong>.",
                "2. Click <strong>'Edit the system environment variables'</strong>.",
                "3. Click the <strong>'Environment Variables'</strong> button at the bottom.",
                "4. Under System Variables, click <strong>New</strong> to add `JAVA_HOME` pointing to your JDK folder (e.g., `C:\\Program Files\\Java\\jdk-21`).",
                "5. Find the <strong>Path</strong> variable, click Edit, and add a new entry: `%JAVA_HOME%\\bin`."
              ]
            }
          ]
        }
      ],
      playground: [
        {
          title: "Check Version",
          code: `// In this playground, Java is already running in the background!\n// Let's check which version of Java this web environment is using.\n\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("Java Version Details:");\n        System.out.println(System.getProperty("java.version"));\n    }\n}`,
          output: "Java Version Details:\n17.0.x"
        }
      ],
      conclusion: "Setting up your JAVA_HOME and Path variables is the most important step on Windows. It allows you to compile and run Java programs from any folder using your command prompt.",
    },
    // ================= TOPIC 1.2: IntelliJ IDEA Setup =================
    {
      id: "java-setup",
      title: "Environment Setup (IntelliJ IDEA)",
      intro: "While you can compile Java using the command line, developers use an IDE (Integrated Development Environment). IntelliJ IDEA Community Edition is the most popular, free, and powerful IDE for Java.",
      sections: [
        {
          heading: "1. Download and Install IntelliJ IDEA",
          content: [
            {
              type: "text",
              value: "IntelliJ IDEA is developed by JetBrains and provides excellent auto-completion and debugging tools.",
            },
            {
              type: "list-html",
              items: [
                "Go to <strong><a href=\"https://www.jetbrains.com/idea/download/\" target=\"_blank\">https://www.jetbrains.com/idea/download/</a></strong>",
                "Download the <strong>Community Edition</strong> (which is free and open-source).",
                "Run the installer and follow the standard installation steps."
              ]
            }
          ]
        },
        {
          heading: "2. Creating a New Project",
          content: [
            {
              type: "text",
              value: "Unlike Python scripts, Java files are usually organized inside 'Projects'.",
            },
            {
              type: "list-html",
              items: [
                "Open IntelliJ IDEA and click <strong>'New Project'</strong>.",
                "Give your project a name (e.g., 'JavaCourse').",
                "Ensure the <strong>Language</strong> is set to Java and the <strong>JDK</strong> you installed earlier is selected.",
                "Click <strong>'Create'</strong>."
              ]
            }
          ]
        },
        {
          heading: "3. Writing Your First File",
          content: [
            {
              type: "text",
              value: "Let's write a simple program.",
            },
            {
              type: "list-html",
              items: [
                "On the left sidebar, expand your project folder, right-click the <strong>'src'</strong> folder.",
                "Select <strong>New > Java Class</strong> and name it <strong>Main</strong>.",
                "Type `psvm` and press Tab to auto-generate the `public static void main` method.",
                "Inside the method, type `sout` and press Tab, then add your text: <code>System.out.println(\"Hello W3coder\");</code>"
              ]
            }
          ]
        },
        {
          heading: "4. Running the File",
          content: [
            {
              type: "text",
              value: "Running code in IntelliJ is incredibly simple compared to using the terminal.",
            },
            {
              type: "code",
              value: `// Just look for the green play button (▶️) next to your main method.\n// Click it and select 'Run Main.main()'\n\n// IntelliJ will automatically compile and run the code for you!`
            }
          ]
        }
      ],
      playground: [
        {
          title: "Simulate Console Output",
          code: `// Imagine you just clicked the Green Play Button in IntelliJ\n// This is what your output would look like in the run window:\n\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello W3coder!");\n        System.out.println("Your Java environment is set up successfully! 🎉");\n    }\n}`,
          output: "Hello W3coder!\nYour Java environment is set up successfully! 🎉"
        }
      ],
      conclusion: "Congratulations! With the JDK installed and IntelliJ IDEA set up, your computer is now a powerful development machine ready to write and execute enterprise-grade Java applications.",
    },
    // ================= TOPIC 2: JAVA FLOW CONTROL  ============
     {
  id: "java-flow-control",
  title: "Java Flow Control",
  subjectCode: "java",
  intro: "Java Flow Control statements are used to control the flow of execution in a program. They decide how the program will proceed under certain conditions or based on loops.",
  sections: [
    {
      heading: "Types of Flow Control",
      content: [
        {
          type: "list",
          items: [
            "Decision-Making Statements (if, switch)",
            "Looping Statements (for, while, do-while)",
            "Jump Statements (break, continue, return)"
          ]
        },
        {
          type: "image",
          url: controlFlow_img, 
          alt: "Java Flow Control Diagram",
          className: "responsive-image"
        }
      ]
    },
    {
      heading: "1. Decision-Making Statements",
      content: [
        {
          type: "text",
          value: "<strong>1.1 if Statement</strong><br/>Executes a block of code only if the specified condition is true."
        },
        {
          type: "code",
          value: `int age = 18;\nif (age >= 18) {\n  System.out.println("You are eligible to vote.");\n}`
        },
        {
          type: "text",
          value: "<strong>Output:</strong><br/>You are eligible to vote."
        },
        {
          type: "text",
          value: "<br/><strong>1.2 if-else Statement</strong><br/>Executes one block of code if the condition is true, and another block if it is false."
        },
        {
          type: "code",
          value: `int number = 13;\nif (number % 2 == 0) {\n  System.out.println("Even number");\n} else {\n  System.out.println("Odd number");\n}`
        },
        {
          type: "text",
          value: "<strong>Output:</strong><br/>Odd number"
        },
        {
          type: "text",
          value: "<br/><strong>1.3 if-else-if Ladder</strong><br/>Executes one block of code among multiple conditions."
        },
        {
          type: "code",
          value: `int marks = 75;\nif (marks >= 90) {\n  System.out.println("Grade A");\n} else if (marks >= 70) {\n  System.out.println("Grade B");\n} else {\n  System.out.println("Grade C");\n}`
        },
        {
          type: "text",
          value: "<strong>Output:</strong><br/>Grade B"
        },
        {
          type: "text",
          value: "<br/><strong>1.4 switch Statement</strong><br/>Selects one of many code blocks to be executed based on a matched value."
        },
        {
          type: "code",
          value: `int day = 3;\nswitch(day) {\n  case 1: \n    System.out.println("Monday"); \n    break;\n  case 2: \n    System.out.println("Tuesday"); \n    break;\n  case 3: \n    System.out.println("Wednesday"); \n    break;\n  default: \n    System.out.println("Invalid day");\n}`
        },
        {
          type: "text",
          value: "<strong>Output:</strong><br/>Wednesday"
        }
      ]
    },
    {
      heading: "2. Looping Statements",
      content: [
        {
          type: "text",
          value: "<strong>2.1 for Loop</strong><br/>Used when the number of iterations is fixed and known beforehand."
        },
        {
          type: "code",
          value: `for (int i = 1; i <= 3; i++) {\n  System.out.println(i);\n}`
        },
        {
          type: "text",
          value: "<strong>Output:</strong><br/>1<br/>2<br/>3"
        },
        {
          type: "text",
          value: "<br/><strong>2.2 while Loop</strong><br/>Used when the number of iterations is not known, and the loop runs as long as the condition is true."
        },
        {
          type: "code",
          value: `int i = 1;\nwhile (i <= 3) {\n  System.out.println(i);\n  i++;\n}`
        },
        {
          type: "text",
          value: "<strong>Output:</strong><br/>1<br/>2<br/>3"
        },
        {
          type: "text",
          value: "<br/><strong>2.3 do-while Loop</strong><br/>Similar to the while loop, but it guarantees that the code block is executed at least once before checking the condition."
        },
        {
          type: "code",
          value: `int i = 1;\ndo {\n  System.out.println(i);\n  i++;\n} while (i <= 3);`
        },
        {
          type: "text",
          value: "<strong>Output:</strong><br/>1<br/>2<br/>3"
        }
      ]
    },
    {
      heading: "3. Jump Statements",
      content: [
        {
          type: "text",
          value: "<strong>3.1 break Statement</strong><br/>Used to immediately terminate a loop or switch statement."
        },
        {
          type: "code",
          value: `for (int i = 1; i <= 5; i++) {\n  if (i == 3) {\n    break; // Loop stops when i is 3\n  }\n  System.out.print(i + " ");\n}`
        },
        {
          type: "text",
          value: "<strong>Output:</strong><br/>1 2"
        },
        {
          type: "text",
          value: "<br/><strong>3.2 continue Statement</strong><br/>Skips the current iteration of a loop and moves to the next iteration."
        },
        {
          type: "code",
          value: `for (int i = 1; i <= 5; i++) {\n  if (i == 3) {\n    continue; // Skips printing 3\n  }\n  System.out.print(i + " ");\n}`
        },
        {
          type: "text",
          value: "<strong>Output:</strong><br/>1 2 4 5"
        },
        {
          type: "text",
          value: "<br/><strong>3.3 return Statement</strong><br/>Used to exit from a method and optionally return a value to the caller."
        },
        {
          type: "code",
          value: `public static int sum(int a, int b) {\n  return a + b; // Exits method and returns the sum\n}\n\npublic static void main(String[] args) {\n  System.out.println(sum(5, 10));\n}`
        },
        {
          type: "text",
          value: "<strong>Output:</strong><br/>15"
        }
      ]
    }
  ],
  // ==========================================
  // PLAYGROUND
  // ==========================================
  playground: [
    {
      title: "If",
      code: `public class Main {\n  public static void main(String[] args) {\n    int age = 18;\n    if(age >= 18) {\n      System.out.println("You are eligible to vote.");\n    }\n  }\n}`,
      output: "You are eligible to vote."
    },
    {
      title: "If-Else",
      code: `public class Main {\n  public static void main(String[] args) {\n    int number = 13;\n    if(number % 2 == 0) {\n      System.out.println("Even number");\n    } else {\n      System.out.println("Odd number");\n    }\n  }\n}`,
      output: "Odd number"
    },
    {
      title: "If-Else-If",
      code: `public class Main {\n  public static void main(String[] args) {\n    int marks = 75;\n    if(marks >= 90) {\n      System.out.println("Grade A");\n    } else if(marks >= 70) {\n      System.out.println("Grade B");\n    } else {\n      System.out.println("Grade C");\n    }\n  }\n}`,
      output: "Grade B"
    },
    {
      title: "Switch",
      code: `public class Main {\n  public static void main(String[] args) {\n    int day = 3;\n    switch(day) {\n      case 1: System.out.println("Monday"); break;\n      case 2: System.out.println("Tuesday"); break;\n      case 3: System.out.println("Wednesday"); break;\n      default: System.out.println("Invalid day");\n    }\n  }\n}`,
      output: "Wednesday"
    },
    {
      title: "For Loop",
      code: `public class Main {\n  public static void main(String[] args) {\n    for(int i = 1; i <= 3; i++) {\n      System.out.println("Count: " + i);\n    }\n  }\n}`,
      output: "Count: 1\nCount: 2\nCount: 3"
    },
    {
      title: "While Loop",
      code: `public class Main {\n  public static void main(String[] args) {\n    int i = 1;\n    while(i <= 3) {\n      System.out.println("Count: " + i);\n      i++;\n    }\n  }\n}`,
      output: "Count: 1\nCount: 2\nCount: 3"
    },
    {
      title: "Do-While",
      code: `public class Main {\n  public static void main(String[] args) {\n    int i = 1;\n    do {\n      System.out.println("Count: " + i);\n      i++;\n    } while(i <= 3);\n  }\n}`,
      output: "Count: 1\nCount: 2\nCount: 3"
    },
    {
      title: "Break",
      code: `public class Main {\n  public static void main(String[] args) {\n    for(int i = 1; i <= 5; i++) {\n      if(i == 3) {\n        System.out.println("Breaking at 3!");\n        break;\n      }\n      System.out.println(i);\n    }\n  }\n}`,
      output: "1\n2\nBreaking at 3!"
    },
    {
      title: "Continue",
      code: `public class Main {\n  public static void main(String[] args) {\n    for(int i = 1; i <= 4; i++) {\n      if(i == 2) {\n        continue; // Skip 2\n      }\n      System.out.println(i);\n    }\n  }\n}`,
      output: "1\n3\n4"
    },
    {
      title: "Return",
      code: `public class Main {\n  public static int sum(int a, int b) {\n    return a + b;\n  }\n\n  public static void main(String[] args) {\n    int result = sum(10, 5);\n    System.out.println("The sum is: " + result);\n  }\n}`,
      output: "The sum is: 15"
    }
  ],
  conclusion: "Flow control statements are crucial for making Java programs dynamic and flexible. Understanding decision-making, loops, and jump statements is fundamental for writing logical and efficient code."
    },
    // ================= TOPIC 2: JAVA comment ==================
    {
      id: "java-comments",
      title: "Java Comments",
      subjectCode: "java",
      intro:
        "The java comments are statements that are not executed by the compiler and interpreter. The comments can be used to provide information or explanation about the variable, method, class or any statement. It can also be used to hide program code for specific time.",
      sections: [
        {
          heading: "Types of Java Comments",
          content: [
            {
              type: "text",
              value: "There are 3 types of comments in java.",
            },
            {
              type: "list",
              items: [
                " Single Line Comment",
                " Multi Line Comment",
                " Documentation Comment",
              ],
            },
          ],
        },
        {
          heading: "1. Java Single Line Comment",
          content: [
            {
              type: "text",
              value:
                "The single line comment is used to comment only one line.",
            },
            {
              type: "text",
              value: "<strong>Syntax:</strong>",
            },
            {
              type: "code",
              value: `//This is single line comment`,
            },
            {
              type: "text",
              value: "<strong>Example:</strong>",
            },
            {
              type: "code",
              value: `public class CommentExample1{
public static void main(String[] args){
String  name="W3CODER"; //Here, name is a variable
System.out.println(name);
}}`,
            },
            {
              type: "text",
              value: "<strong>Output:</strong><br/>W3CODER",
            },
          ],
        },
        {
          heading: "2. Java Multi Line Comment",
          content: [
            {
              type: "text",
              value:
                "The multi line comment is used to comment multiple lines of code.",
            },
            {
              type: "text",
              value: "<strong>Syntax:</strong>",
            },
            {
              type: "code",
              value: `/*\nThis\nis\nmulti line\ncomment\n*/`,
            },
            {
              type: "text",
              value: "<strong>Example:</strong>",
            },
            {
              type: "code",
              value: `public class CommentExample2 {
public static void main(String[] args) {

/* Let's declare and
print variable in java. */

String name="w3coder";
System.out.println(name);
} }`,
            },
            {
              type: "text",
              value: "<strong>Output:</strong><br/>w3coder",
            },
          ],
        },
        {
          heading: "3. Java Documentation Comment",
          content: [
            {
              type: "text",
              value:
                "Documentation comments (also known as Javadocs) are used to generate official API documentation for your code. The javadoc tool reads these comments and automatically creates HTML pages explaining your classes, methods, and variables.",
            },
            {
              type: "text",
              value: "<strong>Syntax:</strong>",
            },
            {
              type: "code",
              value: `/**\nThis\nis\ndocumentation\ncomment\n*/`,
            },
            {
              type: "text",
              value: "<strong>Example:</strong>",
            },
            {
              type: "code",
              value: `/** The Calculator class provides methods to get addition and subtraction of given 2 numbers.*/\npublic class Calculator {\n/** The add() method returns addition of given numbers.*/\npublic static int add(int a, int b){return a+b;}\n/** The sub() method returns subtraction of given numbers.*/\npublic static int sub(int a, int b){return a-b;}\n}`,
            },
            {
              type: "text",
              value: "<strong>Compile it by javac tool:</strong>",
            },
            {
              type: "code",
              value: `javac Calculator.java`,
            },
            {
              type: "text",
              value:
                "<strong>Create Documentation API by javadoc tool:</strong>",
            },
            {
              type: "code",
              value: `javadoc Calculator.java`,
            },
            {
              type: "text",
              value:
                "Now, there will be HTML files created for your Calculator class in the current directory. Open the HTML files and see the explanation of Calculator class provided through documentation comment.",
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
          code: `public class Main {\n  public static void main(String[] args) {\n    String name="W3CODER"; // Here, name is a variable \n    System.out.println(name);\n  }\n}`,
          output: "W3CODER",
        },
        {
          title: "Multi Line Comment",
          code: `public class Main {\n  public static void main(String[] args) {\n    /* Let's declare and \n       print variable in java. */ \n    String name="w3coder"; \n    System.out.println(name);\n  }\n}`,
          output: "w3coder",
        },
      ],
      conclusion:
        "Comments in Java are essential for making the code readable and maintainable. They help other developers understand the logic of the program without affecting the actual execution of the code.",
    },
    // ================= TOPIC 2: JAVA data types ===============
    {
  id: "java-data-types",
  title: "Java Data Types",
  subjectCode: "java",
  intro: "Data types represent the different values to be stored in the variable. In Java, there are two types of data types: ",
  sections: [
    {
     
      content: [
        {
          type: "list",
          items: [
            "Primitive data types",
            "Non-primitive data types"
          ]
        },
        {
          type: "image",
          url: DataType, // Change this to your actual image URL
          alt: "Java Data Types Classification",
          className: "responsive-image"
        }
      ]
    },
    {
      heading: "1. Primitive Data Types",
      content: [
        {
          type: "text",
          value: "Primitive data types are predefined by Java and hold simple values. Java provides 8 primitive data types:"
        },
        {
          type: "table",
          headers: ["Data Type", "Default Value", "Default Size"],
          rows: [
            ["boolean", "false", "1 bit"],
            ["char", "'\\u0000'", "2 byte"],
            ["byte", "0", "1 byte"],
            ["short", "0", "2 byte"],
            ["int", "0", "4 byte"],
            ["long", "0L", "8 byte"],
            ["float", "0.0f", "4 byte"],
            ["double", "0.0d", "8 byte"]
          ]
        }
      ]
    },
    {
      heading: "2. Non-Primitive Data Types",
      content: [
        {
          type: "text",
          value: "Non-primitive data types (also called <strong>Reference Types</strong>) refer to objects. They are created by the programmer and are not predefined by Java (except for <code>String</code>). They are used to access objects and call methods."
        },
        {
          type: "list-html",
          items: [
            "<strong>String:</strong> Represents a sequence of characters (e.g., \"Hello\").",
            "<strong>Arrays:</strong> Used to store multiple values of the same type in a single variable.",
            "<strong>Classes & Interfaces:</strong> User-defined blueprints to create objects."
          ]
        },
        {
          type: "text",
          value: "<em>Key Difference: Primitive types always have a value, while non-primitive types can be <code>null</code>. A non-primitive type can also be used to call methods to perform certain operations, while primitive types cannot.</em>"
        }
      ]
    }
  ],
  // ==========================================
  // PLAYGROUND
  // ==========================================
  playground: [
    {
      title: "Primitive Types",
      code: `public class Main {\n  public static void main(String[] args) {\n    int myNum = 5;               // Integer\n    float myFloatNum = 5.99f;    // Floating point\n    char myLetter = 'D';         // Character\n    boolean myBool = true;       // Boolean\n    \n    System.out.println("Integer: " + myNum);\n    System.out.println("Float: " + myFloatNum);\n    System.out.println("Character: " + myLetter);\n    System.out.println("Boolean: " + myBool);\n  }\n}`,
      output: "Integer: 5\nFloat: 5.99\nCharacter: D\nBoolean: true"
    },
    {
      title: "Non-Primitive Types",
      code: `public class Main {\n  public static void main(String[] args) {\n    // String (Non-primitive)\n    String greeting = "Hello W3Coder!";\n    \n    // Array (Non-primitive)\n    int[] numbers = {10, 20, 30, 40};\n    \n    System.out.println("String Value: " + greeting);\n    System.out.println("String Length: " + greeting.length()); // Calling a method\n    System.out.println("First Array Element: " + numbers[0]);\n  }\n}`,
      output: "String Value: Hello W3Coder!\nString Length: 14\nFirst Array Element: 10"
    }
  ],
  conclusion: "Choosing the correct data type is essential for memory optimization and ensuring your program processes data correctly. Primitive types handle simple values, while non-primitive types help you work with complex objects and data structures."
    },
    // ================= TOPIC 2: JAVA variables not done =================
    {
  id: "java-variables",
  title: "Java Variables",
  subjectCode: "java",
  intro: "A variable is a name of a memory location. It is the basic unit of storage in a program. There are three types of variables in Java: local, instance, and static.",
  sections: [
    {
      heading: "Types of Variables",
      content: [
        {
          type: "text",
          value: "There are three types of variables in Java:"
        },
        {
          type: "list-html",
          items: [
            "<strong>1) Local Variable:</strong> A variable which is declared inside the method is called a local variable.",
            "<strong>2) Instance Variable:</strong> A variable which is declared inside the class but outside the method, is called an instance variable. It is not declared as static.",
            "<strong>3) Static Variable:</strong> A variable that is declared as static is called a static variable. It cannot be local."
          ]
        },
        {
          type: "text",
          value: "<strong>Example to understand the types of variables:</strong>"
        },
        {
          type: "code",
          value: `class A {\n  int data = 50; // instance variable\n  static int m = 100; // static variable\n\n  void method() {\n    int n = 90; // local variable\n  }\n} // end of class`
        }
      ]
    },
    {
      heading: "Constants in Java",
      content: [
        {
          type: "text",
          value: "A constant is a variable which cannot have its value changed after declaration. It uses the <code>final</code> keyword."
        },
        {
          type: "text",
          value: "<strong>Syntax:</strong>"
        },
        {
          type: "code",
          value: `modifier final dataType variableName = value; // local/instance constant\nmodifier static final dataType variableName = value; // global class constant`
        }
      ]
    },
    {
      heading: "Scope and Lifetime of Variables",
      content: [
        {
          type: "text",
          value: "The <strong>scope</strong> of a variable defines the section of the code in which the variable is visible. The <strong>lifetime</strong> refers to how long the variable exists before it is destroyed (deallocated from memory)."
        },
        {
          type: "list-html",
          items: [
            "<strong>Instance variables:</strong> Defined within a class. Every object instance contains a copy. Lifetime is the same as the object it belongs to.",
            "<strong>Argument variables:</strong> Defined in the header of a constructor or method. Scope and lifetime are limited to the execution of that specific method.",
            "<strong>Local variables:</strong> Declared within a method, constructor, or block (like an <code>if</code> block). Scope and lifetime are limited to that block or method itself."
          ]
        },
        {
          type: "text",
          value: "<em>Note: Access specifiers (like private, public) can be applied to instance variables only, not to argument or local variables.</em>"
        }
      ]
    }
  ],
  // ==========================================
  // PLAYGROUND
  // ==========================================
  playground: [
    {
      title: "Variable Types",
      code: `public class Main {\n  // Instance variable\n  int myInstanceVar = 50;\n  \n  // Static variable\n  static int myStaticVar = 100;\n\n  public static void main(String[] args) {\n    // Local variable\n    int myLocalVar = 90;\n    \n    System.out.println("Local Var: " + myLocalVar);\n    System.out.println("Static Var: " + Main.myStaticVar);\n    \n    // To access instance variable, we need an object\n    Main obj = new Main();\n    System.out.println("Instance Var: " + obj.myInstanceVar);\n  }\n}`,
      output: "Local Var: 90\nStatic Var: 100\nInstance Var: 50"
    },
    {
      title: "Constants (Final)",
      code: `public class Main {\n  public static void main(String[] args) {\n    final int MAX_SPEED = 120;\n    System.out.println("Max speed is: " + MAX_SPEED);\n    \n    // MAX_SPEED = 150; // This would cause an error!\n  }\n}`,
      output: "Max speed is: 120"
    }
  ],
  conclusion: "Understanding the difference between local, instance, and static variables, as well as their scope and lifetime, is crucial for managing memory and data flow efficiently in your Java applications."
    },
    // ================= TOPIC 2: JAVA input =================
    {
  id: "java-input",
  title: "Java Input",
  subjectCode: "java",
  intro: "In Java, reading user input is essential for creating interactive applications. It allows the program to receive data from the user at runtime. we can take input through Scanner class which is present in java.util package.",
  sections: [
    { 
      content: [
        {
          type: "image",
          url: Input_img, 
          alt: "Java Input Methods Diagram",
          className: "responsive-image"
        },
      ]
    },
    {
      heading:"Type of Scanner methods",
      content:[
        {
          type:"text",
          value: "there are different input methods in Scanner class for different type of deta."
        },
        {
          type:"list",
          items:[
            "next()",
            "nextInt()",
            "nextLine()",
            "nextByte()",
            "nextLong()",
            "nextFloat()",
            "nextShort()",
            "nextDouble()",
            "nextBoolean()"
          ]
        }
      ]
    },
    {
      heading: "1. next() Method",
      content: [
        {
          type: "text",
          value: "next() is a one of the method of scanner class in java. Which is is used to read a single word (String) until it hits a space."
        },
        {
          type: "code",
          value: `//take a name and city as a input.

import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
      Scanner myObj = new Scanner(System.in); 

      System.out.println("Enter your name: ");
      String Name = myObj.next(); // Read single word only

      System.out.println("Enter your city: ");
      String City = myObj.next();
 

      System.out.println("Your name  is: " + Name);  
      System.out.println("Your city is: "+ City);
 }
}`
        },
        {
          type: "text",
          value: "<strong>Output:</strong><br/>Enter your name:<br/>Adarsh <br/><br/>Enter your city:<br/>Noida<br/><br/>Your name is: Adarsh<br/>Your city is: Noida"
        }
      ]
    },
   {
      heading: "2. nextInt() Method",
      content: [
        {
          type: "text",
          value: "The <code>nextInt()</code> method is used to read an integer (a whole number) data type from the user."
        },
        {
          type: "code",
          value: `// Take a user's age as input and print it.

import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
      Scanner myObj = new Scanner(System.in); 

      System.out.println("Enter your age: ");
      int age = myObj.nextInt(); // Read integer value only

      System.out.println("Your age is: " + age);  
  }
}`
        },
        {
          type: "text",
          value: "<strong>Output:</strong><br/>Enter your age:<br/>25<br/><br/>Your age is: 25"
        }
      ]
    },
  {
      heading: "3. nextLine() Method",
      content: [
        {
          type: "text",
          value: "The <code>nextLine()</code> method is used to read an entire line of text (a String), including spaces, until the user presses the Enter key.<br/><br/><strong>Difference between next() and nextLine():</strong><br/>If a user types <em>\"New Delhi\"</em>, <code>next()</code> will only read <em>\"New\"</em> because it stops at the first space. However, <code>nextLine()</code> will read the full <em>\"New Delhi\"</em>."
        },
        {
          type: "code",
          value: `// Demonstrating the difference between next() and nextLine()

import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
      Scanner myObj = new Scanner(System.in); 

      System.out.println("--- Testing next() ---");
      System.out.println("Enter your full name (e.g., Virat Kohli):");
      String firstWord = myObj.next(); // Stops at the first space
      System.out.println("Result of next(): " + firstWord);  

      // Clearing the buffer 
      // (This removes the leftover words and the 'Enter' key press from the previous input)
      myObj.nextLine(); 

      System.out.println("\\n--- Testing nextLine() ---");
      System.out.println("Enter your full name again:");
      String fullLine = myObj.nextLine(); // Reads the whole line including spaces
      System.out.println("Result of nextLine(): " + fullLine);  
  }
}`
        },
        {
          type: "text",
          value: "<strong>Output:</strong><br/>--- Testing next() ---<br/>Enter your full name (e.g., Virat Kohli):<br/>Virat Kohli<br/>Result of next(): Virat<br/><br/>--- Testing nextLine() ---<br/>Enter your full name again:<br/>Virat Kohli<br/>Result of nextLine(): Virat Kohli"
        }
      ]
    },
  {
      heading: "4. nextByte() Method",
      content: [
        {
          type: "text",
          value: "The <code>nextByte()</code> method is used to read a <code>byte</code> data type from the user. A byte is a very small integer that can only hold values from -128 to 127. It is mainly used to save memory when you know the input will be very small."
        },
        {
          type: "code",
          value: `// Take a small number (byte) as input

import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
      Scanner myObj = new Scanner(System.in); 

      System.out.println("Enter a small number (-128 to 127): ");
      byte b = myObj.nextByte(); 

      System.out.println("You entered: " + b);  
  }
}`
        },
        {
          type: "text",
          value: "<strong>Output:</strong><br/>Enter a small number (-128 to 127):<br/>10<br/><br/>You entered: 10"
        }
      ]
    },
    {
      heading: "5. nextLong() Method",
      content: [
        {
          type: "text",
          value: "The <code>nextLong()</code> method is used to read a <code>long</code> data type. It is used for very large whole numbers that cannot fit inside a standard <code>int</code>, such as 10-digit phone numbers, population counts, or large distances."
        },
        {
          type: "code",
          value: `// Take a phone number (long) as input

import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
      Scanner myObj = new Scanner(System.in); 

      System.out.println("Enter your 10-digit phone number: ");
      long phone = myObj.nextLong(); 

      System.out.println("Your phone number is: " + phone);  
  }
}`
        },
        {
          type: "text",
          value: "<strong>Output:</strong><br/>Enter your 10-digit phone number:<br/>9876543210<br/><br/>Your phone number is: 9876543210"
        }
      ]
    },{
      heading: "6. nextFloat() Method",
      content: [
        {
          type: "text",
          value: "The <code>nextFloat()</code> method is used to read a <code>float</code> data type. It allows you to take decimal values as input from the user."
        },
        {
          type: "code",
          value: `// Take a temperature (float) as input

import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
      Scanner myObj = new Scanner(System.in); 

      System.out.println("Enter current temperature: ");
      float temp = myObj.nextFloat(); 

      System.out.println("The temperature is: " + temp);  
  }
}`
        },
        {
          type: "text",
          value: "<strong>Output:</strong><br/>Enter current temperature:<br/>98.6<br/><br/>The temperature is: 98.6"
        }
      ]
    },
    {
      heading: "7. nextShort() Method",
      content: [
        {
          type: "text",
          value: "The <code>nextShort()</code> method reads a <code>short</code> data type. It is smaller than an <code>int</code> but larger than a <code>byte</code> (ranging from -32,768 to 32,767)."
        },
        {
          type: "code",
          value: `// Take a year (short) as input

import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
      Scanner myObj = new Scanner(System.in); 

      System.out.println("Enter your birth year: ");
      short year = myObj.nextShort(); 

      System.out.println("You were born in: " + year);  
  }
}`
        },
        {
          type: "text",
          value: "<strong>Output:</strong><br/>Enter your birth year:<br/>1998<br/><br/>You were born in: 1998"
        }
      ]
    },
    {
      heading: "8. nextDouble() Method",
      content: [
        {
          type: "text",
          value: "The <code>nextDouble()</code> method is used to read a <code>double</code> data type. It is used for highly precise decimal numbers, which makes it perfect for dealing with price, currency, or exact measurements."
        },
        {
          type: "code",
          value: `// Take an item price (double) as input

import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
      Scanner myObj = new Scanner(System.in); 

      System.out.println("Enter item price: ");
      double price = myObj.nextDouble(); 

      System.out.println("Price is: $" + price);  
  }
}`
        },
        {
          type: "text",
          value: "<strong>Output:</strong><br/>Enter item price:<br/>199.99<br/><br/>Price is: $199.99"
        }
      ]
    },
    {
      heading: "9. nextBoolean() Method",
      content: [
        {
          type: "text",
          value: "The <code>nextBoolean()</code> method reads a <code>boolean</code> data type, which only accepts <code>true</code> or <code>false</code> as valid inputs."
        },
        {
          type: "code",
          value: `// Take a true/false status as input

import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
      Scanner myObj = new Scanner(System.in); 

      System.out.println("Are you learning Java? (true/false): ");
      boolean isLearning = myObj.nextBoolean(); 

      System.out.println("Status: " + isLearning);  
  }
}`
        },
        {
          type: "text",
          value: "<strong>Output:</strong><br/>Are you learning Java? (true/false):<br/>true<br/><br/>Status: true"
        }
      ]
    },{
      heading: "10. Array Input using Scanner",
      content: [
        {
          type: "text",
          value: "To take multiple inputs and store them in an array, we first ask the user for the size of the array. Then, we initialize the array and use a <code>for</code> loop along with a Scanner method (like <code>nextInt()</code>) to fill it position by position."
        },
        {
          type: "code",
          value: `// Take multiple numbers as input and store them in an array

import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in); 

      System.out.println("How many numbers do you want to enter?");
      int size = sc.nextInt(); 
      
      // Create an array of the specified size
      int[] arr = new int[size];

      System.out.println("Enter " + size + " numbers:");
      for(int i = 0; i < size; i++) {
          arr[i] = sc.nextInt(); // Read each number into the array
      }

      System.out.println("You entered:");
      for(int i = 0; i < size; i++) {
          System.out.print(arr[i] + " ");
      }
  }
}`
        },
        {
          type: "text",
          value: "<strong>Output:</strong><br/>How many numbers do you want to enter?<br/>3<br/><br/>Enter 3 numbers:<br/>10<br/>20<br/>30<br/><br/>You entered:<br/>10 20 30 "
        }
      ]
    }
  ],
 // ==========================================
  // PLAYGROUND
  // ==========================================
  playground: [
    {
      title: "Strings",
      code: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      
      System.out.println("Enter a single word:");
      String word = sc.next(); // 1. next()
      System.out.println("Word: " + word);
      
      sc.nextLine(); // Clear buffer
      
      System.out.println("Enter a full sentence:");
      String sentence = sc.nextLine(); // 2. nextLine()
      System.out.println("Sentence: " + sentence);
  }
}`,
      output: "Enter a single word:\nHello\nWord: Hello\n\nEnter a full sentence:\nJava is fun!\nSentence: Java is fun!"
    },
    {
      title: "Whole Numbers",
      code: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      
      System.out.println("Enter a byte:");
      byte b = sc.nextByte(); // 3. nextByte()
      
      System.out.println("Enter a short:");
      short s = sc.nextShort(); // 4. nextShort()
      
      System.out.println("Enter an int:");
      int i = sc.nextInt(); // 5. nextInt()
      
      System.out.println("Enter a long:");
      long l = sc.nextLong(); // 6. nextLong()
      
      System.out.println("Values stored: " + b + ", " + s + ", " + i + ", " + l);
  }
}`,
      output: "Enter a byte:\n10\nEnter a short:\n5000\nEnter an int:\n100000\nEnter a long:\n9876543210\nValues stored: 10, 5000, 100000, 9876543210"
    },
    {
      title: "Decimals",
      code: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      
      System.out.println("Enter a float:");
      float f = sc.nextFloat(); // 7. nextFloat()
      
      System.out.println("Enter a double:");
      double d = sc.nextDouble(); // 8. nextDouble()
      
      System.out.println("Float: " + f);
      System.out.println("Double: " + d);
  }
}`,
      output: "Enter a float:\n3.14\nEnter a double:\n199.99876\nFloat: 3.14\nDouble: 199.99876"
    },
    {
      title: "Booleans",
      code: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      
      System.out.println("Is Java fun? (true/false):");
      boolean answer = sc.nextBoolean(); // 9. nextBoolean()
      
      System.out.println("Your answer is: " + answer);
  }
}`,
      output: "Is Java fun? (true/false):\ntrue\nYour answer is: true"
    }
  ],
  conclusion: "The Scanner class is the cornerstone of user interaction in Core Java. By mastering its diverse methods—from reading simple integers to parsing full sentences and arrays—you can easily handle any type of user input and build highly interactive console applications."
},
    // ================= TOPIC 2: JAVA type casting =================
    {
  id: "java-type-casting",
  title: "Java Type Casting",
  subjectCode: "java",
  intro: "Type casting is when you assign a value of one primitive data type to another type. In Java, there are two types of casting:",
  sections: [
    {
      heading: "Types of Type Casting",
      content: [
        {
          type: "list",
          items: [
            "Widening Casting (Implicit) - automatically",
            "Narrowing Casting (Explicit) - manually"
          ]
        }
      
      ]
    },
    {
      heading: "1. Widening Casting (Implicit)",
      content: [
        {
          type: "text",
          value: "Widening casting is done automatically when passing a smaller size type to a larger size type. Because the larger type has enough space to hold the smaller type's data, there is no risk of data loss."
        },
        {
          type: "text",
          value: "<strong>Hierarchy (Small to Large):</strong><br/><code>byte</code> &rarr; <code>short</code> &rarr; <code>char</code> &rarr; <code>int</code> &rarr; <code>long</code> &rarr; <code>float</code> &rarr; <code>double</code>"
        },
        {
          type: "text",
          value: "<strong>Example:</strong>"
        },
        {
          type: "code",
          value: `public class Main {\n  public static void main(String[] args) {\n    int myInt = 9;\n    double myDouble = myInt; // Automatic casting: int to double\n\n    System.out.println(myInt);\n    System.out.println(myDouble);\n  }\n}`
        },
        {
          type: "text",
          value: "<strong>Output:</strong><br/>9<br/>9.0"
        }
      ]
    },
    {
      heading: "2. Narrowing Casting (Explicit)",
      content: [
        {
          type: "text",
          value: "Narrowing casting must be done manually by placing the desired type in parentheses <code>()</code> in front of the value. Converting a larger type to a smaller size type can result in data loss (like losing decimal points)."
        },
        {
          type: "text",
          value: "<strong>Hierarchy (Large to Small):</strong><br/><code>double</code> &rarr; <code>float</code> &rarr; <code>long</code> &rarr; <code>int</code> &rarr; <code>char</code> &rarr; <code>short</code> &rarr; <code>byte</code>"
        },
        {
          type: "text",
          value: "<strong>Example:</strong>"
        },
        {
          type: "code",
          value: `public class Main {\n  public static void main(String[] args) {\n    double myDouble = 9.78d;\n    int myInt = (int) myDouble; // Manual casting: double to int\n\n    System.out.println(myDouble);\n    System.out.println(myInt); // The decimal (.78) is lost\n  }\n}`
        },
        {
          type: "text",
          value: "<strong>Output:</strong><br/>9.78<br/>9"
        }
      ]
    }
  ],
  // ==========================================
  // PLAYGROUND
  // ==========================================
  playground: [
    {
      title: "Widening Casting",
      code: `public class Main {\n  public static void main(String[] args) {\n    int studentScore = 85;\n    // Automatically converts int to double\n    double preciseScore = studentScore;\n    \n    System.out.println("Integer Score: " + studentScore);\n    System.out.println("Double Score: " + preciseScore);\n  }\n}`,
      output: "Integer Score: 85\nDouble Score: 85.0"
    },
    {
      title: "Narrowing Casting",
      code: `public class Main {\n  public static void main(String[] args) {\n    double piValue = 3.14159;\n    // Manually force double to become an int\n    int roundedPi = (int) piValue;\n    \n    System.out.println("Original Pi: " + piValue);\n    System.out.println("Integer Pi: " + roundedPi);\n  }\n}`,
      output: "Original Pi: 3.14159\nInteger Pi: 3"
    },
    {
      title: "Real-Life Use Case",
      code: `public class Main {\n  public static void main(String[] args) {\n    // Calculating a percentage\n    int maxScore = 500;\n    int userScore = 423;\n    \n    // If we don't cast to double, 423/500 becomes 0 in integer division!\n    double percentage = ((double) userScore / maxScore) * 100.0;\n    \n    System.out.println("User Percentage: " + percentage + "%");\n  }\n}`,
      output: "User Percentage: 84.6%"
    }
  ],
  conclusion: "Type casting is highly useful when performing calculations. Remember: Widening casting is safe and automatic, but Narrowing casting requires manual intervention because you risk losing precision or data."
},
     // ================= TOPIC 2: JAVA Opraters =================
     {
  id: "java-operators",
  title: "Java Operators",
  subjectCode: "java",
  intro: "Operators in Java are special symbols that are used to perform specific mathematical or logical operations on variables and values (operands) to produce a result.",
  sections: [
    {
      heading: "Types of Operators",
      content: [
        {
          type: "list",
          items: [
            "1. Unary Operator",
            "2. Arithmetic Operator",
            "3. Shift Operator",
            "4. Relational Operator",
            "5. Bitwise Operator",
            "6. Logical Operator",
            "7. Ternary Operator",
            "8. Assignment Operator"
          ]
        }
      ]
    },
    {
      heading: "1. Unary Operator",
      content: [
        {
          type: "text",
          value: "Unary operators require only a single operand. They are used to increment, decrement, or negate a value."
        },
        {
          type: "code",
          value: `int x = 10;\nSystem.out.println(x++);  // Post-increment: prints 10, then becomes 11\nSystem.out.println(++x);  // Pre-increment: becomes 12, then prints 12\nSystem.out.println(x--);  // Post-decrement: prints 12, then becomes 11\nSystem.out.println(--x);  // Pre-decrement: becomes 10, then prints 10`
        }
      ]
    },
    {
      heading: "2. Arithmetic Operator",
      content: [
        {
          type: "text",
          value: "Arithmetic operators are used to perform common mathematical operations like addition, subtraction, multiplication, etc."
        },
        {
          type: "code",
          value: `int a = 10;\nint b = 5;\nSystem.out.println(a + b);  // Addition - 15\nSystem.out.println(a - b);  // Subtraction - 5\nSystem.out.println(a * b);  // Multiplication - 50\nSystem.out.println(a / b);  // Division - 2 (In Java, int division drops decimals)\nSystem.out.println(a % b);  // Modulus - 0 (Returns the remainder)`
        }
      ]
    },
    {
      heading: "3. Shift Operator",
      content: [
        {
          type: "text",
          value: "Shift operators are used to shift the bits of a number left or right, effectively multiplying or dividing the number by powers of two."
        },
        {
          type: "code",
          value: `int a = 10;\nSystem.out.println(a << 2); // Left shift: 10 * 2^2 = 40\nSystem.out.println(a >> 2); // Right shift: 10 / 2^2 = 2`
        }
      ]
    },
    {
      heading: "4. Relational Operator",
      content: [
        {
          type: "text",
          value: "Relational operators are used to check the relationship between two operands (like equality, greater than, less than). They return a boolean value (true or false)."
        },
        {
          type: "code",
          value: `int a = 10;\nint b = 5;\nSystem.out.println(a > b);   // Greater than - true\nSystem.out.println(a < b);   // Less than - false\nSystem.out.println(a == b);  // Equal to - false\nSystem.out.println(a != b);  // Not equal to - true`
        }
      ]
    },
    {
      heading: "5. Bitwise Operator",
      content: [
        {
          type: "text",
          value: "Bitwise operators perform logic directly on the binary bits of the operands."
        },
        {
          type: "code",
          value: `int a = 5;  // Binary: 0101\nint b = 7;  // Binary: 0111\nSystem.out.println(a & b);  // Bitwise AND - 5 (0101)\nSystem.out.println(a | b);  // Bitwise OR - 7 (0111)\nSystem.out.println(a ^ b);  // Bitwise XOR - 2 (0010)`
        }
      ]
    },
    {
      heading: "6. Logical Operator",
      content: [
        {
          type: "text",
          value: "Logical operators are used to combine multiple boolean expressions."
        },
        {
          type: "code",
          value: `boolean x = true;\nboolean y = false;\nSystem.out.println(x && y); // Logical AND - false (both must be true)\nSystem.out.println(x || y); // Logical OR - true (at least one is true)\nSystem.out.println(!x);     // Logical NOT - false (reverses the value)`
        }
      ]
    },
    {
      heading: "7. Ternary Operator",
      content: [
        {
          type: "text",
          value: "The ternary operator is a one-line shorthand for an if-then-else statement. It evaluates a condition and assigns one of two values."
        },
        {
          type: "code",
          value: `int a = 10;\nint b = 5;\n// Syntax: condition ? valueIfTrue : valueIfFalse;\nint min = (a < b) ? a : b; \nSystem.out.println(min);  // Outputs 5`
        }
      ]
    },
    {
      heading: "8. Assignment Operator",
      content: [
        {
          type: "text",
          value: "Assignment operators are used to assign values to variables. They can also be combined with arithmetic operations."
        },
        {
          type: "code",
          value: `int a = 10;\na += 5; // Same as a = a + 5\nSystem.out.println(a);  // 15\n\na *= 2; // Same as a = a * 2\nSystem.out.println(a);  // 30`
        }
      ]
    },
    {
      heading: "Java Operator Precedence Table",
      content: [
        {
          type: "text",
          value: "Operator precedence determines the order in which operators in an expression are evaluated. Operators at the top have the highest precedence."
        },
        {
          type: "table",
          headers: ["Category", "Operators", "Associativity"],
          rows: [
            ["Postfix", "expr++ expr--", "Left to right"],
            ["Unary", "++expr --expr +expr -expr ~ !", "Right to left"],
            ["Multiplicative", "* / %", "Left to right"],
            ["Additive", "+ -", "Left to right"],
            ["Shift", "<< >> >>>", "Left to right"],
            ["Relational", "< > <= >= instanceof", "Left to right"],
            ["Equality", "== !=", "Left to right"],
            ["Bitwise AND", "&", "Left to right"],
            ["Bitwise XOR", "^", "Left to right"],
            ["Bitwise OR", "|", "Left to right"],
            ["Logical AND", "&&", "Left to right"],
            ["Logical OR", "||", "Left to right"],
            ["Ternary", "? :", "Right to left"],
            ["Assignment", "= += -= *= /= %= &= ^= |=", "Right to left"]
          ]
        }
      ]
    }
  ],
  // ==========================================
  // PLAYGROUND
  // ==========================================
  playground: [
    {
      title: "Unary",
      code: `public class Main {\n  public static void main(String[] args) {\n    int x = 10;\n    System.out.println("Post-increment: " + (x++));\n    System.out.println("Pre-increment: " + (++x));\n  }\n}`,
      output: "Post-increment: 10\nPre-increment: 12"
    },
    {
      title: "Arithmetic",
      code: `public class Main {\n  public static void main(String[] args) {\n    int a = 10, b = 5;\n    System.out.println("Addition: " + (a + b));\n    System.out.println("Division: " + (a / b));\n    System.out.println("Modulus: " + (a % b));\n  }\n}`,
      output: "Addition: 15\nDivision: 2\nModulus: 0"
    },
    {
      title: "Shift",
      code: `public class Main {\n  public static void main(String[] args) {\n    int a = 10;\n    System.out.println("Left Shift (<< 2): " + (a << 2));\n    System.out.println("Right Shift (>> 2): " + (a >> 2));\n  }\n}`,
      output: "Left Shift (<< 2): 40\nRight Shift (>> 2): 2"
    },
    {
      title: "Relational",
      code: `public class Main {\n  public static void main(String[] args) {\n    int a = 10, b = 5;\n    System.out.println("Is a > b? " + (a > b));\n    System.out.println("Is a == b? " + (a == b));\n  }\n}`,
      output: "Is a > b? true\nIs a == b? false"
    },
    {
      title: "Bitwise",
      code: `public class Main {\n  public static void main(String[] args) {\n    int a = 5, b = 7;\n    System.out.println("Bitwise AND (&): " + (a & b));\n    System.out.println("Bitwise OR (|): " + (a | b));\n  }\n}`,
      output: "Bitwise AND (&): 5\nBitwise OR (|): 7"
    },
    {
      title: "Logical",
      code: `public class Main {\n  public static void main(String[] args) {\n    boolean x = true, y = false;\n    System.out.println("x AND y (&&): " + (x && y));\n    System.out.println("x OR y (||): " + (x || y));\n  }\n}`,
      output: "x AND y (&&): false\nx OR y (||): true"
    },
    {
      title: "Ternary",
      code: `public class Main {\n  public static void main(String[] args) {\n    int a = 10, b = 5;\n    int max = (a > b) ? a : b;\n    System.out.println("The maximum value is: " + max);\n  }\n}`,
      output: "The maximum value is: 10"
    },
    {
      title: "Assignment",
      code: `public class Main {\n  public static void main(String[] args) {\n    int a = 10;\n    a += 5;\n    System.out.println("After a += 5: " + a);\n    a *= 2;\n    System.out.println("After a *= 2: " + a);\n  }\n}`,
      output: "After a += 5: 15\nAfter a *= 2: 30"
    }
  ],
  conclusion: "Operators are the building blocks of any algorithm. Mastering the different types of operators and their precedence is essential for writing accurate and efficient Java code."
     },
      // ================= TOPIC 2: JAVA Array =================
     {
  id: "java-arrays",
  title: "Java Arrays",
  subjectCode: "java",
  intro: "Imagine you are a teacher and you need to store the marks of 100 students. Creating 100 separate integer variables (like mark1, mark2, mark3) would be a nightmare. This is where Java Arrays come to the rescue! An array is a data structure used to store a value of similar data type. Instead of declaring individual variables, you declare one array variable that can hold multiple values in contiguous memory locations.",
  sections: [
    // { 
    //   content: [
    //     {
    //       type: "image",
    //       url: DataType, 
    //       alt: "Java Arrays Contiguous Memory Allocation Diagram",
    //       className: "responsive-image"
    //     }
    //   ]
    // },
    {
      heading: "1. Array Declaration, Instantiation, and Initialization",
      content: [
        {
          type: "text",
          value: "Working with arrays in Java typically involves three distinct steps. While they can be done all on one line, understanding what happens behind the scenes is crucial for memory management.<br/><br/><strong>1. Declaration:</strong> This tells the compiler that a variable will hold an array, but it does not allocate any memory yet.<br/><strong>2. Instantiation (Definition):</strong> This uses the <code>new</code> keyword to allocate actual memory in the heap for the array based on the specified size.<br/><strong>3. Initialization:</strong> This assigns actual values to the specific index positions within the allocated array."
        },
        {
          type: "code",
          value: `public class Main {
  public static void main(String[] args) {
      // Step 1: Declaration
      int[] marks; 

      // Step 2: Instantiation (Allocating memory for 5 integers)
      marks = new int[5]; 

      // Step 3: Initialization (Assigning values based on index)
      marks[0] = 85;
      marks[1] = 90;
      marks[2] = 78;
      
      // Note: Array indexing always starts at 0!
      System.out.println("First student's marks: " + marks[0]);
  }
}`
        },
        {
          type: "text",
          value: "<strong>Pro Tip:</strong> You can combine all three steps into a single line of code using an array literal: <code>int[] marks = {85, 90, 78, 92, 88};</code>"
        }
      ]
    },
    {
      heading: "2. Difference between int[] arr; and int arr[];",
      content: [
        {
          type: "text",
          value: "When reading Java code, you might notice two different ways programmers declare arrays:<br/><br/><strong><code>int[] arr;</code> (The Java Preferred Way):</strong> Here, the brackets are attached to the data type. This clearly states that the type of the variable is an 'integer array'. This is the standard convention in Java and is highly recommended because it is more readable.<br/><br/><strong><code>int arr[];</code> (The C/C++ Legacy Way):</strong> Here, the brackets are attached to the variable name. Java allows this syntax solely to make it easier for C and C++ programmers to transition to Java. However, it is generally discouraged in modern Java development.<br/><br/>Both syntaxes work exactly the same way under the hood, but sticking to <code>int[] arr;</code> will make your code cleaner and more aligned with Java community standards."
        }
      ]
    },
    {
      heading: "3. Types of Arrays in Java",
      content: [
        {
          type: "text",
          value: "Java supports two main types of arrays depending on how you need to structure your data: Single-Dimensional Arrays and Multi-Dimensional Arrays."
        },
        {
          type: "list",
          items: [
            "1. Single-Dimensional Array: A simple list of elements stored in a single continuous row. (e.g., a list of student names).",
            "2. Multi-Dimensional Array: An array of arrays. The most common is a 2D array, which represents a table with rows and columns (e.g., an Excel spreadsheet or a chessboard)."
          ]
        },
        {
          type: "code",
          value: `public class Main {
  public static void main(String[] args) {
      // 1. Single-Dimensional Array
      String[] fruits = {"Apple", "Banana", "Mango"};
      
      // 2. Multi-Dimensional (2D) Array (3 rows, 2 columns)
      int[][] matrix = {
          {1, 2},
          {3, 4},
          {5, 6}
      };
      
      System.out.println("Fruit: " + fruits[1]); // Output: Banana
      System.out.println("Matrix value at row 1, col 0: " + matrix[1][0]); // Output: 3
  }
}`
        }
      ]
    },
    {
      heading: "4. Common Mistake: ArrayIndexOutOfBoundsException",
      content: [
        {
          type: "text",
          value: "One of the most common errors beginners face when working with arrays is the <strong><code>ArrayIndexOutOfBoundsException</code></strong>. Because array indexes always start at <code>0</code>, the last element is always at the index of <code>(length - 1)</code>. <br/><br/>If you create an array of size 5, the valid indexes are 0, 1, 2, 3, and 4. If you attempt to access index 5, the Java Virtual Machine (JVM) will crash your program and throw this exception to protect memory boundaries."
        },
        {
          type: "code",
          value: `public class Main {
  public static void main(String[] args) {
      int[] numbers = new int[3]; // Valid indexes are 0, 1, 2
      
      numbers[0] = 10;
      numbers[1] = 20;
      numbers[2] = 30;
      
      // This line will cause the program to crash!
      // System.out.println(numbers[3]); 
  }
}`
        }
      ]
    }
  ],
  // ==========================================
  // PLAYGROUND
  // ==========================================
  playground: [
    {
      title: "1D Array",
      code: `public class Main {
  public static void main(String[] args) {
      // Creating and initializing a 1D Array
      String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
      
      System.out.println("Total cars: " + cars.length);
      System.out.println("First car: " + cars[0]);
      
      // Changing an element
      cars[0] = "Opel";
      System.out.println("Updated first car: " + cars[0]);
  }
}`,
      output: "Total cars: 4\nFirst car: Volvo\nUpdated first car: Opel"
    },
    {
      title: "Array Loops",
      code: `public class Main {
  public static void main(String[] args) {
      int[] ages = {20, 22, 18, 35, 48, 26};
      
      System.out.println("Using a standard for loop:");
      for (int i = 0; i < ages.length; i++) {
          System.out.println("Age at index " + i + ": " + ages[i]);
      }
      
      System.out.println("\\nUsing a For-Each loop:");
      for (int age : ages) {
          System.out.println("Age: " + age);
      }
  }
}`,
      output: "Using a standard for loop:\nAge at index 0: 20\nAge at index 1: 22\nAge at index 2: 18\nAge at index 3: 35\nAge at index 4: 48\nAge at index 5: 26\n\nUsing a For-Each loop:\nAge: 20\nAge: 22\nAge: 18\nAge: 35\nAge: 48\nAge: 26"
    },
    {
      title: "2D Arrays",
      code: `public class Main {
  public static void main(String[] args) {
      // Creating a 2D array (Grid)
      int[][] myNumbers = { {1, 2, 3, 4}, {5, 6, 7} };
      
      // Accessing elements
      System.out.println("Row 0, Col 2: " + myNumbers[0][2]); // Should be 3
      System.out.println("Row 1, Col 1: " + myNumbers[1][1]); // Should be 6
      
      // Nested loop to print the whole 2D Array
      System.out.println("\\nPrinting all 2D array elements:");
      for (int i = 0; i < myNumbers.length; ++i) {
          for(int j = 0; j < myNumbers[i].length; ++j) {
              System.out.print(myNumbers[i][j] + " ");
          }
          System.out.println(); // Next line after each row
      }
  }
}`,
      output: "Row 0, Col 2: 3\nRow 1, Col 1: 6\n\nPrinting all 2D array elements:\n1 2 3 4 \n5 6 7 "
    }
  ],
  conclusion: "Arrays are powerful, lightning-fast, and deeply integrated into Java's core architecture. However, they have one major limitation: their size is fixed. Once you declare an array of size 10, you cannot suddenly add an 11th item. In real-world applications where data grows dynamically, Java developers usually prefer the 'ArrayList' class, which we will explore in later chapters."
},
     // ================= TOPIC 2: JAVA loop =================
{
  id: "java-loops",
  title: "Java Loops (Control Flow)",
  subjectCode: "java",
  intro: "Computers are incredibly fast, but their true power shines when performing repetitive tasks without getting tired. In programming, if you need to execute the same block of code multiple times, you use Loops. Loops help you follow the DRY (Don't Repeat Yourself) principle, keeping your code clean, efficient, and easy to maintain. In Java, there are several types of loops, each designed for specific real-world scenarios.",
  sections: [
    // { 
    //   content: [
    //     {
    //       type: "image",
    //       url: "https://via.placeholder.com/800x300?text=Java+Loops+Execution+Flow", 
    //       alt: "Java Loops Flowchart Diagram",
    //       className: "responsive-image"
    //     }
    //   ]
    // },
    {
      heading: "1. The while Loop",
      content: [
        {
          type: "text",
          value: "The <code>while</code> loop is a 'pre-test' loop. It evaluates a boolean condition before executing the code inside its body. If the condition is true, the code runs. Once the code finishes, it checks the condition again. This repeats until the condition becomes false. <br/><br/><strong>When to use it:</strong> Use a <code>while</code> loop when you do not know exactly how many times the loop needs to run in advance (e.g., waiting for a user to guess a password, or reading a file until the end is reached)."
        },
        {
          type: "code",
          value: `public class Main {
  public static void main(String[] args) {
      int count = 1; // 1. Initialization
      
      // 2. Condition
      while (count <= 3) {
          System.out.println("Processing item " + count);
          count++; // 3. Iteration (Update the counter)
      }
      System.out.println("Process complete!");
  }
}`
        },
        {
          type: "text",
          value: "<strong>Output:</strong><br/>Processing item 1<br/>Processing item 2<br/>Processing item 3<br/>Process complete!"
        }
      ]
    },
    {
      heading: "2. The do-while Loop",
      content: [
        {
          type: "text",
          value: "The <code>do-while</code> loop is very similar to the while loop, but it is a 'post-test' loop. This means it executes the code block first, and <em>then</em> checks the condition. Because of this, the code inside a <code>do-while</code> loop is guaranteed to run at least one time, even if the condition is false from the very beginning.<br/><br/><strong>When to use it:</strong> It is perfect for menu-driven programs where you want to show the menu to the user at least once before asking if they want to exit."
        },
        {
          type: "code",
          value: `public class Main {
  public static void main(String[] args) {
      int count = 10; 
      
      do {
          System.out.println("Current count is: " + count);
          count++;
      } while (count < 5); // Condition is FALSE, but loop runs once anyway!
      
  }
}`
        },
        {
          type: "text",
          value: "<strong>Output:</strong><br/>Current count is: 10"
        }
      ]
    },
    {
      heading: "3. The for Loop",
      content: [
        {
          type: "text",
          value: "The standard <code>for</code> loop is the most commonly used loop in Java. It compresses the initialization, condition, and iteration steps into a single, highly readable line of code. <br/><br/><strong>When to use it:</strong> Use a <code>for</code> loop when you know exactly how many times you want the code to run (for example, looping exactly 10 times, or looping through a specific math sequence)."
        },
        {
          type: "code",
          value: `public class Main {
  public static void main(String[] args) {
      // for(initialization; condition; iteration)
      for (int i = 1; i <= 5; i++) {
          System.out.println("Loop iteration: " + i);
      }
  }
}`
        },
        {
          type: "text",
          value: "<strong>Output:</strong><br/>Loop iteration: 1<br/>Loop iteration: 2<br/>Loop iteration: 3<br/>Loop iteration: 4<br/>Loop iteration: 5"
        }
      ]
    },
    {
      heading: "4. The for-each Loop (Enhanced for loop)",
      content: [
        {
          type: "text",
          value: "Introduced in Java 5, the <code>for-each</code> loop is a cleaner and more secure way to iterate over Arrays and Collections. It completely eliminates the need for an index counter, preventing common bugs where you accidentally read outside the bounds of an array.<br/><br/><strong>When to use it:</strong> Whenever you need to read every single item in an array from start to finish without modifying the array itself."
        },
        {
          type: "code",
          value: `public class Main {
  public static void main(String[] args) {
      String[] planets = {"Mercury", "Venus", "Earth", "Mars"};
      
      // Read as: "For each String 'planet' in the 'planets' array..."
      for (String planet : planets) {
          System.out.println("Planet: " + planet);
      }
  }
}`
        },
        {
          type: "text",
          value: "<strong>Output:</strong><br/>Planet: Mercury<br/>Planet: Venus<br/>Planet: Earth<br/>Planet: Mars"
        }
      ]
    },
    {
      heading: "5. Nested Loops",
      content: [
        {
          type: "text",
          value: "A nested loop is simply a loop placed inside the body of another loop. The best way to understand this is to think of a digital clock. The outer loop is the 'Hours', and the inner loop is the 'Minutes'. For every 1 hour that passes, the minutes must complete a full 60 iterations before the hour moves forward.<br/><br/>Nested loops are heavily used for processing 2D arrays, generating tables, or drawing mathematical patterns."
        },
        {
          type: "code",
          value: `public class Main {
  public static void main(String[] args) {
      // Outer loop (Rows)
      for (int i = 1; i <= 3; i++) {
          
          // Inner loop (Columns)
          for (int j = 1; j <= 2; j++) {
              System.out.println("Outer: " + i + ", Inner: " + j);
          }
      }
  }
}`
        },
        {
          type: "text",
          value: "<strong>Output:</strong><br/>Outer: 1, Inner: 1<br/>Outer: 1, Inner: 2<br/>Outer: 2, Inner: 1<br/>Outer: 2, Inner: 2<br/>Outer: 3, Inner: 1<br/>Outer: 3, Inner: 2"
        }
      ]
    },
    {
      heading: "Common Mistakes When Using Loops",
      content: [
        {
          type: "text",
          value: "When writing loops, beginners often run into a few classic bugs. Here is what you should watch out for:<br/><br/><strong>1. The Infinite Loop:</strong> This happens when your loop's condition never becomes false. Usually, this occurs because you forgot to increment your counter (e.g., missing <code>i++</code>). The program will run forever until the computer crashes or runs out of memory.<br/><br/><strong>2. The Accidental Semicolon:</strong> Placing a semicolon directly after the parenthesis of a for loop (e.g., <code>for(int i=0; i<5; i++);</code>) instantly terminates the loop. The code block beneath it will only execute once, confusing the programmer.<br/><br/><strong>3. Off-by-one Errors:</strong> This occurs when a loop executes one time too many or one time too few. This is usually caused by confusing <code><</code> (less than) with <code><=</code> (less than or equal to) in your condition."
        }
      ]
    },
    {
      heading: "Frequently Asked Questions (FAQs)",
      content: [
        {
          type: "text",
          value: "<strong>Q1: Which loop is the fastest in Java?</strong><br/>A: At the compiler level, <code>while</code>, <code>do-while</code>, and <code>for</code> loops are converted into nearly identical bytecode. There is no noticeable performance difference between them. You should choose the loop that makes your code the easiest to read and understand.<br/><br/><strong>Q2: Can I break out of a loop early?</strong><br/>A: Yes! You can use the <code>break;</code> keyword to immediately exit a loop entirely. If you just want to skip the current iteration and move to the next one, you can use the <code>continue;</code> keyword.<br/><br/><strong>Q3: Is it bad practice to declare variables inside a loop?</strong><br/>A: No, it is perfectly fine. Variables declared inside a loop have 'block scope', meaning they are created and destroyed during each iteration. This is great for keeping your memory footprint small, though for heavy objects, it might be better to declare them outside the loop to save processing time."
        }
      ]
    }
  ],
  // ==========================================
  // PLAYGROUND
  // ==========================================
  playground: [
    {
      title: "While Loop",
      code: `public class Main {
  public static void main(String[] args) {
      int countdown = 5;
      
      System.out.println("Initiating launch sequence...");
      while (countdown > 0) {
          System.out.println("T-minus " + countdown);
          countdown--;
      }
      System.out.println("Liftoff!");
  }
}`,
      output: "Initiating launch sequence...\nT-minus 5\nT-minus 4\nT-minus 3\nT-minus 2\nT-minus 1\nLiftoff!"
    },
    {
      title: "For Loop",
      code: `public class Main {
  public static void main(String[] args) {
      System.out.println("Printing Even Numbers from 2 to 10:");
      
      // We can increment by 2 in each iteration!
      for (int i = 2; i <= 10; i += 2) {
          System.out.println(i);
      }
  }
}`,
      output: "Printing Even Numbers from 2 to 10:\n2\n4\n6\n8\n10"
    },
    {
      title: "For-Each Array",
      code: `public class Main {
  public static void main(String[] args) {
      int[] scores = {95, 80, 85, 100};
      int total = 0;
      
      // Using enhanced for-loop to calculate sum
      for (int score : scores) {
          total += score;
      }
      
      System.out.println("Total Score: " + total);
  }
}`,
      output: "Total Score: 360"
    },
    {
      title: "Nested Pattern",
      code: `public class Main {
  public static void main(String[] args) {
      // Using nested loops to draw a right-angle triangle
      for (int row = 1; row <= 5; row++) {
          
          for (int star = 1; star <= row; star++) {
              System.out.print("* ");
          }
          System.out.println(); // Move to next line
      }
  }
}`,
      output: "* \n* * \n* * * \n* * * * \n* * * * * "
    }
  ],
  conclusion: "Loops are the engine that drives repetitive logic in your software. Whether you are searching through an array of data, processing thousands of user inputs, or building complex game physics, choosing the right loop makes your code both efficient and easily readable. As a rule of thumb: use a 'for' loop when you know the exact iterations, use a 'while' loop for unknown iterations, and use a 'for-each' loop whenever you are reading arrays."
}
  ],
};

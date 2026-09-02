// java Introduction-done
// java Comments -done
// java Variables -done
// java User Input -done
// java Data Types -done
// java Type Casting -done
// java Operators -done
// java Conditional Statements-done 
// java Loops-done 
// java Strings-done
// java Arrays-done  
// java Methods-done
// java Classes and Objects
// java Constructors
// java Modifiers-done
// java Encapsulation-done
// java Inheritance-done
// java Polymorphism-done
// java Abstraction-done
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
    // ================= TOPIC 1.0: Introduction to Java =====
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
    // ================= TOPIC 1.1: Java Installation ========
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
    // ================= TOPIC 1.2: IntelliJ IDEA Setup ======
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
    // ================= TOPIC 2: JAVA FLOW CONTROL  =========
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
    // ================= TOPIC 2: JAVA comment ===============
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
    // ================= TOPIC 2: JAVA data types ============
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
    // ================= TOPIC 2: JAVA variables not done ====
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
    // ================= TOPIC 2: JAVA type casting ==========
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
     // ================= TOPIC 2: JAVA Opraters =============
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
      // ================= TOPIC 2: JAVA Array ===============
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
  title: "Java Loops",
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
    },
    // ================= TOPIC: JAVA Strings =================
    {
      id: "java-strings",
      title: "Java Strings",
      intro: "In Java, strings are objects that represent a sequence of characters. The java.lang.String class is used to create and manipulate strings, and unlike some other languages, Java strings are immutable.",
      sections: [
        {
          heading: "1. Creating Strings",
          content: [
            {
              type: "text",
              value: "Strings in Java can be created using string literals (stored in the String Pool) or the 'new' keyword (stored in heap memory)."
            },
            {
              type: "code",
              value: `String name = "Adarsh"; // String literal\nString message = new String("Hello World"); // Using 'new' keyword`,
            },
          ],
        },
        {
          heading: "2. String Concatenation",
          content: [
            {
              type: "text",
              value: "You can concatenate (join) strings using the + operator or the concat() method.",
            },
            {
              type: "code",
              value: `String str1 = "Java";\nString str2 = "Code";\n\nSystem.out.println(str1 + " " + str2);      // Java CodenSystem.out.println(str1.concat(" 17"));     // Java 17`,
            },
          ],
        },
        {
          heading: "3. Java String Methods",
          content: [
            {
              type: "table",
              headers: ["Method", "Description", "Code Example", "Output"],
              rows: [
                ["length()", "Returns the length of the string", 'String s="hello"; System.out.println(s.length());', "5"],
                ["charAt()", "Returns character at a specific index", 'String s="hello"; System.out.println(s.charAt(1));', "e"],
                ["toUpperCase()", "Converts to uppercase", 'String s="hello"; System.out.println(s.toUpperCase());', "HELLO"],
                ["toLowerCase()", "Converts to lowercase", 'String s="HELLO"; System.out.println(s.toLowerCase());', "hello"],
                ["trim()", "Removes spaces from both ends", 'String s=" hello "; System.out.println(s.trim());', "hello"],
                ["substring()", "Extracts a portion of the string", 'String s="hello"; System.out.println(s.substring(1,4));', "ell"],
                ["replace()", "Replaces characters or substrings", 'String s="hello"; System.out.println(s.replace("h","y"));', "yello"],
                ["split()", "Splits string into an array based on regex", 'String s="a,b"; String[] arr = s.split(",");', '["a", "b"]'],
                ["indexOf()", "Returns index of first occurrence", 'String s="hello"; System.out.println(s.indexOf("e"));', "1"],
                ["contains()", "Checks if string contains a sequence", 'String s="hello"; System.out.println(s.contains("ell"));', "true"],
                ["equals()", "Compares content of two strings", 'String s="hello"; System.out.println(s.equals("Hello"));', "false"],
                ["equalsIgnoreCase()", "Compares content, ignoring case", 'String s="hello"; System.out.println(s.equalsIgnoreCase("Hello"));', "true"],
                ["startsWith()", "Checks if string starts with prefix", 'String s="hello"; System.out.println(s.startsWith("he"));', "true"],
                ["endsWith()", "Checks if string ends with suffix", 'String s="hello"; System.out.println(s.endsWith("lo"));', "true"],
                ["isEmpty()", "Checks if string length is 0", 'String s=""; System.out.println(s.isEmpty());', "true"]
              ]
            }
          ]
        }
      ],
      // ==========================================
      // PLAYGROUND ADDED HERE (4 TABS WITH CODE ONLY)
      // ==========================================
      playground: [
        {
          title: "Case & Trim Methods",
          code: `String text = "  jAvA pRoGrAmMiNg  ";\n\nSystem.out.println("Upper: " + text.toUpperCase());\nSystem.out.println("Lower: " + text.toLowerCase());\nSystem.out.println("Trimmed: '" + text.trim() + "'");\nSystem.out.println("Length: " + text.length());`,
          output: "Upper:   JAVA PROGRAMMING  \nLower:   java programming  \nTrimmed: 'jAvA pRoGrAmMiNg'\nLength: 20"
        },
        {
          title: "Search & Compare",
          code: `String msg1 = "Java is fun";\nString msg2 = "JAVA IS FUN";\n\nSystem.out.println("Index of 'is': " + msg1.indexOf("is"));\nSystem.out.println("Contains 'fun': " + msg1.contains("fun"));\nSystem.out.println("Equals: " + msg1.equals(msg2));\nSystem.out.println("Equals Ignore Case: " + msg1.equalsIgnoreCase(msg2));\nSystem.out.println("Starts with 'Java': " + msg1.startsWith("Java"));`,
          output: "Index of 'is': 5\nContains 'fun': true\nEquals: false\nEquals Ignore Case: true\nStarts with 'Java': true"
        },
        {
          title: "Substring & Replace",
          code: `String str = "Hello Universe!";\n\nSystem.out.println("Substring (6): " + str.substring(6));\nSystem.out.println("Substring (0,5): " + str.substring(0, 5));\nSystem.out.println("Replace 'Universe': " + str.replace("Universe", "Java"));\nSystem.out.println("Replace char 'e': " + str.replace('e', 'x'));`,
          output: "Substring (6): Universe!\nSubstring (0,5): Hello\nReplace 'Universe': Hello Java!\nReplace char 'e': Hxllo Univxrsx!"
        },
        {
          title: "Split & Validate",
          code: `String data = "HTML,CSS,Java,SQL";\nString emptyStr = "";\n\n// 1. Split converts it to an array\nString[] skills = data.split(",");\nSystem.out.println("First skill: " + skills[0]);\nSystem.out.println("Total skills: " + skills.length);\n\n// 2. Validate empty strings\nSystem.out.println("Is 'data' empty? " + data.isEmpty());\nSystem.out.println("Is 'emptyStr' empty? " + emptyStr.isEmpty());`,
          output: "First skill: HTML\nTotal skills: 4\nIs 'data' empty? false\nIs 'emptyStr' empty? true"
        }
      ],
      conclusion: "Java Strings are powerful, immutable objects. Because they cannot be changed after creation, methods that appear to modify a string actually return a brand new string. Mastering these built-in methods is vital for efficient text manipulation and data processing in Java."
    },
   // ================= TOPIC: JAVA Methods ==================
    {
      id: "java-methods",
      title: "Java Methods",
      intro: "A method is a block of code that only runs when it is called. Methods are used to perform specific actions and are essential for reusing code—you write the logic once and use it many times. They can accept inputs (parameters) and hand back results (return values).",
      sections: [
        {
          heading: "1. No Return Type, No Parameters",
          content: [
            {
              type: "text",
              value: "These methods use the 'void' keyword, meaning they do not return any data to the caller. They also have empty parentheses, meaning they don't require any outside input to do their job."
            },
            {
              type: "code",
              value: `static void printGreeting() {\n    System.out.println("Welcome to Java!");\n}`,
            },
          ],
        },
        {
          heading: "2. No Return Type, With Parameters",
          content: [
            {
              type: "text",
              value: "These methods still use 'void' so they don't return a value, but they accept variables inside their parentheses. This allows them to perform actions based on the specific data passed into them.",
            },
            {
              type: "code",
              value: `static void printScore(String player, int score) {\n    System.out.println(player + " scored " + score + " points.");\n}`,
            },
          ],
        },
        {
          heading: "3. With Return Type, No Parameters",
          content: [
            {
              type: "text",
              value: "Instead of 'void', these methods declare a specific data type (like int, double, or String). They execute their logic and use the 'return' keyword to hand back a value, but they don't need any inputs."
            },
            {
              type: "code",
              value: `static double getPiValue() {\n    return 3.14159;\n}`
            }
          ]
        },
        {
          heading: "4. With Return Type, With Parameters",
          content: [
            {
              type: "text",
              value: "These are highly flexible methods. They accept input variables, process that data, and return a computed result back to wherever the method was called."
            },
            {
              type: "code",
              value: `static int calculateArea(int length, int width) {\n    return length * width;\n}`
            }
          ]
        }
      ],
      // ==========================================
      // PLAYGROUND ADDED HERE (4 TABS WITH CODE ONLY)
      // ==========================================
      playground: [
        {
          title: "Void Methods",
          code: `// No params\nstatic void sayHello() {\n    System.out.println("Hello World!");\n}\n\n// With params\nstatic void greetUser(String name, int age) {\n    System.out.println(name + " is " + age + " years old.");\n}\n\npublic static void main(String[] args) {\n    sayHello();\n    greetUser("Alice", 25);\n}`,
          output: "Hello World!\nAlice is 25 years old."
        },
        {
          title: "Return Methods",
          code: `// Returns double, no params\nstatic double getGravity() {\n    return 9.81;\n}\n\n// Returns int, with params\nstatic int multiply(int a, int b) {\n    return a * b;\n}\n\npublic static void main(String[] args) {\n    System.out.println("Gravity is: " + getGravity());\n    \n    int result = multiply(5, 4);\n    System.out.println("5 x 4 = " + result);\n}`,
          output: "Gravity is: 9.81\n5 x 4 = 20"
        },
        {
          title: "Method Overloading",
          code: `// Same method name, different parameters\nstatic int add(int a, int b) {\n    return a + b;\n}\n\nstatic double add(double a, double b) {\n    return a + b;\n}\n\nstatic int add(int a, int b, int c) {\n    return a + b + c;\n}\n\npublic static void main(String[] args) {\n    System.out.println("Two Ints: " + add(5, 10));\n    System.out.println("Two Doubles: " + add(4.5, 3.2));\n    System.out.println("Three Ints: " + add(1, 2, 3));\n}`,
          output: "Two Ints: 15\nTwo Doubles: 7.7\nThree Ints: 6"
        },
        {
          title: "Static vs Instance",
          code: `// Static method (belongs to the class)\nstatic void staticMethod() {\n    System.out.println("Called without an object.");\n}\n\n// Public/Instance method (belongs to an object)\npublic void instanceMethod() {\n    System.out.println("Called using an object.");\n}\n\npublic static void main(String[] args) {\n    staticMethod(); // Direct call\n    \n    // instanceMethod(); -> ERROR!\n    \n    Main myObj = new Main(); // Create object\n    myObj.instanceMethod();  // Call via object\n}`,
          output: "Called without an object.\nCalled using an object."
        }
      ],
      conclusion: "Methods keep your code organized, readable, and DRY (Don't Repeat Yourself). Understanding how to mix and match return types and parameters allows you to build powerful, reusable blocks of logic."
    },
    // ================= TOPIC: JAVA Classes and Objects =====
    {
      id: "java-classes-and-objects",
      title: "Java Classes and Objects",
      intro: "Java is an Object-Oriented Programming (OOP) language. A Class is a logical blueprint or template that defines the attributes (fields/state) and behaviors (methods) of a concept. An Object is a physical, real-world instance of that class created in memory using the 'new' keyword.",
      sections: [
        {
          heading: "1. What is a Class?",
          content: [
            {
              type: "text",
              value: "A class does not occupy memory when defined; it simply specifies what properties and capabilities objects of its type will have."
            },
            {
              type: "code",
              value: `public class Car {\n    // Attributes (State / Fields)\n    String brand;\n    String color;\n    int speed;\n\n    // Behavior (Methods)\n    void accelerate() {\n        speed += 10;\n    }\n}`
            }
          ]
        },
        {
          heading: "2. What is an Object?",
          content: [
            {
              type: "text",
              value: "An object is an instance of a class allocated in Heap memory. You can create multiple distinct objects from a single class blueprint, each maintaining its own independent state."
            },
            {
              type: "code",
              value: `Car myCar = new Car(); // 'new' allocates memory for the object\nmyCar.brand = "Tesla";\nmyCar.color = "Red";\nmyCar.accelerate();`
            }
          ]
        },
        {
          heading: "3. Class vs Object Comparison",
          content: [
            {
              type: "table",
              headers: ["Feature", "Class", "Object"],
              rows: [
                ["Definition", "A conceptual blueprint or template", "A physical instance of a class"],
                ["Memory Allocation", "No memory is allocated when declared", "Memory is allocated in Heap when instantiated with 'new'"],
                ["Existence", "Logical entity", "Physical / Real-world entity"],
                ["Quantity", "Declared only once", "Can create unlimited objects from one class"],
                ["Example", "Architect's blueprint of a house", "The actual physical houses built from that blueprint"]
              ]
            }
          ]
        }
      ],
      // ==========================================
      // PLAYGROUND (4 TABS WITH CODE ONLY)
      // ==========================================
      playground: [
        {
          title: "Simple Class & Object",
          code: `class Student {\n    String name;\n    int rollNumber;\n\n    void study() {\n        System.out.println(name + " is studying Java.");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Student s1 = new Student(); // Create Object\n        s1.name = "Adarsh";\n        s1.rollNumber = 101;\n\n        System.out.println("Name: " + s1.name);\n        s1.study();\n    }\n}`,
          output: "Name: Adarsh\nAdarsh is studying Java."
        },
        {
          title: "Multiple Independent Objects",
          code: `class Dog {\n    String name;\n    int age;\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Dog dog1 = new Dog();\n        dog1.name = "Buddy";\n        dog1.age = 3;\n\n        Dog dog2 = new Dog();\n        dog2.name = "Max";\n        dog2.age = 5;\n\n        System.out.println(dog1.name + " is " + dog1.age + " yrs old.");\n        System.out.println(dog2.name + " is " + dog2.age + " yrs old.");\n    }\n}`,
          output: "Buddy is 3 yrs old.\nMax is 5 yrs old."
        },
        {
          title: "Constructors (Initializing State)",
          code: `class Laptop {\n    String brand;\n    int ramGB;\n\n    // Parameterized Constructor\n    Laptop(String b, int r) {\n        brand = b;\n        ramGB = r;\n    }\n\n    void displaySpecs() {\n        System.out.println(brand + " has " + ramGB + "GB RAM.");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Laptop lap1 = new Laptop("Apple MacBook", 16);\n        Laptop lap2 = new Laptop("Dell XPS", 32);\n\n        lap1.displaySpecs();\n        lap2.displaySpecs();\n    }\n}`,
          output: "Apple MacBook has 16GB RAM.\nDell XPS has 32GB RAM."
        },
        {
          title: "State Modification via Methods",
          code: `class BankAccount {\n    String accountHolder;\n    double balance;\n\n    BankAccount(String holder, double initialBalance) {\n        accountHolder = holder;\n        balance = initialBalance;\n    }\n\n    void deposit(double amount) {\n        balance += amount;\n        System.out.println(accountHolder + " deposited: $" + amount);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        BankAccount acc = new BankAccount("Adarsh", 1000.0);\n        System.out.println("Initial Balance: $" + acc.balance);\n        \n        acc.deposit(500.0);\n        System.out.println("Updated Balance: $" + acc.balance);\n    }\n}`,
          output: "Initial Balance: $1000.0\nAdarsh deposited: $500.0\nUpdated Balance: $1500.0"
        }
      ],
      conclusion: "Classes and Objects form the core of Java programming. By separating the blueprint (Class) from the actual instances (Objects), you can structure complex software where individual objects maintain their own state and interact safely through clearly defined methods."
    },
    // ================= TOPIC: JAVA Constructors ============
    {
      id: "java-constructors",
      title: "Java Constructors",
      intro: "A constructor in Java is a special block of code used to initialize objects. It is called automatically when an instance of a class is created using the 'new' keyword. Its main purpose is to allocate memory and set initial values for object attributes.",
      sections: [
        {
          heading: "1. Rules for Defining a Constructor",
          content: [
            {
              type: "text",
              value: "To create a valid constructor in Java, you must strictly follow these foundational rules:"
            },
            {
              type: "table",
              headers: ["Rule", "Description"],
              rows: [
                ["Same Name", "The constructor's name MUST exactly match the Class name."],
                ["No Return Type", "Constructors must NOT have an explicit return type (not even 'void')."],
                ["Allowed Modifiers", "Can use access modifiers (public, private, protected) to control instantiation access."],
                ["Restricted Keywords", "Constructors CANNOT be marked static, final, abstract, or synchronized."]
              ]
            }
          ]
        },
        {
          heading: "2. Default & No-Arg Constructor",
          content: [
            {
              type: "text",
              value: "If you do not define any constructor in your class, the Java compiler automatically inserts a default, empty no-argument constructor. You can also explicitly write your own no-arg constructor to perform setup tasks."
            },
            {
              type: "code",
              value: `class Server {\n    String status;\n    \n    // Explicit No-Arg Constructor\n    Server() {\n        status = "Online";\n        System.out.println("Server initialized.");\n    }\n}`
            }
          ]
        },
        {
          heading: "3. Parameterized Constructor",
          content: [
            {
              type: "text",
              value: "A constructor that accepts parameters allows you to pass initial values dynamically when creating different objects, ensuring each object starts with custom data."
            },
            {
              type: "code",
              value: `class User {\n    int id;\n    String username;\n    \n    // Parameterized Constructor\n    User(int i, String u) {\n        id = i;\n        username = u;\n    }\n}`
            }
          ]
        },
        {
          heading: "4. Constructor Overloading",
          content: [
            {
              type: "text",
              value: "A class can have multiple constructors as long as their parameter lists differ in data type, number of parameters, or parameter order. This gives users flexibility in how they instantiate objects."
            },
            {
              type: "code",
              value: `class Box {\n    Box() { /* Default 1x1x1 cube */ }\n    Box(int side) { /* Custom cube */ }\n    Box(int l, int w, int h) { /* Custom cuboid */ }\n}`
            }
          ]
        },
        {
          heading: "5. Copy Constructor",
          content: [
            {
              type: "text",
              value: "Unlike C++, Java does not provide a default copy constructor. However, you can write a custom constructor that takes an object of the same class as a parameter to clone or duplicate its state."
            },
            {
              type: "code",
              value: `class Point {\n    int x, y;\n    \n    // Copy Constructor\n    Point(Point p) {\n        this.x = p.x;\n        this.y = p.y;\n    }\n}`
            }
          ]
        }
      ],
      // ==========================================
      // PLAYGROUND ADDED HERE (4 TABS WITH CODE ONLY)
      // ==========================================
      playground: [
        {
          title: "Default & No-Arg",
          code: `class Server {\n    String status;\n\n    // Developer-defined No-Arg Constructor\n    Server() {\n        status = "Online";\n        System.out.println("Server initialized.");\n    }\n\n    void getStatus() {\n        System.out.println("Status: " + status);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        // Constructor is called here upon 'new'\n        Server s1 = new Server();\n        s1.getStatus();\n    }\n}`,
          output: "Server initialized.\nStatus: Online"
        },
        {
          title: "Parameterized",
          code: `class Employee {\n    int empId;\n    String empName;\n\n    // Parameterized Constructor\n    Employee(int id, String name) {\n        empId = id;\n        empName = name;\n    }\n\n    void display() {\n        System.out.println("ID: " + empId + " | Name: " + empName);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        // Passing values at the time of creation\n        Employee e1 = new Employee(101, "Adarsh");\n        Employee e2 = new Employee(102, "Sarah");\n\n        e1.display();\n        e2.display();\n    }\n}`,
          output: "ID: 101 | Name: Adarsh\nID: 102 | Name: Sarah"
        },
        {
          title: "Constructor Overloading",
          code: `class Product {\n    String name;\n    double price;\n\n    // Constructor 1: Only name\n    Product(String n) {\n        name = n;\n        price = 0.0;\n    }\n\n    // Constructor 2: Name and price\n    Product(String n, double p) {\n        name = n;\n        price = p;\n    }\n\n    void show() {\n        System.out.println(name + " costs $" + price);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Product p1 = new Product("Free E-book");\n        Product p2 = new Product("Laptop", 999.99);\n\n        p1.show();\n        p2.show();\n    }\n}`,
          output: "Free E-book costs $0.0\nLaptop costs $999.99"
        },
        {
          title: "Copy Constructor",
          code: `class Point {\n    int x, y;\n\n    // Normal Parameterized Constructor\n    Point(int x, int y) {\n        this.x = x;\n        this.y = y;\n    }\n\n    // Copy Constructor\n    Point(Point p) {\n        this.x = p.x;\n        this.y = p.y;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Point p1 = new Point(10, 20);\n        \n        // Copying state of p1 into new object p2\n        Point p2 = new Point(p1);\n\n        System.out.println("P1 Coordinates: " + p1.x + ", " + p1.y);\n        System.out.println("P2 Coordinates: " + p2.x + ", " + p2.y);\n    }\n}`,
          output: "P1 Coordinates: 10, 20\nP2 Coordinates: 10, 20"
        }
      ],
      conclusion: "Constructors are the gateway to robust Java object initialization. By mastering default constructors, parameterized inputs, overloading, and object duplication, you ensure that every instance created in memory begins its lifecycle in a valid, well-defined state."
    }, 
     // ================= TOPIC: JAVA Access Modifiers =======
    {
      id: "java-access-modifiers",
      title: "Java Access Modifiers",
      intro: "Access modifiers in Java help restrict the scope of a class, constructor, variable, method, or data member. They provide encapsulation and control where your classes and class members can be accessed from within your application.",
      sections: [
        {
          heading: "1. Access Levels Overview",
          content: [
            {
              type: "text",
              value: "The following table summarizes the visibility of each modifier across different scopes in a Java application:"
            },
            {
              type: "table",
              headers: ["Modifier", "Same Class", "Same Package", "Subclass (Different Pkg)", "World (Different Pkg)"],
              rows: [
                ["public", "Yes", "Yes", "Yes", "Yes"],
                ["protected", "Yes", "Yes", "Yes", "No"],
                ["default (no modifier)", "Yes", "Yes", "No", "No"],
                ["private", "Yes", "No", "No", "No"]
              ]
            }
          ]
        },
        {
          heading: "2. Private Modifier",
          content: [
            {
              type: "text",
              value: "The private modifier specifies the most restrictive access level. Members declared as private are accessible only within the exact same class."
            },
            {
              type: "code",
              value: `class Secret {\n    private int secretCode = 1234;\n    \n    private void reveal() {\n        System.out.println("Code: " + secretCode);\n    }\n}`
            }
          ]
        },
        {
          heading: "3. Default (Package-Private)",
          content: [
            {
              type: "text",
              value: "When no access modifier is explicitly declared, Java applies the default (package-private) access level. Members are accessible only to classes located within the same package."
            },
            {
              type: "code",
              value: `class PackageData {\n    String message = "Hello from package!"; // Default modifier\n    \n    void showMessage() {\n        System.out.println(message);\n    }\n}`
            }
          ]
        },
        {
          heading: "4. Protected Modifier",
          content: [
            {
              type: "text",
              value: "Protected members are accessible within the same package and also to subclasses (child classes) located in different packages through inheritance."
            },
            {
              type: "code",
              value: `public class GameCharacter {\n    protected int health = 100;\n    \n    protected void takeDamage(int amount) {\n        health -= amount;\n    }\n}`
            }
          ]
        },
        {
          heading: "5. Public Modifier",
          content: [
            {
              type: "text",
              value: "The public modifier allows complete visibility. Classes, methods, and variables declared as public can be accessed from anywhere in the application."
            },
            {
              type: "code",
              value: `public class AppConfig {\n    public static final String APP_NAME = "MyJavaApp";\n    \n    public void start() {\n        System.out.println("Starting application...");\n    }\n}`
            }
          ]
        }
      ],
      // ==========================================
      // PLAYGROUND ADDED HERE (4 TABS WITH CODE ONLY)
      // ==========================================
      playground: [
        {
          title: "Private & Getters",
          code: `class BankAccount {\n    private double balance = 5000.0;\n\n    // Public getter to safely access private data\n    public double getBalance() {\n        return balance;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        BankAccount account = new BankAccount();\n        // System.out.println(account.balance); // ERROR: balance has private access\n        System.out.println("Safe Balance Access: $" + account.getBalance());\n    }\n}`,
          output: "Safe Balance Access: $5000.0"
        },
        {
          title: "Default Access",
          code: `// Both classes reside in the same package\nclass Employee {\n    String name = "Adarsh"; // Default access\n    int id = 101;           // Default access\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Employee emp = new Employee();\n        System.out.println("Employee Name: " + emp.name);\n        System.out.println("Employee ID: " + emp.id);\n    }\n}`,
          output: "Employee Name: Adarsh\nEmployee ID: 101"
        },
        {
          title: "Protected & Inheritance",
          code: `class Vehicle {\n    protected String brand = "Toyota";\n    \n    protected void honk() {\n        System.out.println("Tuut, tuut!");\n    }\n}\n\nclass Car extends Vehicle {\n    private String model = "Corolla";\n    \n    public void displayDetails() {\n        honk(); // Accessing protected method from parent\n        System.out.println("Brand: " + brand + " | Model: " + model);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Car myCar = new Car();\n        myCar.displayDetails();\n    }\n}`,
          output: "Tuut, tuut!\nBrand: Toyota | Model: Corolla"
        },
        {
          title: "Public Visibility",
          code: `public class Utility {\n    public static String version = "2.5.0";\n    \n    public static void printAnnouncement() {\n        System.out.println("System updated to version " + version);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        // Public members can be called freely across classes\n        Utility.printAnnouncement();\n    }\n}`,
          output: "System updated to version 2.5.0"
        }
      ],
      conclusion: "Proper application of access modifiers is the foundation of encapsulation in object-oriented programming. By keeping variables private and exposing only necessary methods as public, you protect application data from unintended modifications and build maintainable code."
    },
    // ================= TOPIC: JAVA Encapsulation ===========
    {
      id: "java-encapsulation",
      title: "Java Encapsulation",
      intro: "Encapsulation is one of the four fundamental OOP concepts. It is the mechanism of wrapping data (variables) and code acting on that data (methods) together as a single unit, while restricting direct external access to sensitive data (Data Hiding).",
      sections: [
        {
          heading: "1. What is Encapsulation?",
          content: [
            {
              type: "text",
              value: "To achieve encapsulation in Java: 1) Declare class variables as 'private' so they cannot be accessed directly from outside the class. 2) Provide 'public' getter and setter methods to read and modify the private variables safely."
            },
            {
              type: "code",
              value: `public class Employee {\n    private double salary; // Hidden data\n\n    // Getter (Read access)\n    public double getSalary() {\n        return salary;\n    }\n\n    // Setter (Write access with validation)\n    public void setSalary(double amount) {\n        if (amount > 0) {\n            this.salary = amount;\n        }\n    }\n}`
            }
          ]
        },
        {
          heading: "2. Real-Life Example: Bank ATM / Medical Capsule",
          content: [
            {
              type: "text",
              value: "Think of a Bank ATM or Online Banking app: Your account balance is completely hidden (private). You cannot manually change the numbers in the bank's database directly. Instead, you must go through verified public interfaces (deposit/withdraw methods) that validate your PIN and ensure you don't withdraw more money than you actually have."
            }
          ]
        },
        {
          heading: "3. Advantages of Encapsulation",
          content: [
            {
              type: "table",
              headers: ["Advantage", "Description"],
              rows: [
                ["Data Hiding", "External classes cannot directly inspect or tamper with internal object states."],
                ["Input Validation", "Setters allow you to add validation checks before updating internal data (e.g., preventing negative age or salary)."],
                ["Flexibility & Read-Only", "You can make a variable read-only (by providing only a getter) or write-only (by providing only a setter)."],
                ["Code Maintainability", "Internal implementation details can be refactored without breaking external code that relies on getters/setters."]
              ]
            }
          ]
        }
      ],
      // ==========================================
      // PLAYGROUND (4 TABS WITH CODE ONLY)
      // ==========================================
      playground: [
        {
          title: "Basic Getters & Setters",
          code: `class Student {\n    private String name;\n    private int age;\n\n    public String getName() { return name; }\n    public void setName(String name) { this.name = name; }\n\n    public int getAge() { return age; }\n    public void setAge(int age) { this.age = age; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Student s = new Student();\n        s.setName("Adarsh");\n        s.setAge(21);\n        System.out.println(s.getName() + " is " + s.getAge() + " years old.");\n    }\n}`,
          output: "Adarsh is 21 years old."
        },
        {
          title: "Validation in Setters",
          code: `class Account {\n    private double balance = 1000.0;\n\n    public void withdraw(double amount) {\n        if (amount <= 0) {\n            System.out.println("Invalid amount!");\n        } else if (amount > balance) {\n            System.out.println("Insufficient funds!");\n        } else {\n            balance -= amount;\n            System.out.println("Withdrew: $" + amount + " | Remaining: $" + balance);\n        }\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Account acc = new Account();\n        acc.withdraw(5000); // Exceeds balance\n        acc.withdraw(400);  // Valid transaction\n    }\n}`,
          output: "Insufficient funds!\nWithdrew: $400.0 | Remaining: $600.0"
        },
        {
          title: "Read-Only Class",
          code: `class Configuration {\n    // Private final field initialized via constructor\n    private final String apiKey = "AIzaSyD98_SecretKey_2026";\n\n    // Only getter provided -> Read-Only access\n    public String getApiKey() {\n        return apiKey;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Configuration config = new Configuration();\n        System.out.println("API Key: " + config.getApiKey());\n        // config.apiKey = "newKey"; // ERROR: Cannot assign or access directly\n    }\n}`,
          output: "API Key: AIzaSyD98_SecretKey_2026"
        },
        {
          title: "Data Hiding Protection",
          code: `class Vault {\n    private int secretPin = 4321;\n\n    public boolean unlock(int enteredPin) {\n        if (enteredPin == secretPin) {\n            System.out.println("Vault Unlocked!");\n            return true;\n        }\n        System.out.println("Access Denied!");\n        return false;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Vault myVault = new Vault();\n        myVault.unlock(1111); // Wrong PIN\n        myVault.unlock(4321); // Correct PIN\n    }\n}`,
          output: "Access Denied!\nVault Unlocked!"
        }
      ],
      conclusion: "Encapsulation acts as a protective shield around your data. By combining private fields with public validation methods, you ensure that objects remain secure, consistent, and immune to unauthorized external modifications."
    },
    // ================= TOPIC: JAVA Inheritance =============
    {
      id: "java-inheritance",
      title: "Java Inheritance",
      intro: "Inheritance is an OOP mechanism where one class (child/subclass) acquires the fields and methods of another class (parent/superclass) using the 'extends' keyword. It establishes an 'IS-A' relationship and promotes code reusability.",
      sections: [
        {
          heading: "1. Superclass vs Subclass",
          content: [
            {
              type: "text",
              value: "The class being inherited from is called the Superclass (or Parent class). The class that inherits is called the Subclass (or Child class). A child class automatically inherits all public and protected attributes of the parent and can also add its own unique features."
            },
            {
              type: "code",
              value: `// Parent Class\nclass Vehicle {\n    String brand = "Ford";\n    void honk() { System.out.println("Tuut, tuut!"); }\n}\n\n// Child Class inherits from Vehicle\nclass Car extends Vehicle {\n    String model = "Mustang";\n}`
            }
          ]
        },
        {
          heading: "2. Real-Life Example: Biological & Vehicle Hierarchy",
          content: [
            {
              type: "text",
              value: "Consider a Vehicle hierarchy: A 'Smartphone' IS-A 'Device'. A 'Car' IS-A 'Vehicle'. Every Vehicle shares general properties like speed, wheels, and braking capabilities. When manufacturing a specialized 'Electric Car', developers don't need to reinvent general wheel or braking mechanics from scratch; the Electric Car class inherits those standard vehicle features and only defines what makes it unique (like battery charging)."
            }
          ]
        },
        {
          heading: "3. Types of Inheritance in Java",
          content: [
            {
              type: "table",
              headers: ["Type", "Description", "Supported in Java?"],
              rows: [
                ["Single Inheritance", "One subclass inherits directly from one superclass (A -> B).", "Yes"],
                ["Multilevel Inheritance", "A class inherits from a child class, creating a chain (A -> B -> C).", "Yes"],
                ["Hierarchical Inheritance", "Multiple distinct subclasses inherit from a single superclass (A -> B, A -> C).", "Yes"],
                ["Multiple Inheritance", "One subclass inheriting directly from two parent classes simultaneously.", "No (Not via classes, to avoid Diamond Problem ambiguity)"]
              ]
            }
          ]
        },
        {
          heading: "4. The 'super' Keyword",
          content: [
            {
              type: "text",
              value: "The 'super' keyword refers directly to the immediate parent class object. It is commonly used to call the parent class constructor or access parent methods overridden by the child."
            }
          ]
        }
      ],
      // ==========================================
      // PLAYGROUND (4 TABS WITH CODE ONLY)
      // ==========================================
      playground: [
        {
          title: "Single Inheritance",
          code: `class Animal {\n    void eat() { System.out.println("This animal eats food."); }\n}\n\nclass Dog extends Animal {\n    void bark() { System.out.println("The dog barks: Woof!"); }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Dog myDog = new Dog();\n        myDog.eat();  // Inherited method from Animal\n        myDog.bark(); // Own subclass method\n    }\n}`,
          output: "This animal eats food.\nThe dog barks: Woof!"
        },
        {
          title: "Method Overriding",
          code: `class Bank {\n    int getInterestRate() { return 5; }\n}\n\nclass HDFC extends Bank {\n    // Overriding the parent's method with custom logic\n    @Override\n    int getInterestRate() { return 7; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Bank genericBank = new Bank();\n        HDFC hdfcBank = new HDFC();\n        System.out.println("Base Bank Rate: " + genericBank.getInterestRate() + "%");\n        System.out.println("HDFC Bank Rate: " + hdfcBank.getInterestRate() + "%");\n    }\n}`,
          output: "Base Bank Rate: 5%\nHDFC Bank Rate: 7%"
        },
        {
          title: "Using 'super' Keyword",
          code: `class Person {\n    Person() { System.out.println("Person (Parent) Constructor Called"); }\n}\n\nclass Developer extends Person {\n    Developer() {\n        super(); // Explicitly invokes Person constructor\n        System.out.println("Developer (Child) Constructor Called");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Developer dev = new Developer();\n    }\n}`,
          output: "Person (Parent) Constructor Called\nDeveloper (Child) Constructor Called"
        },
        {
          title: "Multilevel Inheritance",
          code: `class Device {\n    void powerOn() { System.out.println("Device powered ON"); }\n}\n\nclass Computer extends Device {\n    void bootOS() { System.out.println("Booting Operating System..."); }\n}\n\nclass Laptop extends Computer {\n    void chargeBattery() { System.out.println("Charging internal battery @ 45W"); }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Laptop macBook = new Laptop();\n        macBook.powerOn();       // From Grandparent (Device)\n        macBook.bootOS();        // From Parent (Computer)\n        macBook.chargeBattery(); // From Self (Laptop)\n    }\n}`,
          output: "Device powered ON\nBooting Operating System...\nCharging internal battery @ 45W"
        }
      ],
      conclusion: "Inheritance allows developers to build structured hierarchies of classes. By writing core features in superclasses and specializing behavior in child classes, you eliminate code duplication and create extensible, highly organized software architectures."
    },
  // ================= TOPIC: JAVA Polymorphism ==============
    {
      id: "java-polymorphism",
      title: "Java Polymorphism",
      intro: "Polymorphism means 'many forms'. In Java, it allows objects of different classes related by inheritance to respond differently to the exact same method call. It enables one single interface or reference variable to represent multiple underlying implementations.",
      sections: [
        {
          heading: "1. What is Polymorphism?",
          content: [
            {
              type: "text",
              value: "Polymorphism occurs when a parent class reference is used to refer to a child class object (Upcasting). When an overridden method is called on that reference, Java automatically executes the specific child class version at runtime."
            },
            {
              type: "code",
              value: `Animal myPet = new Dog(); // Parent reference pointing to Child object\nmyPet.makeSound();        // Executes Dog's makeSound() at runtime`
            }
          ]
        },
        {
          heading: "2. Compile-Time Polymorphism (Static Binding)",
          content: [
            {
              type: "text",
              value: "Compile-Time Polymorphism (also called Static Binding or Early Binding) occurs when the Java compiler resolves which method to call during compilation. This is achieved through Method Overloading, where multiple methods in the same class share the exact same name but have different parameter lists (different count, types, or order of parameters)."
            },
            {
              type: "code",
              value: `class Calculator {\n    // Method 1: Adds two integers\n    int add(int a, int b) {\n        return a + b;\n    }\n\n    // Method 2: Adds three integers (Different parameter count)\n    int add(int a, int b, int c) {\n        return a + b + c;\n    }\n\n    // Method 3: Adds two decimals (Different parameter type)\n    double add(double a, double b) {\n        return a + b;\n    }\n}`
            }
          ]
        },
        {
          heading: "3. Runtime Polymorphism (Dynamic Binding)",
          content: [
            {
              type: "text",
              value: "Runtime Polymorphism (also called Dynamic Method Dispatch or Late Binding) occurs when the JVM determines which method implementation to execute while the program is actively running. This is achieved through Method Overriding, where a child class provides a custom implementation for a method already defined in its parent class, and the object is called via a parent class reference."
            },
            {
              type: "code",
              value: `// Superclass\nclass Vehicle {\n    void accelerate() {\n        System.out.println("Vehicle moving at standard speed.");\n    }\n}\n\n// Subclass 1\nclass SportsCar extends Vehicle {\n    @Override\n    void accelerate() {\n        System.out.println("SportsCar launches to 100 km/h in 3 seconds! 🏎️");\n    }\n}\n\n// Subclass 2\nclass Truck extends Vehicle {\n    @Override\n    void accelerate() {\n        System.out.println("Truck slowly gains momentum with heavy cargo. 🚛");\n    }\n}`
            }
          ]
        },
        {
          heading: "4. Compile-Time vs Runtime Comparison",
          content: [
            {
              type: "table",
              headers: ["Feature", "Compile-Time Polymorphism", "Runtime Polymorphism"],
              rows: [
                ["Mechanism", "Method Overloading", "Method Overriding"],
                ["Resolution Time", "Resolved by compiler at build time", "Resolved by JVM during application execution"],
                ["Inheritance Required?", "No (happens within a single class)", "Yes (requires superclass and subclass relationship)"],
                ["Performance", "Faster execution (method target is linked early)", "Slight runtime overhead due to virtual method lookup table"]
              ]
            }
          ]
        },
        {
          heading: "5. Real-Life Example: Universal Payment Gateway",
          content: [
            {
              type: "text",
              value: "Consider an e-commerce checkout system. The system defines a general 'PaymentMethod' interface or class with a method 'pay(amount)'. At checkout, the user can choose 'CreditCard', 'PayPal', or 'UPI'. The checkout controller doesn't need custom logic for every single payment app; it just calls 'selectedMethod.pay(amount)', and runtime polymorphism ensures the exact right payment gateway executes behind the scenes."
            }
          ]
        }
      ],
      // ==========================================
      // PLAYGROUND (4 TABS WITH CODE ONLY)
      // ==========================================
      playground: [
        {
          title: "Runtime Polymorphism (Overriding)",
          code: `class Shape {\n    void draw() { System.out.println("Drawing a generic shape"); }\n}\n\nclass Circle extends Shape {\n    @Override\n    void draw() { System.out.println("Drawing a Circle ⭕"); }\n}\n\nclass Triangle extends Shape {\n    @Override\n    void draw() { System.out.println("Drawing a Triangle 🔺"); }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Shape s1 = new Circle();   // Upcasting\n        Shape s2 = new Triangle(); // Upcasting\n        \n        s1.draw(); // Calls Circle version\n        s2.draw(); // Calls Triangle version\n    }\n}`,
          output: "Drawing a Circle ⭕\nDrawing a Triangle 🔺"
        },
        {
          title: "Compile-Time Overloading",
          code: `class NotificationService {\n    // Method 1: Send via email\n    void send(String email, String message) {\n        System.out.println("Email to " + email + ": " + message);\n    }\n\n    // Method 2: Send via SMS (different parameter types/count)\n    void send(long phoneNumber, String message) {\n        System.out.println("SMS to " + phoneNumber + ": " + message);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        NotificationService ns = new NotificationService();\n        ns.send("user@test.com", "Welcome!");\n        ns.send(9876543210L, "Your OTP is 4421");\n    }\n}`,
          output: "Email to user@test.com: Welcome!\nSMS to 9876543210: Your OTP is 4421"
        },
       
      ],
      conclusion: "Polymorphism decouples the caller from the exact concrete class being executed. By programming to a superclass reference or interface, your code becomes highly flexible, easily accommodating new child classes without needing modifications."
    },
    // ================= TOPIC: JAVA Abstraction =============
    {
      id: "java-abstraction",
      title: "Java Abstraction",
      intro: "Abstraction is the concept of hiding complex internal implementation details and exposing only the essential functionality to the user. In Java, abstraction is achieved using Abstract Classes (0% to 100% abstraction) and Interfaces (100% abstraction).",
      sections: [
        {
          heading: "1. Abstract Classes (`abstract` keyword)",
          content: [
            {
              type: "text",
              value: "An abstract class is a restricted class that cannot be instantiated directly with 'new'. It can contain both abstract methods (methods without a body that subclasses must implement) and regular concrete methods."
            },
            {
              type: "code",
              value: `abstract class Vehicle {\n    abstract void startEngine(); // Abstract method (no body)\n    void fuelUp() { System.out.println("Adding fuel..."); } // Concrete method\n}`
            }
          ]
        },
        {
          heading: "2. Interfaces (`interface` keyword)",
          content: [
            {
              type: "text",
              value: "An interface is a completely abstract blueprint used to group related methods with empty bodies. A class implements an interface using the 'implements' keyword. Interfaces are Java's primary way to achieve multiple inheritance."
            },
            {
              type: "code",
              value: `interface Flyable {\n    void fly(); // Public and abstract by default\n}\n\nclass Airplane implements Flyable {\n    public void fly() { System.out.println("Flying at 30,000 feet"); }\n}`
            }
          ]
        },
        {
          heading: "3. Abstract Class vs Interface",
          content: [
            {
              type: "table",
              headers: ["Feature", "Abstract Class", "Interface"],
              rows: [
                ["Keyword", "uses 'abstract class' and inherited via 'extends'", "uses 'interface' and implemented via 'implements'"],
                ["Multiple Inheritance", "Can only extend ONE class", "Can implement MULTIPLE interfaces simultaneously"],
                ["Constructors", "Can have instance constructors to initialize state", "Cannot have constructors"],
                ["Fields / Variables", "Can have instance, static, non-final, or final fields", "All fields are implicitly public, static, and final (constants)"],
                ["Method Implementation", "Can mix abstract methods and complete concrete methods", "Methods are abstract by default (can use 'default' or 'static' methods since Java 8)"]
              ]
            }
          ]
        },
        {
          heading: "4. Real-Life Example: Car Interior Mechanics vs Dashboard",
          content: [
            {
              type: "text",
              value: "When you drive a car, you interact with the abstracted dashboard interface: steering wheel, accelerator pedal, and brake. You don't need to know the intricate internal mechanics of fuel injection, transmission gears, or hydraulic pressure (implementation details). The interface gives you simple controls while hiding the complex machinery underneath."
            }
          ]
        }
      ],
      // ==========================================
      // PLAYGROUND (4 TABS WITH CODE ONLY)
      // ==========================================
      playground: [
        {
          title: "Abstract Class & Methods",
          code: `abstract class Appliance {\n    String brand = "Generic";\n    \n    // Abstract method must be implemented by child\n    abstract void turnOn();\n    \n    // Concrete method shared by all children\n    void plugIn() {\n        System.out.println("Connected to 220V power.");\n    }\n}\n\nclass WashingMachine extends Appliance {\n    @Override\n    void turnOn() {\n        System.out.println("Washing cycle started 🧺");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        // Appliance a = new Appliance(); // ERROR: Cannot instantiate abstract class\n        WashingMachine wm = new WashingMachine();\n        wm.plugIn();\n        wm.turnOn();\n    }\n}`,
          output: "Connected to 220V power.\nWashing cycle started 🧺"
        },
        {
          title: "Basic Interface",
          code: `interface PaymentGateway {\n    void processPayment(double amount);\n}\n\nclass StripeGateway implements PaymentGateway {\n    public void processPayment(double amount) {\n        System.out.println("Processing $" + amount + " securely via Stripe.");\n    }\n}\n\nclass RazorpayGateway implements PaymentGateway {\n    public void processPayment(double amount) {\n        System.out.println("Processing $" + amount + " via Razorpay UPI.");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        PaymentGateway pg = new StripeGateway();\n        pg.processPayment(99.50);\n    }\n}`,
          output: "Processing $99.5 via Stripe."
        },
        {
          title: "Multiple Inheritance via Interfaces",
          code: `interface Printable {\n    void print();\n}\n\ninterface Shareable {\n    void shareEmail();\n}\n\n// Class implementing two interfaces simultaneously\nclass Document implements Printable, Shareable {\n    public void print() {\n        System.out.println("Printing document on Laser Printer...");\n    }\n    public void shareEmail() {\n        System.out.println("Sending PDF attachment via Email...");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Document doc = new Document();\n        doc.print();\n        doc.shareEmail();\n    }\n}`,
          output: "Printing document on Laser Printer...\nSending PDF attachment via Email..."
        },
        {
          title: "Java 8+ Default Methods in Interfaces",
          code: `interface SmartDevice {\n    void turnOn();\n    \n    // 'default' allows interfaces to have concrete method bodies without breaking existing implementations\n    default void runDiagnostics() {\n        System.out.println("[System] Diagnostics OK. Firmware v2.0");\n    }\n}\n\nclass SmartTV implements SmartDevice {\n    public void turnOn() { System.out.println("Smart TV Screen ON 📺"); }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        SmartTV tv = new SmartTV();\n        tv.runDiagnostics(); // Calling default interface method\n        tv.turnOn();\n    }\n}`,
          output: "[System] Diagnostics OK. Firmware v2.0\nSmart TV Screen ON 📺"
        }
      ],
      conclusion: "Abstraction enables you to manage complexity by focusing on what an object does rather than how it does it. Combining abstract classes for shared core functionality and interfaces for flexible API design creates modular, maintainable enterprise software."
    },
     // ================= TOPIC: JAVA Interfaces =============
    {
  "id": "java-interfaces",
  "title": "Java Interfaces",
  "subjectCode": "java",
  "intro": "Imagine you are building a smart home system where every device (lights, fans, locks) needs to be turned on and off. Instead of writing completely different logic for each, you create a standard contract that every device must follow. This is exactly what a Java Interface is! An interface in Java is a blueprint of a class. It contains abstract methods (methods without a body) that define 'what' an object can do, leaving the 'how' it does it to the specific class that implements the interface.",
  "sections": [
    {
      "heading": "1. Declaring and Implementing an Interface",
      "content": [
        {
          "type": "text",
          "value": "To create an interface, you use the <code>interface</code> keyword instead of <code>class</code>. By default, all methods inside an interface are <code>public</code> and <code>abstract</code> (meaning they have no body). To use an interface, a class must 'sign the contract' using the <code>implements</code> keyword and provide the actual code for all the interface's methods."
        },
        {
          "type": "code",
          "value": "interface Animal {\n  // Interface methods (no body)\n  public void animalSound();\n  public void sleep();\n}\n\n// Pig \"implements\" the Animal interface\nclass Pig implements Animal {\n  public void animalSound() {\n    // The body of animalSound() is provided here\n    System.out.println(\"The pig says: wee wee\");\n  }\n  public void sleep() {\n    // The body of sleep() is provided here\n    System.out.println(\"Zzz\");\n  }\n}"
        }
      ]
    },
    {
      "heading": "2. Why Use Interfaces?",
      "content": [
        {
          "type": "text",
          "value": "Interfaces are a fundamental part of object-oriented programming in Java. They are primarily used for three reasons:"
        },
        {
          "type": "list",
          "items": [
            "1. <strong>To achieve total abstraction:</strong> You can hide the complex implementation details and only show the essential actions an object can perform.",
            "2. <strong>To support multiple inheritance:</strong> Java classes cannot inherit from more than one superclass (no multiple inheritance). However, a single class CAN implement multiple interfaces!",
            "3. <strong>To create loose coupling:</strong> Interfaces allow you to build flexible and modular systems by relying on contracts rather than concrete implementations."
          ]
        }
      ]
    },
    {
      "heading": "3. Multiple Interfaces",
      "content": [
        {
          "type": "text",
          "value": "To implement multiple interfaces, separate them with a comma. This is Java's safe way of handling multiple inheritance without the dreaded 'Diamond Problem'."
        },
        {
          "type": "code",
          "value": "interface FirstInterface {\n  public void myMethod();\n}\n\ninterface SecondInterface {\n  public void myOtherMethod();\n}\n\nclass DemoClass implements FirstInterface, SecondInterface {\n  public void myMethod() {\n    System.out.println(\"Text from first interface\");\n  }\n  public void myOtherMethod() {\n    System.out.println(\"Text from second interface\");\n  }\n}"
        }
      ]
    },
    {
      "heading": "4. Modern Java Interfaces (Default & Static Methods)",
      "content": [
        {
          "type": "text",
          "value": "Historically, interfaces could only contain abstract methods. However, starting from Java 8, interfaces were upgraded. They can now contain <strong>default</strong> and <strong>static</strong> methods that actually have a body. This allows developers to add new methods to existing interfaces without breaking the older classes that already implement them."
        },
        {
          "type": "code",
          "value": "interface Vehicle {\n  // Abstract method\n  void drive();\n\n  // Default method (has a body)\n  default void startEngine() {\n    System.out.println(\"Engine is starting... vroom!\");\n  }\n}"
        }
      ]
    }
  ],
  "playground": [
    {
      "title": "Basic Interface",
      "code": "interface Shape {\n    void draw();\n}\n\nclass Circle implements Shape {\n    public void draw() {\n        System.out.println(\"Drawing a Circle\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Shape myShape = new Circle();\n        myShape.draw();\n    }\n}",
      "output": "Drawing a Circle"
    },
    {
      "title": "Multiple Interfaces",
      "code": "interface Flyable {\n    void fly();\n}\n\ninterface Swimmable {\n    void swim();\n}\n\nclass Duck implements Flyable, Swimmable {\n    public void fly() {\n        System.out.println(\"Duck is flying in the sky.\");\n    }\n    public void swim() {\n        System.out.println(\"Duck is swimming in the pond.\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Duck daffy = new Duck();\n        daffy.fly();\n        daffy.swim();\n    }\n}",
      "output": "Duck is flying in the sky.\nDuck is swimming in the pond."
    },
    {
      "title": "Default Methods",
      "code": "interface Camera {\n    void takePhoto();\n    \n    default void recordVideo() {\n        System.out.println(\"Recording video in 1080p...\");\n    }\n}\n\nclass Smartphone implements Camera {\n    public void takePhoto() {\n        System.out.println(\"Snap! Photo saved.\");\n    }\n    // We don't have to implement recordVideo() because it has a default body!\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Smartphone myPhone = new Smartphone();\n        myPhone.takePhoto();\n        myPhone.recordVideo();\n    }\n}",
      "output": "Snap! Photo saved.\nRecording video in 1080p..."
    }
  ],
  "conclusion": "Interfaces form the backbone of robust, scalable Java applications. By defining clear contracts (the 'what') while hiding the logic (the 'how'), they help you build systems that are easy to maintain and expand. Whether you are using them to bypass Java's single-inheritance rule or to design clean APIs, mastering interfaces is a massive leap forward in your object-oriented programming journey."
    },
    // ================= TOPIC: JAVA enums =============
    {
  "id": "java-enums",
  "title": "Java Enums",
  "subjectCode": "java",
  "intro": "Imagine you are building a pizza ordering app. The pizza sizes can only be SMALL, MEDIUM, LARGE, or EXTRA_LARGE. If you use standard String variables to store the size, a typo like \"SML\" or \"HUGE\" could slip in and crash your system. This is where Java Enums shine! An `enum` (short for 'enumerations') is a special data type that represents a group of constants (unchangeable, predefined variables). They make your code safer by ensuring a variable can only hold one of a few predefined values.",
  "sections": [
    {
      "heading": "1. Creating and Using an Enum",
      "content": [
        {
          "type": "text",
          "value": "To create an enum, use the <code>enum</code> keyword (instead of class or interface), and separate the constants with a comma. By convention, enum constants are written in <strong>ALL_CAPS</strong>."
        },
        {
          "type": "code",
          "value": "enum Level {\n  LOW,\n  MEDIUM,\n  HIGH\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    // Accessing an enum constant\n    Level myVar = Level.MEDIUM;\n    System.out.println(myVar);\n  }\n}"
        }
      ]
    },
    {
      "heading": "2. Enums in Switch Statements",
      "content": [
        {
          "type": "text",
          "value": "Enums are incredibly useful inside <code>switch</code> statements to check for corresponding values. Because the compiler knows all the possible values of an enum, it works seamlessly with switch cases."
        },
        {
          "type": "code",
          "value": "enum Day {\n  MONDAY, FRIDAY, SUNDAY\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Day today = Day.FRIDAY;\n\n    switch(today) {\n      case MONDAY:\n        System.out.println(\"Back to work!\");\n        break;\n      case FRIDAY:\n        System.out.println(\"Weekend is almost here!\");\n        break;\n      case SUNDAY:\n        System.out.println(\"Rest day.\");\n        break;\n    }\n  }\n}"
        }
      ]
    },
    {
      "heading": "3. Looping Through an Enum",
      "content": [
        {
          "type": "text",
          "value": "Java automatically adds a few handy methods to every enum you create. One of the most useful is the <code>values()</code> method, which returns an array of all enum constants. This makes it very easy to loop through the options."
        },
        {
          "type": "code",
          "value": "for (Level myVar : Level.values()) {\n  System.out.println(myVar);\n}"
        }
      ]
    },
    {
      "heading": "4. Advanced Enums (Constructors and Attributes)",
      "content": [
        {
          "type": "text",
          "value": "Behind the scenes, an enum is actually a special type of class. This means it can have attributes, methods, and even constructors! If you want your enum constants to hold specific data (like a numeric value or a description), you can define a constructor."
        },
        {
          "type": "code",
          "value": "enum Size {\n  SMALL(10),\n  MEDIUM(14),\n  LARGE(18);\n\n  // Attribute\n  private final int diameter;\n\n  // Constructor (must be private or package-private in enums)\n  Size(int diameter) {\n    this.diameter = diameter;\n  }\n\n  // Method to get the value\n  public int getDiameter() {\n    return diameter;\n  }\n}"
        }
      ]
    }
  ],
  "playground": [
    {
      "title": "Basic Enum Definition",
      "code": "enum Status {\n    PENDING,\n    SHIPPED,\n    DELIVERED\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Status orderStatus = Status.SHIPPED;\n        System.out.println(\"Current order status is: \" + orderStatus);\n    }\n}",
      "output": "Current order status is: SHIPPED"
    },
    {
      "title": "Iterating over Enums",
      "code": "enum Difficulty {\n    EASY,\n    NORMAL,\n    HARD,\n    EXPERT\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Available Game Difficulties:\");\n        for (Difficulty level : Difficulty.values()) {\n            System.out.println(\"- \" + level);\n        }\n    }\n}",
      "output": "Available Game Difficulties:\n- EASY\n- NORMAL\n- HARD\n- EXPERT"
    },
    {
      "title": "Enums with Custom Values",
      "code": "enum TrafficLight {\n    RED(\"Stop\"),\n    YELLOW(\"Slow Down\"),\n    GREEN(\"Go\");\n\n    private final String action;\n\n    TrafficLight(String action) {\n        this.action = action;\n    }\n\n    public String getAction() {\n        return action;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        TrafficLight currentLight = TrafficLight.RED;\n        System.out.println(\"The light is \" + currentLight + \", so you must: \" + currentLight.getAction());\n    }\n}",
      "output": "The light is RED, so you must: Stop"
    }
  ],
  "conclusion": "Enums are a simple yet incredibly powerful feature in Java. By replacing arbitrary strings and 'magic numbers' with fixed, named constants, enums make your code type-safe, self-documenting, and much less prone to bugs. Whenever you have a variable that should only hold a specific set of values (like months of the year, user roles, or payment methods), reach for a Java Enum!"
    },
    // ================= TOPIC: JAVA packages =============
   {
  "id": "java-packages",
  "title": "Java Packages",
  "subjectCode": "java",
  "intro": "Imagine keeping every single file on your computer in one giant folder. It would be impossible to find anything, and you couldn't have two files with the same name! In Java, a package is exactly like a folder or directory. It is used to group related classes, interfaces, and sub-packages together. Packages keep your massive projects organized, prevent naming conflicts (two classes can be named 'User' if they are in different packages), and help enforce access control.",
  "sections": [
    {
      "heading": "1. Types of Packages",
      "content": [
        {
          "type": "text",
          "value": "Java packages are divided into two main categories. First are Built-in Packages (The Java API): These come pre-installed with the Java Development Kit (JDK) and contain thousands of pre-written classes ready for you to use. Second are User-Defined Packages: These are packages that you create yourself to organize your own code."
        }
      ]
    },
    {
      "heading": "2. Common Built-in Packages",
      "content": [
        {
          "type": "text",
          "value": "The Java API is vast. Here are some of the most frequently used built-in packages:"
        },
        {
          "type": "table",
          "headers": ["Package Name", "Description", "Common Classes"],
          "rows": [
            ["java.lang", "Core classes. This is the ONLY package imported automatically in every Java program.", "String, Math, System, Thread"],
            ["java.util", "Utility classes, including data structures, random numbers, and the Scanner.", "Scanner, ArrayList, Random, HashMap"],
            ["java.io", "Classes for reading and writing data (Input/Output).", "File, InputStream, FileWriter"],
            ["java.net", "Classes for networking applications.", "URL, Socket, HttpURLConnection"],
            ["java.time", "The modern Date and Time API introduced in Java 8.", "LocalDate, LocalTime, Duration"]
          ]
        }
      ]
    },
    {
      "heading": "3. The 'import' Keyword",
      "content": [
        {
          "type": "text",
          "value": "To use a class from a built-in or external package, you must bring it into your file using the 'import' keyword. You can either import a single specific class, or import an entire package using the wildcard (*) symbol."
        },
        {
          "type": "code",
          "value": "// 1. Importing a single specific class (Recommended)\nimport java.util.Scanner;\n\n// 2. Importing ALL classes in the java.util package\nimport java.util.*;\n\npublic class Main {\n  public static void main(String[] args) {\n    Scanner myObj = new Scanner(System.in);\n    System.out.println(\"Scanner class is now available!\");\n  }\n}"
        }
      ]
    },
    {
      "heading": "4. Creating User-Defined Packages",
      "content": [
        {
          "type": "text",
          "value": "To create your own package, you must use the 'package' keyword. Crucially, the package declaration must be the very first line of code in your Java file (before any imports or class declarations). By convention, package names are written in all lowercase to avoid conflict with class names. Companies often use their reversed domain name to ensure global uniqueness (e.g., 'com.google.maps')."
        },
        {
          "type": "code",
          "value": "package com.mycompany.ecommerce;\n\nimport java.util.ArrayList;\n\npublic class ShoppingCart {\n  // Class implementation goes here\n}"
        }
      ]
    }
  ],
  "playground": [
    {
      "title": "Specific Import",
      "code": "import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        // We imported ArrayList, so we can use it directly\n        ArrayList<String> list = new ArrayList<>();\n        list.add(\"Java\");\n        list.add(\"Packages\");\n        \n        System.out.println(\"My list contains: \" + list);\n    }\n}",
      "output": "My list contains: [Java, Packages]"
    },
    {
      "title": "Wildcard Import",
      "code": "import java.util.*; // Imports everything in java.util\n\npublic class Main {\n    public static void main(String[] args) {\n        // We can use Random, Scanner, ArrayList, etc., without specific imports\n        Random rand = new Random(42); // Seeded for predictable output\n        int randomNumber = rand.nextInt(100);\n        \n        System.out.println(\"Random number generated using java.util.* : \" + randomNumber);\n    }\n}",
      "output": "Random number generated using java.util.* : 30"
    },
    {
      "title": "Fully Qualified Name",
      "code": "public class Main {\n    public static void main(String[] args) {\n        // If you don't want to use 'import', you can write the full package path\n        // This is called the 'fully qualified name'\n        java.time.LocalDate today = java.time.LocalDate.now();\n        \n        System.out.println(\"Today's date (using fully qualified name): \" + today);\n    }\n}",
      "output": "Today's date (using fully qualified name): 2026-09-01"
    },
    {
      "title": "The Default Package",
      "code": "// Notice there are no import statements here!\n\npublic class Main {\n    public static void main(String[] args) {\n        // Classes like String, Math, and System belong to 'java.lang'\n        // Java automatically imports 'java.lang.*' for you in every file.\n        \n        String language = \"Java\";\n        double power = Math.pow(2, 3);\n        \n        System.out.println(\"Language: \" + language);\n        System.out.println(\"2 to the power of 3 is: \" + power);\n    }\n}",
      "output": "Language: Java\n2 to the power of 3 is: 8.0"
    }
  ],
  "conclusion": "Packages are the architectural foundation of any serious Java application. By acting as directories, they keep your code clean, modular, and easy to navigate. Understanding how to utilize the built-in Java API packages will save you thousands of hours of rewriting code, while mastering user-defined packages will ensure your own codebases remain scalable and professional."
  },
  // ================= TOPIC: JAVA Exception =============
   {
  "id": "java-exception-handling",
  "title": "Java Exception Handling",
  "subjectCode": "java",
  "intro": "Imagine you are driving a car and suddenly a tire bursts. If you don't know how to handle it, the car crashes. But if you have a spare tire and know how to change it, you can safely continue your journey. In Java, a 'burst tire' is called an Exception—an unexpected event that stops your program. Exception Handling is the mechanism we use to manage these runtime errors so that the normal flow of the application can be maintained without crashing.",
  "sections": [
    {
      "heading": "1. The 'try' and 'catch' Blocks",
      "content": [
        {
          "type": "text",
          "value": "The most basic way to handle exceptions is using a try-catch block. The 'try' block contains the code that might generate an error. If an error occurs, Java instantly jumps to the 'catch' block, which contains the code to handle the problem."
        },
        {
          "type": "code",
          "value": "public class Main {\n  public static void main(String[] args) {\n    try {\n      int result = 10 / 0; // This will cause an error (division by zero)\n      System.out.println(\"This line will not print\");\n    } catch (Exception e) {\n      System.out.println(\"Something went wrong: \" + e.getMessage());\n    }\n  }\n}"
        }
      ]
    },
    {
      "heading": "2. The 'finally' Block",
      "content": [
        {
          "type": "text",
          "value": "Sometimes you have code that MUST run, regardless of whether an error happened or not (like closing a database connection or a file). For this, we use the 'finally' block. It is placed after the catch block and will always execute."
        },
        {
          "type": "code",
          "value": "try {\n  int[] myNumbers = {1, 2, 3};\n  System.out.println(myNumbers[10]);\n} catch (Exception e) {\n  System.out.println(\"Error: Index is out of bounds.\");\n} finally {\n  System.out.println(\"The 'try catch' is finished.\");\n}"
        }
      ]
    },
    {
      "heading": "3. Types of Exceptions",
      "content": [
        {
          "type": "text",
          "value": "Exceptions in Java fall into two main categories: Checked and Unchecked."
        },
        {
          "type": "list",
          "items": [
            "1. Checked Exceptions: Checked at compile-time. Java forces you to handle these (like reading a file that might not exist) before you can even run the program.",
            "2. Unchecked Exceptions: Checked at runtime. These are usually programming logic errors (like dividing by zero or accessing a bad array index)."
          ]
        }
      ]
    },
    {
      "heading": "4. The 'throw' Keyword",
      "content": [
        {
          "type": "text",
          "value": "The 'throw' keyword allows you to manually trigger a custom exception. This is very useful when you are validating user input and want to block invalid data."
        },
        {
          "type": "code",
          "value": "public class Main {\n  static void checkAge(int age) {\n    if (age < 18) {\n      throw new ArithmeticException(\"Access denied - You must be at least 18 years old.\");\n    } else {\n      System.out.println(\"Access granted - You are old enough!\");\n    }\n  }\n\n  public static void main(String[] args) {\n    checkAge(15);\n  }\n}"
        }
      ]
    }
  ],
  "playground": [
    {
      "title": "Basic Try-Catch",
      "code": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Program started...\");\n        \n        try {\n            int divideByZero = 5 / 0;\n            System.out.println(\"Rest of try block\");\n        } catch (ArithmeticException e) {\n            System.out.println(\"ArithmeticException caught: Cannot divide by zero!\");\n        }\n        \n        System.out.println(\"Program finished successfully!\");\n    }\n}",
      "output": "Program started...\nArithmeticException caught: Cannot divide by zero!\nProgram finished successfully!"
    },
    {
      "title": "Using Finally",
      "code": "public class Main {\n    public static void main(String[] args) {\n        try {\n            String text = null;\n            System.out.println(\"Text length is: \" + text.length());\n        } catch (NullPointerException e) {\n            System.out.println(\"Caught a Null Pointer Exception!\");\n        } finally {\n            System.out.println(\"This finally block always executes, cleaning things up.\");\n        }\n    }\n}",
      "output": "Caught a Null Pointer Exception!\nThis finally block always executes, cleaning things up."
    },
    {
      "title": "Custom Throw",
      "code": "public class Main {\n    public static void checkPasswordLength(String password) {\n        if (password.length() < 6) {\n            throw new IllegalArgumentException(\"Password is too short!\");\n        }\n        System.out.println(\"Password accepted.\");\n    }\n\n    public static void main(String[] args) {\n        try {\n            checkPasswordLength(\"12345\");\n        } catch (IllegalArgumentException e) {\n            System.out.println(\"Validation Error: \" + e.getMessage());\n        }\n    }\n}",
      "output": "Validation Error: Password is too short!"
    }
  ],
  "conclusion": "Exception handling is what separates a fragile application from a robust, professional one. By correctly utilizing try, catch, finally, and throw, you ensure that your program can gracefully recover from unexpected errors, provide helpful feedback to users, and avoid sudden, catastrophic crashes."
   },
   // ================= TOPIC: JAVA File Handling =============
  {
  "id": "java-file-handling",
  "title": "Java File Handling",
  "subjectCode": "java",
  "intro": "Every time you turn off your computer, all the data stored in your Java variables and arrays is wiped out because RAM is volatile. If you want to save data permanently—like a high score in a game, or user details for a login system—you need to write it to a file on your hard drive. Java File Handling allows you to create, read, update, and delete files primarily using the classes found in the 'java.io' package.",
  "sections": [
    {
      "heading": "1. Creating a File",
      "content": [
        {
          "type": "text",
          "value": "To create a file, we use the 'java.io.File' class and its 'createNewFile()' method. Because interacting with the file system can fail (e.g., the hard drive is full, or you lack permission), Java forces you to place this code inside a 'try-catch' block to handle the 'IOException'."
        },
        {
          "type": "code",
          "value": "import java.io.File; \nimport java.io.IOException;\n\npublic class Main {\n  public static void main(String[] args) {\n    try {\n      File myObj = new File(\"data.txt\");\n      if (myObj.createNewFile()) {\n        System.out.println(\"File created: \" + myObj.getName());\n      } else {\n        System.out.println(\"File already exists.\");\n      }\n    } catch (IOException e) {\n      System.out.println(\"An error occurred.\");\n      e.printStackTrace();\n    }\n  }\n}"
        }
      ]
    },
    {
      "heading": "2. Writing to a File",
      "content": [
        {
          "type": "text",
          "value": "To write text into a file, Java provides the 'FileWriter' class. It provides a simple 'write()' method. Crucial step: You must always call the 'close()' method when you are finished writing. If you don't close the writer, the data might remain in a temporary memory buffer and never actually be saved to the file!"
        },
        {
          "type": "code",
          "value": "import java.io.FileWriter;\nimport java.io.IOException;\n\npublic class Main {\n  public static void main(String[] args) {\n    try {\n      FileWriter myWriter = new FileWriter(\"data.txt\");\n      myWriter.write(\"Java File Handling is surprisingly easy!\");\n      myWriter.close(); // Don't forget this!\n      System.out.println(\"Successfully wrote to the file.\");\n    } catch (IOException e) {\n      System.out.println(\"An error occurred.\");\n    }\n  }\n}"
        }
      ]
    },
    {
      "heading": "3. Reading from a File",
      "content": [
        {
          "type": "text",
          "value": "To read the contents of a text file, we can use the familiar 'Scanner' class. However, instead of passing 'System.in' (the keyboard) to the Scanner, we pass our 'File' object. We then use a 'while' loop combined with the 'hasNextLine()' method to read the file line by line until we reach the end."
        },
        {
          "type": "code",
          "value": "import java.io.File;\nimport java.io.FileNotFoundException;\nimport java.util.Scanner;\n\npublic class Main {\n  public static void main(String[] args) {\n    try {\n      File myObj = new File(\"data.txt\");\n      Scanner myReader = new Scanner(myObj);\n      while (myReader.hasNextLine()) {\n        String data = myReader.nextLine();\n        System.out.println(data);\n      }\n      myReader.close();\n    } catch (FileNotFoundException e) {\n      System.out.println(\"An error occurred.\");\n    }\n  }\n}"
        }
      ]
    },
    {
      "heading": "4. Common File Class Methods",
      "content": [
        {
          "type": "text",
          "value": "The 'File' class comes with many useful methods to check the properties of a file."
        },
        {
          "type": "table",
          "headers": ["Method", "Description", "Return Type"],
          "rows": [
            ["canRead()", "Tests whether the file is readable.", "Boolean"],
            ["canWrite()", "Tests whether the file is writable.", "Boolean"],
            ["exists()", "Tests whether the file actually exists.", "Boolean"],
            ["getName()", "Returns the name of the file.", "String"],
            ["getAbsolutePath()", "Returns the full path of the file.", "String"],
            ["length()", "Returns the size of the file in bytes.", "Long"],
            ["delete()", "Deletes a file or an empty directory.", "Boolean"]
          ]
        }
      ]
    }
  ],
  "playground": [
    {
      "title": "Write to File",
      "code": "import java.io.FileWriter;\nimport java.io.IOException;\n\npublic class Main {\n    public static void main(String[] args) {\n        try {\n            // Creating a writer. If \"log.txt\" doesn't exist, it creates it.\n            FileWriter writer = new FileWriter(\"log.txt\");\n            writer.write(\"User Logged In at 10:00 AM\\n\");\n            writer.write(\"Action: Clicked 'Save' button\");\n            \n            writer.close();\n            System.out.println(\"Log entries saved successfully!\");\n        } catch (IOException e) {\n            System.out.println(\"An error occurred while writing.\");\n        }\n    }\n}",
      "output": "Log entries saved successfully!"
    },
    {
      "title": "Read a File",
      "code": "import java.io.File;\nimport java.io.FileNotFoundException;\nimport java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        try {\n            // Assuming \"log.txt\" was created by the previous step\n            File fileToRead = new File(\"log.txt\");\n            Scanner scanner = new Scanner(fileToRead);\n            \n            System.out.println(\"--- Reading File Contents ---\");\n            while (scanner.hasNextLine()) {\n                System.out.println(scanner.nextLine());\n            }\n            scanner.close();\n        } catch (FileNotFoundException e) {\n            System.out.println(\"Could not find the specified file.\");\n        }\n    }\n}",
      "output": "--- Reading File Contents ---\nUser Logged In at 10:00 AM\nAction: Clicked 'Save' button"
    },
    {
      "title": "File Information",
      "code": "import java.io.File;\n\npublic class Main {\n    public static void main(String[] args) {\n        File myFile = new File(\"log.txt\");\n        \n        if (myFile.exists()) {\n            System.out.println(\"File Name: \" + myFile.getName());\n            System.out.println(\"File Size: \" + myFile.length() + \" bytes\");\n            System.out.println(\"Is Writable? \" + myFile.canWrite());\n            \n            // Let's clean up and delete it\n            if (myFile.delete()) {\n                System.out.println(\"\\nSuccess: File was deleted.\");\n            }\n        } else {\n            System.out.println(\"The file does not exist.\");\n        }\n    }\n}",
      "output": "File Name: log.txt\nFile Size: 56 bytes\nIs Writable? true\n\nSuccess: File was deleted."
    }
  ],
  "conclusion": "File handling is a gateway to creating realistic, persistent applications. By combining the 'File', 'FileWriter', and 'Scanner' classes, you can easily store user preferences, save game states, or parse large datasets. For even faster and more advanced file operations, modern Java developers often use the 'java.nio.file.Files' class, but mastering the basic 'java.io' package is an essential first step!"
  },
  // ================= TOPIC: JAVA  Collections =============
  {
  "id": "java-collections",
  "title": "Java Collections",
  "subjectCode": "java",
  "intro": "Imagine trying to store a list of users for a website using a standard Java Array. If you create an array of size 100, what happens when the 101st user signs up? The program crashes! Standard arrays have a fixed size. To solve this, Java provides the Collections Framework—a set of built-in classes and interfaces that act as dynamic data structures. Collections can grow and shrink automatically as you add or remove elements, making them essential for real-world programming.",
  "sections": [
    {
      "heading": "1. The Core Interfaces",
      "content": [
        {
          "type": "text",
          "value": "The Java Collections Framework is built on a few core interfaces that dictate how different data structures behave. The most commonly used are:"
        },
        {
          "type": "list",
          "items": [
            "1. List: An ordered collection that allows duplicate values. Best when you need an array that can grow (e.g., 'ArrayList').",
            "2. Set: A collection that refuses duplicate elements. Perfect for maintaining unique items (e.g., 'HashSet').",
            "3. Map: A collection that stores data in key-value pairs, similar to a real-world dictionary (e.g., 'HashMap')."
          ]
        }
      ]
    },
    {
      "heading": "2. Working with ArrayList",
      "content": [
        {
          "type": "text",
          "value": "An 'ArrayList' is a resizable array. You can add, remove, and modify elements without worrying about its initial size. Note that collections can only store Objects (like 'Integer' or 'String'), not primitive types (like 'int' or 'double')."
        },
        {
          "type": "code",
          "value": "import java.util.ArrayList;\n\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<String> cars = new ArrayList<>();\n    cars.add(\"Volvo\");\n    cars.add(\"BMW\");\n    cars.add(\"Ford\");\n    \n    System.out.println(cars.get(0)); // Output: Volvo\n  }\n}"
        }
      ]
    },
    {
      "heading": "3. Ensuring Uniqueness with HashSet",
      "content": [
        {
          "type": "text",
          "value": "A 'HashSet' is a collection where every item must be unique. If you try to add an item that already exists, the HashSet will simply ignore it. It does not guarantee that the order will remain constant over time, but it is incredibly fast for searching."
        },
        {
          "type": "code",
          "value": "import java.util.HashSet;\n\npublic class Main {\n  public static void main(String[] args) {\n    HashSet<String> cars = new HashSet<>();\n    cars.add(\"Volvo\");\n    cars.add(\"BMW\");\n    cars.add(\"Volvo\"); // This duplicate is ignored\n    \n    System.out.println(cars.size()); // Output: 2\n  }\n}"
        }
      ]
    },
    {
      "heading": "4. Key-Value Pairs with HashMap",
      "content": [
        {
          "type": "text",
          "value": "A 'HashMap' maps keys to values. Instead of accessing elements by a numeric index (like an array), you access them using their key. This is perfect for fast lookups, like finding a user's email by their username."
        },
        {
          "type": "code",
          "value": "import java.util.HashMap;\n\npublic class Main {\n  public static void main(String[] args) {\n    HashMap<String, String> capitalCities = new HashMap<>();\n    capitalCities.put(\"England\", \"London\");\n    capitalCities.put(\"Germany\", \"Berlin\");\n    \n    System.out.println(capitalCities.get(\"England\")); // Output: London\n  }\n}"
        }
      ]
    }
  ],
  "playground": [
    {
      "title": "ArrayList Basics",
      "code": "import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> animals = new ArrayList<>();\n        animals.add(\"Dog\");\n        animals.add(\"Cat\");\n        animals.add(\"Rabbit\");\n        \n        System.out.println(\"Original list: \" + animals);\n        \n        animals.set(1, \"Tiger\"); // Replace Cat with Tiger\n        animals.remove(2); // Remove Rabbit\n        \n        System.out.println(\"Updated list: \" + animals);\n        System.out.println(\"Total animals: \" + animals.size());\n    }\n}",
      "output": "Original list: [Dog, Cat, Rabbit]\nUpdated list: [Dog, Tiger]\nTotal animals: 2"
    },
    {
      "title": "HashSet (No Duplicates)",
      "code": "import java.util.HashSet;\n\npublic class Main {\n    public static void main(String[] args) {\n        HashSet<Integer> numbers = new HashSet<>();\n        numbers.add(4);\n        numbers.add(7);\n        numbers.add(4); // Duplicate\n        numbers.add(8);\n        numbers.add(7); // Duplicate\n        \n        System.out.println(\"Unique numbers: \" + numbers);\n        \n        if (numbers.contains(7)) {\n            System.out.println(\"The set contains the number 7.\");\n        }\n    }\n}",
      "output": "Unique numbers: [4, 7, 8]\nThe set contains the number 7."
    },
    {
      "title": "HashMap (Key-Value)",
      "code": "import java.util.HashMap;\n\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, Integer> people = new HashMap<>();\n        \n        // Add keys and values (Name, Age)\n        people.put(\"John\", 32);\n        people.put(\"Steve\", 30);\n        people.put(\"Angie\", 33);\n        \n        System.out.println(\"Steve's age: \" + people.get(\"Steve\"));\n        \n        System.out.println(\"\\nAll people in the map:\");\n        // Iterate through the keys\n        for (String i : people.keySet()) {\n            System.out.println(\"Name: \" + i + \" Age: \" + people.get(i));\n        }\n    }\n}",
      "output": "Steve's age: 30\n\nAll people in the map:\nName: John Age: 32\nName: Steve Age: 30\nName: Angie Age: 33"
    }
  ],
  "conclusion": "The Collections framework is one of the most powerful and frequently used parts of the Java API. While traditional arrays are useful for fixed-size lists, Lists, Sets, and Maps give you the flexibility to build complex, dynamic, and high-performance applications. Whenever you don't know exactly how many items you will need to store, reach for a Collection!"
},
 // ================= TOPIC: JAVA  ArrayList =============
{
  "id": "java-arraylist",
  "title": "Java ArrayList",
  "subjectCode": "java",
  "intro": "While standard Java Arrays are incredibly fast, they have one major flaw: their size is fixed. If you create an array of 5 items, you can never add a 6th. This is where the 'ArrayList' comes in! An ArrayList is a resizable array found in the 'java.util' package. It automatically grows when you add elements and shrinks when you remove them, making it the go-to data structure for dynamic data.",
  "sections": [
    {
      "heading": "1. Creating an ArrayList",
      "content": [
        {
          "type": "text",
          "value": "To use an ArrayList, you first need to import it from the 'java.util' package. Unlike standard arrays, you don't need to specify a size when creating it. One crucial rule: ArrayLists can only store Objects. If you want to store primitive types like 'int', 'double', or 'boolean', you must use their corresponding Wrapper classes ('Integer', 'Double', 'Boolean')."
        },
        {
          "type": "code",
          "value": "import java.util.ArrayList;\n\npublic class Main {\n  public static void main(String[] args) {\n    // Creating an ArrayList of Strings\n    ArrayList<String> cars = new ArrayList<String>();\n    \n    // Creating an ArrayList of Integers\n    ArrayList<Integer> ages = new ArrayList<Integer>();\n  }\n}"
        }
      ]
    },
    {
      "heading": "2. Adding and Accessing Elements",
      "content": [
        {
          "type": "text",
          "value": "You add elements to the list using the 'add()' method. To retrieve an element, you use the 'get()' method along with its index. Just like standard arrays, ArrayList indexing starts at 0."
        },
        {
          "type": "code",
          "value": "ArrayList<String> cars = new ArrayList<String>();\ncars.add(\"Volvo\");\ncars.add(\"BMW\");\ncars.add(\"Ford\");\n\nSystem.out.println(cars.get(0)); // Output: Volvo"
        }
      ]
    },
    {
      "heading": "3. Modifying and Removing Elements",
      "content": [
        {
          "type": "text",
          "value": "To change an existing element, use the 'set()' method and provide the index and the new value. To delete a specific element, use the 'remove()' method. If you want to wipe out the entire list at once, use the 'clear()' method."
        },
        {
          "type": "code",
          "value": "cars.set(0, \"Opel\"); // Changes the first item to Opel\ncars.remove(1);      // Removes the second item (BMW)\ncars.clear();        // Empties the entire ArrayList"
        }
      ]
    },
    {
      "heading": "4. ArrayList vs Standard Array",
      "content": [
        {
          "type": "text",
          "value": "When should you use which? Here is a quick comparison to help you decide:"
        },
        {
          "type": "table",
          "headers": ["Feature", "Standard Array", "ArrayList"],
          "rows": [
            ["Size", "Fixed size", "Dynamic size (grows automatically)"],
            ["Data Types", "Can hold primitives and Objects", "Can hold Objects only (Wrapper classes)"],
            ["Performance", "Slightly faster", "Slightly slower due to resizing overhead"],
            ["Length check", "Uses the 'length' attribute", "Uses the 'size()' method"]
          ]
        }
      ]
    }
  ],
  "playground": [
    {
      "title": "Basic Operations",
      "code": "import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> tasks = new ArrayList<>();\n        \n        // Adding elements\n        tasks.add(\"Buy Groceries\");\n        tasks.add(\"Pay Bills\");\n        tasks.add(\"Walk the Dog\");\n        \n        System.out.println(\"To-Do List: \" + tasks);\n        System.out.println(\"Total tasks: \" + tasks.size());\n        \n        // Modifying and Removing\n        tasks.set(1, \"Pay Electricity Bill\");\n        tasks.remove(0);\n        \n        System.out.println(\"\\nUpdated List: \" + tasks);\n    }\n}",
      "output": "To-Do List: [Buy Groceries, Pay Bills, Walk the Dog]\nTotal tasks: 3\n\nUpdated List: [Pay Electricity Bill, Walk the Dog]"
    },
    {
      "title": "Looping Through",
      "code": "import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> colors = new ArrayList<>();\n        colors.add(\"Red\");\n        colors.add(\"Green\");\n        colors.add(\"Blue\");\n        \n        System.out.println(\"--- Using standard for loop ---\");\n        for (int i = 0; i < colors.size(); i++) {\n            System.out.println(colors.get(i));\n        }\n        \n        System.out.println(\"\\n--- Using for-each loop ---\");\n        for (String color : colors) {\n            System.out.println(color);\n        }\n    }\n}",
      "output": "--- Using standard for loop ---\nRed\nGreen\nBlue\n\n--- Using for-each loop ---\nRed\nGreen\nBlue"
    },
    {
      "title": "Sorting an ArrayList",
      "code": "import java.util.ArrayList;\nimport java.util.Collections; // Import the Collections class\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<Integer> scores = new ArrayList<>();\n        scores.add(85);\n        scores.add(99);\n        scores.add(72);\n        scores.add(91);\n        \n        System.out.println(\"Before sorting: \" + scores);\n        \n        // The Collections class provides a handy sort method\n        Collections.sort(scores);\n        \n        System.out.println(\"After sorting: \" + scores);\n    }\n}",
      "output": "Before sorting: [85, 99, 72, 91]\nAfter sorting: [72, 85, 91, 99]"
    }
  ],
  "conclusion": "The 'ArrayList' is arguably the most frequently used data structure in everyday Java development. It provides the perfect balance of speed and flexibility. Whenever you are building an application where the amount of data is unknown or changes frequently—like a shopping cart, a list of active users, or reading lines from a file—the ArrayList is your best friend."
},
// ================= TOPIC: JAVA  HashMap =============
{
  "id": "java-hashmap",
  "title": "Java HashMap",
  "subjectCode": "java",
  "intro": "Imagine looking up a word in a physical dictionary. You don't read page by page from the beginning; you jump straight to the word (the key) to find its definition (the value). This is exactly how a Java 'HashMap' works! Found in the 'java.util' package, a HashMap stores items in key-value pairs. Because it uses a technique called 'hashing' under the hood, it provides lightning-fast data retrieval, making it perfect for connecting related pieces of information.",
  "sections": [
    {
      "heading": "1. Creating a HashMap",
      "content": [
        {
          "type": "text",
          "value": "To use a HashMap, you must import it from the 'java.util' package. When creating one, you must specify two data types in the angle brackets: the first for the Key, and the second for the Value. Remember, just like ArrayLists, HashMaps can only store Objects, so you must use wrapper classes like 'Integer' instead of 'int'."
        },
        {
          "type": "code",
          "value": "import java.util.HashMap;\n\npublic class Main {\n  public static void main(String[] args) {\n    // Create a HashMap with String keys and Integer values\n    HashMap<String, Integer> userAges = new HashMap<String, Integer>();\n  }\n}"
        }
      ]
    },
    {
      "heading": "2. Adding and Accessing Items",
      "content": [
        {
          "type": "text",
          "value": "Instead of using the 'add()' method like an ArrayList, you use the 'put()' method to insert a key-value pair. To retrieve a value, you use the 'get()' method and provide the key."
        },
        {
          "type": "code",
          "value": "HashMap<String, String> capitals = new HashMap<String, String>();\ncapitals.put(\"Japan\", \"Tokyo\");\ncapitals.put(\"France\", \"Paris\");\n\nSystem.out.println(capitals.get(\"Japan\")); // Output: Tokyo"
        }
      ]
    },
    {
      "heading": "3. Common HashMap Methods",
      "content": [
        {
          "type": "text",
          "value": "The HashMap class provides several built-in methods to manage your key-value pairs efficiently:"
        },
        {
          "type": "table",
          "headers": ["Method", "Description", "Example Code"],
          "rows": [
            ["put(key, value)", "Adds a new key-value pair to the map.", "map.put(\"A\", 1);"],
            ["get(key)", "Returns the value associated with the key.", "map.get(\"A\");"],
            ["remove(key)", "Removes the pair associated with the key.", "map.remove(\"A\");"],
            ["containsKey(key)", "Checks if the map contains the specified key (Returns boolean).", "map.containsKey(\"A\");"],
            ["size()", "Returns the number of key-value pairs in the map.", "map.size();"],
            ["clear()", "Removes all items from the map.", "map.clear();"]
          ]
        }
      ]
    },
    {
      "heading": "4. Looping Through a HashMap",
      "content": [
        {
          "type": "text",
          "value": "Looping through a HashMap is slightly different than an ArrayList because you have both keys and values. You can use the 'keySet()' method to get a list of all keys, or the 'values()' method to get a list of all values. A standard for-each loop is the easiest way to iterate through them."
        },
        {
          "type": "code",
          "value": "for (String i : capitals.keySet()) {\n  System.out.println(\"Country: \" + i + \" City: \" + capitals.get(i));\n}"
        }
      ]
    }
  ],
  "playground": [
    {
      "title": "Basic HashMap",
      "code": "import java.util.HashMap;\n\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, String> emailBook = new HashMap<>();\n        \n        // Adding contacts\n        emailBook.put(\"Alice\", \"alice@example.com\");\n        emailBook.put(\"Bob\", \"bob@example.com\");\n        emailBook.put(\"Charlie\", \"charlie@example.com\");\n        \n        System.out.println(\"Bob's email is: \" + emailBook.get(\"Bob\"));\n        System.out.println(\"Total contacts: \" + emailBook.size());\n        \n        // Removing a contact\n        emailBook.remove(\"Alice\");\n        System.out.println(\"Contains Alice? \" + emailBook.containsKey(\"Alice\"));\n    }\n}",
      "output": "Bob's email is: bob@example.com\nTotal contacts: 3\nContains Alice? false"
    },
    {
      "title": "Iterating keys & values",
      "code": "import java.util.HashMap;\n\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, Integer> productPrices = new HashMap<>();\n        productPrices.put(\"Laptop\", 999);\n        productPrices.put(\"Mouse\", 25);\n        productPrices.put(\"Keyboard\", 45);\n        \n        System.out.println(\"--- Store Inventory ---\");\n        for (String product : productPrices.keySet()) {\n            int price = productPrices.get(product);\n            System.out.println(product + \": $\" + price);\n        }\n    }\n}",
      "output": "--- Store Inventory ---\nMouse: $25\nKeyboard: $45\nLaptop: $999"
    },
    {
      "title": "Overwriting Values",
      "code": "import java.util.HashMap;\n\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, Integer> playerScores = new HashMap<>();\n        \n        // Initial score\n        playerScores.put(\"Player1\", 100);\n        System.out.println(\"Score: \" + playerScores.get(\"Player1\"));\n        \n        // If you put a new value using an existing key, it overwrites the old value!\n        playerScores.put(\"Player1\", 250);\n        System.out.println(\"Updated Score: \" + playerScores.get(\"Player1\"));\n    }\n}",
      "output": "Score: 100\nUpdated Score: 250"
    }
  ],
  "conclusion": "The 'HashMap' is a fundamental tool for any Java developer. Whenever you have data that naturally forms pairs—like a username and a password, a product and its price, or a word and its definition—the HashMap provides an elegant and highly optimized way to store, update, and search that data in a fraction of a second."
},
// ================= TOPIC: JAVA  Threads =============
{
  "id": "java-threads",
  "title": "Java Threads",
  "subjectCode": "java",
  "intro": "Imagine playing a video game where you cannot walk and shoot at the same time because the computer can only process one action at once. That would be terrible! Java Threads solve this by allowing a program to perform multiple tasks simultaneously. A thread is the smallest unit of processing. By using multithreading, you can keep your applications highly responsive—like allowing a user to click buttons while a large file downloads in the background.",
  "sections": [
    {
      "heading": "1. Two Ways to Create a Thread",
      "content": [
        {
          "type": "text",
          "value": "In Java, there are two primary ways to create a thread:<br/><br/><strong>1. Extending the <code>Thread</code> class:</strong> You create a new class that inherits from the <code>Thread</code> class and override its <code>run()</code> method.<br/><strong>2. Implementing the <code>Runnable</code> interface:</strong> You create a class that implements <code>Runnable</code> and its <code>run()</code> method, then pass an instance of it to a <code>Thread</code> object. This is generally preferred because Java only allows single inheritance; if you implement <code>Runnable</code>, your class can still extend another class!"
        }
      ]
    },
    {
      "heading": "2. Extending the Thread Class",
      "content": [
        {
          "type": "text",
          "value": "When you extend the <code>Thread</code> class, the code that you want to run simultaneously goes inside the <code>run()</code> method. To actually begin execution, you create an object of your class and call the <strong><code>start()</code></strong> method. (Never call <code>run()</code> directly, as that will just execute on the main thread rather than creating a new one!)"
        },
        {
          "type": "code",
          "value": "public class MyThread extends Thread {\n  public void run() {\n    System.out.println(\"This code is running in a separate thread!\");\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    MyThread thread = new MyThread();\n    thread.start(); // Starts the thread\n    System.out.println(\"This code is running in the main thread.\");\n  }\n}"
        }
      ]
    },
    {
      "heading": "3. Implementing the Runnable Interface",
      "content": [
        {
          "type": "text",
          "value": "If you choose to implement <code>Runnable</code>, you still write your concurrent code inside a <code>run()</code> method. However, to start it, you must wrap your Runnable object inside a standard <code>Thread</code> object."
        },
        {
          "type": "code",
          "value": "public class MyRunnable implements Runnable {\n  public void run() {\n    System.out.println(\"This code is running in a Runnable thread!\");\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    MyRunnable myRunnable = new MyRunnable();\n    Thread thread = new Thread(myRunnable);\n    thread.start();\n  }\n}"
        }
      ]
    },
    {
      "heading": "4. Concurrency Problems",
      "content": [
        {
          "type": "text",
          "value": "While threads are powerful, they introduce a major risk: <strong>Concurrency Problems</strong>. If two threads try to modify the exact same variable at the exact same time, the result is unpredictable (often called a 'Race Condition'). To fix this, Java provides the <code>synchronized</code> keyword, which locks a method or variable so only one thread can access it at a time."
        }
      ]
    }
  ],
  "playground": [
    {
      "title": "Extending Thread",
      "code": "class HelloThread extends Thread {\n    public void run() {\n        System.out.println(\"Hello from a custom Thread!\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        HelloThread t1 = new HelloThread();\n        t1.start();\n        \n        System.out.println(\"Hello from the Main thread!\");\n    }\n}",
      "output": "Hello from the Main thread!\nHello from a custom Thread!"
    },
    {
      "title": "Runnable Interface",
      "code": "class Task implements Runnable {\n    public void run() {\n        for(int i = 1; i <= 3; i++) {\n            System.out.println(\"Task running: Step \" + i);\n        }\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Task myTask = new Task();\n        Thread t1 = new Thread(myTask);\n        \n        t1.start();\n        System.out.println(\"Main thread finished initiating task.\");\n    }\n}",
      "output": "Main thread finished initiating task.\nTask running: Step 1\nTask running: Step 2\nTask running: Step 3"
    },
    {
      "title": "Thread Sleep",
      "code": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Starting countdown...\");\n        \n        try {\n            for (int i = 3; i > 0; i--) {\n                System.out.println(i);\n                // Pauses the main thread for 1000 milliseconds (1 second)\n                Thread.sleep(1000);\n            }\n        } catch (InterruptedException e) {\n            System.out.println(\"Thread was interrupted!\");\n        }\n        \n        System.out.println(\"Liftoff! \");\n    }\n}",
      "output": "Starting countdown...\n3\n2\n1\nLiftoff! "
    }
  ],
  "conclusion": "Threads are the secret behind modern, high-performance applications, enabling background processes, smooth user interfaces, and complex server request handling. While they add power, they also demand responsibility; learning to manage shared resources and prevent race conditions is a critical skill for any advanced Java developer."
},
// ================= TOPIC: JAVA  Lambda Expressions =============
{
  "id": "java-lambda-expressions",
  "title": "Java Lambda Expressions",
  "subjectCode": "java",
  "intro": "Imagine having to write an entire class just to pass a single, simple instruction (like 'print this word') to a button. Before Java 8, developers had to use clunky 'anonymous classes' to achieve this. Java Lambda Expressions changed the game! A lambda expression is a short, concise block of code that takes in parameters and returns a value. It allows you to treat your code as data, bringing functional programming concepts to Java.",
  "sections": [
    {
      "heading": "1. Lambda Syntax",
      "content": [
        {
          "type": "text",
          "value": "The simplest way to think of a Lambda expression is an anonymous method (a method without a name). The syntax uses the arrow token <code>-></code> to separate the parameters from the body."
        },
        {
          "type": "list",
          "items": [
            "No parameters: <code>() -> System.out.println(\"Hello\");</code>",
            "One parameter: <code>(name) -> System.out.println(\"Hello \" + name);</code>",
            "Multiple parameters: <code>(a, b) -> { return a + b; }</code>"
          ]
        },
        {
          "type": "text",
          "value": "Notice that if the body has only one line, you can skip the curly braces <code>{}</code> and the <code>return</code> keyword!"
        }
      ]
    },
    {
      "heading": "2. Using Lambdas with Collections",
      "content": [
        {
          "type": "text",
          "value": "One of the most common and powerful places to use Lambda expressions is with Java Collections, like an ArrayList. The <code>forEach()</code> method accepts a Lambda expression and automatically applies it to every item in the list."
        },
        {
          "type": "code",
          "value": "import java.util.ArrayList;\n\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<Integer> numbers = new ArrayList<Integer>();\n    numbers.add(5);\n    numbers.add(9);\n    numbers.add(8);\n    \n    // Using a Lambda expression to print each item\n    numbers.forEach( (n) -> { System.out.println(n); } );\n  }\n}"
        }
      ]
    },
    {
      "heading": "3. Functional Interfaces",
      "content": [
        {
          "type": "text",
          "value": "Under the hood, Lambda expressions are inextricably tied to <strong>Functional Interfaces</strong>. A Functional Interface is simply any interface that has exactly ONE abstract method (like <code>Runnable</code>). When you write a Lambda, Java automatically maps your short code block to that single abstract method."
        },
        {
          "type": "code",
          "value": "interface StringFunction {\n  String run(String str);\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    // The lambda provides the implementation for the 'run' method!\n    StringFunction exclaim = (s) -> s + \"!\";\n    \n    System.out.println(exclaim.run(\"Hello\")); // Output: Hello!\n  }\n}"
        }
      ]
    }
  ],
  "playground": [
    {
      "title": "ArrayList forEach",
      "code": "import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> names = new ArrayList<>();\n        names.add(\"Alice\");\n        names.add(\"Bob\");\n        names.add(\"Charlie\");\n        \n        // The old way (for-each loop):\n        // for(String name : names) { System.out.println(name); }\n        \n        // The modern Lambda way:\n        System.out.println(\"Using Lambda:\");\n        names.forEach( name -> System.out.println(\"Hi, \" + name) );\n    }\n}",
      "output": "Using Lambda:\nHi, Alice\nHi, Bob\nHi, Charlie"
    },
    {
      "title": "Custom Functional Interface",
      "code": "// Interface with exactly ONE method\ninterface MathOperation {\n    int operate(int a, int b);\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        // Lambda for addition\n        MathOperation addition = (a, b) -> a + b;\n        \n        // Lambda for multiplication\n        MathOperation multiplication = (a, b) -> a * b;\n        \n        System.out.println(\"10 + 5 = \" + addition.operate(10, 5));\n        System.out.println(\"10 * 5 = \" + multiplication.operate(10, 5));\n    }\n}",
      "output": "10 + 5 = 15\n10 * 5 = 50"
    }
  ],
  "conclusion": "Lambda Expressions represent a massive leap forward in Java's evolution. By dramatically reducing boilerplate code and enabling functional programming paradigms, they make your code cleaner, more readable, and easier to maintain. Once you master Lambdas, you will be perfectly positioned to learn the highly powerful Java Streams API!"
}
  ],
};

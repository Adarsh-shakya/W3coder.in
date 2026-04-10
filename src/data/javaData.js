export const javaData = {
  subjectTitle: "Java programming",
  subjectCode: "java",
  topics: [
    // ================= TOPIC 1: JAVA BASICS =================
    {
      id: "basics", // URL hoga: /course/java/basics
      title: "Java Basics",
      intro: "Java is a high-level, object-oriented programming language developed by Sun Microsystems. It is widely used for building robust, secure, and platform-independent applications.",
      sections: [
        {
          heading: "1. Java Features",
          content: [
            {
              type: "list",
              items: [
                "Simple and Familiar",
                "Object-Oriented",
                "Platform Independent",
                "Secure",
                "Robust",
                "Multithreaded",
                "High Performance"
              ]
            }
          ]
        },
        {
          heading: "2. Hello World Program",
          content: [
            { type: "text", value: "Example:", className: "note-example-title" },
            {
              type: "code",
              value: `public class HelloWorld {\n  public static void main(String[] args) {\n    System.out.println("Hello, World!");\n  }\n}`
            }
          ]
        },
        {
          heading: "3. Java Syntax",
          content: [
            { type: "text", value: "Java programs are made up of classes and methods. Every application must have a `main` method, which is the entry point of the program." },
            {
              type: "list",
              items: [
                "Statements end with a semicolon ;",
                "Code blocks are enclosed in { and }",
                "Java is case-sensitive"
              ]
            }
          ]
        },
        {
          heading: "4. Data Types",
          content: [
            { type: "text", value: "Java has two categories of data types:" },
            {
              type: "list-html",
              items: [
                "<strong>Primitive Types:</strong> int, float, double, char, boolean, byte, short, long",
                "<strong>Non-Primitive Types:</strong> Strings, Arrays, Classes, Interfaces"
              ]
            }
          ]
        },
        {
          heading: "5. Variables",
          content: [
            {
              type: "code",
              value: `int age = 25;\nString name = "John";\nboolean isJavaFun = true;`
            }
          ]
        },
        {
          heading: "6. Operators",
          content: [
            { type: "text", value: "Java provides several types of operators:" },
            {
              type: "list",
              items: [
                "Arithmetic Operators: +, -, *, /, %",
                "Relational Operators: ==, !=, >, <, >=, <=",
                "Logical Operators: &&, ||, !",
                "Assignment Operators: =, +=, -=, *=, /="
              ]
            }
          ]
        }
      ],
      // ==========================================
      // JAVA BASICS PLAYGROUND EXAMPLES
      // ==========================================
      playground: [
        {
          title: "Hello World",
          code: `public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, World!");\n  }\n}`,
          output: "Hello, World!"
        },
        {
          title: "Variables",
          code: `public class Main {\n  public static void main(String[] args) {\n    int age = 25;\n    String name = "John";\n    System.out.println(name + " is " + age + " years old.");\n  }\n}`,
          output: "John is 25 years old."
        }
      ],
      conclusion: "Understanding Java basics is the first step to becoming a proficient Java developer. These fundamentals provide the foundation for all advanced concepts and real-world applications."
    },

    // ================= TOPIC 2: JAVA FLOW CONTROL =================
    {
      id: "flow-control", // URL hoga: /course/java/flow-control
      title: "Java Flow Control",
      intro: "Java Flow Control statements are used to control the flow of execution in a program. They decide how the program will proceed under certain conditions or based on loops.",
      sections: [
        {
          heading: "1. Decision-Making Statements",
          content: [
            {
              type: "block",
              subheading: "1.1 if Statement",
              text: "Executes code block if the condition is true.",
              code: `if(condition) {\n  // code block\n}`,
              exampleTitle: "Example:",
              exampleCode: `int age = 18;\nif(age >= 18) {\n  System.out.println("You are eligible to vote.");\n}`
            },
            {
              type: "block",
              subheading: "1.2 if-else Statement",
              code: `if(condition) {\n  // true block\n} else {\n  // false block\n}`
            },
            {
              type: "block",
              subheading: "1.3 if-else-if Ladder",
              code: `if(condition1) {\n  // block1\n} else if(condition2) {\n  // block2\n} else {\n  // default block\n}`
            },
            {
              type: "block",
              subheading: "1.4 switch Statement",
              code: `int day = 3;\nswitch(day) {\n  case 1: System.out.println("Monday"); break;\n  case 2: System.out.println("Tuesday"); break;\n  default: System.out.println("Invalid day");\n}`
            }
          ]
        },
        {
          heading: "2. Looping Statements",
          content: [
            {
              type: "block",
              subheading: "2.1 for Loop",
              code: `for(int i = 1; i <= 5; i++) {\n  System.out.println(i);\n}`
            },
            {
              type: "block",
              subheading: "2.2 while Loop",
              code: `int i = 1;\nwhile(i <= 5) {\n  System.out.println(i);\n  i++;\n}`
            },
            {
              type: "block",
              subheading: "2.3 do-while Loop",
              code: `int i = 1;\ndo {\n  System.out.println(i);\n  i++;\n} while(i <= 5);`
            }
          ]
        },
        {
          heading: "3. Jump Statements",
          content: [
            {
              type: "block",
              subheading: "3.1 break Statement",
              code: `for(int i = 1; i <= 5; i++) {\n  if(i == 3) break;\n  System.out.println(i);\n}`
            },
            {
              type: "block",
              subheading: "3.2 continue Statement",
              code: `for(int i = 1; i <= 5; i++) {\n  if(i == 3) continue;\n  System.out.println(i);\n}`
            },
            {
              type: "block",
              subheading: "3.3 return Statement",
              code: `public static int sum(int a, int b) {\n  return a + b;\n}`
            }
          ]
        }
      ],
      // ==========================================
      // FLOW CONTROL PLAYGROUND EXAMPLES
      // ==========================================
      playground: [
        {
          title: "If-Else",
          code: `public class Main {\n  public static void main(String[] args) {\n    int age = 18;\n    if(age >= 18) {\n      System.out.println("Eligible to vote.");\n    } else {\n      System.out.println("Not eligible.");\n    }\n  }\n}`,
          output: "Eligible to vote."
        },
        {
          title: "For Loop",
          code: `public class Main {\n  public static void main(String[] args) {\n    for(int i = 1; i <= 3; i++) {\n      System.out.println("Count: " + i);\n    }\n  }\n}`,
          output: "Count: 1\nCount: 2\nCount: 3"
        }
      ],
      conclusion: "Flow control statements are crucial for making Java programs dynamic and flexible. Understanding them is fundamental for writing efficient code."
    }
  ]
};
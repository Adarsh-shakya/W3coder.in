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
              value: `public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}`
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
              type: "list-html", // Isme HTML tags (<strong>) use honge
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
              value: `int age = 25;
String name = "John";
boolean isJavaFun = true;`
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
            // Block 1.1
            {
              type: "block", // Special type for 'content-block' styling
              subheading: "1.1 if Statement",
              text: "Executes code block if the condition is true.",
              code: `if(condition) {
  // code block
}`,
              exampleTitle: "Example:",
              exampleCode: `int age = 18;
if(age >= 18) {
  System.out.println("You are eligible to vote.");
}`
            },
            // Block 1.2
            {
              type: "block",
              subheading: "1.2 if-else Statement",
              code: `if(condition) {
  // true block
} else {
  // false block
}`
            },
            // Block 1.3
            {
              type: "block",
              subheading: "1.3 if-else-if Ladder",
              code: `if(condition1) {
  // block1
} else if(condition2) {
  // block2
} else {
  // default block
}`
            },
            // Block 1.4
            {
              type: "block",
              subheading: "1.4 switch Statement",
              code: `int day = 3;
switch(day) {
  case 1: System.out.println("Monday"); break;
  case 2: System.out.println("Tuesday"); break;
  default: System.out.println("Invalid day");
}`
            }
          ]
        },
        {
          heading: "2. Looping Statements",
          content: [
            {
              type: "block",
              subheading: "2.1 for Loop",
              code: `for(int i = 1; i <= 5; i++) {
  System.out.println(i);
}`
            },
            {
              type: "block",
              subheading: "2.2 while Loop",
              code: `int i = 1;
while(i <= 5) {
  System.out.println(i);
  i++;
}`
            },
            {
              type: "block",
              subheading: "2.3 do-while Loop",
              code: `int i = 1;
do {
  System.out.println(i);
  i++;
} while(i <= 5);`
            }
          ]
        },
        {
          heading: "3. Jump Statements",
          content: [
            {
              type: "block",
              subheading: "3.1 break Statement",
              code: `for(int i = 1; i <= 5; i++) {
  if(i == 3) break;
  System.out.println(i);
}`
            },
            {
              type: "block",
              subheading: "3.2 continue Statement",
              code: `for(int i = 1; i <= 5; i++) {
  if(i == 3) continue;
  System.out.println(i);
}`
            },
            {
              type: "block",
              subheading: "3.3 return Statement",
              code: `public static int sum(int a, int b) {
  return a + b;
}`
            }
          ]
        }
      ],
      conclusion: "Flow control statements are crucial for making Java programs dynamic and flexible. Understanding them is fundamental for writing efficient code."
    }
  ]
};
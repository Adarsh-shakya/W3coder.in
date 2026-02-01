export const pythonData = {
  subjectTitle: "Python",
  subjectCode: "python", // URL me /course/python dikhega
  topics: [
    // ================= TOPIC 1: PYTHON FUNDAMENTALS =================
    {
      id: "fundamentals", // URL: /course/python/fundamentals
      title: "Python Fundamentals",
      intro: "Python is a high-level, interpreted, and general-purpose programming language known for its simplicity and readability. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming.",
      sections: [
        {
          heading: "1. Python Syntax",
          content: [
            { type: "text", value: "Python uses indentation to define code blocks instead of curly braces. This makes the code cleaner and more readable." },
            {
              type: "code",
              value: `if 5 > 2:
  print("Five is greater than two!")`
            }
          ]
        },
        {
          heading: "2. Variables",
          content: [
            { type: "text", value: "Variables in Python are created when you assign a value. Python is dynamically typed, so you don't need to declare the type." },
            {
              type: "code",
              value: `x = 10
name = "Alice"
pi = 3.14`
            }
          ]
        },
        {
          heading: "3. Data Types",
          content: [
            {
              type: "list-html", // HTML tags allow karne ke liye (Bold text ke liye)
              items: [
                "<strong>int</strong> – Integer numbers",
                "<strong>float</strong> – Decimal numbers",
                "<strong>str</strong> – Text",
                "<strong>bool</strong> – Boolean (True or False)",
                "<strong>list, tuple, set, dict</strong> – Collection types"
              ]
            }
          ]
        },
        {
          heading: "4. Comments",
          content: [
            {
              type: "code",
              value: `# This is a single-line comment

"""
This is a
multi-line comment
"""`
            }
          ]
        },
        {
          heading: "5. Input and Output",
          content: [
            {
              type: "code",
              value: `name = input("Enter your name: ")
print("Hello", name)`
            }
          ]
        },
        {
          heading: "6. Type Casting",
          content: [
            {
              type: "code",
              value: `x = int("5")
y = float("3.14")
z = str(100)`
            }
          ]
        }
      ],
      conclusion: "Python fundamentals are easy to grasp and essential for every beginner. Understanding the basic syntax, data types, and variables is the first step toward writing Python programs."
    },

    // ================= TOPIC 2: PYTHON FUNCTIONS =================
    {
      id: "functions", // URL: /course/python/functions
      title: "Python Functions",
      intro: "Functions in Python are reusable blocks of code that perform a specific task. They help in organizing code and improving readability and reusability.",
      sections: [
        {
          heading: "1. Defining a Function",
          content: [
            {
              type: "code",
              value: `def greet():
  print("Hello, world!")`
            },
            { type: "text", value: "Use the 'def' keyword followed by the function name and parentheses." }
          ]
        },
        {
          heading: "2. Calling a Function",
          content: [
            {
              type: "code",
              value: `greet()  # Output: Hello, world!`
            }
          ]
        },
        {
          heading: "3. Function with Parameters",
          content: [
            {
              type: "code",
              value: `def add(a, b):
  return a + b

print(add(5, 3))  # Output: 8`
            },
            { type: "text", value: "Functions can accept input values called parameters." }
          ]
        },
        {
          heading: "4. Default Parameters",
          content: [
            {
              type: "code",
              value: `def greet(name="Guest"):
  print("Hello", name)

greet()           # Output: Hello Guest
greet("Alice")    # Output: Hello Alice`
            }
          ]
        },
        {
          heading: "5. Return Statement",
          content: [
            {
              type: "code",
              value: `def square(x):
  return x * x

result = square(4)
print(result)  # Output: 16`
            }
          ]
        },
        {
          heading: "6. Lambda Functions",
          content: [
            {
              type: "code",
              value: `square = lambda x: x * x
print(square(5))  # Output: 25`
            },
            { type: "text", value: "Lambda functions are anonymous, single-line functions." }
          ]
        },
        {
          heading: "7. Variable-Length Arguments",
          content: [
            {
              type: "code",
              value: `def greet_all(*names):
  for name in names:
    print("Hello", name)

greet_all("Alice", "Bob", "Charlie")`
            },
            { type: "text", value: "Use *args for variable number of positional arguments and **kwargs for keyword arguments." }
          ]
        }
      ],
      conclusion: "Functions make your code more modular, readable, and reusable. Understanding how to define and use functions, including lambda and variable-length arguments, is key to mastering Python programming."
    },

    // ================= TOPIC 3: PYTHON DATA STRUCTURES =================
    {
      id: "data-structures", // URL: /course/python/data-structures
      title: "Python Data Structures",
      intro: "Python provides built-in data structures that are powerful and easy to use. These include lists, tuples, sets, and dictionaries, which allow efficient storage and manipulation of data.",
      sections: [
        {
          heading: "1. List",
          content: [
            { type: "text", value: "A list is an ordered, mutable collection of items." },
            {
              type: "code",
              value: `fruits = ["apple", "banana", "cherry"]
print(fruits[1])  # Output: banana
fruits.append("mango")`
            }
          ]
        },
        {
          heading: "2. Tuple",
          content: [
            { type: "text", value: "A tuple is an ordered, immutable collection." },
            {
              type: "code",
              value: `coordinates = (10, 20)
print(coordinates[0])  # Output: 10`
            }
          ]
        },
        {
          heading: "3. Set",
          content: [
            { type: "text", value: "A set is an unordered collection with no duplicate elements." },
            {
              type: "code",
              value: `unique_numbers = {1, 2, 3, 2}
print(unique_numbers)  # Output: {1, 2, 3}
unique_numbers.add(4)`
            }
          ]
        },
        {
          heading: "4. Dictionary",
          content: [
            { type: "text", value: "A dictionary stores key-value pairs." },
            {
              type: "code",
              value: `student = {"name": "Alice", "age": 20}
print(student["name"])  # Output: Alice
student["grade"] = "A"`
            }
          ]
        },
        {
          heading: "5. Common Operations",
          content: [
            {
              type: "code",
              value: `# Length
len(fruits)

# Membership test
"apple" in fruits

# Iteration
for item in fruits:
    print(item)`
            }
          ]
        }
      ],
      conclusion: "Python's built-in data structures are versatile and form the foundation for efficient data manipulation. Mastery of lists, tuples, sets, and dictionaries is essential for Python development."
    }
  ]
};
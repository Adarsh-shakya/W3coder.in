// python Introduction - 
// python Comments -  
// python Variables
// python Input Function  
// python Data Types
// python Type Casting - 
// python Operators
// python Conditional Statements
// python Loops
// python Strings 
// python Lists
// python Tuples-done
// python Sets
// python Dictionaries
// python Functions
// python Modules
// python Packages                   
// python File Handling              
// python Exception Handling         
// python Lambda Functions           
// python List Comprehension         
// python Dictionary Comprehension   
// python OOP
import python_img from "../assets/images/python.webp";

export const pythonData = {
  subjectTitle: "Python ",
  subjectCode: "python", // URL me /course/python dikhega
  topics: [
   
    // ================= TOPIC 1.0: Introduction to Python =========
    {
      id: "python-introduction",
      title: "Introduction to Python",
      intro: "Python is a popular, high-level programming language created by Guido van Rossum and released in 1991. It is known for its simplicity and readability.",
      sections: [
        // ==========================================
        // IMAGE ADDED HERE (Before Heading 1)
        // ==========================================
        {
          content: [
            {
              type: "image",
              url: python_img, // <-- Yahan apna image path daal dijiyega
              alt: "Python Programming Language",
              className: "responsive-image"
            }
          ]
        },
        {
          heading: "1. What is Python used for?",
          content: [
            {
              type: "list-html",
              items: [
                "<strong>Web Development:</strong> Building server-side web applications (using Django, Flask).",
                "<strong>Data Science & AI:</strong> Machine learning, data analysis, and artificial intelligence.",
                "<strong>Automation:</strong> Writing scripts to automate repetitive tasks.",
                "<strong>Software Testing:</strong> Automated testing and web scraping."
              ],
            },
          ],
        },
        {
          heading: "2. Why choose Python?",
          content: [
            {
              type: "text",
              value: "Python is highly recommended for beginners and professionals alike because:",
            },
            {
              type: "list-html",
              items: [
                "It has a simple syntax similar to the English language.",
                "It allows developers to write programs with fewer lines than some other programming languages.",
                "It runs on different platforms (Windows, Mac, Linux, Raspberry Pi, etc).",
                "It has a massive community and thousands of free libraries."
              ],
            },
          ],
        },
        {
          heading: "3. Python vs Other Languages",
          content: [
            {
              type: "text",
              value: "Unlike other languages (like C++ or Java) that use semicolons and curly brackets, Python uses new lines to complete a command and indentation (whitespace) to define scope.",
            },
            {
              type: "code",
              value: `# Python uses indentation instead of {}\nif 5 > 2:\n    print("Five is greater than two!")`
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
          code: `# Welcome to Python!\n# This is a comment. Python ignores lines starting with #\n\nprint("Hello, World!")\nprint("Welcome to W3coder's Python Tutorial.")`,
          output: "Hello, World!\nWelcome to W3coder's Python Tutorial."
        },
        {
          title: "Simple Math",
          code: `# Python is like a calculator\n\nprint("Addition:", 10 + 5)\nprint("Multiplication:", 10 * 5)\nprint("Power (10 to the power 3):", 10 ** 3)`,
          output: "Addition: 15\nMultiplication: 50\nPower (10 to the power 3): 1000"
        }
      ],
      conclusion: "Python is the perfect language to start your coding journey. It is powerful enough to build AI models, yet simple enough for a beginner to understand.",
    },
    // ================= TOPIC 1.2: Python Installation ============
    {
      id: "python-installation",
      title: "Installing Python",
      intro: "Before you start writing Python code on your computer, you need to check if Python is installed and, if not, install it properly.",
      sections: [
        {
          heading: "1. Check if Python is Already Installed",
          content: [
            {
              type: "text",
              value: "Many PCs and Macs already have Python installed. To check, open your Terminal (Mac/Linux) or Command Prompt (Windows) and type:",
            },
            {
              type: "code",
              value: `python --version\n# OR\npython3 --version`
            },
          ],
        },
        {
          heading: "2. Downloading Python",
          content: [
            {
              type: "text",
              value: "If Python is not installed, you can download it for free from the official website:",
            },
            {
              type: "list-html",
              items: [
                "Go to <strong>https://www.python.org/downloads/</strong>",
                "Click on the download button for the latest version (e.g., Python 3.12+)."
              ]
            }
          ]
        },
        {
          heading: "3. Installation on Windows (CRITICAL STEP)",
          content: [
            {
              type: "text",
              value: "When you open the downloaded installer on Windows, you will see an installation window. <strong>Important:</strong> You must check the box that says <strong>'Add Python to PATH'</strong> before clicking 'Install Now'.",
            },
            {
              type: "list-html",
              items: [
                "1. Open the installer.",
                "2. ✅ Check the box <strong>'Add Python to PATH'</strong> at the bottom.",
                "3. Click <strong>'Install Now'</strong>.",
                "4. Wait for the setup to complete and click 'Close'."
              ]
            }
          ]
        }
      ],
      playground: [
        {
          title: "Check Version",
          code: `# In this playground, Python is already running in the background!\n# Let's check which version of Python this web environment is using.\n\nimport sys\n\nprint("Python Version Details:")\nprint(sys.version)`,
          output: "Python Version Details:\n3.10.x (default, Web Environment) [GCC 9.4.0]"
        }
      ],
      conclusion: "Adding Python to your system PATH is the most important step on Windows. It allows you to run Python from any folder using your command prompt.",
    },
    // ================= TOPIC 1.3: VS Code Setup =================
    {
      id: "python-setup",
      title: "Environment Setup (VS Code)",
      intro: "While you can write Python in Notepad, developers use an IDE (Integrated Development Environment) to write code efficiently. Visual Studio Code (VS Code) is the most popular, free IDE for Python.",
      sections: [
        {
          heading: "1. Download and Install VS Code",
          content: [
            {
              type: "text",
              value: "Visual Studio Code is a lightweight but powerful code editor made by Microsoft.",
            },
            {
              type: "list-html",
              items: [
                "Go to <strong>https://code.visualstudio.com/</strong>",
                "Download the installer for your OS (Windows/Mac/Linux).",
                "Run the installer and follow the standard installation steps."
              ]
            }
          ]
        },
        {
          heading: "2. Install the Python Extension",
          content: [
            {
              type: "text",
              value: "VS Code needs an extension to understand Python code, provide auto-complete, and run your files easily.",
            },
            {
              type: "list-html",
              items: [
                "Open VS Code.",
                "Click on the <strong>Extensions</strong> icon on the left sidebar (or press Ctrl+Shift+X).",
                "Search for <strong>'Python'</strong>.",
                "Click 'Install' on the official Python extension published by <strong>Microsoft</strong>."
              ]
            }
          ]
        },
        {
          heading: "3. Writing Your First File",
          content: [
            {
              type: "text",
              value: "Now let's create a Python file and run it.",
            },
            {
              type: "list-html",
              items: [
                "Create a new folder on your computer (e.g., 'Python_Course').",
                "Open VS Code, click <strong>File > Open Folder</strong>, and select that folder.",
                "Create a new file and name it <strong>main.py</strong> (.py is the extension for Python files).",
                "Write <code>print('Hello W3coder')</code> inside it and save the file (Ctrl+S)."
              ]
            }
          ]
        },
        {
          heading: "4. Running the File",
          content: [
            {
              type: "text",
              value: "You can run your Python file using the terminal inside VS Code.",
            },
            {
              type: "code",
              value: `# Open Terminal in VS Code (Ctrl + ~)\n# Type this command and press Enter:\n\npython main.py`
            }
          ]
        }
      ],
      playground: [
        {
          title: "Simulate Terminal",
          code: `# Imagine you just typed 'python main.py' in your VS Code Terminal\n# This is what your output would look like:\n\nprint("Hello W3coder!")\nprint("Your environment is set up successfully! 🎉")`,
          output: "Hello W3coder!\nYour environment is set up successfully! 🎉"
        }
      ],
      conclusion: "Congratulations! With Python installed and VS Code set up, your computer is now a powerful development machine ready to write and execute any Python application.",
    },
    // ================= TOPIC 2: PYTHON variables ================
    {
      id: "variables",
      title: "Python Variables",
      intro: "A variable is a basic concept in all programming languages. It is used to store data values. In Python, variables are dynamically typed, which means you do not need to declare the data type explicitly before assigning a value.",
      sections: [
        {
          heading: "1. Creating Variables",
          content: [
            {
              type: "text",
              value: "We need an assignment operator (=) to create a variable. Python automatically identifies the data type based on the assigned value.",
            },
            {
              type: "code",
              value: `marks = 80   \nname = "W3coder"\nprice = 99.99`,
            },
          ],
        },
        {
          heading: "2. Variable Naming Rules",
          content: [
            {
              type: "list-html",
              items: [
                "Must start with a letter or underscore (_)",
                "Cannot start with a number",
                "Can contain letters, numbers, and underscores",
                "Variable names are case-sensitive (age and Age are different)",
              ],
            },
            {
              type: "code",
              value: `# 1. Must start with a letter or underscore\n# ✅ Correct\nage = 20\n_name = "W3coder"\n\n# ❌ Wrong\n# 1age = 25\n\n\n# 2. Cannot start with a number\n# ✅ Correct\nmarks1 = 80\n\n# ❌ Wrong\n# 2marks = 90\n\n\n# 3. Can contain letters, numbers, and underscores\n# ✅ Correct\nstudent_name = "Aman"\ntotal_marks_1 = 100\n\n# ❌ Wrong\n# student-name = "Aman"\n# total marks = 100\n\n\n# 4. Case-sensitive\nage = 20\nAge = 25\n\nprint(age)   # 20\nprint(Age)   # 25`,
            },
          ],
        },
        {
          heading: "3. Multiple Assignment",
          content: [
            {
              type: "code",
              value: `# Assign same value to multiple variables\na = b = c = 5\nprint(a, b, c)\n\n# Assign different values in a single line\nx, y, z = 1, 2, 3\nprint(x, y, z)`,
            },
          ],
        },
        {
          heading: "4. Changing Variable Value",
          content: [
            {
              type: "code",
              value: `x = 5\nx = 20\nprint(x)  # Output: 20`,
            },
          ],
        },
      ],
      // ==========================================
      // PLAYGROUND ADDED HERE
      // ==========================================
      playground: [
        {
          title: "Create Variables",
          code: `marks = 80\nname = "W3coder"\n\nprint("Name:", name)\nprint("Marks:", marks)`,
          output: "Name: W3coder\nMarks: 80"
        },
        {
          title: "Multiple Assignment",
          code: `# Same value to multiple variables\na = b = c = 5\nprint("a, b, c:", a, b, c)\n\n# Different values\nx, y, z = 1, 2, 3\nprint("x, y, z:", x, y, z)`,
          output: "a, b, c: 5 5 5\nx, y, z: 1 2 3"
        },
        {
          title: "Change Value",
          code: `score = 50\nprint("Initial Score:", score)\n\nscore = 100\nprint("Updated Score:", score)`,
          output: "Initial Score: 50\nUpdated Score: 100"
        }
      ],
      conclusion: "Variables are fundamental to programming. Understanding how to declare, name, and use variables is essential for writing Python programs.",
    },
  // ================= TOPIC 3: PYTHON Data Type =================
    {
      id: "data-types",
      title: "Python Data Types",
      intro: "Data types define the type of value a variable can hold. Python has several built-in data types for different kinds of data.",
      sections: [
        {
          heading: "1. Numeric Types",
          content: [
            {
              type: "code",
              value: `x = 80        # int\ny = 3.14      # float\nz = 2 + 3j    # complex`,
            },
          ],
        },
        {
          heading: "2. Text Type",
          content: [
            {
              type: "code",
              value: `name = "Alice"  # str`,
            },
          ],
        },
        {
          heading: "3. Boolean Type",
          content: [
            {
              type: "text",
              value: "Boolean (bool) data type can hold only two values: True and False or ( 1 and 0 ).",
            },
            {
              type: "code",
              value: `is_active = True\nis_active = False\nnum = 3<2\nprint(type(num))  # Output : False`,
            },
          ],
        },
        {
          heading: "4. Collection Types",
          content: [
            {
              type: "code",
              value: `# List\nfruits = ["apple", "banana"]\n\n# Tuple\ncoordinates = (10, 20)\n\n# Set\nunique_numbers = {1, 2, 3}\n\n# Dictionary\nstudent = {"name": "Alice", "age": 20}`,
            },
          ],
        },
        {
          heading: "5. Checking Data Type",
          content: [
            {
              type: "text",
              value: 'We can check the data type using the <span class="inline-code">type()</span> function.',
            },
            {
              type: "code",
              value: `x = 5\nprint(type(x))  # Output: <class 'int'>`,
            },
          ],
        },
      ],
      // ==========================================
      // PLAYGROUND ADDED HERE
      // ==========================================
      playground: [
        {
          title: "Numeric Types",
          code: `integer_num = 10\nfloat_num = 10.5\ncomplex_num = 2 + 3j\n\nprint("Integer type:", type(integer_num))\nprint("Float type:", type(float_num))\nprint("Complex type:", type(complex_num))`,
          output: "Integer type: <class 'int'>\nFloat type: <class 'float'>\nComplex type: <class 'complex'>"
        },
        {
          title: "Text & Boolean",
          code: `name = "W3coder"\nis_learning = True\n\nprint(name, "type:", type(name))\nprint(is_learning, "type:", type(is_learning))`,
          output: "W3coder type: <class 'str'>\nTrue type: <class 'bool'>"
        },
        {
          title: "Collections",
          code: `my_list = [1, 2, 3]\nmy_tuple = (1, 2, 3)\nmy_dict = {"A": 1, "B": 2}\n\nprint("List:", type(my_list))\nprint("Tuple:", type(my_tuple))\nprint("Dictionary:", type(my_dict))`,
          output: "List: <class 'list'>\nTuple: <class 'tuple'>\nDictionary: <class 'dict'>"
        }
      ],
      conclusion: "Understanding Python data types helps in choosing the correct structure for storing and manipulating data efficiently.",
    },
    // ================= TOPIC 4: PYTHON Operators =================
    {
      id: "operators",
      title: "Python Operators",
      intro: "Operators are used to perform operations on variables and values in Python. Python supports various types of operators.",
      sections: [
        {
          heading: "1. Arithmetic Operators",
          content: [
            {
              type: "code",
              value: `a = 5\nb = 2\n\nprint(a + b)   # Addition - 7\nprint(a - b)   # Subtraction - 3\nprint(a * b)   # Multiplication - 10 \nprint(a / b)   # Division - 2.5 In Python, " / " always returns a float\nprint(a % b)   # Modulus - 1 It returns the remainder\nprint(a ** b)  # Exponentiation - 25 Means 5 raised to the power 2`,
            },
          ],
        },
        {
          heading: "2. Comparison Operators",
          content: [
            {
              type: "code",
              value: `a = 10\nb = 5\n\nprint(a == b)   # False\nprint(a != b)   # True\nprint(a > b)    # True\nprint(a < b)    # False\nprint(a >= b)   # True\nprint(a <= b)   # False`,
            },
          ],
        },
        {
          heading: "3. Logical Operators",
          content: [
            {
              type: "text",
              value: "There are three Logical Operators ' and ' , ' or ' and ' not '.",
            },
            {
              type: "code",
              value: `x = True\ny = False\n\nprint(x and y)   # returns True if both operands are True.\nprint(x or y)    # returns True if at least one operand is True.\nprint(not x)     # returns the opposite boolean value.`,
            },
          ],
        },
        {
          heading: "4. Assignment Operators",
          content: [
            {
              type: "code",
              value: `x = 5\nx += 3\nx -= 2\nx *= 4`,
            },
          ],
        },
        {
          heading: "5. Membership & Identity Operators",
          content: [
            {
              type: "code",
              value: `fruits = ["apple", "banana"]\n\nprint("apple" in fruits)\nprint("mango" not in fruits)\n\na = 5\nb = 5\nprint(a is b)`,
            },
          ],
        },
      ],
      // ==========================================
      // PLAYGROUND ADDED HERE
      // ==========================================
      playground: [
        {
          title: "Arithmetic",
          code: `a = 10\nb = 3\n\nprint("Addition:", a + b)\nprint("Division:", a / b)\nprint("Modulus:", a % b)\nprint("Power:", a ** b)`,
          output: "Addition: 13\nDivision: 3.3333333333333335\nModulus: 1\nPower: 1000"
        },
        {
          title: "Comparison",
          code: `x = 10\ny = 20\n\nprint("Is x equal to y?", x == y)\nprint("Is x less than y?", x < y)\nprint("Is x not equal to y?", x != y)`,
          output: "Is x equal to y? False\nIs x less than y? True\nIs x not equal to y? True"
        },
        {
          title: "Logical",
          code: `is_raining = True\nhas_umbrella = False\n\nprint("Can I go out safely?")\nprint(is_raining and has_umbrella) # Needs both\nprint(is_raining or has_umbrella)  # Needs at least one`,
          output: "Can I go out safely?\nFalse\nTrue"
        },
        {
          title: "Membership",
          code: `allowed_users = ["admin", "moderator", "writer"]\n\nprint("Is 'admin' allowed?", "admin" in allowed_users)\nprint("Is 'guest' allowed?", "guest" in allowed_users)`,
          output: "Is 'admin' allowed? True\nIs 'guest' allowed? False"
        }
      ],
      conclusion: "Operators allow you to perform calculations, comparisons, and logical operations. Mastering operators is essential for building program logic in Python.",
    },
   // ================= TOPIC 5: PYTHON Input =================
    {
      id: "python-input-function",
      title: "Python Input Function",
      intro: "The input() function is used to take input from the user. By default, it always returns the input as a string value.",
      sections: [
        {
          heading: "1. Basic Input Function",
          content: [
            {
              type: "text",
              value: "The input() function takes user input from the keyboard.",
            },
            {
              type: "code",
              value: `name = input("Enter your name: ")\nprint(name)`,
            },
          ],
        },
        {
          heading: "2. Input Always Returns String",
          content: [
            {
              type: "text",
              value: "The input() function always returns a string value, even if the user enters numbers.",
            },
            {
              type: "code",
              value: `age = input("Enter your age: ")\n\nprint(age)         # Example: 20\nprint(type(age))   # <class 'str'>`,
            },
          ],
        },
        {
          heading: "3. Converting Input to Other Data Types",
          content: [
            {
              type: "text",
              value: "To use numeric input, we need to convert it using type casting.",
            },
            {
              type: "code",
              value: `age = int(input("Enter your age: "))\nprint(age)\nprint(type(age))   # <class 'int'>`,
            },
          ],
        },
        {
          heading: "4. Multiple Inputs",
          content: [
            {
              type: "code",
              value: `a = int(input("Enter first number: "))\nb = int(input("Enter second number: "))\n\nprint(a + b)`,
            },
          ],
        },
      ],
      // ==========================================
      // PLAYGROUND ADDED HERE
      // ==========================================
      playground: [
        {
          title: "String Input",
          code: `# In real Python, we use: name = input("Enter name:")\n# Here we simulate the input:\nuser_input = "John Doe"\n\nprint("Hello,", user_input)\nprint("Type is:", type(user_input))`,
          output: "Hello, John Doe\nType is: <class 'str'>"
        },
        {
          title: "Type Casting",
          code: `# Simulating numeric input as a string\nage_input = "25"\n\nprint("Original type:", type(age_input))\n\n# Converting to Integer\nactual_age = int(age_input)\nprint("After int():", type(actual_age))\nprint("Next year you will be:", actual_age + 1)`,
          output: "Original type: <class 'str'>\nAfter int(): <class 'int'>\nNext year you will be: 26"
        }
      ],
      conclusion: "The input() function is used to take user input, and it always returns a string. Type casting is required when working with numbers.",
    },
    // ================= TOPIC 6: PYTHON Control Flow ==============
    {
      id: "conditional-statements",
      title: "Python Control Flow",
      intro: "A conditional statement helps us execute a block of code based on a specific condition.",
      sections: [
        {
          heading: "1. if Statement",
          content: [
            {
              type: "text",
              value: "The if statement executes a block of code only if the condition is True.",
            },
            {
              type: "code",
              value: `age = 18\n\nif age >= 18:\n    print("You are eligible to vote")    # execute only if age >= 18`,
            },
          ],
        },
        {
          heading: "2. if-else Statement",
          content: [
            {
              type: "text",
              value: "The else block executes when the if condition is False.",
            },
            {
              type: "code",
              value: `num = 5\n\nif num % 2 == 0:\n    print("Even Number")\nelse:\n    print("Odd Number")`,
            },
          ],
        },
        {
          heading: "3. if-elif-else Statement",
          content: [
            {
              type: "text",
              value: "The elif statement allows checking multiple conditions.",
            },
            {
              type: "code",
              value: `marks = 75\n\nif marks >= 90:\n    print("Grade A")\nelif marks >= 60:\n    print("Grade B")\nelse:\n    print("Grade C")`,
            },
          ],
        },
      ],
      // ==========================================
      // PLAYGROUND ADDED HERE
      // ==========================================
      playground: [
        {
          title: "If Statement",
          code: `temperature = 35\n\nif temperature > 30:\n    print("It is a hot day.")\n    print("Remember to drink water!")`,
          output: "It is a hot day.\nRemember to drink water!"
        },
        {
          title: "If-Else",
          code: `number = 7\n\nif number % 2 == 0:\n    print(number, "is Even")\nelse:\n    print(number, "is Odd")`,
          output: "7 is Odd"
        },
        {
          title: "Elif Ladder",
          code: `score = 85\n\nif score >= 90:\n    print("Excellent! Grade: A")\nelif score >= 75:\n    print("Good job! Grade: B")\nelif score >= 50:\n    print("You passed. Grade: C")\nelse:\n    print("Try again. Grade: F")`,
          output: "Good job! Grade: B"
        }
      ],
      conclusion: "Conditional statements help control the flow of a program by executing different blocks based on conditions.",
    },
   // ================= TOPIC 7: PYTHON Loops =====================
    {
      id: "python-loops",
      title: "Python Loops",
      intro: "Loops are used to execute a block of code repeatedly until a condition is met.",
      sections: [
        {
          heading: "1. for Loop",
          content: [
            {
              type: "text",
              value: "The for loop is used to iterate over a sequence like a list, tuple, or range.",
            },
            {
              type: "code",
              value: `for i in range(1, 6):\n    print(i)`,
            },
          ],
        },
        {
          heading: "2. while Loop",
          content: [
            {
              type: "text",
              value: "The while loop runs as long as the condition remains True.",
            },
            {
              type: "code",
              value: `count = 1\n\nwhile count <= 5:\n    print(count)\n    count += 1`,
            },
          ],
        },
        {
          heading: "3. Break, Continue and Pass",
          content: [
            {
              type: "text",
              value: "break stops the loop, continue skips the current iteration, and pass does nothing.",
            },
            {
              type: "code",
              value: `for i in range(5):\n    if i == 3:\n        break\n    print(i)           # Output - 0, 1, 2\n    \nfor i in range(6):\n  if i == 3:\n    continue\n  print(i)             # Output - 0, 1, 2, 4, 5\n\nfor i in range(6):\n  if i == 3:\n    pass\n  print(i)             # Output - 0, 1, 2, 3, 4, 5`,
            },
          ],
        },
        {
          heading: "4. range() Function",
          content: [
            {
              type: "text",
              value: "The range( ) function is used to generate a sequence of numbers.",
            },
            {
              type: "code",
              value: `Syntax: range(start, stop, step)\n\n# 1. range(stop)\nfor i in range(5):             # Generates numbers from 0 to stop-1 :- 0, 1, 2, 3, 4.\n  print(i)\n\n# 2. range(start, stop) \nfor i in range(1, 6):          # Generates numbers from start to stop-1 :- 1, 2, 3, 4, 5.\n  print(i)\n\n# 3. range(start, stop, step)\nfor i in range(1, 10, 2):      # Generates numbers with a step value :- 1, 3, 5, 7, 9.\n  print(i)\n\n# 4. range(start, stop, step)\n  for i in range(5, 0, -1):     # generate numbers in reverse order :- 5, 4, 3, 2, 1.\nprint(i)`,
            },
          ],
        },
        {
          heading: "5. else Clause in Loop",
          content: [
            {
              type: "text",
              value: "The else part executes when the loop finishes normally (without break).",
            },
            {
              type: "code",
              value: `for i in range(1, 4): \n    print(i)\nelse:\n    print("Loop finished successfully")   # Executes after the loop completes successfully.\n\nfor i in range(1, 4):\n    if i == 2:\n        break\n    print(i)\nelse:\n    print("Loop finished successfully")    # This will NOT execute. `,
            },
          ],
        },
      ],
      // ==========================================
      // PLAYGROUND ADDED HERE
      // ==========================================
      playground: [
        {
          title: "For Loop",
          code: `print("Counting to 5:")\nfor i in range(1, 6):\n    print("Number:", i)`,
          output: "Counting to 5:\nNumber: 1\nNumber: 2\nNumber: 3\nNumber: 4\nNumber: 5"
        },
        {
          title: "While Loop",
          code: `countdown = 3\nprint("Rocket launch in:")\n\nwhile countdown > 0:\n    print(countdown)\n    countdown -= 1\n\nprint("Blastoff! 🚀")`,
          output: "Rocket launch in:\n3\n2\n1\nBlastoff! 🚀"
        },
        {
          title: "Break & Continue",
          code: `for i in range(1, 6):\n    if i == 3:\n        print("Skipping 3!")\n        continue\n    if i == 5:\n        print("Breaking at 5!")\n        break\n    print("Current value:", i)`,
          output: "Current value: 1\nCurrent value: 2\nSkipping 3!\nCurrent value: 4\nBreaking at 5!"
        },
        {
          title: "For-Else",
          code: `search_target = 5\n\nfor i in range(1, 4):\n    print("Checking", i)\n    if i == search_target:\n        print("Found it!")\n        break\nelse:\n    print("Target not found in the loop.")`,
          output: "Checking 1\nChecking 2\nChecking 3\nTarget not found in the loop."
        }
      ],
      conclusion: "Loops make programs efficient by reducing repetitive code and automating repeated tasks.",
    },
   // ================= TOPIC 8: PYTHON Strings ==================
    {
      id: "python-strings",
      title: "Python Strings",
      intro: "Strings are sequences of characters used to store and manipulate text in Python.",
      sections: [
        {
          heading: "1. Creating Strings",
          content: [
            {
              type: "code",
              value: `name = "Adarsh"\nmessage = 'Hello World'`,
            },
          ],
        },
        {
          heading: "2. String Indexing and Slicing",
          content: [
            {
              type: "text",
              value: "Indexing allows accessing individual characters, and slicing extracts a portion of the string.",
            },
            {
              type: "code",
              value: `text = "Python"\n\nprint(text[0])      # P\nprint(text[0:3])    # Pyt\nprint(text[:3])     # Pyt\nprint(text[0:])     # Python\nprint(text[::])     # Python\nprint(text[5:0:-1]) # nohty`,
            },
          ],
        },
        {
          heading: "3. Python String Methods",
          content: [
            {
              type: "table",
              headers: ["Method", "Description", "Code Example", "Output"],
              rows: [
                ["upper()", "Converts to uppercase", 's="hello"; print(s.upper())', "HELLO"],
                ["lower()", "Converts to lowercase", 's="HELLO"; print(s.lower())', "hello"],
                ["title()", "Converts first letter of each word to uppercase", 's="hello world"; print(s.title())', "Hello World"],
                ["capitalize()", "Capitalizes first letter", 's="hello"; print(s.capitalize())', "Hello"],
                ["strip()", "Removes spaces from both ends", 's=" hello "; print(s.strip())', "hello"],
                ["lstrip()", "Removes spaces from left side", 's=" hello"; print(s.lstrip())', "hello"],
                ["rstrip()", "Removes spaces from right side", 's="hello "; print(s.rstrip())', "hello"],
                ["replace()", "Replaces a substring", 's="hello"; print(s.replace("h","y"))', "yello"],
                ["split()", "Splits string into a list", 's="a,b,c"; print(s.split(","))', "['a', 'b', 'c']"],
                ["join()", "Joins a list into a string", 'l=["a","b","c"]; print("-".join(l))', "a-b-c"],
                ["find()", "Returns index of first occurrence", 's="hello"; print(s.find("e"))', "1"],
                ["count()", "Counts occurrences of a substring", 's="hello"; print(s.count("l"))', "2"],
                ["startswith()", "Checks if string starts with value", 's="hello"; print(s.startswith("he"))', "True"],
                ["endswith()", "Checks if string ends with value", 's="hello"; print(s.endswith("lo"))', "True"],
                ["isalpha()", "Checks if all characters are letters", 's="hello"; print(s.isalpha())', "True"],
                ["isdigit()", "Checks if all characters are numbers", 's="123"; print(s.isdigit())', "True"],
                ["isalnum()", "Checks if characters are letters/numbers", 's="abc123"; print(s.isalnum())', "True"]
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
          title: "Case Methods",
          code: `text = "pYtHoN pRoGrAmMiNg"\n\nprint("Upper:", text.upper())\nprint("Lower:", text.lower())\nprint("Title:", text.title())\nprint("Capitalize:", text.capitalize())`,
          output: "Upper: PYTHON PROGRAMMING\nLower: python programming\nTitle: Python Programming\nCapitalize: Python programming"
        },
        {
          title: "Search & Replace",
          code: `msg = "I love apples, apples are tasty!"\n\nprint("Find 'apples':", msg.find("apples"))\nprint("Count 'apples':", msg.count("apples"))\nprint("Replace:", msg.replace("apples", "mangoes"))\nprint("Starts with 'I'?", msg.startswith("I"))\nprint("Ends with '!'?", msg.endswith("!"))`,
          output: "Find 'apples': 7\nCount 'apples': 2\nReplace: I love mangoes, mangoes are tasty!\nStarts with 'I'? True\nEnds with '!'? True"
        },
        {
          title: "Trim & Split",
          code: `dirty_text = "   HTML, CSS, Python   "\n\n# 1. Strip removes extra spaces\nclean_text = dirty_text.strip()\nprint("Stripped:", repr(clean_text))\n\n# 2. Split converts it to a list\nskills_list = clean_text.split(", ")\nprint("List:", skills_list)\n\n# 3. Join connects them back\njoined_text = " | ".join(skills_list)\nprint("Joined:", joined_text)`,
          output: "Stripped: 'HTML, CSS, Python'\nList: ['HTML', 'CSS', 'Python']\nJoined: HTML | CSS | Python"
        },
        {
          title: "Validation",
          code: `s1 = "Python"\ns2 = "2026"\ns3 = "Python2026"\n\nprint("Is 'Python' all letters?", s1.isalpha())\nprint("Is '2026' all digits?", s2.isdigit())\nprint("Is 'Python2026' letters+digits?", s3.isalnum())\nprint("Is 'Python' numbers?", s1.isdigit())`,
          output: "Is 'Python' all letters? True\nIs '2026' all digits? True\nIs 'Python2026' letters+digits? True\nIs 'Python' numbers? False"
        }
      ],
      conclusion: "Strings are powerful in Python. Mastering these built-in methods will save you a lot of time in text processing, formatting, and data cleaning tasks."
    },
  // ================= TOPIC 9: PYTHON List =====================
    {
      id: "python-lists",
      title: "Python Lists",
      intro: "Lists are used to store multiple items in a single variable. Lists are ordered, changeable (mutable), and allow duplicate values.",
      sections: [
        {
          heading: "1. Creating Lists",
          content: [
            {
              type: "text",
              value: "Square braces [ ] or the list( ) function can be used to create a List.",
            },
            {
              type: "code",
              value: `# Creating an Empty List\nmy_list = []\nmy_list = list()\n\n# Creating a List with values\nfruits = ["apple", "banana", "cherry"]\nnumbers = [1, 2, 3, 4]\n\n# List with duplicate values\nfruits = ["apple", "banana", "banana", "cherry"]\n\n# List with different data types\ndiff_data_type = ["apple", "banana", 3, 4, 5.0, [9, 7, 0]]`,
            },
          ],
        },
        {
          heading: "2. Accessing List Elements",
          content: [
            {
              type: "text",
              value: "List items are accessed using index numbers. Positive indexing starts from 0, and negative indexing starts from -1.",
            },
            {
              type: "code",
              value: `# Index :    0   1   2   3   4 \nnumbers = [10, 20, 30, 40, 50]\n# Index :   -5  -4  -3  -2  -1\n\nprint(numbers[0])   # 10\nprint(numbers[1])   # 20\nprint(numbers[-1])  # 50\nprint(numbers[1:3]) # [20, 30]`,
            },
          ],
        },
        {
          heading: "3. Python List Methods",
          content: [
            {
              type: "table",
              headers: ["Input List", "Method", "Output", "Description"],
              rows: [
                ["[1, 2, 3, 4, 5]", "append(6)", "[1, 2, 3, 4, 5, 6]", "Adds an element at the end of the list"],
                ["[1, 2, 3, 4, 5]", "extend([6, 7])", "[1, 2, 3, 4, 5, 6, 7]", "Adds multiple elements to the end"],
                ["[1, 2, 3, 4, 5]", "insert(2, 10)", "[1, 2, 10, 3, 4, 5]", "Adds element '10' at index 2"],
                ["[1, 2, 3, 4, 5]", "remove(3)", "[1, 2, 4, 5]", "Removes the first occurrence of 3"],
                ["[1, 2, 3, 4, 5]", "pop()", "[1, 2, 3, 4]", "Removes and returns the last element"],
                ["[1, 2, 3, 4, 5]", "index(4)", "3 (index of 4)", "Returns the index position of 4"],
                ["[1, 2, 3, 4, 5]", "count(3)", "1 (count of 3)", "Counts how many times 3 appears"],
                ["[5, 3, 1, 4, 2]", "sort()", "[1, 2, 3, 4, 5]", "Sorts the list in ascending order"],
                ["[1, 2, 3, 4, 5]", "sort(reverse=True)", "[5, 4, 3, 2, 1]", "Sorts the list in descending order"],
                ["[5, 4, 3, 2, 1]", "reverse()", "[1, 2, 3, 4, 5]", "Reverses the current order of the list"],
                ["[1, 2, 3, 4, 5]", "copy()", "[1, 2, 3, 4, 5]", "Returns a duplicate copy of the list"],
                ["[1, 2, 3, 4, 5]", "clear()", "[]", "Removes all elements from the list"]
              ]
            }
          ],
        },
      ],
      // ==========================================
      // PLAYGROUND ADDED HERE (4 TABS)
      // ==========================================
      playground: [
        {
          title: "Adding Items",
          code: `nums = [1, 2, 3, 4, 5]\n\nnums.append(6)\nprint("After append:", nums)\n\nnums.insert(2, 10)\nprint("After insert:", nums)\n\nnums.extend([7, 8])\nprint("After extend:", nums)`,
          output: "After append: [1, 2, 3, 4, 5, 6]\nAfter insert: [1, 2, 10, 3, 4, 5, 6]\nAfter extend: [1, 2, 10, 3, 4, 5, 6, 7, 8]"
        },
        {
          title: "Removing Items",
          code: `data = [1, 2, 3, 4, 5]\n\ndata.remove(3)\nprint("After remove:", data)\n\npopped = data.pop()\nprint("Popped item:", popped)\nprint("After pop:", data)\n\ndata.clear()\nprint("After clear:", data)`,
          output: "After remove: [1, 2, 4, 5]\nPopped item: 5\nAfter pop: [1, 2, 4]\nAfter clear: []"
        },
        {
          title: "Sort & Reverse",
          code: `values = [5, 3, 1, 4, 2]\n\nvalues.sort()\nprint("Sorted Ascending:", values)\n\nvalues.sort(reverse=True)\nprint("Sorted Descending:", values)\n\nletters = ['E', 'A', 'D', 'B', 'C']\nletters.reverse()\nprint("Just Reversed (not sorted):", letters)`,
          output: "Sorted Ascending: [1, 2, 3, 4, 5]\nSorted Descending: [5, 4, 3, 2, 1]\nJust Reversed (not sorted): ['C', 'B', 'D', 'A', 'E']"
        },
        {
          title: "Search & Copy",
          code: `items = [10, 20, 30, 20, 40]\n\nprint("Index of 30 is:", items.index(30))\nprint("Total count of 20 is:", items.count(20))\n\n# Using copy to safely modify a new list\nnew_items = items.copy()\nnew_items.append(50)\nprint("Original List:", items)\nprint("Copied & Modified List:", new_items)`,
          output: "Index of 30 is: 2\nTotal count of 20 is: 2\nOriginal List: [10, 20, 30, 20, 40]\nCopied & Modified List: [10, 20, 30, 20, 40, 50]"
        }
      ],
      conclusion: "Lists are flexible and widely used in Python for storing and modifying collections of data. Mastering list methods allows you to easily manage dynamic arrays of information.",
    },
   // ================= TOPIC 10: PYTHON Tuples ===================
    {
      id: "python-tuples",
      title: "Python Tuples",
      intro: "Tuples are similar to lists but are immutable, meaning their values cannot be changed after creation. They are ordered and allow duplicate values.",
      sections: [
        {
          heading: "1. Creating Tuples",
          content: [
            {
              type: "text",
              value: "Parentheses ( ), comma-separated values or the tuple( ) function can be used to create tuple.",
            },
            {
              type: "code",
              value: `# Create Empty tuple\nnumbers = ()                      # <class 'tuple'>\n\n# Tuple without brackets\nnumbers = 10, 20, 30              # <class 'tuple'>\nnumbers = 10                      # <class 'int'>\n\n# Tuple without brackets with single value\nnumbers = 10,                     # <class 'tuple'>`,
            },
          ],
        },
        {
          heading: "2. Accessing Tuple Elements",
          content: [
            {
              type: "text",
              value: "Tuple elements are accessed using index numbers just like lists.",
            },
            {
              type: "code",
              value: `numbers = (10, 20, 30)\nprint(numbers[0])   # 10\nprint(numbers[2])   # 30\nprint(numbers[-1])  # 30`,
            },
          ],
        },
        {
          heading: "3. Tuple Immutability",
          content: [
            {
              type: "text",
              value: "Tuple values cannot be modified after creation. If you try to change a value, it will throw an error.",
            },
            {
              type: "code",
              value: `numbers = (10, 20, 30)\nnumbers[0] = 100     # TypeError: 'tuple' object does not support item assignment`,
            },
          ],
        },
        {
          heading: "4. Tuple Methods",
          content: [
            {
              type: "text",
              value: "Because tuples are unchangeable, they only have two built-in methods.",
            },
            {
              type: "table",
              headers: ["Input Tuple", "Method", "Output", "Description"],
              rows: [
                ["(1, 2, 3, 1, 1)", "count(1)", "3", "Returns the number of times 1 appears"],
                ["(10, 20, 30, 40)", "index(30)", "2", "Searches for 30 and returns its position"]
              ]
            }
          ]
        }
      ],
      // ==========================================
      // PLAYGROUND ADDED HERE 
      // ==========================================
      playground: [
        {
          title: "Create & Access",
          code: `fruits = ("apple", "banana", "cherry")\n\nprint("Tuple:", fruits)\nprint("First item:", fruits[0])\nprint("Last item:", fruits[-1])\nprint("Length:", len(fruits))`,
          output: "Tuple: ('apple', 'banana', 'cherry')\nFirst item: apple\nLast item: cherry\nLength: 3"
        },
        {
          title: "Tuple Methods",
          code: `data = (10, 20, 30, 20, 40, 20)\n\nprint("How many times does 20 appear?", data.count(20))\nprint("What is the index position of 30?", data.index(30))`,
          output: "How many times does 20 appear? 3\nWhat is the index position of 30? 2"
        }
      ],
      conclusion: "Tuples are useful when you want to store data that should not be changed (like configuration settings or fixed coordinates).",
    },
    // ================= TOPIC 11: PYTHON Sets =====================
    {
      id: "python-sets",
      title: "Python Sets",
      intro: "A set is an unordered collection with no duplicate elements. Basic uses include membership testing and eliminating duplicate entries. Set objects also support mathematical operations like union, intersection, difference, and symmetric difference.",
      sections: [
        {
          heading: "1. Creating Sets",
          content: [
            {
              type: "text",
              value: "Curly braces { } or the set( ) function can be used to create sets.",
            },
            {
              type: "code",
              value: `# Creating an empty set\nnumbers = set()      # <class 'set'>\n\n# {} creates an empty dictionary, not a set\nnumbers = {}         # <class 'dict'>\n\n# Creating sets with values\nnumbers = {2}        # <class 'set'>\nnumbers = {1, 2, 3}  # <class 'set'>`,
            },
          ],
        },
        {
          heading: "2. Set Characteristics",
          content: [
            {
              type: "text",
              value: "Sets are unordered and do not allow duplicate values.",
            },
            {
              type: "code",
              value: `# Sets are unordered\nnames = {"w3coder", "adarsh", "sumit", "Mohit"}\nprint(names)   # {'adarsh', 'sumit', 'w3coder', 'Mohit'}\n              \n# Sets do not allow duplicate values\nname = set("adarshshakya")\nprint(name)    # {'d', 'r', 'h', 'y', 'k', 'a', 's'}`,
            },
          ],
        },
        {
          heading: "3. Mathematical Operations",
          content: [
            {
              type: "text",
              value: "Set objects support mathematical operations like union, intersection, difference and symmetric difference.",
            },
            {
              type: "code",
              value: `A = {1, 2, 3, 4}\nB = {3, 4, 5, 6}\n\n# 1. Union (all unique elements from both sets)\nprint(A | B)        # {1, 2, 3, 4, 5, 6}\n\n# 2. Intersection (common elements in both sets)\nprint(A & B)        # {3, 4}\n\n# 3. Difference (elements in A but not in B)\nprint(A - B)        # {1, 2}\n\n# 4. Symmetric Difference (elements in A and B but not both)\nprint(A ^ B)        # {1, 2, 5, 6}\n\n# Alternative Method (Using Functions)\nprint(A.union(B))\nprint(A.intersection(B))\nprint(A.difference(B))\nprint(A.symmetric_difference(B))`,
            },
          ],
        },
        {
          heading: "4. Python Set Methods",
          content: [
            {
              type: "table",
              headers: ["Input Set", "Method", "Output", "Description"],
              rows: [
                ["{1, 2}", "add(3)", "{1, 2, 3}", "Adds an element to the set"],
                ["{1, 2, 3}", "remove(2)", "{1, 3}", "Removes element. Raises error if not found"],
                ["{1, 2, 3}", "discard(2)", "{1, 3}", "Removes element. Does NOT raise error if missing"],
                ["{1, 2}", "clear()", "set()", "Removes all elements from the set"],
                ["{1, 2}", "update({3, 4})", "{1, 2, 3, 4}", "Update the set with another set"]
              ]
            }
          ]
        }
      ],
      // ==========================================
      // PLAYGROUND ADDED HERE (3 TABS)
      // ==========================================
      playground: [
        {
          title: "Duplicates & Order",
          code: `# Sets automatically remove duplicates\nnumbers = {1, 2, 2, 3, 3, 3, 4, 4, 4, 4}\nprint("Unique numbers:", numbers)\n\n# Sets are unordered (output order may vary)\nwords = {"apple", "banana", "cherry"}\nprint("Set of words:", words)`,
          output: "Unique numbers: {1, 2, 3, 4}\nSet of words: {'banana', 'cherry', 'apple'}"
        },
        {
          title: "Add & Remove",
          code: `my_set = {10, 20, 30}\n\nmy_set.add(40)\nprint("After adding 40:", my_set)\n\nmy_set.remove(20)\nprint("After removing 20:", my_set)\n\n# discard doesn't throw error if item is not there\nmy_set.discard(100) \nprint("After discarding 100:", my_set)`,
          output: "After adding 40: {40, 10, 20, 30}\nAfter removing 20: {40, 10, 30}\nAfter discarding 100: {40, 10, 30}"
        },
        {
          title: "Set Math",
          code: `set_A = {1, 2, 3, 4}\nset_B = {3, 4, 5, 6}\n\nprint("A Union B ( | ):", set_A | set_B)\nprint("A Intersection B ( & ):", set_A & set_B)\nprint("A Difference B ( - ):", set_A - set_B)\nprint("A Symmetric Difference B ( ^ ):", set_A ^ set_B)`,
          output: "A Union B ( | ): {1, 2, 3, 4, 5, 6}\nA Intersection B ( & ): {3, 4}\nA Difference B ( - ): {1, 2}\nA Symmetric Difference B ( ^ ): {1, 2, 5, 6}"
        }
      ],
      conclusion: "Sets are useful when you need unique values and do not care about order. They are heavily used in mathematical operations like finding common friends or unique visitors.",
    },
   // ================= TOPIC 12: PYTHON Dictionaries ===============
    {
      id: "python-dictionaries",
      title: "Python Dictionaries",
      intro: "It is best to think of a dictionary as a set of key: value pairs, with the requirement that the keys are unique (within one dictionary). A pair of braces creates an empty dictionary: { }.",
      sections: [
        {
          heading: "1. Creating Dictionaries",
          content: [
            {
              type: "code",
              value: `student = {\n    "name": "Adarsh",\n    "age": 20,\n    "course": "Python"\n}\nprint(student)`,
            },
          ],
        },
        {
          heading: "2. Accessing Dictionary Values",
          content: [
            {
              type: "text",
              value: "Values are accessed using their corresponding keys.",
            },
            {
              type: "code",
              value: `print(student["name"])   # Adarsh`,
            },
          ],
        },
        {
          heading: "3. Python Dictionary Methods",
          content: [
            {
              type: "table",
              headers: ["Input Dict", "Method", "Output", "Description"],
              rows: [
                ["d = {'a': 1}", "d.get('a')", "1", "Returns the value of the specified key"],
                ["d = {'a': 1}", "d.keys()", "dict_keys(['a'])", "Returns a list containing the dictionary's keys"],
                ["d = {'a': 1}", "d.values()", "dict_values([1])", "Returns a list of all the values in the dictionary"],
                ["d = {'a': 1}", "d.items()", "dict_items([('a', 1)])", "Returns a list containing a tuple for each key value pair"],
                ["d = {'a': 1}", "d.update({'b': 2})", "{'a': 1, 'b': 2}", "Updates the dictionary with the specified key-value pairs"],
                ["d = {'a': 1, 'b': 2}", "d.pop('a')", "1 (d becomes {'b': 2})", "Removes the element with the specified key"],
                ["d = {'a': 1, 'b': 2}", "d.popitem()", "('b', 2) removed", "Removes the last inserted key-value pair"],
                ["d = {'a': 1}", "d.clear()", "{}", "Removes all elements from the dictionary"]
              ]
            }
          ]
        }
      ],
      // ==========================================
      // PLAYGROUND ADDED HERE (3 TABS)
      // ==========================================
      playground: [
        {
          title: "Access & Get",
          code: `user = {"name": "W3coder", "role": "Admin", "age": 25}\n\nprint("Using Key:", user["name"])\nprint("Using Get:", user.get("role"))\n\n# Get is safer if key doesn't exist\nprint("Missing Key:", user.get("salary", "Not Found"))\n\nprint("\\nAll Keys:", list(user.keys()))\nprint("All Values:", list(user.values()))`,
          output: "Using Key: W3coder\nUsing Get: Admin\nMissing Key: Not Found\n\nAll Keys: ['name', 'role', 'age']\nAll Values: ['W3coder', 'Admin', 25]"
        },
        {
          title: "Add & Update",
          code: `car = {\n  "brand": "Ford",\n  "model": "Mustang"\n}\n\n# Direct Assignment\ncar["year"] = 2024\nprint("Added Year:", car)\n\n# Using update method (can add/update multiple)\ncar.update({"color": "Red", "model": "Mach-E"})\nprint("After Update:", car)`,
          output: "Added Year: {'brand': 'Ford', 'model': 'Mustang', 'year': 2024}\nAfter Update: {'brand': 'Ford', 'model': 'Mach-E', 'year': 2024, 'color': 'Red'}"
        },
        {
          title: "Remove Items",
          code: `data = {"A": 10, "B": 20, "C": 30, "D": 40}\nprint("Original:", data)\n\n# pop removes specific key\nremoved_val = data.pop("B")\nprint(f"Popped 'B' ({removed_val}):", data)\n\n# popitem removes the last inserted pair\nlast_pair = data.popitem()\nprint(f"Popped last item {last_pair}:", data)\n\n# clear empties the dictionary\ndata.clear()\nprint("After clear:", data)`,
          output: "Original: {'A': 10, 'B': 20, 'C': 30, 'D': 40}\nPopped 'B' (20): {'A': 10, 'C': 30, 'D': 40}\nPopped last item ('D', 40): {'A': 10, 'C': 30}\nAfter clear: {}"
        }
      ],
      conclusion: "Dictionaries are powerful data structures for storing related data using key-value pairs. They are highly optimized for retrieving data quickly when you know the key.",
    },
   // ================= TOPIC 13: PYTHON functions =================
    {
      id: "python-functions",
      title: "Python Functions",
      intro: "A function is a block of code that performs a specific task. It can be reused by calling its name, which helps avoid writing the same code multiple times.",
      sections: [
        {
          heading: "1. Creating a Function",
          content: [
            {
              type: "text",
              value: "In Python, functions are defined using the def keyword followed by the function name and parentheses.",
            },
            {
              type: "code",
              value: `def greet():\n    print("Hello, Welcome to Python")\n\ngreet()`,
            },
          ],
        },
        {
          heading: "2. Types of Functions",
          content: [
            {
              type: "text",
              value: "In Python, There are two types of functions.",
            },
            {
              type: "code",
              value: `# Built-in functions.\n1. print("Hello")\n2. input("Enter your name") # etc..\n\n\n# User-defined functions\ndef sum(a, b):\n  result= a+b\n  return result\n        \n# function call\nprint(sum(3, 4)) #7`,
            },
          ],
        },
        {
          heading: "3. Function with Parameters",
          content: [
            {
              type: "text",
              value: "Parameters allow passing values into a function so it can work with different inputs.",
            },
            {
              type: "code",
              value: `def greet(name):\n    print("Hello", name)\n\ngreet("Adarsh")`,
            },
          ],
        },
        {
          heading: "4. Function with Return Value",
          content: [
            {
              type: "text",
              value: "A function can return a value using the return keyword.",
            },
            {
              type: "code",
              value: `def add(a, b):\n    return a + b\n\nresult = add(5, 3)\nprint(result)   # 8`,
            },
          ],
        },
        {
          heading: "5. Default Parameters",
          content: [
            {
              type: "text",
              value: "Default parameters allow a function to use a default value if no argument is provided.",
            },
            {
              type: "code",
              value: `def greet(name="Guest"):\n    print("Hello", name)\n\ngreet()\ngreet("Adarsh")`,
            },
          ],
        },
      ],
      // ==========================================
      // PLAYGROUND ADDED HERE (3 TABS)
      // ==========================================
      playground: [
        {
          title: "Basic & Params",
          code: `def welcome(name, course):\n    print(f"Welcome {name}!")\n    print(f"Good luck with your {course} course.\\n")\n\n# Calling the function with different data\nwelcome("Adarsh", "Python")\nwelcome("Sumit", "React")`,
          output: "Welcome Adarsh!\nGood luck with your Python course.\n\nWelcome Sumit!\nGood luck with your React course.\n"
        },
        {
          title: "Return Values",
          code: `def calculate_square(number):\n    square = number * number\n    return square\n\n# Getting data back from function\nresult1 = calculate_square(4)\nresult2 = calculate_square(10)\n\nprint("Square of 4 is:", result1)\nprint("Square of 10 is:", result2)`,
          output: "Square of 4 is: 16\nSquare of 10 is: 100"
        },
        {
          title: "Default Params",
          code: `def make_coffee(type="Black Coffee"):\n    print(f"Preparing a hot cup of {type} ☕")\n\n# Calling WITHOUT argument (uses default)\nmake_coffee()\n\n# Calling WITH argument (overrides default)\nmake_coffee("Cappuccino")\nmake_coffee("Latte")`,
          output: "Preparing a hot cup of Black Coffee ☕\nPreparing a hot cup of Cappuccino ☕\nPreparing a hot cup of Latte ☕"
        }
      ],
      conclusion: "Functions help make code reusable, organized, and easier to maintain in Python programs.",
    },
    // ================= TOPIC 14: PYTHON Modules =================
    {
      id: "python-modules",
      title: "Python Modules",
      intro: "A module is a file containing Python code (functions, variables, or classes) that can be reused in other programs. Modules help organize code and make it more manageable.",
      sections: [
        {
          heading: "1. Importing a Module",
          content: [
            {
              type: "text",
              value: "We can use built-in modules by importing them using the import keyword.",
            },
            {
              type: "code",
              value: `import math\n\nprint(math.sqrt(16))   # 4.0\nprint(math.pi)         # 3.141592653589793`,
            },
          ],
        },
        {
          heading: "2. Import Specific Items",
          content: [
            {
              type: "text",
              value: "We can import specific functions or variables from a module using the from keyword.",
            },
            {
              type: "code",
              value: `from math import sqrt, pi\n\nprint(sqrt(25))   # 5.0\nprint(pi)`,
            },
          ],
        },
        {
          heading: "3. Using Alias (as)",
          content: [
            {
              type: "text",
              value: "We can give a module a short name using the as keyword.",
            },
            {
              type: "code",
              value: `import math as m\n\nprint(m.sqrt(36))   # 6.0`,
            },
          ],
        },
        {
          heading: "4. User-defined Modules",
          content: [
            {
              type: "text",
              value: "We can create our own module by saving Python code in a file and importing it.",
            },
            {
              type: "code",
              value: `# mymodule.py\ndef greet(name):\n    return "Hello " + name\n\n\n# main.py\nimport mymodule\n\nprint(mymodule.greet("Adarsh"))`,
            },
          ],
        },
      ],
      // ==========================================
      // PLAYGROUND ADDED HERE (2 TABS)
      // ==========================================
      playground: [
        {
          title: "Math Module",
          code: `import math\n\nnumber = 49\nprint(f"Square root of {number} is:", math.sqrt(number))\n\nprint("Value of PI is:", math.pi)\n\n# math.ceil rounds UP to nearest integer\nprint("Ceiling of 4.2 is:", math.ceil(4.2))`,
          output: "Square root of 49 is: 7.0\nValue of PI is: 3.141592653589793\nCeiling of 4.2 is: 5"
        },
        {
          title: "Random Module",
          code: `import random\n\n# Generate a random integer between 1 and 10\nlucky_number = random.randint(1, 10)\nprint("Your lucky number is:", lucky_number)\n\n# Pick a random choice from a list\ncolors = ["Red", "Blue", "Green", "Yellow"]\nrandom_color = random.choice(colors)\nprint("Randomly selected color:", random_color)`,
          output: "Your lucky number is: 7\nRandomly selected color: Blue"
        }
      ],
      conclusion: "Modules help in code reusability and organization by allowing us to use functions and variables from other files.",
    },
   // ================= TOPIC 15: PYTHON Packages  =================
    {
      id: "python-packages",
      title: "Python Packages",
      intro: "A package is a collection of multiple Python modules organized in a folder. It helps structure large projects and makes code easier to manage.",
      sections: [
        {
          heading: "1. What is a Package?",
          content: [
            {
              type: "text",
              value: "A package is a directory (folder) that contains multiple Python modules and a special file called __init__.py.",
            },
          ],
        },
        {
          heading: "2. Creating a Package",
          content: [
            {
              type: "text",
              value: "To create a package, create a folder and add Python modules inside it along with an __init__.py file.",
            },
            {
              type: "code",
              value: `# Folder Structure\nmypackage/\n    __init__.py\n    module1.py\n    module2.py`,
            },
          ],
        },
        {
          heading: "3. Importing from a Package",
          content: [
            {
              type: "text",
              value: "We can import modules or functions from a package using dot (.) notation.",
            },
            {
              type: "code",
              value: `# Import full module\nimport mypackage.module1\n\n# Import specific function\nfrom mypackage.module1 import greet\n\ngreet("Adarsh")`,
            },
          ],
        },
        {
          heading: "4. Using __init__.py",
          content: [
            {
              type: "text",
              value: "__init__.py is used to mark a folder as a package. It can also be used to initialize package-level variables or import modules.",
            },
            {
              type: "code",
              value: `# __init__.py\nfrom .module1 import greet`,
            },
          ],
        },
      ],
      // ==========================================
      // PLAYGROUND ADDED HERE (Built-in Packages)
      // ==========================================
      playground: [
        {
          title: "Built-in Packages",
          code: `# In this web terminal, we cannot create folders.\n# But we can test importing from Python's built-in packages!\n\nimport json\n\n# JSON is a built-in Python package\ndata_string = '{"name": "W3coder", "language": "Python"}'\n\n# Convert string to a real Python dictionary\nparsed_data = json.loads(data_string)\n\nprint("Name:", parsed_data["name"])\nprint("Language:", parsed_data["language"])`,
          output: "Name: W3coder\nLanguage: Python"
        },
        {
          title: "Sub-modules",
          code: `# Importing a specific sub-module from a package\nfrom urllib import request\n\nprint("urllib is the package.")\nprint("request is the module inside the package.")\nprint("Normally we use this to fetch data from the internet!")`,
          output: "urllib is the package.\nrequest is the module inside the package.\nNormally we use this to fetch data from the internet!"
        }
      ],
      conclusion: "Packages help organize large Python projects by grouping related modules together, making code more structured and reusable.",
    },
    // ================= TOPIC 16: PYTHON file handling  ===========
    {
      id: "python-file-handling",
      title: "Python File Handling",
      intro: "File handling is used to read, write, and manage files in Python. It allows programs to store and retrieve data from files.",
      sections: [
        {
          heading: "1. Opening a File",
          content: [
            {
              type: "text",
              value: "We use the open() function to open a file. It takes the file name and mode as arguments.",
            },
            {
              type: "code",
              value: `# Syntax : file_object = open('filename', 'mode')\n# 'filename': Name of the file with path.\n# 'mode': Mode in which the file is opened (read, write, append, etc).\n\nfile = open("data.txt", "r")   # r = read mode\nfile.close()`,
            },
          ],
        },
        {
          heading: "2. File Modes",
          content: [
            {
              type: "text",
              value: "Different modes are used to perform different operations on files.",
            },
            {
              type: "code",
              value: `# r  -> Read (default). Opens the file for reading.\n# w  -> Write (overwrite file). Opens the file for writing (if file doesn't exist, it creates one).\n# a  -> Append (add data). Opens the file for appending (if file doesn't exist, it creates one).\n# rb/wb  -> Read/Write in binary mode.\n\nfile = open("data.txt", "w")`,
            },
          ],
        },
        {
          heading: "3. Reading from a File",
          content: [
            {
              type: "code",
              value: `file = open("data.txt", "r")\n\nprint(file.read())      # Read full file\n# print(file.readline())  # Read one line\n# print(file.readlines()) # Read all lines as list\n\nfile.close()`,
            },
          ],
        },
        {
          heading: "4. Writing to a File",
          content: [
            {
              type: "code",
              value: `file = open("data.txt", "w")\n\nfile.write("Hello, Python File Handling")\n\nfile.close()`,
            },
          ],
        },
        {
          heading: "5. Using 'with' Statement",
          content: [
            {
              type: "text",
              value: "Using 'with' automatically closes the file, so we do not need to call close().",
            },
            {
              type: "code",
              value: `with open("data.txt", "r") as file:\n    print(file.read())`,
            },
          ],
        },
      ],
      // ==========================================
      // PLAYGROUND ADDED HERE (3 TABS)
      // ==========================================
      playground: [
        {
          title: "Write & Read",
          code: `# 1. Write data to a new file\nfile1 = open("demo.txt", "w")\nfile1.write("Hello from W3coder!\\nThis is a Python tutorial.")\nfile1.close()\nprint("✅ Data written to file successfully.\\n")\n\n# 2. Read the data back\nfile2 = open("demo.txt", "r")\ncontent = file2.read()\nprint("📄 File Content:\\n" + content)\nfile2.close()`,
          output: "✅ Data written to file successfully.\n\n📄 File Content:\nHello from W3coder!\nThis is a Python tutorial."
        },
        {
          title: "Append Mode ('a')",
          code: `# 'a' mode adds text to the end without deleting old data\nfile = open("demo.txt", "a")\nfile.write("\\nLearning file handling is fun!")\nfile.close()\n\n# Let's read it to see the changes\nfile = open("demo.txt", "r")\nprint(file.read())\nfile.close()`,
          output: "Hello from W3coder!\nThis is a Python tutorial.\nLearning file handling is fun!"
        },
        {
          title: "Using 'with'",
          code: `# The 'with' keyword is the best practice.\n# It automatically closes the file even if an error occurs!\n\nwith open("demo.txt", "w") as f:\n    f.write("Writing data using 'with' statement.")\n    print("Inside 'with' block, is file closed?", f.closed)\n\n# Outside the block\nprint("Outside 'with' block, is file closed?", f.closed)`,
          output: "Inside 'with' block, is file closed? False\nOutside 'with' block, is file closed? True"
        }
      ],
      conclusion: "File handling is important for storing and retrieving data. Using the 'with' statement is highly recommended as it automatically manages file closing and prevents memory leaks.",
    },
    // ================= TOPIC 17: PYTHON Lambda  =================
    {
      id: "python-lambda",
      title: "Python Lambda Functions",
      intro: "A lambda function is a small anonymous function defined using the lambda keyword. It can have any number of arguments but only one expression.",
      sections: [
        {
          heading: "1. Basic Lambda Function",
          content: [
            {
              type: "text",
              value: "Lambda functions are used for short, simple operations without defining a full function using def.",
            },
            {
              type: "code",
              value: `# Normal function\ndef square(x):\n    return x * x\n\n# Lambda function\nsquare = lambda x: x * x\n\nprint(square(5))   # 25`,
            },
          ],
        },
        {
          heading: "2. Lambda with Multiple Arguments",
          content: [
            {
              type: "code",
              value: `add = lambda a, b: a + b\n\nprint(add(3, 4))   # 7`,
            },
          ],
        },
        {
          heading: "3. Using Lambda with map()",
          content: [
            {
              type: "text",
              value: "map() applies a function to all items in an iterable.",
            },
            {
              type: "code",
              value: `numbers = [1, 2, 3, 4]\n\nresult = list(map(lambda x: x * 2, numbers))\nprint(result)   # [2, 4, 6, 8]`,
            },
          ],
        },
        {
          heading: "4. Using Lambda with filter()",
          content: [
            {
              type: "text",
              value: "filter() selects elements based on a condition.",
            },
            {
              type: "code",
              value: `numbers = [1, 2, 3, 4, 5]\n\nresult = list(filter(lambda x: x % 2 == 0, numbers))\nprint(result)   # [2, 4]`,
            },
          ],
        },
      ],
      // ==========================================
      // PLAYGROUND ADDED HERE (3 TABS)
      // ==========================================
      playground: [
        {
          title: "Basic & Multi-Args",
          code: `# A lambda for squaring a number\nsquare = lambda x: x ** 2 \n\n# A lambda for adding 3 numbers\nadd = lambda a, b, c: a + b + c \n\nprint("Square of 6:", square(6))\nprint("Sum of 10, 20, 30:", add(10, 20, 30))`,
          output: "Square of 6: 36\nSum of 10, 20, 30: 60"
        },
        {
          title: "Lambda with map()",
          code: `prices = [100, 200, 300]\n\n# Real-world use: Add 18% GST to all prices\nfinal_prices = list(map(lambda x: x + (x * 0.18), prices))\n\nprint("Original Prices:", prices)\nprint("Prices with GST:", final_prices)`,
          output: "Original Prices: [100, 200, 300]\nPrices with GST: [118.0, 236.0, 354.0]"
        },
        {
          title: "Lambda with filter()",
          code: `ages = [12, 18, 25, 9, 30, 16]\n\n# Real-world use: Filter out minors (age < 18)\nadults = list(filter(lambda age: age >= 18, ages))\n\nprint("All ages:", ages)\nprint("Adults only:", adults)`,
          output: "All ages: [12, 18, 25, 9, 30, 16]\nAdults only: [18, 25, 30]"
        }
      ],
      conclusion: "Lambda functions are highly useful for short, throwaway operations, especially when passing simple operations as arguments to higher-order functions like map(), filter(), and reduce().",
    },
   // ================= TOPIC 18: PYTHON OOPs =================
    {
      id: "python-oops",
      title: "Python OOPs (Object-Oriented Programming)",
      intro: "Object-Oriented Programming (OOP) is a programming paradigm based on the concept of 'objects'. It helps in organizing code, improving reusability, and modeling real-world entities inside your applications.",
      sections: [
        {
          heading: "1. Procedural vs Object-Oriented",
          content: [
            {
              type: "text",
              value: "Before OOP, programs were written step-by-step using functions (Procedural). OOP changes this by grouping data and functions together into units called Objects.",
            },
            {
              type: "list-html",
              items: [
                "<strong>Procedural Programming:</strong> Focuses purely on writing functions and logic.",
                "<strong>Object-Oriented Programming:</strong> Focuses on creating objects that contain both data and the functions that manipulate that data."
              ],
            },
          ],
        },
        {
          heading: "2. Classes and Objects",
          content: [
            {
              type: "text",
              value: "A <strong>Class</strong> is like a blueprint or a template. An <strong>Object</strong> is a real, physical entity created using that blueprint.",
            },
            {
              type: "code",
              value: `# The Blueprint (Class)\nclass Student:\n    platform = "W3coder"\n\n# The Real Entities (Objects)\nstudent1 = Student()\nstudent2 = Student()\n\nprint(student1.platform)  # W3coder\nprint(student2.platform)  # W3coder`,
            },
          ],
        },
        {
          heading: "3. The __init__() Constructor & self",
          content: [
            {
              type: "text",
              value: "The <code>__init__()</code> function is a special constructor method. It is automatically called whenever a new object is created. The <code>self</code> keyword represents the specific object being created.",
            },
            {
              type: "code",
              value: `class User:\n    def __init__(self, name, age):\n        self.name = name  # Assigning to the object\n        self.age = age\n\n    def show_profile(self):\n        print(f"Name: {self.name}, Age: {self.age}")\n\nuser1 = User("Adarsh", 22)\nuser1.show_profile()`,
            },
          ],
        },
        {
          heading: "4. The Four Pillars of OOP",
          content: [
            {
              type: "text",
              value: "The entire concept of Object-Oriented Programming stands on four main pillars:",
            },
            {
              type: "table",
              headers: ["Pillar", "Meaning", "Real-World Example"],
              rows: [
                ["Inheritance", "Passing traits from parent to child", "A 'Car' inherits features from a general 'Vehicle'"],
                ["Encapsulation", "Hiding data to protect it", "A bank account password cannot be directly accessed"],
                ["Polymorphism", "One thing, many forms", "A smartphone can act as a phone, camera, or calculator"],
                ["Abstraction", "Hiding internal complexity", "Pressing the accelerator without knowing how the engine works"]
              ]
            }
          ],
        },
        {
          heading: "5. Pillar 1: Inheritance",
          content: [
            {
              type: "text",
              value: "Inheritance allows a child class to inherit properties and methods from a parent class, saving you from writing the same code twice.",
            },
            {
              type: "code",
              value: `class Person:                   # Parent Class\n    def __init__(self, name):\n        self.name = name\n\nclass Student(Person):          # Child Class (Inherits Person)\n    def study(self):\n        print(self.name, "is studying Python.")\n\ns1 = Student("Sumit")\ns1.study()                      # Sumit is studying Python.`,
            },
          ],
        },
        {
          heading: "6. Pillar 2: Encapsulation",
          content: [
            {
              type: "text",
              value: "Encapsulation restricts direct access to some of an object's components. In Python, we use double underscores <code>__</code> to make variables private.",
            },
            {
              type: "code",
              value: `class BankAccount:\n    def __init__(self):\n        self.__balance = 1000   # Private Variable\n\n    def get_balance(self):      # Public Method to access private data\n        return self.__balance\n\naccount = BankAccount()\n# print(account.__balance)    # This will throw an Error!\nprint(account.get_balance())  # 1000`,
            },
          ],
        },
        {
          heading: "7. Pillar 3: Polymorphism",
          content: [
            {
              type: "text",
              value: "Polymorphism means 'many forms'. It allows different classes to have methods with the same exact name, but different behaviors.",
            },
            {
              type: "code",
              value: `class Dog:\n    def sound(self):\n        return "Bark!"\n\nclass Cat:\n    def sound(self):\n        return "Meow!"\n\nanimals = [Dog(), Cat()]\nfor pet in animals:\n    print(pet.sound())`,
            },
          ],
        },
        {
          heading: "8. Pillar 4: Abstraction",
          content: [
            {
              type: "text",
              value: "Abstraction hides the complex implementation details and only shows the essential features. It is achieved using abstract classes.",
            },
            {
              type: "code",
              value: `from abc import ABC, abstractmethod\n\nclass Shape(ABC):              # Abstract Class\n    @abstractmethod\n    def area(self):\n        pass\n\nclass Square(Shape):\n    def area(self):\n        return "Calculating area of Square..."\n\ns = Square()\nprint(s.area())`,
            },
          ],
        },
      ],
      // ==========================================
      // PLAYGROUND ADDED HERE (NOW 5 TABS!)
      // ==========================================
      playground: [
        {
          title: "Classes",
          code: `class Course:\n    def __init__(self, title, instructor):\n        self.title = title\n        self.instructor = instructor\n\n    def display_details(self):\n        print(f"Course: {self.title}")\n        print(f"By: {self.instructor}\\n")\n\n# Creating objects\ncourse1 = Course("Python Mastery", "W3coder")\ncourse2 = Course("React JS", "W3coder")\n\ncourse1.display_details()\ncourse2.display_details()`,
          output: "Course: Python Mastery\nBy: W3coder\n\nCourse: React JS\nBy: W3coder\n"
        },
        {
          title: "Inheritance",
          code: `# Parent Class\nclass Employee:\n    def __init__(self, name, salary):\n        self.name = name\n        self.salary = salary\n\n# Child Class\nclass Developer(Employee):\n    def __init__(self, name, salary, language):\n        super().__init__(name, salary) # Call parent constructor\n        self.language = language\n\n    def show(self):\n        print(f"{self.name} codes in {self.language} and earns ${self.salary}")\n\ndev = Developer("Adarsh", 80000, "Python")\ndev.show()`,
          output: "Adarsh codes in Python and earns $80000"
        },
        {
          title: "Encapsulation",
          code: `class UserAccount:\n    def __init__(self, username, password):\n        self.username = username\n        self.__password = password  # __ makes it PRIVATE\n\n    # Getter method to safely verify password\n    def check_password(self, attempt):\n        if attempt == self.__password:\n            return "Access Granted!"\n        else:\n            return "Access Denied!"\n\nuser = UserAccount("admin", "secure123")\nprint("Username is PUBLIC:", user.username)\n\n# Verifying securely\nprint("Attempt 1:", user.check_password("wrongpass"))\nprint("Attempt 2:", user.check_password("secure123"))`,
          output: "Username is PUBLIC: admin\nAttempt 1: Access Denied!\nAttempt 2: Access Granted!"
        },
        {
          title: "Polymorphism",
          code: `# Polymorphism: Same function name, different behavior\ndef add(a, b):\n    return a + b\n\n# Working with Integers\nprint("Numbers:", add(10, 20))\n\n# Working with Strings\nprint("Strings:", add("Hello ", "World!"))\n\n# Working with Lists\nprint("Lists:", add([1, 2], [3, 4]))`,
          output: "Numbers: 30\nStrings: Hello World!\nLists: [1, 2, 3, 4]"
        },
        {
          title: "Abstraction",
          code: `from abc import ABC, abstractmethod\n\n# Abstract Class (Blueprint for other classes)\nclass Vehicle(ABC):\n    @abstractmethod\n    def start_engine(self):\n        pass  # Implementation is hidden/empty\n\n# Concrete Classes\nclass Car(Vehicle):\n    def start_engine(self):\n        return "🚗 Car engine started with a Key!"\n\nclass Bike(Vehicle):\n    def start_engine(self):\n        return "🏍️ Bike engine started with a Button!"\n\n# You CANNOT create an object of Vehicle: v = Vehicle() will throw error\n\nmy_car = Car()\nmy_bike = Bike()\n\nprint(my_car.start_engine())\nprint(my_bike.start_engine())`,
          output: "🚗 Car engine started with a Key!\n🏍️ Bike engine started with a Button!"
        }
      ],
      conclusion: "OOP makes programming more structured and powerful. By mastering Classes, Objects, and the four pillars (Encapsulation, Inheritance, Polymorphism, and Abstraction), you can build scalable, secure, and maintainable real-world applications.",
    }
     ],
     };





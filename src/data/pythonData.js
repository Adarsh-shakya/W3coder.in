//  python Variable - done almost
//  python data type - done almost
// python Operators  - done almost
// python Conditional Statements
//  python Loops
// python Strings
// python Lists
// python Tuples
// python Sets
// python Dictionaries
// python Functions

export const pythonData = {
  subjectTitle: "Python ",
  subjectCode: "python", // URL me /course/python dikhega
  topics: [
    // ================= TOPIC 1: PYTHON variables =================
    {
      id: "variables",
      title: "Python Variables",
      intro:
        "A variable is a basic concept in all programming languages. It is used to store data values. In Python, variables are dynamically typed, which means you do not need to declare the data type explicitly before assigning a value.",
      sections: [
        {
          heading: "1. Creating Variables",
          content: [
            {
              type: "text",
              value:
                "We need an assignment operator (=) to create a variable. Python automatically identifies the data type based on the assigned value.",
            },
            {
              type: "code",
              value: `marks = 80   
name = "W3coder"
price = 99.99`,
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
              value: `# 1. Must start with a letter or underscore
# ✅ Correct
age = 20
_name = "W3coder"

# ❌ Wrong
# 1age = 25


# 2. Cannot start with a number
# ✅ Correct
marks1 = 80

# ❌ Wrong
# 2marks = 90


# 3. Can contain letters, numbers, and underscores
# ✅ Correct
student_name = "Aman"
total_marks_1 = 100

# ❌ Wrong
# student-name = "Aman"
# total marks = 100


# 4. Case-sensitive
age = 20
Age = 25

print(age)   # 20
print(Age)   # 25`,
            },
          ],
        },
        {
          heading: "3. Multiple Assignment",
          content: [
            {
              type: "code",
              value: `# Assign same value to multiple variables
a = b = c = 5
print(a, b, c)

# Assign different values in a single line
x, y, z = 1, 2, 3
print(x, y, z)`,
            },
          ],
        },
        {
          heading: "4. Changing Variable Value",
          content: [
            {
              type: "code",
              value: `x = 5
x = 20
print(x)  # Output: 20`,
            },
          ],
        },
      ],
      conclusion:
        "Variables are fundamental to programming. Understanding how to declare, name, and use variables is essential for writing Python programs.",
    },

    // ================= TOPIC 2: PYTHON Data Type =================
    {
      id: "data-types",
      title: "Python Data Types",
      intro:
        "Data types define the type of value a variable can hold. Python has several built-in data types for different kinds of data.",
      sections: [
        {
          heading: "1. Numeric Types",
          content: [
            {
              type: "code",
              value: `x = 80        # int
y = 3.14      # float
z = 2 + 3j    # complex`,
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
              value:
                "Boolean (bool) data type can hold only two values: True and False or ( 1 and 0 ).",
            },
            {
              type: "code",
              value: `is_active = True
is_active = False
num = 3<2
print(type(num))  # Output : False`,
            },
          ],
        },
        {
          heading: "4. Collection Types",
          content: [
            {
              type: "code",
              value: `# List
fruits = ["apple", "banana"]

# Tuple
coordinates = (10, 20)

# Set
unique_numbers = {1, 2, 3}

# Dictionary
student = {"name": "Alice", "age": 20}`,
            },
          ],
        },
        {
          heading: "5. Checking Data Type",
          content: [
            {
              type: "text",
              value:
                'We can check the data type using the <span class="inline-code">type()</span> function.',
            },
            {
              type: "code",
              value: `x = 5
print(type(x))  # Output: <class 'int'>`,
            },
          ],
        },
      ],
      conclusion:
        "Understanding Python data types helps in choosing the correct structure for storing and manipulating data efficiently.",
    },

    // ================= TOPIC 3: PYTHON Operators =================
    {
      id: "operators",
      title: "Python Operators",
      intro:
        "Operators are used to perform operations on variables and values in Python. Python supports various types of operators.",
      sections: [
        {
          heading: "1. Arithmetic Operators",
          content: [
            {
              type: "code",
              value: `a = 5
b = 2

print(a + b)   # Addition - 7
print(a - b)   # Subtraction - 3
print(a * b)   # Multiplication - 10 
print(a / b)   # Division - 2.5 In Python, " / " always returns a float
print(a % b)   # Modulus - 1 It returns the remainder
print(a ** b)  # Exponentiation - 25 Means 5 raised to the power 2`,
            },
          ],
        },
        {
          heading: "2. Comparison Operators",
          content: [
            {
              type: "code",
              value: `a = 10
b = 5

print(a == b)   # False
print(a != b)   # True
print(a > b)    # True
print(a < b)    # False
print(a >= b)   # True
print(a <= b)   # False`,
            },
          ],
        },
        {
          heading: "3. Logical Operators",
          content: [
            {
              type: "text",
              value:
                "There are three Logical Operators ' and ' , ' or ' and ' not '.",
            },
            {
              type: "code",
              value: `x = True
y = False

print(x and y)   # returns True if both operands are True.
print(x or y)    # returns True if at least one operand is True.
print(not x)     # returns the opposite boolean value.`,
            },
          ],
        },
        {
          heading: "4. Assignment Operators",
          content: [
            {
              type: "code",
              value: `x = 5
x += 3
x -= 2
x *= 4`,
            },
          ],
        },
        {
          heading: "5. Membership & Identity Operators",
          content: [
            {
              type: "code",
              value: `fruits = ["apple", "banana"]

print("apple" in fruits)
print("mango" not in fruits)

a = 5
b = 5
print(a is b)`,
            },
          ],
        },
      ],
      conclusion:
        "Operators allow you to perform calculations, comparisons, and logical operations. Mastering operators is essential for building program logic in Python.",
    },
    // ================= TOPIC 2: PYTHON Control Flow =================
    {
      id: "conditional-statements",
      title: "Python Control Flow",
      intro:
        "A conditional statement helps us execute a block of code based on a specific condition.",
      sections: [
        {
          heading: "1. if Statement",
          content: [
            {
              type: "text",
              value:
                "The if statement executes a block of code only if the condition is True.",
            },
            {
              type: "code",
              value: `age = 18

if age >= 18:
    print("You are eligible to vote")    # execute only if age >= 18`,
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
              value: `num = 5

if num % 2 == 0:
    print("Even Number")
else:
    print("Odd Number")`,
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
              value: `marks = 75

if marks >= 90:
    print("Grade A")
elif marks >= 60:
    print("Grade B")
else:
    print("Grade C")`,
            },
          ],
        },
      ],
      conclusion:
        "Conditional statements help control the flow of a program by executing different blocks based on conditions.",
    },
    // ================= TOPIC 2: PYTHON Loops =================
    {
      id: "python-loops",
      title: "Python Loops",
      intro:
        "Loops are used to execute a block of code repeatedly until a condition is met.",
      sections: [
        {
          heading: "1. for Loop",
          content: [
            {
              type: "text",
              value:
                "The for loop is used to iterate over a sequence like a list, tuple, or range.",
            },
            {
              type: "code",
              value: `for i in range(1, 6):
    print(i)`,
            },
          ],
        },
        {
          heading: "2. while Loop",
          content: [
            {
              type: "text",
              value:
                "The while loop runs as long as the condition remains True.",
            },
            {
              type: "code",
              value: `count = 1

while count <= 5:
    print(count)
    count += 1`,
            },
          ],
        },
        {
          heading: "3. Break, Continue and Pass",
          content: [
            {
              type: "text",
              value:
                "break stops the loop, continue skips the current iteration, and pass does nothing.",
            },
            {
              type: "code",
              value: `for i in range(5):
    if i == 3:
        break
    print(i)           # Output - 0, 1, 2
    
for i in range(6):
  if i == 3:
    continue
  print(i)             # Output - 0, 1, 2, 4, 5

for i in range(6):
  if i == 3:
    pass
  print(i)             # Output - 0, 1, 2, 3, 4, 5`,
            },
          ],
        },
        {
          heading: "4. range() Function",
          content: [
            {
              type: "text",
              value:
                "The range( ) function is used to generate a sequence of numbers.",
            },

            {
              type: "code",
              value: `Syntax: range(start, stop, step)

# 1. range(stop)
for i in range(5):             # Generates numbers from 0 to stop-1 :- 0, 1, 2, 3, 4.
  print(i)

# 2. range(start, stop) 
for i in range(1, 6):          # Generates numbers from start to stop-1 :- 1, 2, 3, 4, 5.
  print(i)

# 3. range(start, stop, step)
for i in range(1, 10, 2):      # Generates numbers with a step value :- 1, 3, 5, 7, 9.
  print(i)

# 4. range(start, stop, step)
  for i in range(5, 0, -1):     # generate numbers in reverse order :- 5, 4, 3, 2, 1.
print(i)
    `,
            },
          ],
        },
        {
          heading: "5. else Clause in Loop",
          content: [
            {
              type: "text",
              value:
                "The else part executes when the loop finishes normally (without break).",
            },
            {
              type: "code",
              value: `for i in range(1, 4): 
    print(i)
else:
    print("Loop finished successfully")   # Executes after the loop completes successfully.

for i in range(1, 4):
    if i == 2:
        break
    print(i)
else:
    print("Loop finished successfully")    # This will NOT execute. `,
            },
          ],
        },
      ],
      conclusion:
        "Loops make programs efficient by reducing repetitive code and automating repeated tasks.",
    },
    // ================= TOPIC 2: PYTHON Strings =================
    {
      id: "python-strings",
      title: "Python Strings",
      intro:
        "Strings are sequences of characters used to store and manipulate text in Python.",
      sections: [
        {
          heading: "1. Creating Strings",
          content: [
            {
              type: "code",
              value: `name = "Adarsh"
message = 'Hello World'`,
            },
          ],
        },
        {
          heading: "2. String Indexing and Slicing",
          content: [
            {
              type: "text",
              value:
                "Indexing allows accessing individual characters, and slicing extracts a portion of the string.",
            },
            {
              type: "code",
              value: `text = "Python"

print(text[0])      # P
print(text[0:3])    # Pyt
print(text[:3])     # Pyt
print(text[0:])     # Python
print(text[::])     # Python
print(text[5:0:-1]) # nohty`,
            },
          ],
        },
        {
          heading: "3. Common String Methods",
          content: [
            {
              type: "code",
              value: `text = " w3coder "

print(text.upper())                   # W3CODER
print(text.lower())                   # w3coder
print(text.replace("w3coder","Java")) # java `,
            },
          ],
        },
      ],
      conclusion:
        "Strings are powerful in Python and provide many built-in methods for text processing and manipulation.",
    },
    // ================= TOPIC 2: PYTHON List =================
    {
      id: "python-lists",
      title: "Python Lists",
      intro:
        "Lists are used to store multiple items in a single variable. Lists are ordered, changeable (mutable), and allow duplicate values.",
      sections: [
        {
          heading: "1. Creating Lists",
          content: [
            {
              type: "text",
              value:
                "Squres braces [ ] or the list( ) function can be used to create List.",
            },
            {
              type: "code",
              value: `# Creating an Empty List
my_list = []
my_list = list()

# Creating a List with values
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4]

# List with duplicate values
fruits = ["apple", "banana", "banana", "cherry"]
numbers = [1, 2, 2, 3, 4]

# List with different data types
diff_data_type = ["apple", "banana", 3, 4, 5.0, [9, 7, 0]]`,
            },
          ],
        },
        {
          heading: "2. Accessing List Elements",
          content: [
            {
              type: "text",
              value: "List items are accessed using index numbers.",
            },
            {
              type: "code",
              value: `# Index :   0   1   2   3   4 
numbers = [10, 20, 30, 40, 50]
# Index :  -5  -4  -3  -2  -1

print(numbers[0])   # 10
print(numbers[1])   # 20
print(numbers[-1])  # 50
print(numbers[1:3]) # [20, 30]`,
            },
          ],
        },
        {
          heading: "3. Common List Methods",
          content: [
            {
              type: "code",
              value: `fruits.append("orange")
fruits.remove("banana")
fruits.pop()
print(fruits)`,
            },
          ],
        },
      ],
      conclusion:
        "Lists are flexible and widely used in Python for storing and modifying collections of data.",
    },
    // ================= TOPIC 2: PYTHON Tuples =================
    {
      id: "python-tuples",
      title: "Python Tuples",
      intro:
        "Tuples are similar to lists but are immutable, meaning their values cannot be changed after creation.",
      sections: [
        {
          heading: "1. Creating Tuples",
          content: [
            {
              type: "text",
              value:
                "Parentheses ( ), comma-separated values or the tuple( ) function can be used to create tuple.",
            },
            {
              type: "code",
              value: `# Create Empty tuple
numbers = ()                      # <class 'tuple'>

# Tuple without brackets
numbers = 10, 20, 30              # <class 'tuple'>
numbers = 10                      # <class 'int'>

# Tuple without brackets with single value
numbers = 10,                     # <class 'tuple'>`,
            },
          ],
        },
        {
          heading: "2. Accessing Tuple Elements",
          content: [
            {
              type: "text",
              value:
                "Tuple elements are accessed using index numbers just like lists.",
            },
            {
              type: "code",
              value: `numbers = (10, 20, 30)
print(numbers[0])   # 10
print(numbers[2])   # 30
print(numbers[-1])  # 30`,
            },
          ],
        },
        {
          heading: "3. Tuple Immutability",
          content: [
            {
              type: "text",
              value: "Tuple values cannot be modified after creation.",
            },
            {
              type: "code",
              value: `numbers = (10, 20, 30)
numbers[0] = 100     # TypeError: 'tuple' object does not support item assignment        `,
            },
          ],
        },
      ],
      conclusion:
        "Tuples are useful when you want to store data that should not be changed.",
    },
    // ================= TOPIC 2: PYTHON Sets =================
    {
      id: "python-sets",
      title: "Python Sets",
      intro:
        "A set is an unordered collection with no duplicate elements. Basic uses include membership testing and eliminating duplicate entries. Set objects also support mathematical operations like union, intersection, difference, and symmetric difference.",
      sections: [
        {
          heading: "1. Creating Sets",
          content: [
            {
              type: "text",
              value:
                "Curly braces { } or the set( ) function can be used to create sets.",
            },
            {
              type: "code",
              value: `# Creating an empty set
numbers = set()      # <class 'set'>

# {} creates an empty dictionary, not a set
numbers = {}         # <class 'dict'>

# Creating sets with values
numbers = {2}        # <class 'set'>
numbers = {1, 2, 3}  # <class 'set'>`,
            },
          ],
        },
        {
          heading: "2. Adding and Removing Elements",
          content: [
            {
              type: "code",
              value: `numbers.add(4)
numbers.remove(2)
print(numbers)`,
            },
          ],
        },
        {
          heading: "3. Set Characteristics",
          content: [
            {
              type: "text",
              value: "Sets are unordered and do not allow duplicate values.",
            },
            {
              type: "code",
              value:`# Sets are unordered
names = {"w3coder", "adarsh", "sumit", "Mohit"}
print(names)   # {'adarsh', 'sumit', 'w3coder', 'Mohit'}
              
# Sets do not allow duplicate values
name = set("adarshshakya")
print(name)    # {'d', 'r', 'h', 'y', 'k', 'a', 's'}`
            }
          ],
        },
        {
          heading: "4. Mathematical Operations",
          content: [
            {
              type: "text",
              value: "Set objects  support mathematical operations like union, intersection, difference and symmetric difference."
            },
            {
              type: "code",
              value: `A = {1, 2, 3, 4}
B = {3, 4, 5, 6}

# 1. Union (all unique elements from both sets)
print(A | B)        # {1, 2, 3, 4, 5, 6}

# 2. Intersection (common elements in both sets)
print(A & B)        # {3, 4}

# 3. Difference (elements in A but not in B)
print(A - B)        # {1, 2}

# 4. Symmetric Difference (elements in A and B but not both)
print(A ^ B)        # {1, 2, 5, 6}

# Alternative Method (Using Functions)
print(A.union(B))
print(A.intersection(B))
print(A.difference(B))
print(A.symmetric_difference(B))
`
            }
          ]
        }
      ],
      conclusion:
        "Sets are useful when you need unique values and do not care about order.",
    },
    // ================= TOPIC 2: PYTHON Dictionaries =================
    {
      id: "python-dictionaries",
      title: "Python Dictionaries",
      intro:
        "It is best to think of a dictionary as a set of key: value pairs, with the requirement that the keys are unique (within one dictionary). A pair of braces creates an empty dictionary: { }.",
      sections: [
        {
          heading: "1. Creating Dictionaries",
          content: [
            {
              type: "code",
              value: `student = {
    "name": "Adarsh",
    "age": 20,
    "course": "Python"
}
print(student)`,
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
          heading: "3. Common Dictionary Methods",
          content: [
            {
              type: "code",
              value: `print(student.keys())
print(student.values())
print(student.items())`,
            },
          ],
        },
      ],
      conclusion:
        "Dictionaries are powerful data structures for storing related data using key-value pairs.",
    },
  ],
};

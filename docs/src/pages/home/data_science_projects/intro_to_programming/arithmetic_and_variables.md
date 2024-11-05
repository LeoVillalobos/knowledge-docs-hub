

# 🖨️ Printing

One of the simplest (and most important!) tasks you can ask a computer to do is to print a message.

In Python, we ask a computer to print a message for us by writing `print()` and putting the message inside the parentheses and enclosed in quotation marks. Below, we ask the computer to print the message `Hello, world!`.

```python
print("Hello, world!")
```

Output:
```
Hello, world!
```

The code is inside the box (known as a code cell), and the computer's response (called the output of the code) is shown below the box. As you can see, the computer printed the message that we wanted.

## ➕ Arithmetic

We can also print the value of some arithmetic operation (such as addition, subtraction, multiplication, or division).

For instance, in the next code cell, the computer adds 2 to 1 and then prints the result, which is 3. Note that unlike when we were simply printing text, we don't use any quotation marks.

```python
print(1 + 2)
```

Output:
```
3
```

We can also do subtraction in Python. The next code cell subtracts 5 from 9 and prints the result, which is 4.

```python
print(9 - 5)
```

Output:
```
4
```

You can actually do a lot of calculations with Python! See the table below for some examples.

| Operation     | Symbol | Example       |
|---------------|--------|---------------|
| Addition      | `+`    | `1 + 2 = 3`   |
| Subtraction   | `-`    | `5 - 4 = 1`   |
| Multiplication| `*`    | `2 * 4 = 8`   |
| Division      | `/`    | `6 / 3 = 2`   |
| Exponent      | `**`   | `3 ** 2 = 9`  |

You can control the order of operations in long calculations with parentheses.

```python
print(((1 + 3) * (9 - 2) / 2) ** 2)
```

Output:
```
196.0
```

In general, Python follows the PEMDAS rule when deciding the order of operations.

## 💬 Comments

We use comments to annotate what code is doing. They help others understand your code, and they can also be helpful if you haven't looked at your own code in a while. So far, the code that we have written is very short, but annotations become more important when you have written a lot of code.

For instance, in the next code cell, we multiply 3 by 2. We also add a comment (`# Multiply 3 by 2`) above the code to describe what the code is doing.

```python
# Multiply 3 by 2
print(3 * 2)
```

Output:
```
6
```

To indicate to Python that a line is a comment (and not Python code), you need to write a pound sign (`#`) as the very first character.

Once Python sees the pound sign and recognizes that the line is a comment, it is completely ignored by the computer. This is important, because just like any other language, Python is a language with very strict rules that need to be followed. Python is stricter than a human listener, though, and will show an error if it can't understand the code.

We can see an example of this in the code cell below. Python errors if we remove the pound sign, because the text in the comment is not valid Python code, so it can't be interpreted properly.

## 📊 Variables

So far, you have used code to make a calculation and print the result, and the result isn't saved anywhere. However, you might want to save the result to work with it later. For this, you'll need to use variables.

### Creating Variables

The next code cell creates a variable named `test_var` and assigns it the value that we get when we add 5 to 4.

```python
# Create a variable called test_var and give it a value of 4+5
test_var = 4 + 5

# Print the value of test_var
print(test_var)
```

Output:
```
9
```

Variables have certain naming rules:
- They can't have spaces (e.g., `test var` is not allowed)
- They can only include letters, numbers, and underscores (e.g., `test_var!` is not allowed)
- They have to start with a letter or underscore (e.g., `1_var` is not allowed)

### Manipulating Variables

You can always change the value assigned to a variable by overriding the previous value.

```python
# Set the value of a new variable to 3
my_var = 3
print(my_var)

# Change the value of the variable to 100
my_var = 100
print(my_var)
```

Output:
```
3
100
```

Note that whenever you define a variable in a code cell, all of the code cells that follow also have access to the variable.

### Using Multiple Variables

It's common for code to use multiple variables, which is especially useful when we have to do a long calculation with multiple inputs.

In the next code cell, we calculate the number of seconds in four years.

```python
# Create variables
num_years = 4
days_per_year = 365
hours_per_day = 24
mins_per_hour = 60
secs_per_min = 60

# Calculate number of seconds in four years
total_secs = secs_per_min * mins_per_hour * hours_per_day * days_per_year * num_years
print(total_secs)
```

Output:
```
126144000
```

Using variables makes it easy to update calculations when needed, such as accounting for leap years by changing `days_per_year` to `365.25`.

## 🐞 Debugging

One common error when working with variables is accidentally introducing typos. For instance, if we spell `hours_per_day` as `hours_per_dy`, Python will error with the message `NameError: name 'hours_per_dy' is not defined`.

To fix such errors, check the spelling of the variable name and correct it.

```python
print(hours_per_day)
```

Output:
```
24
```

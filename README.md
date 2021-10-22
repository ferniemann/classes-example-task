# About this Repository
This is one possible solution for a task I gave to my course at [Coding Bootcamps Europe](https://coding-bootcamps.eu).

## The task
Your task is to create users for a user database. Each single user is an object (containing the username and their age) within the user database (which is an array). To make this task as convenient and efficient as possible for you, you will be using ``class`` to create each object.

- [ ] First step: Create a function to add a new user to the array, ``if`` both fields (name and age) are filled when the 'Add User' button is clicked. Show the array in your console after each added user.
- [ ] Second step: Instead of only showing the contents of the array in the console, create a list of all users and their age in your DOM

You can use this as the basis of your HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Classes Example</title>
</head>
<body>
    <form action="" onsubmit="return false">
        <label for="input-name">Name:</label>
        <input type="text" name="" id="input-name">
        <label for="input-age">Age:</label>
        <input type="number" name="" id="input-age">
        <button id="btn-add">Add User</button>
    </form>
    <script src="script.js"></script>
</body>
</html>
```
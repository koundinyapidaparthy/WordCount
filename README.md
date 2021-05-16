# HEROKU HOST LINK HERE

https://invictusproject.herokuapp.com/




# Question


1. A Reactjs front end which accepts a number input N with a Submit button
2. On entering a value and pressing submit, fetch the contents of [https://raw.githubusercontent.com/invictustech/test/main/README.md](https://raw.githubusercontent.com/invictustech/test/main/README.md)
3. Find the top N most frequently occurring words in this file (DO NOT use a ready made module for frequency computation)
4. Display the top N words and their frequency of occurrence in the frontend, in a tabular format

# libraries and plugins used

I have downloaded  styled-components throught npm

* This helps me to write actual css in jsx.
* Helps me to reduce the no of files in the folder


# Code Explanation

Inside src folder i created a Components folder which contain all my components file

## File1 ➡️  InvictusMain

This file contains main solution of the given question:

1. First I get the used input data
2. And then i fetched text data from this link [https://raw.githubusercontent.com/invictustech/test/main/README.md](https://)
3. And store this data with the help of split function in a array
4. After that with the help of looping (for loop) concept i calculated each word repetition(frequency) and store them in a object of array that contain dataNames and frequency
5. With the help of reduce Method I removed the duplicate name and store them in a separate object of array
6. With the help of sort Method I sorted frequencies and stored in same array
7. And send this array as props to InvictusOutput file

## File2 ➡️InvictusOutput

This file contains main solution of the given question:

1. Props which are send by Invictus Main are used here
2. with help of map method i render the components in table

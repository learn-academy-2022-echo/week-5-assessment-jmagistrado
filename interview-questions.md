# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a hash in Ruby?

Your answer: A hash is a collection of key:value pairs and are referenced by their unique key rather. 

Researched answer: A hash is a collection of key:value pairs and are referenced by their unique key rather than their index like you would an array. Hashes have the ability to hold information. Because hashes have the ability to store information, developers are able to create hashes, read the information that is stored, update the information that is stored, as well as delete information that is no longer needed. This is the idea of CRUD, which is considered all the ways you can manipulate the data. Something to also consider is that hashes fall inside the enumerable module which means developers can use iterations/iteration methods on hashes to receive some return for each value that the hash holds. 

An example of when I used iterations to access the values of the hash, were when I wanted to receive an output of a string that include the data of hash which held information about phone applications - it had 5 five key:value pairs of different phone application names. Because I wanted to have an expected output of a string which returned the name of each application and from what key, I was able to utilize the .each method, so that I could receive a return for each value in the hash. 

To access the value, I needed to make sure that I was first setting that the parameters of the method were to accept both the key, value as arguments in that order.  Within my return, I was able to call for both the key and value to be returned in my string output by also utilizing string interpolation which prints out the values within the return. 

2. What is a gem?

Your answer: Gem is a library snippet of code used to manage depencies for Rspec 

Researched answer: Gem is a library/snippet of code that is used to manage depencies like RSpec which is a testing tool used to test Ruby code and supports Test Driven Development (TDD). Gems, especially related to RSpec are important to a developer because they are used to test out ruby code before you actually type the literal code out. By using gems in conjunction with RSpec, you can feel at ease that your code will not break, or have create changes/issues in different parts of code in your application. 

I have used gem along with Rspec many times to test out my code functionality. These tests follow the TDD process where you use describe and it blocks to describe what the method should do and an expects block to consider what it should expect the output to be. These tests are important to do because it allows for bug free code, it saves time and effort in the long run knowing that you won't have issues once your actual code is built out, and developers are able to produce a higer quality product because of it. 

3. What is Ruby on Rails?

Your answer: Ruby on Rails is a framework where you can build a full stack website that can display items on a web application as well as store information on the backend so that developers have the ability to access it and use the information stored somewhere on the website. 

Researched answer: Ruby on Rails is a framework where you can build a full stack web application that can display items on a web application as well as store information on the backend so that developers have the ability to access it and use the information stored somewhere on the website. Ruby on Rails uses the Ruby language to build out the application. This framework uses a Model-View-Controller (MVC) pattern which basically breaks down the web application's code into three parts that are connected with each other. The model is what will hold any of the data structure. The View is what will show any of the visual part of the application and lastly, the controller which can take the data from the backend to be connected with the view so that you are able to see that store data.  

There are many popular websites that I have used that are built on the Ruby on Rails platform, like Airbnb, Hulu, Etsy, and MyFitnessPal just to name a few. I actually have all interacted with all these websites in the past and can see Ruby on Rails in action. For example, the web application MyFitnessPal allows their users to enter food items to be added in a recipe and stored. This recipe that was created can then be used to enter into your food log whenever you have eaten it for a meal. You also have the ability to delete this recipe at any time in case you no longer need it. As a user, I have utilized everything that Ruby on Rails helps a developer to do. 

Thinking as a developer, it's important to be able to keep this food recipe data stored in the backend but still have the ability to have the user access it whenever needed so that the user doesn't need to recreate the recipe every time it is eaten.

4. What is a relational database? Are there other kinds of databases?

Your answer: I am not too sure what a relational database is. However, I would turn to my resources from Learn, as well as resources online to help me fill in this gap knowledge. 

Researched answer: A relational database is when a collection of data/information is stored within columns and rows (or tables which is a set of rows and columns). This would be similar to Google Sheets with how the information is displayed to a developer.Relational databases are popular because of their easy to read data and how it is related to each other, but because they also use relational operators like SQL, which is a query language, for a developer to manipulate the data that is stored in the database. 

I am fimilar with relational databases as I have used them in the past to access data that I needed. A time where I worked with relational databases was when I was wanting to pull up information on countries and their population - these two categories were on the same table as different columns. By using a relational operator like SQL, I was able to pull up the data that was related to these two columns and pull the information that I needed. 

5. What are primary keys? Why are they important?

Your answer: Primary keys are associated with databases and it's a way to reference information. By using a primary key, you can pull up the information of the thing that is associated with that key. It is like a social secuity number, it is unique and no one row of information will have the same key 

Researched answer: Primary keys are associated with relational databases and it's a way to reference information. Each row has their own primary key which you can reference when you'd like to pull a specific row's data or even change the information that is being store on it. By using a primary key, it allows you find the information you need quickly as you know no other row would have that key. The primary key is like a social secuity number, it is unique to that row and there should never be an issue of more than one row to have the same key number. It should be noted that a developer does not usually determine these keys for the database, but instead the key is generated by the database itself. 

An example of when I used a primary key was when I wanted to reference a certain individual's information that was stored within my database. The database was storing information of credit cards, including the amount of credit cards each individual had. As a developer, I was tasked to update the credit limits of one of the cards that belonged to a specific person. By using this person's primary key, I was able to search through the database and pull up the person's row within our table, to update this information. Because I used the primary key, I did not have to worry that I would have more than one row pulled since no other row has that key value. 

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes:Is a way to set standards or is the pattern to create routes that are efficient and reusable.

2. JSON: is a way to send data from one computer to a different computer. It is an 

3. ERB: This is an extension that allows the developer to not only code in HTMl, but also use Ruby code into the view file 

4. Params: Params are short for parameters which lets a developer add more information to the program by passing down the value to the controller 

5. API: Also known Application Programming Interface allows for the tramission of data by using JavaScript Objject Notation 

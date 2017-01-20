# url_shortener
 created by Janay Peters in the Web Design and Development program at Full Sail University.

# Purpose
 The purpose of this url shortener is to allow the user to enter a regular url and it return a unique shortend url.

# Installation Process
 Click the green button that says, "clone or Download" above on the right. </br>
 <img src="views/images/Screen%20Shot%202017-01-04%20at%2010.14.54%20PM.png" alt="greenbutton"> <br/>
 After you have cloned or downloaded the application you will then need to open up your terminal and download a few thing!<br/>

 First: Install npm by typing "npm install"
 Second: Install nodemon by typing "npm install nodemon"
 Third: Start the server by typeing "node src/server.js"

 <img src="views/images/Screen%20Shot%202017-01-04%20at%2010.15.40%20PM.png" alt="terminal">

# My Route
/go/:shorturl
    Should redirect the user to the actual url based upon the short URL provided


# My Endpoints

POST /api/v1/urls
    Create a shortened URL
GET /api/v1/urls
    Display all URLS
GET /api/v1/urls/:id
    Display URL based upon id
POST /api/v1/urls/:id
    Update URL based upon id
DELETE  /api/v1/urls/:id
    Delete url based upon id

# Usage
..  

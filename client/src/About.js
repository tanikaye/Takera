import React from 'react'

function About() {
    return (

        <div id= "about">
<p>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans&display=swap" rel="stylesheet"/>
### Introduction

here is the about info
<br>
</br>


### Functionalities

The app consists of a few functionalities and data. We start off with the json file where we seed our database with different hero information and posts that our main character provides whenever he feels like it. We “fetch” our data from our local computer which mimics an api server and converts the response to json to be understandable to React. Essentially our functionalities are the ability to “GET”, “POST” and “DELETE”.
<br>
</br>

### Result Resource

This app allows you to create a post or delete one within the profile of Batman. In our friends list you can add a new one and all this information that is added or removed will be reflected within the database.

<br>
</br>
### How to obtain this code

To use this code, add or extract a part of it you can use github. First you must go on the github website and navigate to where our code is located(https://github.com/dominickub/social-media-app.git). Once you are there, you can copy the SSH key, go into your terminal, find the directory where you would like to place it in and use the commands: git clone …@github.com, cd into the file and code..
</p>

        </div>
    )
}

export default About
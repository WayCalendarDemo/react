# react

## Requirements:

npm
npm -v

node
node -v

Create a react project

npx create-react-app

Creates boilerplate for new project

options:

You can specify a folder after the command and a new folder will be created and the boilerplate app created in that folder

EG.
npx create-react-app social-media-website

This will create a new reactjs app in the folder 'social-media-webiste'.
The new folder will be created within the directory that you execute the command.

If you have already created a folder and are within that folder when creating the app just add a full stop:

EG.
npx create-react-app .

Press Y to allow install of necessary code.


## Installed Content

public folder

Holds all the static files

One of these files is an 'index.html' file.
When working with reactjs, you won't be creating HTML files
Reactjs lets you create single page applications, the whole app will be reside in one single html file.
The index.html file provided has a div with an id of 'root'. Reactjs populates this div with the application.

src folder

This is where all the code for the application will reside.

## Running the application

From inside the application folder:

npm start

This createa and starts a server on port 3000 so if you already have something running on port 3000, the application won't start.
While the application is running, everytime you save changes to a file, the browser will refresh to show these changes.
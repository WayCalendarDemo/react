### Hello World

For this project the following are deleted:

setupTests.js
reportWebVitals.js
logo.svg
index.css
App.test.js

When you delete these files, you have to also delete the import statements from the index.js file
Also delete the method call for WebVitals ( reportWebVitals(); )

Also, delete the images from App.js file and all the code within the <div className="App">

Populating the root div

In index.js the following line is what actually populates the div with the id 'root'

const root = ReactDOM.createRoot(document.getElementById('root'));

The root.render method call populates the div with a 'component'.

Add 'Hello World' to the div className="App" and it will show in the browser.
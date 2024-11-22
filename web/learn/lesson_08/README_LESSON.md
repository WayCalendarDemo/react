## Why do you need a react-router-dom

The react-router-dom is a widely used library.
It allows your single page app have multiple pages.

Reactjs is primarily for creating a single page app but by installing react-router-dom, 
you can have a multi-page app.
In a normal Reactjs app, there is only one index.html file and the entire app is located inside of the div with the class
name "App".

## Installing a react-router-dom

Installing the react-router-dom library:

```
npm install react-router-dom
```

## Creating routes

Step one
import the necessary components from the react-router-dom library
```
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
```

Here we are installing three components: BrowserRouter, Routes, and Route

Note:
When importing a library, you can give the library you are importing a shorter name.
This is useful for when you are using a library with a long name.
Use the key word 'as'

### BrowserRouter
Defines where in the app you want to have different routes.
It lets you change routes for a specific portion of your app.


### Route is used to define every route you want to used


When using them, you need to nest them like below:
```
<div className="App">
    <Router>
    <Routes>
        <Route />
    </Routes>
    </Router>
</div>
```
NOTE:
Only the Route component is self closing.
A new, self-clsoing <Route /> tag is created for each path you want to make.

For each Route component, you specify:
The path
The component to use for that page.

You also need to create the component file.

The following is an example of the homepage
There is a folder called 'pages' and inside is a Home.js file with
the Home component.
```
<Route path="/" element={<Home />}/>
```

NOTE: When you specify the Home component in the element tag above, the import
statement automatically gets added to the file:
```
import { Home } from './pages/Home';
```

The URL: http://localhost:3000

Another example:
```
<Route path="/profile" element={<Profile />} />
```

The URL: http://localhost:3000/profile

404 page

TO create a 404 page, you could do the following:
Specify the path to be an asterix
```
<Route path="*" element={<Error />} />
```

If you don't want to create a component for the error page, you could put an h1 tag inside fo the element 
brackets.

```
<Route path="*" element={<h1>Error Page</h1>} />
```

## Creating a network (creating links)

The Router component
This is a wrapper that tells react-router-dom where you want to use the library's components.

The Routes component 
Tells Reactjs that you are going to list some Route components.

Previously, we saw that when you import react-router-dom, you can specify that you want to use: BrowserRouter, Routes and Route.
We can also use a component called Link. Link acts like an a tag in html
```
<Link to="/">Home</Link>
```

You use this inside of the Router tag:
```
<Router>
    <div>
        NAVBAR
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
    </div>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Error />} />
        {/* <Route path="*" element={<h1>Error Page</h1>} /> */}
    </Routes>
</Router>
```

NOTE:
The way it works it that you only need to put the Router component in the App.js file and it will appear in each of the pages that you create.

Here is the code if you were to put it in the App.js file
```
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Error } from './pages/Error';
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <p>NAVBAR</p>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Error />} />
          {/* <Route path="*" element={<h1>Error Page</h1>} /> */}
        </Routes>
      </Router>
    </div>
  );
}
```

BUT

It is better to put all the relevant code inside of a component to avoid the App.js file from begin cluttered.
Once the navigation logic is in its own file, you can call the component like a normal component.
```
import { Navbar } from './components/Navbar';

<Navbar />
```


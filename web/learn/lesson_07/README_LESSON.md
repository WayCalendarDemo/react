Example project

In the UI wil be a button that, when clicked, will show a random cat fact.
The cat fact will be fetched from an external API.
When the fact is fetched, it will be displayed in the UI
API address: https://catfact.ninja/fact

## Fetch Function

The JS way
The fetch function is actually a part of JS, not reactjs but you can use it in reactjs
You pass the url of the JSON in the fetch function
This fetch function returns a promise so you can use the 'then' keyword.
Inside the then braces (), you can do an anonymous function that takes the response and returns the data
in JSON format.
Once we get the JSON data, we can add another then() to work with the data and inside of the second then, we
can put in an anonymous js function that deals with the response data.
```
  fetch("https://catfact.ninja/fact")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
```

An easier way to fetch data from an API

Instead of using the fetch method, you can use another library that is available in JS/ Reactjs

## Axios

It is a well known libarary but you have to install it
```
npm install axios
```

To use Axios in your project:

Step 1: Import it into your project
```
import Axios from 'axios';
```

Step 2: Use the following function to get the data
Axios removes the need to convert the received data into JSON.
```
  Axios.get("https://catfact.ninja/fact").then((res) => {
    console.log(res.data);
  })
```

## Component

Regardless of which method you use, you should create a useState variable and a function that fires the 
api call request.

NOTE:
If you didn't put the fetch request inside a function and just updated the useState variable from within the
the global environment, the fetch request would end up in a continuous loop.
The reason being is that setCatFact causes the component (the UI) to update the data and reload the page, 
reloading the page reloads the component causing the fetch request to occur again and so on.

To overcome this problem, you should use a useEffect with an empty array.
The empty array means that it will only run once.

You will notice that it runs twice, the reason is because the useEffect mounts, unmounts and then mounts again.
The mounting and unmounting and then mounting again is a result of using strictmode

NOTE: The below method is not the recommended way of fetching data, it is only to help beginners unstand how to fetch data.

```
useEffect(() => {
  Axios.get("https://catfact.ninja/fact").then((res) => {
    console.log(res.data);
    setCatFact(res.data.fact)
  })
},[])
```

At this stage, the code will only generate a cat fact on the page load.
To make it also load a new cat fact on the button click, you need to make a function and put the 
data fetch in there.
```
  const updateCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      console.log(res.data);
      setCatFact(res.data.fact)
    })
  }
```

Bind the function to the button:
```
<button onClick={updateCatFact}>Generate cat fact</button>
```

## Dynamically changing what kind of data is requested

https://api.agify.io/?name=wayland

The above api returns a JSON with the name entered and a random age.

The logic for this example is as follows:

There is an input with an onchange event that updates the value of a 'name' useState variable
```
const [name, setName] = useState("");
<input placeholder='Enter name' onChange={(event) => {setName(event.target.value)}}/>
```

Create another useState variable for the age and an element that will show the value
```
  const [age, setAge] = useState(0);
  <p>Predicted Age: {age}</p>
```

There is a function that contains the logic for making an API call
In normal JS, when you want to add a variable to a string you could do the following:
```
"https://api.agify.io/?name=" + name
```

But in Reactjs, you do the following:
```
`https://api.agify.io/?name=${name}`
```

The function would look like the following:
It makes an API request using the value set in the name useState variable
and when the promise is done, it uses the set method of the age useState variable to
update the element displaying the predicted age.
```
const fetchData = () => {
  Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
    console.log(res.data)
    setAge(res.data.age);
  })
}
```

Passing an object.
You will notice that age useState variable above is set to an int (0) but you can also pass in an object.
You can either initialise the useState variable with an empty object or you can set the initial value to null.
```
const [age, setAge] = useState([]);
const [age, setAge] = useState(null);
```

By passing in the whole object, you have access to the other properties of the object received in the API call.

NOTE:
If you initialise the useState variable to 'null' and then include in your JMX, you will receive errors on the page.
The reason being is that you are trying to access a null variable.
```
const [age, setAge] = useState(null);
<p>Name: {age.name}</p>
<p>Age: {age.age}</p>
```

## Handling null

There may be other ways but one way you can handle it is by using a question mark similar to optionals in Swift.
The above would become:

```
<p>Name: {age?.name}</p>
<p>Age: {age?.age}</p>
```

## Another way to pass a parameter

Up until now, when we wanted to create an output based on an input, 
we created a separate useState variable, we would then change the value of this variable and then
call a function that used this variable.
Another way to do it is just as with JS, we can pass a parameter directly to the function.
The example below is a function that takes an 'excuseType' parameter, the parameter is set at the time of calling
the function in the onClick event.
```
  const getExcuse = (excuseType) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuseType}/`).then((res) => {
      console.log(res.data[0].excuse);
      setExcuse(res.data[0].excuse);
    })
  }
```
```
<button onClick={() => {getExcuse("party")}}>Party</button>
```


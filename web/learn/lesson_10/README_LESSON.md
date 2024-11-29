# React Query

## Why use React Query

A better way to fetch data
Similar to react-router-dom, this is a React library for fetching data.

Fetch data from: https://catfact.ninja/fact

Benefits of React Query:

With the previous methods for fetching (JS's fetch method or the Axios library), the React.StrictMode made it so that
the fetch requests fired twice.


## Installing React Query

The following installs React Query, make sure to navigate to the project first.
```
npm install @tanstack/react-query
```

## Using React Query

When using this, you must set the tags to be the highest level component so that it encases all the places that you want to use it.
This is similar to the AppContext where you had to place the <AppContext> tag and then place all the code that you want to have access
to AppContext within the <AppContext> tags.

Step 1: Import React Query
Import QueryClient and QueryClientProvider
```
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
```

Step 2: Create a 'client' object
As we want to use React Query throughout the app, we will create it above the return statement of the App() function.
```
const client = new QueryClient();
```

Step 3: Wrap the code that should have access to React Query in the QueryClientProvider tags
```
<QueryClientProvider>
    <AppContext.Provider value={{username, setUsername}}>
        <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Error />} />
            {/* <Route path="*" element={<h1>Error Page</h1>} /> */}
        </Routes>
        </Router>
    </AppContext.Provider>
</QueryClientProvider>
```

Step 4: Specify the client object
In step 2 we created a client object, we now have to specify that this is the client of the <QueryClientProvider>
```
<QueryClientProvider client={client}>
```

Step 5: Import the useQuery hook
```
import {useQuery} from "@tanstack/react-query";
```

Inside the function and above the return statement, create a useQuery hook variable
```
const {} = useQuery();
```

The useQuery() function takes in two arguments:

Argument One:
This is an array that has unique keys that represent the query represents.
This is basically an ID that represents each query that we make.
The ID can be used as a reference so that you can cache the data or refresh the data.

Argument Two:
A function that will actually fetch the data and return that data to useQuery.
NOTE: React Query doesn't actually fetch the data, you have to fetch the data and then pass it to React Query.
        React Query allows for easy handling of the fetched data.

NOTE:
When you have multiple IDs, it is probably best to create an object that holds all the ids and 
use that to specify the ID inside the array.
The two arguments must be wrapped inside an object.

The way to specify the keys and the function:
```
useQuery({ queryKey: ['cat'], queryFn: getData })
```

Step 6: Fetch the data

Use Axios to fetch the data

Install Axios
```
npm install axios
```

Import Axios
```
import Axios from 'axios';
```

Create a function that fetches the data and returns it.
```
const getData = () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
};
```

Put this function inside an anonymous function as the second arugment of the useQuery() function.

Step 7 Create a variable that gives access to the data.

Inside of the curly braces of the useQuery variable, add a variable name that will be used in the component.
```
const {data} = useQuery({ queryKey: ['cat'], queryFn: getData })
```

You can now use this data in the app using dot notation
```
<p>Here is a cat fact: {data.fact}</p>
```

Altogether it looks like this:
```
import { useContext } from "react";
import { AppContext } from "../App";
import {useQuery} from "@tanstack/react-query";
import Axios from 'axios';

const getData = () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
};

export const Home = () => {
    const {username} = useContext(AppContext);
    const {data} = useQuery({ queryKey: ['cat'], queryFn: getData })
    return (
        <div>
            test
        <h1>This is {username}'s Homepage</h1>
        <p>Here is a cat fact: {data.fact}</p>

        </div>
    )
}
```

Bug:
When you try to access the data.fact, it will turn up as an error because at the time that the {data.fact}
tries to use the data, the data fetch hasn't been received yet and so the data variable is null.

Method one:
Make the data object into an optional so that react won't try to access the data object while it is not nil.
```
{data?.fact}
```

Available data from react query

isLoading
This is a boolean that is true while the data is loading.
You can use this to show something else while the data is loading.

Where to acccess this boolean
```
const {data, isLoading} = useQuery(...}
```

You can then use it to show an alternative JXL
```
if(isLoading) {
    return <h1>is Loading...</h1>
}
```

You can access other variables, if you start typing in the location that you type isLoading,
you will see a dropdown list of all the available data.


refetch
This is a function that you have access to in the same place as the isLoading variable.

If you wanted to create a button that lets the user refresh the data, you could do it like this:
```
<button onClick={refetch}>Refresh data</button>
```

Usually, when you call the useQuery function, you specify the keyword 'data' to represent the data you get back.
If, for some reason, you wanted to change the name of this becuase you have multiple queries, etc., you can change the 
name like this:
```
const {data: catFact, isLoading,...
```
And use it like this:
```
<p>Here is a cat fact: {catFact?.fact}</p>
```

Configuration

One of the features of React Query is that when you move to another tab and then come back to the tab,
upon returning to the tab, the data will be automatically refetched.

In the App.js file where you have the 'new QueryClient':
You have access to the 'defaultOptions' object.
Here you specify whether you the refresh to happen or not (among other things).
There are a few different integrations available such as the query integration and the mutation intergration.
query integration is for when you request the data.
mutation integration is for when you want to make changes to the data.

In other words:
query is the 'r' from crud.
mutation is the 'c u d' from crud.

This is how you would specify that you don't a data refetch when the window is focussed on again:
```
const client = new QueryClient({defaultOptions: {
queries: {
    refetchOnWindowFocus: false
}
}});
```

In conclusion:

When it comes to data fetching and handling,
it is better to use React Query rather than useEffect


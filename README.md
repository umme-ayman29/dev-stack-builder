# Dev Stack Builder

Dev Stack Builder is a responsive React web application where users can explore modern development technologies and build their own personal technology stack. Technologies are loaded from a JSON file, and users can add or remove technologies from their stack.

## Technologies Used

* React
* Vite
* JavaScript
* CSS3
* React-Toastify
* JSON

## Features

1. Browse and explore modern development technologies
2. Add and manage technologies in your personal stack
3. Responsive design with toast notifications and loading state

## React Questions & Answers

### 1. What is JSX, and why is it used in React?

**Answer:**

JSX means JavaScript XML. It allows us to write HTML-like code inside JavaScript. It is used in React because it makes UI code easier to read and write.

### 2. What is the difference between props and state?

**Answer:**

Props and state are both used to handle data in React, but they work differently.

Props are used to pass data from a parent component to a child component.

State is used to store and manage data inside a component.

Props are read-only, but state can be changed.

So, props are mainly used for passing data, while state is used for managing changing data.

### 3. What does the useState hook do, and where did you use it in this project?

**Answer:**

The `useState` hook is used to create and manage state in a React component. When the state changes, React updates the UI.

In this project, I used `useState` to store the technology data, loading status, and the technologies selected by the user.

Example:

```jsx
const [selectedTechnologies, setSelectedTechnologies] = useState([]);
```

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

**Answer:**

The `useEffect` hook is used to perform side effects in a React component. It is useful for tasks like fetching data from an API or JSON file.

In this project, I used `useEffect` to load the technology data from `technologies.json` when the page loads.

Example:

```jsx
useEffect(() => {
  fetch("/technologies.json")
    .then((response) => response.json())
    .then((data) => {
      setTechnologies(data);
      setLoading(false);
    });
}, []);
```

The empty `[]` means the effect runs when the component loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

**Answer:**

Every item in a `.map()` list needs a unique `key` so that React can identify each item separately.

When an item is added, removed, or changed, React uses the key to understand which item has changed. This helps React update the UI correctly and efficiently.

Example:

```jsx
technologies.map((technology) => (
  <div key={technology.id}>
    {technology.name}
  </div>
));
```

Here, `technology.id` is used as the unique key.

### 6. What is conditional rendering? Show one place you used it.

**Answer:**

Conditional rendering means showing different UI elements depending on a condition.

In this project, I used conditional rendering to show an empty message when there are no technologies in the stack.

Example:

```jsx
{selectedTechnologies.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  selectedTechnologies.map((technology) => (
    <div key={technology.id}>
      {technology.name}
    </div>
  ))
)}
```

If the stack is empty, the message is shown. Otherwise, the selected technologies are displayed.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

**Answer:**

In React, a parent component can pass data to a child component using props.

If the child needs to send something back to the parent, the parent can pass a function as a prop. Then the child can call that function.

Example:

```jsx
function Parent() {
  const handleClick = () => {
    console.log("Technology selected");
  };

  return <Child onSelect={handleClick} />;
}

function Child({ onSelect }) {
  return (
    <button onClick={onSelect}>
      Select
    </button>
  );
}
```

Here, the parent sends the `onSelect` function to the child through props. When the button is clicked, the child calls the function and sends the action back to the parent.


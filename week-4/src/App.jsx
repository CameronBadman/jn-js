import { useState } from 'react'

// ============================================
// WEEK 4: INTRODUCTION TO REACT
// ============================================
// This week we combine what you learned about Higher Order Functions
// with React to build interactive user interfaces!
//
// Remember from Week 3:
// - map() transforms each item in an array
// - filter() keeps only items that match a condition
//
// In React, we use these same HOFs to render lists!
// ============================================

// ============================================
// SECTION 1: JSX BASICS
// ============================================
// JSX lets you write HTML-like code in JavaScript
// React components return JSX

function Section1_JSXBasics() {
  // JSX looks like HTML but it's actually JavaScript!
  // Notice: we use className instead of class

  return (
    <div className="exercise">
      <h2>1. JSX Basics</h2>
      <p>This is JSX - it looks like HTML but its JavaScript!</p>

      {/* We can put JavaScript expressions inside curly braces */}
      <p>2 + 2 = {2 + 2}</p>

      {/* TODO: Add another paragraph that shows 10 * 5 */}
      {/* <p>10 * 5 = { ... }</p> */}
    </div>
  )
}

// ============================================
// SECTION 2: COMPONENTS
// ============================================
// Components are reusable pieces of UI
// They are just functions that return JSX!

function Greeting() {
  return <p>Hello, World!</p>
}

// TODO: Create a Farewell component that returns <p>Goodbye!</p>
// function Farewell() {
//   ...
// }

function Section2_Components() {
  return (
    <div className="exercise">
      <h2>2. Components</h2>
      <p>Components are reusable - we can use them multiple times:</p>

      <Greeting />
      <Greeting />

      {/* TODO: Uncomment this once you create the Farewell component */}
      {/* <Farewell /> */}
    </div>
  )
}

// ============================================
// SECTION 3: PROPS
// ============================================
// Props let you pass data to components
// Think of them like function arguments!

function PersonCard(props) {
  return (
    <div className="card">
      <strong>{props.name}</strong>
      <p>Age: {props.age}</p>
    </div>
  )
}

// TODO: Create a MovieCard component that takes title and year as props
// function MovieCard(props) {
//   return (
//     <div className="card">
//       ...
//     </div>
//   )
// }

function Section3_Props() {
  return (
    <div className="exercise">
      <h2>3. Props</h2>
      <p>Props pass data to components (like function arguments):</p>

      <PersonCard name="Alice" age={25} />
      <PersonCard name="Bob" age={30} />

      {/* TODO: Use your MovieCard component */}
      {/* <MovieCard title="Inception" year={2010} /> */}
    </div>
  )
}

// ============================================
// SECTION 4: LISTS WITH MAP
// ============================================
// Here's where HOFs meet React!
// We use map() to render a list of elements

function Section4_ListsWithMap() {
  const fruits = ['Apple', 'Banana', 'Orange', 'Mango']

  // This is just like week 3, but we return JSX!
  const fruitItems = fruits.map((fruit, index) => (
    <li key={index}>{fruit}</li>
  ))

  // Some numbers to practice with
  const numbers = [1, 2, 3, 4, 5]

  // TODO: Use map() to create list items that show each number doubled
  // const doubledItems = numbers.map((num, index) => (
  //   <li key={index}>{ ... }</li>
  // ))

  return (
    <div className="exercise">
      <h2>4. Lists with map()</h2>
      <p>Use map() to render lists - just like Week 3!</p>

      <h3>Fruits:</h3>
      <ul>{fruitItems}</ul>

      <h3>Doubled Numbers:</h3>
      {/* TODO: Render doubledItems here */}
      {/* <ul>{doubledItems}</ul> */}
    </div>
  )
}

// ============================================
// SECTION 5: FILTERING WITH FILTER
// ============================================
// Use filter() to conditionally show items

function Section5_FilteringLists() {
  const people = [
    { name: 'Alice', age: 25, city: 'Auckland' },
    { name: 'Bob', age: 17, city: 'Wellington' },
    { name: 'Charlie', age: 30, city: 'Auckland' },
    { name: 'Diana', age: 16, city: 'Christchurch' },
    { name: 'Eve', age: 22, city: 'Auckland' }
  ]

  // Filter then map - just like Week 3's Final Boss!
  const adults = people
    .filter(person => person.age >= 18)
    .map((person, index) => (
      <li key={index}>{person.name} ({person.age})</li>
    ))

  // TODO: Filter people from Auckland, then map to list items
  // const aucklanders = people
  //   .filter(person => ...)
  //   .map((person, index) => (
  //     <li key={index}>{person.name}</li>
  //   ))

  return (
    <div className="exercise">
      <h2>5. Filtering Lists</h2>
      <p>Chain filter() and map() - like Week 3s Final Boss!</p>

      <h3>Adults (18+):</h3>
      <ul>{adults}</ul>

      <h3>People from Auckland:</h3>
      {/* TODO: Render aucklanders here */}
      {/* <ul>{aucklanders}</ul> */}
    </div>
  )
}

// ============================================
// SECTION 6: STATE WITH useState
// ============================================
// State lets your component remember things
// When state changes, React re-renders the component

function Section6_State() {
  // useState returns [currentValue, setterFunction]
  const [count, setCount] = useState(0)

  // TODO: Create another state for a name
  // const [name, setName] = useState('Guest')

  return (
    <div className="exercise">
      <h2>6. State with useState</h2>
      <p>State makes components interactive!</p>

      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>

      {/* TODO: Add an input that updates the name state */}
      {/* <p>Hello, {name}!</p> */}
      {/* <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /> */}
    </div>
  )
}

// ============================================
// SECTION 7: PUTTING IT ALL TOGETHER
// ============================================
// Combine everything: components, props, map, filter, state

function TaskItem(props) {
  return (
    <li style={{
      textDecoration: props.completed ? 'line-through' : 'none',
      color: props.completed ? '#888' : '#fff'
    }}>
      {props.text}
    </li>
  )
}

function Section7_TodoApp() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React basics', completed: true },
    { id: 2, text: 'Understand JSX', completed: true },
    { id: 3, text: 'Master props', completed: false },
    { id: 4, text: 'Use map and filter', completed: false },
    { id: 5, text: 'Build something cool', completed: false }
  ])

  const [showCompleted, setShowCompleted] = useState(true)

  // Filter based on showCompleted state, then map to TaskItem components
  const displayedTasks = tasks
    .filter(task => showCompleted || !task.completed)
    .map(task => (
      <TaskItem
        key={task.id}
        text={task.text}
        completed={task.completed}
      />
    ))

  // TODO: Create a function to toggle a task's completed status
  // Hint: Use map to create a new array with the updated task
  // const toggleTask = (taskId) => {
  //   const updatedTasks = tasks.map(task => {
  //     if (task.id === taskId) {
  //       return { ...task, completed: !task.completed }
  //     }
  //     return task
  //   })
  //   setTasks(updatedTasks)
  // }

  return (
    <div className="exercise">
      <h2>7. Final Challenge: Mini Todo App</h2>
      <p>Everything combined: state, props, map, filter!</p>

      <label>
        <input
          type="checkbox"
          checked={showCompleted}
          onChange={() => setShowCompleted(!showCompleted)}
        />
        Show completed tasks
      </label>

      <ul>{displayedTasks}</ul>

      <p className="todo">
        CHALLENGE: Add a toggleTask function and make tasks clickable!
      </p>
    </div>
  )
}

// ============================================
// MAIN APP COMPONENT
// ============================================

function App() {
  return (
    <div>
      <h1>Week 4: Introduction to React</h1>
      <p>Open the console (F12) and check src/App.jsx for exercises!</p>

      <Section1_JSXBasics />
      <Section2_Components />
      <Section3_Props />
      <Section4_ListsWithMap />
      <Section5_FilteringLists />
      <Section6_State />
      <Section7_TodoApp />
    </div>
  )
}

export default App

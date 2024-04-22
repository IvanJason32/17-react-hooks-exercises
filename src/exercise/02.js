// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

// ### EXERCISE: useEffect: persistent state ###
// import * as React from 'react'

// function Greeting({initialName = ''}) {
//   // 🐨 initialize the state to the value from localStorage
//   // 💰 window.localStorage.getItem('name') ?? initialName
//   const [name, setName] = React.useState(
//     window.localStorage.getItem('name') ?? initialName)

//   // 🐨 Here's where you'll use `React.useEffect`.
//   // The callback should set the `name` in localStorage.
//   // 💰 window.localStorage.setItem('name', name)
//   React.useEffect(() => {
//     window.localStorage.setItem('name', name)
//   })

//   function handleChange(event) {
//     setName(event.target.value)
//   }
//   return (
//     <div>
//       <form>
//         <label htmlFor="name">Name: </label>
//         <input value={name} onChange={handleChange} id="name" />
//       </form>
//       {name ? <strong>Hello {name}</strong> : 'Please type your name'}
//     </div>
//   )
// }

// ### EXTRA CREDIT - lazy state initialization ###
// import * as React from 'react'

// function Greeting({initialName = ''}) {
//   const [name, setName] = React.useState(() => { 
//     return window.localStorage.getItem('name') ?? initialName })

//   React.useEffect(() => {
//     window.localStorage.setItem('name', name)
//   })

//   function handleChange(event) {
//     setName(event.target.value)
//   }
//   return (
//     <div>
//       <form>
//         <label htmlFor="name">Name: </label>
//         <input value={name} onChange={handleChange} id="name" />
//       </form>
//       {name ? <strong>Hello {name}</strong> : 'Please type your name'}
//     </div>
//   )
// }

// ### EXTRA CREDIT - effect dependencies ###
// import * as React from 'react'

// function Greeting({initialName = ''}) {
//   const [name, setName] = React.useState(() => { 
//     return window.localStorage.getItem('name') ?? initialName })

//   React.useEffect(() => {
//     window.localStorage.setItem('name', name)
//   }, [name])

//   function handleChange(event) {
//     setName(event.target.value)
//   }
//   return (
//     <div>
//       <form>
//         <label htmlFor="name">Name: </label>
//         <input value={name} onChange={handleChange} id="name" />
//       </form>
//       {name ? <strong>Hello {name}</strong> : 'Please type your name'}
//     </div>
//   )
// }

// ### EXTRA CREDIT - custom hook ###
// import * as React from 'react'

// const useLocalStorageState = (el, defaultname = '') => {
//   const [state, setState] = React.useState(() => { 
//     return window.localStorage.getItem(el) ?? defaultname 
//   })

//   React.useEffect(() => {
//     window.localStorage.setItem(el, state)
//   }, [el, state])

//   return [state, setState]
// }

// function Greeting({initialName = ''}) {
//   const [name, setName] = useLocalStorageState('name', initialName);

//   function handleChange(event) {
//     setName(event.target.value)
//   }
//   return (
//     <div>
//       <form>
//         <label htmlFor="name">Name: </label>
//         <input value={name} onChange={handleChange} id="name" />
//       </form>
//       {name ? <strong>Hello {name}</strong> : 'Please type your name'}
//     </div>
//   )
// }

// ### EXTRA CREDIT - flexible localStorage hook ###
import * as React from 'react'

const useLocalStorageState = (el, defaultname = '', {serialize = JSON.stringify, deserialize = JSON.parse} = {}) => {
  const [state, setState] = React.useState(() => { 
    const vlocalStorage = window.localStorage.getItem(el);
    if(vlocalStorage) {
      deserialize(vlocalStorage)
    }
    return typeof defaultname === 'function' ? defaultname() : defaultname
  })

  const prevKeyRef = React.useRef(el)

  React.useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey !== el) {
      window.localStorage.removeItem(prevKey)
    }
    prevKeyRef.current = el;

    window.localStorage.setItem(el, serialize(state))
  }, [el, state, serialize])

  return [state, setState]
}

function Greeting({initialName = ''}) {
  const [name, setName] = useLocalStorageState('name', initialName);

  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App

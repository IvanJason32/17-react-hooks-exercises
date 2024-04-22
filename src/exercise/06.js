// useEffect: HTTP requests
// http://localhost:3000/isolated/exercise/06.js

// ### EXCERSISE: useEffect: HTTP requests ###
// import React, {useState, useEffect} from 'react'

// // 🐨 you'll want the following additional things from '../pokemon':
// // fetchPokemon: the function we call to get the pokemon info
// // PokemonInfoFallback: the thing we show while we're loading the pokemon info
// // PokemonDataView: the stuff we use to display the pokemon info
// import {PokemonForm, PokemonInfoFallback, PokemonDataView, fetchPokemon} from '../pokemon'

// function PokemonInfo({pokemonName}) {
//   // 🐨 Have state for the pokemon (null)
//   const [pokemon, setPokemon] = useState(null);

//   // 🐨 use React.useEffect where the callback should be called whenever the
//   // pokemon name changes.
//   // 💰 DON'T FORGET THE DEPENDENCIES ARRAY!
//   useEffect(()=>{
//     setPokemon(null)
//     fetchPokemon(pokemonName).then(pokemon => {
//       setPokemon(pokemon)
//     })
//   }, [pokemonName])

//   // 💰 if the pokemonName is falsy (an empty string) then don't bother making the request (exit early).
//   // 🐨 before calling `fetchPokemon`, clear the current pokemon state by setting it to null.
//   // (This is to enable the loading state when switching between different pokemon.)
//   // 💰 Use the `fetchPokemon` function to fetch a pokemon by its name:
//   //   fetchPokemon('Pikachu').then(
//   //     pokemonData => {/* update all the state here */},
//   //   )
//   // 🐨 return the following things based on the `pokemon` state and `pokemonName` prop:
//   //   1. no pokemonName: 'Submit a pokemon'
//   //   2. pokemonName but no pokemon: <PokemonInfoFallback name={pokemonName} />
//   //   3. pokemon: <PokemonDataView pokemon={pokemon} />
// if (!pokemonName) return 'Submit a pokemon'
// if (!pokemon) return <PokemonInfoFallback name={pokemonName} />
// return <PokemonDataView pokemon={pokemon} />
//   // 💣 remove this
//   // return 'TODO'
// }

// function App() {
//   const [pokemonName, setPokemonName] = React.useState('')

//   function handleSubmit(newPokemonName) {
//     setPokemonName(newPokemonName)
//   }

//   return (
//     <div className="pokemon-info-app">
//       <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
//       <hr />
//       <div className="pokemon-info">
//         <PokemonInfo pokemonName={pokemonName} />
//       </div>
//     </div>
//   )
// }

// ### EXTRA CREDIT - handle errors ###
// import React, {useState, useEffect} from 'react'

// import {
//   PokemonForm,
//   PokemonInfoFallback,
//   PokemonDataView,
//   fetchPokemon,
// } from '../pokemon'

// function PokemonInfo({pokemonName}) {
//   const [pokemon, setPokemon] = useState(null)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     setPokemon(null)
//     setError(null)
//     fetchPokemon(pokemonName).then(pokemon => {
//       setPokemon(pokemon)
//     }).catch(error => setError(error));
//   }, [pokemonName])

//   if (error)
//     return (
//       <div role="alert">
//         There was an error:{' '}
//         <pre style={{whiteSpace: 'normal'}}>{error.message}</pre>
//       </div>
//     )
//   if (!pokemonName) return 'Submit a pokemon'
//   if (!pokemon) return <PokemonInfoFallback name={pokemonName} />
//   return <PokemonDataView pokemon={pokemon} />
// }

// ### EXTRA CREDIT - use a status ###
// import React, {useState, useEffect} from 'react'

// import {
//   PokemonForm,
//   PokemonInfoFallback,
//   PokemonDataView,
//   fetchPokemon,
// } from '../pokemon'

// function PokemonInfo({pokemonName}) {
//   const [pokemon, setPokemon] = useState(null);
//   const [error, setError] = useState(null);
//   const [status, setStatus] = useState('idle');

//   useEffect(() => {
//     setPokemon(null)
//     setError(null)
//     setStatus('pending')
//     fetchPokemon(pokemonName).then(pokemon => {
//       setPokemon(pokemon)
//       setStatus('resolved')
//     }).catch(error => {
//       setError(error)
//       setStatus('rejected')
//     });
//   }, [pokemonName])

//   if (status === 'rejected')
//     return (
//       <div role="alert">
//         There was an error:{' '}
//         <pre style={{whiteSpace: 'normal'}}>{error.message}</pre>
//       </div>
//     )
//   if (status === 'idle') return 'Submit a pokemon'
//   if (status === 'pending') return <PokemonInfoFallback name={pokemonName} />
//   if (status === 'resolved') return <PokemonDataView pokemon={pokemon} />
// }

// ### EXTRA CREDIT - store the state in an object ###
// import React, {useState, useEffect} from 'react'

// import {
//   PokemonForm,
//   PokemonInfoFallback,
//   PokemonDataView,
//   fetchPokemon,
// } from '../pokemon'

// function PokemonInfo({pokemonName}) {
//   const [state, setState] = useState({
//     pokemon: null,
//     error: null,
//     status: 'idle'
//   })
//   const {error, pokemon, status} = state;

//   useEffect(() => {
//     setState({pokemon:null, status:'pending'})
//     fetchPokemon(pokemonName).then(pokemon => {
//       setState({pokemon:pokemon, status:'resolved'})
//     }).catch(error => {
//       setState({error, status:'rejected'})
//     });
//   }, [pokemonName])

//   if (status === 'rejected')
//     return (
//       <div role="alert">
//         There was an error:{' '}
//         <pre style={{whiteSpace: 'normal'}}>{error.message}</pre>
//       </div>
//     )
//   if (status === 'idle') return 'Submit a pokemon'
//   if (status === 'pending') return <PokemonInfoFallback name={pokemonName} />
//   if (status === 'resolved') return <PokemonDataView pokemon={pokemon} />
// }

// ### EXTRA CREDIT - create an ErrorBoundary component ###
// import React, {useState, useEffect} from 'react'

// import {
//   PokemonForm,
//   PokemonInfoFallback,
//   PokemonDataView,
//   fetchPokemon,
// } from '../pokemon'

// class ErrorBoundary extends React.Component {
//   state = {
//     error: null,
//   }
//   static getDerivedStateFromError(error) {
//     return {error}
//   }
//   render() {
//     console.log(this.state.error)
//     const {error} = this.state
//     if (error)
//       return (
//         <div role="alert">
//           There was an error:{' '}
//           <pre style={{whiteSpace: 'normal'}}>{error.message}</pre>
//         </div>
//       )
//     return this.props.children
//   }
// }

// function PokemonInfo({pokemonName}) {
//   const [state, setState] = useState({
//     pokemon: null,
//     error: null,
//     status: 'idle',
//   })
//   const {error, pokemon, status} = state

//   useEffect(() => {
//     if (!pokemonName) {
//       return
//     }
//     setState({pokemon: null, status: 'pending'})
//     fetchPokemon(pokemonName)
//       .then(pokemon => {
//         setState({pokemon: pokemon, status: 'resolved'})
//       })
//       .catch(error => {
//         setState({error, status: 'rejected'})
//       })
//   }, [pokemonName])

//   if (status === 'rejected') throw new Error()
//   if (status === 'idle') return 'Submit a pokemon'
//   if (status === 'pending') return <PokemonInfoFallback name={pokemonName} />
//   if (status === 'resolved') return <PokemonDataView pokemon={null} />
// }

// ### EXTRA CREDIT - re-mount the error boundary ###
// import React, {useState, useEffect} from 'react'

// import {
//   PokemonForm,
//   PokemonInfoFallback,
//   PokemonDataView,
//   fetchPokemon,
// } from '../pokemon'

// class ErrorBoundary extends React.Component {
//   state = {
//     error: null,
//   }
//   static getDerivedStateFromError(error) {
//     return {error}
//   }
//   render() {
//     console.log(this.state.error)
//     const {error} = this.state
//     if (error)
//       return (
//         <div role="alert">
//           There was an error:{' '}
//           <pre style={{whiteSpace: 'normal'}}>{error.message}</pre>
//         </div>
//       )
//     return this.props.children
//   }
// }

// function PokemonInfo({pokemonName}) {
//   const [state, setState] = useState({
//     pokemon: null,
//     error: null,
//     status: 'idle',
//   })
//   const {error, pokemon, status} = state

//   useEffect(() => {
//     if (!pokemonName) {
//       return
//     }
//     setState({pokemon: null, status: 'pending'})
//     fetchPokemon(pokemonName)
//       .then(pokemon => {
//         setState({pokemon: pokemon, status: 'resolved'})
//       })
//       .catch(error => {
//         setState({error, status: 'rejected'})
//       })
//   }, [pokemonName])

//   if (status === 'rejected') throw new Error()
//   if (status === 'idle') return 'Submit a pokemon'
//   if (status === 'pending') return <PokemonInfoFallback name={pokemonName} />
//   if (status === 'resolved') return <PokemonDataView pokemon={null} />
// }

// ### EXTRA CREDIT - Todos los demas ###
import React, {useState, useEffect} from 'react'

import {
  PokemonForm,
  PokemonInfoFallback,
  PokemonDataView,
  fetchPokemon,
} from '../pokemon'
import { ErrorBoundary } from 'react-error-boundary'

// class ErrorBoundary extends React.Component {
//   state = {
//     error: null,
//   }
//   static getDerivedStateFromError(error) {
//     return {error}
//   }
//   render() {
//     console.log(this.state.error)
//     const {error} = this.state
//     if (error) return <this.props.fallbackComponent error={error} />
//     return this.props.children
//   }
// }

function PokemonInfo({pokemonName}) {
  const [state, setState] = useState({
    pokemon: null,
    error: null,
    status: 'idle',
  })
  const {error, pokemon, status} = state

  useEffect(() => {
    if (!pokemonName) {
      return
    }
    setState({pokemon: null, status: 'pending'})
    fetchPokemon(pokemonName)
      .then(pokemon => {
        setState({pokemon: pokemon, status: 'resolved'})
      })
      .catch(error => {
        setState({error, status: 'rejected'})
      })
  }, [pokemonName])

  if (status === 'rejected') throw new Error()
  if (status === 'idle') return 'Submit a pokemon'
  if (status === 'pending') return <PokemonInfoFallback name={pokemonName} />
  if (status === 'resolved') return <PokemonDataView pokemon={null} />
}

const FallbackComponent = ({error, resetErrorBoundary}) => (
  <div role="alert">
    There was an error:
    <pre style={{whiteSpace: 'normal'}}>{error.message}</pre>
    <button onClick={resetErrorBoundary}>Try again</button>
  </div>
)

function App() {
  const [pokemonName, setPokemonName] = React.useState('')

  function handleSubmit(newPokemonName) {
    setPokemonName(newPokemonName)
  }

  function handleReset() {
    setPokemonName('')
  }

  return (
    <div className="pokemon-info-app">
      <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
      <hr />
      <div className="pokemon-info">
        <ErrorBoundary FallbackComponent={FallbackComponent} onReset={handleReset} resetKeys={[pokemonName]}>
          <PokemonInfo pokemonName={pokemonName} />
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default App

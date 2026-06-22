import Layout from './components/Layout.jsx'
import ThemedButton from './components/ThemedButton.jsx'
import { ThemeContext } from './context/ThemeContext.jsx'
import useToggle from './hooks/useToggle.js'
import useCounter from './hooks/useCounter.js'

// A playground so `npm run dev` shows your work. Not graded.
export default function App() {
  const [on, toggle] = useToggle()
  const { count, increment, decrement, reset } = useCounter(0)
  return (
    <ThemeContext.Provider value="dark">
      <Layout>
        <h2>Custom hooks</h2>
        <p>Toggle is {String(on)} <button onClick={toggle}>toggle</button></p>
        <p>
          Count is {count}
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
          <button onClick={reset}>reset</button>
        </p>
        <h2>Context</h2>
        <ThemedButton />
      </Layout>
    </ThemeContext.Provider>
  )
}

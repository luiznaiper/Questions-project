import data from './data'
import Questions from './Questions'

function App() {
  const questions = data

  return (
    <main>
      <Questions questions={questions} />
    </main>
  )
}

export default App

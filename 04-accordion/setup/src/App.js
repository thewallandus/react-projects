import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions, setQuestions] = useState(data)
  const {id, title, info} = data

  return (
      <main>
        <div className='container'>
            <h3>Questions And Answers About Login</h3>
            <section className='info'>
              {
                questions.map((question) => {
                  return <SingleQuestion key={id} {...question} />
                })
              }
            </section>
        </div>
      </main>
  )
}

export default App;

import React, { useState } from 'react';
import data from './data';
import List from './List';
 
function App() {
  const [people, setPeople] = useState(data)
  // this sets the state data
  // which is then passed in as a prop using people

  return (
    <main>
        <section className='container'>
            <h3>{people.length} birthdays today</h3>
            <List people={people} />
            <button onClick={() => setPeople([])}>clear all</button>
        </section>
    </main>
  )
  // this is setting the main card
}

export default App;

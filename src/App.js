import React from 'react';
import Lottery from './components/Lottery';

function App() {
  return (
    <div>
      <Lottery/>
      <Lottery title="Loto King" maxSize={4}/>
      <Lottery title="Loto Master" maxSize={5} maxValue={100} />
    </div>
  )
}

export default App
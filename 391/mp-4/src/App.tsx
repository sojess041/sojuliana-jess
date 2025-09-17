import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FreesoundTest from './components/FreesoundTest.tsx';
import Search from './components/Search';
import Header from './components/Header';
import FreesoundResults from './components/FreeSoundResult';


function App() {
  const [term, setTerm] = useState('cat');

  return (
    <>
      <Header />

      <Search onSearch={(newTerm) => setTerm(newTerm)} />

      <FreesoundResults searchTerm={term} />
    </>
  );
}

export default App;
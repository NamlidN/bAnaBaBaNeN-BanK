import { useState } from 'react';
import './App.css';

function App() {

let [G ,setG] = useState(0)

let Einzahlen = () =>{
 let  AA =  Number(document.getElementById('asdf').value)
  setG(G + AA);
}
let Auszahlen = () =>{
  let  AA =  Number(document.getElementById('asdf').value)

  setG(G - AA);
}





  return (
    <div className="konto">
      <header className='header'> Bananen Bank</header>
      <div className="saldo">
        <h1 id='title'> Dein Grirokonto</h1>
  <h1 className="geldbetrag">{G}€</h1>
  </div>
  <input id="asdf"></input>
      <button className='einzahlen' onClick={Einzahlen} >  Einzahlen   </button>
      <button className='auszahlen' onClick={Auszahlen} >  Auszahlen  </button>
    </div>
  );
}

export default App;

import axios from 'axios';
import './App.css';
import { useState } from 'react';

function App () {

    const [gif, setGif ] = useState( '' )

    const getGifs = () => {
      axios.get( '/giphy').then( ( response )=>{
        setGif( response.data )
        console.log( 'in getGifs', response.data );
      })
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">APIS</h1>
          <h4><i>APIS</i></h4>
          <button onClick={ () => getGifs() }>Get Sum Gif's</button>
          <table>
            <thead>
              <tr>
                <th>Gifs:</th>
              </tr>
            </thead>
            <tbody>
                { gif ? gif.map( ( aGif, i )=>{return (<tr key={ i }><td><img src={ aGif.images.original.url } /></td></tr>)}) : <tr><td>Gifs Go here</td></tr>}
            </tbody>
          </table>
        </header>
        <br/>
      </div>
    );
  
}

export default App;

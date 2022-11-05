import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import RickItem from './components/ResidentInfo';
import frontPage from '../src/assets/image 3.png';
import inFrontPage from '../src/assets/image 2.png';
import RickLoad from "./assets/image_processing20210907-11935-193el2x.gif";

import Pagiantion  from "./components/Pagiantion";


function App() {

  const[location, setLocation]= useState({})
  const[inputId, setInputId]= useState("Escribe el nombre de la ubicación")
  const [loading, setLoading]=useState(false);
 const [characterCount,setCharacterCount]=useState(0);
let info=0;
  useEffect(() => {
    const randomId = Math.floor(Math.random ()*126)
    const pageNumber=1
    axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then(res => setLocation(res.data))
      /*---------Loading---------*/ 
      setLoading(true)
      info=location.character?.pages
setTimeout(()=>{
  setLoading(false)
},5000);
},[])

  console.log(location);
  

  const searchId = () => {
    
    axios.get(`https://rickandmortyapi.com/api/location/${inputId}`)
      .then(res => setLocation(res.data))
      setCharacterCount(location.residents.length)
  }



  return (
    
    <>
    {
           loading ?
           <div className='Loader'>
            <img className='img' src={RickLoad} alt="" />
           <h1 className='Loading'>Loading...</h1>
             </div>
           :

    <div className="App" style={{background: "#242635"}}>
      
      <div className='banner'>
        <img className='frontPage' src={frontPage} alt="" />
        <div className='divFrontPage'>
          <img className='inFrontPage' src={inFrontPage} alt="" />
        </div>
      </div>
      
      <div className='divSearch'>
        <div className='search'>
          <input className='input' type="text" value={inputId} onChange={e => setInputId(e.target.value)}/>
          <button className=' seach-button' onClick={searchId}>Search</button>
        </div>

        <div className='divInfo'>
          <div className='infoUno'><p>Nombre: <br /> <br /> {location.name} </p></div>
          <div className='infoDos'><p>Dimensión: <br /> <br /> {location.dimension}</p></div>
          <div className='infoTres'><p>Tipo: <br /> <br /> {location.type}</p></div>
          <div className='infoCuatro'><p>Población: <br />  <br />{location.residents?.length} </p></div>
        </div>
        
      

         <div >
            <ul className='charactersContainer'>
              {location.residents?.map((residents) => (
              
                <RickItem key={residents} residents={residents}/>
              ))}
            </ul>
           
        </div>
      </div>
     
     

    </div>
     }   
     </>
  )
}

export default App

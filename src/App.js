import React, { useState, useEffect } from 'react'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { MDBNavbar, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from "mdbreact";
import axios from 'axios';

const COLORS = {
  Psychic: "#f8a5c2",
  Fighting: "#f0932b",
  Fairy: "#c44569",
  Normal: "#f6e58d",
  Grass: "#badc58",
  Metal: "#95afc0",
  Water: "#3dc1d3",
  Lightning: "#f9ca24",
  Darkness: "#574b90",
  Colorless: "#FFF",
  Fire: "#eb4d4b"
}

function App() {
  const [pokemon, setPokemon] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:3004/cards')
    .then(res => {
      // console.log(res)
      setPokemon(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  })

  return (
    <div className="App">
        <MDBNavbar className="row" expand="md">
          <h3 className="text-center">My Pokédex</h3>
        </MDBNavbar>


        <div className="scroll">
          {pokemon.map(pokemon => 

          
          <div className="card m-2">
            <div className="card-body">
              <div className="row" key={pokemon.id}>
                  <div className="col-md-4 text-center">
                    <img width="150" src={pokemon.imageUrl}/> 
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-3 text-right my-2">
                          No.
                      </div>
                      <div className="col-9 my-2">
                        {pokemon.nationalPokedexNumber} 
                      </div>
                      <div className="col-3 text-right my-2">
                          Name :
                      </div>
                      <div className="col-9 my-2">
                        <span className="h5">{pokemon.name}</span>
                      </div>
                      <div className="col-3 text-right my-2">
                          Type :
                      </div>
                      <div className="col-9 my-2">
                          {pokemon.type}
                      </div>
                      <div className="col-3 text-right my-2">
                          Set :
                      </div>
                      <div className="col-9 my-2">
                          {pokemon.set}
                      </div>
                      <div className="col-3 text-right my-2">
                          HP : 
                      </div>
                      <div className="col-9 my-2">
                          <span class="badge bg-primary">{pokemon.hp}</span>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            
          )}
        </div>
        
      </div>

  );

}



export default App;

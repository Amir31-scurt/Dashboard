import { useState } from "react";
import Fruit from "./components/fruits";
import Form from "./components/form";

function App() {
  //State {etat, donnees dynamiques}
  const [fruits, setFruits] = useState([
    {id: 1, nom: "Pommes"},
    {id: 2, nom: "Bananes"},
    {id: 3, nom: "Cerise"},
    {id: 4, nom: "Mangue"},
    {id: 5, nom: "Avocado"}
  ]);
  // comportement
  const handleDelete = (id) =>{

    const fruitsCopie = [...fruits];

    const updtFruit = fruitsCopie.filter((fruit) => fruit.id != id);

    setFruits(updtFruit);
  }
  const handleChange = (event) => {
    setNouveau(event.target.value);
  }
  const [nouveauFruit, setNouveau] = useState("")
  const handleSubmit = (event) => {
    event.preventDefault();

    const copyFruits = [...fruits];

    const id = Math.floor(Math.random() *1024);

    const nom = nouveauFruit;

    const fruittoadd = {id : id, nom: nom};

    copyFruits.push(fruittoadd);

    setFruits(copyFruits);

    setNouveau("");
  }
  const showfruitpref = (fruitname) =>{
    alert(`Le fruit que j'aime le plus est : ${fruitname}`)
  }
  // affichage {render}
  
  return (
    <div>
      <h1>Liste de fruits</h1>
      <ul>
        {(fruits).map((fruit) =>{
          return (
              <Fruit key={fruit.id} fruitinfo={fruit} onClick={() => handleDelete(fruit.id)}/>
          )
        })}
      </ul>
      <Form submithandle={handleSubmit} changehandle={handleChange} fruitnew={nouveauFruit}/>
    </div>
  );
}

export default App;

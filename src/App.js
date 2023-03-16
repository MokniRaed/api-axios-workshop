import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [movies, setMovies] = useState([]);




  //--------- First methode ---------
  // axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{

  // setUsers(response.data)

  // }).catch((error)=>{ 
  //  console.log(error.response.status);
  // })

//--------- second methode ---------
  const getMovies = async ()=>{
    try{
      const response = await axios.get("https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies")
      setMovies(response.data)
    }catch(error){
      console.log(error.message);
    }
  }


  
  useEffect(() => {
      
    getMovies()
    
    },[])

  return (
    <div className="App">
     {movies.map((ele) => <div><h2>{ele.Title}</h2> <img alt={ele.Title} src={ele.image}/></div>)}
    </div>
  );
}

export default App;

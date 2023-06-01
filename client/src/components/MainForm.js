import React, {useState} from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const MainForm = () => {
    const navigate = useNavigate()
  
    const {id} = useParams()
    
    const [name, setName] = useState('')
    
    const [year, setYear] = useState('')
    
    const [genre, setGenre] = useState('')
    
    const [collab, setCollab] = useState(false)
    
    const [boxArt, setBoxArt] = useState('')

    const [myGames, setMyGames] = useState({})

    const [errors, setErrors] = useState([]);
    

    const submitHandler = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/Games', {
            name : name,
            year: year,
            genre: genre,
            collab: collab,
            boxArt: boxArt
            
        }).then((res)=>{
            console.log("LOOK HERE--->", res);
            navigate(`/new/${res.data._id}`)
        }).catch((err)=>{
            // console.log(err)
            // console.log("found me", err);

            setErrors(err.response.data.errors)
        })
    }

  return (
    <div className="col-6 mx-auto">
        <h1>Add Video Game</h1>
        
        <Link to={'/'}>Go Back Home</Link>
        
        <form onSubmit={submitHandler} className="row g-3" >
            <label className="Main-label">Video Game Name:</label>
            <input value={name} type="text" className="Main-control" onChange={(e)=>setName(e.target.value)} />
            
            <label className="Main-label">Year Released:</label>
            <input value={year} type="text" required pattern="\d{4}-\d{2}-\d{2}" className="Main-control" onChange={(e)=>setYear(e.target.value)} />
            
            <label className="visually-hidden">Genre:</label>
            <select value={genre} type="text" className="Main-control" onChange={(e)=>setGenre(e.target.value)} >
                <option>Select a Genre</option>
                <option value="Action">Action</option>
                <option value="Shooter">Shooter</option>
                <option value="Sports">Sports</option>
                <option value="Platform">Platform</option>
                <option value="Survival">Survival</option>
                <option value="Role Playing">Action</option>
                <option value="Real Time Strategy">Real Time Strategy</option>
                <option value="Racing">Racing</option>           
            </select>
        
            <label className="Main-label">Co-op?</label>
            <input value={collab} type="checkbox" onChange={(e) => setCollab(!collab)} />
            
            <label className="Main-label">Box Art:</label>
            <input value={boxArt} type="text" className="form-control" onChange={(e)=>setBoxArt(e.target.value)} />
        
            
        </form>
            <button id="add-btn" onClick={submitHandler} className="btn btn-primary">Add New Game</button>
    </div>
  )
}

export default MainForm;
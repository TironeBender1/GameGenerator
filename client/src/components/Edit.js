import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom'



const Edit = (props) => {
    // const [item, setItem] = useState([])
    
    const navigate = useNavigate()
  
    const {id} = useParams()

    const [name, setName] = useState('')
    
    const [year, setYear] = useState('')
    
    const [genre, setGenre] = useState('')
    
    const [collab, setCollab] = useState('')
    
    const [boxArt, setBoxArt] = useState('')

    const [errors, setErrors] = useState([]);
   
    useEffect(() => {
        axios.get(`http://localhost:8000/api/selectOneGame/${id}`)
            .then((res) => {
                console.log("HEY YOU THERE!!", res.data);
                // setItem(res.data.item)
                setName(res.data.name)
                setYear(res.data.year)
                setGenre(res.data.genre)
                setCollab(res.data.collab)
                setBoxArt(res.data.boxArt)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    
    const submitHandler = (e) => {
        e.preventDefault();
    
        axios.put(`http://localhost:8000/api/updateGame/${id}`, {
            name, 
            year,
            genre,
            collab, 
            boxArt
        })
        .then((res) => {
            console.log("LOOK HERE--->",res);
           navigate('/')
        })
        .catch((err) => {
            console.log("finding me", )
            console.log("found me", err);
    
            // setErrors(err.response.data.errors)
        })
      }
    
    return (
        <div className='p-4'>
            <h2 className='mb-5'>EDIT GAME</h2>
            
            <form onSubmit={submitHandler}>
                    <Link to={'/'}>Go Back Home</Link>
                
                <div className='d-flex flex-wrap justify-content-around'>
                    
                        <div className='for-floating mb-3'>
                            
                            <label className="form-label">Video Game Name</label>
                            <input type="text" className="form-control" defaultValue={name} onChange={(e) => setName(e.target.value)}></input>
                            
                            <label>Year Released</label>
                            <input type="text" className="form-control" defaultValue={year} onChange={(e) => setYear(e.target.value)}></input>

                            <label className="visually-hidden">Genre</label>
                                <select type="text" className="Main-control" defaultValue={genre} onChange={(e) => setGenre(e.target.value)} >
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
                                
                            <label>Co-op</label>
                            <input type="checkbox" value={collab} onChange={(e) => setCollab(!collab)}></input>

                            <label>Box Art</label> 
                            <img type="text" src={boxArt}></img> 
                        
                        </div>
                        
                    
                </div>
                    <button className="btn btn-primary">Game Added</button>
            </form>
        </div>
    )
}

export default Edit;
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useParams, useNavigate} from 'react-router-dom';



const AllGames = (props) => {
    
    const [list, setList] = useState([])

    const navigate = useNavigate()

    const {id} = useParams()

    const [name, setName] = useState('')
    
    const [year, setYear] = useState('')
    
    const [genre, setGenre] = useState('')
    
    const [collab, setCollab] = useState('')
    
    const [boxArt, setBoxArt] = useState('')

    
    
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/getAll')
        .then((res) => {
            console.log(res.data);
            setList(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])
    
    const submitHandler = (e) => {
        e.preventDefault();
        
        axios.put(`http://localhost:8000/api/addGame/${id}`, {
            name, 
            year,
            genre, 
            collab,
            boxArt 
            
        }) 
        .then((res) => {
            console.log("LOOK HERE--->",res);
            navigate('/new/')
        })
        .catch((err) => {
            console.log("finding me", )
            console.log("found me", err);
            
            // setErrors(err.response.data.errors)
        })
    }
    
    const deleteGame = (item) => {
        console.log("HERE!!")
        axios.delete('http://localhost:8000/api/deleteGame/' + item)
            .then(res => {
                removeFromDom(item)
            })
            .catch(err => console.log(err))
    }
    
    const removeFromDom = (id) => {
        setList(list.filter(item => item._id !== id)); //We could also write this in our PersonList component
    }
    return (
        <div className='p-4'>
            <nav className='navbar navbar-expand-lg bg-body-tertiary'>
                <h2 className='container-md'>Video Game Generator</h2>
            </nav>
            <div className='d-flex flex-wrap justify-content-around'>
            
        {
            list.map((item) => (
                    
            <div className='p-3 m-3 w-25 item' key={item._id}>
                        <div className="card">
                            <img src={item.boxArt} className="card-img-top"/>
                            <div className="card-body">
                                <p className="text-primary">Video Game Name: {item.name}</p>
                                                
                                <p>Year Released: {item.year}</p>
                                
                                <p>Genre: {item.genre}</p>
                                
                                <p>Co-Op: {item.collab ? "true" : "false"}</p>
                    <Link to={`/edititem/${item._id}`} className='btn border'>Edit Game</Link>
                    <button onClick={(e)=>{deleteGame(item._id)}} className="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    
            </div>

                ))
            }
   
            </div>
        <Link to={'/new'} className="btn btn-primary btn-sm">Add a New Game</Link> 
        </div>
    )
}

export default AllGames;
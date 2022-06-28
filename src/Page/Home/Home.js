import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [user, setUser]= useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/user')
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[])


    const deleteHandler = (id) =>{
        const proced = window.confirm('are yout sure product delete');
        if(proced){
            console.log('deleteing users', id)
            const url = `http://localhost:5000/user/${id}`;
            fetch(url, {
                method: "DELETE",

            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount > 0){
                    console.log('delete');
                    const remaing = user.filter( u=> u._id !== id);
                    setUser(remaing);
                }
            })
        }
        
    }
    return (
        <div>
            <h1>Total user {user.length}</h1>
            <ul>
            {
                user.map(u=> {
                    return <li key={u._id}>{u.email}:: {u.name} <Link to={`/update/${u._id}`}><button>Update</button></Link> <button onClick={()=>deleteHandler(u._id)}>X</button></li>
                })
            }
            </ul>
        </div>
    );
};

export default Home;
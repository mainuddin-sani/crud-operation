import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
    const {id} = useParams();
    const [user, setUser] = useState({});
    
    useEffect(()=>{
        fetch(`http://localhost:5000/user/${id}`)
        .then(res=>res.json())
        .then(data=>setUser(data));
    },[])

    const uppdateUserHandler = (e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const user = {name,email};

        // send data to the server
        const url = `http://localhost:5000/user/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: { 
                'content-type': 'application/json',
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            
            console.log('success', data)
            alert('users added succeassfully!!');
            e.target.reset();
        });
    }
    return (
        <div>
            user id : {user.name};

            <form action="" onSubmit={uppdateUserHandler}>
                <input type="text" placeholder='name' name='name' required />
                <br />
                <input type="email" placeholder='email' name='email' required/>
                <br />
                <input type="submit" value='Add user' />
            </form>
        </div>
    );
};

export default Update;
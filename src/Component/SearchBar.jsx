import React, { useState } from 'react'

export const SearchBar = () => {
    const [name, setName] = useState("");
    const [data,setData] = useState([]);

    const handleData = () => {
        fetch(`http://localhost:3000/items?q=${name}`)
        .then(res => res.json())
        .then(res => setData(res))
        .catch(err=>console.log(err));
        console.log(data);
    };
  return (
    <div>
        <input type="text" value={name} placeholder='Search for name' onChange={(e)=>{setName(e.currentTarget.value); handleData()}}/>
        <button onClick={()=> {handleData(); setName("")}}>Show User</button>
        <div style={{display:"flex", flexDirection: "column"}}>
            {data.map((users) => (
                <>
                    <strong>{users.first_name} {users.last_name}</strong>
                    <img src={users.image} alt="img" style={{height:"100px", width:"100px"}}/>
                </>
            ))}
        </div>
    </div>
  )
}

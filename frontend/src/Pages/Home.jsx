import React, { useState,  useEffect } from 'react'
import axios from "axios"

function Home() {

    // const [user, setUser] = useState([]);
  
    // async function getuser(){
    //   let res = await axios.get(`http://localhost:8080/auth/user`);
    //   console.log(res.user);
    //    setUser(res.user);
    // }


    // useEffect(() => {
    //    getuser()
    // },[])


    return (

        <div className="userForm" id="form">
             <div>
            <img style={{borderRadius:"50%", height:"300px", width:"300px", textAlign:"center", alignItems:"center"}}
             src={"https://avatars.githubusercontent.com/u/103947245?v=4"} alt=""/>
             <h3>NAME:PRIYA</h3>
             <h3>ROLE: ADMIN</h3>
             <h3>email: admin@gmail.com</h3>
            </div>
            
            {/* {
                user.map((e,i)=> {
                  return  <div id="box" key={i}>
                <img src={e.image} alt="chi"/>
                <p>{e.name}</p>
                <h4>{e.role}</h4>
                <h4>{e.email}</h4>
                <button>NEXT</button>
        </div>

                })
            } */}
        </div>
      
   
    )
}

export default Home

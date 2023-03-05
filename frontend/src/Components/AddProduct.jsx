import React from 'react'
import AdminPage from '../Pages/AdminPage'

function AddProduct() {

    function handleChage(){

    }

    function handleSubmit(){

    }

    return (
       
        <form id="form" onSubmit={() => handleSubmit()}>
             <div className="logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGgfibWYuOOoezeZM5qYi0JH9vECfRll6udw&usqp=CAU" alt="logo"/>
        </div>
            <input type="src" placeholder='image' name='image' onChange={() => handleChage()}/> 
            <input type="text" placeholder='name' name='name' onChange={() => handleChage()}/> 
            <input type="text" placeholder='descrption' name='descrption' onChange={() => handleChage()}/> 
            <input type="number" placeholder='price' name='price' onChange={() => handleChage()}/> 
            <input type="text" placeholder='category' name='category' onChange={() => handleChage()}/> 
            <input type="Submit" /> 
        </form>

    )
}

export default AddProduct

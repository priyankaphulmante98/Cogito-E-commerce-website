const express = require('express')

const app= express()

const user_route = require('./Routes/user.route')

require('./Config/db')

app.use(express.urlencoded({extended:true}))

app.use(express.json())

app.use('/auth/user',user_route)


app.listen(8080,()=> {console.log('server started at port 8080')})
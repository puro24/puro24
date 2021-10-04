const express= require("express")
const app = express()
const port = process.env.PORT||17400
const path = require("path")

require('./conn')
const Register= require('./schema')

const static_path= path.join(__dirname,'/public')

//console.log(static_path)
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(express.static(static_path))

app.get("/save", (req,res)=> {

     res.redirect("/save.html")

})


app.post("/contact",async (req2,res2) =>{

    try{

    const recsave = new Register({
     
        first_name: req2.body.firstname,
        last_name: req2.body.lastname,
        email: req2.body.email,
        country: req2.body.country,
        state: req2.body.state,
        contact_no:req2.body.contact
             
    })
    
    const saved = await recsave.save();
    res2.status(201).redirect("/save")

}catch(err){
 res2.status(400).send(err)
}
})
app.listen(port,() =>
{
       console.log(`server is connected to port ${port}`)
                    
})


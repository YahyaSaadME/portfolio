const path = require("path")

const express = require("express")
const app = express()
app.use(express.json())
const publicPath = path.join(__dirname, '../public/User');
app.use(express.static( path.join(__dirname, '../public')));
app.use(express.static(publicPath));

require("../src/conn")
const CM = require("../src/schema/ContactSchema")


app.get('/', (req, res) => {
    res.sendFile("./index.html");
})
app.get("/projects", (req, res) => {
    res.json({ msg: "in" })
})
app.post("/contact", async (req, res) => {
    try {
        const { name, email, desc } = req.body
        const addData = await CM.create({ name, email, desc })
        if (addData) {
            res.json({ msg: "😁 Thankyou for contacting you will soon receive an email!", sent: true })
        } else {
            res.json({ msg: "Oops! 😓, Something went wrong!", sent: false })
        }
    } catch (error) {
        res.json({ msg: "Oops! 😓, Something went wrong!", sent: false })
    }


})
app.listen(process.env.PORT || 5000, _ => {
    console.log("Server listening on port 5000...");
})
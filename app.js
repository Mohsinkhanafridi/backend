import express from "express";
import { products } from "./products.js";
import { posts } from "./allData/post.js";
import { albums } from "./allData/albums.js";
import { photos } from "./allData/photos.js"
import { todos } from "./allData/todos.js";
import { users } from "./allData/users.js";

const app = express();



// Routes 

app.get('/', (req, res) => {
    res.send(`<div>
    <h1>My all api</h1>
    <ul>
    <li>Post : localhost:8080/post</li>
    </ul>
    </div>`)
})
app.get('/products', (req, res) => {
    res.status(200).send({ user:{name:"sadiq",age:23},status:"success", allProducts:products})
})

app.get('/posts', (req, res) => {
    res.status(200).send({status:true,allPosts:posts})
})

// app.get('*', (req, res) => {
//     res.status(404).send({message:"page not found"})
// })




app.get('/products/:id', (req, res) => {
    res.status(200).send(`my id is ${data?.id}`)
})

app.get('/albums', (req, res) => {
    console.log('Accessing /albums route');
    console.log('Albums data:', albums);

    if (albums && albums.length > 0) {
        res.status(200).send({ albums });
    } else {
        res.status(404).send({ message: "No albums found" });
    }
});

app.get('/photos', (req, res) => {

    if (photos && photos.length > 0) {
        res.status(200).send({ photos });
    } else {
        res.status(404).send({ message: "No photos found" });
    }
});
app.get('/todos', (req, res) => {

    if (todos && todos.length > 0) {
        res.status(200).send({ todos });
    } else {
        res.status(404).send({ message: "No todos found" });
    }
});

app.get('/users', (req, res) => {

    if (users && users.length > 0) {
        res.status(200).send({ users });
    } else {
        res.status(404).send({ message: "No users found" });
    }
});



//server listner
app.listen(8080, () => {
    console.log("server started ")
})
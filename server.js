const express = require('express');

const expressGraphQL = require('express-graphql').graphqlHTTP

const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();

app.use(cors());

mongoose.connect('mongodb+srv://Rehan:Rehan12345@cluster0.xjga2.mongodb.net/Project0?retryWrites=true&w=majority',
{useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open',()=>{
    console.log('coonection made');
});

// mongodb+srv://Rehan:Rehan12345@cluster0.xjga2.mongodb.net/Project0?retryWrites=true&w=majority

app.use('/graphql', expressGraphQL({
    schema,
    graphiql:true,
}))

app.listen(4000,() => {
    console.log('losuhdjs');

});
import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./schema";

const app = express();
const port = 4000

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

console.log('Starting the server');
app.listen(port, ()=>{
  console.log(`Server started on port: ${port}`);
})

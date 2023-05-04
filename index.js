import { makeExecutableSchema } from 'graphql-tools';
import { graphql } from 'graphql';

const typeDefs = `
schema {
    query: Query
}
type Query {
    hello: String
}
`;

const resolvers = {
    Query: {
        hello: () => 'World'
    }
}

const schema = makeExecutableSchema({ typeDefs, resolvers })

const query = process.argv[2] 

// argv is an array gives us the following from the command line:
// argv = [
// 'node',
// 'index.js',
// 'query { hello }'
// ]

// Since we want the query, we specify the indice of what we want

graphql(schema,query).then(result => {
    console.log(JSON.stringify(result,null, 2))
})
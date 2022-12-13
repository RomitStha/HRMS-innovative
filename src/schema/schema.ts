import {GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLInt, GraphQLList} from 'graphql'


const books = [
    {title:' My book', id: '1', genre: 'thriller', authorId:'1'},
    {title: 'History of the World', id: '2',genre: 'history',authorId: '2'},

]

const authors = [
    {name: 'Romit', age:'23',rating: 5, id: '1'},
    {name: 'Parmod',age:'52',rating:5, id:'2'},
    {name:'Anish',age:'24',rating:5,id:'3'}
]
const BookType = new GraphQLObjectType({
    name:'Book',
    fields: () => ({
id: {
    type: GraphQLString,
},
title:{
    type:GraphQLString,
},
genre:{
    type:GraphQLString,
},
author:{
    type: AuthorType,
    resolve(parent,args){
        //parent.authorId
        return authors.filter((a) => a.id === parent.authorId)[0]
    },
},


    }),
});

const AuthorType: GraphQLObjectType = new GraphQLObjectType({
    name: 'Author',
    fields:() =>({
id:{
    type: GraphQLString,
},
name:{
    type: GraphQLString,
},
rating:{
    type: GraphQLInt,
},
books: {
    type: new GraphQLList(BookType),
    resolve(parent,args){
        return books.filter((b)=> b.authorId === parent.id)
    },
},
    })
})


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        book: {
            type:BookType,
            args: {id: {type: GraphQLString}},
            resolve(parent,{id}){
                //where we do the fetch of data from DB
                return books.filter((b) => b.id === id)[0];
            
            },
        }, 
        author:{
            type:AuthorType,
            args: {id: {type: GraphQLString}},
            resolve(parent,{id}){
                return authors.filter((a) => a.id === id)[0]
            }
        }

    },
});

export default new GraphQLSchema({
    query: RootQuery
});
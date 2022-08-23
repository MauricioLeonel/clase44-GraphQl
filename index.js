const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const schemas = require('./schemas')//aca defino los type model, consultas y mutaciones
const productos = require('./functionGraph')//aca estan las funcionalidades
const app = express()
require('./db')()//ejecuto la base de datos


app.use('/graphql',graphqlHTTP({
	schema:schemas,
	rootValue:{
		productos:productos.getAll(),
		productosById:(data)=> productos.getById(data.id),
		addProducto:(data)=> productos.insertData(data),
		updateProducto:(data)=>productos.updateById(data),
		deleteProducto:(data)=>productos.deleteById(data.id)
	},
	graphiql:true
}))



app.listen('8080',()=>{
	console.log('todo oki')
})
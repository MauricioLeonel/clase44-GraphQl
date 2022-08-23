const {buildSchema} = require('graphql')


const schema = buildSchema(`
	type modelsProductos{
		id:Int,
		nombre:String,
		descripcion:String,
		foto:String,
		codigo:String,
		precio:Int,
		stock:Int
	}
	type Query{
		productos:[modelsProductos]
		productosById(id:Int):[modelsProductos]
	}
	type Mutation{
		addProducto(nombre:String,descripcion:String,foto:String,codigo:String,precio:Int,stock:Int):modelsProductos
		updateProducto(id:Int,nombre:String,descripcion:String,foto:String,codigo:String,precio:Int,stock:Int):modelsProductos
		deleteProducto(id:Int):modelsProductos
	}
`)


module.exports = schema




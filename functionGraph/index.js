const modelsProductos = require('../models/modelsProductos.js')

class Productos {
	constructor(models){
		this.models = models
	}

	getAll = async()=>{
		const result = await this.models.find()
		return result
	}
	getById = async(element)=>{
		element = parseInt(element)
		const result = await this.models.find({_id:element})
		console.log(result)
		if(result.length > 0 ){
			return result
		}else{
			throw new Error('no existe el elemento')
		}
	}

	insertData = async(data)=>{
		// console.log(data)
		const id = await this.getAll()
		let id2
		if(id.length > 0){
			id2 = id[id.length-1]._id + 1
		}else{
			id2 = 1
		}
		data = {...data, _id:id2}
		const result = new this.models(data)

		return await result.save()
	}
	updateById = async(element)=>{
		try{
			const {id}=element
			const result = await this.models.findOneAndUpdate({_id:id},
				{
					$set:element
				},
				{
					new:true
				}
			)
			if(result){
				return result
			}else{
				throw new Error('no existe el articulo')
			}
		}catch(e){
			return e
		}
	}
	deleteById = async(id)=>{
		try{
			const result = await this.models.deleteOne({_id:id})
			// console.log(result)
			if(result.deletedCount > 0){
				return 'se borro el elemento'
			}else{
				throw new Error('no existe el elemento')
			}
		}catch(e){
			return e
		}
	}

}


module.exports = new Productos(modelsProductos)
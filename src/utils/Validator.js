export default class Validator{
	static validProduct(product){
		const {description,} = product;
		if(description.length < 3){
			throw new Error('Descrição deve estar entre 3 e 50 caaracteres');
		}else{
			return product;
		}

	}
}
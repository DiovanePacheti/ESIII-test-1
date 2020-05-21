export default class Validator{

	static validProduct(product){

		const {description,} = product;

		if(description.length < 3 || description.length > 50){
			throw new Error('Descrição deve estar entre 3 e 50 caaracteres');
		}
			return product;
		

	}//fim do method static
}//fim da class
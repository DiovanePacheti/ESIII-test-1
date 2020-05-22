export default class Validator{

	static validProduct(product){
		const {description} = product;
		if(description.length < 3 || description.length > 50){
			throw new Error('Descrição deve estar entre 3 e 50 caaracteres');
		}
		return product;
	}//fim do method static

	static validPrice(product){
		const {buyPrice, sellPrice} = product;
		if(sellPrice < buyPrice){
			throw new Error('O valor lo de venda nao pode ser menor que compra');
		}
		return product;
	}

	static validPriceNeg(product){
		const {buyPrice, sellPrice} = product;
		if((buyPrice < 0) || (sellPrice < 0)){
			throw new Error('valor de compra oude venda nao pode ser negativo');
		}
		return product;
	}


}//fim da class
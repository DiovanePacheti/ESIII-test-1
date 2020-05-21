import {uuid} from 'uuidv4';

class Product {
	constructor(id = uuid(),code ,description, buyPrice, sellPrice, tags, lovers = 0){
		this.id = id;
		this.code = code;
		this.description = description;
		this.buyPrice = buyPrice;
		this.sellPrice = sellPrice;
		this.tags = tags;
		this.lovers = lovers;
	}
}
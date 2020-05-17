/* eslint-disable no-param-reassign */
/* eslint-disable eqeqeq */
/* eslint-disable no-return-assign */
import express from 'express';
import cors from 'cors';
import { uuid } from 'uuidv4';

const app = express();

app.use(express.json());
app.use(cors());

let products = [];

app.get('/products', (request, response) => {
  // TODO: listagem de todos os produtos

  return response.status(200).json(products);
});

app.post('/products', (request, response) => {
  // TODO: Salvar produto no array products
  	//desestruturando o objeto
  	const {code, description, buyPrice, sellPrice,tags}= request.body;

  	const productsLoversExist = products.find(element => element.code == code);
  	let lovers;

  	if(productsLoversExist == undefined){

  		lovers = 0
  	}else{
  		lovers = productsLoversExist.lovers; 
  	} 

  	const id = uuid();
  	let cadastraProduto = {
  		id,
  		code,
  		description,
  		buyPrice,
  		sellPrice,
  		tags,
  		lovers
  		
  	}
  
    products.push(cadastraProduto);

  	return response.status(201).json(cadastraProduto);

});

app.put('/products/:id', (request, response) => {
  // TODO: Atualiza produto por ID
  const {id} = request.params;

  const {code, description, buyPrice, sellPrice,tags} = request.body;
  
  
  const updateProducts = products.find(element => element.id === id);

  if(!updateProducts){
  	return response.status(400).json({error:"usuario nao encontrado id incorreto !"})
  }
 // console.log(updateProducts)
  updateProducts.description = description;
  return response.status(200).json(updateProducts)
});

app.delete('/products/:code', (request, response) => {
  // TODO: Remove TODOS os produtos que possuam o código passado por parâmetro
  const {code} = request.params;

  let productsDelete = products.findIndex(element => element.code == code);

  if(productsDelete == -1){
  	return response.status(400).json({error:"produto nao deletado"})
  }
  products.splice(productsDelete);//removendo o produto encontrado 


  return response.status(204).json(products) 


});

app.post('/products/:code/love', (request, response) => {
  // TODO: Incrementa em 1 o número de lovers de todos os produtos que possuam 
  // o code do parâmetro
  const {code} = request.params;

  // const [result] = products.filter(element => (element.code == code)).map(element => (element.lovers += 1));
  let result = products.find(element => element.code == code)
  if(result){
	  result.lovers += 1;
  	  return response.status(201).json(result);	
  }	  
  console.log(products)
});

app.get('/products/:code', (request, response) => {
  // TODO: Busca de todos os produtos com o código recebido por parâmetro.
  const {code} = request.params;

  const listaProducts = products.filter(element => element.code == code);

  return response.status(200).json(listaProducts);
});

export default app;

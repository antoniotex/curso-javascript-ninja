(function(){	/*
	Envolva todo o conteúdo desse arquivo em uma IIFE.
	*/

	/*
	Crie um objeto chamado `person`, com as propriedades:
	    `name`: String
	    `lastname`: String
	    `age`: Number
	Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
	de valor para cada propriedade.
	*/
	var person = {
		name: 'Antonio Carlos',
		lastName: 'Teixeira',
		age: 29
	}
	console.log( 'Propriedades de "person":' );

	/*
	Mostre no console, em um array, todas as propriedades do objeto acima.
	Não use nenhuma estrutura de repetição, nem crie o array manualmente.
	*/
	var arr = [];
	arr.push(person);

	/*
	Crie um array vazio chamado `books`.
	*/
	var books = [];

	/*
	Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
	seguintes propriedades:
	`name`: String
	`pages`: Number
	*/
	books.push({nome: 'html', pages: 500}, {name: 'java', pages: 200}, {nome: 'JS Ninja', pages: 20});
	console.log( '\nLista de livros:' );

	/*
	Mostre no console todos os livros.
	*/
	books;

	console.log( '\nLivro que está sendo removido:' );
	/*
	Remova o último livro, e mostre-o no console.
	*/
	removed = books.pop();
	removed;

	console.log( '\nAgora sobraram somente os livros:' );
	/*
	Mostre no console os livros restantes.
	*/
	books;

	/*
	Converta os objetos que ficaram em `books` para strings.
	*/
	books = JSON.stringify(books);
	console.log( '\nLivros em formato string:' );

	/*
	Mostre os livros nesse formato no console:
	*/
	console.log(JSON.stringify(books));

	/*
	Converta os livros novamente para objeto.
	*/
	books = JSON.parse(books);
	console.log( '\nAgora os livros são objetos novamente:' );

	/*
	Mostre no console todas as propriedades e valores de todos os livros,
	no formato abaixo:
	    "[PROPRIEDADE]: [VALOR]"
	*/
	for(i = 0; i < books.length; i++){
		console.log(books[i]);
	}

	/*
	Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
	seu nome. Adicione seu nome completo no array.
	*/
	var myName =['Antonio Carlos'];
	myName = string.split('');


	console.log( '\nMeu nome é:' + myName.join(''));
	/*
	Juntando todos os itens do array, mostre no console seu nome.
	*/
		

	console.log( '\nMeu nome invertido é:' );
	/*
	Ainda usando o objeto acima, mostre no console seu nome invertido.
	*/
	var inverted;
	inverted = myName.reverse();
	inverted = myName.join('');

	console.log( '\nAgora em ordem alfabética:' );
	/*
	Mostre todos os itens do array acima, odenados alfabéticamente.
	*/
	alphabetic = myName.sort();
})();
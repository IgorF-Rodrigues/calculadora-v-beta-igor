const tela = document.querySelector('.display');
const botao = document.querySelectorAll('.tecla');

let primeiroNumero;
let segundoNumero;
let simbolo;

botao.forEach((elemento) => {
	elemento.addEventListener('click', (num) => {
		let tecla = `${num.target.textContent}`;
		comparacao(tecla);
	});
});

function comparacao(tecla) {
	if (tecla === '+' || tecla === '-'|| tecla === '*' || tecla === '/' || tecla === '%') {
		primeiroNumero = Number(tela.textContent);
		tela.innerHTML = '';
		tela.innerHTML += tecla;
		simbolo = tecla;
		tela.innerHTML = '';
	} else if (tecla === '=') {
		segundoNumero = Number(tela.textContent);
		switch (simbolo) {
			case '+': 
				soma(primeiroNumero, segundoNumero);
				break;
			case '-':
				subtracao(primeiroNumero, segundoNumero);
				break;
			case '*':
				multiplicacao(primeiroNumero,segundoNumero);
				break;
			case '/':
				divisao(primeiroNumero, segundoNumero);
				break;
			case '%':
				resto(primeiroNumero,segundoNumero);
				break;		
		};
	} else if (tecla === 'Apagar') {
		tela.innerHTML = '';
	} else if (tecla === '.') {
		tela.innerHTML += tecla;
	
	} else {
		tela.innerHTML += Number(tecla);
	};
};

function soma (primeiroNumero, segundoNumero) {
	let resultado = primeiroNumero + segundoNumero;
	tela.innerHTML = resultado;
};

function subtracao (primeiroNumero, segundoNumero) {
	let resultado = primeiroNumero - segundoNumero;
	tela.innerHTML = resultado;
};

function multiplicacao (primeiroNumero, segundoNumero) {
	let resultado = primeiroNumero * segundoNumero;
	tela.innerHTML = resultado;
};

function divisao (primeiroNumero, segundoNumero) {
	let resultado = primeiroNumero / segundoNumero;
	tela.innerHTML = resultado;
};

function resto (primeiroNumero, segundoNumero) {
	let resultado = primeiroNumero % segundoNumero;
	tela.innerHTML = resultado;
};
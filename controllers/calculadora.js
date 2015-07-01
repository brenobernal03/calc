module.exports = function() {
	var Controller = {
		utils: {
			formatarResposta: function(resultado) {
				var accounting = require('accounting');
				var resposta   = {
					resultado: 0.0
				};
				
				resultado = accounting.formatNumber(resultado, 2, ".", ",");
				resposta.resultado = resultado;
				
				return resposta;
			},
			
			calculos: {
				calcular: function(parametros) {
					var numero1 = parseFloat(parametros.numero1);
					var numero2 = parseFloat(parametros.numero2);
					
					var resultado = Controller.utils.calculos[parametros.operacao](numero1, numero2);
					
					return resultado;
				},
				
				somar: function(numero1, numero2) {

                    resultado = numero2 + numero1;
                    return resultado;
				},
				
				subtrair: function(numero1, numero2) {
                    resultado = 0;
                    resultado = numero1-numero2;
                    return resultado;
				},
				
				multiplicar: function(numero1, numero2) {
                    resultado = 0;
                    resultado = numero1 * numero2;
                    return resultado;
				},
				
				dividir: function(numero1, numero2) {
                    resultado = 0;
                    resultado = numero1 / numero2;
                    return resultado;
				},

                elevarQuadrado: function(numero1){
                    resultado = 0;
                    resultado =  numero1 * numero1;
                    return resultado;
                },

                elevarCubo: function(numero1){
                    resultado = 0;
                    resultado = numero1 * numero1 * numero1;
                    return resultado;
                },



                metade: function(numero1){
                    resultado = 0;
                    resultado = numero1 / 2;
                    return resultado;
                },

                diasHoras: function(numero1){
                    resultado = 0;
                    resultado = numero1 * 24;
                    return resultado;
                },

                horasMinutos: function(numero1){
                    resultado = 0;
                    resultado =  numero1 * 60;
                    return resultado;

                },

                minutosSegundos: function(numero1){
                    resultado = 0;
                    resultado  = numero1 * 60;
                    return resultado;
                },

                realDolar: function(numero1){
                    resultado = 0;
                    resultado = numero1 * 3;
                    return resultado;
                },

                dolarReal: function(numero1){
                    resultado = 0;
                    resultado = numero1 /3;
                    return resultado;
                },

                celsiusKelvin: function(numero1) {
                    resultado = 0;
                    resultado = numero1 + 273;
                    return resultado;
                },

                juros: function (numero1, numero2){
                    resultado = 0;

                    resultado = (numero1 +(numero1 * (15/100)));
                    return resultado;
                },

                idade: function (numero1){
                    resultado = 0;
                    resultado = 2015 -numero1;
                    return resultado;
                },

                maior: function (numero1, numero2){
                    resultado = 0;
                    if(numero1 > numero2)
                    {
                        resultado = numero1;
                    }

                    if(numero1 < numero2)
                    {
                        resultado = numero2;
                    }
                    return resultado;
                },

                menor: function (numero1, numero2){
                    resultado = 0;
                    if(numero1 < numero2)
                    {
                        resultado = numero1;
                    }

                    if(numero1 > numero2)
                    {
                        resultado = numero2;
                    }
                    return resultado;
                },

                media: function (numero1, numero2)
                {
                    resultado = 0;
                    resultado = numero1 + numero2;
                    resultado = resultado / 2;
                    return resultado;

                },

                menor2: function (numero1, numero2){
                    resultado = 0;
                    if(numero1 < numero2)
                    {
                        resultado = numero1;
                    }

                    if(numero1 > numero2)
                    {
                        resultado = numero2;
                    }
                    return resultado;
                },

                somarMultaLivroapos30dias: function(numero1) {

                    resultado = Number(0);
                    resultado += numero1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    resultado += 1;
                    return resultado;
                },

                somaMultaObraReferenciaApos40dias: function(numero1) {
                    resultado = Number(0);
                    resultado += numero1;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    return resultado;
                },

                somaMultaObraReferenciaApos40dias2: function(numero1) {
                    resultado = Number(0);
                    resultado += numero1;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    resultado += 3;
                    return resultado;
                }





















            },
			
			validaParametro: function(parametro) {
				if(parametro && parametro !== '') {
					return parseFloat(parametro);
				}
				
				return 0.0;
			},
			
			extrairParametros: function(body) {
				var parametros = {
					numero1: 0.0,
					numero2: 0.0,
					operacao: body.operacao
				};
				
				parametros.numero1 = Controller.utils.validaParametro(body.numero1);
				parametros.numero2 = Controller.utils.validaParametro(body.numero2);
				
				return parametros;
			}
		},
		
		get: {
			index: function(request, response) {
				response.render('index');
			},
			
			somar: function(request, response) {
				response.render('somar');
			},
			
			subtrair: function(request, response) {
				response.render('subtrair');
			},
			
			multiplicar: function(request, response) {
				response.render('multiplicar');
			},
			
			dividir: function(request, response) {
				response.render('dividir');
			},

		},
		
		post: {
			calcular: function(request, response) {
				var parametros = Controller.utils.extrairParametros(request.body);
				var resultado  = Controller.utils.calculos.calcular(parametros);
				var resposta   = Controller.utils.formatarResposta(resultado);
				
				response.render(parametros.operacao, resposta);
			}
		}
	};
	
	return Controller;
};

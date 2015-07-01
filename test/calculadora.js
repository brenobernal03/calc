var controller = require('../controllers/calculadora.js')();

describe('Calculadora', function () {
    describe('Testa se as operações-núcleo funcionam corretamente.', function () {
        describe('Somar', function () {
            it('Deveria retornar 5 quando for passado 1 e 4.', function () {
                var numero1 = 1;
                var numero2 = 4;

                var resultado = controller.utils.calculos.somar(numero1, numero2);

                resultado.should.be.a.Number;
                resultado.should.be.equal(5);
            });

            it('Deveria retornar -3 quando for passado 1 e -4.', function () {
                var numero1 = 1;
                var numero2 = -4;

                var resultado = controller.utils.calculos.somar(numero1, numero2);

                resultado.should.be.a.Number;
                resultado.should.be.equal(-3);
            });

            it('Deveria retornar 3 quando for passado -1 e 4.', function () {
                var numero1 = -1;
                var numero2 = 4;

                var resultado = controller.utils.calculos.somar(numero1, numero2);

                resultado.should.be.a.Number;
                resultado.should.be.equal(3);
            });

            it('Deveria retornar -5 quando for passado -1 e -4.', function () {
                var numero1 = -1;
                var numero2 = -4;

                var resultado = controller.utils.calculos.somar(numero1, numero2);

                resultado.should.be.a.Number;
                resultado.should.be.equal(-5);
            });
        });

        describe('Subtrair', function () {
            it('Deveria retornar 2 quando for passado 2 e 0.', function () {
                var numero1 = 2;
                var numero2 = 0;

                var resultado = controller.utils.calculos.subtrair(numero1, numero2);

                resultado.should.be.a.Number;
                resultado.should.be.equal(2);
            });
            it('Deveria retornar 1 quando for passado 4 e 3.', function () {
                var numero1 = 4;
                var numero2 = 3;

                var resultado = controller.utils.calculos.subtrair(numero1, numero2);

                resultado.should.be.a.Number;
                resultado.should.be.equal(1);
            });

        });

        describe('Multiplicar', function () {
            it('Deveria retornar 4 quando for passado 1 e 4.', function () {
                var numero1 = 1;
                var numero2 = 4;

                var resultado = controller.utils.calculos.multiplicar(numero1, numero2);

                resultado.should.be.a.Number;
                resultado.should.be.equal(4);
            });

            it('Deveria retornar -4 quando for passado -1 e 4.', function () {
                var numero1 = -1;
                var numero2 = 4;

                var resultado = controller.utils.calculos.multiplicar(numero1, numero2);

                resultado.should.be.a.Number;
                resultado.should.be.equal(-4);
            });

            it('Deveria retornar -4 quando for passado 1 e -4.', function () {
                var numero1 = 1;
                var numero2 = -4;

                var resultado = controller.utils.calculos.multiplicar(numero1, numero2);

                resultado.should.be.a.Number;
                resultado.should.be.equal(-4);
            });

            it('Deveria retornar 4 quando for passado -1 e -4.', function () {
                var numero1 = -1;
                var numero2 = -4;

                var resultado = controller.utils.calculos.multiplicar(numero1, numero2);

                resultado.should.be.a.Number;
                resultado.should.be.equal(4);
            });
        });

        describe('Dividir', function () {
            it('Deveria retornar 0.25 quando for passado 1 e 4.', function () {
                var numero1 = 1;
                var numero2 = 4;

                var resultado = controller.utils.calculos.dividir(numero1, numero2);

                resultado.should.be.a.Number;
                resultado.should.be.equal(0.25);
            });

            it('Deveria retornar -0.25 quando for passado -1 e 4.', function () {
                var numero1 = -1;
                var numero2 = 4;

                var resultado = controller.utils.calculos.dividir(numero1, numero2);

                resultado.should.be.a.Number;
                resultado.should.be.equal(-0.25);
            });

            it('Deveria retornar -0.25 quando for passado 1 e -4.', function () {
                var numero1 = 1;
                var numero2 = -4;

                var resultado = controller.utils.calculos.dividir(numero1, numero2);

                resultado.should.be.a.Number;
                resultado.should.be.equal(-0.25);
            });

            it('Deveria retornar 0.25 quando for passado -1 e -4.', function () {
                var numero1 = -1;
                var numero2 = -4;

                var resultado = controller.utils.calculos.dividir(numero1, numero2);

                resultado.should.be.a.Number;
                resultado.should.be.equal(0.25);
            });
        });
    });

    describe('Testa se a função calcular funciona.', function () {
        describe('Somar', function () {
            it('Deveria retornar 5 quando somar 1 e 4.', function () {
                var parametros = {
                    numero1: 1,
                    numero2: 4,
                    operacao: 'somar'
                };

                var resultado = controller.utils.calculos.calcular(parametros);

                resultado.should.be.a.Number;
                resultado.should.be.equal(5);
            });
        });

        describe('Subtrair', function () {


        });

        describe('Multiplicar', function () {
            it('Deveria retornar 4 quando multiplicar 1 por 4.', function () {
                var parametros = {
                    numero1: 1,
                    numero2: 4,
                    operacao: 'multiplicar'
                };

                var resultado = controller.utils.calculos.calcular(parametros);

                resultado.should.be.a.Number;
                resultado.should.be.equal(4);
            });
        });

        describe('Dividir', function () {
            it('Deveria retornar 0.25 quando dividir 1 por 4.', function () {
                var parametros = {
                    numero1: 1,
                    numero2: 4,
                    operacao: 'dividir'
                };

                var resultado = controller.utils.calculos.calcular(parametros);

                resultado.should.be.a.Number;
                resultado.should.be.equal(0.25);
            });
        });
    });

    describe('Testa se as funções utilitárias funcionam.', function () {
        describe('Controller.utils.formatarResposta()', function () {
            it('Deveria retornar 1,56 quando passado 1.55555558.', function () {
                var resultado = 1.55555558;
                var formatado = controller.utils.formatarResposta(resultado);

                formatado.should.be.an.Object;
                formatado.should.have.property('resultado');
                formatado.resultado.should.be.equal('1,56');
            });

            it('Deveria retornar 0,00 quando passado undefined.', function () {
                var resultado = undefined;
                var formatado = controller.utils.formatarResposta(resultado);

                formatado.should.be.an.Object;
                formatado.should.have.property('resultado');
                formatado.resultado.should.be.equal('0,00');
            });
        });
    });

    describe('elevarQuadrado', function () {
        it('Deveria retornar 9 quando for passado 3.', function () {
            var numero1 = 3;


            var resultado = controller.utils.calculos.elevarQuadrado(numero1);

            resultado.should.be.a.Number;
            resultado.should.be.equal(9);
        });

        describe('elevarCubo', function () {
            it('Deveria retornar 8 quando for passado 2.', function () {
                var numero1 = 2;


                var resultado = controller.utils.calculos.elevarCubo(numero1);

                resultado.should.be.a.Number;
                resultado.should.be.equal(8);
            });


            describe('metade', function () {
                it('Deveria retornar 4 quando for passado 8.', function () {
                    var numero1 = 8;


                    var resultado = controller.utils.calculos.metade(numero1);

                    resultado.should.be.a.Number;
                    resultado.should.be.equal(4);
                });

            });
        });
        describe('diashoras', function () {
            it('Deveria retornar 48 quando for passado 2.', function () {
                var numero1 = 2;


                var resultado = controller.utils.calculos.diasHoras(numero1);

                resultado.should.be.a.Number;
                resultado.should.be.equal(48);
            });

        });

        describe('horasMinutos', function () {
            it('Deveria retornar 180 quando for passado 3.', function () {
                var numero1 = 3;


                var resultado = controller.utils.calculos.horasMinutos(numero1);

                resultado.should.be.a.Number;
                resultado.should.be.equal(180);
            });

        });

        describe('minutosSegundos', function () {
            it('Deveria retornar 120 quando for passado 2.', function () {
                var numero1 = 2;


                var resultado = controller.utils.calculos.minutosSegundos(numero1);

                resultado.should.be.a.Number;
                resultado.should.be.equal(120);
            });

        });
        describe('realDolar', function () {
            it('Deveria retornar 30 quando for passado 10.', function () {
                var numero1 = 10;


                var resultado = controller.utils.calculos.realDolar(numero1);

                resultado.should.be.a.Number;
                resultado.should.be.equal(30);
            });

        });

        describe('dolarReal', function () {
            it('Deveria retornar 20 quando for passado 60.', function () {
                var numero1 = 60;


                var resultado = controller.utils.calculos.dolarReal(numero1);

                resultado.should.be.a.Number;
                resultado.should.be.equal(20);
            });

        });
        describe('celsiusKelvin', function () {
            it('Deveria retornar 310 quando for passado 37.', function () {
                var numero1 = 37;


                var resultado = controller.utils.calculos.celsiusKelvin(numero1);

                resultado.should.be.a.Number;
                resultado.should.be.equal(310);
            });

        });
        describe('juros', function () {
            it('Deveria retornar 115 quando for passado 100 e 10.', function () {
                var numero1 = 100;
                var numero2 = 10;

                var resultado = controller.utils.calculos.juros(numero1, numero2);


                resultado.should.be.a.Number;
                resultado.should.be.equal(115);
            });

        });

        describe('idade', function () {
            it('Deveria retornar 23 quando for passado 1992.', function () {
                var numero1 = 1992;


                var resultado = controller.utils.calculos.idade(numero1);


                resultado.should.be.a.Number;
                resultado.should.be.equal(23);
            });

        });

        describe('somar', function () {
            it('Deveria retornar 12 quando for passado 10 e 2.', function () {
                var numero1 = 10;
                var numero2 = 2;

                var resultado = controller.utils.calculos.somar(numero1, numero2);


                resultado.should.be.a.Number;
                resultado.should.be.equal(12);
            });

            it('Deveria retornar 49 quando for passado 9 e 49.', function () {
                var numero1 = 9;
                var numero2 = 40;

                var resultado = controller.utils.calculos.somar(numero1, numero2);


                resultado.should.be.a.Number;
                resultado.should.be.equal(49);
            });

        });

        describe('media', function () {
            it('Deveria retornar 15 quando for passado 10 e 20.', function () {
                var numero1 = 10;
                var numero2 = 20;

                var resultado = controller.utils.calculos.media(numero1, numero2);


                resultado.should.be.a.Number;
                resultado.should.be.equal(15);
            });

        });

        describe('menor2', function () {
            it('Deveria retornar 2 quando for passado 2 e 10.', function () {
                var numero1 = 10;
                var numero2 = 2;

                var resultado = controller.utils.calculos.menor(numero1, numero2);


                resultado.should.be.a.Number;
                resultado.should.be.equal(2);
            });

        });

        describe('menor2', function () {
            it('Deveria retornar 2 quando for passado 2 e 10.', function () {
                var numero1 = 10;
                var numero2 = 2;

                var resultado = controller.utils.calculos.menor2(numero1, numero2);


                resultado.should.be.a.Number;
                resultado.should.be.equal(2);
            });


        });
    });
    describe('SomarMultaLivroapos30dias', function() {
        it('Deveria retornar 30 quando for passado 1.', function() {
            var numero1 = 1;

            var resultado = controller.utils.calculos.somarMultaLivroapos30dias(numero1);

            resultado.should.be.a.Number;
            resultado.should.be.equal(30);
        });

    });

    describe('SomaMultaObraReferenciaApos40dias', function() {
        it('Deveria retornar 120 quando for passado 3.', function() {
            var numero1 = 3;

            var resultado = controller.utils.calculos.somaMultaObraReferenciaApos40dias(numero1);

            resultado.should.be.a.Number;
            resultado.should.be.equal(120);
        });

    });

    describe('SomaMultaObraReferenciaApos40dias2', function() {
        it('Deveria retornar 120 quando for passado 3.', function() {
            var numero1 = 3;

            var resultado = controller.utils.calculos.somaMultaObraReferenciaApos40dias2(numero1);

            resultado.should.be.a.Number;
            resultado.should.be.equal(120);
        });

    });




});
// serve para ajudar achar os caminhos de métodos
/// <reference types="cypress" />

// Descrição da automação
describe('Busca um CEP e valida o status_code e os dados do body response.', () => {

    // Descrição do cenário/caso/modelagem de testes
    it('Cenário válido - Valida um CEP do ACRE, capital RIO BRANCO.', () => {

        // Especifica que a automação será voltada á API
        cy.request({

            // Especifica qual o metodo HTTP que será utilizado (GET, POST, PUT, PATCH e DELETE)   
            method: 'GET',

            // Especifica qual a URL e o Endpoint que será utilizado
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/69900430'

        })
            // Especifica quais são os resultados esperados do status_code e body response   
            .then((response) => {

                // Especifica o resultado esperado do status_code 
                expect(response.status).to.equal(200)

                // Especifica o resultado esperado do body response
                expect(response.body.address).to.equal('Beco Neutel Maia')
                expect(response.body.number).to.equal('69900430')
                expect(response.body.city).to.equal('Rio Branco')              //RIO BRANCO
                expect(response.body.longitude).to.equal(-67.8103964)
                expect(response.body.state).to.equal('AC')
                expect(response.body.id).to.equal('69900430-23041')
                expect(response.body.latitude).to.equal(-9.9736648)
                expect(response.body.neighborhood).to.equal('Bosque')
                expect(response.body.blockDelivery).to.equal(false)

            })

    })

    it('Cenário válido - Valida um CEP de ALAGOAS, capital MACEIÓ.', () => {


        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/57030170'

        })

            .then((response) => {


                expect(response.status).to.equal(200);
                expect(response.body.address).to.equal('Avenida Doutor Antônio Gouveia')
                expect(response.body.number).to.equal('57030170')
                expect(response.body.city).to.equal('Maceió')                              //MACEIÓ
                expect(response.body.longitude).to.equal(-35.7139457)
                expect(response.body.state).to.equal('AL')
                expect(response.body.id).to.equal('57030170-23041')
                expect(response.body.latitude).to.equal(-9.668399500000001)
                expect(response.body.neighborhood).to.equal('Pajuçara')
                expect(response.body.blockDelivery).to.equal(false)

            })

    })

    it('Cenário válido - Valida um CEP do AMAPÁ, capital MACAPÁ.', () => {


        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/68900071'

        })

            .then((response) => {


                expect(response.status).to.equal(200);
                expect(response.body.address).to.equal('Avenida Duque de Caxias')
                expect(response.body.number).to.equal('68900071')
                expect(response.body.city).to.equal('Macapá')                         //MACAPÁ
                expect(response.body.longitude).to.equal(-51.0706074)
                expect(response.body.state).to.equal('AP')
                expect(response.body.id).to.equal('68900071-23041')
                expect(response.body.latitude).to.equal(0.0397243)
                expect(response.body.neighborhood).to.equal('Central')
                expect(response.body.blockDelivery).to.equal(false)

            })
    })

    it('Cenário válido - Valida um CEP do AMAZONAS, capital MANAUS.', () => {


        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/69063130'

        })

            .then((response) => {


                expect(response.status).to.equal(200);
                expect(response.body.address).to.equal('Rua Barbosa Rodrigues')
                expect(response.body.number).to.equal('69063130')
                expect(response.body.city).to.equal('Manaus')                         //MANAUS
                expect(response.body.longitude).to.equal(-60.0016727)
                expect(response.body.state).to.equal('AM')
                expect(response.body.id).to.equal('69063130-23041')
                expect(response.body.latitude).to.equal(-3.1092513)
                expect(response.body.neighborhood).to.equal('São Francisco')
                expect(response.body.blockDelivery).to.equal(false)

            })
    })

    it('Cenário válido - Valida um CEP da BAHIA, capital SALVADOR.', () => {


        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/40015140'

        })

            .then((response) => {


                expect(response.status).to.equal(200);
                expect(response.body.address).to.equal('Praça da Inglaterra')
                expect(response.body.number).to.equal('40015140')
                expect(response.body.city).to.equal('Salvador')                         //SALVADOR
                expect(response.body.longitude).to.equal(-38.5129843)
                expect(response.body.state).to.equal('BA')
                expect(response.body.id).to.equal('40015140-23041')
                expect(response.body.latitude).to.equal(-12.9710598)
                expect(response.body.neighborhood).to.equal('Comércio')
                expect(response.body.blockDelivery).to.equal(false)

            })
    })


    it('Cenário válido - Valida um CEP do CEARÁ, capital FORTALEZA.', () => {


        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/60765065'

        })

            .then((response) => {


                expect(response.status).to.equal(200);
                expect(response.body.address).to.equal('Avenida Miguel Aragão')
                expect(response.body.number).to.equal('60765065')
                expect(response.body.city).to.equal('Fortaleza')                  //FORTALEZA
                expect(response.body.longitude).to.equal(-38.5920417)
                expect(response.body.state).to.equal('CE')
                expect(response.body.id).to.equal('60765065-23041')
                expect(response.body.latitude).to.equal(-3.8267294)
                expect(response.body.neighborhood).to.equal('Aracapé')
                expect(response.body.blockDelivery).to.equal(false)

            })

    })

    it('Cenário válido - Valida um CEP do DISTRITO FEDERAL, capital BRASÍLIA.', () => {


        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/71691024'

        })

            .then((response) => {


                expect(response.status).to.equal(200);
                expect(response.body.address).to.equal('Rua 58')
                expect(response.body.number).to.equal('71691024')
                expect(response.body.city).to.equal('Brasília')              //BRASÍLIA
                expect(response.body.longitude).to.equal(-47.77284)
                expect(response.body.state).to.equal('DF')
                expect(response.body.id).to.equal('71691024-23041')
                expect(response.body.latitude).to.equal(-15.9064644)
                expect(response.body.neighborhood).to.equal('Centro (São Sebastião)')
                expect(response.body.blockDelivery).to.equal(false)

            })
    })

    it('Cenário válido - Valida um CEP do ESPÍRITO SANTO, capital VITÓRIA.', () => {


        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/29056215'

        })

            .then((response) => {


                expect(response.status).to.equal(200);
                expect(response.body.address).to.equal('Ladeira Sandro Machado Barroso')
                expect(response.body.number).to.equal('29056215')
                expect(response.body.city).to.equal('Vitória')              //VITÓRIA
                expect(response.body.longitude).to.equal(-40.3023846)
                expect(response.body.state).to.equal('ES')
                expect(response.body.id).to.equal('29056215-23041')
                expect(response.body.latitude).to.equal(-20.3022796)
                expect(response.body.neighborhood).to.equal('Santa Lúcia')
                expect(response.body.blockDelivery).to.equal(false)

            })
    })

    it('Cenário válido - Valida um CEP de GOIÁS, capital GOIÂNIA.', () => {


        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/74650010'

        })

            .then((response) => {


                expect(response.status).to.equal(200);
                expect(response.body.address).to.equal('Avenida Armando de Godoy')
                expect(response.body.number).to.equal('74650010')
                expect(response.body.city).to.equal('Goiânia')              //GOIÂNIA
                expect(response.body.longitude).to.equal(-49.2456531)
                expect(response.body.state).to.equal('GO')
                expect(response.body.id).to.equal('74650010-23041')
                expect(response.body.latitude).to.equal(-16.657386)
                expect(response.body.neighborhood).to.equal('Setor Negrão de Lima')
                expect(response.body.blockDelivery).to.equal(false)

            })
    })

    it('Cenário válido - Valida um CEP do MARANHÃO, capital SÃO LUIS.', () => {


        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/65010400'

        })

            .then((response) => {


                expect(response.status).to.equal(200);
                expect(response.body.address).to.equal('Rua Montanha Russa')
                expect(response.body.number).to.equal('65010400')
                expect(response.body.city).to.equal('São Luís')              //SÃO LUIS
                expect(response.body.longitude).to.equal(-44.3058817)
                expect(response.body.state).to.equal('MA')
                expect(response.body.id).to.equal('65010400-23041')
                expect(response.body.latitude).to.equal(-2.526495)
                expect(response.body.neighborhood).to.equal('Centro')
                expect(response.body.blockDelivery).to.equal(false)

            })
    })

    it('Cenário válido - Valida um CEP do MATOGROSSO, capital CUIABÁ.', () => {


        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/78065060'

        })

            .then((response) => {


                expect(response.status).to.equal(200);
                expect(response.body.address).to.equal('Rua Maranhão')
                expect(response.body.number).to.equal('78065060')
                expect(response.body.city).to.equal('Cuiabá')              //CUIABÁ
                expect(response.body.longitude).to.equal(-56.0785634)
                expect(response.body.state).to.equal('MT')
                expect(response.body.id).to.equal('78065060-23041')
                expect(response.body.latitude).to.equal(-15.6119685)
                expect(response.body.neighborhood).to.equal('Pico do Amor')
                expect(response.body.blockDelivery).to.equal(false)

            })
    })

    it('Cenário válido - Valida um CEP do MATOGROSSO DO SUL, capital CAMPO GRANDE.', () => {


        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/79002430'

        })

            .then((response) => {


                expect(response.status).to.equal(200);
                expect(response.body.address).to.equal('Rua Treze de Junho')
                expect(response.body.number).to.equal('79002430')
                expect(response.body.city).to.equal('Campo Grande')              //CAMPO GRANDE
                expect(response.body.longitude).to.equal(-54.6072307)
                expect(response.body.state).to.equal('MS')
                expect(response.body.id).to.equal('79002430-23041')
                expect(response.body.complement).to.equal('- de 397/398 a 1259/1260')
                expect(response.body.latitude).to.equal(-20.4625834)
                expect(response.body.neighborhood).to.equal('Centro')
                expect(response.body.blockDelivery).to.equal(false)

            })
    })

    it('Cenário válido - Valida um CEP de MINAS GERAIS, capital BELO HORIZONTE.', () => {


        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/30150160'

        })

            .then((response) => {


                expect(response.status).to.equal(200);
                expect(response.body.address).to.equal('Rua Aquiles Lobo')
                expect(response.body.number).to.equal('30150160')
                expect(response.body.city).to.equal('Belo Horizonte')              //BELO HORIZONTE
                expect(response.body.longitude).to.equal(-43.9299292)
                expect(response.body.state).to.equal('MG')
                expect(response.body.id).to.equal('30150160-23041')
                expect(response.body.latitude).to.equal(-19.9194384)
                expect(response.body.neighborhood).to.equal('Floresta')
                expect(response.body.blockDelivery).to.equal(false)

            })
    })

    it('Cenário válido - Valida um CEP do PARÁ, capital BELÉM.', () => {


        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/66010020'

        })

            .then((response) => {


                expect(response.status).to.equal(200);
                expect(response.body.address).to.equal('Boulevard Castilhos França')
                expect(response.body.number).to.equal('66010020')
                expect(response.body.city).to.equal('Belém')              //BELÉM
                expect(response.body.longitude).to.equal(-48.4989912)
                expect(response.body.state).to.equal('PA')
                expect(response.body.id).to.equal('66010020-23041')
                expect(response.body.latitude).to.equal(-1.4481431)
                expect(response.body.neighborhood).to.equal('Campina')
                expect(response.body.blockDelivery).to.equal(false)

            })
    })

    it('Cenário válido - Valida um CEP da PARAÍBA, capital JOÃO PESSOA.', () => {


        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/58010020'

        })

            .then((response) => {


                expect(response.status).to.equal(200);
                expect(response.body.address).to.equal('Rua Riachuelo')
                expect(response.body.number).to.equal('58010020')
                expect(response.body.city).to.equal('João Pessoa')              //JOÃO PESSOA
                expect(response.body.longitude).to.equal(-34.8869775)
                expect(response.body.state).to.equal('PB')
                expect(response.body.id).to.equal('58010020-23041')
                expect(response.body.latitude).to.equal(-7.1193184)
                expect(response.body.neighborhood).to.equal('Centro')
                expect(response.body.blockDelivery).to.equal(false)

            })
    })

    it('Cenário válido - Valida um CEP do PARANÁ, capital CURITIBA.', () => {


        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/80010160'

        })

            .then((response) => {


                expect(response.status).to.equal(200);
                expect(response.body.address).to.equal('Rua Lourenço Pinto')
                expect(response.body.number).to.equal('80010160')
                expect(response.body.city).to.equal('Curitiba')              //CURITIBA
                expect(response.body.longitude).to.equal(-49.268409)
                expect(response.body.state).to.equal('PR')
                expect(response.body.id).to.equal('80010160-23041')
                expect(response.body.latitude).to.equal(-25.4356483)
                expect(response.body.neighborhood).to.equal('Centro')
                expect(response.body.blockDelivery).to.equal(false)

            })
    })

    it('Cenário válido - Valida um CEP do PERNANBUCO, capital RECIFE.', () => {


        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/50610120'

        })

            .then((response) => {


                expect(response.status).to.equal(200);
                expect(response.body.address).to.equal('Rua Demócrito de Souza Filho')
                expect(response.body.number).to.equal('50610120')
                expect(response.body.city).to.equal('Recife')              //RECIFE
                expect(response.body.longitude).to.equal(-34.9057162)
                expect(response.body.state).to.equal('PE')
                expect(response.body.id).to.equal('50610120-23041')
                expect(response.body.latitude).to.equal(-8.0556858)
                expect(response.body.neighborhood).to.equal('Madalena')
                expect(response.body.blockDelivery).to.equal(false)

            })
    })

    it('Cenário válido - Valida um CEP do PIAUÍ, capital TERESINA.', () => {


        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/64001230'

        })

            .then((response) => {


                expect(response.status).to.equal(200);
                expect(response.body.address).to.equal('Rua Vinte Quatro de Janeiro')
                expect(response.body.number).to.equal('64001230')
                expect(response.body.city).to.equal('Teresina')              //TERESINA
                expect(response.body.longitude).to.equal(-42.8092338)
                expect(response.body.state).to.equal('PI')
                expect(response.body.id).to.equal('64001230-23041')
                expect(response.body.complement).to.equal('(Zona Sul)')
                expect(response.body.latitude).to.equal(-5.0950806)
                expect(response.body.neighborhood).to.equal('Centro')
                expect(response.body.blockDelivery).to.equal(false)

            })
    })

    it('Cenário válido - Valida um CEP do RIO DE JANEIRO, capital RIO DE JANEIRO.', () => {


        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/20010000'

        })

            .then((response) => {


                expect(response.status).to.equal(200);
                expect(response.body.address).to.equal('Rua Primeiro de Março')
                expect(response.body.number).to.equal('20010000')
                expect(response.body.city).to.equal('Rio de Janeiro')              //RIO DE JANEIRO
                expect(response.body.longitude).to.equal(-43.1762092)
                expect(response.body.state).to.equal('RJ')
                expect(response.body.id).to.equal('20010000-23041')
                expect(response.body.latitude).to.equal(-22.9018325)
                expect(response.body.neighborhood).to.equal('Centro')
                expect(response.body.blockDelivery).to.equal(false)

            })
    })

    it('Cenário válido - Valida um CEP do RIO GRANDE DO NORTE, capital NATAL.', () => {


        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/59010100'

        })

            .then((response) => {


                expect(response.status).to.equal(200);
                expect(response.body.address).to.equal('Rua Monte Alegre')
                expect(response.body.number).to.equal('59010100')
                expect(response.body.city).to.equal('Natal')              //NATAL
                expect(response.body.longitude).to.equal(-35.1961985)
                expect(response.body.state).to.equal('RN')
                expect(response.body.id).to.equal('59010100-23041')
                expect(response.body.latitude).to.equal(-5.7791869)
                expect(response.body.neighborhood).to.equal('Praia do Meio')
                expect(response.body.blockDelivery).to.equal(false)

            })
    })

    it('Cenário válido - Valida um CEP do RIO GRANDE DO SUL, capital PORTO ALEGRE.', () => {


        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/90030140'

        })

            .then((response) => {


                expect(response.status).to.equal(200);
                expect(response.body.address).to.equal('Avenida Alberto Bins')
                expect(response.body.number).to.equal('90030140')
                expect(response.body.city).to.equal('Porto Alegre')              //PORTO ALEGRE
                expect(response.body.longitude).to.equal(-51.2192835)
                expect(response.body.state).to.equal('RS')
                expect(response.body.id).to.equal('90030140-23041')
                expect(response.body.complement).to.equal('- até 714 - lado par')
                expect(response.body.latitude).to.equal(-30.027812)
                expect(response.body.neighborhood).to.equal('Centro Histórico')
                expect(response.body.blockDelivery).to.equal(false)

            })
    })

    it('Cenário válido - Valida um CEP de RONDÔNIA, capital PORTO VELHO.', () => {


        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/76802420'

        })

            .then((response) => {


                expect(response.status).to.equal(200);
                expect(response.body.address).to.equal('Rua das Mangueiras')
                expect(response.body.number).to.equal('76802420')
                expect(response.body.city).to.equal('Porto Velho')              //PORTO VELHO
                expect(response.body.longitude).to.equal(-63.9067425)
                expect(response.body.state).to.equal('RO')
                expect(response.body.id).to.equal('76802420-23041')
                expect(response.body.complement).to.equal('- de 6001/6002 ao fim')
                expect(response.body.latitude).to.equal(-8.7335367)
                expect(response.body.neighborhood).to.equal('Nacional')
                expect(response.body.blockDelivery).to.equal(false)

            })
    })

    it('Cenário válido - Valida um CEP de RORAIMA, capital BOA VISTA.', () => {


        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/88010090'

        })

            .then((response) => {


                expect(response.status).to.equal(200);
                expect(response.body.address).to.equal('Rua Padre Roma')
                expect(response.body.number).to.equal('88010090')
                expect(response.body.city).to.equal('Florianópolis')              //BOA VISTA
                expect(response.body.longitude).to.equal(-48.5564247)
                expect(response.body.state).to.equal('SC')
                expect(response.body.id).to.equal('88010090-23041')
                expect(response.body.latitude).to.equal(-27.5941537)
                expect(response.body.neighborhood).to.equal('Centro')
                expect(response.body.blockDelivery).to.equal(false)

            })
    })

    it('Cenário válido - Valida um CEP de SANTA CATARINA, capital FLORIANÓPOLIS.', () => {


        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/69301000'

        })

            .then((response) => {


                expect(response.status).to.equal(200);
                expect(response.body.address).to.equal('Avenida Ville Roy')
                expect(response.body.number).to.equal('69301000')
                expect(response.body.city).to.equal('Boa Vista')              //FLORIANÓPOLIS
                expect(response.body.longitude).to.equal(-60.6675085)
                expect(response.body.state).to.equal('RR')
                expect(response.body.id).to.equal('69301000-23041')
                expect(response.body.complement).to.equal('- de 5373/5374 a 6277/6278')
                expect(response.body.latitude).to.equal(2.8267925)
                expect(response.body.neighborhood).to.equal('Centro')
                expect(response.body.blockDelivery).to.equal(false)

            })
    })

    it('Cenário válido - Valida um CEP de SÃO PAULO, capital SÃO PAULO.', () => {


        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/01001000'

        })

            .then((response) => {


                expect(response.status).to.equal(200);
                expect(response.body.address).to.equal('Praça da Sé')
                expect(response.body.number).to.equal('01001000')
                expect(response.body.city).to.equal('São Paulo')              //SÃO PAULO
                expect(response.body.longitude).to.equal(-46.6342179)
                expect(response.body.state).to.equal('SP')
                expect(response.body.id).to.equal('01001000-23041')
                expect(response.body.complement).to.equal('- lado ímpar')
                expect(response.body.latitude).to.equal(-23.5502784)
                expect(response.body.neighborhood).to.equal('Sé')
                expect(response.body.blockDelivery).to.equal(false)

            })
    })

    it('Cenário válido - Valida um CEP de SERGIPE, capital ARACAJU.', () => {


        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/49010350'

        })

            .then((response) => {


                expect(response.status).to.equal(200);
                expect(response.body.address).to.equal('Vila Angélica')
                expect(response.body.number).to.equal('49010350')
                expect(response.body.city).to.equal('Aracaju')              //ARACAJU
                expect(response.body.longitude).to.equal(-37.0711982)
                expect(response.body.state).to.equal('SE')
                expect(response.body.id).to.equal('49010350-23041')
                expect(response.body.latitude).to.equal(-10.9060806)
                expect(response.body.neighborhood).to.equal('Centro')
                expect(response.body.blockDelivery).to.equal(false)

            })
    })

    it('Cenário válido - Valida um CEP do TOCANTIS, capital PALMAS.', () => {


        cy.request({

            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/77002000'

        })

            .then((response) => {


                expect(response.status).to.equal(200);
                expect(response.body.address).to.equal('Quadra ARNO 42 Área ACSV NO 42')
                expect(response.body.number).to.equal('77002000')
                expect(response.body.city).to.equal('Palmas')              //PALMAS
                expect(response.body.longitude).to.equal(-48.3381654)
                expect(response.body.state).to.equal('TO')
                expect(response.body.id).to.equal('77002000-23041')
                expect(response.body.latitude).to.equal(-10.160335)
                expect(response.body.neighborhood).to.equal('Plano Diretor Norte')
                expect(response.body.blockDelivery).to.equal(false)

            })
    })


    it('Cenário inválido - Valida status_code e resposta de erro ao buscar um CEP que não existe.', () => {

        cy.request({
            failOnStatusCode: false,
            method: 'GET',
            url: 'https://cep-v2-americanas-npf.b2w.io/cep/000001'
        })

            .then((response) => {
                expect(response.status).to.equal(404)

                expect(response.body.httpStatusCode).to.equal(404)
                expect(response.body.errorCode).to.equal('404')
                expect(response.body.message).to.equal('Recurso não encontrado')
                expect(response.body.info).to.equal('http://api.b2winc.com/doc/error/404')

            })
    })

})



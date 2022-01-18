import { Login } from "../page-objects/server-page/Login";

const serverLoginPage = new Login

describe('Test Swapi Get Method', () => {
    //serverLoginPage.login('test@antmedia.io', 'testtest')
    //Cypress.Cookies.preserveOnce('JSESSIONID', '5185590C520883BB9BD171ED833B8A0B')

    context('GET people/1 name and films', () => {
        it('should return a list with people info', () => {
            cy.request({
                method: 'GET',
                url: 'people/2'
            })
                .should((response) => {
                    expect(response.status).to.eq(200)
                    expect(response.body.name).eq("C-3PO")
                    expect(response.body.films[0]).eq('https://swapi.py4e.com/api/films/1/')
                });
        });
    });

    context('GET planets/2/ residents and terrain', () => {
        it('should return a list with planets info', () => {
            cy.request({
                method: 'GET',
                url: 'planets/2/'
            })
                .should((response) => {
                    expect(response.status).to.eq(200)
                    expect(response.body.terrain).eq("grasslands, mountains")
                    expect(response.body.residents[0]).to.equals('https://swapi.py4e.com/api/people/5/',
                        'https://swapi.py4e.com/api/people/68/',
                        'https://swapi.py4e.com/api/people/81/')
                });
        });
    });
});

describe('Test Fake API PUT Method', () => {
    context('PUT people/1 with new parameters', () => {
        it('should return product/1 info', () => {
            cy.request({
                method: 'Put',
                url: 'https://fakestoreapi.com/products/1',
                body: 
                    {
                        "id": 1,
                        "title": "Test Title",
                        "price": 100,
                        "description": "Test description",
                        "category": "Nature",
                        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                        "rating": {
                            "rate": 7,
                            "count": 190
                        }
                    }
                
            })
                .should((response) => {
                    expect(response.status).to.eq(200)
                    cy.log(JSON.stringify(response.body))
                    expect(JSON.stringify(response.body))
                    expect(response.body.id).eq('1')
                    expect(response.body.title).to.equal('Test Title')
                    expect(response.body.category).to.equal('Nature')
                });
        });
    });
});
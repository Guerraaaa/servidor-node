import { MockResponse } from "../__mocks__/MockReponse.mock"
import { UserController } from "./UserController"

// Precisamos fazer o mock do Request e do Response.
import { UserService } from "../services/UserService"
import { MockRequest } from "../__mocks__/MockRequest.mock"
import { Request } from "express"

describe('UserControllerTeste', () => {
    /* 
    Precisaremos mockar o nosso service para justamente
    Esse Partial faz basicamente com que possamos pegar somente o que desejarmos dentro de UserService
    Por default precisariamos passar todas as props da classe.

    Estamos pegando SOMENTE a função createUser e informando que ela vai receber jest.fn(),
        Esse jest.fn() vai simular como essa operação iria se comportar em um ambiente de produção.
     */
    const mockUserController: Partial<UserService> = {createUser: jest.fn()}

    //Aqui estamos referenciando o mock tem o valor tipo UserService
    const userController = new UserController(mockUserController as UserService)
    it('Criando um novo usuario', () => {
        //Não vai ser necessario utilizar o MockRequest() porque podemos fazer direto sem ele, porém quando trabalhamos com uma grande quantidade
        // de Testes é interessante utilizamos um Mock dessa forma.
        const mockUserResquest = {
            body: {
                name: 'Mario Guerra',
                idade: 19
            }
        } as Request
        const mockUserResponse = MockResponse()
        
        userController.createUser(mockUserResquest, mockUserResponse)
        //expectativa().retonoEsperado()

        //Se caso o retorno da solicitação for um status 201, o teste vai dar verdadeiro.
        expect(mockUserResponse.state.status).toBe(201)
        expect(mockUserResponse.state.json).toMatchObject({message: 'Usuario criado'})
    })
})
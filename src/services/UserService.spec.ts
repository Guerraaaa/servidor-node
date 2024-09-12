import { User, UserService } from "./UserService"

// mock basicamente é um clone de algo para a realização de teste.

// Estamos fazendo uma breve descrição do que vai ser esse conjunto de teste e logo em seguida, estamos chamando uma função.
describe('TesteAPI', () => {
    const mockDb:User[] = []

    //Esse mockDb é o nosso banco de dados clonado para apenas a realização desse teste.
    const userService = new UserService(mockDb)

    it('Deve criar um novo usuário', () => {
        // Esse mock está acionando um metodo dentro do jest chamadado spyOn, 
        // esse metodo está olhando TODOS os console, mais especificamente está olhando o console.log()
        const mockConsole = jest.spyOn(global.console,'log')
        userService.createUser("lucas.teste", 18)

        //Ele tem a expectativa do mock tem que ser chamado para o teste seja bem concluido.
        // expect(mockConsole).toHaveBeenCalled()

        //Está esperando que o console.log retorne o texto 'Database atualizada - ' contendo o nosso clone do db.
        expect(mockConsole).toHaveBeenCalledWith('Database atualizada - ', mockDb)
    })
})
// Simulação de Banco de Dados (Database) de produção!
const db = [
    {
        "name": "Mario",
        "idade": 19
    }
]

export interface User {
    name: string,
    idade: number
}

// O modelo do service serve para regras de negocios relacionadas ao banco de dados.
export class UserService{
    // Para a realização de testes, não é aconselhavel utilizar o banco de dados em produção p/ estes fins.
    // Então precisamos criar um clone do nosso banco de dados.
    db: User[]

    //Constructor apenas está clonando a db
    constructor(
        database = db
    ){
        this.db = database
    }

    // Implementação de regras de negocios.
    createUser = (name: string, idade: number) => {
        const user = { name, idade }
        this.db.push(user)
        console.log('Database atualizada - ', this.db)
    }

    getAllData = () => {
        console.log(this.db)
        return this.db
    }

    deleteUser = (name: string) => {
        const deleteUser = db.filter(el => el.name !== name)
        return deleteUser
    }
}
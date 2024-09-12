// Simulação de Banco de Dados (Database)
const db = [
    {
        "name": "Mario",
        "idade": 19
    }
]

// O modelo do service serve para regras de negocios relacionadas ao banco de dados.
export class UserService{
    createUser = (name: string, idade: number) => {
        const user = { name, idade }
        db.push(user)
        console.log('Database atualizada - ', db)
    }

    getAllData = () => {
        console.log(db)
        return db
    }

    deleteUser = (name: string) => {
        const deleteUser = db.filter(el => el.name !== name)
        return deleteUser
    }
}
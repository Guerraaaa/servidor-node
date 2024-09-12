//                      Aqui estão todas as propriedades dos metodos 
import { Params } from 'express-serve-static-core'
import { Request } from 'express'

// Estamos basicamente fazendo um request do zero, estamos vendo como ele funciona de baixo dos panos.
export const MockRequest = ({params, query}: {params?: Params, query?: Params}): Request => {
// Essa variavel recebe o tipo de unknown
    const request = {
        params: params || {},
        query: query || {}
    } as unknown

    return request as Request
}
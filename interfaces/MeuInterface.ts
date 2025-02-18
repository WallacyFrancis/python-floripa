export interface Usuario {
  id: number
  nome: string
  email: string
  dataCriacao: Date
}

export interface RespostaAPI<T> {
  dados: T
  sucesso: boolean
  mensagem?: string
} 
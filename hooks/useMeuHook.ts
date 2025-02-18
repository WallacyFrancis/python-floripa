import { useState, useEffect } from 'react'

export function useMeuHook<T>(url: string) {
  const [dados, setDados] = useState<T | null>(null)
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState<Error | null>(null)

  useEffect(() => {
    const buscarDados = async () => {
      try {
        const resposta = await fetch(url)
        const dados = await resposta.json()
        setDados(dados)
        setCarregando(false)
      } catch (erro) {
        setErro(erro as Error)
        setCarregando(false)
      }
    }

    buscarDados()
  }, [url])

  return { dados, carregando, erro }
} 
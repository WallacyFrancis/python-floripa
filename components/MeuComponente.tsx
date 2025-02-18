interface MeuComponenteProps {
  titulo: string
  descricao?: string
}

export function MeuComponente({ titulo, descricao }: MeuComponenteProps) {
  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-semibold">{titulo}</h2>
      {descricao && <p className="mt-2 text-gray-600">{descricao}</p>}
    </div>
  )
} 
import Container from '@/components/Container'
import LoadingPagination from '../Pagination/loading'

export default function LoadingProducts() {
  const products = []

  const betweenFiveAndEight: number = Math.floor(Math.random() * 4) + 5
  // Math.floor(Math.random() * 4): Arredonda o número para baixo, resultando em um dos inteiros 0, 1, 2, ou 3.
  // Math.floor(Math.random() * 4) + 5: Adiciona 5 ao resultado, deslocando o intervalo para 5, 6, 7, ou 8.
  // Array.from({ length: 6 }, (_, i) => i + 1): Cria um array de 6 elementos, preenchendo cada elemento com o valor de i + 1.

  for (let i = 0; i < betweenFiveAndEight; i++) {
    products.push(
      <div
        key={i}
        className="w-full md:w-1/3 xl:w-1/4 p-6 pb-0 flex flex-col animate-pulse"
      >
        <div className="flex-1 space-y-6 py-1">
          <div
            className="h-2 bg-gray-500"
            style={{ width: '336px', height: '336px' }}
          ></div>
          <div className="h-2 bg-gray-500 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-gray-500 rounded col-span-1"></div>
            </div>
          </div>
        </div>

        <div className="pt-3 flex items-center justify-between">
          <p>&nbsp;</p>
          <div className="h-2 bg-gray-700 rounded"></div>
        </div>
      </div>
    )
  }

  return (
    <>
      <Container className="flex flex-wrap items-center">{products}</Container>
      <Container className="flex flex-wrap flex-row-reverse pb-12">
        <LoadingPagination />
      </Container>
    </>
  )
}

import Container from '@/components/Container'
import Title from '@/components/Title'
import NavFilterProducts from '@/components/NavFilterProducts/loading'

const LoadingNavProducts: React.FC = () => {
  return (
    <Container className="flex flex-wrap items-center pt-4 ">
      <nav className="w-full z-30 top-0 px-6 py-1">
        <Container
          className={`flex items-center justify-between mt-0 px-2 py-3`}
        >
          <Title size="md" href="/">
            Store
          </Title>
          <NavFilterProducts />
        </Container>
      </nav>
    </Container>
  )
}

export default LoadingNavProducts

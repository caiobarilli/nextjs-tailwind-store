import Container from '@/components/Container'
import Title from '@/components/Title'
import NavFilterProducts from '@/components/NavFilterProducts'

const NavProducts: React.FC<{
  children?: React.ReactNode
}> = ({ children }) => {
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

        {children}
      </nav>
    </Container>
  )
}

export default NavProducts

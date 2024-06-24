import Container from '@/components/Container'
import Title from '@/components/Title'
import Text from '@/components/Text'
import NavSocial from '@/components/NavSocial'

const Footer = () => {
  return (
    <footer className="container dark:bg-gray-900 mx-auto bg-white py-8 border-t border-gray-400">
      <Container className="flex px-3 py-8">
        <section className="w-full mx-auto flex flex-wrap">
          <main className="flex w-full lg:w-1/2 ">
            <article className="px-3 md:px-0">
              <Title size="sm">ABOUT</Title>
              <Text className="py-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas vel mi ut felis tempus commodo nec id erat. Suspendisse
                consectetur dapibus velit ut lacinia.
              </Text>
            </article>
          </main>
          <NavSocial />
        </section>
      </Container>
    </footer>
  )
}

export default Footer

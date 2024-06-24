import Container from '@/components/Container'
import Link from 'next/link'
import Title from '@/components/Title'
import Text from '@/components/Text'

export default function NotFound() {
  return (
    <Container>
      <Title size="md">Not Found</Title>
      <Text>Could not find requested resource</Text>
      <Link href="/">Return Home</Link>
    </Container>
  )
}

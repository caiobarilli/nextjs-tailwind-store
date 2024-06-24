import Container from '@/components/Container'
import FormRegister from '@/components/FormRegister'

export default async function FormLoginPage() {
  return (
    <Container>
      <div className="my-5 mb-12">
        <div className="relative w-auto max-w-2xl mx-auto">
          <FormRegister />
        </div>
      </div>
    </Container>
  )
}

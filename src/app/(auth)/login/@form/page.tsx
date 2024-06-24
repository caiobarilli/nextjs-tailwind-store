import Container from '@/components/Container'
import FormLogin from '@/components/FormLogin'

export default async function FormLoginPage() {
  return (
    <Container>
      <div className="my-5 mb-12">
        <div className="relative w-auto max-w-2xl mx-auto">
          <FormLogin />
        </div>
      </div>
    </Container>
  )
}

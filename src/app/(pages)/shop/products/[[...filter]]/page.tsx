'use server'

import Container from '@/components/Container'

export default async function FilteredProductsPage({
  params
}: {
  params: { filter: string }
}) {
  const filter = params.filter

  if (filter !== undefined) {
    return (
      <Container>
        <p>{filter?.[0] ? <>{filter?.[0]}</> : ''}</p>

        <p>{filter?.[1] ? <>{filter?.[1]}</> : ''}</p>

        <p>{filter?.[2] ? <>{filter?.[2]}</> : ''}</p>
      </Container>
    )
  }

  return (
    <Container>
      <p>without filter params</p>
    </Container>
  )
}

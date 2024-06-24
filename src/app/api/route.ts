export async function GET() {
  return new Response(
    JSON.stringify({
      version: '1.0.0'
    }),
    {
      headers: {
        'content-type': 'text/plain'
      },
      status: 200
    }
  )
}

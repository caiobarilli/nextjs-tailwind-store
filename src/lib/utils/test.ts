import { cleanQueryString, capitalize } from '.'

describe('Functions in utils', () => {
  it('should clen the query string', () => {
    const queryString = `?sortBy=${'subcategory'}&price=${'activePrice'}&color=${'activeColor'}&tags=${'activeTags'}`

    const query = cleanQueryString(queryString)

    expect(query).toBe(
      '?sortBy=subcategory&price=activePrice&color=activeColor&tags=activeTags'
    )
  })

  it('should capitalize the first letter of a string', () => {
    const str = 'string'

    const capitalizedStr = capitalize(str)

    expect(capitalizedStr).toBe('String')
  })
})

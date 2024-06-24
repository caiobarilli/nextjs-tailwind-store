/**
 * Clean the query string from the URL, removing null or undefined values
 * @param {string} queryString
 */
export const cleanQueryString = (queryString: string) => {
  const query = queryString
    .replace('?', '')
    .split('&')
    .filter((param) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [key, value] = param.split('=')
      return value !== 'null' && value !== 'undefined' && value !== ''
    })
    .join('&')

  return query ? `?${query}` : ''
}

/**
 * Capitalize the first letter of a string
 * @returns {string}
 */
export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

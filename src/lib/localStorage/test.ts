import { getStorageItem, removeStorageItem, setStorageItem } from '.'

describe('getStorageItem()', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })
  it('should return the item from localStorage', () => {
    window.localStorage.setItem(
      'NEXT_TAILWIND_STORE_cartItems',
      JSON.stringify([1, 2])
    )
    expect(getStorageItem('cartItems')).toStrictEqual([1, 2])
  })
})

describe('setStorageItem()', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })
  it('should add the item to localStorage', () => {
    setStorageItem('cartItems', [1, 2])
    expect(
      window.localStorage.getItem('NEXT_TAILWIND_STORE_cartItems')
    ).toStrictEqual(JSON.stringify([1, 2]))
  })
})

describe('removeStorageItem()', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })
  it('should remove the item from localStorage', () => {
    window.localStorage.setItem(
      'NEXT_TAILWIND_STORE_cartItems',
      JSON.stringify(['1', '2'])
    )
    expect(window.localStorage.getItem('NEXT_TAILWIND_STORE_cartItems')).toBe(
      JSON.stringify(['1', '2'])
    )
    removeStorageItem('cartItems')
    expect(window.localStorage.getItem('NEXT_TAILWIND_STORE_cartItems')).toBe(
      null
    )
  })
})

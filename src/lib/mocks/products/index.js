const dummyProducts = [
  {
    name: 'Teapot Ceramic',
    price: 9.99,
    quantity: 100,
    description: `Ceramic teapot with a beautiful design.`,
    additional_info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    rating: 4.5,
    slug: 'teapot-ceramic',
    sku: '123456',
    reviews_ids: '1,2',
    color_ids: '1,2',
    tag_ids: '1',
    cover: 'https://images.unsplash.com/photo-1555982105-d25af4182e4e',
    images: `https://images.unsplash.com/photo-1555982105-d25af4182e4e,
    https://images.unsplash.com/photo-1555982105-d25af4182e4e,
    https://images.unsplash.com/photo-1555982105-d25af4182e4e,
    https://images.unsplash.com/photo-1555982105-d25af4182e4e,
    https://images.unsplash.com/photo-1555982105-d25af4182e4e,
    https://images.unsplash.com/photo-1555982105-d25af4182e4e`
  },
  {
    name: 'Lens Camera',
    price: 6.66,
    quantity: 50,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nulla convallis libero eget justo vehicula, eu vestibulum
      libero feugiat. Sed ut leo sed metus eleifend malesuada at id nunc.`,
    additional_info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    rating: 4.2,
    slug: 'lens-camera',
    sku: '12345',
    reviews_ids: '3',
    color_ids: '2,4',
    tag_ids: '2,4,6',
    cover: 'https://images.unsplash.com/photo-1508423134147-addf71308178',
    images: `https://images.unsplash.com/photo-1508423134147-addf71308178,
    https://images.unsplash.com/photo-1508423134147-addf71308178,
    https://images.unsplash.com/photo-1508423134147-addf71308178,
    https://images.unsplash.com/photo-1508423134147-addf71308178,
    https://images.unsplash.com/photo-1508423134147-addf71308178,
    https://images.unsplash.com/photo-1508423134147-addf71308178,
    https://images.unsplash.com/photo-1508423134147-addf71308178,
    https://images.unsplash.com/photo-1508423134147-addf71308178,
    https://images.unsplash.com/photo-1508423134147-addf71308178,
    https://images.unsplash.com/photo-1508423134147-addf71308178,
    https://images.unsplash.com/photo-1508423134147-addf71308178,
    https://images.unsplash.com/photo-1508423134147-addf71308178,
    https://images.unsplash.com/photo-1508423134147-addf71308178,
    https://images.unsplash.com/photo-1508423134147-addf71308178`
  },
  {
    name: 'Chair X3',
    price: 24.69,
    quantity: 30,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nulla convallis libero eget justo vehicula, eu vestibulum
      libero feugiat. Sed ut leo sed metus eleifend malesuada at id nunc.`,
    additional_info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    rating: 4.7,
    slug: 'chair-x3',
    sku: '1234',
    reviews_ids: '',
    color_ids: '3',
    tag_ids: '3,5,7',
    cover: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103',
    images: ''
  },
  {
    name: 'Coffee Cup',
    price: 8.69,
    quantity: 10,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nulla convallis libero eget justo vehicula, eu vestibulum
      libero feugiat. Sed ut leo sed metus eleifend malesuada at id nunc.`,
    additional_info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    rating: 0.4,
    slug: 'coffee-cup',
    sku: '123',
    reviews_ids: '',
    color_ids: '1',
    tag_ids: '10, 11, 12',
    cover: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574',
    images: ''
  },
  {
    name: 'Inception Spinner',
    price: 40.2,
    quantity: 1,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nulla convallis libero eget justo vehicula, eu vestibulum
      libero feugiat. Sed ut leo sed metus eleifend malesuada at id nunc.`,
    additional_info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    rating: 0.3,
    slug: 'inception-spinner',
    sku: '12',
    reviews_ids: '',
    color_ids: '2,4,5',
    tag_ids: '13',
    cover: 'https://images.unsplash.com/photo-1550837368-6594235de85c',
    images: ''
  },
  {
    name: 'Typewriter Machine',
    price: 6.33,
    quantity: 13,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nulla convallis libero eget justo vehicula, eu vestibulum
      libero feugiat. Sed ut leo sed metus eleifend malesuada at id nunc.`,
    additional_info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    rating: 0.2,
    slug: 'typewriter-machine',
    sku: '1111111',
    reviews_ids: '',
    color_ids: '3,5',
    tag_ids: '14',
    cover:
      'https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg',
    images: ''
  },
  {
    name: 'Transparent Dice',
    price: 12.25,
    quantity: 12,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nulla convallis libero eget justo vehicula, eu vestibulum
      libero feugiat. Sed ut leo sed metus eleifend malesuada at id nunc.`,
    additional_info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    rating: 0.1,
    slug: 'transparent-dice',
    sku: '2222222',
    reviews_ids: '',
    color_ids: '1,5',
    tag_ids: '9',
    cover: 'https://images.unsplash.com/photo-1551431009-a802eeec77b1',
    images: ''
  },
  {
    name: 'New Teapot Ceramic',
    price: 9.99,
    quantity: 100,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nulla convallis libero eget justo vehicula, eu vestibulum
      libero feugiat. Sed ut leo sed metus eleifend malesuada at id nunc.`,
    additional_info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    rating: 4.5,
    slug: 'new-teapot-ceramic',
    sku: '3333333',
    reviews_ids: '',
    color_ids: '1,2',
    tag_ids: '1',
    cover: 'https://images.unsplash.com/photo-1555982105-d25af4182e4e',
    images: ''
  },
  {
    name: 'Old Lens Camera',
    price: 6.66,
    quantity: 50,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nulla convallis libero eget justo vehicula, eu vestibulum
      libero feugiat. Sed ut leo sed metus eleifend malesuada at id nunc.`,
    additional_info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    rating: 4.2,
    slug: 'old-lens-camera',
    sku: '444444',
    reviews_ids: '',
    color_ids: '2,4',
    tag_ids: '2,4,6',
    cover: 'https://images.unsplash.com/photo-1508423134147-addf71308178',
    images: ''
  },
  {
    name: 'Chair X4',
    price: 24.69,
    quantity: 30,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nulla convallis libero eget justo vehicula, eu vestibulum
      libero feugiat. Sed ut leo sed metus eleifend malesuada at id nunc.`,
    additional_info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    rating: 4.7,
    slug: 'chair-x4',
    sku: '5555555',
    reviews_ids: '',
    color_ids: '3',
    tag_ids: '3,5,7',
    cover: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103',
    images: ''
  },
  {
    name: 'Chair X5',
    price: 24.69,
    quantity: 30,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nulla convallis libero eget justo vehicula, eu vestibulum
      libero feugiat. Sed ut leo sed metus eleifend malesuada at id nunc.`,
    additional_info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    rating: 4.7,
    slug: 'chair-x5',
    sku: '66666666',
    reviews_ids: '',
    color_ids: '3',
    tag_ids: '3,5,7',
    cover: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103',
    images: ''
  },
  {
    name: 'Chair X6',
    price: 24.69,
    quantity: 30,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nulla convallis libero eget justo vehicula, eu vestibulum
      libero feugiat. Sed ut leo sed metus eleifend malesuada at id nunc.`,
    additional_info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    rating: 4.7,
    slug: 'chair-x6',
    sku: '777777777',
    reviews_ids: '',
    color_ids: '3',
    tag_ids: '3,5,7',
    cover: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103',
    images: ''
  },
  {
    name: 'Chair X7',
    price: 24.69,
    quantity: 30,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nulla convallis libero eget justo vehicula, eu vestibulum
      libero feugiat. Sed ut leo sed metus eleifend malesuada at id nunc.`,
    additional_info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    rating: 4.7,
    slug: 'chair-x7',
    sku: '88888888',
    reviews_ids: '',
    color_ids: '3',
    tag_ids: '3,5,7',
    cover: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103',
    images: ''
  },
  {
    name: 'Chair X8',
    price: 24.69,
    quantity: 30,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nulla convallis libero eget justo vehicula, eu vestibulum
      libero feugiat. Sed ut leo sed metus eleifend malesuada at id nunc.`,
    additional_info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    rating: 4.7,
    slug: 'chair-x8',
    sku: '999999999',
    reviews_ids: '',
    color_ids: '3',
    tag_ids: '3,5,7',
    cover: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103',
    images: ''
  },
  {
    name: 'Chair X9',
    price: 24.69,
    quantity: 30,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nulla convallis libero eget justo vehicula, eu vestibulum
      libero feugiat. Sed ut leo sed metus eleifend malesuada at id nunc.`,
    additional_info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    rating: 4.7,
    slug: 'chair-x9',
    sku: '10101010',
    reviews_ids: '',
    color_ids: '3',
    tag_ids: '3,5,7',
    cover: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103',
    images: ''
  },
  {
    name: 'Chair X10',
    price: 120.22,
    quantity: 30,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nulla convallis libero eget justo vehicula, eu vestibulum
      libero feugiat. Sed ut leo sed metus eleifend malesuada at id nunc.`,
    additional_info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    rating: 4.7,
    slug: 'chair-x10',
    sku: '44556677',
    reviews_ids: '',
    color_ids: '3',
    tag_ids: '3,5,7',
    cover: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103',
    images: ''
  },
  {
    name: 'Chair X11',
    price: 55.5,
    quantity: 30,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nulla convallis libero eget justo vehicula, eu vestibulum
      libero feugiat. Sed ut leo sed metus eleifend malesuada at id nunc.`,
    additional_info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    rating: 4.7,
    slug: 'chair-x11',
    sku: '9988998',
    reviews_ids: '',
    color_ids: '3',
    tag_ids: '3,5,7',
    cover: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103',
    images: ''
  },
  {
    name: 'Chair X12',
    price: 185.5,
    quantity: 30,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nulla convallis libero eget justo vehicula, eu vestibulum
      libero feugiat. Sed ut leo sed metus eleifend malesuada at id nunc.`,
    additional_info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    rating: 4.7,
    slug: 'chair-x12',
    sku: '3216547',
    reviews_ids: '',
    color_ids: '3',
    tag_ids: '3,5,7',
    cover: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103',
    images: ''
  },
  {
    name: 'Chair X13',
    price: 265.65,
    quantity: 30,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nulla convallis libero eget justo vehicula, eu vestibulum
      libero feugiat. Sed ut leo sed metus eleifend malesuada at id nunc.`,
    additional_info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    rating: 4.7,
    slug: 'chair-x13',
    sku: '98745632',
    reviews_ids: '',
    color_ids: '3',
    tag_ids: '3,5,7',
    cover: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103',
    images: ''
  }
]

module.exports = { dummyProducts }

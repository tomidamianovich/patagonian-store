import { 
  ProductType,
  ImageType,
  PersonalDataType 
  } from "./type"

export const images: ImageType[] = [
  {
    title: 'baboon',
    url: 'https://homepages.cae.wisc.edu/~ece533/images/baboon.png'
  },
  {
    title: 'boat',
    url: 'https://homepages.cae.wisc.edu/~ece533/images/boat.png'
  },
  {
    title: 'cat',
    url: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png'
  },
  {
    title: 'fruits',
    url: 'https://homepages.cae.wisc.edu/~ece533/images/fruits.png'
  },
  {
    title: 'tulips',
    url: 'https://homepages.cae.wisc.edu/~ece533/images/tulips.png'
  },
  {
    title: 'serrano',
    url: 'https://homepages.cae.wisc.edu/~ece533/images/serrano.png'
  },
  {
    title: 'pool',
    url: 'https://homepages.cae.wisc.edu/~ece533/images/pool.png'
  }
]

export const personalData:PersonalDataType = {
  name: 'Tomás Damianovich Reddy',
  location: 'La Plata',
  birthday: new Date(1994,12,26),
  linkedIn: 'tomasdr',
  mail: 'tomasdamianovich@gmail.com',
  tel: '2216261952',
  photoUrl: ''
}

export const products: ProductType[] = [
  {
    number: 1003,
    name: 'Green pencil',
    date: '2020-10-10',
    sku: 229,
    weight: '0.02kg',
    height: '20cm',
    width: '2cm',
    origin: 'Singapore',
    minimum: 100,
    delay: '30 days',
  },
  {
    number: 1004,
    name: 'Red pencil',
    date: '2020-10-10',
    sku: 243,
    weight: '0.02kg',
    height: '20cm',
    width: '2cm',
    origin: 'Singapore',
    minimum: 100,
    delay: '30 days',
  },
  {
    number: 4673,
    name: 'Ruler',
    date: '2020-10-20',
    sku: 331,
    weight: '0.03kg',
    height: '30cm',
    width: '3cm',
    origin: 'China',
    minimum: 50,
    delay: '30 days',
  },
  {
    number: 4033,
    name: 'Notepad',
    date: '2020-03-11',
    sku: 211,
    weight: '0.04kg',
    height: '30cm',
    width: '12cm',
    origin: 'China',
    minimum: 70,
    delay: '20 days',
  },
  {
    number: 2212,
    name: 'Big Calendar',
    date: '2020-12-16',
    sku: 322,
    weight: '0.04kg',
    height: '50cm',
    width: '70cm',
    origin: 'Taiwan',
    minimum: 100,
    delay: '10 days',
  },
  {
    number: 2214,
    name: 'Small Calendar',
    date: '2020-12-17',
    sku: 322,
    weight: '0.04kg',
    height: '40cm',
    width: '50cm',
    origin: 'Taiwan',
    minimum: 100,
    delay: '12 days',
  }
]

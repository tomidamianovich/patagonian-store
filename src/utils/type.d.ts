// Images Types

export type ImageType = {
  id: number,
  title: string,
  url: string,
}

export type ImageState = ImageType[]

export type ImageAction = {
  type: string
  payload: ImageType
}

export type ImageActionBatch = {
  type: string
  payload: ImageType[]
}

export type ImageDispatchType = (args: ImageAction) => ImageAction

// Product Types

export type ProductType = {
  number: number,
  name: string,
  date: string,
  sku: number,
  weight: string,
  height: string,
  width: string,
  origin: string,
  minimum: number,
  delay: string
}

export type ProductState = ProductType[]

export type ProductAction = {
  type: string
  payload: ProductState
}

export type ProductDispatchType = (args: ProductAction) => ProductAction

// Personal Data Types

export type PersonalDataType = {
  name: string,
  location: string,
  birthday: date,
  linkedIn: string,
  mail: string,
  tel: string,
  photoUrl: string
}

export type PersonalDataAction = {
  type: string
  payload: PersonalDataType
}

export type PersonalDataDispatchType = (args: PersonalDataAction) => PersonalDataAction

// Combined Types
export type CombinedDispatchType = (args: CombinedAction) => CombinedAction

export type CombinedState = {
  ProductReducers: ProductState,
  ImageReducers: ImageState,
  PersonalDataReducers: PersonalPageState
}

export type CombinedAction = {
  ProductReducers: ProductAction,
  ImageReducers: ImageAction,
  PersonalDataReducers: PersonalDataAction
}
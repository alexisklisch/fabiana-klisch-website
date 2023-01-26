export interface Property {
  detail: {
    antiquity: number
    bathrooms: number
    bedrooms: number
    garages: number
    layout: string
    rooms: number
    size: {
      measure: string
      value: number
    }
    state: string
    orientation: string
  }
  images: string[]
  location: {
    address: string
    city: string
    cond: string
  }
  operation: {
    realEstate: string
    type: string
    sale: {
      currency: string
      value: number
    }
    expenses: {
      currency: string
      value: number
    }
  }
}
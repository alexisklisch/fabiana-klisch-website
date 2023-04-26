export interface Property {
  title: string
  operation: {
    type: string
  },
  publication: {
    url: string
  },
  costs: {
    price: {
      currency: string
      value: number
    },
    expenses: {
      currency: string
      value: number
    }
  },
  location: {
    address_line: string
    neighborhood: string
    city: string
    state?: string
    country?: string
  }
  attributes: {
    name: string,
    value: string
  }[]
  pictures: {
    url: string
    size: string
  }[]
  video: string
}
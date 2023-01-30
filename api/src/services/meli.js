import { config } from "../../config.js"

const { meliApiKey } = config

class MeliData {
  async getPropertyInfo(id) {
    const res = await fetch(`https://api.mercadolibre.com/items/${id}`, {
      headers: {
        "Authorization": `Bearer ${meliApiKey}`
      }
    })
    const data = await res.json()

    const { address_line } = data.location
    const antiquity = Number(data.attributes.filter(attr => attr.id === 'PROPERTY_AGE')[0].value_struct.number)
    const bathrooms = Number(data.attributes.filter(attr => attr.id === 'FULL_BATHROOMS')[0].value_name)
    const bedrooms = Number(data.attributes.filter(attr => attr.id === 'BEDROOMS')[0].value_name)
    const city = data.location.neighborhood.name
    const layout = data.attributes.filter(attr => attr.id === 'DISPOSITION')[0].value_name
    const cond = data.location.state.name
    const expensesCurrency = data.attributes.filter(attr => attr.id === 'MAINTENANCE_FEE')[0].value_struct.unit
    const expensesValue = Number(data.attributes.filter(attr => attr.id === 'MAINTENANCE_FEE')[0].value_struct.number)
    const images = data.pictures.map(obj => obj.url)
    const price = Number(data.price)
    const priceCurrency = Number(data.currency_id)
    const sizeValue = Number(data.attributes.filter(attr => attr.id === 'COVERED_AREA')[0].value_struct.number)
    const sizeMeasure = data.attributes.filter(attr => attr.id === 'COVERED_AREA')[0].value_struct.unit
    const state = data.attributes.filter(attr => attr.id === 'ITEM_CONDITION')[0].value_name
    const operation = data.attributes.filter(attr => attr.id === 'OPERATION')[0].value_name
    const orientation = data.attributes.filter(attr => attr.id === 'FACING')[0].value_name
    
    const info = {
      detail: {
        antiquity,
        bathrooms,
        bedrooms,
        garages: 0,
        layout,
        orientation,
        rooms: 0,
        size: {
          measure: sizeMeasure,
          value: sizeValue
        },
        state
      },
      location: {
        address: address_line,
        city,
        cond
      },
      operation: {
        expenses: {
          currency: expensesCurrency,
          value: expensesValue
        },
        realEstate: '',
        sale: {
          currency: priceCurrency,
          value: price
        },
        type: operation
      },
      images,
    }

    return info
  }
}

export { MeliData }
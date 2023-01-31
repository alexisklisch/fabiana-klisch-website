import { useEffect, useState } from 'preact/hooks'
import * as cheerio from 'cheerio'
import { lowerator } from '../utils/lowerator'
import { spacesRemover } from '../utils/spacesRemover'
import { Property } from '../types'

interface useProperty {
  url: string
}

export const useProperty = ({ url }: useProperty) => {
  const [propertyData, setPropertyData] = useState<Property>({
    detail: {
      antiquity: 0,
      bathrooms: 0,
      bedrooms: 0,
      garages: 0,
      layout: '',
      orientation: '',
      rooms: 0,
      size: {
        measure: '',
        value: 0
      },
      state: ''
    },
    location: {
      address: '',
      city: '',
      cond: ''
    },
    operation: {
      expenses: {
        currency: '',
        value: 0
      },
      realEstate: '',
      sale: {
        currency: '',
        value: 0
      },
      type: ''
    },
    images: [],

  })

  useEffect(() => {
    const fetching = async () => {

      if (url.includes('argenprop')) {

        const fetchData = await fetch(url)
          .then(res => res.text())
        const $ = cheerio.load(fetchData)

        // Images
        const images: string[] = []
        $('img[data-lazy]').each(function () {
          const currentImg = String($(this).attr('data-src'))
          const validation = currentImg.includes('large')
          if (validation) images.push(currentImg);
        })

        // Location
        // Address
        const address = lowerator($('.titlebar__address').text())
        // City
        const pubTitle = $('.titlebar__title').text()
        const initialCityCase = pubTitle.lastIndexOf('Venta en') + 9
        const fullLocation = pubTitle.slice(initialCityCase)
        const [city, cond] = fullLocation.split(', ')

        // Business info
        const mainInfo = $('.property-container')
        // Operation
        const operationContainer = mainInfo.find('li:contains("Tipo de operación:")')
        const operationType = operationContainer.find('strong').text()
          .replace('\n', '').trim()
        // Price
        const priceContainer = mainInfo.find('li:contains("Precio")')
        const [saleCurrency, saleValue] = spacesRemover(priceContainer.find('strong').text(), true)
          .split(' ')
        // Expenses
        const expensesContainer = mainInfo.find('li:contains("Expensas")')
        const [expensesCurrency, expensesValue] = spacesRemover(expensesContainer.find('strong').text(), true)
          .split(' ')
        // Real Estate
        const realEstate = lowerator(mainInfo.find('.details h6').text())

        // Detail
        // Rooms
        const roomsContainer = mainInfo.find('li:contains("Cant. Ambientes")')
        const rooms = Number(spacesRemover(roomsContainer.find('strong').text()))
        // Bedrooms
        const bedroomsContainer = mainInfo.find('li:contains("Cant. Dormitorios")')
        const bedrooms = Number(spacesRemover(bedroomsContainer.find('strong').text()))
        // Bathrooms
        const bathroomsContainer = mainInfo.find('li:contains("Cant. Baños")')
        const bathrooms = Number(spacesRemover(bathroomsContainer.find('strong').text()))
        // State
        const stateContainer = mainInfo.find('li:contains("Estado")')
        const state = spacesRemover(stateContainer.find('strong').text())
        // Building layout
        const layoutContainer = mainInfo.find('li:contains("Disposición")')
        const layout = spacesRemover(layoutContainer.find('strong').text())
        // Orientation
        const orientationContainer = mainInfo.find('li:contains("Orientación:")')
        const orientation = spacesRemover(orientationContainer.find('strong').text())
        // Covered Size
        const coverSizeContainer = mainInfo.find('li:contains("Sup. Cubierta")')
        const [coverSizeValue, coverSizeMeasure] = spacesRemover(coverSizeContainer.find('strong').text())
          .split(' ')
        // Antigüedad
        const antiquityContainer = mainInfo.find('li:contains("Antiguedad:")')
        const antiquity = Number(spacesRemover(antiquityContainer.find('strong').text()))
        // Cocheras
        const garagesContainer = mainInfo.find('li:contains("Cant. Cocheras:")')
        const garages = Number(spacesRemover(garagesContainer.find('strong').text()))

        if (address === '') return
        setPropertyData({
          detail: {
            antiquity,
            bathrooms,
            bedrooms,
            garages,
            layout,
            rooms,
            size: {
              measure: coverSizeMeasure,
              value: Number(coverSizeValue)
            },
            state,
            orientation
          },
          images,
          location: {
            address,
            city,
            cond
          },
          operation: {
            realEstate,
            type: operationType,
            sale: {
              currency: saleCurrency,
              value: Number(saleValue)
            },
            expenses: {
              currency: expensesCurrency,
              value: Number(expensesValue)
            }
          }
        })
      }

      if (url.includes('klisch-api.vercel')) {
        try {
          const res = await fetch(url)
          const json = await res.json()
          setPropertyData(json)
        } catch (err) {
          console.error(err)
          
        }
      }
    }
    fetching()

  }, [url])

  return { propertyData }
}
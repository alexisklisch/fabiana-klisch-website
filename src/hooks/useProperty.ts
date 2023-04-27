import { useEffect, useState } from 'preact/hooks'
import * as cheerio from 'cheerio'
import { lowerator } from '../utils/lowerator'
import { spacesRemover } from '../utils/spacesRemover'
import { Property } from '../types'

interface useProperty {
  id: string,
  platform: string
  onLoading:(arg: boolean) => void
}

export const useProperty = ({ id, platform, onLoading }: useProperty) => {
  const [propertyData, setPropertyData] = useState<Property>()
  
  useEffect(() => {
    const fetching = async () => {
      
      if (platform === 'ap') {
        
        const res = await fetch(`https://klisch-api.vercel.app/api/argenprop/${id}`)
        const data: Property = await res.json()
          .finally(() => onLoading(false))
        
        setPropertyData(data)
        
      }

      if (platform === 'ml') {
        try {
          const res = await fetch(`https://klisch-api.vercel.app/api/meli/${id}`)
          const json = await res.json()
            .finally(() => onLoading(false))
          setPropertyData(json)
        } catch (err) {
          console.error(err)
          
        }
      }
    }
    fetching()

  }, [id, platform])

  return { propertyData }
}
import { useEffect, useState } from 'preact/hooks'
import { Property } from '../types'

interface useProperty {
  id: string,
  platform: string
}

export const useProperty = ({ id, platform }: useProperty) => {
  const [propertyData, setPropertyData] = useState<Property>()
  
  useEffect(() => {
    const fetching = async () => {
      
      if (platform === 'ap') {
        
        const res = await fetch(`https://klisch-api.vercel.app/api/argenprop/${id}`)
        const data: Property = await res.json()
        
        setPropertyData(data)
      }

      if (platform === 'ml') {
        try {
          const res = await fetch(`https://klisch-api.vercel.app/api/meli/${id}`)
          const json = await res.json()
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
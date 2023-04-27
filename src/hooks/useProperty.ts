import { useEffect, useState } from 'preact/hooks'
import { Property } from '../types'

interface useProperty {
  id: string,
  platform: string
}

export const useProperty = ({ id, platform }: useProperty) => {
  const [propertyData, setPropertyData] = useState<Property>()
  const [isLoaded, setIsLoaded] = useState(false)
  
  useEffect(() => {
    const fetching = async () => {
      
      if (platform === 'ap') {
        try {
          const res = await fetch(`https://klisch-api.vercel.app/api/argenprop/${id}`)
          await res.json()
            .then(data => setPropertyData(data as Property))
            .finally(() => setIsLoaded(true))
        } catch (err) {
          console.error(err)
        }
      }

      if (platform === 'ml') {
        try {
          const res = await fetch(`https://klisch-api.vercel.app/api/meli/${id}`)
          await res.json()
            .then(data => setPropertyData(data as Property))
            .finally(() => setIsLoaded(true))
        } catch (err) {
          console.error(err)
        }
      }
    }
    fetching()

  }, [id, platform])

  return { propertyData, isLoaded }
}
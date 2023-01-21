import * as cheerio from "cheerio"
import { useEffect, useState } from "preact/hooks"

export const useData = async (url: string) => {

  const [data, setData] = useState({
    images: ['/foto1.jpg', '/foto1.jpg', '/foto1.jpg', '/foto1.jpg'],
    price: ''
  })

  useEffect(() => {
    const fetchData = async () => {
      const fetching = await fetch(url)
      const textFetching = await fetching.text()
      const $ = cheerio.load(textFetching)

      // Images
      const images: string[] = []
      $('img[data-lazy]').each(function () {
        const src = $(this).attr('data-src')
        src?.includes('large') ? images.push(src) : null
      })

      // Price
      const price: string = $('.titlebar__price').text()

      // Info
      const direccion = $('.titlebar__address').text()

      const supCubiertaExtract = $('[title="Sup. cubierta"] .desktop').text()
      const supCubierta = /\d+/.exec(supCubiertaExtract)![0]

      const dormitoriosExtract = $('[title="Dormitorios"] .desktop').text()
      const dormitorios = /\d+/.exec(dormitoriosExtract)![0]

      const ambientesExtract = $('[title="Ambientes"] .desktop').text()
      const ambientes = /\d+/.exec(ambientesExtract)![0]

      const antiguedadExtract = $('[title="Antigüedad"] .desktop').text()
      const antiguedad = /\d+/.exec(antiguedadExtract)![0]

      const banosExtract = $('[title="Baños"] .desktop').text()
      const banos = /\d+/.exec(banosExtract)![0]

      
      const info = {
        direccion,
        ambientes,
        dormitorios,
        supCubierta,
        antiguedad,
        banos
      }
      console.log(info)
      
      setData({images, price})
    }
    fetchData()
  }, [url])

  return data
}
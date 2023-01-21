import { useEffect, useState } from "preact/hooks";
import * as cheerio from 'cheerio'

export const usePropData = async (url: string) => {
  const [propData, setPropData] = useState({})
  const htmlPromise = await fetch(url)
  const htmlText = await htmlPromise.text()
  const $ = cheerio.load(htmlText)

  const imgSrc: string[] = []
  const imgElements = $('img[data-lazy]')
  imgElements.each(function() {
    const srcString = $(this).attr('data-src')
    srcString?.includes('large') ? imgSrc.push(srcString) : null
  })

  const price = $('.titlebar__price').text()

  return {images: imgSrc, price}
}
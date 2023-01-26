import { TargetedEvent } from "preact/compat"
import { useEffect, useState } from "preact/hooks"
import { useArgenprop } from "../hooks/useArgenprop"

export const Test = () => {
  const queryParams = new URLSearchParams(window.location.search)
  const argenprop = queryParams.get('argenprop')

  const [url, setUrl] = useState('https://www.argenprop.com/casa-en-venta-en-nuevo-quilmes-4-ambientes--12433831')
  const { argenpropData } = useArgenprop(url)

  const inputChangeHandler = (e:TargetedEvent<HTMLInputElement>) => {
    setUrl(e.currentTarget.value)
  }

  useEffect(() => {
    if (argenprop) {
      const validateURL = /^([\w]+(-[\w]+)*)--(\d{8})$/i.test(argenprop)
      if (validateURL) setUrl(`https://www.argenprop.com/${argenprop}`)
    }
  }, [])


  return <div class='md:max-w-4xl mx-auto'>
    <div class='justify-center flex mt-6'>
      <input class='p-3 rounded-md border border-remaxWhite-200 shadow-md' placeholder='Link de Argenprop' type="text" onChange={e => inputChangeHandler(e)} />
    </div>
    <h1 class='text-3xl font-bold px-4 py-3 text-remaxBlue-200'>{argenpropData.location.address}, {argenpropData.location.city}</h1>
    <section class='overflow-x-auto max-h-80 flex gap-3 pb-8 w-[calc(100%_-_32px)] mx-auto'>
      {argenpropData.images.map(image => <img class='object-cover rounded-md shadow-sm' src={image} key={image} alt={`Imagen tomada en la casa ubicada en ${argenpropData.location.address}`} />)}
    </section>
    <div class='px-4'>
      <h2 class='text-2xl font-bold text-remaxWhite-400'>{argenpropData.operation.sale.currency} {argenpropData.operation.sale.value.toLocaleString()}</h2>
      {!Number.isNaN(argenpropData.operation.expenses.value) && <p>Expensas: {argenpropData.operation.expenses.currency}{argenpropData.operation.expenses.value}</p>}
    </div>
  </div>
}
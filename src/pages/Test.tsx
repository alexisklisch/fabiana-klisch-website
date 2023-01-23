import { useEffect, useState } from "preact/hooks"
import { useProperty } from "../hooks/useProperty"

export const Test = () => {
  const queryParams = new URLSearchParams(window.location.search)
  const argenprop = queryParams.get('argenprop')

  const [url, setUrl] = useState('https://www.argenprop.com/casa-en-venta-en-nuevo-quilmes-4-ambientes--12433831')
  const { data } = useProperty(url)

  useEffect(() => {
    if (argenprop) {
      const validateURL = /^([\w]+(-[\w]+)*)--(\d{8})$/i.test(argenprop)
      console.log(validateURL)
      if (validateURL) setUrl(`https://www.argenprop.com/${argenprop}`)
    }
  }, [])

  console.log(data)
  return <div>
    <div class='justify-center flex mt-6'>
      <input class='p-3 rounded-md border border-remaxWhite-200 shadow-md' placeholder='Link de Argenprop' type="text" onChange={e => setUrl(e.target.value)} />
    </div>
    <h1 class='text-3xl font-bold px-4 py-3 text-remaxBlue-200'>{data.location.address}, {data.location.city}</h1>
    <section class='overflow-x-auto max-h-80 flex gap-3 pb-8 w-[calc(100%_-_32px)] mx-auto'>
      {data.images.map(image => <img class='object-cover rounded-md shadow-sm' src={image} key={image} alt={`Imagen tomada en la casa ubicada en ${data.location.address}`} />)}
    </section>
    <div class='px-4'>
      <h2 class='text-2xl font-bold text-remaxWhite-400'>{data.operation.sale.currency} {data.operation.sale.value.toLocaleString()}</h2>
      {!Number.isNaN(data.operation.expenses.value) && <p>Expensas: {data.operation.expenses.currency}{data.operation.expenses.value}</p>}
    </div>
  </div>
}
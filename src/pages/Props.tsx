import { Suspense, useEffect, useState } from "preact/compat"
import { Layout } from "../components/Layout"
import { LoadingScreen } from "../components/LoadingScreen"
import { useArgenprop } from "../hooks/useArgenprop"
import { wpLinkCreator } from "../utils/wpLinkCreator"

export const Props = () => {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(true)
  const { argenpropData } = useArgenprop(url)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3500)
    const queryParams = new URLSearchParams(window.location.search)
    const argenprop = queryParams.get('ap')
    const URL = `https://www.argenprop.com/${argenprop}`
    setUrl(URL)
    document.title = argenpropData.location.address + ' | Fabiana Klisch | Mudate conmigo'
  }, [])

  const { address } = argenpropData.location
  const { city, cond } = argenpropData.location
  const { images } = argenpropData
  const saleCurrency = argenpropData.operation.sale.currency
  const saleValue = argenpropData.operation.sale.value
  const expensesValue = argenpropData.operation.expenses.value
  const { antiquity, bathrooms, bedrooms, garages, layout, orientation, rooms, size, state } = argenpropData.detail

  return (
    <>
      {!address ? <LoadingScreen/> : null}
      <Layout>
        <main class=''>
          <h1 class=' px-4 text-2xl text-remaxBlue-100 font-bold md:text-5xl md:leading-8'>
            {address}
          </h1>
          <h2 class='px-4 text-remaxRed-100 leading-5'>{city}, {cond}</h2>
          {/* Images */}
          <section class='p-4 flex h-48 gap-3 overflow-scroll'>
            {images.map(img => <img class='object-cover rounded-md aspect-video shadow' src={img} alt={`Foto tomada en la propiedad ubicada en ${city} ${cond}`} />)}
          </section>
          {/* Price */}
          <h2 class='px-4 text-2xl text-remaxBlue-100 font-bold md:text-5xl md:leading-8'>
            {saleCurrency} {saleValue.toLocaleString('es-AR')}
          </h2>
          {expensesValue ? <h3 class='px-4 text-remaxWhite-300 leading-4'>+ <strong>ARS {expensesValue.toLocaleString('es-AR')}</strong> expensas</h3> : null}

          <section class='px-4 py-12 grid grid-cols-2 gap-y-2'>
            {/* Tamaño */}
            {size.value ? <p class='flex items-center gap-x-2 text-remaxWhite-400'>
              <span>
                <img src="/icons/mts-cubiertos.svg" width='24' />
              </span>
              {size.value} {size.measure} cubierto
            </p> : null}
            {/* Ambientes */}
            {rooms ? <p class='flex items-center gap-x-2 text-remaxWhite-400'>
              <span>
                <img src="/icons/ambientes.svg" width='24' />
              </span>
              {rooms} ambientes
            </p> : null}
            {/* Antigüedad */}
            {antiquity ? <p class='flex items-center gap-x-2 text-remaxWhite-400'>
              <span>
                <img src="/icons/antiguedad.svg" width='24' />
              </span>
              {antiquity} años
            </p> : null}
            {/* Baños */}
            {bathrooms ? <p class='flex items-center gap-x-2 text-remaxWhite-400'>
              <span>
                <img src="/icons/banios.svg" width='24' />
              </span>
              {bathrooms} baños
            </p> : null}
            {/* Disposicion */}
            {layout ? <p class='flex items-center gap-x-2 text-remaxWhite-400'>
              <span>
                <img src="/icons/disposicion.svg" width='24' />
              </span>
              {layout}
            </p> : null}
            {/* Dormitorios */}
            {bedrooms ? <p class='flex items-center gap-x-2 text-remaxWhite-400'>
              <span>
                <img src="/icons/dormitorios.svg" width='24' />
              </span>
              {bedrooms} dormitorios
            </p> : null}
            {/* Garages */}
            {garages ? <p class='flex items-center gap-x-2 text-remaxWhite-400'>
              <span>
                <img src="/icons/garages.svg" width='24' />
              </span>
              {garages} garages
            </p> : null}
            {/* Orientación */}
            {orientation ? <p class='flex items-center gap-x-2 text-remaxWhite-400'>
              <span>
                <img src="/icons/orientacion.svg" width='24' />
              </span>
              {orientation}
            </p> : null}
          </section>
          <a class='flex gap-3 leading-5 text-center p-2 px-4 mx-auto bg-[#25D366] shadow-md shadow-green-800/30 font-bold text-remaxWhite-100 rounded-md w-52'
            href={wpLinkCreator({ address, link: window.location.href })} target="_blank"
          >
            <img src="/icons/wp-logo.svg" alt="Logo de Whatsapp" />
            Me interesa esta propiedad
          </a>
        </main>
      </Layout>
    </>
  )
}

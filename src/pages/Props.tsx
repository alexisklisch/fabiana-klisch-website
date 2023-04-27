import { useEffect, useState } from "preact/compat"
import { Layout } from "../components/Layout"
import { LoadingScreen } from "../components/LoadingScreen"
import { useProperty } from "../hooks/useProperty"
import { wpLinkCreator } from "../utils/wpLinkCreator"

export const Props = () => {
  const [url, setUrl] = useState({id: '', platform: ''})
  const [loading, setLoading] = useState(true)
  const { propertyData } = useProperty(url)
  
  
  useEffect(() => {
    setTimeout(() => setLoading(false), 1500)
    const queryParams = new URLSearchParams(window.location.search)
    const argenprop = queryParams.get('ap')
    const meli = queryParams.get('ml')
    if (argenprop) setUrl({id: argenprop, platform: 'ap'})
    if (meli) setUrl({id: meli, platform: 'ml'})
    
  }, [])

  const location = propertyData?.location
  const attributes = propertyData?.attributes
  const coveredSize = attributes?.find(attr => attr.name === 'Superficie cubierta')
  const rooms = attributes?.find(attr => attr.name === 'Ambientes')
  const antiquity = attributes?.find(attr => attr.name === 'Antigüedad')
  const bathrooms = attributes?.find(attr => attr.name === 'Baños')
  const layout = attributes?.find(attr => attr.name === 'Disposición')
  const bedrooms = attributes?.find(attr => attr.name === 'Dormitorios')
  const garages = attributes?.find(attr => attr.name === 'Cocheras')
  const orientation = attributes?.find(attr => attr.name === 'Orientación')
  
  useEffect(() => {
    const title = location?.address_line
    document.title = `${title + ' | '}Fabiana Klisch | Mudate a la vida que querés`
  }, [propertyData])


  return <>
  {loading ? <LoadingScreen /> : null}
  <Layout>
    <main class='md:max-w-5xl mx-auto'>
      <h1 class=' px-4 text-2xl text-remaxBlue-100 font-bold md:text-3xl md:leading-8'>
        {location?.address_line}
      </h1>
      <h2 class='px-4 text-remaxRed-100 leading-5'>{location?.neighborhood}, {location?.city}</h2>
      {/* Images */}
      <section class='p-4 flex h-48 md:h-80 md:py-8 md:my-2 gap-3 overflow-scroll md:scrollbar-thin scrollbar-thumb-remaxWhite-300 scrollbar-track-remaxWhite-200'>
        {propertyData?.pictures.map(img => <img class='object-cover rounded-md aspect-video shadow-md' src={img.url} alt={`Foto tomada en la propiedad ubicada en ${location?.neighborhood} ${location?.city}`} />)}
      </section>
      {/* Price */}
      <h2 class='px-4 text-2xl text-remaxBlue-100 font-bold md:text-3-xl md:leading-8'>
        {propertyData?.costs.price.currency} {propertyData?.costs.price.value.toLocaleString('es-AR')}
      </h2>
      {propertyData?.costs.expenses.value ? <h3 class='px-4 text-remaxWhite-300 leading-4'>+ <strong>{propertyData.costs.expenses.currency} {propertyData.costs.expenses.value.toLocaleString('es-AR')}</strong> expensas</h3> : null}

      <section class='px-4 py-12 grid grid-cols-2 gap-y-2 md:grid-cols-3 md:place-items-center'>
        {/* Tamaño */}
        {coveredSize?.value
          ? <p class='flex items-center gap-x-2 text-remaxWhite-400'>
          <span>
            <img src="/icons/mts-cubiertos.svg" width='24' />
          </span>
          {coveredSize?.value} cubierto
        </p> : null}
        {/* Ambientes */}
        {rooms?.value ? <p class='flex items-center gap-x-2 text-remaxWhite-400'>
          <span>
            <img src="/icons/ambientes.svg" width='24' />
          </span>
          {rooms.value} ambientes
        </p> : null}
        {/* Antigüedad */}
        {antiquity?.value ? <p class='flex items-center gap-x-2 text-remaxWhite-400'>
          <span>
            <img src="/icons/antiguedad.svg" width='24' />
          </span>
          {antiquity.value} años
        </p> : null}
        {/* Baños */}
        {bathrooms?.value ? <p class='flex items-center gap-x-2 text-remaxWhite-400'>
          <span>
            <img src="/icons/banios.svg" width='24' />
          </span>
          {bathrooms?.value} baños
        </p> : null}
        {/* Disposicion */}
        {layout?.value ? <p class='flex items-center gap-x-2 text-remaxWhite-400'>
          <span>
            <img src="/icons/disposicion.svg" width='24' />
          </span>
          {layout?.value}
        </p> : null}
        {/* Dormitorios */}
        {bedrooms?.value ? <p class='flex items-center gap-x-2 text-remaxWhite-400'>
          <span>
            <img src="/icons/dormitorios.svg" width='24' />
          </span>
          {bedrooms?.value} dormitorios
        </p> : null}
        {/* Garages */}
        {garages?.value ? <p class='flex items-center gap-x-2 text-remaxWhite-400'>
          <span>
            <img src="/icons/garages.svg" width='24' />
          </span>
          {garages?.value} garages
        </p> : null}
        {/* Orientación */}
        {orientation?.value ? <p class='flex items-center gap-x-2 text-remaxWhite-400'>
          <span>
            <img src="/icons/orientacion.svg" width='24' />
          </span>
          {orientation?.value}
        </p> : null}
      </section>
      <a class='flex gap-3 leading-5 text-center p-2 px-4 mx-auto bg-[#25D366] shadow-md shadow-green-800/30 font-bold text-remaxWhite-100 rounded-md w-52'
        href={wpLinkCreator({ address: location?.address_line as string, link: window.location.href })} target="_blank"
      >
        <img src="/icons/wp-logo.svg" alt="Logo de Whatsapp" />
        Me interesa esta propiedad
      </a>
    </main>
  </Layout>
</>
}

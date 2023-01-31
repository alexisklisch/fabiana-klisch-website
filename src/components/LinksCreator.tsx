import { useState } from "preact/hooks"
import { Link } from "wouter"
import { Layout } from "./Layout"

const Input = <input
    class={`px-3 py-2 rounded-md shadow shadow-remaxWhite-300/30`}
    type="text"
    placeholder='🔗 MercadoLibre o Argenprop' />

export const LinksCreator = () => {
  const [inputQ, setInputQ] = useState([Input])
  const [urls, setURLS] = useState('')

  const formHandler = (e: Event) => {
    e.preventDefault()
    const urlList: string[] = []
    const $inputs = (e.target as HTMLInputElement).querySelectorAll('input')

    $inputs.forEach(elem => {
      const { value } = elem
      const apUrl = 'argenprop.com/'
      const mlUrl = 'mercadolibre.com.ar/'
      const valueIndex = value.indexOf(apUrl) + apUrl.length
      if (value.includes(apUrl)) {
        const text = value.slice(valueIndex)
        urlList.push(`https://klisch.ar/props?ap=${text}`)
      }
      if (value.includes(mlUrl)) {
        const text = /MLA-\d+/.exec(value)![0]
          .replace('-', '')
        
        urlList.push(`https://klisch.ar/props?ml=${text}`)
      }
    })
    const finalUrls = urlList.join('\n\n')

    async function copyText() {
      await navigator.clipboard.writeText(finalUrls)
    }

    copyText()

  }

  return (
    <Layout>
      <Link href='/dashboard'><a class='block max-w-5xl mx-auto text-remaxWhite-300 mb-7'><span class='border p-2 px-4 rounded-full'>Atrás</span></a></Link>
      <h1 class='mb-7 px-4 text-2xl text-remaxBlue-100 font-bold md:leading-8 md:max-w-4xl mx-auto'>
        Creá tu link
      </h1>
      <form onSubmit={e => formHandler(e)} class='px-4 flex flex-col gap-y-3 items-stretch md:max-w-4xl mx-auto'>
        {inputQ.map(elem => elem)}
        <div class='px-4 py-6 flex justify-center gap-3'>
          <button class='bg-remaxWhite-300 shadow shadow-remaxWhite-300/30 px-3 py-1 rounded-md text-remaxWhite-100 font-bold min-w-[120px]' type='button' onClick={() => setInputQ([...inputQ.slice(0, -1)])}>Quitar</button>
          <button class='bg-remaxRed-200 shadow shadow-remaxRed-200/30 px-3 py-1 rounded-md text-remaxWhite-100 font-bold min-w-[120px]' type='button' onClick={() => setInputQ([...inputQ, Input])}>Agregar</button>
        </div>
        <button class='bg-remaxBlue-100 shadow shadow-remaxBlue-100/30 py-2 rounded-md text-remaxWhite-100 font-bold min-w-[280px] mx-auto'>Copiar 📄</button>
      </form>
    </Layout>
  )
}

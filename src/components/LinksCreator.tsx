import { useState } from "preact/hooks"
import { Layout } from "./Layout"

const Input = <input
  class='px-3 py-2 rounded-md shadow shadow-remaxWhite-300/30'
  type="text"
  placeholder='Link de Argenprop' />

export const LinksCreator = () => {
  const [inputQ, setInputQ] = useState([Input])
  const [urls, setURLS] = useState('')

  const formHandler = (e: Event) => {
    e.preventDefault()
    const urlList: string[] = []
    const $inputs = (e.target as HTMLInputElement).querySelectorAll('input')
    
    $inputs.forEach(elem => {
      const { value } = elem
      const url = 'argenprop.com/'
      const valueIndex = value.indexOf(url) + url.length
      if (value.includes(url)) {
        const text = value.slice(valueIndex)
        urlList.push(`https://fabiana-klisch.vercel.app/props?ap=${text}`)
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
      <form onSubmit={e => formHandler(e)} class='px-4 flex flex-col gap-y-3 items-stretch'>
        {inputQ.map(elem => elem)}
        <div class='px-4 py-6 flex justify-center gap-3'>
          <button class='bg-remaxWhite-300 shadow shadow-remaxWhite-300/30 px-3 py-1 rounded-md text-remaxWhite-100 font-bold min-w-[120px]' type='button' onClick={() => setInputQ([...inputQ.slice(0, -1)])}>Quitar</button>
          <button class='bg-remaxRed-200 shadow shadow-remaxRed-200/30 px-3 py-1 rounded-md text-remaxWhite-100 font-bold min-w-[120px]' type='button' onClick={() => setInputQ([...inputQ, Input])}>Agregar</button>
        </div>
        <button class='bg-remaxBlue-100 shadow shadow-remaxBlue-100/30 py-2 rounded-md text-remaxWhite-100 font-bold min-w-[120px]'>Copiar 📄</button>
      </form>
    </Layout>
  )
}

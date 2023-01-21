import { useEffect, useState } from "preact/hooks"
import { useData } from "../hooks/useData"
import { TargetedEvent } from "preact/compat"

interface Info {
  images: string[]
  price: string
}

export const Test = () => {
  const [url, setUrl] = useState('')
  const [info, setInfo] = useState({ images: [''], price:'' })
  useData(url)
    .then(res => setInfo(res))


  const urlHandler = (e: TargetedEvent<HTMLInputElement>) => {
    const text = e.currentTarget.value
    if (text.includes('argenprop.com')) {
      setUrl(text)
    }
  }

  return (
    <div>
      <div class='bg-slate-200'>
        <h2 class='text-5xl text-remaxRed-200'>{info.price}</h2>
        <h2 className="text-2xl font-bold">Imagen 1</h2>
        <img src={info.images[0]} alt="" />
        <h2 className="text-2xl font-bold">Imagen 2</h2>
        <img src={info.images[1]} alt="" />
      </div>
      <form>
        <input onChange={e => urlHandler(e)} type="text" class='text-3xl p-2 mt-6 rounded shadow-sm' />
      </form>
    </div>
  )
}
import dti from 'dom-to-image'
import { useState } from 'preact/hooks'

export const GranCasa = () => {
  const [screenshot, setScreenshot] = useState('')
  const [data, setData] = useState({images:[''], price:''})

  async function takeScreenshot() {
    const selected: HTMLDivElement | null = document.querySelector('#instagram-story1')
    return await dti.toPng(selected!)
  }

  const handleScreenshot = async () => {
    const imgSrc = await takeScreenshot()
    setScreenshot('')
    setScreenshot(imgSrc)
  }

  return (
    <div class="absolute top-0 bg-remaxWhite-100 min-h-screen w-screen">
      <div class='w-fit' id="instagram-story1">
        <article id="imprimir" class="relative w-80 aspect-[9/16] shadow-md mx-auto overflow-hidden">
          {/* Elementos fijos */}
          <div class="absolute w-full h-full">
            <img class="absolute bottom-0 right-0 w-52" src="/templates-assets/ig-triangle-br.svg" alt="" />
            <img class="absolute bottom-0 left-0 w-52" src="/templates-assets/ig-red-lines.svg" alt="" />
            <img class="pt-8 pl-4 w-28" src="/remax-logo.png" />
            <div>
              <figure id="img-1" class="absolute top-12 -right-28  w-[290px] aspect-square overflow-hidden rotate-[120deg] rounded-lg">
                <img class="-rotate-[120deg] scale-125" src={data.images[0]} alt="" />
              </figure>
            </div>
            <img
              class="absolute top-[280px] right-14 w-[290px] aspect-square overflow-hidden rotate-[30deg] rounded-lg"
              src={data.images[1]} alt=""
            />
            {/* Textos */}
            <div class="px-4 mt-4 text-center uppercase text-remaxWhite-300">
              <figure class="w-fit">
                <h2 class="text-xs">Barrio privado</h2>
                <div class="border-b-2 border-remaxWhite-200 my-1" />
                <h1 class="font-black text-2xl leading-7">
                  <span class="text-remaxRed-200">Nuevo</span>
                  <br />
                  <span class="text-remaxBlue-200">Quilmes</span>
                </h1>
              </figure>
            </div>
            {/* Sección de precio */}
            <section class="absolute bottom-14 right-4">
              <figure class="text-center text-remaxWhite-100">
                <h3 class="uppercase">Venta</h3>
                <h2 class="font-bold text-md -mt-1">U$ 690.000</h2>
              </figure>
            </section>
            <p class="text-[10px] absolute bottom-2 text-center leading-3 text-remaxWhite-300">Los corredores públicos intermedian y concluyen todas las operaciones. Los agentes operan bajo el control y supérvisión de un  corredor público.</p>
          </div>
        </article>
      </div>

      <button onClick={handleScreenshot}>Descargar</button>

      {screenshot && <img src={screenshot} />}
    </div>
  )
}
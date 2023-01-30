import {JSX} from 'preact'
import { Header } from "./UI/Header"

interface props {
  children: JSX.Element[] | JSX.Element
}

export const Layout = ({children}: props) => {
  return (
    <>
      <Header/>
      {children}
      {/* Sección de Tarjeta de contacto */}
      <section class="my-12 flex max-w-4xl mx-auto md:w-1/2">
        <figure class="flex flex-col gap-6">
          <img class="w-24" src="/F.svg" alt="" />
          <img class="w-24" src="/K.svg" alt="" />
        </figure>
        <figure class="mx-auto text-remaxWhite-400 flex flex-col justify-center ">
          <div>
            <h3 class="text-center text-3xl md:text-5xl text-remaxBlue-200 leading-5 md:leading-12 font-bold">
              Fabiana Klisch<br />
              <span class="text-sm md:text-lg font-normal text-remaxRed-100">
                Agente inmobiliario
              </span>
            </h3>
          </div>
          <p class="text-center text-sm mt-4">
            11 6424 3479<br />
            fklisch@remax.com.ar
          </p>
        </figure>
      </section>

      {/* Footer */}
      <footer class="container mx-auto mt-6 px-4 flex flex-col gap-8 pb-6 max-w-4xl">
        <p class="text-remaxWhite-300 text-xs text-center">
          Los corredores públicos intermedian y concluyen todas las operaciones. Los agentes operan bajo el control y supervisión de un corredor público. Las oficinas son de propiedad y gestión independiente.
        </p>
        <div class="grid grid-cols-2 place-items-center">
          <img class="w-24" src="/mls.svg" alt="Logo de Multiple Listing Service" />
          <img class="max-h-12" src="/remax-logo.png" alt="Logo de Remax" />
        </div>
      </footer>
    </>
  )
}

import { Layout } from "../components/Layout";
import { Header } from "../components/UI/Header";


export function Home() {
  return (
    <Layout>
      <div class="container mx-auto px-4 max-w-4xl">
        <section class="relative">
          <img class="-ml-16" src="/fabiana-hero.png" alt="Fabiana Klisch cruzada de brazos con espíritu de lucha" />
          <div class="absolute right-0 top-1/4">
            <h1 class="text-right leading-4 text-lg text-remaxBlue-200 font-bold md:text-5xl md:leading-8">Fabiana Klisch<br /><span class="text-remaxRed-100 font-light text-xs md:text-2xl">Agente Inmobiliario</span></h1>
          </div>
          <img class="absolute bottom-3 right-0 w-48" src="/remax-logo.png" alt="Logo de Remax" />
        </section>
      </div>
      <section class="text-center font-light py-4 px-16 text-2xl bg-remaxBlue-100 text-remaxWhite-100">
        Mudate a la vida que querés
      </section>

      {/* Sección de recomendaciones */}
      <section class="container mx-auto mt-6 px-4 grid gap-6 max-w-4xl md:flex">
        <a class="grid grid-cols-2 gap-3 items-center hover:scale-105 transition-transform" href="https://www.facebook.com/mudatearanelagh/" target="_blank">
          <p class="text-remaxWhite-400 leading-5 text-xs text-center font-light md:text-sm md:font-normal">
            ¿Querés conocer la ciudad más hermosa de GBA?<br />
            <span class="font-bold ">Viví Ranelagh</span>
          </p>
          <img class="bg-viviRanelagh-blue aspect-square p-6 w-full rounded-xl md:max-w-[168px]" src="/vivi-ranelagh-logo.svg" alt="" />
        </a>
        <a class="grid grid-cols-2 gap-3 items-center hover:scale-105 transition-transform" href="https://www.remax.com.ar/agent/fabiana-raquel-klisch" target="_blank">
          <p class="text-remaxWhite-400 leading-5 text-xs text-center font-light md:text-sm md:font-normal">
            ¿Estás buscando una nueva propiedad?<br />
          </p>
          <span class="font-bold text-center text-2xl text-remaxWhite-100 bg-remaxBlue-200 grid place-content-center aspect-square p-6 w-full rounded-xl md:max-w-[168px]">Mudate conmigo</span>
        </a>
        <div class="border-b-2 border-remaxWhite-200" />
      </section>
    </Layout>

  )
}
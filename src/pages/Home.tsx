

export function Home() {
  return (
    <>
      <div class="container mx-auto pt-6 px-4">
        <header class="mb-8">
          <img src="/logo.png" alt="" />
        </header>
        <section class="relative">
          <img class="-ml-16" src="/fabiana-hero.png" alt="Fabiana Klisch cruzada de brazos con espíritu de lucha" />
          <div class="absolute right-0 top-1/4">
            <h1 class="text-right leading-4 text-lg text-remaxBlue-200 font-bold">Fabiana Klisch<br /><span class="text-remaxRed-100 font-light text-xs">Agente Inmobiliario</span></h1>
          </div>
          <img class="absolute bottom-3 right-0 w-48" src="/remax-logo.png" alt="Logo de Remax" />
        </section>
      </div>
      <section class="text-center font-light py-4 px-16 text-2xl bg-remaxBlue-100 text-remaxWhite-100">
        Mudate a la vida que querés
      </section>
      <section class="container mx-auto mt-6 px-4 grid gap-6">
        <a class="grid grid-cols-2 gap-3 items-center" href="https://www.facebook.com/mudatearanelagh/" target="_blank">
          <p class="text-remaxWhite-400 leading-5 text-xs text-center font-light">
            ¿Querés conocer la ciudad más hermosa de GBA?<br />
            <span class="font-bold">Viví Ranelagh</span>
          </p>
          <img class="bg-viviRanelagh-blue aspect-square p-6 w-full rounded-xl" src="/vivi-ranelagh-logo.svg" alt="" />
        </a>
        <a class="grid grid-cols-2 gap-3 items-center" href="https://www.remax.com.ar/agent/fabiana-raquel-klisch" target="_blank">
          <p class="text-remaxWhite-400 leading-5 text-xs text-center font-light">
            ¿Estás buscando una nueva propiedad?<br />
            <span class="font-bold">Mudate conmigo</span>
          </p>
          <img class="bg-[#f3f7f8] border-orange-600 border-2 aspect-square p-6 w-full rounded-xl" src="https://img10.naventcdn.com/home/RPHOM-REDv4.52.0-RC1/images/logo-zonaprop.svg" alt="" />
        </a>
        <div class="border-b-2 border-remaxWhite-200" />
      </section>
      <section class="mt-6 flex">
        <figure class="flex flex-col gap-6">
          <img class="w-24" src="../src/assets/F.svg" alt="" />
          <img class="w-24" src="../src/assets/K.svg" alt="" />
        </figure>
        <figure class="mx-auto text-remaxWhite-400 flex flex-col justify-center ">
          <div >
            <h3 class="text-center text-2xl leading-4 text-remaxBlue-200">
              Fabiana Klisch<br/>
              <span class="text-xs font-normal text-remaxRed-100">Agente inmobiliario</span>
            </h3>
          </div>
          <p class="text-center text-xs mt-4">
            11 6424 3479<br/>
            fklisch@remax.com.ar
          </p>
        </figure>
      </section>
      <footer class="container mx-auto mt-6 px-4 flex flex-col gap-8 pb-6">
        <p class="text-remaxWhite-300 text-xs text-center">
          Los corredores públicos intermedian y concluyen todas las operaciones. Los agentes operan bajo el control y supervisión de un corredor público. Las oficinas son de propiedad y gestión independiente.
        </p>
        <div class="grid grid-cols-2">
          <img class="w-24" src="/mls.svg" alt="Logo de Multiple Listing Service" />
          <img src="/remax-logo.png" alt="" />
        </div>
      </footer>
    </>
  )
}
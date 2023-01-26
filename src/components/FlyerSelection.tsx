import { useState } from "preact/hooks"
import { Link } from "wouter"
import { routes } from "./handlers/routes"
import { Layout } from "./Layout"
import { TemplateCardSelection } from "./TemplateCardSelection"

export const FlyerSelection = () => {
  const [templateSelected, setTemplateSelected] = useState('')
  const [currentComponent, setCurrentComponent] = useState()

  function showComponentHandler() {
    const component = routes[templateSelected]
    setCurrentComponent(component)
  }

  const sectionPart = (
    <Layout>
      <Link href='/dashboard'><a class='block max-w-5xl mx-auto text-remaxWhite-300 mb-7'><span class='border p-2 px-4 rounded-full'>Atrás</span></a></Link>
      <form class="flex flex-col max-w-5xl mx-auto">
        <label class="pl-4 text-remaxWhite-400">Selecciona una plantilla</label>
        <section class="mb-6 inline-flex gap-4 px-4 overflow-x-scroll py-3 w-full snap-mandatory snap-x scrollbar-hide">
          <TemplateCardSelection setTemplateSelected={setTemplateSelected} templateName="Gran casa" />
          <TemplateCardSelection setTemplateSelected={setTemplateSelected} templateName="Pedrito" />
        </section>
        <button
          onClick={showComponentHandler}
          disabled={templateSelected === '' ? true : false}
          type="button"
          class="disabled:opacity-50 mx-auto bg-remaxBlue-100 text-remaxWhite-100 p-3 rounded-md shadow-md shadow-remaxBlue-100/50">
          Nuevo Flyer
        </button>
        {currentComponent && <>{currentComponent}</>}
      </form>
    </Layout>
  )

  return !currentComponent ? sectionPart : currentComponent
}
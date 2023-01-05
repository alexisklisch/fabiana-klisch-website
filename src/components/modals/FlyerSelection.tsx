import { TemplateCardSelection } from "../TemplateCardSelection"

export const FlyerSelection = () => {
  return (
    <form class="flex flex-col">
      <section class=" inline-flex gap-4 px-4 overflow-x-scroll py-3 w-full snap-mandatory snap-x scrollbar-hide">
        <TemplateCardSelection templateName="Pedrito"/>
        <TemplateCardSelection templateName="Pedrito"/>
        <TemplateCardSelection templateName="Pedrito"/>
        <TemplateCardSelection templateName="Pedrito"/>
      </section>
      <button class="mx-auto bg-remaxBlue-100 text-remaxWhite-100 p-3 rounded-md">Nuevo Flyer</button>
    </form>
  )
}
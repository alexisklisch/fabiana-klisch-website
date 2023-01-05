interface props {
  templateName: string
}

export const TemplateCardSelection = ({templateName}: props) => {
  return (
    <button type="button" class="select-none relative h-72 min-w-fit aspect-[9/16] flex items-end rounded-lg shadow-md shadow-remaxBlue-200/30 overflow-hidden border-remaxWhite-200 border-2 snap-center focus:border-remaxRed-100/50 focus:shadow-remaxRed-100/50">
      <img class="h-full object-cover -z-100 absolute top-0" src="/fabiana-hero.png"/>
      <footer class="w-full h-1/3 z-50 bg-gradient-to-t via-remaxWhite-100 from-remaxWhite-100 grid place-content-center">
        <h4 class="-mb-28 uppercase text-center font-light text-remaxWhite-400">
          Plantilla #1
          <br/>
          <span class="normal-case font-bold text-remaxBlue-100">
            {templateName}
          </span>
        </h4>
      </footer>
    </button>
  )
}
interface Props {
  saveAsImage: HTMLElement | null
}

export const Stories = ({saveAsImage}:Props) => {
  return (
    <div onClick={e => saveAsImage(e)} class='w-72 aspect-[9/16] bg-remaxWhite-100 mx-auto'>
      <figure class="h-2/5 bg-cover bg-center flex flex-col justify-center
        bg-[url('https://images.unsplash.com/photo-1449844908441-8829872d2607')]">
        <div class='p-3'>
          <h1 class="text-3xl font-bold text-remaxWhite-100">Casa de Lujo</h1>
          <h2>En Nuevo Quilmes</h2>
        </div>
      </figure>
      {/* Separador del medio */}
      <figure class="relative">
        <div class="h-3 w-full bg-remaxRed-200"></div>
        <figure class="absolute right-3 -top-12 text-center flex flex-col items-center">
          <h3 class="border-remaxWhite-100 shadow-sm shadow-remaxRed-200/50 border-8 w-fit flex items-center aspect-square p-3 rounded-full text-xs bg-remaxRed-200 text-white">U$ 120.000</h3>
          <p class="text-center font-light text-sm text-remaxWhite-300 mt-2">Apto crédito</p><p class="tracking-wider font-bold text-remaxBlue-100 text-2xl">$250.000</p>
        </figure>
      </figure>

    </div>
  )
}
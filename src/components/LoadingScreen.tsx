import { useEffect, useState } from "preact/hooks"

export const LoadingScreen = () => {
  const [reloadBtn, setRealoadBtn] = useState(false)
  useEffect(() => {
    setTimeout(() => setRealoadBtn(true), 6000)
  }, [])

  return <div class='fixed top-0 right-0 bottom-0 left-0 bg-remaxWhite-100 grid place-items-center'>
    <p class='text-xl text-center text-remaxWhite-400'>Cargando la propiedad de tus sueños</p>
    {reloadBtn && <button
      class='px-4 py-2 font-bold bg-remaxRed-200 text-remaxWhite-100 rounded-md shadow-md shadow-remaxRed-100/50'
      onClick={() => window.location.reload()}>
      Recarga la página
    </button>}
    <img class='animate-bounce' src="/logo.png" alt="Logo de Fabiana Klisch" />
  </div>
}

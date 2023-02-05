import { useEffect, useState } from "preact/hooks"
import { Link, useLocation } from "wouter"
import { Layout } from "../components/Layout"
export const Dashboard = () => {
  const [inputPass, setInputPass] = useState(true)

  useEffect(() => {
    const PASS = 'init'
    const inputPass = prompt('Clave de seguridad')

    if(inputPass === PASS) {
      setInputPass(false)
    }
  }, [])

  if(!inputPass) {
    return (
      <Layout>
        {
          <div class="px-4 grid grid-cols-2 place-items-center gap-3 mx-auto md:max-w-xl">
            <Link
              href='/dashboard/flyers'
              class="grid grid-rows-2 place-items-center shadow w-full h-full text-remaxWhite-300 text-sm uppercase aspect-square text-center">
              <img class="opacity-25 w-10 self-end" src="/add.svg" />
              Nuevo Flyer
            </Link>
            <Link
              href='/dashboard/links'
              class="grid grid-rows-2 place-items-center shadow w-full h-full text-remaxWhite-300 text-sm uppercase aspect-square text-center">
              <img class="opacity-25 w-10 self-end" src="/add.svg" />
              Mostrar propiedad
            </Link>
          </div>
        }
      </Layout>
    )
  }
}
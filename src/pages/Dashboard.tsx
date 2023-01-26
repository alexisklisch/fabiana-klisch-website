import { useState } from "preact/hooks"
import { useLocation } from "wouter"
import { Layout } from "../components/Layout"
export const Dashboard = () => {
  const [ location, setLocation] = useLocation()


  return (
    <Layout>
      {
        <div class="px-4 grid grid-cols-2 place-content-center gap-3 mx-auto">
          <a onClick={() => setLocation('/dashboard/flyers')} class="select-none text-remaxWhite-300 text-sm place-items-center p-3 uppercase min-w-xs max-w-sm aspect-square rounded-md shadow-md grid">
            <img class="opacity-25 w-10" src="/add.svg" />
            Nuevo Flyer
          </a>
          <a onClick={() => setLocation('/dashboard/links')} class="select-none text-remaxWhite-300 text-sm place-items-center p-3 uppercase min-w-xs max-w-sm aspect-square rounded-md shadow-md grid text-center">
            <img class="opacity-25 w-10" src="/add.svg" />
            Mostrar propiedad
          </a>
        </div>
      }
    </Layout>
  )
}
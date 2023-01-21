import { useState } from "preact/hooks"
import { Suspense } from "preact/compat"
import { Layout } from "../components/Layout"
import { FlyerSelection } from "../components/modals/FlyerSelection"
import { Portal } from "../components/Portal"

export const CreateFlyer = () => {

  const [createFlyer, setCreateFlyer] = useState(false)

  return (
    <Layout>
      {
        createFlyer
          ? <Suspense fallback={<p>Cargando la página</p>}>
            <FlyerSelection />
          </Suspense>
          : <div class="container grid place-content-center mx-auto">
            <button onClick={() => setCreateFlyer(!createFlyer)} class="select-none  text-remaxWhite-300 text-sm place-items-center p-3 uppercase min-w-xs max-w-sm aspect-square rounded-md shadow-md grid">
              <img class="opacity-25 w-10" src="/add.svg" />
              Nuevo Flyer
            </button>
          </div>
      }
    </Layout>
  )
}
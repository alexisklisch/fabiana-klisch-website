import { useState } from "preact/hooks"
import { Suspense } from "preact/compat"
import { Layout } from "../components/Layout"
import { FlyerSelection } from "../components/modals/FlyerSelection"
import { Portal } from "../components/Portal"

const CreateFlyer = () => {

  const [createFlyer, setCreateFlyer] = useState(false)

  return (
    <Layout>
      {
        createFlyer
          ? <Suspense fallback={<p>Cargando la página</p>}>
            <FlyerSelection />
          </Suspense>
          : <div class="container grid place-content-center">
            <button onClick={() => setCreateFlyer(!createFlyer)} class="select-none focus:outline-remaxBlue-100 focus:outline-2 text-remaxWhite-300 text-sm place-items-center p-3 uppercase min-w-xs max-w-sm aspect-square rounded-md shadow-md shadow-remaxRed-100/50 grid">
              <img class="opacity-50" src="/logo.png" />
              Nuevo Flyer
            </button>
          </div>
      }
    </Layout>
  )
}

export default CreateFlyer
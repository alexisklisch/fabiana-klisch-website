import { GranCasa } from "../templates/GranCasa"
import { Portal } from "../Portal"

export const routes: {[key:string]: any} = {
  "grancasa": <Portal><GranCasa/></Portal>,
  "pedrito": <h3>Soy pedrito</h3>
}
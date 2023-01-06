import { Switch, Route } from "wouter"
import {CreateFlyer} from "./pages/CreateFlyer"
import { Home } from "./pages/Home"

export const App = () => {
  return (
    <div class="bg-remaxWhite-100 min-h-screen overflow-x-hidden">
      <Switch>
        <Route path="/" component={Home}/>
        <Route path="/flyers" component={CreateFlyer}/>
      </Switch>
    </div>
  )
}
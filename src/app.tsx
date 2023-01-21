import { Switch, Route } from "wouter"
import {CreateFlyer} from "./pages/CreateFlyer"
import { Home } from "./pages/Home"
import { Test } from "./pages/Test"

export const App = () => {
  return (
    <div class="bg-remaxWhite-100 min-h-screen overflow-x-hidden">
      <Switch>
        <Route path="/" component={Home}/>
        <Route path="/flyers" component={CreateFlyer}/>
        <Route path="/test" component={Test}/>
      </Switch>
    </div>
  )
}
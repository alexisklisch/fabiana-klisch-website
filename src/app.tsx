import { Switch, Route } from "wouter"
import { FlyerSelection } from "./components/FlyerSelection"
import { LinksCreator } from "./components/LinksCreator"
import {Dashboard} from "./pages/Dashboard"
import { Home } from "./pages/Home"
import { Props } from "./pages/Props"

export const App = () => {
  return (
    <div class="bg-remaxWhite-100 min-h-screen overflow-x-hidden">
      <Switch>
        <Route path="/" component={Home}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/dashboard/flyers" component={FlyerSelection}/>
        <Route path="/dashboard/links" component={LinksCreator}/>
        <Route path="/props" component={Props}/>
      </Switch>
    </div>
  )
}
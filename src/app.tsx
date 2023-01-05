import { Switch, Route } from "wouter"
import { Home } from "./pages/Home"

export const App = () => {
  return (
    <div class="bg-remaxWhite-100 min-h-screen">
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>
    </div>
  )
}
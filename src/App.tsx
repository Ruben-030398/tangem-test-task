import { Card, Header } from './modules'
import MobileHeader from './modules/mobile-header/ui/mobile-header'

function App() {

  return (
    <div className="app">
      <MobileHeader />
      <Header />
      <Card />
      {/* <h1>Vite + React</h1>
      <Button color={ButtonVariant.Light}>Shop now</Button> */}
    </div>
  )
}

export default App

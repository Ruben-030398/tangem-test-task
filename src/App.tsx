import { Card, Header } from './modules'
import MobileHeader from './modules/mobile-header/ui/mobile-header'

function App() {

  return (
    <div className="app">
      <MobileHeader />
      <Header />
      <Card />
    </div>
  )
}

export default App

import { useRoutes } from 'react-router-dom'
import { routes } from './Routes'

function App() {
  const elements = useRoutes(routes)
  return elements;
}

export default App

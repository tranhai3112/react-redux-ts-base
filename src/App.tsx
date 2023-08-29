import {useRoutes} from 'react-router-dom'
import { adminRouters } from './pages/routers/admin.tsx'
function App() {
  const adminRoutes = useRoutes(adminRouters)
  return (
    {adminRoutes}
  )
}

export default App

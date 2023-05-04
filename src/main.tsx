import ReactDOM from 'react-dom/client'
import './index.css'
import { store } from './app/store'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { Provider } from 'react-redux'

ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )

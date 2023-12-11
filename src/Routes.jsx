import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import { HomePage } from './pages/HomePage'

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<HomePage />}></Route>
    )
  )

export function Routes() {
    return (
        <RouterProvider router={router}/>
    )
}
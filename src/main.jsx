/*
 * https://github.com/Prakhar-002
 * @copyright Prakhar-002
*/


/*
  * Node modules
*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'


/*
  * Components
*/
import SnackbarProvider from './contexts/SnackbarContext';


/*
  * Custom modules
*/
import router from './routers/routes';



//? Css Link
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SnackbarProvider>
      <RouterProvider router={router} />
    </SnackbarProvider>
  </StrictMode>,
)

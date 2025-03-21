/*
 * https://github.com/Prakhar-002
 * @copyright Prakhar-002
*/


/*
? Node modules
*/

import { createBrowserRouter } from "react-router-dom";

/*
? Components
*/
import App from "../App";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ResetLink from "../pages/ResetLink";
import ResetPassword from "../pages/Resetpassword";
import Conversation from "../pages/Conversation";
import ConversationError from "../pages/ConversationError";
import RootError from "../pages/RootError";

/*
? Loaders
*/
import registerLoader from "./loaders/registerLoader";
import loginLoader from "./loaders/loginLoader";
import resetLinkLoader from "./loaders/resetLinkLoader";
import resetPasswordLoader from "./loaders/resetPasswordLoader";
import appLoader from "./loaders/appLoader";
import conversationLoader from "./loaders/conversationLoader";


/*
? Actions
*/

import registerAction from "./actions/registerAction";
import loginAction from "./actions/loginAction";
import resetLinkAction from "./actions/resetLinkAction";
import resetpasswordAction from "./actions/resetPasswordAction";
import appAction from "./actions/appAction";
import conversationAction from "./actions/conversationAction";


/*
? Router
*/

const router = createBrowserRouter([
      {
            path: '/',
            element: <App />,
            loader: appLoader,
            action: appAction,
            errorElement: <RootError />,
            children: [
                  {
                        path: '/:conversationId',
                        element: <Conversation />,
                        loader: conversationLoader,
                        action: conversationAction,
                        errorElement: <ConversationError />
                  }
            ]
      },
      {
            path: '/register',
            element: <Register />,
            loader: registerLoader,
            action: registerAction,
      },
      {
            path: '/login',
            element: <Login />,
            loader: loginLoader,
            action: loginAction
      },
      {
            path: '/reset-link',
            element: <ResetLink />,
            loader: resetLinkLoader,
            action: resetLinkAction
      },
      {
            path: '/reset-password',
            element: <ResetPassword />,
            loader: resetPasswordLoader,
            action: resetpasswordAction
      },
      {
            path: '*', // Catch-all for undefined routes
            element: <RootError /> // A custom 404 page
      }
]);

export default router;
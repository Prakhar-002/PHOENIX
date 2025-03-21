/*
 * https://github.com/Prakhar-002
 * @copyright Prakhar-002
*/

/*
? Node modules
*/
import { useRouteError, Link, useNavigation } from "react-router-dom"


/*
? Components
*/
import { LinearProgress } from "../components/Progress"


const RootError = () => {
      // Retrieve the error object associated with the current route, if any.
      const error = useRouteError();

      const errorStatus = error?.status || 404

      // Access the navigation state.
      const navigation = useNavigation();

      return (
            <>
                  <div className="h-dvh grid grid-cols-1 justify-items-center content-center">
                        <p className="text-displayLarge">
                              {errorStatus}
                        </p>

                        <p className="text-light-onSurfaceVariant
                        dark:text-dark-onSurfaceVariant mt-1 mb-4">
                              We coundn't find the page you're looking for.
                        </p>

                        <Link
                              className="btn filled primary"
                              to='/'
                        >
                              Back To Home

                              <div className="state-layer"></div>
                        </Link>
                  </div>

                  {navigation.state === 'loading' && (
                        <LinearProgress classes="fixed top-0 left-0 right-0" />
                  )}
            </>
      )
}

export default RootError
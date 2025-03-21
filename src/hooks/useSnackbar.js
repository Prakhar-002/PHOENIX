/*
 * https://github.com/Prakhar-002
 * @copyright Prakhar-002
*/


/*
  * Node modules
*/
import { useContext } from "react";

/*
  * Context
*/

import { SnackbarContext } from "../contexts/SnackbarContext";

export const useSnackbar = () => useContext(SnackbarContext);
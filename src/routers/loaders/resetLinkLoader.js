/*
 * https://github.com/Prakhar-002
 * @copyright Prakhar-002
*/


/*
* Node modules
*/

import { redirect } from "react-router-dom";


/*
* Custom modules
*/

import { account } from "../../lib/appWrite";

const resetLinkLoader = async () => {
      try {
            // Attempt to retrieve the user's account information
            await account.get();
      } catch (error) {
            console.log(`Error getting user session: ${error.message}`);
            return null;
      }

      // If account retrieval is successful, redirect the user to the home page('/')
      return redirect('/');
}

export default resetLinkLoader;
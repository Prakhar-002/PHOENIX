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

const resetPasswordLoader = async ({ request }) => {

      const url = new URL(request.url);

      try {
            // Attempt to retrieve the user's account information
            await account.get();
      } catch (error) {
            console.log(`Error getting user session: ${error.message}`);
      }

      if (!url.searchParams.get('userId') && !url.searchParams.get('secret')) {
            return redirect('/reset-link')
      }

      return null;
}

export default resetPasswordLoader;
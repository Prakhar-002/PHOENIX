/*
 * https://github.com/Prakhar-002
 * @copyright Prakhar-002
*/


/*
* Custom modules
*/
import { account } from "../lib/appWrite";


/*
* logs out the current user by deleting their session and navigates to the login page.

* @param { Function } navigate The navigation function to redirect the user after logout.

? @returns { Promise < void>} — Returns a promise that resolves once the session is deleted and navigation occurs.

! @throws { Error } If there is an issue deleting the user session, the error wilt be logged to the console.
*/
const logout = async (navigate) => {
      try {
            await account.deleteSession('current');
      } catch (error) {
            console.log(`Error deleting use session: ${error.message}`);
      }

      return navigate('/login');
}

export default logout;
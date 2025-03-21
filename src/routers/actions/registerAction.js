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
import generateID from "../../utils/generateID";


/*
  * Handles user registration.
*/
const registerAction = async ({ request }) => {
  // Retrieve the form data from the incoming request
  const formData = await request.formData();

  try {
        // Creates a new user account using the provided email, password and name
        await account.create(
          generateID(), // Generates a unique ID for the user
          formData.get('email'),    // Retrieve email form the form data
          formData.get('password'), // Retrieve password form the form data
          formData.get('name'),     // Retrieve name form the form data
        )
  } catch (error) {
        // Returns an error object if account creation fails
        return {
          message: error.message // Error message from the cought error
        }
  }

  // After successfully account create, login the user and redirect to home page
  try {
    // Creates a session for the new user with the provided email and password
    await account.createEmailPasswordSession(
      formData.get('email'),
      formData.get('password')
    )

  } catch (error) {
    // Logs any error encountered during session creation and redirect to login page
    console.log(`Error creating email session: ${error.message}`);
    console.log(error);

    return redirect('/login');
  }

  // Redirects the user to the home page upon successful registration and login
  return redirect('/');
}

export default registerAction;
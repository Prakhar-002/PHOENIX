/*
 * https://github.com/Prakhar-002
 * @copyright Prakhar-002
*/


/*
? Node modules
*/
import { redirect } from "react-router-dom";



/*
? Custom modules
*/
import { account, databases } from "../../lib/appWrite";

const conversationLoader = async ({ params }) => {
      const { conversationId } = params;
      const data = {}

      try {
            // Attempt to retrieve the user's account information.
            data.user = await account.get();
      } catch (error) {
            console.log(`Error getting user account: ${error.message}`);

            // If there's an error getting the user, log it and redirect to the login page.
            return redirect('/login');
      }

      try {
            // Attempt to fetch the conversation document from the appwrite database.
            data.conversation = await databases.getDocument(
                  import.meta.env.VITE_APPWRITE_DATABASE_ID,
                  'conversations',
                  conversationId
            )
      } catch (error) {
            // If there 's an error fetching the conversation, log it and re—throw the error.
            console.log(`Error getting conversation: ${error.message}`);

            throw error;// Re—throw the error so it can be handled by the Error Boundary or a suitable component.
      }

      // Return the data object containing user and conversation information.
      return data;
}

export default conversationLoader;
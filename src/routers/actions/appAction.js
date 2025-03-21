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
import { getConversationTitle, getAiResponse } from "../../api/googleAi";
import generateID from "../../utils/generateID";


/*
? Handles the user prompt action, creating a conversation
and storing both the user's prompt and the A1—generated response.

* @async
      * @function userPromptAction

      * @param { FormData } formData — The form data containing the user's prompt.

      * @returns { Promise < void>} Redirects the user to the newly created conversation page.
*/
const userPromptAction = async (formData) => {
      const userPrompt = formData.get('user_prompt');

      // Get current user info
      const user = await account.get();

      // Get a conversation title based on user prompt
      const conversationTitle = await getConversationTitle(userPrompt);

      let conversation = null;

      try {
            // Create a new conversation document in the Appwrite database
            conversation = await databases.createDocument(
                  import.meta.env.VITE_APPWRITE_DATABASE_ID,
                  'conversations',
                  generateID(),
                  {
                        title: conversationTitle,
                        user_id: user.$id,
                  },
            );
      } catch (error) {
            console.log(`Error creating conversation: ${error.message}`);
      }


      // Generate an AI response based on the user's prompt
      const aiResponse = await getAiResponse(userPrompt);

      try {
            // Create a new chat document in the 'chats' collection
            await databases.createDocument(
                  import.meta.env.VITE_APPWRITE_DATABASE_ID,
                  'chats',
                  generateID(),
                  {
                        user_prompt: userPrompt,
                        ai_response: aiResponse,
                        conversations: conversation.$id,
                  },
            );
      } catch (error) {
            console.log(`Error creating chat: ${error.message}`);
      }


      return redirect(`/${conversation.$id}`);
}

/*
? Deletes a conversation document from the database and returns the conversation title.

* @async
      * @function conversationAction

- @param { FormData } formData — The form data containing the conversation details.

- @returns { Promise < Object >} Returns qn object containing the conversation title after deletion.

- @throws Witt throw an error if the deletion process fails.
*/

const conversationAction = async (formData) => {
      const conversationId = formData.get('conversation_id');
      const conversationTitle = formData.get('conversation_title');

      try {
            await databases.deleteDocument(
                  import.meta.env.VITE_APPWRITE_DATABASE_ID,
                  'conversations',
                  conversationId
            )

            return { conversationTitle }
      } catch (error) {
            console.log(`Error in deleting conversation: ${error.message}`);
      }

}


/*
? Handles incoming requests based on the form data.

* @async
      * @function appAction

      * @param { Object } request — The incoming request object containing the form data.

      * @returns { Promise <*>} — Returns the result of the action based on the 'request_type'
            (e.g. , 'userPromptAction' or conversationAction ').
*/

const appAction = async ({ request }) => {
      const formData = await request.formData();
      const requestType = formData.get('request_type');

      if (requestType === 'user_prompt') {
            return await userPromptAction(formData);
      }

      if (requestType === 'delete_conversation') {
            return await conversationAction(formData);
      }
}

export default appAction
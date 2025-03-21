/*
 * https://github.com/Prakhar-002
 * @copyright Prakhar-002
*/


/*
? Node modules
*/
import { useEffect, useState } from "react";
import { useNavigation } from "react-router-dom";

/*
* Custom hook to manage the preLoader value for the prompt.

* @returns { { promptPreLoaderVaLue: string } } An object
containing the current prompt preloader value.
*/

const userPromptPreloader = () => {
      // Get navigation state
      const navigation = useNavigation();

      // Initialize preLoader value
      const [promptPreloaderValue, setPromptPreloaderValue] = useState('');

      // Use useEffect to update preloader value based on navigation.formData
      useEffect(() => {

            // If form data exists, get the user prompt and update the preloader value .
            if (navigation.formData) {
                  setPromptPreloaderValue(navigation.formData.get('user_prompt'));
            } else {
                  // If no form data found, reset preloader value to empty string .
                  setPromptPreloaderValue('');
            }

      }, [navigation]) // Run effect only when navigation state changes

      return { promptPreloaderValue };
};

export { userPromptPreloader }
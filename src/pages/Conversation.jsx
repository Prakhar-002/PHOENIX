/*
 * https://github.com/Prakhar-002
 * @copyright Prakhar-002
*/


/*
? Node modules
*/
import { motion } from "framer-motion"
import { useLoaderData, useLocation } from "react-router-dom"


/*
? Custom hooks
*/
import { userPromptPreloader } from "../hooks/userPromptPreloader"



/*
? Components
*/
import PageTitle from "../components/PageTitle"
import UserPrompt from "../components/UserPrompt"
import AiResponse from "../components/AiResponse"
import PromptPreloader from "../components/PromptPreloader"



const Conversation = () => {
      /*
      * Extract the conversation data(title and chats) from the loader data,

      * handling potential undefined values using optional chaining.
      */

      const { conversation: { title, chats } } = useLoaderData() || {};

      // Retrieve the prompt preloader value using the custom hook.
      const { promptPreloaderValue } = userPromptPreloader();

      // Obtain the current URL location information using the useLocation hook.
      const location = useLocation();


      return (
            <>
                  {/* Meta title */}
                  <PageTitle title={`${title} | Phoenix`} />

                  <motion.div className="max-w-[700px] mx-auto !will-change-auto"
                        initial={ !location.state?._isRedirect && { opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2, delay: 0.05, ease: 'easeOut' }}
                  >
                        {chats.map((chat) => (
                              <div key={chat.$id}>
                                    {/* UserPrompt */}
                                    <UserPrompt text={chat.user_prompt} />

                                    {/* Ai response */}
                                    <AiResponse aiResponse={chat.ai_response} />
                              </div>
                        ))}
                  </motion.div>

                  {promptPreloaderValue && (
                        <PromptPreloader promptValue={promptPreloaderValue} />
                  )}

            </>
      )
}

export default Conversation
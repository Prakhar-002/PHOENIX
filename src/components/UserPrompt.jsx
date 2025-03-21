/*
 * https://github.com/Prakhar-002
 * @copyright Prakhar-002
*/


/*
? Node modules
*/
import PropTypes from "prop-types"
import { useLoaderData } from "react-router-dom"
import { useRef, useEffect, useState } from "react"

/*
? Custom modules
*/
import { useToggle } from "../hooks/useToggle"


/*
? Components
*/
import Avatar from "./Avatar"
import { IconBtn } from "./Button"



const UserPrompt = ({ text }) => {
      // Retrieve the user data from the loader using the useLoaderData hook.
      const { user } = useLoaderData();

      // Use the use Toggle hook to manage the expanded state of the user prompt text.
      const [isExtended, toggleExtend] = useToggle();

      // Create a ref to access the text box element in the DOM.
      const textBoxRef = useRef();

      // Initialize the hasMoreContent state, indicating
      // whether the content exceeds the visible height of the text box.
      const [hasMoreContent, setMoreContent] = useState(false);

      /*
      ? Use useEffect to update the hasMoreContent state whenever the text box ref changes.

      * This ensures that the state is updated correctly if the text box content changes.
      */
      useEffect(() => {
            setMoreContent(
                  textBoxRef.current.scrollHeight > textBoxRef.current.clientHeight
            )
      }, [textBoxRef])

      return (
            <div className="grid grid-cols-1 items-start gap-1 
                  py-4 md:grid-cols-[max-content,minmax(0,1fr),max-content] md:gap-5">
                  <Avatar name={user?.name} />

                  <p ref={textBoxRef} className={`text-bodyLarge pt-1 whitespace-pre-wrap ${!isExtended ? 'line-clamp-4' : ''}`}>
                        {text}
                  </p>

                  {hasMoreContent && (
                        <IconBtn icon={isExtended ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                              onClick={toggleExtend}
                              title={isExtended ? 'Collapse text' : 'Expand text'}
                        />
                  )}
            </div>
      )
}

UserPrompt.propTypes = {
      text: PropTypes.string
}


export default UserPrompt
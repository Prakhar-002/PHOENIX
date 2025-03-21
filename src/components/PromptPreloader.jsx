/*
 * https://github.com/Prakhar-002
 * @copyright Prakhar-002
*/


/*
? Node modules
*/
import PropTypes from "prop-types";



/*
? Custom modules
*/
import UserPrompt from "./UserPrompt";
import AiResponse from "./AiResponse";
import Skeleton from "./Skeleton";


const PromptPreloader = ({ promptValue }) => {
      return (
            <div className="max-w-[700px] mx-auto">
                  <UserPrompt text={promptValue} />
                  <AiResponse>
                        <Skeleton />
                  </AiResponse>
            </div>
      )
}

PromptPreloader.propTypes = {
      promptValue: PropTypes.string
}

export default PromptPreloader
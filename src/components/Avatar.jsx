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
import { avatars } from "../lib/appWrite";



const Avatar = ({ name }) => {
      return (
            <figure className="avatar">
                  <img src={avatars.getInitials(name, 48, 48)}
                        alt={name}
                        width={48}
                        height={48}
                        className="" />
            </figure>
      )
}

Avatar.propTypes = {
      name: PropTypes.string
}

export default Avatar
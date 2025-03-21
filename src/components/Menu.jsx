/*
 * https://github.com/Prakhar-002
 * @copyright Prakhar-002
*/

/*
? Node modules
*/
import PropTypes from "prop-types";


const Menu = ({ classes = '', children }) => {
      return (
            <div className={`menu ${classes}`}>
                  {children}
            </div>
      )
}

Menu.propTypes = {
      classes: PropTypes.string,
      children: PropTypes.any
}

export default Menu
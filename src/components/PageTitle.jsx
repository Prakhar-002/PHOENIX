/*
 * https://github.com/Prakhar-002
 * @copyright Prakhar-002
*/


/*
      * Node modules 
*/

import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

const PageTitle = ({ title }) => {
      return (
            <Helmet>
                  <title>{title}</title>
            </Helmet>
      )
}

PageTitle.prototypes = {
      title: PropTypes.string
}

export default PageTitle
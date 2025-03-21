/*
 * https://github.com/Prakhar-002
 * @copyright Prakhar-002
*/

/*
      * Node modules 
*/

import PropTypes from "prop-types";

const TextField = ({
      classes = '',
      helperText,
      label,
      name,
      placeholder = ' ',
      fieldClasses,
      ...rest
}) => {
      return (
            <div className={`text-field-wrapper ${classes}`}>
                  <label 
                        htmlFor={name}
                        className="label-text"
                  >
                        {label}
                  </label>

                  <input className={`text-field ${fieldClasses}`}
                        id={name}
                        name={name}
                        placeholder={placeholder}
                        {...rest}
                  />

                  {helperText && <p className="helper-text">{helperText}</p>}
            </div>
      )
}

TextField.prototypes = {
      classes: PropTypes.string,
      helperText: PropTypes.string,
      label: PropTypes.string,
      name: PropTypes.string,
      placeholder: PropTypes.string,
      fieldClasses: PropTypes.string
}

export default TextField
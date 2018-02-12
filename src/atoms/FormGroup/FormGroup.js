import React from 'react'
import PropTypes from 'prop-types'
import './FormGroup.css'

const FormGroup = ({
  value,
  label,
  type,
  disabled,
  ...props
}) => {
  const fieldName = `field-${label}`

  return (
  <div className="FormGroup row">
    <label htmlFor={fieldName} className="col-sm-3">{label}</label>
    <input
      className="col-sm-6"
      id={fieldName}
      name={fieldName}
      type={type}
      value={value}
      disabled={disabled}
      {...props}
    />
  </div>
  )
}

FormGroup.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string
  ]),
  label: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.string
}

export default FormGroup

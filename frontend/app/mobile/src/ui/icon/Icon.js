// Imports
import React from 'react'
import PropTypes from 'prop-types'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Zocial from 'react-native-vector-icons/Zocial'

// Component
const Icon = (props) => {
  return(
    props.pack === 'social' ? <Zocial {...props} /> : <MaterialIcons {...props} />
  )
}

Icon.propTypes = {
  pack: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
}

Icon.defaultProps = {
  pack: 'material'
}

export default Icon

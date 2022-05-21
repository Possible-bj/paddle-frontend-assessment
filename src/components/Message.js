import React from 'react'
import { Alert } from 'react-bootstrap'

const Message = ({ variant, children }) => {
  return (
    <Alert className='br-6' variant={variant}>
      {children}
    </Alert>
  )
}

Message.defaultProps = {
  variant: 'danger',
}
export default Message

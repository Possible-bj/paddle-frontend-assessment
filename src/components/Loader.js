import React from 'react'
import { Spinner } from 'react-bootstrap'
const Loader = ({
  loaderSize,
  loadAs,
  ariaHidden,
  loaderWidth,
  loaderHeight,
}) => {
  return (
    <Spinner
      as={loadAs}
      animation='border'
      role='status'
      size={loaderSize}
      aria-hidden={ariaHidden}
      style={{
        width: loaderWidth,
        height: loaderHeight,
        margin: 'auto',
        display: 'block',
        color: '#fff',
      }}>
      <span className='sr-only'> Loading... </span>
    </Spinner>
  )
}

export default Loader

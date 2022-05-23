import React from 'react'

const Bubble = ({
  variant,
  width,
  height,
  right,
  left,
  top,
  bottom,
  stack,
  borderRadius,
  blur,
}) => {
  const bubbleStyle = {
    width,
    height,
    left,
    right,
    top,
    bottom,
    borderRadius: borderRadius,
    background: `linear-gradient(${variant}, #0e0127)`,
    zIndex: stack,
    filter: `blur(${blur}px)`,
  }
  return <div className='abs margin-auto' style={{ ...bubbleStyle }}></div>
}
Bubble.defaultProps = {
  borderRadius: '50%',
  variant: '#fff',
  width: '150px',
  height: '150px',
  right: '0',
  top: '0',
  left: '0',
  bottom: '0',
}
export default Bubble

import React from 'react'

const Scrolltop = ({ children, location }) => {
  React.useEffect(() => window.scrollTo(0, 0), [location.pathname])
  return children
}

export default Scrolltop

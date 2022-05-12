import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton = props => (
  <ContentLoader
    speed={2}
    width={'100%'}
    height={'100%'}
    viewBox="0 0 800 320"
    backgroundColor="#464548"
    foregroundColor="#333234"
    {...props}
  >
    <rect x="131" y="6" rx="3" ry="3" width="332" height="190" />
    <rect x="27" y="6" rx="3" ry="3" width="100" height="190" />
  </ContentLoader>
)

export default Skeleton

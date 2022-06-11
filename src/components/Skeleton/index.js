import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton = props => (
  <ContentLoader
    speed={2}
    width={'100%'}
    height={'100%'}
    viewBox="0 0 1080 463"
    backgroundColor="#464548"
    foregroundColor="#333234"
    {...props}
  >
    <rect x="0" y="50" rx="3" ry="3" width="70%" height="70%" />
    <rect x="0" y="6" rx="3" ry="3" width="50%" height="30" />
  </ContentLoader>
)

export default Skeleton

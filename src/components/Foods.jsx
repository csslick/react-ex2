import React from 'react'

export default function Foods({children}) {
    // console.log(props)
  return (
    <ul>
        {/* props안에 있는 children값 */}
        {children}
    </ul>
  )
}

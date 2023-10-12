import React, {useState} from 'react'


function Arrows({arrowNum, animate}) {

  return (
    <svg className={`${arrowNum} ${animate ? "animated-arrows" : ""}`} width="45" height="77" viewBox="0 0 45 77" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M43.8065 41.0624L10.8059 74.9753C9.21437 76.6109 6.63402 76.6109 5.04261 74.9753L1.19364 71.0199C-0.395218 69.3871 -0.398274 66.7408 1.18685 65.1042L27.3403 38.1009L1.18685 11.0978C-0.398274 9.4612 -0.395218 6.8149 1.19364 5.1821L5.04261 1.2267C6.63419 -0.408899 9.21454 -0.408899 10.8059 1.2267L43.8063 35.1397C45.3979 36.7751 45.3979 39.4268 43.8065 41.0624Z" fill="black"/>
    </svg>
  )
}

export default Arrows
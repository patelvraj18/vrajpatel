/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Html, useProgress } from '@react-three/drei'


const Loader = () => {
  const { progress } = useProgress()
  return (
    <Html>
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 20,
          color: '#f1f1f1',
          fontWeight: 800,
          marginTop: 60
        }}
      >{progress.toFixed(2)}%</p>
    </Html>
  )
}

export default Loader
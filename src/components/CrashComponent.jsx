import React, { useEffect, useState } from 'react'
const CrashComponent = props => {
  return (
    <span>{props.Non_existent.propValue}</span>
  )
}

export default CrashComponent;



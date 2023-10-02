import React from 'react'
import { Link } from 'react-router-dom'

const ActionButton = ({id, reaction}) => {
  return (
    <div><Link to={`../viewpost/`+id} className='btn btn-success'>Edit</Link></div>
  )
}

export default ActionButton
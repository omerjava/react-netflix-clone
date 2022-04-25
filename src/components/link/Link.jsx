import React from 'react'
import './Link.css';


function Link({linkName, url}) {
  return (
    <div className='link'>
        <li>
            <a href={url}>{linkName}</a>
        </li>
    </div>
  )
}

export default Link
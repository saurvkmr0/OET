import React from 'react'

const Card = (prop) => {
  return (
    <div>
        <div class="card rounded-md drop-shadow-lg">
        <div class="card-img">
            <img src={prop.image} className='rounded-md'/>
        </div>
        <div class="card-info">
            <p class="text-title">{prop.title}</p>
            <p class="text-body">{prop.description}</p>
        </div>
        <div class="card-footer">
        <span class="text-title">{prop.price}</span>
            <button className='button-36'>buy</button>
        </div>
        </div>
    </div>
  )
}

export default Card
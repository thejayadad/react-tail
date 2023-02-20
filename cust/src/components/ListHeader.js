import React from 'react'

const ListHeader = () => {
    const signOut = () => {
        console.log("signout")
    }
  return (
    <header>
        <h2>Notes Tracker</h2>
        <div className='header-action'>
            <button className='create'>New Note</button>
            <button className='signout'>Sign Out</button>

        </div>
    </header>
  )
}

export default ListHeader
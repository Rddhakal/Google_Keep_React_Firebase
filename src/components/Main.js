import React from 'react'
import '../styles/Main.css'
import SideBar from './SideBar'
import NotesContainer from './NotesContainer'

const Main = () => {
  return (
    <>
      <main>
        <SideBar />
        <NotesContainer />
      </main>
    </>
  )
}

export default Main

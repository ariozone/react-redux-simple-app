import React from "react"
import SongList from "./songList"
import SongDetail from "./songDetails"

const App = () => {
  return (
    <div className='ui container grid'>
      <div className='ui row'>
        <div className='ui column eight wide'>
          <SongList />
        </div>
        <div className='ui column eight wide center aligned '>
          <SongDetail />
        </div>
      </div>
    </div>
  )
}
export default App

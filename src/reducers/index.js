import { combineReducers } from "redux"

const songsReducer = () => {
  return [
    { title: "Thriller", artist: "Michael Jackson", duration: "5:12" },
    { title: "Like a Prayer", artist: "Madonna", duration: "5:42" },
    { title: "When Doves Cry", artist: "Prince", duration: "5:52" },
    {
      title: "I Wanna Dance with Somebody",
      artist: "Whitney Houston",
      duration: "4:51"
    }
  ]
}

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload
  }
  return selectedSong
}
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})

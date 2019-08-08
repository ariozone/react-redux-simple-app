import React, { Component } from "react"
import { connect } from "react-redux"

class SongList extends Component {
  render() {
    return (
      <div className='ui divided list'>
        <h1>Songs List</h1>

        {this.props.songs.map(song => (
          <div className='item' key={song.title}>
            <div className='right floated content'>
              <button className='ui button '> Select</button>
            </div>
            <div className='content'>{song.title}</div>
          </div>
        ))}
      </div>
    )
  }
}
const mapStateToProps = state => {
  return { songs: state.songs }
}
export default connect(mapStateToProps)(SongList)

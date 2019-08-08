import React, { Component } from "react"
import { connect } from "react-redux"

class SongList extends Component {
  render() {
    console.log(this.props)
    return <h1>SongList</h1>
  }
}
const mapStateToProps = state => {
  return { songs: state.songs }
}
export default connect(mapStateToProps)(SongList)

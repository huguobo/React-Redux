import React, { Component, PropTypes } from 'react'

class Header extends Component {
  static contextTypes={
  	store:PropTypes.object
  }
  constructor () {
    super()
    this.state = { themeColor: '' }
    this._updateThemeColor=this._updateThemeColor.bind(this)
  }
  componentWillMount () {
    const { store } = this.context
    this._updateThemeColor()
    store.subscribe(() => this._updateThemeColor())
  }

  _updateThemeColor () {
    const { store } = this.context
    const state = store.getState()
    this.setState({ themeColor: state.themeColor })
  }
  render () {
    return (
       <h1 style={{ color: this.state.themeColor }}>React-Redux</h1>
    )
  }
}

export default Header
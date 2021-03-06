// IMPORT DEPENDENCIES
import React, {Component} from 'react'
import css from './Title.css'
import {observer} from 'mobx-react'

@observer
class Title extends Component {
  render = () => {
    return (
      <div className={css.titleWrapper}></div>
    )
  }
}

export default Title

import React from 'react'
import styles from './Card.css'

export default class Card extends React.Component {
    render() {
        return <div className={`${this.props.className} ${styles.card}`}>{this.props.children}</div>
    }
}

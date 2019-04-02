import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles/index'

const styles = {
  item: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '3px',
    minHeight: '250px',
    padding: '15px',
    justifyContent: 'space-between'
  },
  productName: {
    color: '#666',
    fontWeight: '400',
    margin: '0 0 8px 0'
  },
  productPrice: {
    fontSize: '22px',
    color: '#666',
    fontWeight: '700',
    margin: '0 0 16px 0'
  }
}

class Item extends React.Component {
  state = {
    actualCount: 0
  }

  handleClick = () => {
    let { actualCount } = this.state
    const newValue = actualCount + 1

    this.setState({ actualCount: newValue })
  }

  render () {
    const { product, classes } = this.props

    return (
      <div className={ classes.item }>
        <img src={ product.image }
             alt={ product.name }
             width="200"
             height="200"
        />
        <h4 className={ classes.productName }> { product.name } </h4>
        <span className={ classes.productPrice }> { product.price } lei</span>

       //TODO add counter component
       {/* <Counter onHandleClick={this.handleClick} count={ this.state.actualCount } />*/}
      </div>
    )
  }
}

Item.propTypes = {
  classes: PropTypes.object.isRequired,
  product: PropTypes.object
}

export default withStyles(styles)(Item)

import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles/index'

import { products } from '../../mock/products'
import Item from '../item/item'

const styles = {
  item: {

  }
}

class List extends React.Component {
  render () {
    const { classes } = this.props

    return (
      <Grid container justify="flex-start" spacing={ 32 }>
        {
          products.map(product => (
            <Grid key={product.id} item xs={ 3 } className={ classes.item } >
              <Item product={product}/>
            </Grid>
          ))
        }
      </Grid>
    )
  }
}

List.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(List)

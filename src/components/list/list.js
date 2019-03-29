import React from 'react'
import Grid from '@material-ui/core/Grid'
import { products } from '../../mock/products'
import Item from '../item/item'

class List extends React.Component {
    render(){
        return  <Grid container  justify="center" >
                    {products.map(product => (
                        <Grid key={product.id} item xs={4}>
                            <Item product={product}/>
                        </Grid>
                    ))}
                </Grid>
    }
}

export default List
import React from 'react'

class Item extends React.Component {
    state = {
        actualCount: 0
    }

    handleClick = () => {
        let { actualCount } = this.state
        const newValue = actualCount+1

        this.setState({ actualCount: newValue })
    }

    render(){
        const { product } = this.props
        return (<div>
            <span> { product.name } </span>
            <img src={ product.imgSrc } alt={""} />
            <span> { product.price } lei</span>

           //TODO add counter component
           {/* <Counter onHandleClick={this.handleClick} count={ this.state.actualCount } />*/}
        </div>)
    }
}

export default Item
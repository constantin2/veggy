import React from 'react'
import List from "./components/list/list";



class App extends React.Component{
    render(){
        return (<div style={ { maxWidth: '940px', margin: 'auto' } }>
            <List />
        </div>)
    }
}

export default App
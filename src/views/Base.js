import { Component } from 'react'

export default class Base extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            header: {
                isLoading: false
            }
        }
    }
    

    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({
        //         header: {
        //             isLoading: false,
        //         }
        //     })
        // }, 10000)
    }
}

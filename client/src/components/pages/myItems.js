import React, { Component } from 'react';
import ItemCard from './itemCard';
import { fetchItem } from '../../store/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class MyItems extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                description: '',
            }
        ]
            
        }
        console.log('MY ITEMS: ',props.stuff)
    }
    componentDidMount(){
        this.props.fetchItem();
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <ItemCard data={this.props.data}/>
            </div>
        )
    }
}


const mapStateToProps = state =>   ({
    data: state.itemReducer.data.data,
    fetching: state.itemReducer.fetching,
    error: state.itemReducer.error
   })
export default connect(mapStateToProps, {fetchItem}) (MyItems)
import React, { Component } from 'react';
import ItemCard from './itemCard';
import { fetchItem } from '../../store/actions';
import { connect } from 'react-redux';

class MyItems extends Component {
    
    componentDidMount(){
        this.props.fetchItem();
    }
    render() {
        
        return (
            <div className='myitems-page'>
                <div className='myitems-top'>
            <h4>umts</h4>
            </div>
            <h1>My Items</h1>
                {this.props.data.map(stuff =>
                <ItemCard key={stuff.id} stuff={stuff}/>
                )}
            </div>
        )
    }
}


const mapStateToProps = state =>   ({
    data: state.itemReducer.data,
    fetching: state.itemReducer.fetching,
    error: state.itemReducer.error
   })
export default connect(mapStateToProps, {fetchItem}) (MyItems)
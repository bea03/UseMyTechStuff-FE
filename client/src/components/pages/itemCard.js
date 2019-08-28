import React from 'react';
import { connect } from "react-redux";
import { updateItem } from '../../store/actions';
import {NavLink} from 'react-router-dom';
import '../../styles/itemCard.css';

const ItemCard = props => {

    return (
        <div className='item-card'>
            <h2>{props.stuff.item}</h2> 
            <img src='https://via.placeholder.com/100'alt='placeholder'/>
            <p>Description : {props.stuff.description}</p>
            <p>Price : ${props.stuff.price}/Day</p>
            <p>Category : {props.stuff.category}</p>
            <div>
                <NavLink to={`/items/${props.stuff.id}/edit`} props={props.stuff}><button>Edit</button></NavLink>
                {/* <button onClick={deleteItem(props.card.id)}>Delete</button>    */}
            </div>           
        </div>
        
    )
}

export default connect(() => {},{updateItem})(ItemCard); 
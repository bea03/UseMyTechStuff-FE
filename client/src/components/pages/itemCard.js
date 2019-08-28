import React, { useState} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { updateItem } from '../../store/actions';

const ItemCard = props => {

    const [card, editCard] = useState(props.card)
    const [edit, setEdit] = useState(false);
    
    const toggleEdit = () => {
        setEdit(!edit)
    }

    const editHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        editCard({ ...card, [name]: value })
    }

    console.log('ITEM: ', props.card)
    return (
        <div className='item-card'>
            <h2>{props.card.item}</h2> 
            <NavLink to={`/item/${props.card.id}`}><img src='https://via.placeholder.com/100'alt='placeholder'/></NavLink>
            <p>Description: {props.card.description}</p>
            <p>Price: ${props.card.price}/Day</p>
            <p>Category: {props.card.category}</p>
            <div>
                <button onClick={toggleEdit}>Edit</button>
                {/* <button onClick={deleteItem(props.card.id)}>Delete</button>    */}
            </div>
            <div>
                {edit ? <form onSubmit={(e) => {
                    e.preventDefault()
                    props.updateItem(card)
                    toggleEdit();
                }}><input type='text' name='item' value={card.item} onChange={(e) => editHandler(e)} placeholder='Name' />
                    <input type='text' name='description' value={card.description} onChange={(e) => editHandler(e)} placeholder='Description' />
                    <input type='text' name='price' value={card.price} onChange={(e) => editHandler(e)} placeholder='Price' />
                    <input type='text' name='category' value={card.category} onChange={(e) => editHandler(e)} placeholder='Category' />
                    <button>Update</button> 
                    </form> : null}
            </div>           
        </div>
        
    )
}

export default connect(() => {},{updateItem})(ItemCard); 
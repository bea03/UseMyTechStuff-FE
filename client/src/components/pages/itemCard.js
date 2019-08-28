import React from 'react';

const ItemCard = props => {
    return (
        <div className='item-card'>
            <h1>item description</h1>
            <img src='https://via.placeholder.com/100'alt='placeholder'/>
            <p>Model: number</p>
            <p>SKU: number</p>
            <div>
                <button>Edit</button>    
            </div>           
        </div>
    )
}

export default ItemCard
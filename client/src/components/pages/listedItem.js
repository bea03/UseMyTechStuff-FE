import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import Calendar from 'react-calendar/dist/entry.nostyle'; 

class ListedItem extends React.Component {
    constructor() {
        super();
     
        this.state = {
          rating: 1,
          date: new Date(),
        };
      }

      onChange = date => this.setState({ date })
     
      onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
      }
     
      render() {
        const { rating } = this.state;
    return (
        <div className='item-page'>
            <div className='item-top'>
                <h1>Bluetooth Party Speakers</h1>
                <div className='item-sku'>
                    <h3>Model: 65RT21T</h3>
                    <h3>SKU: TLA800</h3>
                </div>
                <div className='item-rating'>
                    <StarRatingComponent
                        name="rate1" 
                        starCount={5}
                        value={rating}
                        onStarClick={this.onStarClick.bind(this)}
                    />
                    <h2>$52/night</h2>
                </div>
            </div>
            <button className='button'>RENT</button>
            <div className='item-info'>
                <img src='https://via.placeholder.com/150'alt='placeholder'/>
                <ul className='item-info-list'>
                    <li>High Power audio system</li>
                    <li>Bluetooth compatibility</li>
                    <li>Vibrant speaker lights</li>
                    <li>Ideal for parties</li>
                    <li>Easy to carry</li>
                </ul>
            </div>
            <div className='item-description'>
                <p>Warranty Details: 2 years (end in 2021)</p>
                <p>I received these speakers as a birthday gift a couple months ago in April. I had so many friends lend these party speakers from me so I thought to share them with everyone else who may be interested! They are great for parties and larger events like conferences.</p>
            </div>
            <h3>Select Days</h3>
            <div className='calendar'>
                <main className='calendar-content'>
                <Calendar
                    onChange={this.onChange}
                    value={this.state.date}
                />
                </main>
            </div>
            <div className='item-message'>
                <img src='https://via.placeholder.com/100'alt='placeholder'/>
                <h4>Message Lender</h4>
            </div>
        </div>
    )
}
}
export default ListedItem
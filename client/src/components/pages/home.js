import React from 'react';
import { NavLink } from 'react-router-dom';

function Home () {
    return (
        <div className='home-container'>
            <div className='nav-container'>
               <NavLink to='/login'><button>Sign In</button></NavLink>
               <NavLink to='/registration'><button>Join</button></NavLink>
            </div>

            <div className='top-content'>
                <img src='https://via.placeholder.com/150'/>
                <div className='top'>
                    <p>USE MY TECH STUFF</p>
                    <input type='text' placeholder='SEARCH' />
                    <button>List your product for rent</button>
                </div>
            </div>
        </div>
    )
}

export default Home
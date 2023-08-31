import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';



const Header = () => {
  return (
	<div id='header-container'>
		<h1 className='page-header'>
			My header
		</h1>
		<div className='nav-base'>
			<nav>
				<div className='main-nav-container'>
					<Link to="/">Pic Some</Link>
				</div>
				<div className='cart-div'>
					<Link to="/cart" className='cart-container' > 
						<AiOutlineShoppingCart className='cart-icon'/> 
						<div className='cart-text'> Cart </div>
					</Link>
				</div>
			</nav>
		</div>
	</div>
	)
}

export default Header;


import React from 'react'
import "./CheckoutProduct.css"

function CheckoutProduct({id, title, image, price, rating}) {
  return (
		<div className="checkoutProduct">
			<img src={image} alt="checkoutProduct-img" className="checkoutProduct__image" />

			<div className="product__info">
				<p className="checkoutProduct__title">
					{title}
				</p>
				<p className="checkoutProduct__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>	
				<div className="checkoutProduct__rating">
					{Array(rating)
					.fill()
					.map((_, i) => (
						<p>⭐</p>
					))}
				</div>
				<button>
					Remove From Basket
				</button>
			</div>
		</div>
  )
}

export default CheckoutProduct
import React from 'react';

const Item = ({ service }) => {
  
    const { price, img, quantity, description } = service;
    return (
        <div>
            
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <p> price: {price}</p>
                    <p>quantity: {quantity}</p>
                    <p>{description}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Item;
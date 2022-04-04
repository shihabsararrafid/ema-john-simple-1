import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './OrderDetail.css';

const OrderDetail = (props) => {
    const { deleteCart, item } = props;
    const { name, img, price, quantity, shipping } = item;
    console.log(props);
    return (
        <div className='orderDetail'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='itemDetail'>
                <div className="info">
                    <h3>{name}</h3>
                    <p>Price:${price}</p>
                    <p>Quantity:{quantity}</p>
                    <p>Shipping:${shipping}</p>
                </div>
                <div className="delete">
                    <button onClick={() => deleteCart(item)}><FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon></button>
                </div>

            </div>
        </div>
    );
};

export default OrderDetail;
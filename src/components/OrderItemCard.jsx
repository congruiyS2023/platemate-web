import React from 'react';
import { Badge } from 'antd';

const OrderItemCard = ({ onClickOrderItem, ...props }) => (
    <Badge count={props.count}>
        <div
            className="border-solid border-primary h-24 w-full flex bg-white rounded-lg overflow-hidden shadow-md"
            onClick={onClickOrderItem}>
            <div className="flex bg-primary w-1/3 items-center justify-center">
                <div
                    className="bg-cover bg-center w-24 h-24"
                    style={{ backgroundImage: `url(${props.image})` }}>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="mx-4 mt-4">
                    <span className="text-primary font-heading"> {props.name} </span>
                    <p className="text-xs text-black font-paragraph"> {props.description} </p>
                </div>
            </div>
        </div>
    </Badge>
);

export default OrderItemCard;
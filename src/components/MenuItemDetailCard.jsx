import React from 'react';
import { Card } from 'antd';

const MenuItemDetailCard = ({ ...props }) => (
    <Card
        cover={
            <div
            className="bg-cover bg-center h-64"
            style={{ backgroundImage: `url(${props.image})` }}>
          </div>
        }
        className="border-2 border-solid border-primary w-full"
    >
        <div className="flex flex-col">
            <div>
                <span className="text-primary font-heading"> {props.name} </span>
                <p className="text-xs text-black font-paragraph"> {props.description} </p>
            </div>
        </div>
    </Card>
);
export default MenuItemDetailCard;
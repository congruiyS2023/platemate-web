import React from 'react';
import { Card } from 'antd';

const MenuItemDetailCard = ({ ...props }) => (
    <Card
        cover={
            <img className="max-h-64"
                alt="example"
                src={props.image}
            />
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
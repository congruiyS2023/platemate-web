import React from 'react';
import { Card } from 'antd';

const MenuItemPreviewCard = ({ onClickMenuItem, ...props }) => (
    <Card
        bodyStyle={{padding: 8}}
        hoverable={true}
        cover={
            <img className="max-h-32"
                 alt="example"
                 src={props.image}
            />
        }
        onClick={onClickMenuItem}
        className="border-2 border-solid border-primary w-40"
    >
        <div className="flex flex-col">
            <div>
                <span className="text-primary font-heading"> {props.name} </span>
            </div>
            <div>
                <span className="text-primary font-normal"> {props.price} </span>
            </div>
        </div>
    </Card>
);

export default MenuItemPreviewCard;
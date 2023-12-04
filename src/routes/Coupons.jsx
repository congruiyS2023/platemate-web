import React, { useState } from "react";
import { Flex, Card } from "antd";
import Heading from "../components/Heading";
import { CloseOutlined } from '@ant-design/icons';
import ButtonText from "../components/ButtonText";
import Link from "../components/Link";
import CustomButton from "../components/CustomButton";
import { CustomInput } from "../components/CustomInputs";
import { Input } from 'antd';
import HeaderNav from "../components/HeaderNav";
import { useNavigate } from 'react-router-dom';

const Coupons = () => {
    const navigate = useNavigate();

    const { TextArea } = Input;
    const [coupons, setCoupons] = useState([
        { id: 1, description: '¥3 - within 15 days' },
        { id: 2, description: '¥5 - buy $50 save $5' },
        { id: 3, description: '¥20 - buy $150 save $20' }
    ]);
    const [showAddCoupon, setShowAddCoupon] = useState(false);
    const [newCouponTitle, setNewCouponTitle] = useState('');
    const [newCouponAmount, setNewCouponAmount] = useState('');
    const [newCouponDescription, setNewCouponDescription] = useState('');

    const isAddButtonDisabled = !newCouponTitle || !newCouponAmount || !newCouponDescription;

    const handleDelete = (couponId) => {
        const updatedCoupons = coupons.filter(coupon => coupon.id !== couponId);
        setCoupons(updatedCoupons);
    };

    const handleAddCoupon = () => {
        if (isAddButtonDisabled) return;

        const newCoupon = {
            id: coupons.length + 1,
            description: `${newCouponTitle}`
        };
        setCoupons([...coupons, newCoupon]);
        setShowAddCoupon(false);
        setNewCouponTitle('');
        setNewCouponAmount('');
        setNewCouponDescription('');
    };

    const handleBackReward = () => {
        navigate('/reward');
    };

    const handleBackCoupon = () => {
        setShowAddCoupon(false);
    }

    return (
        <div>
            {showAddCoupon ? (
                <div>
                    <HeaderNav header="COUPONS" showBackButton={true} showLogOutButton={true} backButtonOnClick={handleBackCoupon}/>
                    <Flex vertical className="px-8">
                        <Heading level={1}>ADD A COUPON</Heading>
                        <Heading level={2}>coupon title</Heading>
                        <CustomInput
                            className="w-full h-10"
                            placeholder="Enter coupon name"
                            value={newCouponTitle}
                            onChange={(e) => setNewCouponTitle(e.target.value)}
                        />
                        <Heading level={2}>coupon amount (in $)</Heading>
                        <CustomInput
                            className="w-full h-10"
                            placeholder="Enter coupon amount"
                            value={newCouponAmount}
                            onChange={(e) => setNewCouponAmount(e.target.value)}
                        />
                        <Heading level={2}>coupon description</Heading>
                        <TextArea
                            rows={8}
                            className="w-full"
                            placeholder="Enter coupon description"
                            value={newCouponDescription}
                            onChange={(e) => setNewCouponDescription(e.target.value)}
                        />
                    </Flex> 
                    <Flex vertical center className="px-20 py-12">
                        <CustomButton type="primary" onClick={handleAddCoupon} disabled={isAddButtonDisabled}>
                            ADD COUPON
                        </CustomButton>
                    </Flex>
                </div>
            ) : (
                <div>
                    <HeaderNav header="COUPONS" showBackButton={true} showLogOutButton={true} backButtonOnClick={handleBackReward}/>
                    <Flex vertical className="px-8">
                        <Heading level={1}>MANAGE COUPONS</Heading>
                        <Heading level={2}>current coupons</Heading>
                        {coupons.map((coupon) => (
                            <Card 
                                key={coupon.id}
                                style={{ width: 300, backgroundColor: '#D9D9D9'}} 
                                size="small" 
                                className="my-2"
                            >
                                <Flex horizontal className="justify-between">
                                    <ButtonText>
                                        {coupon.description}
                                    </ButtonText>
                                    <CloseOutlined onClick={() => handleDelete(coupon.id)}/>
                                </Flex>
                            </Card>
                        ))}
                    </Flex> 
                    <Link onClick={() => setShowAddCoupon(true)} className="px-8">ADD A NEW COUPON</Link>
                </div>
            )}
        </div>
    );
};

export default Coupons;

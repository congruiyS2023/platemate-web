import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Flex} from "antd";
import Heading from "../components/Heading";
import CustomButton from "../components/CustomButton";
import Paragraph from "../components/Paragraph";
import {CustomInput} from "../components/CustomInputs";
import Caption from "../components/Caption";


const JoinChallange = () => {
    const navigate = useNavigate();

    const [phoneNumber, setPhoneNumber] = useState('');

    const isButtonDisabled = !phoneNumber;

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleJoin = () => {
        navigate('/Join-challange-success');
    }

    const handleSkip = () => {
        navigate('/menu', { state: { skipModal: true } });
    }

    return (    
    <div>
        <Flex vertical className="pt-20">
            <Heading level={1} type="success" className="text-center px-20">
                ZERO-WASTE CHALLENGE
            </Heading>
            <Heading level={2} className="text-center pb-4 px-12">
                Finish your plate and win a coupon for up to $20!
            </Heading>
        </Flex>
        <Flex vertical className="px-12">
            <Paragraph>
                "We're committed to reducing food waste. 
                If you finish your order with no leftovers, we’ll send you an exclusive coupon up to $20! 
            </Paragraph>
            <Paragraph>
                When you checkout, tell our staff if you complete the challenge! Our staff will send you a coupon to your phone.
            </Paragraph>
            <Heading level={2}>
                Enter phone number to join
            </Heading>
            <CustomInput
                className="w-full h-10"
                placeholder="(000)000-0000"
                allowClear
                onChange={handlePhoneNumberChange}
            />
            <Caption>
                *Participation in this event requires a minimum actual expenditure of $30.
            </Caption>
        </Flex>
        <Flex vertical center className="px-20 py-4">
            <CustomButton type="primary" onClick={handleJoin} disabled={isButtonDisabled} className="my-4">JOIN</CustomButton>
            <CustomButton onClick={handleSkip}>SKIP</CustomButton>
        </Flex>
    </div>);
};

export default JoinChallange;

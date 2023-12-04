import React from "react";
import { useNavigate } from 'react-router-dom';
import { Flex} from "antd";
import Heading from "../components/Heading";
import CustomButton from "../components/CustomButton";
import Paragraph from "../components/Paragraph";
import ButtonText from "../components/ButtonText";


const ChallengeDetails = () => {
    const navigate = useNavigate();

    const handleLetsDoIt = () => {
        navigate('/reward');
    };


    return (    
    <div>
        <Flex vertical className="pt-20">
            <Heading level={1} type="success" className="text-center px-20">
                ZERO-WASTE CHALLENGE
            </Heading>
            <Heading level={2} className="text-center pb-6">
                <div>Transform your restaurant </div>
                <div>with sustainability and </div>
                <div>customer engagement!</div>
            </Heading>
        </Flex>
        <Flex vertical className="px-12">
            <Paragraph>
                Partner with PlateMate to bring the 
                Zero-Waste Challenge to your restaurant. 
                We offer:
            </Paragraph>
            <Flex vertical className="px-4">
                <ButtonText>
                    • Financial Subsidies:
                </ButtonText>
                <Paragraph className="text-primary">
                    Support to help you join our sustainable mission.
                </Paragraph>
                <ButtonText>
                    • Increase Customer Loyalty:
                </ButtonText>
                <Paragraph className="text-primary">
                    Attract and retain customers by offering rewards for participating in the Zero-Waste Challenge.
                </Paragraph>
            </Flex>
            <Paragraph>
                Make a difference with PlateMate - save food together!
            </Paragraph>
        </Flex>
        <Flex vertical center className="px-20 py-8">
            <CustomButton type="primary" onClick={handleLetsDoIt}>Let's do it!</CustomButton>
        </Flex>
    </div>);
};

export default ChallengeDetails;

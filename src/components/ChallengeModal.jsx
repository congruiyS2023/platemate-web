import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { Flex, Modal } from "antd";
import Heading from "./Heading";
import ButtonText from "./ButtonText";
import Paragraph from "./Paragraph";
import CustomButton from "./CustomButton"


const ChallengeModal = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (!location.state?.skipModal) {
            setIsModalOpen(true);
        }
    }, [location]);
    
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    const handleJoin = () => {
      setIsModalOpen(false);
      navigate('/user-home/join-challenge');
    };

    const handleSkip = () => {
      setIsModalOpen(false);
    };

    return (    
    <div>
        <Modal 
          className="fixed inset-0 flex items-center justify-center"
          width={280}
          title={
            <Flex vertical className="py-2">
              <Heading level={1} type="success" className="text-primary">
                <div>Join Zero-Waste Challenge</div> 
                <div>& Win Coupons!</div>
              </Heading>
              <Paragraph>
                Finish your plate and win a coupon for up to $25!
              </Paragraph>
            </Flex>
          }
          open={isModalOpen}
          onJoin={handleJoin}
          onCancel={handleCancel}
          handleSkip={handleSkip}
          cancelText={<ButtonText color="black">SKIP</ButtonText>}
          okText={<ButtonText color="white">JOIN</ButtonText>}
          footer={
            <div style={{ textAlign: 'center' }}>
                <CustomButton onClick={handleSkip} style={{ marginRight: 8, minWidth: 100 }}>
                    SKIP
                </CustomButton>
                <CustomButton onClick={handleJoin} type="primary" style={{minWidth: 100 }}>
                    JOIN
                </CustomButton>
            </div>
          }
        />
    </div>);
};

export default ChallengeModal;

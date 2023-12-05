import React from "react";
import { Flex, Avatar } from "antd";
import { AiOutlineUser } from "react-icons/ai";

const ChatMessage = ({ msg, isSender = false }) => {
    const messageColor = isSender ? "#12664f" : "#e3d9ca";

    const justifyDirection = isSender ? "flex-end" : "flex-start";
    const avatarColor = { backgroundColor: messageColor };

    return (
        <Flex justify={justifyDirection} className="mb-2">
            {!isSender && (
                <Flex vertical justify="flex-end">
                    <Avatar
                        style={avatarColor}
                        icon={<AiOutlineUser style={{ color: "black" }} />}
                    />
                </Flex>
            )}
            <Flex
                style={{ backgroundColor: messageColor }}
                className={`rounded-lg p-3 ${isSender ? "mr-2" : "ml-2"}`}
            >
                <p
                    className={`text-${
                        isSender ? "white" : "black"
                    } text-sm m-0`}
                >
                    {msg}
                </p>
            </Flex>
            {isSender && (
                <Flex vertical justify="flex-end">
                    <Avatar style={avatarColor} icon={<AiOutlineUser />} />
                </Flex>
            )}
        </Flex>
    );
};

export default ChatMessage;

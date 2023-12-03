import React from "react";
import { Flex, Avatar } from "antd";
import { AiOutlineUser } from "react-icons/ai";
import Paragraph from "./Paragraph";

const ChatMessage = ({ msg, isSender = false }) => {
    return isSender ? (
        <Flex justify="flex-end" className="mb-2">
            <Flex className="bg-yellow-200 rounded-lg p-4 mr-2">
                <Paragraph className="text-black mb-0">{msg}</Paragraph>
            </Flex>
            <Avatar icon={<AiOutlineUser />} />
        </Flex>
    ) : (
        <Flex justify="flex-start" className="mb-2">
            <Avatar icon={<AiOutlineUser />} />
            <Flex className="bg-green-800 rounded-lg p-2 ml-2">
                <Paragraph className="text-white mb-0">{msg}</Paragraph>
            </Flex>
        </Flex>
    );
};

export default ChatMessage;

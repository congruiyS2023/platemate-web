import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Heading from "../components/Heading";
import ChatMessage from "../components/ChatMessage";
import { Flex, Input } from "antd";
import { AiOutlineSend } from "react-icons/ai";

function getMessages(name) {
    return [
        {
            msg: "Hello",
            isSender: false,
        },
        {
            msg: "Hello " + name,
            isSender: true,
        },
    ];
}

export default function Chat() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const name = queryParams.get("name");

    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");

    useEffect(() => {
        setMessages(getMessages(name));
    }, [setMessages, name]);

    const handleSendMessage = () => {
        if (newMessage.trim() !== "") {
            setMessages((prevMessages) => [
                ...prevMessages,
                {
                    msg: newMessage,
                    isSender: true,
                },
            ]);
            setNewMessage("");
        }
    };

    return (
        <Flex vertical className="p-4 h-full">
            <Heading level={1} align="center" className="mb-2">
                {name}
            </Heading>
            {messages.map((message) => (
                <ChatMessage
                    msg={message.msg}
                    isSender={message.isSender}
                ></ChatMessage>
            ))}
            <Input
                className="mt-auto"
                placeholder="Message..."
                suffix={<AiOutlineSend />}
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onPressEnter={handleSendMessage}
            />
        </Flex>
    );
}

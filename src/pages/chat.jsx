import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Heading from "../components/Heading";
import ChatMessage from "../components/ChatMessage";
import { Flex } from "antd";
import { CustomInputWithSubmit } from "../components/CustomInputs";

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

    useEffect(() => {
        setMessages(getMessages(name));
    }, [setMessages, name]);

    const handleSendMessage = (msg) => {
        if (msg !== "") {
            setMessages((prevMessages) => [
                ...prevMessages,
                {
                    msg: msg,
                    isSender: true,
                },
            ]);
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
            <CustomInputWithSubmit
                className="mt-auto"
                placeholder="Message..."
                onSubmit={handleSendMessage}
            />
        </Flex>
    );
}

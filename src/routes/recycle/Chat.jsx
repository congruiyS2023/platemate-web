import { useState, useEffect } from "react";
import { Flex } from "antd";
import { useLocation } from "react-router-dom";
import ChatMessage from "../../components/ChatMessage";
import { CustomInputWithSubmit } from "../../components/CustomInputs";
import HeaderNav from "../../components/HeaderNav";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import RecycleCompanyNavbar from "../../components/RecycleCompanyNavbar";

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
  const { backUrl } = location.state || {};
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get("name");

  const navigate = useNavigate();

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
    <>
      <Flex vertical className="h-full">
        <HeaderNav
          header={name}
          showBackButton={true}
          showLogOutButton={true}
          backButtonOnClick={() => {
          navigate(backUrl);
          }}
        />
        <Flex vertical className="p-4 pt-0 h-full flex-col">
          {messages.map((message, i) => (
            <ChatMessage
              key={i}
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
      </Flex>
      {location.state.pov === 'c2o' ? <RecycleCompanyNavbar /> : <Navbar />}
    </>
  );
}

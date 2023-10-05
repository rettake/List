import { useState } from "react";
import io from "socket.io-client";
import { IMessage } from "../../interfaces/IMessage";

const socket = io("127.0.0.1:5000");

const Messages = () => {
  const [show, setShow] = useState<boolean>(true);
  const [messages, setMessages] = useState<IMessage[]>([]);

  socket.on("connect", () => {
    console.log("Connected!");
  });

  socket.on("message", (data) => {
    setMessages([...messages, data]);
  });

  const hadnleShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className="fixed right-8 bottom-8">
      <div className="flex justify-end">
        <div className="p-5 md:p-6 rounded-2xl bg-[#93c5fd] mb-8 w-[80vw] md:max-w-[400px]">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-white">Сообщения:</h3>
            <p
              onClick={hadnleShow}
              className="text-white underline cursor-pointer"
            >
              {show ? "Скрыть" : "Открыть"}
            </p>
          </div>
          <div className="max-h-[400px] overflow-scroll">
            {show &&
              messages.map((item, index) => (
                <div key={index} className="mb-2 bg-slate-100 p-2 rounded-lg">
                  <h5>{item.name}</h5>
                  <p>{item.text}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;

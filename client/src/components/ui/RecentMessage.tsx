import React, { useEffect, useState } from "react";
import { dummyRecentMessagesData } from "../../assets/assets";
import { Link } from "react-router-dom";
import moment from "moment";

const RecentMessages = () => {
  const [messages, setMessages] = useState([]);

  const fetchRecentmessages = async () => {
    setMessages(dummyRecentMessagesData);
  };

  useEffect(() => {
    fetchRecentmessages();
  }, []);

  return (
    <div className="bg-[#0E0E0E] w-full p-4 min-h-20 rounded-md shadow text-xs text-gray-500">
      <h3 className="font-semibold text-gray-300 mb-4">Recent Messages</h3>
      <div className="flex flex-col max-h-56 overflow-y-scroll no-scrollbar">
        {messages.map((message, index) => (
          <Link
            key={index}
            className="flex items-start gap-2 py-2 hover:bg-gray-900"
          >
            <img
              src={message.from_user_id.profile_picture}
              alt=""
              className="w-8 h-8 rounded-full"
            />
            <div className="w-full">
              <div className="flex justify-between">
                <p className="font-medium">{message.from_user_id.full_name}</p>
                <p className="text-[10px] text-slate-400">
                  {moment(message.createdAt).fromNow()}
                </p>
              </div>
              <div className="flex justify-between">
                <p>{message.text ? message.text : "Media"}</p>
                {!message.seen && (
                  <p className="bg-indigo-500 text-white w-4 h-4 flex-center rounded-full text-[10px]">
                    1
                  </p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentMessages;

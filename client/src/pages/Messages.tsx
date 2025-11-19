import { useState } from "react";
import { Search, Send, MoreHorizontal } from "lucide-react";

const conversations = [
  {
    id: 1,
    name: "Aurora Hayes",
    handle: "@aurorah",
    avatar: "./profile-picture.jpg",
    lastMessage: "See you at the event later!",
    unread: 2,
    lastActive: "2m ago",
    messages: [
      {
        id: "m-1",
        fromMe: false,
        text: "Hey! Don't forget about tonight.",
        time: "18:02",
      },
      {
        id: "m-2",
        fromMe: true,
        text: "Already on it. Need me to bring anything?",
        time: "18:04",
      },
      {
        id: "m-3",
        fromMe: false,
        text: "Just your camera. Let's capture the moments 📸",
        time: "18:05",
      },
    ],
  },
  {
    id: 2,
    name: "Noah Sterling",
    handle: "@noah.codes",
    avatar: "./moment4.jpg",
    lastMessage: "Mockups look amazing btw",
    unread: 0,
    lastActive: "23m ago",
    messages: [
      {
        id: "m-4",
        fromMe: false,
        text: "Mockups look amazing btw",
        time: "11:42",
      },
    ],
  },
  {
    id: 3,
    name: "Carter Miles",
    handle: "@carterm",
    avatar: "./moment2.jpg",
    lastMessage: "We still on for sunrise shots?",
    unread: 0,
    lastActive: "1h ago",
    messages: [
      {
        id: "m-5",
        fromMe: false,
        text: "We still on for sunrise shots?",
        time: "08:12",
      },
    ],
  },
];

const Messages = () => {
  const [selectedId, setSelectedId] = useState(conversations[0].id);
  const [draft, setDraft] = useState("");
  const selectedConversation =
    conversations.find((c) => c.id === selectedId) ?? conversations[0];

  return (
    <div className="h-[90vh] w-full bg-[#050505] text-gray-100">
      <div className="max-w-6xl mx-auto h-full flex flex-col gap-6 p-6">
        <div className="shrink-0">
          <h1 className="text-3xl font-semibold text-white">Messages</h1>
          <p className="text-gray-500">
            Catch up with your circle, in real time.
          </p>
        </div>

        <div className="flex-1 flex flex-col gap-6 lg:flex-row overflow-hidden">
          {/* Conversation list */}
          <aside className="w-full lg:w-80 bg-[#0A0A0A] rounded-2xl border border-[#1d1d1d] flex flex-col lg:h-full">
            <div className="p-4 border-b border-[#1d1d1d]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                <input
                  className="w-full bg-[#050505] text-sm rounded-xl py-2 pl-9 pr-3 border border-transparent focus:outline-none focus:border-[#2d2d2d]"
                  placeholder="Search people or moments"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto no-scrollbar">
              {conversations.map((conversation) => (
                <button
                  key={conversation.id}
                  onClick={() => setSelectedId(conversation.id)}
                  className={`w-full flex items-center gap-4 px-4 py-3 border-b border-[#101010] transition-colors ${
                    selectedId === conversation.id
                      ? "bg-[#111111]"
                      : "hover:bg-[#0f0f0f]"
                  }`}
                >
                  <img
                    src={conversation.avatar}
                    alt={conversation.name}
                    className="w-12 h-12 rounded-2xl object-cover"
                  />
                  <div className="flex-1 text-left">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{conversation.name}</span>
                      <span className="text-xs text-gray-500">
                        {conversation.lastActive}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 line-clamp-1">
                      {conversation.lastMessage}
                    </p>
                  </div>
                  {conversation.unread > 0 && (
                    <span className="inline-flex items-center justify-center text-xs bg-accent text-white rounded-full h-6 w-6">
                      {conversation.unread}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </aside>

          {/* Chat window */}
          <section className="flex-1 bg-[#0A0A0A] rounded-2xl border border-[#1d1d1d] flex flex-col h-full">
            <header className="p-4 border-b border-[#1d1d1d] flex items-center gap-3">
              <img
                src={selectedConversation?.avatar}
                alt={selectedConversation?.name}
                className="w-12 h-12 rounded-2xl object-cover"
              />
              <div className="flex-1">
                <p className="font-medium text-white">
                  {selectedConversation?.name}
                </p>
                <p className="text-xs text-gray-500">
                  {selectedConversation?.handle} • Online now
                </p>
              </div>
              <button className="p-2 rounded-xl bg-[#111111] text-gray-400 hover:text-white transition">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </header>

            <div className="flex-1 overflow-y-auto no-scrollbar p-6 space-y-4">
              {selectedConversation?.messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.fromMe ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[70%] rounded-3xl px-4 py-3 text-sm ${
                      message.fromMe
                        ? "bg-linear-to-r from-[#8645ff] to-[#ff5f6d] text-white"
                        : "bg-[#101010] text-gray-300"
                    }`}
                  >
                    <p>{message.text}</p>
                    <span className="text-[10px] text-gray-400 block mt-1 text-right">
                      {message.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <form
              className="p-4 border-t border-[#1d1d1d] flex items-center gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                if (!draft.trim()) return;
                setDraft("");
              }}
            >
              <input
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Drop a message..."
                className="flex-1 bg-[#050505] border border-transparent focus:border-[#2d2d2d] rounded-2xl px-4 py-3 text-sm outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-accent text-white px-4 py-3 rounded-2xl text-sm font-medium hover:opacity-90 transition"
              >
                <Send className="w-4 h-4" />
                Send
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Messages;
import React from "react";

const Chat = () => {
    const [message, setMessage] = React.useState([])
    const [input, setInput] = React.useState("")
    const [loading, setLoading] = React.useState(false)
    const messagesEndRef = React.useRef(null)
    const inputRef = React.useRef(null)

    return <main className="">
        <div className=" flex flex-col h-screen bg-gradient-to-b from-gray-50 to-white">
            <div className="w-full bg-white border-b border-gray-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
                    <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                        <span className="text-green-500">SomaBot</span> AI
                    </h1>
                </div>
            </div>
        </div>
    </main>
}

export default Chat;
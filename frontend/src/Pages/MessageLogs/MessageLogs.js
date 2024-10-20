import React, { useState } from 'react';
import Api, { baseURL } from '../../Config/Api.js';

const MessageLogs = () => {
    const [isSending, setIsSending] = useState(false);
    const [logContainer, setLogContainer] = useState([]);

    const startSendingMessages = () => {
        if (isSending) return;

        setIsSending(true);

        // Use fetch to stream the logs
        Api.post('/send_message_dev')
            .then((response) => {
                const reader = response.body.getReader();
                const decoder = new TextDecoder();

                const readStream = () => {
                    reader.read().then(({ done, value }) => {
                        if (done) {
                            console.log("Stream finished");
                            setIsSending(false);
                            return;
                        }

                        const chunk = decoder.decode(value);
                        const logs = chunk.split("\n").filter(Boolean);  // Split by newlines

                        logs.forEach((logStr) => {
                            const data = JSON.parse(logStr);  // Parse each JSON chunk
                            setLogContainer((prevLogs) => [
                                ...prevLogs,
                                { log: data.log, isError: data.isError },
                            ]);

                            if (data.log === "Task completed") {
                                alert("All messages sent!");
                            }
                        });

                        // Continue reading next chunk
                        readStream();
                    });
                };

                readStream();
            })
            .catch((error) => {
                console.error('Error:', error);
                setIsSending(false);
            });
    };

    const stopSendingMessages = () => {
        if (!isSending) return;

        Api.post('/stop_message_sending')
            .then(({ data }) => {
                alert(data.message);
                setIsSending(false);
            })
            .catch((error) => {
                console.error('Error stopping messages:', error);
            });
    };

    return (
        <div className='py-2 pt-16 md:pt-2 bg-black-800 px-1 h-full overflow-y-auto'>
            <div className='flex items-center gap-x-3'>
                <button
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                    onClick={startSendingMessages}
                    disabled={isSending}
                >
                    Start Sending Messages
                </button>
                <button
                    className='bg-blue-500 hover:bg-blue-700 disabled:text-blue-800 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded'
                    onClick={stopSendingMessages}
                    disabled={!isSending}
                >
                    Stop Sending Messages
                </button>
            </div>
            <div id='log-container' className='overflow-y-auto p-2'>
                {logContainer.map((log, index) => (
                    <p key={index} className={log.isError ? 'error-log' : 'success-log'}>
                        {log.isError
                            ? `Error: ${log.log} ❌`
                            : `Success: ${log.log} ✅`}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default MessageLogs;

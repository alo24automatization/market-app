import React, {useEffect, useState} from 'react'
import Api, {baseURL} from '../../Config/Api.js'

const MessageLogs = () => {
    const [isSending, setIsSending] = useState(false)
    const [evtSource, setEvtSource] = useState(null)
    const [logContainer, setLogContainer] = useState([])

    useEffect(() => {
        // Cleanup function to close the EventSource when the component unmounts
        return () => {
            if (evtSource) {
                evtSource.close()
            }
        }
    }, [evtSource])

    const startSendingMessages = () => {
        if (isSending) return
        // Start sending messages
        setIsSending(true)
        const newEvtSource = new EventSource(baseURL + '/send_message_dev')
        setEvtSource(newEvtSource)

        newEvtSource.onmessage = (event) => {
            const data = JSON.parse(event.data)
            if (data.log === 'Task completed') {
                alert('All messages sent!')
                newEvtSource.close()
                setIsSending(false)
                return
            }

            setLogContainer((prevLogs) => [
                ...prevLogs,
                {log: data.log, isError: data.isError},
            ])
        }

        newEvtSource.onclose = () => {
            alert('Message sending process completed.')
            setIsSending(false)
            newEvtSource.close()
        }
    }

    const stopSendingMessages = () => {
        if (!isSending || !evtSource) return

        // Stop sending messages on server side
        Api.post('/stop_message_sending')
            .then(({data}) => {
                alert(data.message)
                evtSource.close()
                setIsSending(false)
            })
    }

    // Function to handle window before unload event
    const handleBeforeUnload = (e) => {
        if (isSending) {
            const confirmationMessage =
                'Messages are still being sent. Are you sure you want to leave?'
            e.returnValue = confirmationMessage // Standard for most browsers
            return confirmationMessage // For others (Chrome, Firefox)
        }
    }

    useEffect(() => {
        window.addEventListener('beforeunload', handleBeforeUnload)
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload)
        }
    }, [isSending])

    return (
        <div className=' py-2 bg-black-800 px-1 h-full overflow-y-auto'>
            <div className='flex items-center gap-x-3'>
                <button
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-white-900'
                    onClick={startSendingMessages}
                    disabled={isSending}
                >
                    Start Sending Messages
                </button>
                <button
                    className='bg-blue-500 hover:bg-blue-700 disabled:text-blue-800 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded text-white-900'
                    onClick={stopSendingMessages}
                    disabled={!isSending}
                >
                    Stop Sending Messages
                </button>
            </div>
            <div id='log-container' className='overflow-y-auto p-2' >
                {logContainer.map((log, index) => (
                    <p
                        key={index}
                        className={log.isError ? 'error-log' : 'success-log'}
                    >
                        {log.isError
                            ? `Error: ${log.log} ❌`
                            : `Success: ${log.log} ✅`}
                    </p>
                ))}
            </div>
        </div>
    )
}

export default MessageLogs

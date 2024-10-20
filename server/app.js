const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const http = require("http");
const server = http.createServer(app);
const schedule = require("node-schedule");
const { Server } = require("socket.io");
const { start } = require("./connectDB/db");
const { socketIO } = require("./socketio/socket");
const { routers } = require("./routers/routers");
const mongoose = require("mongoose");
const {
  sendMessage,
  sendMessageFromMorning,
} = require("./routers/globalFunctions");
const io = new Server(server, {
  cors: {
    origin: "*",
    method: ["*"],
  },
});

// a
app.use(cors());

socketIO(io);

start(server).then(() => {});
routers(app);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "./../frontend", "build")));

  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "./../frontend", "build", "index.html")
    );
  });
}
global.isStoppedSendMorningMessage=false
schedule.scheduleJob("0 9 * * *", async () => {
  await sendMessageFromMorning();
});
// (async () => {
//     await sendMessageFromMorning();
// })();
// Route to serve the HTML file
app.get("/message_logs", (req, res) => {
  const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Message Logs</title>
        <style>
          .error {
            color: red;
            font-size: 17px;
          }
          .error::before {
            content: "Error: ";
          }
        .error::after {
            content: "  ❌ ";
          }
          .success {
            color: #149414;
            font-size: 17px;
          }
          .success::before {
            content: "Success: ";
          } 
        .success::after {
            content: " ✅ ";
          }
            p{
            border: 1px solid ;
            padding:2.5px;
            }
          body {
            background: #ccc;
          }
          button {
            margin: 10px;
            padding: 10px;
            font-size: 16px;
          }
        </style>
      </head>
      <body>
       <button id="startButton">Start Sending Messages</button>
      <button id="stopButton" disabled>Stop Sending Messages</button>
        <div id="log-container"></div>
       
        
         <script>
  let evtSource;
  let isSending = false;

  document.getElementById("startButton").addEventListener("click", () => {
    if (isSending) return;

    // Reset stop flag on server side
    fetch("/reset_stop_flag", { method: "POST" });

    // Start sending messages
    isSending = true;
    evtSource = new EventSource("/send_message_dev");
    document.getElementById("stopButton").disabled = false;
    document.getElementById("startButton").disabled = true;

    const logContainer = document.getElementById("log-container");

    evtSource.onmessage = function(event) {
      const data = JSON.parse(event.data);
      if (data.log === "Task completed") {
        alert("All messages sent!");
        evtSource.close();
        isSending = false;
        document.getElementById("stopButton").disabled = true;
        document.getElementById("startButton").disabled = false;
        return;
      }
      const logElement = document.createElement("p");
      logElement.textContent = data.log;
      if (data.isError) {
        logElement.classList.add("error");
      } else {
        logElement.classList.add("success");
      }
      logContainer.appendChild(logElement);
    };

    evtSource.onclose = function() {
      alert("Message sending process completed.");
      isSending = false;
      evtSource.close();
      document.getElementById("stopButton").disabled = true;
      document.getElementById("startButton").disabled = false;
    };
  });

  document.getElementById("stopButton").addEventListener("click", () => {
    if (!isSending || !evtSource) return;
    // Stop sending messages on server side
    fetch("/stop_message_sending", { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        evtSource.close();
        isSending = false;
        document.getElementById("stopButton").disabled = true;
        document.getElementById("startButton").disabled = false;
      });
  });

  window.addEventListener("beforeunload", function (e) {
    if (isSending) {
      const confirmationMessage = "Messages are still being sent. Are you sure you want to leave?";
      e.returnValue = confirmationMessage; // Standard for most browsers
      return confirmationMessage; // For others (Chrome, Firefox)
    }
  });
        </script>
      </body>
      </html>
    `;

  res.send(html);
});
// Route to stop the message-sending process
app.post("/stop_message_sending", async (req, res) => {
  global.isStoppedSendMorningMessage=true
  res.json({
    success: true,
    message: "Message sending process has been stopped.",
  });
});
// Route to send the event stream
app.get("/send_message_dev", (req, res) => {
    global.isStoppedSendMorningMessage=false
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  const sendLog = (log, isError = false) => {
    const message = {
      log: log,
      isError: isError,
    };
    res.write(`data: ${JSON.stringify(message)}\n\n`);
  };
  sendMessageFromMorning(sendLog)
    .then(() => {
      sendLog("Task completed", false);
      res.end();
    })
    .catch((error) => {
      sendLog(`Error occurred: ${error.message}`, true);
      res.end();
    });
});

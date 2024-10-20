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
    allowedHeaders: ["Content-Type"],
    credentials: true,
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
global.isStoppedSendMorningMessage = false;
schedule.scheduleJob("0 9 * * *", async () => {
  await sendMessageFromMorning();
});
// (async () => {
//     await sendMessageFromMorning();
// })();
// Route to stop the message-sending process
app.post("/api/stop_message_sending", async (req, res) => {
  global.isStoppedSendMorningMessage = true;
  res.json({
    success: true,
    message: "Message sending process has been stopped.",
  });
});
// Route to send the event stream
app.get("/api/send_message_dev", (req, res) => {
  try {
    global.isStoppedSendMorningMessage = false;

    res.setHeader("Content-Type", "application/json");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    // Preventing buffering for better streaming in some environments
    res.flushHeaders(); // Ensure headers are sent immediately

    const sendLog = (log, isError = false) => {
      const message = { log, isError };
      res.write(JSON.stringify(message) + "\n"); // Send JSON as a chunk
    };

    sendMessageFromMorning(sendLog)
      .then(() => {
        sendLog("Task completed", false);
        res.end(); // Finish the response after the task is complete
      })
      .catch((error) => {
        sendLog(`Error occurred: ${error.message}`, true);
        res.end(); // End the response in case of error
      });
  } catch (err) {
    res.status(500).json({ error: "An error occurred while streaming" });
  }
});

const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 1366,
    height: 768,
    autoHideMenuBar: true,
    frame: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });


  // if (process.env.DEGUB) {
  //   win.webContents.loadURL("file://" + __dirname + "index.html");
  // } else {
  //   win.webContents.loadURL("http://127.0.0.1:5173/");
  // }

  win.loadURL("http://localhost:5173/");
}

app.whenReady().then(createWindow);

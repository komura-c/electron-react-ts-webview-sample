import path from "path";
import { app, BrowserWindow, crashReporter } from "electron";
crashReporter.start({
  uploadToServer: false,
});

const isDev = process.env.NODE_ENV === "development";

// 開発モードの場合はホットリロードする
if (isDev) {
  const execPath =
    process.platform === "win32"
      ? "../node_modules/electron/dist/electron.exe"
      : "../node_modules/.bin/electron";

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require("electron-reload")(__dirname, {
    electron: path.resolve(__dirname, execPath),
    forceHardReset: true,
    hardResetMethod: "exit",
  });
}

// BrowserWindow インスタンスを作成する関数
const createWindow = () => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      webviewTag: true,
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.resolve(__dirname, "preload.js"),
    },
  });

  if (isDev) {
    mainWindow.webContents.openDevTools({ mode: "detach" });
  }

  mainWindow.loadFile("index.html");
};

app.on("ready", () => createWindow());

app.once("window-all-closed", () => app.quit());

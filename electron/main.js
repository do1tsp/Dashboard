// Create native application menus and context menus.
//
// For more info, see:
// https://electronjs.org/docs/api/menu

const { app, BrowserWindow, Menu } = require('electron')

app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({ height: 1900, width: 1060 })
  mainWindow.loadFile('index.html')

  const template = [
    {
      label: 'Menü',
      submenu: [
        { role: 'Beenden' },
      ]
    },
  ]

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
})

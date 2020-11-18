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
// bei Navigationsclick
function content(newContent) {
    document.getElementById("content-title").innerHTML = newContent;
	document.getElementById("content-breadcrumb").innerHTML = newContent;
	document.getElementById("content-inner").innerHTML = ("/content.html");
  }
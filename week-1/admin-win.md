# Complete Windows Installation Guide
## Node.js, npm, React & Chocolatey

---

## What You'll Install

- **Chocolatey** - Package manager for Windows (makes installing software easier)
- **Node.js** - JavaScript runtime environment
- **npm** - Node Package Manager (comes with Node.js)
- **React** - JavaScript library for building user interfaces

---

## Part 1: Installing Chocolatey

Chocolatey is a package manager for Windows that makes installing and managing software much easier.

### Step 1: Open PowerShell as Administrator

1. Click the **Start** button (Windows icon in bottom-left corner)
2. Type `PowerShell`
3. **Right-click** on "Windows PowerShell"
4. Click **"Run as administrator"**
5. Click **"Yes"** when asked if you want to allow the app to make changes

You should now see a blue window with white text. This is PowerShell.

### Step 2: Check Execution Policy

In the PowerShell window, type this command and press **Enter**:

```powershell
Get-ExecutionPolicy
```

If it says **"Restricted"**, you need to change it. Type this command and press **Enter**:

```powershell
Set-ExecutionPolicy AllSigned
```

Press **Y** and then **Enter** when asked to confirm.

### Step 3: Install Chocolatey

Copy this entire command, paste it into PowerShell, and press **Enter**:

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

Wait for the installation to complete. You'll see text scrolling by. When it's done, you'll see the prompt again.

### Step 4: Verify Chocolatey Installation

Type this command and press **Enter**:

```powershell
choco --version
```

You should see a version number (like `2.3.0`). If you see this, Chocolatey is installed correctly!

**Close PowerShell completely** by clicking the X or typing `exit` and pressing **Enter**.

---

## Part 2: Installing Node.js and npm

You have two options for installing Node.js. Choose **ONE** method:

### Option A: Using Chocolatey (Recommended)

1. Open **PowerShell as Administrator** again (same as Step 1 above)
2. Type this command and press **Enter**:

```powershell
choco install nodejs-lts -y
```

The `-y` automatically says "yes" to all prompts. Wait for installation to complete.

### Option B: Manual Installation

1. Open your web browser (Chrome, Edge, Firefox, etc.)
2. Go to **https://nodejs.org/**
3. Click the **LTS** button (it will say something like "20.x.x LTS Recommended For Most Users")
4. Wait for the download to finish
5. Go to your **Downloads** folder
6. Double-click the downloaded file (it ends with `.msi`)
7. Click **Next** on each screen
8. Accept the license agreement
9. Keep all default settings
10. Click **Install**
11. Click **Finish** when done

### Step 5: Verify Node.js and npm Installation

1. **Close any open PowerShell or Command Prompt windows**
2. Open a **new** Command Prompt:
   - Press **Windows Key + R**
   - Type `cmd`
   - Press **Enter**
3. Type this command and press **Enter**:

```cmd
node --version
```

You should see something like `v20.11.1`

4. Type this command and press **Enter**:

```cmd
npm --version
```

You should see something like `10.2.4`

If you see version numbers for both, congratulations! Node.js and npm are installed correctly.

---

## Part 3: Installing Visual Studio Code

Visual Studio Code (VS Code) is a free code editor that makes writing code much easier.

### Option A: Using Chocolatey (Recommended)

1. Open **PowerShell as Administrator** (same as before)
2. Type this command and press **Enter**:

```powershell
choco install vscode -y
```

Wait for installation to complete.

### Option B: Manual Installation

1. Open your web browser
2. Go to **https://code.visualstudio.com/**
3. Click the **Download for Windows** button
4. Wait for the download to finish
5. Go to your **Downloads** folder
6. Double-click the downloaded file (ends with `.exe`)
7. Click **I accept the agreement**
8. Click **Next** on each screen
9. **Important**: Check the box that says **"Add to PATH"**
10. Check the box that says **"Create a desktop icon"** (optional but helpful)
11. Click **Next**, then **Install**
12. Click **Finish**

### Verify VS Code Installation

1. Close any open Command Prompt or PowerShell windows
2. Open a **new** Command Prompt
3. Type this command and press **Enter**:

```cmd
code --version
```

You should see a version number. If you do, VS Code is installed correctly!

---

## Part 4: Creating Your First React App

### Step 1: Choose a Location for Your Project

1. Open **File Explorer** (folder icon in taskbar)
2. Go to your **Documents** folder
3. **Right-click** in an empty space
4. Select **New** → **Folder**
5. Name it `MyProjects` and press **Enter**

### Step 2: Open Command Prompt in Your Projects Folder

1. Open the `MyProjects` folder you just created
2. Click in the **address bar** at the top (where it shows the path)
3. Type `cmd` and press **Enter**

A Command Prompt window will open already in your MyProjects folder.

### Step 3: Create Your React App

Type this command and press **Enter** (replace `my-first-app` with whatever you want to name your app):

```cmd
npx create-react-app my-first-app
```

**Important**: App names must be lowercase with no spaces. Use hyphens (-) instead of spaces.

This will take several minutes. You'll see lots of text scrolling by. Be patient and wait until it says "Happy hacking!"

### Step 4: Open Your Project Folder

Type this command and press **Enter** (use your app name if different):

```cmd
cd my-first-app
```

### Step 5: Start Your React App

Type this command and press **Enter**:

```cmd
npm start
```

Wait about 10-20 seconds. Your web browser should automatically open to `http://localhost:3000` and you'll see the React logo spinning!

### Step 5: Start Your React App

Type this command and press **Enter**:

```cmd
npm start
```

Wait about 10-20 seconds. Your web browser should automatically open to `http://localhost:3000` and you'll see the React logo spinning!

**Congratulations!** You just created your first React app!

---

## Part 5: Opening Your Project in VS Code

### Method 1: From Command Prompt (Easiest)

While you're still in your project folder in Command Prompt, type:

```cmd
code .
```

The `.` means "open the current folder". VS Code will open with your project loaded!

### Method 2: From VS Code

1. Open VS Code (double-click the desktop icon or search for "Visual Studio Code" in Start menu)
2. Click **File** → **Open Folder**
3. Navigate to `Documents\MyProjects\my-first-app`
4. Click **Select Folder**

### Getting Familiar with VS Code

Once your project is open in VS Code:

1. Look at the left sidebar - this shows all your project files
2. Click on `src` folder to expand it
3. Click on `App.js` to open it
4. Try changing some text inside the `<div>` tags
5. Press **Ctrl + S** to save
6. Look at your browser - it should automatically update!

### Useful VS Code Extensions for React

1. In VS Code, click the **Extensions** icon on the left sidebar (looks like 4 squares)
2. Search for and install these extensions:
   - **ES7+ React/Redux/React-Native snippets** - Helpful code shortcuts
   - **Prettier - Code formatter** - Automatically formats your code
   - **Auto Rename Tag** - Automatically renames paired HTML/JSX tags
   - **Bracket Pair Colorizer** - Makes matching brackets colorful

---

## Part 6: Stopping and Starting Your App

### To Stop Your App

When you're done working, press **Ctrl + C** in the Command Prompt window where your app is running. Type **Y** and press **Enter** when asked to terminate the batch job.

### To Start Your App Again Later

1. Open Command Prompt
2. Navigate to your project:

```cmd
cd Documents\MyProjects\my-first-app
```

3. Run:

```cmd
npm start
```

---

## Part 7: Useful Commands Reference

### Basic Command Prompt Navigation

```cmd
cd folder-name          # Go into a folder
cd ..                   # Go back one folder
dir                     # List all files and folders
```

### npm Commands

```cmd
npm start               # Start development server
npm install package     # Install a new package
npm run build           # Build for production
npm test                # Run tests
```

### VS Code Keyboard Shortcuts

```
Ctrl + S                # Save file
Ctrl + P                # Quick open file
Ctrl + Shift + P        # Command palette
Ctrl + B                # Toggle sidebar
Ctrl + `                # Open terminal inside VS Code
Ctrl + /                # Comment/uncomment line
Alt + Up/Down           # Move line up/down
Ctrl + D                # Select next occurrence
```

---

## Part 8: Troubleshooting

### "node is not recognized as an internal or external command"

**Solution**: Restart your computer. Windows needs to refresh its environment variables.

### "npm ERR! code ENOENT"

**Solution**: Make sure you're in the correct folder. Use `cd` to navigate to your project folder.

### Port 3000 is already in use

**Solution**: 
- Option 1: Press **Y** when React asks if you want to use a different port
- Option 2: Close any other programs that might be using port 3000

### Chocolatey command not found after installation

**Solution**: 
1. Close all PowerShell windows
2. Open a new PowerShell as Administrator
3. Try the `choco --version` command again

### Installation is taking forever

**Solution**: Be patient! The first time you create a React app, it downloads hundreds of packages. This can take 5-10 minutes depending on your internet speed.

### VS Code won't open from command line

**Solution**:
1. Close and reopen Command Prompt
2. If still doesn't work, uninstall and reinstall VS Code, making sure to check "Add to PATH" during installation

### "code command not found"

**Solution**: Make sure you checked the "Add to PATH" option during VS Code installation. If you didn't:
1. Uninstall VS Code
2. Reinstall it and check "Add to PATH"
3. Restart your computer

---

## Part 9: Next Steps

1. Your project is now open in VS Code
2. Look at the `src` folder - this is where your code lives
3. Open `src/App.js` and try changing the text
4. Save the file (Ctrl + S) and watch your browser automatically update!
5. Visit **https://react.dev/learn** to learn more about React
6. Explore VS Code extensions to make coding easier

### Writing Your First Code

Try this simple exercise:

1. Open `src/App.js` in VS Code
2. Find the line that says `Edit <code>src/App.js</code> and save to reload.`
3. Change it to `Hello! This is my first React app!`
4. Press **Ctrl + S** to save
5. Look at your browser - you should see your new text!

---

## Part 10: Getting Help

If you get stuck:
- Check the error message carefully - it often tells you what's wrong
- Copy the error message and search for it on Google
- Visit Stack Overflow: **https://stackoverflow.com/**
- Check the official documentation: **https://nodejs.org/** and **https://react.dev/**

**Remember**: Every developer gets errors. Don't get discouraged! Learning to read and fix errors is an important skill.

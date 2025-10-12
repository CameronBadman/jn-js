# Complete macOS Installation Guide
## Node.js, npm, React & Homebrew

---

## What You'll Install

- **Homebrew** - Package manager for macOS (makes installing software easier)
- **Node.js** - JavaScript runtime environment
- **npm** - Node Package Manager (comes with Node.js)
- **React** - JavaScript library for building user interfaces

---

## Part 1: Installing Homebrew

Homebrew is a package manager for macOS that makes installing and managing software much easier.

### Step 1: Open Terminal

1. Press **Command (⌘) + Space** to open Spotlight Search
2. Type `Terminal`
3. Press **Enter**

You should see a window with a white or black background and text. This is Terminal.

### Step 2: Install Xcode Command Line Tools

Before installing Homebrew, you need to install Xcode Command Line Tools. In Terminal, type this command and press **Enter**:

```bash
xcode-select --install
```

A popup window will appear asking if you want to install the tools.

1. Click **Install**
2. Click **Agree** to accept the license agreement
3. Wait for the download and installation to complete (this can take 5-15 minutes)
4. Click **Done** when finished

If you get a message saying "command line tools are already installed", that's okay! Move to the next step.

### Step 3: Install Homebrew

Copy this entire command, paste it into Terminal, and press **Enter**:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

You'll be asked to:
1. Press **Enter** to continue
2. Enter your **Mac password** (the one you use to log in to your Mac)
   - **Note**: When you type your password, you won't see any characters appear. This is normal! Just type it and press **Enter**
3. Wait for installation to complete (5-10 minutes)

### Step 4: Add Homebrew to Your PATH

After installation completes, look for text that says something like "Next steps:" or "Run these commands in your terminal".

If you have an **Apple Silicon Mac (M1, M2, M3)**, run these commands:

```bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

If you have an **Intel Mac**, run these commands:

```bash
echo 'eval "$(/usr/local/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/usr/local/bin/brew shellenv)"
```

**Don't know which Mac you have?**
1. Click the **Apple menu** (top-left corner)
2. Select **About This Mac**
3. Look at the **Chip** or **Processor** line
   - If it says "Apple M1", "M2", or "M3" → Apple Silicon
   - If it says "Intel" → Intel Mac

### Step 5: Verify Homebrew Installation

Close Terminal and open a new Terminal window:
1. Press **Command (⌘) + Q** to quit Terminal
2. Open Terminal again (Command + Space, type "Terminal", press Enter)

Type this command and press **Enter**:

```bash
brew --version
```

You should see something like `Homebrew 4.2.1`. If you see this, Homebrew is installed correctly!

---

## Part 2: Installing Node.js and npm

You have two options for installing Node.js. Choose **ONE** method:

### Option A: Using Homebrew (Recommended)

In Terminal, type this command and press **Enter**:

```bash
brew install node
```

Wait for installation to complete. You'll see text scrolling by.

### Option B: Manual Installation

1. Open your web browser (Safari, Chrome, Firefox, etc.)
2. Go to **https://nodejs.org/**
3. Click the **LTS** button (it will say something like "20.x.x LTS Recommended For Most Users")
4. Wait for the download to finish
5. Go to your **Downloads** folder
6. Double-click the downloaded file (it ends with `.pkg`)
7. Click **Continue** on each screen
8. Accept the license agreement
9. Click **Install**
10. Enter your Mac password when prompted
11. Click **Close** when done

### Step 3: Verify Node.js and npm Installation

In Terminal, type this command and press **Enter**:

```bash
node --version
```

You should see something like `v20.11.1`

Type this command and press **Enter**:

```bash
npm --version
```

You should see something like `10.2.4`

If you see version numbers for both, congratulations! Node.js and npm are installed correctly.

---

## Part 3: Installing Visual Studio Code

Visual Studio Code (VS Code) is a free code editor that makes writing code much easier.

### Option A: Using Homebrew (Recommended)

In Terminal, type this command and press **Enter**:

```bash
brew install --cask visual-studio-code
```

The `--cask` flag is used for GUI applications like VS Code.

Wait for installation to complete.

### Option B: Manual Installation

1. Open your web browser
2. Go to **https://code.visualstudio.com/**
3. Click the **Download for Mac** button
4. Wait for the download to finish
5. Go to your **Downloads** folder
6. Double-click the downloaded `.zip` file to extract it
7. Drag the **Visual Studio Code** app to your **Applications** folder
8. Double-click VS Code in Applications to open it
9. Click **Open** when macOS asks if you're sure you want to open it

### Add VS Code to Your PATH

To use the `code` command in Terminal, you need to add it to your PATH:

1. Open VS Code
2. Press **Command (⌘) + Shift + P** to open the Command Palette
3. Type `shell command`
4. Click **"Shell Command: Install 'code' command in PATH"**
5. Enter your Mac password if prompted

### Verify VS Code Installation

In Terminal, type this command and press **Enter**:

```bash
code --version
```

You should see a version number. If you do, VS Code is installed correctly!

---

## Part 4: Creating Your First React App

### Step 1: Choose a Location for Your Project

In Terminal, type these commands one at a time, pressing **Enter** after each:

```bash
cd Documents
mkdir MyProjects
cd MyProjects
```

What these commands do:
- `cd Documents` - Go to your Documents folder
- `mkdir MyProjects` - Create a new folder called MyProjects
- `cd MyProjects` - Go into the MyProjects folder

### Step 2: Create Your React App

Type this command and press **Enter** (replace `my-first-app` with whatever you want to name your app):

```bash
npx create-react-app my-first-app
```

**Important**: App names must be lowercase with no spaces. Use hyphens (-) instead of spaces.

This will take several minutes. You'll see lots of text scrolling by. Be patient and wait until it says "Happy hacking!"

### Step 3: Open Your Project Folder

Type this command and press **Enter** (use your app name if different):

```bash
cd my-first-app
```

### Step 4: Start Your React App

Type this command and press **Enter**:

```bash
npm start
```

Wait about 10-20 seconds. Your web browser should automatically open to `http://localhost:3000` and you'll see the React logo spinning!

**Congratulations!** You just created your first React app!

---

## Part 5: Opening Your Project in VS Code

### Method 1: From Terminal (Easiest)

While you're still in your project folder in Terminal, type:

```bash
code .
```

The `.` means "open the current folder". VS Code will open with your project loaded!

### Method 2: From VS Code

1. Open VS Code from Applications or Spotlight (Command + Space, type "Visual Studio Code")
2. Click **File** → **Open Folder** (or **Open...** on newer versions)
3. Navigate to `Documents/MyProjects/my-first-app`
4. Click **Open**

### Getting Familiar with VS Code

Once your project is open in VS Code:

1. Look at the left sidebar - this shows all your project files
2. Click on `src` folder to expand it
3. Click on `App.js` to open it
4. Try changing some text inside the `<div>` tags
5. Press **Command (⌘) + S** to save
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

When you're done working, press **Control + C** in the Terminal window where your app is running.

### To Start Your App Again Later

1. Open Terminal
2. Navigate to your project:

```bash
cd Documents/MyProjects/my-first-app
```

3. Run:

```bash
npm start
```

---

## Part 7: Useful Commands Reference

### Basic Terminal Navigation

```bash
cd folder-name          # Go into a folder
cd ..                   # Go back one folder
ls                      # List all files and folders
pwd                     # Show current folder path
```

### npm Commands

```bash
npm start               # Start development server
npm install package     # Install a new package
npm run build           # Build for production
npm test                # Run tests
```

### Homebrew Commands

```bash
brew install package    # Install a package
brew update             # Update Homebrew
brew upgrade            # Upgrade all packages
brew list               # List installed packages
```

### VS Code Keyboard Shortcuts

```
Command + S             # Save file
Command + P             # Quick open file
Command + Shift + P     # Command palette
Command + B             # Toggle sidebar
Control + `             # Open terminal inside VS Code
Command + /             # Comment/uncomment line
Option + Up/Down        # Move line up/down
Command + D             # Select next occurrence
```

---

## Part 8: Troubleshooting

### "command not found: node" or "command not found: npm"

**Solution**: 
1. Close Terminal completely (Command + Q)
2. Open a new Terminal window
3. Try the command again

If still not working, reinstall Node.js using Homebrew:

```bash
brew reinstall node
```

### "npm ERR! code ENOENT"

**Solution**: Make sure you're in the correct folder. Use `pwd` to see where you are, then use `cd` to navigate to your project folder.

### Port 3000 is already in use

**Solution**: 
- Option 1: Press **Y** when React asks if you want to use a different port
- Option 2: Find and close any other programs that might be using port 3000
- Option 3: Kill the process using port 3000:

```bash
lsof -ti:3000 | xargs kill -9
```

### Permission errors with npm

**Solution**: If you get "EACCES" permission errors, run this command:

```bash
sudo chown -R $(whoami) ~/.npm
```

Enter your Mac password when prompted.

### Homebrew command not found after installation

**Solution**: 
1. Close all Terminal windows
2. Open a new Terminal window
3. Run the PATH commands from Step 4 of Part 1 again
4. Try the `brew --version` command again

### Installation is taking forever

**Solution**: Be patient! The first time you create a React app, it downloads hundreds of packages. This can take 5-10 minutes depending on your internet speed.

### "Cannot find module" errors

**Solution**: Your project dependencies might not be installed. Navigate to your project folder and run:

```bash
npm install
```

### VS Code won't open from Terminal

**Solution**:
1. Make sure you installed the shell command (see Part 3)
2. Close and reopen Terminal
3. If still doesn't work, open VS Code and reinstall the shell command:
   - Press Command + Shift + P
   - Type "shell command"
   - Click "Shell Command: Install 'code' command in PATH"

### "code command not found"

**Solution**: You need to install the shell command. Open VS Code and:
1. Press **Command + Shift + P**
2. Type `shell command`
3. Click **"Shell Command: Install 'code' command in PATH"**
4. Close and reopen Terminal

---

## Part 9: Keyboard Shortcuts for Terminal

These shortcuts will make using Terminal much easier:

- **Command + T** - Open new tab
- **Command + N** - Open new window
- **Command + K** - Clear screen
- **Command + C** - Stop current command
- **Command + D** - Close tab/window
- **Control + A** - Go to start of line
- **Control + E** - Go to end of line
- **Control + U** - Delete line before cursor

---

## Part 10: Next Steps

1. Your project is now open in VS Code
2. Look at the `src` folder - this is where your code lives
3. Open `src/App.js` and try changing the text
4. Save the file (Command + S) and watch your browser automatically update!
5. Visit **https://react.dev/learn** to learn more about React
6. Explore VS Code extensions to make coding easier

### Writing Your First Code

Try this simple exercise:

1. Open `src/App.js` in VS Code
2. Find the line that says `Edit <code>src/App.js</code> and save to reload.`
3. Change it to `Hello! This is my first React app!`
4. Press **Command + S** to save
5. Look at your browser - you should see your new text!

### Opening Your Project in VS Code from Terminal

Once you have VS Code set up, you can open your project directly from Terminal:

```bash
cd Documents/MyProjects/my-first-app
code .
```

The `.` means "open the current folder"

---

## Part 11: Getting Help

If you get stuck:
- Check the error message carefully - it often tells you what's wrong
- Copy the error message and search for it on Google
- Visit Stack Overflow: **https://stackoverflow.com/**
- Check the official documentation: **https://nodejs.org/** and **https://react.dev/**
- Homebrew docs: **https://docs.brew.sh/**

**Remember**: Every developer gets errors. Don't get discouraged! Learning to read and fix errors is an important skill.

---

## Part 12: Pro Tips

1. **Use Tab completion**: Start typing a folder name and press **Tab** to auto-complete
2. **Use up arrow**: Press the up arrow key to see previous commands
3. **Keep Terminal open**: You can minimize it instead of closing it
4. **Learn keyboard shortcuts**: They'll save you lots of time
5. **Use multiple tabs**: Command + T opens a new tab if you need to run multiple things

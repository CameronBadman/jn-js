# JavaScript Development Setup Guide - macOS

Welcome! This guide will help you install everything you need to start coding in JavaScript on macOS.

## What We're Installing

- **Homebrew** - A package manager to easily install other software
- **Node.js** - Lets you run JavaScript on your computer
- **Git** - Helps you save and track changes to your code
- **VS Code** - A code editor where you'll write your programs

---

## Step 1: Install Homebrew

1. Open the **Terminal** app (press `Cmd + Space`, type "Terminal", and press Enter)
2. Copy and paste this command:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

3. Press **Enter** and follow the instructions
4. You might need to enter your computer password (the letters won't show when you type - that's normal!)
5. **Important**: After installation finishes, the Terminal will show you two commands to run. Copy and run them to add Homebrew to your PATH
6. Type `brew --version` to check it worked

## Step 2: Install Node.js

1. In Terminal, type:

```bash
brew install node
```

2. Press **Enter** and wait
3. Type `node --version` to check it worked

## Step 3: Install Git

1. In Terminal, type:

```bash
brew install git
```

2. Press **Enter** and wait
3. Type `git --version` to check it worked

## Step 4: Install VS Code

1. In Terminal, type:

```bash
brew install --cask visual-studio-code
```

2. Press **Enter** and wait
3. You'll find VS Code in your Applications folder

## Step 5: Verify Everything

1. In Terminal, type each command below and press Enter after each:

```bash
node --version
npm --version
git --version
code --version
```

If all four commands show version numbers, you're all set! 🎉

---

## Test Your Setup

Let's make sure everything works by creating a simple JavaScript program!

1. Open Terminal
2. Type `mkdir javascript-test` and press Enter
3. Type `cd javascript-test` and press Enter
4. Type `code .` and press Enter (VS Code should open!)

### In VS Code:
1. Click "New File" and name it `hello.js`
2. Type: `console.log("Hello, JavaScript!");`
3. Save the file (Cmd+S)
4. Go back to your Terminal window
5. Type `node hello.js` and press Enter
6. You should see: `Hello, JavaScript!`

**Congratulations! You're ready to start coding!** 🚀

---

## Troubleshooting

### Problem: "command not found"

**Solution**: Close your Terminal completely and open a new one. Sometimes you need to restart for the installation to be recognized.

### Problem: Permission errors

**Solution**: You might need to use `sudo` before commands. Ask your instructor for help.

### Problem: Homebrew PATH not found

**Solution**: Make sure you ran the two commands that appeared after Homebrew installation to add it to your PATH. Look back in your Terminal history or reinstall Homebrew.

### Still having issues?

Don't worry! Ask your instructor for help. They're here to support you.

---

## What's Next?

Now that you have everything installed, you're ready to learn JavaScript! Your instructor will guide you through creating your first programs.

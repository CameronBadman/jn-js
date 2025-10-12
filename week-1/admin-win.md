# JavaScript Development Setup Guide - Windows

Welcome! This guide will help you install everything you need to start coding in JavaScript on Windows.

## What We're Installing

- **Chocolatey** - A package manager to easily install other software
- **Node.js** - Lets you run JavaScript on your computer
- **Git** - Helps you save and track changes to your code
- **VS Code** - A code editor where you'll write your programs

---

## Step 1: Install Chocolatey

1. Click the Windows Start button and type `PowerShell`
2. **Right-click** on "Windows PowerShell" and choose **"Run as administrator"**
3. A blue window will open. Copy and paste this entire command (it's long!):

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

4. Press **Enter** and wait for it to finish
5. Type `choco --version` and press Enter. You should see a version number!

## Step 2: Install Node.js

1. In the same PowerShell window (still as administrator), type:

```powershell
choco install nodejs-lts -y
```

2. Press **Enter** and wait (this might take a few minutes)
3. When it's done, type `node --version` and press Enter
4. You should see something like `v20.x.x`

## Step 3: Install Git

1. In PowerShell, type:

```powershell
choco install git -y
```

2. Press **Enter** and wait
3. Type `git --version` to check it worked

## Step 4: Install VS Code

1. In PowerShell, type:

```powershell
choco install vscode -y
```

2. Press **Enter** and wait
3. Once done, close PowerShell and you'll find VS Code in your Start menu

## Step 5: Verify Everything

1. Open a **new** PowerShell window (you can close the administrator one)
2. Type each command below and press Enter after each:

```powershell
node --version
npm --version
git --version
code --version
```

If all four commands show version numbers, you're all set! 🎉

---

## Test Your Setup

Let's make sure everything works by creating a simple JavaScript program!

1. Open PowerShell
2. Type `mkdir javascript-test` and press Enter
3. Type `cd javascript-test` and press Enter
4. Type `code .` and press Enter (VS Code should open!)

### In VS Code:
1. Click "New File" and name it `hello.js`
2. Type: `console.log("Hello, JavaScript!");`
3. Save the file (Ctrl+S)
4. Go back to your PowerShell window
5. Type `node hello.js` and press Enter
6. You should see: `Hello, JavaScript!`

**Congratulations! You're ready to start coding!** 🚀

---

## Troubleshooting

### Problem: "command not found" or "is not recognized"

**Solution**: Close your PowerShell completely and open a new one. Sometimes you need to restart for the installation to be recognized.

### Problem: Chocolatey won't install

**Solution**: Make sure you opened PowerShell as administrator (right-click → Run as administrator).

### Still having issues?

Don't worry! Ask your instructor for help. They're here to support you.

---

## What's Next?

Now that you have everything installed, you're ready to learn JavaScript! Your instructor will guide you through creating your first programs.

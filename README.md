# NativeScript StatusBar plugin
[![Build Status](https://travis-ci.org/PeterStaev/NativeScript-Status-Bar.svg?branch=master)](https://travis-ci.org/PeterStaev/NativeScript-Status-Bar)

A simple NativeScript plugin for controlling status bar visibility.

## Installation
Run the following command from the root of your project:

`tns plugin add nativescript-status-bar`

This command automatically installs the necessary files, as well as stores nativescript-drop-down as a dependency in your project's package.json file.

## API

```TypeScript
// Get reference to the Status Bar plugin module
import statusBar = require("nativescript-status-bar");
```

* **show()**  
Shows the status bar.

* **hide()**  
Hides the status bar.

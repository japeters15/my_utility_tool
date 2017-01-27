# utility tool
 created by Janay Peters in the Web Design and Development program at Full Sail University.

# Purpose
 The purpose of this utilty tool is to allow debugging on your application.

# Installation Process
 First you want to download node by going to www.node.js.org and following the installation process.
 Second you are able to install my debugging tool by adding it to your computer. npm install UtilityTool and it should appear inside of your node_modules folder. Also here are a few commands that could come in handy:
 npm init (creates a package.json in root for you)
 npm list (lists all installed packages)


# Usage
Here are a few steps to get your debugging to work. First you want to call the file by typing const debug = require('UtilityTool'). Afterwards you will have to turn it on by saying DEBUG=true followed by turning on your server for example: DEBUG=true nodemon src/server.js

# Add and Commit
This process will be done by using Gulp, you will type "gulp addAll" in order to add the files to the commit line. Last, you will commit the files by using "gulp commit".

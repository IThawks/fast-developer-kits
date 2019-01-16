'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// 这个是vscode插件命令的入口
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "firstproject" is now active!');
    // -----------------------------------
    //   这里就是命令的注册位置，这里注册的命令就是 extension.sayHello  对应package.json中的 "activationEvents": [
    //     "onCommand:extension.sayHello"
    // ],
    // "main": "./out/extension",
    // "contributes": {
    //     "commands": [
    //         {
    //             "command": "extension.sayHello",
    //             "title": "Hello World"
    //         }
    //     ]
    // },
    let disposable = vscode.commands.registerCommand('extension.sayHello', () => {
        //    这个命令就是弹出提示“Hello World!”
        vscode.window.showInformationMessage('Hello World!');
    });

    context.subscriptions.push(disposable);
    // ------------------------   中间就是完整的命令注册方法
}

// this method is called when your extension is deactivated
export function deactivate() {
}
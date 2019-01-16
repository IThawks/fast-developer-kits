import * as vscode from 'vscode';

export class ProjectOperation {
    constructor() {

    }
    /**
     * 用于创建工程
     * @param context 
     */
    public newproject(context: vscode.ExtensionContext) {

        let disposable = vscode.commands.registerCommand('extension.newProject', (resource) => {
            resource = vscode.Uri;
            console.log(resource)
            //    这个命令就是弹出提示“Hello World!”
            const panel = vscode.window.createWebviewPanel(
                'Create Project', // Identifies the type of the webview. Used internally
                'Create Project', // 这个是弹框的title
                vscode.ViewColumn.One, // 这个是设置页面打开的分屏（One,Two.....）
                {
                    // 让页面支持js
                    enableScripts: true,
                    // 进行页面的持续化
                    retainContextWhenHidden: true
                } // Webview options. More on these later.
            );


            panel.webview.html = this.getWebviewContent();
        });

        context.subscriptions.push(disposable);
    }


    public getWebviewContent() {
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Create Project</title>
        </head>
        <body>
            <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" width="300" />
        </body>
        </html>`;
    }
}
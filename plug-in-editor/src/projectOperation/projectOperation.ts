import * as vscode from 'vscode';

export class ProjectOperation {
    constructor() {

    }
    public newproject(context: vscode.ExtensionContext) {

        let disposable = vscode.commands.registerCommand('extension.newProject', (resource) => {
            resource = vscode.Uri;
            console.log(resource)
            //    这个命令就是弹出提示“Hello World!”
            vscode.window.showInformationMessage("Hello World!");
        });

        context.subscriptions.push(disposable);
    }
}
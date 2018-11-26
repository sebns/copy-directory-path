'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as copyPaste  from 'copy-paste';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "copy-directory-path" is now active!');

    let disposable = vscode.commands.registerCommand('extension.copyDirectoryPath', () => {

        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }

        
        let filename = editor.document.fileName;

        // Extract and return directory path
        if (filename.includes("\\")) {
            let dirPath = filename.substring(0, filename.lastIndexOf('\\'));
            copyPaste.copy(dirPath, () => vscode.window.showInformationMessage(`Directory path "${dirPath}" has been copied to clipboard`));
        } else {
            vscode.window.showErrorMessage(`Could not parse path in "${filename}"!`)
        }
    });

    
    

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}
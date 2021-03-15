import * as vscode from 'vscode';
import { IconExampleTreeDataProvider } from './IconExampleTreeDataProvider';

export function activate() {
	const treeDataProvider = new IconExampleTreeDataProvider();
	vscode.window.registerTreeDataProvider('iconExample', treeDataProvider);
}

import * as vscode from 'vscode';

export class IconExampleTreeDataProvider implements vscode.TreeDataProvider<vscode.TreeItem> {
	getChildren(): vscode.TreeItem[] {
		return [
			new IconExampleTreeItem('account'),
			new IconExampleTreeItem('clippy'),
			new IconExampleTreeItem('folder-active'),
			new IconExampleTreeItem('folder')
		];
	}

	getTreeItem(element: vscode.TreeItem): vscode.TreeItem {
		return element;
	}
}

class IconExampleTreeItem extends vscode.TreeItem {
	public constructor(public label: string) {
		super(label);
	}

	public get iconPath() {
		return new vscode.ThemeIcon(this.label);
	}
}
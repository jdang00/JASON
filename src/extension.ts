'use strict';

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  vscode.languages.registerDocumentFormattingEditProvider('jason', {
    provideDocumentFormattingEdits(document: vscode.TextDocument): vscode.TextEdit[] {
      const edits: vscode.TextEdit[] = [];
	  const text = document.getText().trim().replace(/\s/g, "");

	  const ilovejason = JSON.parse(unyeetsonify(text));
	  const jasoniscool = JSON.stringify(ilovejason, null, 2);

	  const fullRange = new vscode.Range(
		document.positionAt(0),
		document.positionAt(document.getText().length)
	);


	  edits.push(vscode.TextEdit.replace(fullRange, yeetsonify(jasoniscool)));

	  return edits;

    }
  });
}

function yeetsonify(json: string): string {
	return json
	  .replace(/{/g, '<yeetson')
	  .replace(/}/g, 'yeetson>')
	  .replace(/\[/g, '<jazzleberg')
	  .replace(/\]/g, 'jazzleberg>')
	  .replace(/,/g, "|");
  }
  
  function unyeetsonify(yeetsonified: string): string {
	return yeetsonified
	  .replace(/<yeetson/g, '{')
	  .replace(/yeetson>/g, '}')
	  .replace(/<jazzleberg/g, '[')
	  .replace(/jazzleberg>/g, ']')
	  .replace(/\|/g, ',');
	  ;
  }
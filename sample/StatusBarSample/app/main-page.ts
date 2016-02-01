/// <reference path="../node_modules/nativescript-status-bar/status-bar.d.ts" />
import observable = require("data/observable");
import pages = require("ui/page");
import statusBar = require("nativescript-status-bar");

let viewModel: observable.Observable;

export function pageLoaded(args: observable.EventData) 
{
    var page = <pages.Page>args.object;

    viewModel = new observable.Observable();
    viewModel.set("statusBarVisible", true);
    page.bindingContext = viewModel;
}

export function switchTapped(args: observable.EventData)
{
    // NOTE: Reversed logic as on tap the new value is not yet present in the model.
    if (!viewModel.get("statusBarVisible"))
    {
        statusBar.show();
    }
    else
    {
        statusBar.hide();
    }
}
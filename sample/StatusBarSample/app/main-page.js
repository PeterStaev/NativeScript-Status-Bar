var observable = require("data/observable");
var statusBar = require("nativescript-status-bar");
var viewModel;
function pageLoaded(args) {
    var page = args.object;
    viewModel = new observable.Observable();
    viewModel.set("statusBarVisible", true);
    page.bindingContext = viewModel;
}
exports.pageLoaded = pageLoaded;
function switchTapped(args) {
    // NOTE: Reversed logic as on tap the new value is not yet present in the model.
    if (!viewModel.get("statusBarVisible")) {
        statusBar.show();
    }
    else {
        statusBar.hide();
    }
}
exports.switchTapped = switchTapped;

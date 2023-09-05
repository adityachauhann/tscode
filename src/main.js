"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./css/style.css");
var FullList_1 = require("./model/FullList");
var ListItem_1 = require("./model/ListItem");
var ListTemplate_1 = require("./templates/ListTemplate");
var initApp = function () {
    var fullList = FullList_1.default.instance;
    var template = ListTemplate_1.default.instance;
    // Add listener to new entry form submit
    var itemEntryForm = document.getElementById("itemEntryForm");
    itemEntryForm.addEventListener("submit", function (event) {
        event.preventDefault();
        // Get the new item value
        var input = document.getElementById("newItem");
        var newEntryText = input.value.trim();
        if (!newEntryText.length)
            return;
        // calculate item ID
        // The code then calculates the ID for the new item. If there are existing items in the fullList,
        // it calculates the ID based on the last item's ID. Otherwise, it sets the ID to 1.
        var itemId = fullList.list.length
            ? parseInt(fullList.list[fullList.list.length - 1].id) + 1
            : 1;
        // create new item
        var newItem = new ListItem_1.default(itemId.toString(), newEntryText);
        // Add new item to full list
        fullList.addItem(newItem);
        // Re-render list with new item included
        template.render(fullList);
    });
    // Add listener to "Clear" button
    var clearItems = document.getElementById("clearItemsButton");
    clearItems.addEventListener('click', function () {
        fullList.clearList();
        template.clear();
    });
    // load initial data
    fullList.load();
    // initial render of template
    template.render(fullList);
};
document.addEventListener("DOMContentLoaded", initApp);

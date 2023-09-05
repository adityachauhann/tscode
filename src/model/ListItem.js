"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//class which has default export which implements item interface.
var ListItem = /** @class */ (function () {
    //no assignments because i am putting it inside a constructor. 
    //id, item, checked are getters and setters, for state, it would be with an _
    // could assign but it would be double work while compiling.
    function ListItem(_id, _item, _checked) {
        if (_id === void 0) { _id = ''; }
        if (_item === void 0) { _item = ''; }
        if (_checked === void 0) { _checked = false; }
        this._id = _id;
        this._item = _item;
        this._checked = _checked;
    }
    Object.defineProperty(ListItem.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListItem.prototype, "item", {
        get: function () {
            return this._item;
        },
        set: function (item) {
            this._item = item;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListItem.prototype, "checked", {
        get: function () {
            return this._checked;
        },
        set: function (checked) {
            this._checked = checked;
        },
        enumerable: false,
        configurable: true
    });
    return ListItem;
}());
exports.default = ListItem;
//model for our list item

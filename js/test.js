"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
var _1 = require(".");
var apeeMenu = new _1.ApeeMenu();
apeeMenu.setMenuConfig(config_1.menuConfig);
apeeMenu.setLocation(100, 50);
(_a = document.querySelector('button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    apeeMenu.show();
});

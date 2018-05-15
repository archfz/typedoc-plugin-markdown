"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var theme_service_1 = require("../theme.service");
function ifDisplayIndexItem(item, opts) {
    var options = theme_service_1.ThemeService.getOptions();
    if (options.excludePrivate && item.flags.isPrivate) {
        return opts.inverse(this);
    }
    else {
        return opts.fn(this);
    }
}
exports.ifDisplayIndexItem = ifDisplayIndexItem;

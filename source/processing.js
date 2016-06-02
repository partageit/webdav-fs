(function(module) {

	"use strict";

	module.exports = {

		createStat: function(itemInfo) {
			return {
				isFile: function() {
					return itemInfo.type === "file";
				},
				isDirectory: function() {
					return itemInfo.type === "directory";
				},
				checksum: itemInfo.checksum,
				mtime: new Date(itemInfo.lastmod)
			};
		}

	};

})(module);

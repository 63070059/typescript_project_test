"use strict";
exports.__esModule = true;
exports.mergeTwoCollections = void 0;
function mergeTwoCollections(collection_1, collection_2) {
    return sortedCollection.merge(collection_1, collection_2);
}
exports.mergeTwoCollections = mergeTwoCollections;
var sortedCollection = {
    merge: function (collection_1, collection_2) {
        var collections = collection_1.concat(collection_2);
        var done = false;
        while (!done) {
            done = true;
            for (var i = 1; i < collections.length; i++) {
                if (collections[i - 1] > collections[i]) {
                    done = false;
                    var tmp = collections[i - 1];
                    collections[i - 1] = collections[i];
                    collections[i] = tmp;
                }
            }
        }
        return collections;
    }
};
console.log(mergeTwoCollections([4, 6, 7], [1, 2, 3]));

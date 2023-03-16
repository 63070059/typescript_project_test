interface MyInterface {
    merge(collection_1:Array<number>, collection_2:Array<number>): Array<number>
}
export function mergeTwoCollections(collection_1: Array<number>, collection_2: Array<number>) {
    return sortedCollection.merge(collection_1, collection_2)
}
const sortedCollection: MyInterface = {
    merge(collection_1: Array<number>,collection_2: Array<number>): Array<number> {
        let collections = collection_1.concat(collection_2)
        let done = false;
        while (!done) {
            done = true;
            for (let i = 1; i < collections.length; i++) {
                if (collections[i - 1] > collections[i]) {
                    done = false;
                    let tmp = collections[i - 1];
                    collections[i - 1] = collections[i];
                    collections[i] = tmp;
                }
            }
        }
        return collections
    }
}
console.log(mergeTwoCollections([4,6,7], [1,2,3]));
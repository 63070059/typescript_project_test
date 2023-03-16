import { mergeTwoCollections } from '../src/main';
 
describe('testing main file', () => {
  test('Result collection should be sorted', () => {
    expect(mergeTwoCollections([4, 5, 6], [1, 2, 3])).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });
  test('Result collection should merge correctly', () => {
    expect(mergeTwoCollections([1, 2, 3], [1, 4, 5])).toStrictEqual([1, 1, 2, 3, 4, 5]);
  });
});
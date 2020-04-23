import { dew as _baseIterateeDewDew } from "./_baseIteratee.dew.js";
import { dew as _baseSortedIndexByDewDew } from "./_baseSortedIndexBy.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseIteratee = _baseIterateeDewDew(),
      baseSortedIndexBy = _baseSortedIndexByDewDew();
  /**
   * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
   * which is invoked for `value` and each element of `array` to compute their
   * sort ranking. The iteratee is invoked with one argument: (value).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {Array} array The sorted array to inspect.
   * @param {*} value The value to evaluate.
   * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
   * @returns {number} Returns the index at which `value` should be inserted
   *  into `array`.
   * @example
   *
   * var objects = [{ 'x': 4 }, { 'x': 5 }];
   *
   * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
   * // => 1
   *
   * // The `_.property` iteratee shorthand.
   * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
   * // => 1
   */


  function sortedLastIndexBy(array, value, iteratee) {
    return baseSortedIndexBy(array, value, baseIteratee(iteratee, 2), true);
  }

  exports = sortedLastIndexBy;
  return exports;
}
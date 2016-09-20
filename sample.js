import arraySample from './_arraySample.js';
import isArrayLike from './isArrayLike.js';
import values from './values.js';

/**
 * Gets a random element from `collection`.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to sample.
 * @returns {*} Returns the random element.
 * @example
 *
 * _.sample([1, 2, 3, 4]);
 * // => 2
 */
function sample(collection) {
  return arraySample(isArrayLike(collection) ? collection : values(collection));
}

export default sample;
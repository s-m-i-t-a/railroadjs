import { isNil } from 'ramda';


/**
 * Iterates through the functions
 * and calls them with given the parameters
 * and returns the first non-empty result.
 *
 * Example:
 *
 * ```js
 * const f = dispatch(
 *     (value) => { return value > 5 ? 'Value is greater than 5.' : undefined },
 *     (value) => { return value === 5 ? 'Value is 5.' : undefined },
 *     (value) => { return value < 5 ? 'Value is less than 5.' : undefined }
 * );
 *
 * console.log(f(2));  // Value is less then 5.
 * ```
 *
 * @param ...funcs list of dispatched functions
 */
export function dispatch(...funcs: Function[]): Function {
    return function(...args: any[]) {
        for (let fun of funcs) {
            let ret = fun(...args);
            if (!isNil(ret)) return ret;
        }

        return undefined;
    };
}

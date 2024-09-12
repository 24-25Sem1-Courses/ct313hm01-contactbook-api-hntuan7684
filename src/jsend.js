/* eslint-disable no-undef */

/**
* @param {object | null} data
* @returns {{status: 'success', data: object | null}}
*/

function success(data = null) {
    return {
        status: 'success',
        data: data
    };
}

/**
 * @param {string} message - The error message describing the failure.
 * @param {object | null} [data=null] - Optional additional data related to the failure. Defaults to null if not provided.
 * @returns {{status: 'fail', message: string, data: object | null}} 
 */
function fail(message, data = null) {
    if (data) {
        return {
            status: 'fail',
            message,
            data
        };
    }
    return {
        status: 'fail',
        message
    };
}

/**
 * 
 * @param {string} message 
 * @param {*object | null} data 
 * @returns {{status: 'error', message: string, data: object | undefined}}
 */
function error(message, data = null) {
    if (data) {
        return {
            status: 'error',
            message,
            data
        };
    }
    return {
        status: 'error',
        message
    };
}

module.exports = {
    success,
    fail,
    error
}
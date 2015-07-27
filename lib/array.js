'use strict';

// MODULES //

var partial = require( './partial.js' );


// CDF //

/**
* FUNCTION: cdf( out, arr, alpha, beta )
*	Evaluates the cumulative distribution function (CDF) for a Gamma distribution with shape parameter `alpha` and rate parameter `beta` for each array element.
*
* @param {Array|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} out - output array
* @param {Array} arr - input array
* @param {Number} alpha - shape parameter
* @param {Number} beta - rate parameter
* @returns {Number[]|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} output array
*/
function cdf( y, x, alpha, beta ) {
	var len = x.length,
		fcn,
		i;

	fcn = partial( alpha, beta );
	for ( i = 0; i < len; i++ ) {
		if ( typeof x[ i ] === 'number' ) {
			y[ i ] = fcn( x[ i ] );
		} else {
			y[ i ] = NaN;
		}
	}
	return y;
} // end FUNCTION cdf()


// EXPORTS //

module.exports = cdf;

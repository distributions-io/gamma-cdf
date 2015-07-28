'use strict';

// MODULES //

var gammainc = require( 'compute-gammainc' );


// PARTIAL //

/**
* FUNCTION: partial( alpha, beta )
*	Partially applies shape parameter `alpha` and rate parameter `beta` and returns a function for evaluating the cumulative distribution function (CDF) for a Gamma distribution.
*
* @param {Number} alpha - shape parameter
* @param {Number} beta - rate parameter
* @returns {Function} CDF
*/
function partial( alpha, beta ) {

	/**
	* FUNCTION: cdf( x )
	*	Evaluates the cumulative distribution function (CDF) for a Gamma distribution.
	*
	* @private
	* @param {Number} x - input value
	* @returns {Number} evaluated CDF
	*/
	return function cdf( x ) {
		if ( x <= 0 ) {
			return 0;
		}
		return gammainc( beta * x, alpha );
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;

import R from 'ramda';

/**
 *
 * @param prop
 */
export const arrayToObjectByProp = prop => R.pipe( R.indexBy( R.prop( prop ) ) );

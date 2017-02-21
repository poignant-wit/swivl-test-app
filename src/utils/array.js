import R from 'ramda'; 

export const arrayToObjectByProp = prop => R.pipe( R.indexBy( R.prop( prop ) ) );
export const getIds = R.map(item => item.id);

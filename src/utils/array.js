import R from 'ramda'; 

export const arrayToObject = R.pipe( R.indexBy( R.prop( 'id' ) ) );
export const getIds = R.map(item => item.id);

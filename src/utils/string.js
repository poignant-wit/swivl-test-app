import R from 'ramda';

/**
 *
 */
export const getSinceFromLinkHeader = R.pipe(
    R.split( ',' ),
    R.head,
    R.split( ';' ),
    R.head,
    R.split( '=' ),
    R.last,
    R.dropLast( 1 )
);

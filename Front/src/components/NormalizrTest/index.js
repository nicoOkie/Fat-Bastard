/**
 * NPM import
 */
import React from 'react';
import { normalize, schema } from 'normalizr';
/**
 * Local import
 */
import { tourDates, musicians, albums } from 'src/data/data';
/**
 * Code
 */
const maptest = new schema.Entity('map');
const maps = new schema.Entity('maps', {
    maps: [maptest]
});
/**
 * Export
 */
export default NormalizrTest;

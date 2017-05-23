import colors, { labelColors } from './colors';
import anonymous from './anonymous';
import * as loading from './loading';

export default {
    colors,
    labelColors,
    ...anonymous,
    ...loading
};

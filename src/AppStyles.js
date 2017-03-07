import { StyleSheet } from 'aphrodite/no-important';
import { blackSquare } from './SquareStyles';

export default StyleSheet.create({
    container: {
        backgroundColor: '#bfbea7'
    },
    square: {
        ...blackSquare,
        width: '125px',
        height: '125px',
    }
})
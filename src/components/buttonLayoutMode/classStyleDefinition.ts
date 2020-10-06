import { makeStyles }                           from '@material-ui/core/styles';

export const classStyleDefinition = makeStyles(() => ({

    root: {
     backgroundColor:"#FFF",          
    },
    button: {       
        border:'solid 1px #1A237E',
        color:'#303F9F',     
        textTransform:'none',        
    },
    selected: {
        backgroundColor:"#9C27B0",          
        color:'#E1BEE7',     
    }
}
));

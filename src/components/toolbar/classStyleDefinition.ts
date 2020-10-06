import { makeStyles }                           from '@material-ui/core/styles';

export const classStyleDefinition = makeStyles(() => ({

    root: {
     display:"flex",          
    },
    left:{
        display:"flex",          
        flexGrow: 1,
    },
    right: {
        display:"flex",                
    },
    title: {
        display:"flex",   
        flexGrow: 1,                
        paddingTop:8
      },
}
));

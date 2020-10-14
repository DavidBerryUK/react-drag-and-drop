import { deepPurple }                           from '@material-ui/core/colors';
import { makeStyles }                           from '@material-ui/core/styles';

export const classStyleDefinition = makeStyles(() => ({

    root: {
        backgroundColor:'#fff',
        borderRadius: 13,        
        "& button" : {
            borderRadius:12,
            
            color: deepPurple[600],            
        },
        "& button:hover": {
            background: deepPurple[100]
          },
        "& Button.Mui-selected": {
            color: 'white',
            background: deepPurple[400]
          },
          "& Button.Mui-selected:hover": {
            background: deepPurple[500]
          }
        
    }
}
));

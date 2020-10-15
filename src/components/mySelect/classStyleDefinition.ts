import { deepPurple }                           from '@material-ui/core/colors';
import { makeStyles }                           from '@material-ui/core/styles';

export const classStyleDefinition = makeStyles(() => ({
  select: {
    minWidth: 200,
    background: 'white',
    color: deepPurple[600],
    fontWeight: 200,
    borderStyle: 'none',
    borderWidth: 2,
    borderRadius: 12,
    paddingLeft: 24,
    paddingTop: 8,
    paddingBottom: 8,
    boxShadow: '0px 5px 8px -3px rgba(0,0,0,0.14)',
    "&:focus": {
      borderRadius: 12,
      background: 'white',
      borderColor: deepPurple[100]
    },
  },
  icon: {
    color: deepPurple[300],
    right: 12,
    position: 'absolute',
    userSelect: 'none',
    pointerEvents: 'none'
  },
  paper: {
    borderRadius: 12,
    marginTop: 8
  },
  list: {
    paddingTop: 0,
    paddingBottom: 0,
    background: 'white',
    "& li": {
      fontWeight: 200,
      paddingTop: 12,
      paddingBottom: 12,
    },
    "& li:hover": {
      background: deepPurple[100]
    },
    "& li.Mui-selected": {
      color: 'white',
      background: deepPurple[400]
    },
    "& li.Mui-selected:hover": {
      background: deepPurple[500]
    }
  },
  content: {
    display: 'flex',
  },
  contentIcon: {
    display: 'flex',
  },
  contentText: {
    paddingLeft: 8,
    display: 'flex',
    flex: 1,
    alignItems: 'center'
  }
}));
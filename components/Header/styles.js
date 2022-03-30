import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
   title: {
       display: 'none',
       [theme.breakpoints.up('sm')]: {
           display: 'block',
       },
       search: {
           position: 'relative',
           borderRadius: theme.shape.borderRadius,
           backgroundColor: alpha(theme.palete.common.white, 0.15),
           '6:hover': { backgroundColor: alpha(theme.palete.common.white, 0.25) },
           marginRight: theme.spacing(2),
           marginLeft: 0,
           wigth: '100%',
           [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(3), width: 'auto' },
       },
       searchIcon: {
           padding: theme.spacing(0, 2), height: '100%', position: 'absolute', pointerEvents: 'none'
       },
       inputRoot: {
           color: 'inherit',
       },
       inputInput: {
           padding: theme.spacing(1, 1, 1, 0), paddingLeft: 'calc(len + ${theme.spacing(4)}px)', ...
       },
       toolbar: 'flex', justifyContent: 'space-between',
   }, 
}));
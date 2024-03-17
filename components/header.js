import Link from "next/link";
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function Header(){
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['کباب' , 'پیتزا'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton style={{textAlign:'right'}}>
          <Link href={'/archive/1'} style={{color:'#444' , textAlign:'right'}}> {text}</Link>
             </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />

    </Box>
  );

    return (
       <div className="top-header d-flex align-items-center justify-content-between mb-2">
         <div className=""><img src="/assets/images/logo.png" width={'28'}/></div>
         <div className=""><Link href={'/'} style={{color:'#444' , textDecoration:'none'}}>رستوران ارم</Link></div>
         <div className="" onClick={toggleDrawer('right', true)}><img src="/assets/images/archive.svg" width={'28'}/></div>
          <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            {list('right')}
          </Drawer>

         </div>

    )
}
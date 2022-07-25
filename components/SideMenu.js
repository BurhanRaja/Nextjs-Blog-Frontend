import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Close } from '@mui/icons-material';
import Link from 'next/link';

export const SideMenu = (props) => {
    const [state, setState] = useState({
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
            // role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List className='className="bg-gray-600"'>
                <div className='flex justify-end items-center p-3'>
                    <Close className='hover:cursor-pointer' onClick={toggleDrawer(anchor, true)} />
                </div>
                <Link href="/">
                    <ListItem disablePadding>
                        <ListItemButton className='hover:text-white hover:bg-gradient-to-r hover:from-sky-400 hover:to-violet-600'>
                            <ListItemText primary={"Home"} />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <hr className="mx-3" />
                <Link href="/codingBlog">
                    <ListItem disablePadding>
                        <ListItemButton className=' hover:text-white hover:bg-gradient-to-r hover:from-sky-400 hover:to-violet-600'>
                            <ListItemText primary={"Coding Blogs"} />
                        </ListItemButton>
                    </ListItem>
                    </Link>
                    <hr className="mx-3" />
                    <Link href="/spaceBlog">
                    <ListItem disablePadding>
                        <ListItemButton className=' hover:text-white hover:bg-gradient-to-r hover:from-sky-400 hover:to-violet-600'>
                            <ListItemText primary={"Space Blogs"} />
                        </ListItemButton>
                    </ListItem>
                    </Link>
                    <hr className="mx-3" />
            </List>
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer('right', true)} style={{"display":`${props.display}`}}><img src="/menu.svg" className="w-7 h-auto" /></Button>
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
export default SideMenu
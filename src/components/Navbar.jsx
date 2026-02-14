import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Toolbar, Button, Menu, MenuItem, Box, Stack, useTheme, useMediaQuery,IconButton  } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { useAuth } from '../context/AuthContext';


export default function ResponsiveNavbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleOpen = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const navigate = useNavigate();
  const { user } = useAuth();
  const handleClick = () => {
    if (user) {
      if (user.role === "admin") {
        navigate("/admin");
      }
      else {
        navigate("/Profile");
      }
    } else {
      navigate("/Signup");
    }
  };
  return (
    <Toolbar disableGutters >
      {!isMobile && <Stack
        direction="row"
        spacing={2}
        sx={{
          display: 'flex'
        }}
      >
        <Button component={Link} to="/" color='black' >
          Home
        </Button>
        <Button component={Link} to="/mensection" color='black'>
          Men
        </Button>
        <Button component={Link} to="/womensection" color='black'>
          Women
        </Button>
        <Button component={Link} to="/kidsection" color='black'>
          Kids
        </Button>
      </Stack>}

      {isMobile && <Box sx={{
        display: 'inline'
      }}
      >
        <Button
          startIcon={<MenuIcon />}
          onClick={handleOpen}
        >
        </Button>

        <IconButton aria-label="account" onClick={handleClick} sx={{mx:1}}>
          <PermIdentityOutlinedIcon />
        </IconButton>

        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem component={Link} to="/" onClick={handleClose}>
            Home
          </MenuItem>
          <MenuItem component={Link} to="/mensection" onClick={handleClose}>
            Men
          </MenuItem>
          <MenuItem component={Link} to="/womensection" onClick={handleClose}>
            Women
          </MenuItem>
          <MenuItem component={Link} to="/kidsection" onClick={handleClose}>
            Kids
          </MenuItem>
        </Menu>
      </Box>}
    </Toolbar>
  );
}

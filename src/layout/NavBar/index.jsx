import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Logo from '@assets/images/mudarisLogo.png';
import './nav.css';
import { useTranslation } from 'react-i18next';
import CountdownTimer from '../NavBar/countdownTimer/index';
function Navbar() {
  const { t, i18n } = useTranslation('home');
  const [anchorElNav, setAnchorElNav] = useState(null);

  const pages = t('pagesnav', { returnObjects: true });

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    handleCloseNavMenu();
  };

  return (
    <AppBar
      position="static"
      className="Navbar"
      sx={{ background: 'transparent' }}
    >
      <Container
        maxWidth="xl"
        sx={{ borderBottom: '1px solid #aaa', background: 'transparent' }}
      >
        <Toolbar disableGutters>
          {/* Logo */}
          <Typography variant="h6" noWrap component="a">
            <img src={Logo} alt="LOGO" className="navBarLogo" />
          </Typography>
          <div className="timerandMenuDivINNav">
            <CountdownTimer />

            {/* Mobile Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {pages.map((page, i) => (
                  <Button
                    key={i}
                    onClick={() => handleScrollToSection(page.id)}
                    className="nav-menu-btn"
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page.label}
                  </Button>
                ))}
              </Menu>
            </Box>
          </div>
          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <div className="Btns">
              <div className="btnContainer">
                {pages.map((page, i) => (
                  <Button
                    key={i}
                    onClick={() => handleScrollToSection(page.id)}
                    className="nav-menu-btn rubik"
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page.label}
                  </Button>
                ))}
              </div>
              {/* <CountdownTimer /> */}
            </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;

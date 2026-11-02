'use client';
import AdbIcon from '@mui/icons-material/Adb';
import {
  alpha,
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Link,
  Toolbar,
  Typography
} from '@mui/material';

const pages = ['Products', 'Pricing', 'Blog'];

export default function Home() {
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: 'flex', mr: 1 }} />
            <Typography
              variant="h6"
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: 'flex',
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: 'flex' }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  href="/"
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Avatar alt="Remy Sharp" src="/next.svg" />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          borderTop: '5px solid',
          borderColor: alpha('hsl(284, 100%, 50%)', 0.6),
        }}
      >
        <Typography
          variant="body2"
          align="center"
          sx={
            {
              my: 4,
              color: 'common.white',
            }}
        >
          {'Copyright © '}
          <Link color="common.white" href="https://mui.com/">
            Sitemark
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Box>
    </>
  );
}

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { BottomNavigation, BottomNavigationAction, Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import kehadiran from '../../assets/illustation/kehadiran.png';
import listMitra from '../../assets/illustation/list-mitra.png';
import menuAnggota from '../../assets/illustation/menu-anggota.png';
import adupi from '../../assets/logo/adupi-w.png';

const menuList = [
  { title: 'Tambah Mitra', desc: 'Tambah Mitra ADUPI', icon: menuAnggota, link: '/mobile/tambah-mitra' },
  { title: 'List Mitra', desc: 'Daftar Mitra ADUPI', icon: listMitra, link: '/mobile/list-mitra' },
  { title: 'Kehadiran Mitra', desc: 'Cek Kehadiran Mitra Disini', icon: kehadiran, link: '/mobile/list-kehadiran' },
];
export default function FasilitatorHome() {
  const { logoutMobile, auth } = useAuth();
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }} position="static">
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 10, marginTop: 10 }}>
          <img alt="adupi logo" width={50} src={adupi} />
          <Typography
            variant="caption"
            style={{
              wordWrap: 'break-word',
              width: 120,
              borderLeft: '2px solid #fff',
              paddingLeft: 5,
            }}
          >
            ASOSIASI {'\n'} DAUR ULANG {'\n'} PLASTIK INDONESIA
          </Typography>
        </div>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu">
            <AccountCircleIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hai, {auth && auth.user}
          </Typography>
          <Typography style={{ wordWrap: 'break-word', width: 100, textAlign: 'right' }}>
            {' '}
            {auth.role && auth.role.join()}
          </Typography>
          <LocationOnIcon />
        </Toolbar>
      </AppBar>
      <Box sx={{ padding: 3 }}>
        <Typography variant="h3">Selamat Datang,</Typography>
        <Typography>Selamat Pagi!, Semangat Selalu</Typography>
        <Button onClick={logoutMobile} color="error" variant="contained">
          Logout
        </Button>
      </Box>

      <Grid sx={{ padding: 3 }} container spacing={2}>
        {menuList.map((m, i) => (
          <Grid
            onClick={() => navigate(m.link)}
            key={i}
            style={{ padding: 10, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}
            item
            xs={6}
          >
            <div style={{}}>
              <img alt={`menu-${i}`} style={{ width: '100%' }} src={m.icon} />
              <Typography variant="h4">{m.title}</Typography>
              <Typography variant="caption">{m.desc}</Typography>
            </div>
          </Grid>
        ))}
      </Grid>
      <BottomNavigation
        sx={{ position: 'fixed', bottom: 0, margin: '0 auto', left: 0, right: 0 }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Akunku" icon={<AccountCircleIcon />} />
      </BottomNavigation>
    </Box>
  );
}

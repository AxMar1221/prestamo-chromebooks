import { Box, IconButton, Link, Typography } from "@mui/material"
import '/src/styles/Footer.css';
import { GitHub, WhatsApp } from "@mui/icons-material";
let currentYear = new Date().getFullYear();
const tab = <>&nbsp;&nbsp;</>;

export const Footer = () => {
  return (
    <>
      <Box className="footer" mt={2} mb={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="https://avatars.githubusercontent.com/u/85906328?v=4" alt="avatar-github" className="avatar-github" />
          <Typography variant="body2" color="primary" align="center">
            {tab}Profe Tachi
          </Typography>
        </Box>
        <Typography variant="body2" color="primary" align="center">
          &copy; <span>{currentYear}</span> Todos los derechos reservados.
          <Link href="https://github.com/AxMar1221" target="_blank" rel="noopener noreferrer" sx={{ marginLeft: 1 }}>
            <IconButton arial-label="GitHunb">
              <GitHub />
            </IconButton>
          </Link>
          {/* <Link href="https://wa.me/522222592173?text=Hola%20Tachi%20quiero%20ponerme%20en%20contacto%20contigo" target="_blank" rel="noopener noreferrer" sx={{ marginLeft: 1 }}>
            <IconButton arial-label="WhatsApp">
              <WhatsApp />
            </IconButton>
          </Link> */}
        </Typography>
      </Box>
    </>
  )
}
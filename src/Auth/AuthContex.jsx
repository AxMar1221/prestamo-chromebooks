import { useState } from "react";
import { auth, googleProvider } from "../Firebase/FirebaseConfig";
import { signInWithPopup, signOut } from "firebase/auth";

// Componentes de Material UI
import {
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  Stack,
  Box
} from "@mui/material";

// Iconos de MUI
import GoogleIcon from "@mui/icons-material/Google";
import LogoutIcon from "@mui/icons-material/Logout";

export function LoginGoogle() {
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
    } catch (error) {
      console.error("Error al autenticar con Google:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <Box display="flex" sx={{ mt: 4, px: 2 }}>
      <Card sx={{ maxWidth: 380, width: "100%", borderRadius: 3, boxShadow: 4, p: 1 }}>
        <CardContent>
          {user ? (
            /* Vista cuando el usuario está autenticado */
            <Stack spacing={2} >
              <Avatar
                src={user.photoURL}
                alt={user.displayName}
                sx={{ width: 80, height: 80, border: "2px solid #1976d2" }}
              />
              <Typography variant="h6" fontWeight="bold" >
                ¡Bienvenido, {user.displayName}!
              </Typography>
              <Typography variant="body2" color="text.secondary" >
                {user.email}
              </Typography>
              <Button
                variant="outlined"
                color="error"
                startIcon={<LogoutIcon />}
                onClick={handleLogout}
                fullWidth
                sx={{ mt: 1, textTransform: "none", borderRadius: 2 }}
              >
                Cerrar sesión
              </Button>
            </Stack>
          ) : (
            /* Vista cuando no hay usuario autenticado */
            <Stack spacing={2.5} >
              <Typography variant="h5" component="h2" fontWeight="bold" >
                Iniciar Sesión
              </Typography>
              <Typography variant="body2" color="text.secondary" >
                Accede con tu cuenta de Google para gestionar tus préstamos.
              </Typography>
              <Button
                variant="contained"
                startIcon={<GoogleIcon />}
                onClick={handleLogin}
                fullWidth
                sx={{
                  py: 1.2,
                  textTransform: "none",
                  fontSize: "1rem",
                  borderRadius: 2,
                  backgroundColor: "#4285F4",
                  "&:hover": { backgroundColor: "#357ae8" }
                }}
              >
                Continuar con Google
              </Button>
            </Stack>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}
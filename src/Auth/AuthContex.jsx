import { useState } from "react";
import { auth, googleProvider } from "../Firebase/FirebaseConfig";
import { signInWithPopup, signOut } from "firebase/auth";

export function LoginGoogle() {
    const [user, setUser] = useState(null);

    const handleLogin = async () => {
        try {
            // ✅ Pasamos 'auth' y 'googleProvider' como argumentos
            const result = await signInWithPopup(auth, googleProvider);
            setUser(result.user);
        } catch (error) {
            console.error("Error al autenticar con Google:", error);
        }
    };

    const handleLogout = async () => {
        try {
            // ✅ Pasamos 'auth' como argumento
            await signOut(auth);
            setUser(null);
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    };

    return (
        <div>
            <button onClick={handleLogin}>Iniciar sesión con Google</button>
            <button onClick={handleLogout}>Cerrar sesión</button>
            {user ? (
                <p>Bienvenido, {user.displayName}!</p>
            ) : (
                <p>Inicia sesión para continuar.</p>
            )}
        </div>
    );
}
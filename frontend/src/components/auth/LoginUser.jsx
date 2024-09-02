import { useState, useContext } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  Typography,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import { loginUser } from "./auth";
import { AuthContext } from "../../context/AuthContext";
const LoginUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("Attempting to log in with:", email, password);

      const session = await loginUser(email, password);
      setUser(session);
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            type="email"
            label="Email Address"
            name={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name={password}
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            id="password"
          />

          {error && <Typography color="error">{error}</Typography>}
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid>
            <Link href="">Forgot password?</Link>
          </Grid>
          <Grid className="footer">
            <Typography component="h5">
              Do not have an account? <Link href="/register">Sign Up</Link>
            </Typography>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginUser;

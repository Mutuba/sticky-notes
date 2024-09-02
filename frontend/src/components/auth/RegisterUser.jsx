import { useState, useContext } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  TextField,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { registerUser } from "./auth";
import { AuthContext } from "../../context/AuthContext";

const RegisterUser = () => {
  const { setUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const session = await registerUser(email, password);
      setUser(session);
      setSuccess("Registration successful. Please log in.");
      setError("");
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      setError(error.message);
      setSuccess("");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            type="email"
            label="Email Address"
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            id="password"
          />
          {error && <Typography color="error">{error}</Typography>}
          {success && <Typography color="primary">{success}</Typography>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid>
            <Link href="/login">Already have an account? Sign In</Link>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default RegisterUser;

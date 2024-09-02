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
import { AuthContext } from "../../context/AuthContext";

const RegisterUser = () => {
  const { register } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);
    const response = await register(username, email, password);
    setLoading(false);
    if (response.success) {
      setSuccess("Registration successful. Please log in.");
      setTimeout(() => navigate("/"), 2000);
    } else {
      setSuccess("");
      setError(response.message);
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
            id="username"
            type="username"
            label="Username"
            onChange={(e) => setUsername(e.target.value)}
            autoFocus
          />

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
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
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

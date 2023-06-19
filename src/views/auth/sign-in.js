import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Box,
  Button,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";

import { SigninLogo } from "../../assets/snsu";

const SignIn = () => {
  const [showPassword, setShowPassword] =
    useState(false);

  const handleClickShowPassword = () =>
    setShowPassword((show) => !show);

  return (
    <>
      <section className="login-content">
        <Row
          className="m-0 align-items-center bg-white vh-100"
          style={{
            background: `url(${SigninLogo}) no-repeat`,
            backgroundSize: "contain",
          }}
        >
          <Col md="6">
            <Box
              sx={{
                boxShadow: 4,
                padding: 4,
                backgroundColor: (theme) =>
                  theme.palette.background.paper,
                borderRadius: "1em",
                width: "100%",
                maxWidth: "600px",
                margin: "auto",
              }}
            >
              <h4 className="logo-title">SNSU</h4>
              <h2 className="mb-2 text-center">
                Login
              </h2>
              <Form>
                <>
                  <FormControl
                    sx={{
                      width: "100%",
                      my: 1,
                    }}
                  >
                    <TextField
                      id="email"
                      label="Username"
                      variant="outlined"
                    />
                  </FormControl>
                  <FormControl
                    variant="outlined"
                    sx={{
                      width: "100%",
                      my: 1,
                    }}
                  >
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={
                        showPassword
                          ? "text"
                          : "password"
                      }
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={
                              handleClickShowPassword
                            }
                            edge="end"
                          >
                            {showPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>
                  <Col className="d-flex justify-content-between p-0">
                    <Form.Check className="form-check mb-3">
                      <Form.Check.Input
                        type="checkbox"
                        id="customCheck1"
                      />
                      <Form.Check.Label htmlFor="customCheck1">
                        Remember Me
                      </Form.Check.Label>
                    </Form.Check>
                    {/* TODO- Create admission route and page */}
                    <Link to="/admission">
                      Freshmen? Click me
                    </Link>
                  </Col>
                </>
                <Button
                  onClick={() => alert("Login")}
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  sx={{ color: "white" }}
                >
                  Login
                </Button>
              </Form>
            </Box>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default SignIn;

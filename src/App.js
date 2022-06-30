import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import About from "./screens/About";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column sitecontainer">
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <NavbarBrand>shoppin</NavbarBrand>
              </LinkContainer>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/about/:name" element={<About />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <p className="text-center">
            all rights reserved <br />
            2022
          </p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

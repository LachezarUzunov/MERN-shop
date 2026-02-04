import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <Header />
            <main className='py-3'>
                <Container>
                    <h1>Welcome to Rock Shop</h1>
                    <h2>This is a nice shop</h2>
                </Container>
            </main>
            <Footer />
        </>
    )
}

export default App;
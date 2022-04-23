import AddCartButton from "./addCartButton"
import Footer from "./footer"
import Header from "./header"

export default function Layout({ children }) {
    return (        
        <>
            <Header />
            <AddCartButton />
            <Footer />
        </>   
    )
}
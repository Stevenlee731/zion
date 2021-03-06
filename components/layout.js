import Header from "./header";
import Footer from "./footer";

function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen font-sans text-gray-900">
            <Header />

            <main className="flex-1 w-full mx-auto ">
                {children}
            </main>

            <Footer/>
        </div>
    );
}

export default Layout;

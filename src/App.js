import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import Quote from "./components/Quote";

function App() {
    const [showLoading, setShowLoading] = useState(true);

    useEffect(() => {
        let timer = setTimeout(() => setShowLoading(false), 2000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className="body__container">
            {showLoading && <LoadingScreen />}

            <div
                className={`main__container ${
                    showLoading ? "invisible" : "visible"
                }`}
            >
                <Quote />
                <Footer />
            </div>
        </div>
    );
}

export default App;

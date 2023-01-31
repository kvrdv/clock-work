import Header from '../Header/Header';
import Clock from '../Clock/Clock';
import Footer from '../Footer/Footer';
import './App.css';

export default function App() {
    return (
        <div className="app">
            <Header />
            <Clock />
            <Footer />
        </div>
    );
}

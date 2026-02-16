import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Header/Navbar';

const Root = () => {
    return (
        <div className='flex flex-col min-h-screen bg-white dark:bg-dark-bg text-gray-900 dark:text-gray-100'>
            <Navbar />
            <main className='flex-grow'>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Root;
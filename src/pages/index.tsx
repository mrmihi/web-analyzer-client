import { Route, Routes, useLocation } from 'react-router-dom';
import { NotFound } from './404';
import { Home } from './home';

const Pages = () => {
    const location = useLocation();
    return (
        <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default Pages;

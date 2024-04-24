import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';

const Layout = ({ children }) => {
    const [businessData, setBusinessData] = useState(null);
    const params = useParams();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://www.admin.bizzata.in/custom/rest/api.php?getUserBusinessData=true&businessId=' + params.businessId);
                const data = await response.json();
                setBusinessData(data);
            } catch (error) {
                console.error('Error fetching category data:', error);
            }
        };
        fetchData();
    }, [params.businessId]);
    return (
        <div>
            <Navbar />
            {children}
            <Footer businessData={businessData} />
        </div>
    );
};

export default Layout;

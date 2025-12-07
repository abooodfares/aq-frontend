import React from 'react';
import Map from './components/Map';

import { AppProvider } from './context/AppContext';

const App: React.FC = () => {
    return (
        <AppProvider>
            <Map />
        </AppProvider>
    );
};

export default App;

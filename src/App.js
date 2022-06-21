import Homepage from './container/Homepage';
import Movies from './container/Movies';
import Series from './container/Series';
import Schedule from './container/Schedule';
import Navigation from './component/Navigation';
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';
const App = () => {

    const [selectedLanguage, setSelectedLanguage] = useState('')
    return (
        <>
            <Navigation changeLanguage={setSelectedLanguage} />
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/movies' element={<Movies language={selectedLanguage} />} />
                <Route path='/series' element={<Series language={selectedLanguage} />} />
                <Route path='/schedule' element={<Schedule />} />
            </Routes>
        </>
    )
}

export default App;

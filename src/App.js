import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import NotFound from './pages/NotFound/Notfound'
import { useLocation } from 'react-router-dom'
import Accomodation from './pages/Accomodation/Accomodation'
import { Navigate } from 'react-router-dom'

function App({ id }) {
    const location = useLocation()

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/accomodation/:id" element={<Accomodation />} />
                <Route path="/*" element={<NotFound />} />
                <Route
                    path="/notfound"
                    element={() =>
                        (location.pathname = '/' ? (
                            <Home />
                        ) : (
                            <Navigate to="/*" />
                        ))
                    }
                />
                <Route
                    path="/notfound"
                    element={() =>
                        (location.pathname = '/about' ? (
                            <About />
                        ) : (
                            <Navigate to="/*" />
                        ))
                    }
                />
                <Route
                    path="/accomodation/:{id}"
                    element={() => {
                        location.pathname = `/accomodation/${id}` ? (
                            <Accomodation />
                        ) : (
                            <Navigate to="/*" />
                        )
                    }}
                />
            </Routes>
        </div>
    )
}

export default App

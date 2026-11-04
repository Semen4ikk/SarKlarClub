import {MainPage} from "./pages/main-page/main-page.tsx";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {Layout} from "./app/layout/layout.tsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<MainPage />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App

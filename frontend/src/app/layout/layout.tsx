import { Outlet } from 'react-router-dom';
import {Header} from "../../widgets/header/header.tsx";
import {Footer} from "../../widgets/footer/footer.tsx";

export function Layout() {
    return (
        <div className="layout">
            <Header />
            <main className="layoutContent">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

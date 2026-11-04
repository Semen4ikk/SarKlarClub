import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./header.module.css";

const links = [
    { to: "/", label: "Мейн" },
    { to: "/video", label: "Концерты" },
    { to: "/posts", label: "Посты" },
];

export function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
            <div className={styles.inner}>
                <NavLink to="/" className={styles.logo}>
                    SarKlarClub
                </NavLink>

                <nav className={styles.nav} aria-label="Основная навигация">
                    {links.map(({ to, label }) => (
                        <NavLink
                            key={to}
                            to={to}
                            end={to === "/"}
                            className={({ isActive }) =>
                                isActive ? `${styles.link} ${styles.linkActive}` : styles.link
                            }
                        >
                            {label}
                        </NavLink>
                    ))}
                </nav>

                <NavLink to="/signup" className={styles.cta}>
                    Присоединиться
                </NavLink>
            </div>
        </header>
    );
}
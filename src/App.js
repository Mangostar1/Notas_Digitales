import React, {useEffect, useState} from 'react'

export default function App() {
    const [nav, setNav] = useState(0)

    return(
        <>
            <header>
                <div>Logo</div>
                <nav>
                    <ul>
                        <li>Inicio</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>
                </nav>
            </header>
            <main>
                {/* aca se cargaran los componentes */}
            </main>
        </>
    );
}
import React, {useEffect, useState} from 'react'

export default function App() {
    const [nav, setNav] = useState(0)

    return(
        <>
            <header>
                <div>Logo</div>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
            <main>
                
            </main>
        </>
    );
}
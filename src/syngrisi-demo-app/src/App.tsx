import { ThemeProvider } from './ThemeProvider';
import { Graph } from './Graph/Graph';
import { useState } from 'react';
import { ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { Layout } from './Layout';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { Lorem } from './Lorem';


export default function App() {
    const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    return (
        <BrowserRouter>
            <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                <ThemeProvider colorScheme={colorScheme}>
                    <Routes>
                        <Route path="/" element={<Layout />} />
                        <Route path="/lorem" element={<Lorem />} />
                    </Routes>
                    {/*<Layout />*/}
                </ThemeProvider>
            </ColorSchemeProvider>
        </BrowserRouter>

    );
}

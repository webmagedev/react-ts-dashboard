import {useState} from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {ColorModeContext, useMode} from "./theme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import Dashboard from "@pages/Dashboard";
import Sidebar from "@components/Sidebar";
import Topbar from "@components/Topbar";

function App() {
    const [theme, colorMode] = useMode();
    const [isSidebar, setIsSidebar] = useState(true);

    return (
        <BrowserRouter>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <div className="app">
                        <Sidebar isSidebar={isSidebar}/>
                        <main className="content">
                            <Topbar setIsSidebar={setIsSidebar}/>
                            <Routes>
                                <Route path="/" element={<Dashboard/>}/>
                            </Routes>
                        </main>
                    </div>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </BrowserRouter>
    );
}

export default App;

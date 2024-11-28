import {useState} from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {ColorModeContext, useMode} from "./theme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import Dashboard from "@pages/Dashboard";
import Contacts from "@pages/Contacts";
import Sidebar from "@components/Sidebar";
import Topbar from "@components/Topbar";
import Team from "@pages/Team";
import Invoices from "@pages/Invoices";
import Form from "@pages/Form";
import Faq from "@pages/Faq";
import Calendar from "@pages/Calendar";

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
                                {/*//TODO: add interfaces to all pages*/}
                                <Route path="/" element={<Dashboard/>}/>
                                <Route path="/contacts" element={<Contacts />} />
                                <Route path="/team" element={<Team />} />
                                <Route path="/invoices" element={<Invoices />} />
                                <Route path="/form" element={<Form />} />
                                <Route path="/faq" element={<Faq />} />
                                <Route path="/calendar" element={<Calendar />} />
                            </Routes>
                        </main>
                    </div>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </BrowserRouter>
    );
}

export default App;

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
import Bar from "@pages/Bar";
import Calendar from "@pages/Calendar";
import Pie from "@pages/Pie";
import Line from "@pages/Line";
import Geography from "@pages/Geography";

function App() {
    const [theme, colorMode] = useMode();

    return (
        <BrowserRouter>
            {/*// @ts-expect-error find solution how to fix value type*/}
            <ColorModeContext.Provider value={colorMode}>
                {/*// @ts-expect-error find solution how to fix theme type*/}
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <div className="app">
                        <Sidebar/>
                        <main className="content">
                            <Topbar/>
                            <Routes>
                                <Route path="/" element={<Dashboard/>}/>
                                <Route path="/contacts" element={<Contacts/>}/>
                                <Route path="/team" element={<Team/>}/>
                                <Route path="/invoices" element={<Invoices/>}/>
                                <Route path="/form" element={<Form/>}/>
                                <Route path="/faq" element={<Faq/>}/>
                                <Route path="/calendar" element={<Calendar/>}/>
                                <Route path="/bar" element={<Bar/>}/>
                                <Route path="/pie" element={<Pie/>}/>
                                <Route path="/line" element={<Line/>}/>
                                <Route path="/geography" element={<Geography/>}/>
                            </Routes>
                        </main>
                    </div>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </BrowserRouter>
    );
}

export default App;

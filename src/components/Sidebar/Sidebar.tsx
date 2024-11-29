import {ReactNode, useState} from "react";
import {ProSidebar, Menu, MenuItem} from "react-pro-sidebar";
import {Box, IconButton, Typography, useTheme} from "@mui/material";
import {Link, useLocation} from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import {tokens} from "@/theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

interface Props {
    title: string;
    to: string;
    icon: ReactNode;
}

const NavItem = ({title, to, icon}: Props) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const location = useLocation();

    return (
        <MenuItem
            active={location.pathname === to}
            style={{
                color: colors?.grey[100],
            }}
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to}/>
        </MenuItem>
    );
};

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`,
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important",
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important",
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important",
                },
            }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    {/* LOGO AND MENU ICON */}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon/> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100],
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >
                                <Typography variant="h3" color={colors.grey[100]}>
                                    Dashboard
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon/>
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img
                                    alt="profile-user"
                                    width="100px"
                                    height="100px"
                                    src={`/user.png`}
                                    style={{cursor: "pointer", borderRadius: "50%"}}
                                />
                            </Box>
                            <Box textAlign="center">
                                <Typography
                                    variant="h2"
                                    color={colors.grey[100]}
                                    fontWeight="bold"
                                    sx={{m: "10px 0 0 0"}}
                                >
                                    Ram G.
                                </Typography>
                                <Typography variant="h5" color={colors.secondaryAccent[500]}>
                                    Admin
                                </Typography>
                            </Box>
                        </Box>
                    )}

                    <Box>
                        <NavItem
                            title="Dashboard"
                            to="/"
                            icon={<HomeOutlinedIcon/>}
                        />
                    </Box>

                    <Typography
                        variant="h6"
                        color={colors.grey[300]}
                        sx={{m: "15px 0 5px 20px"}}
                    >
                        Data
                    </Typography>
                    <NavItem
                        title="Manage Team"
                        to="/team"
                        icon={<PeopleOutlinedIcon/>}
                    />
                    <NavItem
                        title="Contacts Information"
                        to="/contacts"
                        icon={<ContactsOutlinedIcon/>}
                    />
                    <NavItem
                        title="Invoices Balances"
                        to="/invoices"
                        icon={<ReceiptOutlinedIcon/>}
                    />

                    <Typography
                        variant="h6"
                        color={colors.grey[300]}
                        sx={{ m: "15px 0 5px 20px" }}
                    >
                        Pages
                    </Typography>
                    <NavItem
                        title="Profile Form"
                        to="/form"
                        icon={<PersonOutlinedIcon />}
                    />
                    <NavItem
                        title="Calendar"
                        to="/calendar"
                        icon={<CalendarTodayOutlinedIcon />}
                    />
                    <NavItem
                        title="FAQ Page"
                        to="/faq"
                        icon={<HelpOutlineOutlinedIcon />}
                    />

                    <Typography
                        variant="h6"
                        color={colors.grey[300]}
                        sx={{ m: "15px 0 5px 20px" }}
                    >
                        Charts
                    </Typography>
                    <NavItem
                        title="Bar Chart"
                        to="/bar"
                        icon={<BarChartOutlinedIcon />}
                    />
                    <NavItem
                        title="Pie Chart"
                        to="/pie"
                        icon={<PieChartOutlineOutlinedIcon />}
                    />
                    <NavItem
                        title="Line Chart"
                        to="/line"
                        icon={<TimelineOutlinedIcon />}
                    />
                    <NavItem
                        title="Geography Chart"
                        to="/geography"
                        icon={<MapOutlinedIcon />}
                    />
                </Menu>
            </ProSidebar>
        </Box>
    );
};

export default Sidebar;

import {Box, Typography, useTheme} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import {tokens} from "@/theme";
import {mockDataTeam} from "@/data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "@/components/Header";

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        {field: "id", headerName: "ID"},
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "age",
            headerName: "Age",
            type: "number",
            headerAlign: "left",
            align: "left",
        },
        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1,
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
        },
        {
            field: "accessLevel",
            headerName: "Access Level",
            flex: 1,
            renderCell: ({row: {access}}: {
                row: {
                    id: number;
                    name: string;
                    email: string;
                    age: number;
                    phone: string;
                    access: string;
                }
            }) => {
                return (
                    <Box
                        width="60%"
                        m="0 auto"
                        p="5px"
                        display="flex"
                        justifyContent="center"
                        borderRadius="4px"
                        sx={{
                            backgroundColor: access === "admin"
                                ? colors.secondaryAccent[600]
                                : access === "manager"
                                    ? colors.secondaryAccent[700]
                                    : colors.secondaryAccent[700]
                        }}
                    >
                        {access === "admin" && <AdminPanelSettingsOutlinedIcon/>}
                        {access === "manager" && <SecurityOutlinedIcon/>}
                        {access === "user" && <LockOpenOutlinedIcon/>}
                        <Typography color={colors.grey[100]} sx={{ml: "5px"}}>
                            {access}
                        </Typography>
                    </Box>
                );
            },
        },
    ];

    return (
        <Box m="20px">
            <Header title="TEAM" subtitle="Managing the Team Members"/>
            <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: colors.secondaryAccent[300],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.lightAccent[700],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.lightAccent[700],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.secondaryAccent[200]} !important`,
                    },
                    "& .MuiDataGrid-row--borderBottom": {
                        backgroundColor: `${colors.lightAccent[700]} !important`,
                    },
                }}
            >
                {/*// @ts-expect-error should find solution how to type columns*/}
                <DataGrid checkboxSelection rows={mockDataTeam} columns={columns}/>
            </Box>
        </Box>
    );
};

export default Team;

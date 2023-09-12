'use client'
import DashboardNav from "@/components/navigation/DashboardNav";
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'

import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Collapse from '@mui/material/Collapse'
import Paper from '@mui/material/Paper'
import List from '@mui/material/List'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'

import Typography from '@mui/material/Typography'

type CustomerObject = {
    name: string;
}

const Dashboard = ({name}: CustomerObject) => {
    return (
        <div className="w-screen h-screen overflow-hidden">
            <DashboardNav/>
            <main className="w-full h-full">
                <Paper className="dashboardContent">
                    <div className="w-full h-full ml-2 mr-2">

                        <ButtonGroup className="dbButtonGroup">
                            <Button className="primaryDbButton" variant="outlined"> Add Customer </Button>
                            <Button className="secondaryDbButton"> Edit Customer </Button>
                        </ButtonGroup>
                        <Stack direction="row" spacing={2} className="customerContainer">
                            {/* Customer Card Start */}
                            <Card className="cardContainer">
                                <CardContent className="detailsSection">
                                    <div className="w-full h-full ">
                                        <div className="contactDetails">
                                            <Typography variant="h6" className="contactTitle">Zellars, Cheree</Typography>
                                            <div className="flex items-center laptop:mt-4">
                                                <FormatListBulletedIcon className="laptop:w-8 laptop:h-8"/>
                                                <Button
                                                    className="viewDetailsBtn">View Details</Button>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="invoiceButtonContainer">
                                        <Button className="invoiceButton">$100</Button>
                                    </div>
                                </CardContent>

                                <Divider className="mt-4 divider"/>

                                {/*TODO List / Action Items - Integrates with TODO List app*/}
                                <div className="todoContainer">
                                    <CardContent>
                                        <CardActionArea>
                                            <CardActions>
                                                <h5>TODO LISTS COMING SOON!</h5>
                                            </CardActions>
                                        </CardActionArea>


                                    </CardContent>
                                </div>
                            </Card>
                            {/*Customer Card End*/}
                        </Stack>
                    </div>

                </Paper>
            </main>
        </div>
    )

}

export default Dashboard
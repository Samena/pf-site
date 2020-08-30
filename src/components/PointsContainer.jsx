import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Points } from "./Points";

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2)
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
    },
    heroButtons: {
        marginTop: theme.spacing(4)
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8)
    },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column"
    },
    cardContent: {
        flexGrow: 1,
        padding: "100px"
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6)
    }
}));

const cards = [
    {
        title: "Bulk Lab",

        description: [
            "The Multibase Bulk Sampling Laboratory database system is designed to securely record historic sampling data for laboratories.",
            " The system stores full historic records of clients, sites, batches and fibre analysis.",
            "The system automatically checks that the data is entered correctly."
            ,"The system contains two levels of password protection, one for management which is required when printing financial reports and entering analyst details. The other password is for each analyst and used when entering fibre details.",
            "Data can be entered using a touch sensitive monitor and bar code reader no keyboard or mouse are required. Simply scan the sample with the bar code reader, the program automatically selects the correct sample, then enter the fibre analysis data using the selection boxes on the touch sensitive monitor.",
            "The Bulk Certificate can be printed or generated into a PDF file, ready to be emailed to the client by clicking a single button. Reports can be generated that show financial details over a period of time. The Analyst report shows all fibres entered for a selected time period along with the client, site, batch details, which fibres passed the built in system accuracy tests and how many samples were entered within the 24 hour period. Should the recommended 24 hour limited be exceeded the system displays a list of samples that have been subject to additional quality control procedures.",
            "Also, a summary list can be produced to show samples for the invoice. Batches of samples can automatically be added to an invoice by clicking a single button.",
            "The program can be used over a network on as many PC’s as required. Allowing users to be working on similar things at the same time",
        ]
    },
    {
        title: "Survey",
        subheader: "Most popular",

        description: [
            "The Multibase Survey Database system is designed to electronically record and control occurrences of asbestos in buildings and other structures. Comprehensive reports can be printed and electronic versions of these reports can be distributed via e-mail. Full historic information concerning each occurrence of asbestos can be stored within the database along with the current Material and Priority assessment of risk."
,"The system complies with the latest regulations including HSG264 and the HSE publication titled -  " ,
"'A comprehensive guide to managing asbestos in premises'",
"The database contains 27 standard reports which can be printed individually or selected in any order to be sent directly to your printer or generated into a PDF file.",
"The Custom Filter report allows the user to filter the list of ACM’s as required. For example you could show a list of ACM’s that are on the Second Floor, in the Admin Office, that are in the Risk Band of High Risk and involve Floor Tiles. The system would instantly show a list of ACM’s that match this criteria."
        ]
    },
    {
        title: "Removal",

        description: [
            "This database is a dedicated system for Asbestos Removal and Building Demolition companies. It has been developed to include features which will help you track employees records, training and all aspects of jobs and their cost"
    ,"Main Features include : Enquiries, Jobs, Employees, Stock, Plant, and Respirators.",
    "Scans and Documentation - You can enter scanned documents for the Employees section.",
    "HSE Employee Print All - Employee's screen that prints (or PDF) all relevant details concerning a selected employee.",
    "Password Security - A password can be entered if required to enter any of the major areas.",
    "Employee Category - Each employee can now be marked with an category.",
  ]
    }
];

export default function PointsContainer() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="textPrimary"
                            gutterBottom
                        >
                            Our Systems
                        </Typography>
                        <Typography
                            variant="h5"
                            align="center"
                            color="textSecondary"
                            paragraph
                        >
                            Learn more about our systems below. To buy points select the number you
                            require click the PayPal button below. We will call you
                            with the code as soon as possible for the purchased points.
                        </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Points></Points>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="lg">
                    <Grid container spacing={5} alignItems="flex-end">
                        {cards.map(card => (
                            <Grid item key={card.title} xs={12} md={20}>
                                <Card>
                                    <CardHeader
                                        title={card.title}
                                        subheader={card.subheader}
                                        titleTypographyProps={{
                                            align: "center"
                                        }}
                                        subheaderTypographyProps={{
                                            align: "center"
                                        }}
                                        className={classes.cardHeader}
                                    />
                                    <CardContent>
                                        <p>
                                            {card.description.map(line => (
                                                <Typography
                                                    variant="subtitle1"
                                                    component="mainBody"
                                                    key={line}
                                                    gutterBottom
                                                >
                                                    {line}
                                                </Typography>
                                            ))}
                                        </p>
                                    </CardContent>
                                    <CardActions>
                                        <Button
                                            fullWidth
                                            variant={card.buttonVariant}
                                            color="primary"
                                        >
                                            {cards.buttonText}
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
}

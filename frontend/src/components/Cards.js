import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link, Outlet, useNavigate } from "react-router-dom";

function Cards(props) {
    return (
        <div>
                <Grid
                container
                spacing={2}
                direction="row"
                alignItems="center"
                justify="center"
                className="grid--container"
            >
                {props.items.map((item) => (
                <Grid item xs={12} sm={6} md={3} key={props.items.indexOf(item)}>
                    <Button>
                    <Link to="/item">
                        <Card sx={{ minWidth: 275, maxWidth: 345 }} className="card">
                        <CardMedia />
                        <CardHeader title={item.title} />
                        <CardContent className="card--content">
                            <Typography variant="body">{item.description}</Typography>
                        </CardContent>
                        </Card>
                    </Link>
                    </Button>
                </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Cards

import React from "react";
import cars from "../cars.json";
import { Container, Paper, Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  card: {
    height: 200,
    padding: 40,
  },
  container: {
    marginTop: 50,
  },
}));

const Car = (props) => {
  const id = parseInt(props.match.params.id);
  const thisCar = cars.filter((car) => car.id === id);
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="sm">
      <Paper className={classes.card} elevation={3}>
        <h2>{thisCar[0].Name}</h2>
        <div className={classes.root}>
          <Chip label={`id: ${thisCar[0].id}`}></Chip>
          <Chip label={`Name: ${thisCar[0].Name}`}></Chip>
          <Chip
            label={`Miles Per Gallon: ${thisCar[0].Miles_per_Gallon}`}
          ></Chip>
          <Chip label={`Cylinders: ${thisCar[0].Cylinders}`}></Chip>
          <Chip label={`Displacement: ${thisCar[0].Displacement}`}></Chip>
          <Chip label={`Horsepower: ${thisCar[0].Horsepower}`}></Chip>
          <Chip
            label={`Weight (in pounds): ${thisCar[0].Weight_in_lbs}`}
          ></Chip>
          <Chip label={`Acceleration: ${thisCar[0].Acceleration}`}></Chip>
          <Chip label={`Year: ${thisCar[0].Year}`}></Chip>
          <Chip label={`Origin: ${thisCar[0].Origin}`}></Chip>
        </div>
      </Paper>
    </Container>
  );
};

export default Car;

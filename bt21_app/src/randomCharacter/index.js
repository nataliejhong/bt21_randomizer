import koya from "../bt21_photos/koya.jpeg";
import chimmy from "../bt21_photos/chimmy.png";
import kooky from "../bt21_photos/kooky.png";
import mang from "../bt21_photos/mang.png";
import rj from "../bt21_photos/rj.jpeg";
import shooky from "../bt21_photos/shooky.png";
import tata from "../bt21_photos/tata.jpeg";
import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material";

function RandomCharacter() {
  var images = [
    {
      name: "Koya",
      image: koya,
    },
    {
      name: "Chimmy",
      image: chimmy,
    },
    {
      name: "Kooky",
      image: kooky,
    },
    {
      name: "Mang",
      image: mang,
    },
    {
      name: "Rj",
      image: rj,
    },
    {
      name: "Shooky",
      image: shooky,
    },
    {
      name: "Tata",
      image: tata,
    },
  ];
  let index = Math.floor(Math.random() * images.length);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <h2>The character you got is {images[index].name}</h2>
      <Card
        sx={{
          maxWidth: 345,
        }}
      >
        <CardMedia
          component="img"
          height="400"
          image={images[index].image}
          alt={images[index].name}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Your character is blah blah love and peace baby!!
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default RandomCharacter;

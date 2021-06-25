import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running shoes",
    price: "$5",
    image:
      "https://cdn.vox-cdn.com/thumbor/6_tZq0BoeaVG1_yVI1ly29bCMVE=/0x0:2048x1280/920x613/filters:focal(861x477:1187x803):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69045732/Exbfpl2WgAAQkl8_resized.0.jpeg",
  },
  {
    id: 2,
    name: "MacBook",
    description: "Apple macbook",
    price: "$6",
    image:
      "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_78976645/fee_786_587_png/APPLE-MacBook-Air-13.3-%282020%29---Zilver-M1-512GB-8GB",
  },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;

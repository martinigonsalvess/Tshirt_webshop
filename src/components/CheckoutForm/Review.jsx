import React from "react";
import { Typography, List, ListItem, ListItemText } from "@material-ui/core";

const Review = () => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {checkoutToken.live.line_items.map((product) => (
          <ListItem style={{ padding: "10px 0" }} key={product.name}></ListItem>
        ))}
      </List>
    </>
  );
};

export default Review;

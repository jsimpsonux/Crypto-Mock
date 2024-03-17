import React from "react";
import Chip from "@mui/material/Chip";
import Box from "@mui/system/Box";
import { Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  flexGrow: 1,
}));

function PurchasedItem(props) {
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };
  return (
    <Box sx={{ width: 400 }} padding={1}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Item>
        {props.img} {props.coin} {props.cost}{" "}
          <Chip
            label="Delete coin"
            // onClick={handleClick}
            onDelete={handleDelete}
            deleteIcon={<DeleteIcon />}
            variant="outlined"
          />
        </Item>
      </Stack>
    </Box>
  );

  
}

export default PurchasedItem;

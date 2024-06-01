import React, { useState } from "react";
import { Grid, Button, TextField, Typography, Box, IconButton } from "@mui/material";
import { addProduct } from "../../../utils/services";
import { makeStyles } from "@mui/styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const useStyles = makeStyles(() => ({
  button: {
    width: 250,
    backgroundColor: "#56642E",
    padding: 12,
    border: "none",
    borderRadius: 12,
    color: "white",
    margin: "10px 10px",
  },
  inputField: {
    marginBottom: 10,
  },
  addButton: {
    marginBottom: 10,
  },
}));

const AddProduct = () => {
  const classes = useStyles();

  const [productData, setProductData] = useState({
    id: "",
    product: {
      name: "",
      image: [],
      tags: [],
      combo: [],
      price: {
        newprice: "",
        oldprice: "",
      },
      description: "",
      highlight: [],
    },
    whenToUse: {
      description: "",
      tag: "",
    },
    keyIngredients: [],
    WhyShouldBuy: [],
    Rated: [],
  });

  const handleInputChange = (path, value) => {
    const keys = path.split(".");
    const updatedData = { ...productData };

    let current = updatedData;
    for (let i = 0; i < keys.length - 1; i++) {
      if (!current[keys[i]]) {
        current[keys[i]] = {};
      }
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;

    setProductData(updatedData);
  };

  const handleAddField = (path) => {
    const keys = path.split(".");
    const updatedData = { ...productData };

    let current = updatedData;
    for (let i = 0; i < keys.length - 1; i++) {
      if (!current[keys[i]]) {
        current[keys[i]] = [];
      }
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]].push({ img: "", name: "", description: "" });

    setProductData(updatedData);
  };

  const handleRemoveField = (path, index) => {
    const keys = path.split(".");
    const updatedData = { ...productData };

    let current = updatedData;
    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }
    current.splice(index, 1);

    setProductData(updatedData);
  };

  const handleAddProductToDB = () => {
    addProduct("products", productData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const renderArrayFields = (path, fields) => {
    return fields.map((field, index) => (
      <Grid container spacing={1} key={index} alignItems="center">
        <Grid item xs={10}>
          <TextField
            fullWidth
            value={field}
            onChange={(e) => handleInputChange(`${path}.${index}`, e.target.value)}
            className={classes.inputField}
          />
        </Grid>
        <Grid item xs={2}>
          <IconButton onClick={() => handleRemoveField(path, index)}>
            <RemoveIcon />
          </IconButton>
        </Grid>
      </Grid>
    ));
  };

  const renderNestedFields = (path, fields) => {
    return fields.map((field, index) => (
      <Box key={index} className={classes.inputField}>
        <Typography variant="subtitle1">{`${path.split(".")[0]} ${index + 1}`}</Typography>
        <TextField
          fullWidth
          label="Image"
          value={field.img}
          onChange={(e) => handleInputChange(`${path}.${index}.img`, e.target.value)}
          className={classes.inputField}
        />
        <TextField
          fullWidth
          label="Name"
          value={field.name}
          onChange={(e) => handleInputChange(`${path}.${index}.name`, e.target.value)}
          className={classes.inputField}
        />
        <TextField
          fullWidth
          label="Description"
          value={field.description}
          onChange={(e) => handleInputChange(`${path}.${index}.description`, e.target.value)}
          className={classes.inputField}
        />
        <IconButton onClick={() => handleRemoveField(path, index)}>
          <RemoveIcon />
        </IconButton>
      </Box>
    ));
  };

  const renderObjectFields = (path, obj) => {
    return Object.keys(obj).map((key, index) => (
      <Box key={index} className={classes.inputField}>
        <TextField
          fullWidth
          label={key}
          value={obj[key]}
          onChange={(e) => handleInputChange(`${path}.${key}`, e.target.value)}
        />
      </Box>
    ));
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="ID"
            value={productData.id}
            onChange={(e) => handleInputChange("id", e.target.value)}
            className={classes.inputField}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Product</Typography>
          <TextField
            fullWidth
            label="Name"
            value={productData.product.name}
            onChange={(e) => handleInputChange("product.name", e.target.value)}
            className={classes.inputField}
          />
          <Typography variant="subtitle1">Images</Typography>
          {renderArrayFields("product.image", productData.product.image)}
          <Button
            variant="contained"
            className={classes.addButton}
            startIcon={<AddIcon />}
            onClick={() => handleAddField("product.image")}
          >
            Add Image
          </Button>

          <Typography variant="subtitle1">Tags</Typography>
          {renderArrayFields("product.tags", productData.product.tags)}
          <Button
            variant="contained"
            className={classes.addButton}
            startIcon={<AddIcon />}
            onClick={() => handleAddField("product.tags")}
          >
            Add Tag
          </Button>

          <Typography variant="subtitle1">Combo</Typography>
          {renderArrayFields("product.combo", productData.product.combo)}
          <Button
            variant="contained"
            className={classes.addButton}
            startIcon={<AddIcon />}
            onClick={() => handleAddField("product.combo")}
          >
            Add Combo
          </Button>

          <Typography variant="subtitle1">Price</Typography>
          {renderObjectFields("product.price", productData.product.price)}

          <TextField
            fullWidth
            label="Description"
            value={productData.product.description}
            onChange={(e) => handleInputChange("product.description", e.target.value)}
            className={classes.inputField}
          />

          <Typography variant="subtitle1">Highlight</Typography>
          {renderArrayFields("product.highlight", productData.product.highlight)}
          <Button
            variant="contained"
            className={classes.addButton}
            startIcon={<AddIcon />}
            onClick={() => handleAddField("product.highlight")}
          >
            Add Highlight
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6">When To Use</Typography>
          {renderObjectFields("whenToUse", productData.whenToUse)}
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6">Key Ingredients</Typography>
          {renderNestedFields("keyIngredients", productData.keyIngredients)}
          <Button
            variant="contained"
            className={classes.addButton}
            startIcon={<AddIcon />}
            onClick={() => handleAddField("keyIngredients")}
          >
            Add Key Ingredient
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6">Why Should Buy</Typography>
          {renderNestedFields("WhyShouldBuy", productData.WhyShouldBuy)}
          <Button
            variant="contained"
            className={classes.addButton}
            startIcon={<AddIcon />}
            onClick={() => handleAddField("WhyShouldBuy")}
          >
            Add Why Should Buy
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6">Rated</Typography>
          {renderArrayFields("Rated", productData.Rated)}
          <Button
            variant="contained"
            className={classes.addButton}
            startIcon={<AddIcon />}
            onClick={() => handleAddField("Rated")}
          >
            Add Rated
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleAddProductToDB}
          >
            Add Product to Database
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddProduct;

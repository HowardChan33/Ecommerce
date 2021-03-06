import React from 'react';
import { AddShoppingCart } from '@material-ui/icons';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';

import useStyles from './styles';

const Product = ({product}) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media}  title={Product.name}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant='h5' gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant='h5'>
                        {product.name}
                    </Typography>

                </div>
                <Typography varient="h2" color="textSecondary">
                    {product.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label='Add to Cart'>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product;

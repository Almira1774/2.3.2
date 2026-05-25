import { Grid } from '@mantine/core';
import { CardItem } from './CartItem/CardItem';
import ky from 'ky';
import { useEffect, useState } from 'react';
import { type Product } from './CartItem/CardItem'

function CartContent() {
    const [products, setProducts] = useState<Product[]>([])


    useEffect(() => {
        const json = ky.get('https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json').json<Product[]>()
        const fetchData = async () => {
            const data = await json

            if (data) {
                setProducts(data)
            }
        }
        fetchData();

    }, [])

    return (
        <Grid gap="md"
            rowGap="xl"
            columnGap="sm"
            mt={149}
            maw={1280}
            w="100%"
            mx="auto"
            px="md">
            {products.map((product) => {
                return (
                    <Grid.Col span={3} key={product.id}>
                        <CardItem id={product.id}
                        image={product.image}
                        name = {product.name}
                        price={`$+ ${product.price}`}></CardItem>
                    </Grid.Col>

                )

            }

            )}


        </Grid>
    );
}

export { CartContent };
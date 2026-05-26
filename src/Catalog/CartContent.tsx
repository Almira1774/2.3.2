import { Grid } from '@mantine/core';
import { CatalogCard, type CartItemProps } from './CatalogCard/CatalogCard';
import ky from 'ky';
import { useEffect, useState } from 'react';
import { type Product } from './CatalogCard/CatalogCard'

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

    if (products.length === 0) {
        return <h3 style={{ textAlign: 'center', marginTop: 150 }}>Подгружаем товары...</h3>;
    }

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
                        <CatalogCard item={product}></CatalogCard>
                    </Grid.Col>

                )

            }

            )}


        </Grid>
    );
}

export { CartContent };
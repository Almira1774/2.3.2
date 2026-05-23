import { Grid } from '@mantine/core';
import { CardItem } from './CartItem/CardItem';

function CartContent() {
    return (
        <Grid gap="md"
            rowGap="xl"
            columnGap="sm"
            mt={149}
            maw={1280}
            w="100%"
            mx="auto"
            px="md">
            <Grid.Col span={3}>
                <CardItem></CardItem>
            </Grid.Col>
            <Grid.Col span={3}>
                <CardItem></CardItem>
            </Grid.Col>
            <Grid.Col span={3}>
                <CardItem></CardItem>
            </Grid.Col>
            <Grid.Col span={3}>
                <CardItem></CardItem>
            </Grid.Col>
             <Grid.Col span={3}>
                <CardItem></CardItem>
            </Grid.Col>
            <Grid.Col span={3}>
                <CardItem></CardItem>
            </Grid.Col>
            <Grid.Col span={3}>
                <CardItem></CardItem>
            </Grid.Col>
            <Grid.Col span={3}>
                <CardItem></CardItem>
            </Grid.Col>

        </Grid>
    );
}

export { CartContent };
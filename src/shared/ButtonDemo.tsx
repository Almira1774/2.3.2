import { Button, Text } from '@mantine/core';

function ButtonDemo() {
    return (
        <Button
            variant="filled"
            w={80}
            h={33}
            ml="auto"
            bg="#54B46A"
            radius="xl"
        >

            <Text c="#FFFFFF" size="16px" fw={400} lts="0" lh={'100%'} >
                SHOP
            </Text>
        </Button>
    );
}

export { ButtonDemo };
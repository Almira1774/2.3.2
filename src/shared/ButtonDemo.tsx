import { Button, Text } from '@mantine/core';

function ButtonDemo() {
    return (
        <Button 
            variant="filled" 
            w={80}        // Вместо style width
            h={33}        // Вместо style height
            ml="auto"
            bg="#54B46A"  // Для кнопок в Mantine версий 7+ HEX-коды надежнее передавать в bg, а не в color
            radius="xl"
        >
            {/* Используем встроенный Text вместо span */}
            <Text c="#FFFFFF" size="16px" fw={400} lts="0" style={{ lineHeight: '100%' }}>
                SHOP
            </Text>
        </Button>
    );
}

export { ButtonDemo };
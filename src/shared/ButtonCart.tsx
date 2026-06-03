import { Button, Flex, type ButtonProps } from '@mantine/core';
import { Logo} from './Logo';

export type CardProps = {
    color?: string;
    iconColor?: string;
    children: React.ReactNode;
    bg: string;
    onClick: () => void;

} & ButtonProps;


function ButtonCart({ children, bg, onClick, color, ...rest }: CardProps) {
    return (

        <Button
            display={Flex}
            variant="filled" w={144} h={44}
            ml="auto"
            bg={bg} radius="xs"
            rightSection={<Logo />}
            onClick={onClick}
            c={color}
            {...rest}

        >{children}</Button>


    );
}

export default ButtonCart
import { Button, Flex, type ButtonProps } from '@mantine/core';

export type CardProps = {

    imageSrc: string;
    imageAlt: string;
    children: React.ReactNode;
    bg: string;
    onClick: () => void;
} & ButtonProps;


function ButtonCart({ imageSrc, imageAlt, children, bg, onClick, ...rest }: CardProps) {
    return (

        <Button
            display={Flex}

            variant="filled" w={144} h={44}
            ml="auto"
            color={bg} radius="xs"
            rightSection={<img src={imageSrc} alt={imageAlt}
                style={{ width: "20px", height: "20px" }} />}
            onClick={onClick}
            {...rest}

        >{children}</Button>


    );
}

export default ButtonCart
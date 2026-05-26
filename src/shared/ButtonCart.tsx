import { Button } from '@mantine/core';
import { ImageIcon, DownloadSimpleIcon, ArrowRightIcon } from '@phosphor-icons/react';

export type CardProps = {

    imageSrc: string; 
    imageAlt: string;
    children: string;
    bg:string;
    onClick:()=>void

}

function ButtonCart({ imageSrc, imageAlt,children,bg,onClick }: CardProps) {
    return (

        <Button
            variant="filled" w={144} h={44}
            ml="auto"
            color={bg} radius="xs"
            rightSection={<img src={imageSrc} alt={imageAlt} 
            style={{ width: "20px", height: "20px" }}/>}
            onClick={onClick}
    
            >{children}</Button>


    );
}

export default ButtonCart
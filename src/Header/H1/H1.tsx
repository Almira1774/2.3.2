import { Group, Title } from '@mantine/core'
import { ButtonDemo } from '../../shared/ButtonDemo'


type H1Props = {
    children: string
}


function H1({ children }: H1Props) {
    return (
        <Group bg="#F7F7F7" bd={16} w={209} h={33} pl={12} justify="center" wrap="nowrap">
            <Title order={1} size={22} c="dark" m={0} lh="100%">
                {children}
            </Title>
            <ButtonDemo />
        </Group>
    )
}
export { H1 }
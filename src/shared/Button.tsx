import { Button } from '@mantine/core';

export type ButtonProps={
    children: string
}
 function ButtonDemo({children}:ButtonProps) {
  return <Button  variant="filled" size="xs"
  ml="auto"
   color="#54B46A" radius="xl">{children}</Button>;
}


export { ButtonDemo } ;
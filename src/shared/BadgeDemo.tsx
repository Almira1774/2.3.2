import { Badge } from '@mantine/core';

type BadgeProps={
  bg:string;
  children: React.ReactNode
}
function BadgeDemo({bg,children}:BadgeProps) {
  return <Badge bg={bg}
  size="lg" circle  c="dark"
  >{children}</Badge>;
}


export {BadgeDemo}
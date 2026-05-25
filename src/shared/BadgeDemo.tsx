import { Badge } from '@mantine/core';

type BadgeProps={
  bg:string;
  children: React.ReactNode
}
function BadgeDemo({bg,children}:BadgeProps) {
  return <Badge color={bg}
  size="lg" circle c={'#212529'}
  >{children}</Badge>;
}


export {BadgeDemo}
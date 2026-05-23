import { Badge } from '@mantine/core';

type BadgeProps={
  bg:string
}
function BadgeDemo({bg}:BadgeProps) {
  return <Badge color={bg}
  size="lg" circle
  >Badge</Badge>;
}


export {BadgeDemo}
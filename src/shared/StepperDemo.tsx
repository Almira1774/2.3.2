import { Button } from "@mantine/core";
import { BadgeDemo } from "./BadgeDemo";

export type StepperProps={
    onIncrement:()=>void;
    onDecrement:()=>void;
    quantity: number;

}
function StepperDemo({onDecrement,onIncrement,quantity}:StepperProps){

    return(
        <>
            <Button w={30} h={30} p={0} bg={"#DEE2E6"} onClick={onDecrement} > -</Button>
            <BadgeDemo bg="#FFFFFF">{quantity}</BadgeDemo>
            <Button w = {30} h={30} p={0} bg={"#DEE2E6"} onClick={onIncrement}> + </Button>
        </>
    )

}

export {StepperDemo};
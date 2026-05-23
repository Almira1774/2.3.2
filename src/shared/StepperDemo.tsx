import { Button } from "@mantine/core";
import { BadgeDemo } from "./BadgeDemo";
import { ButtonDemo } from "./ButtonDemo";


function StepperDemo(){


    return(
        <>
            <Button w={30} h={30} p={0} bg={"#DEE2E6"} > -</Button>
            <BadgeDemo></BadgeDemo>
            <Button w = {30} h={30} p={0} bg={"#DEE2E6"}> + </Button>
        </>
    )

}

export {StepperDemo};
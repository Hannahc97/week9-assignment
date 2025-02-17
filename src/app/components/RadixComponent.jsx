// Import your component from the library package, you installed

import * as Label from "@radix-ui/react-label";

export default function RadixLabel({htmlFor}) {
    return (
        <>
        <Label.Root className="flex flex-wrap gap-3 items-center p-3" htmlFor={htmlFor}>
        </Label.Root>
        </>
    )
}



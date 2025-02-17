import * as Popover from "@radix-ui/react-popover";

export default function PopOver () { 
    return (
        <>
            <Popover.Root>
                <div className="flex flex-wrap justify-center mt-11 ml-6 mr-6 mb-5 p-2 bg-pink-400 rounded-md">
                <Popover.Trigger>
                    <div className="text-7xl"> 
                    <h1>📝 Postopia 📝</h1>
                    </div>
                </Popover.Trigger>
                </div>
                <Popover.Anchor />
                <Popover.Portal>
                    <Popover.Content>
                        <div className="text-center text-2xl mt-11 ml-6 mr-6 mb-5 p-2 bg-pink-400 rounded-md">
                        <h1>Welcome to Postopia! This is a social networking platform for users to create and share posts. <br/> It can be absolutely anything, from how you feel, to any recipes you've tried, or even any new places you've visited</h1>
                        </div>
                        <Popover.Close />
                        <Popover.Arrow />
                    </Popover.Content>
                </Popover.Portal>
            </Popover.Root>
        </>
    );
}
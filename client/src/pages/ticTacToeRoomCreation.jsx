import { Button, Container, Clipboard, IconButton, Input, InputGroup, Text, Link, Stack } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { VscDebugRestart } from "react-icons/vsc";


export const TicTacToeRoomCreation = () => {
    const [regenratedId, setRegenratedId] = useState(0)
    const [loader, setLoader] = useState(false)
    const generateRandomId = () => {
        let randomNumber = Math.floor(10000 + Math.random() * 90000);
        setRegenratedId(randomNumber)
    }
    const createTheGame = () => {
        setLoader(true)
    }
    useEffect(() => {
        generateRandomId()
    }, [])
    return (
        <Container height={"100vh"} p={"4"} display={"flex"} flexDirection={"column"} gap={"9"} >
            <Text p={"4"} rounded={"xl"} textAlign={"center"} textStyle={"2xl"} fontWeight={"700"} border={"1px dotted grey"} >Tic Tac Toe</Text>
            <Clipboard.Root value={regenratedId} display={"flex"} flexDirection={"column"}>
                <Clipboard.Label textStyle="label" alignSelf={"flex-end"}>
                    <Link href="#" onClick={generateRandomId} color={"blue"}>
                        RegenerateId
                        < VscDebugRestart />
                    </Link>
                </Clipboard.Label>
                <InputGroup startAddon="🎮" endElement={<ClipboardIconButton />} >
                    <Clipboard.Input asChild>
                        <Input p={"4"} fontSize={"3xl"} />
                    </Clipboard.Input>
                </InputGroup>
            </Clipboard.Root>
            <Button loading={loader} onClick={createTheGame} loadingText={loader ? "Waiting for users..." : "Created"}>
                Create Game-ID
            </Button>
        </Container >
    )
}

const ClipboardIconButton = () => {
    return (
        <Clipboard.Trigger asChild>
            <IconButton variant="surface" size="xs" me="-2">
                <Clipboard.Indicator />
            </IconButton>
        </Clipboard.Trigger>
    )
}
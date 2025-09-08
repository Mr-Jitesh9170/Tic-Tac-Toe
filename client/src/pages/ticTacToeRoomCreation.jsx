import { Button, Container, Clipboard, IconButton, Input, InputGroup, Text, Link } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { VscDebugRestart } from "react-icons/vsc";
import { FaRestroom } from "react-icons/fa6";
import { MdOutlineAdsClick } from "react-icons/md";
import JoinedPlayers from "./joinedPlayers";
import { io } from "socket.io-client";
const socket = io("http://localhost:8080")
const today = new Date()
const YourId = `userId${today.getFullYear() + today.getMilliseconds() + today.getSeconds()}`

export const TicTacToeRoomCreation = () => {
    const [regenratedId, setRegenratedId] = useState(0)
    const [loader, setLoader] = useState(false)
    const [joinedPlayers, setJoinedPlayers] = useState([])
    const [inputs, setIputs] = useState(
        {
            isInput: true,
            inputData: 0,
            isJoining: false,
            isGameStart: false
        }
    )
    useEffect(() => {
        socket.on("joinedPlayesLists", (joinedPlayers) => {
            setJoinedPlayers((prev) => ([...prev, joinedPlayers]))
        })
        generateRandomId()
        return () => {
        }
    }, [])
    useEffect(() => {
        if (joinedPlayers.length == 2) {
            setIputs({ ...inputs, isInput: false, isGameStart: true })
            socket.emit("joinedPlayesLists", { userId: YourId, gameRoomId: inputs.inputData })
        }
    }, [joinedPlayers])

    // input change 
    const inputChange = (e) => {
        let { value } = e.target
        setIputs({ ...inputs, inputData: parseInt(value) })
    }
    // join game
    const joinTheGame = () => {
        socket.emit("gameJoin", { gameRoomId: inputs.inputData })
        socket.emit("joinedPlayesLists", { userId: YourId, gameRoomId: inputs.inputData })
        setIputs({ ...inputs, isJoining: false, isGameStart: true })
        setLoader(true)
    }
    // enter the game id
    const enterIdHandler = () => {
        if (!loader) {
            setIputs({ ...inputs, isJoining: true, isInput: false })
        }
    }
    // create the game
    const createTheGame = () => {
        socket.emit("gameJoin", { gameRoomId: regenratedId })
        socket.emit("joinedPlayesLists", { userId: YourId, gameRoomId: regenratedId })
        setLoader(true)
    }
    // random id generate
    const generateRandomId = () => {
        if (!loader) {
            let randomNumber = Math.floor(10000 + Math.random() * 90000);
            setRegenratedId(randomNumber)
        }
    }
    return (
        <Container height={"100vh"} p={"4"} display={"flex"} flexDirection={"column"} gap={"9"} >
            <Text p={"4"} rounded={"xl"} textAlign={"center"} textStyle={"2xl"} fontWeight={"700"} border={"1px dotted grey"} >Tic Tac Toe</Text>
            {
                inputs.isInput &&
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
                    <Clipboard.Label textStyle="label" alignSelf={"flex-end"}>
                        <Link href="#" onClick={enterIdHandler} color={"red"}>
                            Enter Game-id
                            <MdOutlineAdsClick />
                        </Link>
                    </Clipboard.Label>
                </Clipboard.Root>
            }
            {
                inputs.isJoining && (
                    <InputGroup startElement={<FaRestroom />}>
                        <Input onChange={inputChange} placeholder="Please enter your Game ID..." />
                    </InputGroup>
                )
            }
            {inputs.isInput && <Button loading={loader} onClick={createTheGame} loadingText={loader ? "Opponent waiting..." : "Created"}>Create Game-ID</Button>}
            {inputs.isGameStart && <Button >Start Game</Button>}
            {inputs.isJoining && <Button loading={loader} onClick={joinTheGame} loadingText={loader ?? "Joining..."}>Join Game</Button>}
            {loader && <JoinedPlayers joinedPlayers={joinedPlayers} isGameStart={inputs.isGameStart} />}
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
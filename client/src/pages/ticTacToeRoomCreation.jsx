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
            isInput: false,
            inputData: ""
        }
    )
    useEffect(() => {
        socket.on("connect", () => {
            console.log("✅ Connected to server with ID:", socket.id);
        });
        socket.on("joinedPlayesLists", ({ userId, gameRoomId }) => {
            console.log({ userId, gameRoomId })
            setJoinedPlayers((prev) => ([...prev, { name: `${userId == YourId ? "(You)" : "(He)"} ${userId}  Joined`, roomId: `${gameRoomId}` }]))
        })
        generateRandomId()
        return () => {
            socket.off()
        }
    }, [])
    const joinTheGame() => {

    }

    const createTheGame = () => {
        socket.emit("gameJoin", { gameRoomId: regenratedId })
        socket.emit("joinedPlayesLists", { userId: YourId, gameRoomId: regenratedId })
        setLoader(true)
    }
    const enterIdHandler = () => {
        setIputs({ ...inputs, isInput: !inputs.isInput })
        
    }
    const generateRandomId = () => {
        let randomNumber = Math.floor(10000 + Math.random() * 90000);
        setRegenratedId(randomNumber)
    }
    return (
        <Container height={"100vh"} p={"4"} display={"flex"} flexDirection={"column"} gap={"9"} >
            <Text p={"4"} rounded={"xl"} textAlign={"center"} textStyle={"2xl"} fontWeight={"700"} border={"1px dotted grey"} >Tic Tac Toe</Text>
            {
                inputs.isInput
                    ?
                    <InputGroup startElement={<FaRestroom />}>
                        <Input placeholder="Please enter your Game ID..." />
                    </InputGroup>
                    : (
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
                    )
            }
            {
                inputs.isInput ?
                    <Button loading={loader} onClick={createTheGame} loadingText={loader ? "Opponent joining..." : "Created"}> "Create Game-ID"</Button>
                    :
                    <Button loading={loader} onClick={joinTheGame} loadingText={loader ? "Opponent joining..." : "Created"}>Join Game</Button>
            }
            {
                loader && <JoinedPlayers joinedPlayers={joinedPlayers} />
            }
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
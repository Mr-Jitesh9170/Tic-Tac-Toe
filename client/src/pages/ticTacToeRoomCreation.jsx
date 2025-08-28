import { Button, Container, HStack, Text } from "@chakra-ui/react"


export const TicTacToeRoomCreation = () => {
    return (
        <Container height={"100vh"} p={"4"} display={"flex"} flexDirection={"column"} gap={"9"} >
            <Text p={"4"} rounded={"xl"} textAlign={"center"} textStyle={"2xl"} fontWeight={"700"} border={"1px dotted grey"} >Tic Tac Toe</Text>
            <Button  >Create gameId</Button>
        </Container>
    )
}

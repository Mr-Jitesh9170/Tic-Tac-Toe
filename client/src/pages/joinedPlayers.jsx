import { LuCircleCheck } from "react-icons/lu"
import { List, Stack, Text } from "@chakra-ui/react"

const JoinedPlayers = ({ joinedPlayers, isGameStart }) => {
    return (
        <Stack>
            <Text fontWeight={"700"}>{isGameStart ? "Everyone has joined, Start the game!!" : "👤✨ Someone is joining... Please wait!"}</Text>
            <List.Root gap="2" variant="plain" align="center" p={"4"}>
                {
                    joinedPlayers.map((_) => {
                        return (
                            <List.Item key={_.userId}>
                                <List.Indicator asChild color="green.500">
                                    <LuCircleCheck />
                                </List.Indicator>
                                {_.userId}
                            </List.Item>
                        )
                    })
                }
            </List.Root>
        </Stack>
    )
}

export default JoinedPlayers
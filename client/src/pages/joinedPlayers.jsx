import { LuCircleCheck } from "react-icons/lu"
import { List, Stack, Text } from "@chakra-ui/react"

const JoinedPlayers = ({ joinedPlayers }) => {
    return (
        <Stack>
            <Text fontWeight={"700"}>👤✨ Someone is joining... Please wait!</Text>
            <List.Root gap="2" variant="plain" align="center" p={"4"}>
                {
                    joinedPlayers.map((_) => {
                        return (
                            <List.Item key={_.name}>
                                <List.Indicator asChild color="green.500">
                                    <LuCircleCheck />
                                </List.Indicator>
                                {_.name}
                            </List.Item>
                        )
                    })
                }
            </List.Root>
        </Stack>
    )
}

export default JoinedPlayers
import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>Rodrigo Eduardo</Text>
                <Text color="gray.300" fontSize="small">
                    rodrigoeduardodb1@gmail.com
                </Text>
            </Box>

            <Avatar size="md" name="Rodrigo Eduardo" />
        </Flex>
    )
}
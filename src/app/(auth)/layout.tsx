import LeftBackground from "../components/leftBackground"
import { HStack } from "@chakra-ui/react"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <HStack w="100%" h="100vh" gap="0px">
            <LeftBackground />
            {children}
        </HStack>
    )
}
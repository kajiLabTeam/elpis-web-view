import { Box, Flex, Link } from "@chakra-ui/react";

export const Header = () => {
    return (
        <Box 
            as="header" 
            bg="teal.500" 
            px={4} 
            position="fixed" 
            top={0} 
            left={0} 
            right={0} 
            zIndex={1} // ヘッダーを他のコンテンツの上に表示するためにzIndexを設定>
            height="64px" // ヘッダーの高さを固定
        >
        <Flex h={16} alignItems="center" justifyContent="space-between">
            <Box>
                <Link href="/" color="white" fontSize="xl" fontWeight="bold">
                elpis-web-view
                </Link>
            </Box>
        </Flex>
        </Box>
    );
};
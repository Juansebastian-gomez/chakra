import { Box, Button, Image, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <>
      <Box
        boxSize="xl"
        bgImage="https://i.pinimg.com/originals/da/ac/ae/daacae01106f8169f1385eac669cec82.jpg"
        color="white"
        height="300px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <Text
            textAlign="center"
            fontSize="30px"
            fontFamily="Montserrat"
            fontWeight="lighter"
          >
            DOMINA EL TERRENO
          </Text>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={6}
          >
            <Button
              padding="10px"
              background="none"
              color="white"
              border="1px solid white"
              cursor="pointer"
              _hover={{
                bgColor: "white",
                color: "black",
              }}
            >
              VER DETALLES
            </Button>
            <Button
              padding="10px"
              background="none"
              color="white"
              border="1px solid white"
              cursor="pointer"
              _hover={{
                bgColor: "white",
                color: "black",
              }}
            >
              VER VIDEO
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
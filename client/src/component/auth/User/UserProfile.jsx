import React from "react";
import { Box, Avatar, Text } from "@chakra-ui/react";

export default function UserProfile({ user }) {
  return (
    <Box display="flex" alignItems="center">
      <Avatar src={user.photoURL} alt={user.displayName} size="md" />
      <Box ml="4">
        <Text fontSize="xl" fontWeight="bold">
          {user.displayName}
        </Text>
        <Text>{user.email}</Text>
      </Box>
    </Box>
  );
}

import { Stack } from "expo-router";

export default function HomeLayout() {

  return (
    <Stack>
        <Stack.Screen
        name="bottomtabs"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
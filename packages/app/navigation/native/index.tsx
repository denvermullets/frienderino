import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ContactList from "app/features/contactList/contactList";

import { HomeScreen } from "../../features/home/screen";
import UserDetailScreen from "../../features/user/detail-screen";

const Stack = createNativeStackNavigator<{
  home: undefined;
  "user-detail": {
    id: string;
  };
  "contact-list": undefined;
}>();

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: "Home",
        }}
      />
      <Stack.Screen
        name="user-detail"
        component={UserDetailScreen}
        options={{
          title: "User",
        }}
      />
      <Stack.Screen
        name="contact-list"
        component={ContactList}
        options={{
          title: "User",
        }}
      />
    </Stack.Navigator>
  );
}

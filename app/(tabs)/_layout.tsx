import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";

const TabsLayout = () => {
  // if (!loading && isLogged) return <Redirect href="/home" />;

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#00FFFF",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 84,
          },
        }}
      >
        <Tabs.Screen
          name="chats-list"
          options={{
            title: "Chat",
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              <>
                <Ionicons size={24} color={color} name={"chatbubbles-sharp"} />
              </>
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Me",
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              <>
                <Ionicons size={24} color="gray" name={"person-circle-sharp"} />
              </>
            ),
          }}
        />
      </Tabs>
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default TabsLayout;

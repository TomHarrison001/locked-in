import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const TabsLayout = () => {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: "#F0F0F0",
            tabBarInactiveTintColor: "#C3C3C3",
            tabBarStyle: {
                backgroundColor: "#2D2D2D",
                borderTopWidth: 1,
                borderTopColor: "#C3C3C3",
                height: 90
            },
            tabBarLabelStyle: {
                fontSize: 18,
                fontWeight: "600"
            },
            headerShown: false
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Todo",
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name='checkmark-circle-outline' color={color} size={size}/>
                    )
                }}
            />
            <Tabs.Screen
                name="notes"
                options={{
                    title: "Notes",
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name='book-outline' color={color} size={size}/>
                    )
                }}
            />
            <Tabs.Screen
                name="journal"
                options={{
                    title: "Journal",
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name='journal-outline' color={color} size={size}/>
                    )
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: "Settings",
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name='settings-outline' color={color} size={size}/>
                    )
                }}
            />
        </Tabs>
    )
}

export default TabsLayout;

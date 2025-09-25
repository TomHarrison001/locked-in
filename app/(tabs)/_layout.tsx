import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const TabsLayout = () => {
    const { colours } = useTheme();
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: colours.primary,
            tabBarInactiveTintColor: colours.textMuted,
            tabBarStyle: {
                backgroundColor: colours.surface,
                borderTopWidth: 1,
                borderTopColor: colours.border,
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

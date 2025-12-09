import { Stack } from "expo-router";
import { useState, createContext } from "react";
import { TouchableOpacity, Text } from "react-native";

// Contexto de tema para usar nas telas
export const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
});

export default function RootLayout() {
  const [theme, setTheme] = useState("dark");

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Stack
        screenOptions={{
          headerRight: () => (
            <TouchableOpacity onPress={toggleTheme} style={{ marginRight: 15 }}>
              <Text style={{ color: theme === "dark" ? "#fff" : "#000" }}>
                {theme === "dark" ? "☀️ Claro" : "🌙 Escuro"}
              </Text>
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: theme === "dark" ? "#000" : "#fff",
          },
          headerTintColor: theme === "dark" ? "#fff" : "#000",
        }}
      />
    </ThemeContext.Provider>
  );
}

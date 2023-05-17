import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "./StackNavigators";
import { Icon } from "react-native-elements";
import { colors } from "../global/styles";

const Drawer = createDrawerNavigator();

const DrawerNavigators = (): JSX.Element => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeScreen"
        component={HomeStack}
        options={{
          title: "Home",
          drawerIcon: ({ focused, size }) => (
            <Icon
              type="material-community"
              name="Home"
              size={size}
              color={focused ? "#7cc" : colors.grey}
            />
          ),
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigators;
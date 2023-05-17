import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { parameters } from "../global/styles";

const RequestScreen = (): JSX.Element => {
  return (
    <View>
      <Text>RequestScreen</Text>
    </View>
  );
};

export default RequestScreen; /*  */

const styles = StyleSheet.create({
  container: {
    paddingTop: parameters.statusBarHeight,
  },
});

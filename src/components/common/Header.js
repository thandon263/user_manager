//imports
import React from "react";
import { View, Text } from "react-native";

const Header = props => {
  const { textStyle, viewStyle, buttonStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: "#f8f8f8",
    alignItems: "center",
    height: 70,
    paddingTop: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: "relative"
  },
  textStyle: {
    fontSize: 20
  }
};

export { Header };

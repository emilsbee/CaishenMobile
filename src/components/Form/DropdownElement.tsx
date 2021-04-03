// External imports
import React from "react";
import { Pressable, Text, StyleSheet, View, Image } from "react-native";

// Internal imports
import Styles from "../../styles/base";
const rightArrow = require("../../../assets/right-arrow.png");
const downArrow = require("../../../assets/arrow-down-sign-to-navigate.png");

export interface DropdownElementProps {
  values: (number | string)[];
  currentValue: number | string;
  onPick: (value: number | string) => void;
}

const DropdownElement: React.FC<DropdownElementProps> = ({
  currentValue,
  values,
  onPick,
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <View
      style={[
        styles.container,
        {
          borderColor: open ? Styles.background.accent2 : "darkgrey",
        },
      ]}
    >
      <Pressable style={styles.titleContainer} onPress={() => setOpen(!open)}>
        <Text style={styles.title}>
          {currentValue.toString().length !== 0 && currentValue}
        </Text>
        {!open ? (
          <Image source={rightArrow} style={styles.titleArrow} />
        ) : (
          <Image source={downArrow} style={styles.titleArrow} />
        )}
      </Pressable>

      {values.length !== 0 && open && (
        <View
          style={[
            styles.valueListContainer,
            {
              borderColor: open ? Styles.background.accent2 : "darkgrey",
            },
          ]}
        >
          {values.map((value, index) => {
            return (
              <Pressable
                key={value}
                style={[
                  styles.valueContainer,
                  {
                    borderTopWidth: index === 0 ? 1 : 0,
                    borderBottomWidth: index === values.length - 1 ? 0 : 1,
                  },
                ]}
                onPress={() => {
                  onPick(value);
                  setOpen(false);
                }}
              >
                <Text style={styles.value}>{value}</Text>
              </Pressable>
            );
          })}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: Styles.background.default,
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 10,
    paddingBottom: 10,
    paddingTop: 10,
  },
  title: {
    fontSize: Styles.fontSize.h8,
    color: Styles.fontColor.default.light,
    paddingLeft: 10,
  },
  titleArrow: {
    height: 20,
    width: 20,
  },
  valueListContainer: {
    width: "100%",
    display: "flex",
  },
  valueContainer: {
    height: 45,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "darkgrey",
    borderTopColor: "darkgrey",
  },
  value: {
    color: Styles.fontColor.default.light,
    fontSize: Styles.fontSize.h8,
  },
});

export default DropdownElement;

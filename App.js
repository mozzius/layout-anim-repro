import Animated, { ZoomIn, ZoomOut } from "react-native-reanimated";
import { View, Button } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

export default function Repro() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 64,
        backgroundColor: "black",
      }}
    >
      <StatusBar style="light" />
      <View
        style={{
          width: 200,
          height: 200,
          backgroundColor: "white",
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button title="Show" onPress={() => setShow1(true)} />
        {show1 && (
          <View
            style={{
              backgroundColor: "cornflowerblue",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              padding: 16,
            }}
          >
            <Animated.View
              entering={ZoomIn}
              exiting={ZoomOut}
              style={{
                backgroundColor: "green",
                borderRadius: 10,
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                title="Hide"
                onPress={() => setShow1(false)}
                color="white"
              />
            </Animated.View>
          </View>
        )}
      </View>
      <View
        style={{
          width: 200,
          height: 200,
          backgroundColor: "white",
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button title="Show (no animation)" onPress={() => setShow2(true)} />
        {show2 && (
          <View
            style={{
              backgroundColor: "cornflowerblue",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              padding: 16,
            }}
          >
            <View
              style={{
                backgroundColor: "green",
                borderRadius: 10,
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                title="Hide"
                onPress={() => setShow2(false)}
                color="white"
              />
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

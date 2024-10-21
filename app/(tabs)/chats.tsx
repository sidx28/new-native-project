import { AppState } from "@/components/store/reducers";
import React, { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { connect } from "react-redux";
import { io } from "socket.io-client";

interface ChatsPropsType {}

const Chats: React.FC<ChatsPropsType> = (props) => {
  useEffect(() => {
    // Establish WebSocket connection to your backend
    // const socket = io(process.env.EXPO_PUBLIC_API_URL);

    // Clean up the WebSocket connection on component unmount
    return () => {
      // socket.disconnect();
    };
  }, []);

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View>
          <Text className="text-lg font-pbold text-gray-100 mt-7 text-center">
            Chats
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = (state: AppState) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Chats);

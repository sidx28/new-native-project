import ChatRow from "@/components/ChatRow";
import { AppState } from "@/components/store/reducers";
import React, { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { connect } from "react-redux";

const data = [
  { time: "08:01 AM", message: "last message 1", isInbound: true },
  {
    time: "08:02 AM",
    message:
      "last message 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat dolorem accusantium delectus inventore odio fugiat aperiam quidem itaque cumque! Reprehenderit nobis mollitia officiis ex. Minima corporis mollitia corrupti nisi inventore!",
    isInbound: false,
  },
  { time: "08:03 AM", message: "last message 3", isInbound: true },
  { time: "08:04 AM", message: "last message 4", isInbound: false },
  {
    time: "08:05 AM",
    message:
      "last message 5 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat dolorem accusantium delectus inventore odio fugiat aperiam quidem itaque cumque! Reprehenderit nobis mollitia officiis ex. Minima corporis mollitia corrupti nisi inventore!",
    isInbound: true,
  },
  { time: "08:06 AM", message: "last message 6", isInbound: false },
];

interface ChatPropsType {}

const Chat: React.FC<ChatPropsType> = (props) => {
  useEffect(() => {}, []);

  return (
    <SafeAreaView className="bg-primary h-full">
      <Text className="text-lg font-pbold text-gray-100 mt-7 p-2 border-b-2 border-gray-700">
        abc
      </Text>
      <ScrollView>
        <View className="flex flex-col w-full px-2">
          {data.map((i) => (
            <ChatRow
              key={i.time}
              message={i.message}
              time={i.time}
              isInbound={i.isInbound}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = (state: AppState) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);

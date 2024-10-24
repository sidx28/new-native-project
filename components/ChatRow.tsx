import { AppState } from "@/components/store/reducers";
import React from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";

interface ChatRowPropsType {
  message: string;
  time: string;
  isInbound: boolean;
}

const ChatRow: React.FC<ChatRowPropsType> = (props) => {
  const { message, time, isInbound } = props;

  return (
    <View
      className={`max-w-[80%] mt-2 ${isInbound ? "self-start" : "self-end"}`}
    >
      <View
        className={`relative py-1 px-2 bg-secondary flex rounded-2xl ${
          isInbound ? "rounded-tl-none" : "rounded-tr-none"
        }`}
      >
        <Text className={`text-sm font-pmedium text-primary`}>{message}</Text>
        <Text className="text-xs font-pregular text-right text-gray-500">
          {time}
        </Text>
      </View>
    </View>
  );
};

const mapStateToProps = (state: AppState) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ChatRow);

import { AppState } from "@/components/store/reducers";
import React from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";

interface ChatListRowPropsType {
  username: string;
  message: string;
}

const ChatListRow: React.FC<ChatListRowPropsType> = (props) => {
  return (
    <View>
      <Text className="text-lg font-pbold text-gray-100 mt-7 text-center">
        ChatListRow
      </Text>
    </View>
  );
};

const mapStateToProps = (state: AppState) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ChatListRow);

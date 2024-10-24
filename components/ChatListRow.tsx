import { AppState } from "@/components/store/reducers";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";

interface ChatListRowPropsType {
  username: string;
  message: string;
  onRowClick: () => void;
}

const ChatListRow: React.FC<ChatListRowPropsType> = (props) => {
  const { username, message, onRowClick } = props;

  return (
    <TouchableOpacity onPress={onRowClick} className="p-4">
      <Text className="text-base font-pmedium text-gray-100 text-left">
        {username}
      </Text>
      <Text className="text-sm font-pregular text-gray-500 text-left">
        {message}
      </Text>
    </TouchableOpacity>
  );
};

const mapStateToProps = (state: AppState) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ChatListRow);

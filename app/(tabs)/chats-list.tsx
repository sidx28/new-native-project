import ChatListRow from "@/components/ChatListRow";
import { User } from "@/components/models/entities/User";
import { fetchUsersAction } from "@/components/store/actions/auth.action";
import { AppState } from "@/components/store/reducers";
import {
  usersLoadingSelector,
  usersSelector,
} from "@/components/store/selectors/auth.selectors";
import { router } from "expo-router";
import React, { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { connect } from "react-redux";
import { io } from "socket.io-client";

const data = [
  { username: "abc1", message: "last message 1" },
  { username: "abc2", message: "last message 2" },
  { username: "abc3", message: "last message 3" },
  { username: "abc4", message: "last message 4" },
  { username: "abc5", message: "last message 5" },
  { username: "abc6", message: "last message 6" },
];

interface ChatsListPropsType {
  fetchUsers?: () => void;
  usersLoading?: boolean;
  users?: User[];
}

const ChatsList: React.FC<ChatsListPropsType> = (props) => {
  const { fetchUsers, users, usersLoading } = props;
  useEffect(() => {
    // Establish WebSocket connection to your backend
    // const socket = io(process.env.EXPO_PUBLIC_API_URL);

    // Clean up the WebSocket connection on component unmount
    return () => {
      // socket.disconnect();
    };
  }, []);

  useEffect(() => {
    const fetch = () => {
      fetchUsers && fetchUsers();
    };

    fetch();
  }, []);
  console.log(users);
  const handleRowClick = () => {
    router.navigate("/chat");
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View>
          <Text className="text-lg font-pbold text-gray-100 mt-7 text-center pb-2 border-b-2 border-gray-700">
            Chats
          </Text>
        </View>
        {users?.map((i) => (
          <ChatListRow
            key={i.id}
            message={"abc"}
            username={i.username}
            onRowClick={handleRowClick}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = (state: AppState) => ({
  users: usersSelector(state),
  usersLoading: usersLoadingSelector(state),
});

const mapDispatchToProps = {
  fetchUsers: fetchUsersAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatsList);

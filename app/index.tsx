import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { View, Text, Image, ScrollView, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import { AppState } from "@/components/store/reducers";
import {
  meLoaded,
  meLoadingSelector,
  meSelector,
} from "@/components/store/selectors/auth.selectors";
import { authFetchMeAction } from "@/components/store/actions/auth.action";
import { connect } from "react-redux";
import { localStorageService } from "@/components/services/LocalStorageService";
import { User } from "@/components/models/entities/User";

// import { CustomButton, Loader } from "../components";

interface WelcomePropsType {
  fetchMeAction?: () => void;
  meLoading?: boolean;
  meLoaded?: boolean;
  loggedInUser?: User;
}

const Welcome: React.FC<WelcomePropsType> = (props) => {
  const { fetchMeAction, meLoaded, meLoading, loggedInUser } = props;

  useEffect(() => {
    const initialize = async () => {
      const token = await localStorageService.getAuthToken();
      console.log("token", token);
      if (token && !meLoading) {
        fetchMeAction && fetchMeAction();
      }
    };

    initialize();
  }, []);

  if (!meLoading && loggedInUser) return <Redirect href="/chats" />;

  return (
    <SafeAreaView className="h-full bg-primary">
      {meLoading ? (
        <View
          style={{ alignItems: "center", flex: 1, justifyContent: "center" }}
        >
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <ScrollView
          contentContainerStyle={{
            height: "100%",
          }}
        >
          <View className="w-full flex justify-center items-center h-full px-4">
            <View className="relative mt-5">
              <Text className="text-3xl text-white font-bold text-center">
                Discover Endless{"\n"}
                Possibilities with{" "}
                <Text className="text-secondary">Nexus Play</Text>
              </Text>
            </View>

            <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
              dolorem accusantium delectus inventore odio fugiat aperiam quidem
              itaque cumque! Reprehenderit nobis mollitia officiis ex. Minima
              corporis mollitia corrupti nisi inventore!
            </Text>

            <CustomButton
              title="Continue with Email"
              handlePress={() => router.push("/sign-in")}
              containerStyles="w-full mt-7"
            />
            <CustomButton
              title="Continue as guest"
              handlePress={() => router.push("/sign-in")}
              containerStyles="w-full py-2 mt-7 bg-transparent"
              textStyles="text-gray-100"
            />
          </View>
        </ScrollView>
      )}
      {/* <StatusBar backgroundColor="#161622" style="light" /> */}
    </SafeAreaView>
  );
};

const mapStateToProps = (state: AppState) => ({
  meLoaded: meLoaded(state),
  meLoading: meLoadingSelector(state),
  loggedInUser: meSelector(state),
});

const mapDispatchToProps = { fetchMeAction: authFetchMeAction };

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);

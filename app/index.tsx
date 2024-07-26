import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";

// import { CustomButton, Loader } from "../components";

const Welcome = () => {
  //   if (!loading && isLogged) return <Redirect href="/home" />;

  return (
    <SafeAreaView className="h-full bg-primary">
      {/* <Loader isLoading={loading} /> */}

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

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Welcome;

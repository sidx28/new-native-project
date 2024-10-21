import React, { useState } from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions } from "react-native";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import {
  meLoaded,
  meLoadingSelector,
} from "@/components/store/selectors/auth.selectors";
import {
  authSignupAction,
  AuthSignupActionPayloadType,
} from "@/components/store/actions/auth.action";
import { AppState } from "@/components/store/reducers";
import { connect } from "react-redux";
import Toast from "react-native-toast-message";

interface SignUpPropsType {
  meLoaded?: boolean;
  meLoading?: boolean;
  signupAction?: (values: AuthSignupActionPayloadType) => void;
}

const SignUp: React.FC<SignUpPropsType> = (props) => {
  const { meLoaded, meLoading, signupAction } = props;

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  console.log("meloading", meLoading);

  const submit = async () => {
    if (form.username === "" || form.email === "" || form.password === "") {
      Toast.show({
        type: "error",
        text1: "Please fill in all fields!",
        visibilityTime: 1000,
      });
      return;
    }

    await signupAction?.(form);
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View
          className="w-full flex justify-center h-full px-4 my-6"
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
          <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
            Sign Up to Nexus Play
          </Text>

          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            containerClassName="mt-10"
          />

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            containerClassName="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            containerClassName="mt-7"
          />

          <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={meLoading}
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Have an account already?
            </Text>
            <Link
              href="/sign-in"
              className="text-lg font-psemibold text-secondary"
            >
              Login
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = (state: AppState) => ({
  meLoaded: meLoaded(state),
  meLoading: meLoadingSelector(state),
});

const mapDispatchToProps = { signupAction: authSignupAction };

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

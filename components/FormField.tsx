import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardTypeOptions,
} from "react-native";

interface FormFieldProps {
  title: string;
  value: string;
  handleChangeText: (text: string) => void;
  placeholder?: string;
  containerClassName?: string;
  keyboardType?: KeyboardTypeOptions;
}

const FormField = (props: FormFieldProps) => {
  const {
    title,
    value,
    placeholder,
    handleChangeText,
    containerClassName,
    ...moreProps
  } = props;
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${containerClassName}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>

      <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row items-center">
        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...moreProps}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              size={24}
              color="gray"
              name={showPassword ? "eye-off-outline" : "eye-outline"}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;

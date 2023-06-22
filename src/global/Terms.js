import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';

const Terms = () => {
  const [isAgreed, setIsAgreed] = useState(false);

  const handleAgree = () => {
    setIsAgreed(!isAgreed);
  };

  return (
    <View style={styles.container}>
      <CheckBox
        checked={isAgreed}
        onPress={handleAgree}
        containerStyle={styles.checkboxContainer}
      />
      <TouchableOpacity onPress={handleAgree} activeOpacity={0.8}>
        <Text style={styles.text}>I agree to the Terms and Conditions</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  checkboxContainer: {
    margin: 0,
    padding: 0,
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  text: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default Terms;

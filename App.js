import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';

export default function App() {
  const [displayValue, setDisplayValue] = useState("0");
  return (
    <View style={styles.container}>
      <Display value={displayValue}/>
        <View style={styles.buttons}>
          <Button label="AC"/>
          <Button label="/"/>
          <Button label="7"/>
          <Button label="8"/>
          <Button label="9"/>
          <Button label="*"/>
          <Button label="4"/>
          <Button label="5"/>
          <Button label="6"/>
          <Button label="-"/>
          <Button label="1"/>
          <Button label="2"/>
          <Button label="3"/>
          <Button label="+"/>
          <Button label="0"/>
          <Button label="."/>
          <Button label="="/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    marginTop:40,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

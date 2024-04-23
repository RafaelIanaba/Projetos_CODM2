import React from "react";
import { ScrollView, Text } from "react-native";
import styles from '../styles/styles';

export default function Check(){
    return<ScrollView>
        <Text style={styles.cestaCarnes}>Compra Realizada com sucesso</Text>
    </ScrollView>
}
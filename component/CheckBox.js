import { useState } from "react";
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const data = [
{
id: 1,
title: "1"
},
{
id: 2,
title: "2"
},
{
id: 3,
title: "3"
},
{
id: 4,
title: "4"
}
]

export default function App() {
const [selected, setSeleted] = useState([])

const handleSelect = (id) => {
setSeleted([...selected, id])
}
const selectAll = () => {
if(selected.length === data.length) {
setSeleted([])
} else {
setSeleted(data.map(item => item.id))
}
}

return (
<View style={{}}>
<Text onPress={selectAll}>Select All</Text>
{
data.map((item) => {
return <Text style={{padding: 10, backgroundColor: selected.includes(item.id) ? "red" : "white"}} onPress={() => handleSelect(item.id)}>{item.title}</Text>
})
}
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
paddingTop: Constants.statusBarHeight,
backgroundColor: '#ecf0f1',
padding: 8,
},
paragraph: {
24,
fontSize: 18,
fontWeight: 'bold',
textAlign: 'center',
},
});
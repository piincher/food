import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import yelp from '../api/yelp'
const ResultsShowScreen = ({ navigation }) => {
    const [result,setResult] = useState(null)
    const id = navigation.getParam('id')
    console.log(result)

    useEffect(() => {
        getResult(id)
    },[])
    const getResult = async (id) => {
        const { data } = await yelp.get(`/${id}`)
        setResult(data)
    }
    return (
        <View>
            <Text>hello</Text>
        </View>
    )
}

export default ResultsShowScreen

const styles = StyleSheet.create({})

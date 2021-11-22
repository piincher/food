import React from 'react'
import {withNavigation} from 'react-navigation'
import {View,Text,StyleSheet,FlatList,TouchableOpacity} from 'react-native'
import ResultsDetail from './ResultsDetail'

const ResultsLits = ({title,results,navigation}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}
        </Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() =>navigation.navigate('ResultsShow',{id:item.id}) }>
                            <ResultsDetail result={item} />
                        </TouchableOpacity>
                            )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom:10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        borderRadius: 4,
        marginLeft: 15,
        marginBottom:5
    },
    
})
export default withNavigation(ResultsLits);
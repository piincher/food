import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList'
import useResults from '../hooks/useResults'
const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi,results,errorMessage]= useResults()
  
    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        })
    }

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />
          {errorMessage ? <Text>{errorMessage}</Text> :null}
          <Text>We have found {results.length} results</Text>
          <ResultsList results={filterResultsByPrice('$')} title="COST EFFECTIVES"/>
          <ResultsList results={filterResultsByPrice('$$')} title="BIT PRICIERS"/>
          <ResultsList results={filterResultsByPrice('$$$')} title="BIG SPENDER"/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;

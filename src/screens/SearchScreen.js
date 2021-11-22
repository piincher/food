import React, { useState } from 'react';
import {withNavigation} from 'react-navigation'
import { View, Text, StyleSheet,ScrollView } from 'react-native';
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
    <>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />
          {errorMessage ? <Text>{errorMessage}</Text> :null}
      
        <ScrollView>
          <ResultsList  results={filterResultsByPrice('$')} title="COST EFFECTIVES"/>
          <ResultsList  results={filterResultsByPrice('$$')} title="BIT PRICIERS"/>
        <ResultsList  results={filterResultsByPrice('$$$')} title="BIG SPENDER" />
        </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen

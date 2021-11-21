import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp';

const useResults = () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (searchTerm) => {
        try {
            console.log("hi there")
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
          
        } catch (error) {
            setErrorMessage('something went wrong')
        }
   
    };
    
    useEffect(() => {
        searchApi('pasta')
    }, [])
    return [searchApi,results,errorMessage]
}

export default useResults
import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, TextInput, FlatList } from 'react-native';
import styled from 'styled-components/native';



const FeedView = styled.View`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 10px;
`

const FlatView = styled.View`
    margin-top: 60px;
`

const Card = styled.TouchableOpacity`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 4px;
    padding: 0px;
    width: 104px;
    height: 112px;
    left:0px;
    top: 0px;
    border: 1px solid #FF0000;
    border-radius: 8px;  
    background-color: #FFFFFF
`

const CardLayout = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top:2px;
    margin-bottom: 4px
`

const ViewNumber = styled.View`
    align-items: flex-end;
    justify-content: flex-start;
    height: 12px;
    width: 88px;
    margin-top: 3px
`
const StyledNumber = styled.Text`
    color: #FF0000;
    font-style: normal;
    font-weight: normal;
    font-size: 8px;
    line-height: 12px;
`
const ViewImage = styled.View`
    align-items: center;
    justify-content: center;
    height: auto;
`
const ViewName = styled.View`
    align-items: center;
    justify-content: center;
    height: 24px;
    width:104px;
    background-color: #FF0000;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
`
const StyledName = styled.Text`
    font-weight: bold;
    color: #FFFFFF;
    text-transform:capitalize;
`
const Separator = styled.View`
    height: 8px;
    width: 100%;
    
`
const ViewSearch = styled.View`
    position: absolute;
    z-index: 1;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
`

const StyledSearch = styled.TextInput`
    border-width: 1px;
    border-color: #E0E0E0;
    text-align: center;
    width: 328px;
    height: 30px;
    background: #FFFFFF;
    border-radius: 8px;
`

const StyledImage = styled.Image`
    width: 82px;
    height: 82px;
`
const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}


const Feed = (props) => {

    const [pokemons, setPokemons] = useState([]);
    const [fullData, setFullData] = useState([]);
    const [search, setSearch] = useState('');
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        fetchResults()
    }, []);

    const fetchResults = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=500')
        .then(response => response.json())
        .then(pokemons => {setPokemons(pokemons.results); setFullData(pokemons.results)})

    }

    const handleSearch = search => {
        const filteredData = fullData.filter(pokemon => 
            pokemon.name.toLowerCase().includes(search.toLowerCase()))

        setPokemons(filteredData)

    }
      
    const onRefresh = () => {
        setRefreshing(true);
        wait(3000).then(() => setRefreshing(false));     
    };


    return (
        <FeedView>
            <ViewSearch>
                <StyledSearch
                    placeholder = "Procurar" 
                    onChangeText={value => {setSearch(value); handleSearch(value)}}
                    value={search}
                />
            </ViewSearch>

 

                <FlatView>
               

                    <FlatList
                        data={pokemons}
                        numColumns={3}
                        ItemSeparatorComponent={() => <Separator />}
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        renderItem={({ item, index }) => (

                            
                                <Card
                                    activeOpacity={0.5}
                                    key={index}
                                    onPress={() => 
                                        props.navigation.navigate('Details', { pokemon: item.name })
                                    }
                                >
                                    <CardLayout>

                                        <ViewNumber>
                                            <StyledNumber>#{index+1}</StyledNumber>
                                        </ViewNumber>
                                        <ViewImage>
                                            <StyledImage 
                                                source={{
                                                    uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${
                                                            item.name
                                                    }.png`,
                                                }}
                                            />
                                        </ViewImage>
                                        <ViewName>
                                            <StyledName>{item.name}</StyledName>
                                        </ViewName>

                                    </CardLayout>
                                </Card>
                            )} 





                    keyExtractor={ item  => item.name }


                    />
                   
                </FlatView>

 

        </FeedView>
        )
}

export default Feed;
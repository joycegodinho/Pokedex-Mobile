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
    margin-top: 70px;
`

const Card = styled.TouchableOpacity`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    padding: 0px;
    width:104px;
    height: 112px;
    left:0px;
    top: 0px;

    border: 1px solid #74cb48;
    border-radius: 8px;
    
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
    align-items: center;
    justify-content: center;
    height: 12px;
    width:88px;
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
`
const Separator = styled.View`
    height: 0px;
    width: 100%;
    
    background-color: #ced0ce
`
const ViewSearch = styled.View`
    position: absolute;
    margin-bottom: 70px;
    left: 20%;
    z-index: 1;
    margin-top: 10px;
`

const StyledSearch = styled.TextInput`
    height: 40px;
    border-width: 1px;
    border-color: #000000;
    text-align: center;
    width: 250px;
    border-radius: 50px;
`

const StyledImage = styled.Image`
    width: 72px;
    height: 72px;
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
                                            <Text>#{index+1}</Text>
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
                                            <Text>{item.name}</Text>
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
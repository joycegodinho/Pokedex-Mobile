import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import styled from 'styled-components/native';



const FeedView = styled.View`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 10px;
`

const Card = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    border-bottom-width: 1px;
    border-bottom-color: #000000
    margin-horizontal: 20px;
    margin-vertical: 10px;

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
    width: 150px;
    height: 150px;
`


const Feed = (props) => {

    const [pokemons, setPokemons] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetchResults();
    }, []);

    const fetchResults = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=500')
        .then(response => response.json())
        .then(pokemons => setPokemons(pokemons.results))
    }

    return (
        <FeedView>
            <ViewSearch>
                <StyledSearch
                    placeholder = "Procurar" 
                    onChangeText={value => setSearch(value)}
                    value={search}
                />
            </ViewSearch>

            <ScrollView>

                <View>
                    {pokemons
                    .filter(pokemon => 
                        pokemon.name.toLowerCase().includes(search.toLowerCase()))
                        .map((pokemon,index) => {
                            return (
                                <Card
                                    activeOpacity={0.5}
                                    key={index}
                                    onPress={() => 
                                        props.navigation.navigate('Details', { pokemon: pokemon.name })
                                    }
                                >
                                    <StyledImage 
                                        source={{
                                            uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${
                                                    pokemon.name
                                            }.png`,
                                        }}
                                    />

                                    <Text>{pokemon.name}</Text>

                                </Card>
                            )
                        })
                    }
                </View>

            </ScrollView>

        </FeedView>
        )
}

export default Feed;
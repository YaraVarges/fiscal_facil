import React from 'react';
import { Text, View, FlatList } from "react-native";
import { SearchBar } from "react-native-elements";
import { getcfop } from '../../../api';
import Icon from 'react-native-vector-icons/AntDesign';

import { ViewListagem, ViewListagemItem, TextDestaque, TextAlignJustify } from '../../../assests/style';


const Item = ({ title, description }) => {
    return (
        <ViewListagemItem>
            <TextDestaque>Código CFOP: {title}</TextDestaque>
            <TextAlignJustify>Descrição: {description}</TextAlignJustify>
        </ViewListagemItem>
    );
};

export default class AboutCFOP extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pesquisarItem: "",
            dadosCFOP: []
        };
    }

    atualizarNome = nome => {
        this.setState({
            pesquisarItem: nome,
        })
    }
        
    pesquisarCFOP = (pesquisarItem) => {
        if(pesquisarItem !== "") {
            const pesquisa = this.state.allDadosCFOP.filter((data) => 
            data.cfop === pesquisarItem);

            this.setState({
                dadosCFOP: pesquisa
            })
        } else {
            alert(`Sem resultados para a pesquisa. Insira um CFOP válido.`)
            this.setState({
                dadosCFOP: this.state.allDadosCFOP
            })
        }
    };

    componentDidMount(){
        getcfop()
        .then((responseJson) => {
            this.setState({
                dadosCFOP: responseJson,
                allDadosCFOP: responseJson
            })
        })
        .catch(function(error) {
            console.log('Erro de conexão: ' + error.message);
        });
    }

    render() {
        return (
            <>
                <ViewListagem >
                <SearchBar
                        placeholder="Pesquisar Código CFOP"
                        searchIcon={false}
                        onChangeText={nome => {
                            this.atualizarNome(nome)
                        }}
                        value={this.state.pesquisarItem}
                        autoCorrect={false}
                        placeholderTextColor={'#c6d2d2'}
                        style={{color:'#c6d2d2'}}
                        onClear={ () => {
                            this.setState({
                                dadosCFOP: this.state.allDadosCFOP
                            })
                        }
                        }
                    /><Icon
                        style={{ padding: 6 , marginTop: -50, marginBottom: 30, marginLeft: 330, marginRight: 50, color:'#c6d2d2'}}
                        size={20}
                        name="search1"
                        onPress={
                            () => {
                                this.setState({dadosCFOP:[]});
                                this.pesquisarCFOP(this.state.pesquisarItem);
                            }
                        }
                     ></Icon>
                    <FlatList
                        data={this.state.dadosCFOP}
                        renderItem={({ item }) => <Item title={item.cfop} description={item.descricao}/>}
                        keyExtractor={(item) => item._id}
                    />
                </ViewListagem>
            </>
        );
    }
}

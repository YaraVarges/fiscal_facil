import React from 'react';
import {  ScrollView, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';

import { ViewCardDetails, TextCardDetails, ImageLogo } from '../../assests/style';

export default class Feeds extends React.Component {
  render() {
    return (
      <>
        <ScrollView>
          <ViewCardDetails>
            <ImageLogo source={require('../../assests/img/logo.png')}></ImageLogo>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('AboutNCM')}>
              <Card>
              <Card.Title>NCM - Nomenclatura Comum do Mercosul</Card.Title>
              <Card.Image style={{ width:'100%' }} source={require('../../assests/img/codigo-ncm.png')}/>
                <TextCardDetails>
                    Nomenclatura Comum do Mercosul (NCM) é uma Nomenclatura regional 
                    para categorização de mercadorias adotada pelo Brasil, Argentina, Paraguai 
                    e Uruguai, sendo utilizada em todas as operações de comércio 
                    exterior dos países do Mercosul.
                </TextCardDetails>
            </Card>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('AboutCFOP')}>
              <Card>
              <Card.Title>CFOP - Código Fiscal de Operações e Prestações</Card.Title>
              <Card.Image style={{ width:'100%' }} source={require('../../assests/img/cfop.jpg')}/>
                <TextCardDetails>
                    CFOP é a abreviação de Código Fiscal de Operações e Prestações. Esse código identifica 
                    uma determinada operação por categorias no momento da emissão da nota fiscal, sendo
                    fixada uma tributação sobre a operação de interesse do Fisco.
                </TextCardDetails>
            </Card>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('AboutCST')}>
            <Card>
              <Card.Title>CST - Código de Situação Tributária</Card.Title>
              <Card.Image style={{ width:'100%' }} source={require('../../assests/img/cst.png')}/>
                <TextCardDetails>
                    Código de Situação Tributária, ou apenas CST, é um classificador que determina a 
                    incidência do ICMS sobre um produto ou serviço. Ele serve para orientar os contribuintes 
                    no processo de comercialização de mercadorias e auxiliar as entidades federativas no processo
                    de fiscalização tributária.
                </TextCardDetails>
            </Card> 
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('AboutCEST')}>
            <Card>
              <Card.Title>CEST - Código Especificador da Substituição Tributária</Card.Title>
              <Card.Image style={{ width:'100%' }} source={require('../../assests/img/cest.png')}/>
              <TextCardDetails>
                  O Código Especificador da Substituição Tributária (CEST) é um método utilizado para estabelecer 
                  uma regra padrão de modo a facilitar a identificação das mercadorias e bens que estão sujeitos à 
                  Substituição Tributária e antecipação de ICMS.
              </TextCardDetails>
            </Card> 
            </TouchableOpacity>
          </ViewCardDetails>
        </ScrollView>
      </>
        
      
    );
  }
}
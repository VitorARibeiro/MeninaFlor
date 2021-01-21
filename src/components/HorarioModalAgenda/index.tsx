import React, { useState, useEffect } from 'react';

import { ModalProps, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AgendaService } from '../../services/agenda.service';
import { Agenda } from '../../model/agenda.model';

import { 
  Container, 
  HorarioModal, 
  ConteudoGeralModal,
  ConteudoCabecalhoModal,
  ConteudoCorpoModal,
  ConteudoIcon, 
  TextoModal, 
  ButtonModal, 
  TextoBotao,
  TextHorario } from './styles';

interface HorarioModalProps extends ModalProps{
  modal: boolean;
  closeModal: any;
  dataAtual: string;
}
// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function Icon(props: { name: string }) {
  return <Ionicons size={30} style={{ marginTop: 10 }} {...props} />;
}

const HorarioModalAgenda: React.FC<HorarioModalProps> = ({modal, closeModal, dataAtual, ...rest}) => {
  const [horario, setHorario] = useState([]);

  const findHorarioAgenda = () => {
    AgendaService.findAll()
      .then((response: any) => {
        if(response._array.length > 0 && response != null && response != undefined){
          setHorario(response._array);
        }else{
          console.log("Nao encontrei");
        }
      }), (error) => {
        console.log(error);
      }
  }

  const insertHorarioAgenda = (agenda: Agenda) => {
    AgendaService.addData(agenda)
      .then((response: any) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      })
  }


  useEffect(() => {
    findHorarioAgenda(); 
  }, []);

  return (
    <Container>
      <HorarioModal 
        visible={modal} 
        animationType={"slide"}
        {...rest}
      >
        <ConteudoGeralModal>
          <ConteudoCabecalhoModal>
            <TextoModal>Data: {dataAtual}</TextoModal>
            <ConteudoIcon>
              <ButtonModal onPress={() => {}}>
                <Icon name="add-outline" />
              </ButtonModal>
              <ButtonModal onPress={() => closeModal(false)}>
                <Icon name="close-outline" />
              </ButtonModal>
            </ConteudoIcon>
          </ConteudoCabecalhoModal>
          <ConteudoCorpoModal>        
            { horario.length > 0 ? horario.map((item, key) => {
              return (
                <TextHorario key={item.id}>{item.nome}</TextHorario>
              )
            }) : <TextHorario>Sem dados</TextHorario> }
          </ConteudoCorpoModal>
        </ConteudoGeralModal>
      </HorarioModal>
    </Container>
  );
}

export default HorarioModalAgenda;
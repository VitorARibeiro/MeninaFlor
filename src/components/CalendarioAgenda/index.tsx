import React, { Component, useState } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Calendar } from 'react-native-calendario';
import Moment from 'moment';


import HorarioModalAgenda from '../HorarioModalAgenda';

const CalendarioAgenda: React.FC = () => {
  const [statusModalAgenda, setStatusModalAgenda] = useState<boolean>(false);
  const [dataAtual, setDataAtual] = useState<string>('');
  return (
    <View style={styles.container}>
      <Calendar
          onChange={(range) => {
            setDataAtual(Moment(range['startDate']).format('DD/MM/YYYY'))
            setStatusModalAgenda(true)}
          }
          minDate={new Date()}
          disableRange={true}
          locale={'br'}
          theme={{
              activeDayColor: {},
              monthTitleTextStyle: {
              color: '#6d95da',
              fontWeight: '300',
              fontSize: 16,
              },
              emptyMonthContainerStyle: {},
              emptyMonthTextStyle: {
              fontWeight: '200',
              },
              weekColumnsContainerStyle: {},
              weekColumnStyle: {
              paddingVertical: 10,
              },
              weekColumnTextStyle: {
              color: '#b6c1cd',
              fontSize: 13,
              },
              nonTouchableDayContainerStyle: {},
              nonTouchableDayTextStyle: {},
              startDateContainerStyle: {},
              endDateContainerStyle: {},
              dayContainerStyle: {},
              dayTextStyle: {
              color: '#2d4150',
              fontWeight: '200',
              fontSize: 15,
              },
              dayOutOfRangeContainerStyle: {},
              dayOutOfRangeTextStyle: {},
              todayContainerStyle: {},
              todayTextStyle: {
              color: '#6d95da',
              },
              activeDayContainerStyle: {
              backgroundColor: '#6d95da',
              },
              activeDayTextStyle: {
              color: 'white',
              },
              nonTouchableLastMonthDayTextStyle: {},
          }}
          />
        <HorarioModalAgenda 
          modal={statusModalAgenda} 
          closeModal={setStatusModalAgenda} 
          dataAtual={dataAtual}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default CalendarioAgenda;
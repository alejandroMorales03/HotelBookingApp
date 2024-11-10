import React, { useState, useEffect } from "react";
import { Text, View, Modal, Button } from "react-native"
import DateTimePicker from 'react-native-ui-datepicker';

const Calendar = ({
    isModalVisible,
    setModalVisible,
    dates,
    setDates
}) =>{
    const handleDateChange = (start, end) => {
        setDates({ startDate: start, endDate: end });
    };

    const closeCalendar = () => {
        //add logic to handle if startDate or endDate are NULL
        setModalVisible(false);
    };

    return(
        <View>
            <Modal
             transparent={false}
             visible={isModalVisible}
             animationType='slide'
            >
                <View>
                    <Button 
                        onPress={() => {
                            closeCalendar(false);
                        }}
                    >
                        Done
                    </Button>
                </View>
                <View>
                    <DateTimePicker
                        minDate={new Date()}
                        mode="range"
                        onChange={({startDate, endDate}) => {
                            handleDateChange(startDate, endDate);
                        }}
                        startDate={dates.startDate}
                        endDate={dates.endDate}
                    />
                </View>
            </Modal>
        </View>
    )
};

export default Calendar;


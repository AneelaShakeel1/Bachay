import React from 'react'
import DatePicker from 'react-native-date-picker';

const DatePickerComponent = (props) => {
    return (
        <DatePicker
            modal
            open={props.open}
            date={props.date}
            mode={props.mode ? props.mode : 'date'}
            onConfirm={props.onConfirm}
            onCancel={props.onCancel}
            minimumDate={props.minimumDate}
        />
    )
}

export default DatePickerComponent
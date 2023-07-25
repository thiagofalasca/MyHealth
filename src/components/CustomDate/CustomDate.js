import { View, Modal, Text, TouchableOpacity, Pressable } from 'react-native'
import { useState } from 'react'
import DatePicker from 'react-native-modern-datepicker'
import { styles } from './CustomDateStyle'

const CustomDate = ({ setDate, setDateText }) => {
    const [open, setOpen] = useState(false)
    const [date, setSelectedDate] = useState('')

    const handleOnPress = () => {
        setOpen(!open);
    }

    const handleDateChange = (selectedDate) => {
        const dateParts = selectedDate.split('/');
        const newDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`
        setDate(newDate);
        setSelectedDate(newDate);
    }

    const setText = () => {
        return date ? date : setDateText
    }

    return (
        <View style={{ width: '55%' }}>
            <Pressable style={styles.dateButton} onPress={handleOnPress}>
                <Text style={styles.date}>{setText()}</Text>
            </Pressable>
            <Modal animationType="slide" transparent={true} visible={open}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <DatePicker
                            options={{
                                defaultFont: 'AveriaLibre-Regular',
                                headerFont: 'AveriaLibre-Regular',
                            }}
                            mode="calendar"
                            selected={date}
                            onDateChange={(selectedDate) => handleDateChange(selectedDate)}
                        />
                        <TouchableOpacity onPress={handleOnPress}>
                            <Text style={styles.text}>Confirmar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default CustomDate
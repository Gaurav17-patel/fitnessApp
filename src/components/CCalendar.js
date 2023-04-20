import React, {useMemo} from 'react';
import {Colors} from '../theme/colors';
import {
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  Text,
  Pressable,
} from 'react-native';
import {Fonts} from '../constant';
import {dynamicSize} from '../constant/DynamicFontSize';
import {useEffect} from 'react';
import {useState} from 'react';

const {width} = Dimensions.get('window');
const ITEM_WIDTH = width * 0.12;
const ITEM_HEIGHT = 90;

const CCalendar = ({selectedDate, setSelectedDate}) => {
  const [dates, setDates] = useState([]);

  const onDatePress = date => {
    setSelectedDate(date);
  };

  const isSameDay = (date1, date2) => {
    return date1.getDate() === date2.getDate();
  };

  const getDayString = date => {
    return date.toString().split(' ')[0];
  };

  useEffect(() => {
    const d = new Date();
    const totalDays = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
    const monthlyDate = [];

    for (let i = 1; i <= totalDays; i++) {
      const r = new Date(d.getFullYear(), d.getMonth(), i, 0);
      monthlyDate.push(r);
    }
    setDates([...monthlyDate]);
  }, []);

  const renderItem = ({item, index}) => {
    const dayNumber = item.getDate();
    const dayString = getDayString(item);
    const isActive = isSameDay(selectedDate, item);
    return (
      <Pressable
        onPress={() => onDatePress(item)}
        style={[styles.item, isActive && {backgroundColor: '#FFFFFF'}]}>
        <View
          style={[
            isActive && {
              borderRadius: 14,
              height: 28,
              width: 28,
              justifyContent: 'center',
              backgroundColor: Colors.forgot_psw,
            },
          ]}>
          <Text style={[styles.dateOutput, isActive && styles.activeDateText]}>
            {dayNumber}
          </Text>
        </View>
        <Text style={[styles.dayStyle, isActive && styles.activeText]}>
          {dayString}
        </Text>
      </Pressable>
    );
  };

  return (
    <FlatList
      data={dates}
      horizontal={true}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.toDateString()}
    />
  );
};

const styles = StyleSheet.create({
  dateOutput: {
    color: Colors.welcome_text,
    fontSize: dynamicSize(12),
    fontFamily: Fonts.fontSemiBold,
  },
  dayStyle: {
    color: Colors.placeholder_color,
    textTransform: 'uppercase',
    paddingTop: 10,
    fontSize: dynamicSize(10),
    fontFamily: Fonts.fontSemiBold,
  },
  activeText: {
    color: Colors.welcome_text,
    fontFamily: Fonts.fontBold,
    fontSize: dynamicSize(12),
  },
  activeDateText: {
    color: '#FFFFFF',
    fontFamily: Fonts.fontBold,
    fontSize: dynamicSize(14),
    textAlign: 'center',
  },
  item: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
});

export default CCalendar;

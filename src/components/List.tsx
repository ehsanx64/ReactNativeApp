import React, {ReactElement} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {getTheme} from '../utils/style';

interface ListItem {
  name: string;
  text: string;
  onPress?: () => void;
}

type Props = {
  items: Array<ListItem>;
};

const List: React.FC<Props> = ({items}): ReactElement => {
  const renderer = ({item}) => (
    <View style={styles.itemWrapper}>
      <View style={styles.bulletWrapper}>
        <Text style={styles.bullet}>*</Text>
      </View>
      <Text style={styles.textWrapper}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.wrapper}>
      <FlatList
        renderItem={renderer}
        data={items}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  itemWrapper: {
    flexDirection: 'row',
  },
  bulletWrapper: {
    paddingHorizontal: 5,
  },
  bullet: {
    color: 'red',
    fontSize: 18,
    fontWeight: '900',
  },
  textWrapper: {
    fontSize: getTheme().fontSize,
  },
});

export default List;

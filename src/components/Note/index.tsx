import { Text, View } from 'react-native'

import { styles } from './styles'

type Props = {
  title: string;
  subtitle: string;
}

export function Note({ title, subtitle }: Props) {
  return (
    <View style={styles.note}>
      <Text numberOfLines={1} style={styles.noteTitle}>
        {title}
      </Text>

      <Text numberOfLines={1} style={styles.noteText}>
        {subtitle} 
      </Text>
    </View>
  )
}
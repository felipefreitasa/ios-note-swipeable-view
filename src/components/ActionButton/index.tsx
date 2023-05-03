import { Pressable } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { styles } from './styles'

type Props = {
  backgroundColor: string;
  icon: keyof typeof Feather.glyphMap
}

export function ActionButton({ backgroundColor, icon }: Props) {
  return (
    <Pressable style={[styles.swipeableActionButton, { backgroundColor }]}>
      <Feather 
        name={icon} 
        size={24} 
        color='#FFFDFF'
      />
    </Pressable>
  )
}
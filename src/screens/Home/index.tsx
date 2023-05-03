import { useRef } from 'react'
import {  Pressable, View } from 'react-native'
import { Swipeable } from 'react-native-gesture-handler'

import { Note } from '../../components/Note'
import { ActionButton } from '../../components/ActionButton'

import { styles } from './styles'

export function Home() {

  const swipeableRef = useRef<Swipeable>();

  return (
    <Pressable 
      style={styles.container}
      onPress={() => { swipeableRef.current?.close() }}
    >
      <Swipeable
        ref={(ref) => {if(ref) swipeableRef.current = ref }}
        containerStyle={styles.swipeableContainer}
        overshootLeft={false}
        renderLeftActions={() => (
          <ActionButton
            backgroundColor='#FE9400'
            icon='pocket'
          />
        )}
        overshootRight={false}
        renderRightActions={() => (
          <View style={styles.swipeableActions}>
            <ActionButton
              backgroundColor='#3293FC'
              icon='share'
            />

            <ActionButton
              backgroundColor='#787AFF'
              icon='folder'
            />

            <ActionButton
              backgroundColor='#FD3B31'
              icon='trash'
            />
          </View>
        )}
      >
        <Note
          title="Componente de nota do iOS"
          subtitle='09:17 Criado com React Native Gesture Handler!'
        />
      </Swipeable>
    </Pressable>
  )
}
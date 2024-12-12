import { Text, Pressable, PressableProps} from 'react-native';
import { s } from './styles';
import { categoriesIcons } from '@/utils/categories-icons';
import { colors } from '@/styles/theme';

type Props = PressableProps & {
    iconId: string
    isSelected?: boolean
    name: string
}

export function Category ({ name, iconId, isSelected = false, ...rest}: Props){
    const Icon = categoriesIcons[iconId]
    return(
        <Pressable style={[s.container, isSelected && s.containerSelected]} {...rest}>
            <Icon color={colors.gray[isSelected ? 100 : 400]} size={16}/>
            <Text style={[s.name, isSelected && s.nameSelected]}>{name}</Text>
        </Pressable>
    )
}


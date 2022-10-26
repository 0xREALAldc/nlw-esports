import { useEffect, useState } from 'react';
import { Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { Background } from '../../components/Background';
import { GameCard, GameCardProps } from '../../components/GameCard'; 
import { Heading } from '../../components/Heading';

import logoImg from '../../assets/logo-nlw-esports.png';

import { styles } from './styles';

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);

  const navigation = useNavigation();

  function handleOpenAd({id, title, bannerUrl}: GameCardProps) {
    navigation.navigate('ads', {id, title, bannerUrl} );
  }

  useEffect(() => {
    fetch('http://192.168.2.100:3333/games')
      .then(response => response.json())
      .then(data => setGames(data))
  }, []);

  return (
    <Background>
      <SafeAreaView style={ styles.container }> 
        <Image 
          source={ logoImg }
          style={ styles.logo }
        />
        
        <Heading 
          title="Encontre seu duo!"
          subtitle="Selecione o game que deseja jogar..."
        />

        <FlatList
          data={ games }
          keyExtractor={ item => item.id }
          renderItem={ ({ item }) => (
            <GameCard 
              data={ item }
              onPress={() => handleOpenAd(item)}
            />
          )}
          showsHorizontalScrollIndicator={ false }
          horizontal
          contentContainerStyle={ styles.contentList }
        />
      </SafeAreaView>
    </Background>
  );
}
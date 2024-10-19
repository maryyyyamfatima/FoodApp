import { StyleSheet, Image, View, Text, ScrollView } from 'react-native';
// import { ScrollView } from 'react-native-reanimated/lib/typescript/Animated';
import { Product } from '../types';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';

type productListItemProps = {
    MyProduct : Product;
};

export default function MyPizzaComponent({MyProduct}:productListItemProps){

    return(
    <View style={{ flex: 0.95 }}>
     <ScrollView>

    {
        MyProduct.map((data: { image: any; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; price: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; })=>{
            return(
                <View>
                <Image  
                    source = {{uri:data.image}} 
                    style={styles.image}
                />
                <Text style={styles.name}> {data.name} </Text>
                <Text style={styles.name}> {data.price} </Text>
                </View>
            )
        })
    }
        </ScrollView>
    </View>
    )
  }

  const styles = StyleSheet.create({
    image:{
      width:'100%', 
      aspectRatio:2/1
    },
    name:{
    fontSize:42
    }
    });
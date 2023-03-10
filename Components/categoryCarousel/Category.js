import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native'
import React from 'react'



import { data } from './data'

import Carousel from 'react-native-snap-carousel'
import CategoryCarousel from './CategoryCarousel'



const SLIDER_WIDTH = 340;
const ITEM_WIDTH = 100;



const Category = () => {
    const isCarousel = React.useRef(null)
    return (
        <SafeAreaView >

            <View style={Styles.container}>
                <Text style={Styles.title}>Categories</Text>
                <Pressable>
                    <Text style={{ fontFamily: "Nunitomedium" }}>
                        See all

                    </Text>
                </Pressable>
            </View>
            <Carousel
                layout='default'
                ref={isCarousel}
                data={data}
                renderItem={CategoryCarousel}
                useScrollView={true}
                hasParallaxImages={true}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
            />
        </SafeAreaView>
    )
}

export default Category

const Styles = StyleSheet.create({
    container: {
        width: 340,
        justifyContent: "space-between",
        flexDirection: "row"
    },


    title: {
        fontSize: 20,
        fontFamily: "Nunitoblack"
    }
})
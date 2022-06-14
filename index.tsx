import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export type Props = {
    lines?: number;
    footerStyle?: any;
    readMoreText: string;
    readLessText: string;
    children?: React.ReactNode;
    style: any;
};

const SimpleReadMore: React.FC<Props> = ({
    lines,
    footerStyle,
    readMoreText,
    readLessText,
    children,
    style,
}) => {
    const [showAll, setShowAll] = React.useState(
        false
    );
    return (
        <View>
            <Text numberOfLines={!showAll ? lines : 0} style={style}>
                {children}
            </Text>
            <ShowMore style={footerStyle} readMore={readMoreText} readLess={readLessText} showAll={showAll} setShowAll={setShowAll} />
        </View>
    );
};

const ShowMore = (props: { showAll: any; setShowAll: any; style: any; readMore: string; readLess: string; }) => {
    const { showAll, setShowAll, style, readMore, readLess } = props;

    if (showAll == false) {
        return (
            <Text style={(style) ? style : styles.defaultStyle} onPress={() => { setShowAll(true) }}>
                {readMore ? readMore : "Read more"}
            </Text>
        );
    } else {
        return (
            <Text style={(style) ? style : styles.defaultStyle} onPress={() => { setShowAll(false) }}>
                {readLess ? readLess : "Read less"}
            </Text>
        )
    }
};

const styles = StyleSheet.create({
    defaultStyle: {
        color: 'black',
        marginTop: 6,
    }
});


export default SimpleReadMore;
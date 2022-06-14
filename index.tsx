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
    lines = 3,
    footerStyle,
    readMoreText,
    readLessText,
    children,
    style,
}) => {
    const [showAll, setShowAll] = React.useState(
        false
    );

    const [linesOverflow, setLinesOverflow] = React.useState(
        false
    );

    const [loaded, setLoaded] = React.useState(
        false
    );

    const [initialLineCount, setInitialLineCount] = React.useState(
        100
    );

    function checkForLineOverflow(e: { nativeEvent: { lines: string | any[]; }; }) {
        setLoaded(true);
        if (!loaded) {
            if (e.nativeEvent.lines.length > lines) {
                setLinesOverflow(true);
                setInitialLineCount(lines)
            }
        }
    }

    return (
        <View>
            <Text numberOfLines={!showAll ? initialLineCount : 0} style={style} onTextLayout={checkForLineOverflow}>
                {children}
            </Text>
            <ShowMore overflow={linesOverflow} style={footerStyle} readMore={readMoreText} readLess={readLessText} showAll={showAll} setShowAll={setShowAll} />
        </View>
    );
};

const ShowMore = (props: { showAll: any; setShowAll: any; style: any; readMore: string; readLess: string; overflow: boolean }) => {
    const { showAll, setShowAll, style, readMore, readLess, overflow } = props;

    if (overflow) {
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
    } else {
        return null;
    }
};

const styles = StyleSheet.create({
    defaultStyle: {
        color: 'black',
        fontWeight: 'bold',
        marginTop: 6,
    }
});


export default SimpleReadMore;
# react-native-simple-read-more-text

### Add to project
```
npm i react-native-simple-read-more-text
```
or
```
expo install react-native-simple-read-more-text
```

### Usage
```JavaScript

import React, { Component } from 'react';
import { View } from 'react-native';
import SimpleReadMore from 'react-native-simple-read-more-text'

export class BodyText extends Component {
  render() {
    return (
      <View>
        <SimpleReadMore
          lines={2}
          readMoreText={"Custom read more text"}
          readLessText={"Custom read less text"}
          footerStyle={{ color: '#12122B', fontSize: 17, fontFamily: 'montserrat-bold' }}
          style={{fontSize: 14, color: 'black'}}>{body_text}
        </SimpleReadMore>
      </View>

    );
  }
}
``
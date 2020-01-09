import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image
} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page1: 100,
      page2: 0,
      page3: 0,
      pages: []
    };
  }


  componentDidMount() {
    var Pages = [
      {
        pageid: 1,
        pagetext: 'Hello World This Is First Respostory',
        color: 'black',
        height: 100,
        width: 100,

      },
      {
        pageid: 2,
        pagetext: 'Welcome to Big React',
        pageimage: null,
        color: 'black',
        height: 100,
        width: 0,

      },
      {
        pageid: 3,
        pagetext: 'Object',
        pageimage: null,
        color: 'black',
        height: 100,
        width: 0,

      }

    ]
    this.setState({ pages: Pages })
  }

  _timer(op) {
    var start = setInterval(() => {
      var nowVariable = this.state.pages
      if (nowVariable[op].width <= 0) // interval içine for 'dan i gelmiyor
        clearTimeout(start)
      nowVariable[op].width = nowVariable[op].width - 10
      nowVariable[op + 1].width = nowVariable[op + 1].width + 10
      this.setState({ pages: nowVariable })

    }, 15);
  }

  _change(pageid) {
    var pages = this.state.pages
    var i = 0
    for (i = 0; i < pages.length; i++) {
      console.log('aradı' + i)
      if (pageid == pages[pages.length - 1].pageid)
        return this._finish()
      if (pages[i].pageid == pageid) {

        this._timer(i)
      }

    }
  }


  _finish() {
    alert('finished')
  }


  render() {

    return (
      <View style={{ flex: 1, flexDirection: 'row' }} >
        {
          this.state.pages.map(item =>
            <ImageBackground source={require('./images/background.jpg')} key={item.pageid} style={{ height: item.height + '%', width: item.width + '%', backgroundColor: item.color, justifyContent: "center", alignItems: 'center', position: 'absolute' }} >
              {
                item.width == 0 ? null
                  :
                  <>
                    <Image style={{ height: 150, resizeMode: 'contain' }} source={require('./images/logo.png')} />
                    <Text style={{ color: 'white' }} >{item.pagetext}</Text>
                    <TouchableOpacity onPress={() => this._change(item.pageid)} style={{ backgroundColor: 'white', padding: 10, borderRadius: 10 }} >
                      <Text style={{ color: 'black' }} >Click To Change</Text>
                    </TouchableOpacity>
                  </>
              }

            </ImageBackground>
          )
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({

});



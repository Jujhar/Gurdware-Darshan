// ਸਿੰਘ ਦਾ ਕਾਮ - 2016

import React from 'react/addons';

let divStyle;

var Grid = React.createClass({
    componentWillMount: function() {
        document.body.style.backgroundColor = "white";
        divStyle = {
            marginTop: 0
        };

    },

    render() {
        return (
            <div>{this.props.rows}</div>
        );
    }
});

var Sign = React.createClass({

    componentWillMount: function() {
        document.body.style.backgroundColor = "green";
        divStyle = {
            marginTop: 300,
            width: '600'
        };

    },

    componentDidMount: function() {
        let img = document.getElementById('bk-img').height;
        let width = document.getElementById('bk-img').width;
        img = parseInt(img)-330;
        width = width * 0.57;
        margin = width * 0.65;


        divStyle = {
            marginTop: img,
            width: width,
            marginLeft: -margin
        };

    },

    componentWillUpdate: function() {

        let img = document.getElementById('bk-img').height;
        let width = document.getElementById('bk-img').width;
        img = parseInt(img)-330;
        width = width * 0.57;

        divStyle = {
            marginTop: img,
            width: width,
            marginLeft: -200
        };

    },

    componentWillUnmount: function() {
        document.body.style.backgroundColour = null;

    },



render() {

        if (typeof(this.props.gurdwarae[this.props.idx-1].sign) !== 'number') {
            return (
                <div style={divStyle}><a href={this.props.srcPng} target="blank">
                        <img src={this.props.srcPng} width="90%" /></a></div>
            );
        }

        else {
            return null;
        }

    }
});

export default React.createClass({



  getInitialState() {
    return ({ currentStep: 0, prevState: 0
    });
  },


    getDefaultProps: function(){

    return {gurdwarae : [
            { name: 'Sri Akal Takht', panjabi: 'ਸ੍ਰੀ ਅਕਾਲ ਤਖਾਤ', significance: '', sign:0, city: 'ਅਮ੍ਰਤਸਾਰ', google: 'q=akal+takht+created+history&start=10', instagram: '', flickr: '' },
            { name: 'Santokhsar Ji', panjabi: 'ਸੰਤੋਖਸਰ ਜੀ', significance: '', city: 'ਅਮ੍ਰਤਸਾਰ', google: 'q=santokhsar+history',instagram: '', flickr: '' },
            { name: 'Bibeksar Ji', panjabi: 'ਬਿਬੇਕਸਰ ਜੀ', significance: '', city: 'ਅਮ੍ਰਤਸਾਰ', google: 'q=bibeksar+history', instagram: '', flickr: '' },
            { name: 'Ramsar Ji', panjabi: 'ਰਾਮਸਰ ਜੀ', significance: '', city: 'ਅਮ੍ਰਤਸਾਰ', instagram: '', flickr: '', colorscm:1 },
            { name: 'Kaulsar Ji', panjabi: 'ਕੌਲਸਰ ਜੀ', significance: '', city: '', google: 'q=Kaulsar+sahib', instagram: '', flickr: '' },
            { name: 'Taran Tarn Je', panjabi: 'ਤਰਨ ਤਾਰਨ ਜੀ', significance: '', city: 'ਤਰਨ ਤਾਰਨ', instagram: '', flickr: '' },
            { name: 'Tapiana Je',panjabi: 'ਤਪਿਅਾਣੇ ਜੀ', significance: '', city: 'ਖਡੂਰ', instagram: '', flickr: '' },
            { name: 'Khadur Je', panjabi: 'ਖਡੂਰ ਜੀ',significance: '', sign:0, city: '', instagram: '', flickr: '' },
            { name: 'Guru Ki Baoli', panjabi: 'ਗੁਰੂ ਕੀ ਬਾਉਲੀ',significance: 'ਗੁਰੂ ਕੀ ਬਾਉਲੀ', city: '', instagram: '', flickr: '' },
            { name: 'Sri Goindval Sahib Je', panjabi: 'ਸ਼੍ਰੀ ਗੋਇੰਦਵਾਲ ਸਾਹਿਬ ਜੀ',significance: '', city: '', instagram: '', flickr: '' },
            { name: 'Tham ji', panjabi: 'ਥੰਮ ਜੀ',significance: '', city: '', instagram: '', flickr: '' },
            { name: 'Nanakana Ji', panjabi: 'ਨਨਕਾਣੇ ਜੀ', significance: '', sign:0, city: '', instagram: '', flickr: '' },
            { name: 'Kartarpur Ji', panjabi: 'ਕਰਤਾਰਪੁਰ ਜੀ', significance: '', sign:0, city: '', instagram: '', flickr: '' },
            { name: 'Baba Nanak Dera Ji', panjabi: 'ਬਾਬੇ ਨਾਨਕ ਡੇਹਰੇ ਜੀ', significance: '', city: '', instagram: '', flickr: '' },
            { name: 'Takht Kesgarh Sahib Anandpur Ji', panjabi: 'ਤਖ਼ਤ ਕੇਸਗੜ ਸਾਹਿਬ ਅੰਨਦਪੁਰ ਜੀ', sign:0, significance: '', city: '', instagram: '', flickr: '' },
            { name: 'Kiratpur Ji', panjabi: 'ਕੀਰਤਪੁਰ ਜੀ', significance: '', city: '', instagram: '', flickr: '' },
            { name: 'Paonta Ji', panjabi: 'ਪਾਂਉਟੇ ਜੀ', significance: '', city: '', instagram: '', flickr: '' },
            { name: 'Takht Sri Patna Sahib Harimander Ji', panjabi: 'ਤਖ਼ਤ ਸ੍ਰੀ ਪਟਨਾ ਸਾਹਿਬ ਹਰਿਮੰਦਿਰ ਜੀ', significance: '', city: '', instagram: '', flickr: '' },
            { name: 'Delhi Me Sis Ganj', panjabi: 'ਦਖ਼ਲੀ ਮੈ ਸ਼ੀਸ਼ ਗੰਜ', sign:0, significance: '', city: '', instagram: '', flickr: '' },
            { name: 'Raqab Ganj', panjabi: 'ਰਕਾਬ ਗੰਜ', significance: '', city: '', instagram: '', flickr: '' },
            { name: 'Bala Sahib', panjabi: 'ਬਾਲਾ ਸਾਹਿਬ', significance: '', city: '', instagram: '', flickr: '', colorscm:1 },
            { name: 'Bangla Sahib', panjabi: 'ਬੰਗਲਾ ਸਾਹਿਬ', significance: '', city: '', instagram: '', flickr: '' },
            { name: 'Bebaur Sahib Ji', panjabi: 'ਬਿਭੌਰ ਸਾਹਿਬ ਜੀ', significance: '', city: '', instagram: '', flickr: '' },
            { name: 'Panja Sahib Je', panjabi: 'ਪੰਜੇ ਸਾਹਿਬ ਜੀ', sign:0, significance: '', city: '', instagram: '', flickr: '' },
            { name: 'Kapal Mochan Je', panjabi: 'ਕਪਾਲ ਮੋਚਨ ਜੀ', significance: '', city: '', instagram: '', flickr: '' },
           // { name: ' Mochan Je', panjabi: 'ਰਣ ਮੋਚਨ ਜੀ', significance: '', city: '', instagram: '', flickr: '' },
            { name: ' Nanak Mata Je', panjabi: 'ਨਾਨਕ ਮਤੇ ਜੀ', sign:0, significance: '', city: '', instagram: '', flickr: '' },
            { name: ' Tilganji Je', panjabi: 'ਤਿਲਗੰਜੀੇ ਜੀ', sign:0, significance: '', city: '', colorscm:2, instagram: '', flickr: '' },
            { name: 'Nanak Jhira Je', panjabi: 'ਨਾਨਕ ਝੀਰੇ ਜੀ', significance: '', city: '', colorscm:2, instagram: '', flickr: '' },
            { name: 'Shikar Ghat', panjabi: 'ਸ਼ਿਕਾਰ ਘਾਟ ਜੀ', significance: '', city: '', instagram: '', flickr: '' },
            { name: 'Hera Ghat', panjabi: 'ਹੀਰਾ ਘਾਟ ਜੀ', significance: '', city: '', instagram: '', flickr: '' },
            { name: 'Mata Sahib Devan je', panjabi: 'ਮਾਤਾ ਸਾਹਿਬ ਦਿਵਾਂ ਜੀ', significance: '', city: '', instagram: '', flickr: '' },
            { name: 'Sangat Sahib Ji', panjabi: 'ਸੰਗਤ ਸਾਹਿਬ ਜੀ', significance: '', city: '', instagram: '', flickr: '' },
            { name: 'Mal Tekari Sahib Je', panjabi: 'ਮਾਲ ਟੇਕਰੀ ਸਾਹਿਬ ਜੀ', significance: '', city: '', colorscm:2, instagram: '', flickr: '' },
            { name: 'Basmath Nagar Damdama Sahib Je', panjabi: 'ਬਸਮਤ ਨਗਰ ਦਮਦਮਾ ਸਾਹਿਬ ਜੀ', significance: '', city: '', instagram: '', flickr: '' },
            { name: 'Banda Ghat Je', panjabi: 'ਬੰਦਾ ਘਾਟ ਜੀ', significance: '', city: '', instagram: '', flickr: '' },
            { name: 'Nagina Ghat Sahib Je', panjabi: 'ਨਗੀਨਾ ਘਾਟ ਸਾਹਿਬ ਜੀ', significance: '', city: '', instagram: '', flickr: '' },
            { name: 'Ganga Godavari Je', panjabi: 'ਗੰਗਾ ਗੋਦਾਵਰੀ ਜੀ', significance: '', sign:0, city: '', instagram: '', flickr: '' },
            { name: 'Takht Sahkand Sri Hajoor Sahib', panjabi: 'ਤਖ਼ਤ ਸ੍ਖ਼ਚਖੰਡ ਸ੍ਰੀ ਹਜ਼ੂਰ ਸ੍ਰੀ ਅਬਿਚਲ ਨਗਰੁ ਸਾਹਿਬ ਸ੍ਰੀ ਅਕਾਲ ਪੁਰਖ ਜੀ ਦਾ', colorscm:1, sign:0, significance: '', city: '', instagram: '', flickr: '' }
        ]};

      },


  movePage(ix) {
    if (ix == 0) {
        this.setState({prevState: this.state.currentStep});
        this.setState({currentStep: 0});
    }
      //var numa = event.target.value;
    if (ix != 0 && ix != 39) {
        this.setState({currentStep: ix});
        this.setState({name: this.props.gurdwarae[ix-1].panjabi});
        this.setState({google: "https://www.google.ca/search?" + this.props.gurdwarae[ix-1].google});
        this.setState({imgSrc: "./src/imgs/" + (ix-1) + ".jpg"});
        this.setState({sign: "./src/imgs/" + (ix-1) + "-s.jpg"});
        this.setState({colorSchme: this.props.gurdwarae[ix-1].colorscm});
        this.setState({galleryImgSrc: "./src/imgs/" + (ix-1) + "-gl.jpg"});
        this.setState({gallery2ImgSrc: "./src/imgs/" + (ix-1) + "-gl2.jpg"});

    }

  },




  render() {
      var parent = this;
      var rows = this.props.gurdwarae.map(function(row, index){


          // Highlight page if last page visited
          if ((index+1) == parent.state.prevState) {
              return <span id="homescreen-box-select" className="homescreen-box"
                           onClick={parent.movePage.bind(null, index+1)}>
                        {row.name + ' - ' + index}
                  </span>
          }


          return  <span className="homescreen-box"
                        onClick={parent.movePage.bind(null, index+1)}>
                        {row.name + ' - ' + index}
                  </span>
      });

    if (this.state.currentStep == 0) {
      return (
          <div>
            <div className="mainInfo">
                <h1>Gurdware Darshan</h1>
            </div>

            <Grid rows={rows} prev={this.state.prevState}/>
          </div>
      );
    }


    if (this.state.currentStep != 0) {


        // Set colour scheme
        let divStyle = {
            color: 'black'
        };
        // 1 is grey
        if (this.state.colorSchme == 1) {
            divStyle = {
                color: '#f3e797'
            };
        }
        // 2 is blue
        if (this.state.colorSchme == 2) {
            divStyle = {
                color: '#25ceff'
            };
        }

      return (
          <div className="wrapper">
              <nav>
                <a onClick={this.movePage.bind(null, 0)}>home</a>
                <a onClick={this.movePage.bind(null, this.state.currentStep-1)}>prev</a>
                <a onClick={this.movePage.bind(null, this.state.currentStep+1)}>next</a>
              </nav>
              <img id="bk-img" className="bk-img" src={this.state.imgSrc}/><br />


              <div id="top">
                <span className="oneThirdWidth-left txt-vert">
                    <span style={divStyle}>{this.state.name}</span>
                </span>


                <span className="oneThirdWidth-right">
                    <br />
                    <a href={this.state.galleryImgSrc} target="blank">
                        <img src={this.state.galleryImgSrc} />
                    </a><br />
                    <a href={this.state.gallery2ImgSrc} target="blank">
                        <img src={this.state.gallery2ImgSrc} />
                    </a><br />
                </span>

              </div><br />
              <div id="main">
                  <img className="oneThirdWidth nishan" src="./src/imgs/nishan-sahib.gif"/><br /><br />
                  <div id="mainbody">


                    <span><a href={this.state.google} target="blank" style={divStyle}>Research</a></span>
                      <Sign idx={this.state.currentStep} gurdwarae={this.props.gurdwarae} srcPng={this.state.sign} /><br />

                  </div>
              </div>


          </div>
      );
    }



  }
});

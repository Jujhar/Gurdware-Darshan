// Built by Singh - 2016

import React from 'react/addons';

var Grid = React.createClass({
    render() {
        return (
            <div>{this.props.rows}</div>
        );
    }
});

var Sign = React.createClass({
    render() {
        return (
            <span><a href={this.props.srcpng} target="blank">Sign</a></span>
        );
    }
});

export default React.createClass({


  getInitialState() {
    return ({ currentStep: 0, prevState: 0
    });
  },


    getDefaultProps: function(){
    return {gurdwarae : [
        { name: 'Sri Akal Takht', panjabi: 'ਸ੍ਰੀ ਅਕਾਲ ਤਖਾਤ', significance: '', city: 'ਅਮ੍ਰਤਸਾਰ', google: 'q=akal+takht+created+history&start=10', instagram: '', flickr: '' },
        { name: 'Santokhsar Ji', panjabi: 'ਸੰਤੋਖਸਰ ਜੀ', significance: '', city: 'ਅਮ੍ਰਤਸਾਰ', google: 'q=santokhsar+history',instagram: '', flickr: '' },
        { name: 'Bibeksar Ji', panjabi: 'ਬਿਬੇਕਸਰ ਜੀ', significance: '', city: 'ਅਮ੍ਰਤਸਾਰ', google: 'q=bibeksar+history', instagram: '', flickr: '' },
        { name: 'Ramsar Ji', panjabi: 'ਰਾਮਸਰ ਜੀ', significance: '', city: 'ਅਮ੍ਰਤਸਾਰ', instagram: '', flickr: '' },
        { name: 'Kaulsar Ji', panjabi: 'ਕੌਲਸਰ ਜੀ', significance: '', city: '', google: 'q=Kaulsar+sahib', instagram: '', flickr: '' },
        { name: 'Taran Tarn Je', panjabi: 'ਤਰਨ ਤਾਰਨ ਜੀ', significance: '', city: 'ਤਰਨ ਤਾਰਨ', instagram: '', flickr: '' },
        { name: 'Tapiana Je',panjabi: 'ਤਪਿਅਾਣੇ ਜੀ', significance: '', city: 'ਖਡੂਰ', instagram: '', flickr: '' },
        { name: 'Khadur Je', panjabi: 'ਖਡੂਰ ਜੀ',significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Guru Ki Baoli', panjabi: 'ਗੁਰੂ ਕੀ ਬਾਉਲੀ',significance: 'ਗੁਰੂ ਕੀ ਬਾਉਲੀ', city: '', instagram: '', flickr: '' },
        { name: 'Sri Goindval Sahib Je', panjabi: 'ਸ਼੍ਰੀ ਗੋਇੰਦਵਾਲ ਸਾਹਿਬ ਜੀ',significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Tham ji', panjabi: 'ਥੰਮ ਜੀ',significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Nanakana Ji', panjabi: 'ਨਨਕਾਣੇ ਜੀ', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Kartarpur Ji', panjabi: 'ਕੀਰਤਪੁਰ ਜੀ', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Baba Nanak Dera Ji', panjabi: 'ਬਾਬੇ ਨਾਨਕ ਡੇਹਰੇ ਜੀ', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Takht Kesgur Sahib Ananadpur Ji', panjabi: 'ਤਖ਼ਤ ਕੇਸਗੜ ਸਾਹਿਬ ਅੰਨਦਪੁਰ ਜੀ', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Kirtpurji', panjabi: 'ਕੀਰਤਪੁਰ ਜੀ', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Paint Ji', panjabi: 'ਪਾਂਉਟੇ ਜੀ', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Takht Sri Patna Sahib', panjabi: 'ਤਖ਼ਤ ਸ੍ਰੀ ਪਟਨਾ ਸਾਹਿਬ', significance: '', city: '', instagram: '', flickr: '' },
        { name: ' HarmanderJi', panjabi: 'ਹਰਿਮੰਦਿਰ ਜੀ', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Delhi Me Ses Ganj', panjabi: 'ਦਖ਼ਲੀ ਮੈ ਸ਼ੀਸ਼ ਗੰਜ', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Jekab Ganj', panjabi: 'ਰਕਾਬ ਗੰਜ', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Bala Sahib', panjabi: 'ਬਾਲਾ ਸਾਹਿਬ', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Bangla Sahib', panjabi: 'ਬ', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Stattu Jhandai Sahib Je', panjabi: 'ਸਖ਼ਤੋੰ ਝੰਡਿਆਂ ਸਾਹਿਬਾਂ ਜੀ', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Bebaur Sahib Ji', panjabi: 'ਬਿਭੌਰ ਸਾਹਿਬ ਜੀ', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Sanjay Sahib Je', panjabi: 'ਪੰਜੇ ਸਾਹਿਬ ਜੀ', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Kepal Muchn Je', panjabi: 'ਕਪਾਲ ਮੋਚਨ ਜੀ', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Rn Mochn Je', panjabi: 'ਰਣ ਮੋਚਨ ਜੀ', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Nanak Mta Je', panjabi: 'Gu', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Shekar Ghat', panjabi: 'Gurd', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Hera Ghat', panjabi: 'Gurdwara Sahib', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Mata Sahib Devi je', panjabi: 'Gurdwara Sahib', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Sangat Sahib Ji', panjabi: 'Gurdwara Sahib', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Mal Takri Sahib Je', panjabi: 'Gurdwara Sahib', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Bsmt ngr damdma sahib ji', panjabi: 'Gurdwara Sahib', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Banda Ghat Je', panjabi: 'Gurdwara Sahib', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Negena Ghat Sahib Je', panjabi: 'Gurdwara Sahib', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Ganga Gaudwari Je', panjabi: 'Gurdwara Sahib', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Takht Sahkand Sri Hajoor Sahib', panjabi: 'ਤਖ਼ਤ ਸ੍ਖ਼ਚਖੰਡ ਸ੍ਰੀ ਹਜ਼ੂਰ ਸ੍ਰੀ ਅਬਿਚਲ ਨਗਰੁ ਸਾਹਿਬ ਸ੍ਰੀ ਅਕਾਲ ਪੁਰਖ ਜੀ ਦਾ', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Siri Abchal Nagar Sahib Je', panjabi: 'Gurdwara Sahib', significance: '', city: '', instagram: '', flickr: '' }
         ]};

  },


  movePage(ix) {
    if (ix == 0) {
        this.setState({prevState: this.state.currentStep});
        this.setState({currentStep: 0});
    }
      //var numa = event.target.value;
    if (ix != 0) {
        this.setState({currentStep: ix});
        this.setState({name: this.props.gurdwarae[ix-1].panjabi});
        this.setState({google: "https://www.google.ca/search?" + this.props.gurdwarae[ix-1].google});
        this.setState({imgSrc: "./src/imgs/" + (ix-1) + ".jpg"});
        this.setState({sign: "./src/imgs/" + (ix-1) + "-s.jpg"});
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
      return (
          <div className="wrapper">
              <nav>
                <a onClick={this.movePage.bind(null, 0)}>back</a>
                <a onClick={this.movePage.bind(null, this.state.currentStep-1)}>prev</a>
                <a onClick={this.movePage.bind(null, this.state.currentStep+1)}>next</a>
              </nav>
              <img className="bk-img" src={this.state.imgSrc}/><br />
              <div id="top">
                <span className="oneThirdWidth-left txt-vert">{this.state.name}</span>

                <span className="oneThirdWidth-right">
                    i<br />
                    <img src={this.state.galleryImgSrc} /><br />
                    <img src={this.state.gallery2ImgSrc} /><br />
                </span>

              </div><br />
              <div id="main">
                  <img className="oneThirdWidth nishan" src="./src/imgs/nishan-sahib.gif"/><br /><br />
                  <div id="mainbody">

                    <Sign src-png="this.state.sign" /><br />

                    <span><a href={this.state.google} target="blank">Research</a></span>
                  </div>
              </div>


          </div>
      );
    }



  }
});

// Built by Singh - 2016

import React from 'react/addons';

var Grid = React.createClass({
    render() {
        return (
            <div>{this.props.rows}</div>
        );
    }
});

export default React.createClass({


  getInitialState() {
    return ({ currentStep: 0
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
        { name: 'Guru Ki Baoli', panjabi: 'Gurdwara Sahib',significance: 'ਗੁਰੂ ਕੀ ਬਾਉਲੀ', city: '', instagram: '', flickr: '' },
        { name: 'Sri Goindval Sahib Je', panjabi: 'ਸ਼੍ਰੀ ਗੋਇੰਦਵਾਲ ਸਾਹਿਬ ਜੀ',significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Tham ji', panjabi: 'Gurdwara Sahib',significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Nanakana Ji', panjabi: 'Gurdwara Sahib', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Kartarpur Ji', panjabi: 'Gurdwara Sahib', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Baba Nanak Dera Ji', panjabi: 'Gurdwara Sahib', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Takht Kesgur Sahib Ananadpur Ji', panjabi: 'Gurdwara Sahib', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Kirtpurji', panjabi: 'Gurdwara Sahib', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Paint Ji', panjabi: 'Gurdwara Sahib', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Takht Sri Patna Sahib', panjabi: 'Gurdwara Sahib', significance: '', city: '', instagram: '', flickr: '' },
        { name: ' HarmanderJi', panjabi: 'Gurdwara Sahib', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Delhi Me Ses Ganj', panjabi: 'Gurdwara Sahib', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Jekab Ganj', panjabi: 'Gurdwara Sahib', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Bala Sahib', panjabi: 'Gurdwara Sahib', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Bangla Sahib', panjabi: 'Gurdwara Sahib', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Stattu Jhandai Sahib Je', panjabi: 'Gurdwara Sahib', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Bebaur Sahib Ji', panjabi: 'Gurdwara Sahib', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Sanjay Sahib Je', panjabi: 'Gurdwara Sahib', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Kepal Muchn Je', panjabi: 'Gurdwara Sahib', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Rn Mochn Je', panjabi: 'Gurdwara Sahib', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Nanak Mta Je', panjabi: 'Gurdwara Sahib', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Shekar Ghat', panjabi: 'Gurdwara Sahib', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Hera Ghat', panjabi: 'Gurdwara Sahib', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Mata Sahib Devi je', panjabi: 'Gurdwara Sahib', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Sangat Sahib Ji', panjabi: 'Gurdwara Sahib', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Mal Takri Sahib Je', panjabi: 'Gurdwara Sahib', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Bsmt ngr damdma sahib ji', panjabi: 'Gurdwara Sahib', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Banda Ghat Je', panjabi: 'Gurdwara Sahib', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Negena Ghat Sahib Je', panjabi: 'Gurdwara Sahib', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Ganga Gaudwari Je', panjabi: 'Gurdwara Sahib', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Takht Sahkand Sri Hajoor Sahib', panjabi: 'Gurdwara Sahib', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Siri Abchal Nagar Sahib Je', panjabi: 'Gurdwara Sahib', significance: '', city: '', instagram: '', flickr: '' }
         ]};

  },

  handleClick: function (event) {
    this.setState({ currentStep : 1 });
  },

  movePage(ix) {
    if (ix == 0) {
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

          return  <span className="homescreen-box"
                        onClick={parent.movePage.bind(event, index+1)}>
                        {row.name + ' - ' + index}
                  </span>
      });

    if (this.state.currentStep == 0) {
      return (
          <div>
            <div className="mainInfo">
                <h1>Gurdware Darshan</h1>
            </div>

            <Grid rows={rows} />
          </div>
      );
    }

    if (this.state.currentStep != 0) {
      return (
          <div className="hello-world">
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
                    <span><a href={this.state.sign} target="blank">Sign</a></span><br />
                    <span><a href={this.state.google} target="blank">Research</a></span>
                  </div>
              </div>


          </div>
      );
    }



  }
});

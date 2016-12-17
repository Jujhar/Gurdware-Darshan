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
        { name: 'Sri Akal Takht', panjabi: 'Gurdwara Sahib', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Santokhsar Ji', panjabi: 'Gurdwara Sahib', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Bibeksar Ji', panjabi: 'Gurdwara Sahib', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Ramsar Ji', panjabi: 'Gurdwara Sahib', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Khulsar Ji', panjabi: 'Gurdwara Sahib', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Taran Tarn Je', panjabi: 'Gurdwara Sahib', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Tapeana Je',panjabi: 'Gurdwara Sahib', significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Kapoor Je', panjabi: 'Gurdwara Sahib',significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Guru Ke Baoli', panjabi: 'Gurdwara Sahib',significance: '', city: '', instagram: '', flickr: '' },
        { name: 'Sri Goindval Sahib Je', panjabi: 'Gurdwara Sahib',significance: '', city: '', instagram: '', flickr: '' },
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
              <h1>PAGE -- {this.state.currentStep}</h1>
              <div id="top">
                <span className="oneThirdWidth">Name</span>
                <img className="oneThirdWidth" src="./src/imgs/nishan-sahib.gif" />
                <span className="oneThirdWidth">i</span>
              </div>


          </div>
      );
    }



  }
});

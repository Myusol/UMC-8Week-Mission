// AdPage.jsx
import React, { Component } from 'react';
import Ad from './Ad'; // Ad 컴포넌트 불러오기

export default class AdPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdVisible: true, // 광고 표시 여부를 나타내는 상태
    };
  }

  // 광고 표시/숨김을 토글하는 메서드
  handleToggleClick = () => {
    this.setState(prevState => ({
      isAdVisible: !prevState.isAdVisible,
    }));
  };

  // 렌더링 메서드
  render() {
    return (
      <div className="ad-page">
        <Ad showAd={this.state.isAdVisible} />

        <button onClick={this.handleToggleClick}>
          {this.state.isAdVisible ? '광고 안보기' : '광고 보기'}
        </button>
      </div>
    );
  }
}

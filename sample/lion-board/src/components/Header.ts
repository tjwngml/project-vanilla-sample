class HeaderComponent extends HTMLElement {
  // 웹 컴포넌트가 DOM 연결될 때 호출되는 메서드
  // 컴포넌트 렌더링과 이벤트 초기화를 수행
  connectedCallback() {
    this.render();
  }

  //  UI를 렌더링
  render() {
    this.innerHTML = `<p>헤더</p>`;
  }
}

// HeaderComponent를 <lion-header> 태그로 정의
customElements.define("lion-header", HeaderComponent);

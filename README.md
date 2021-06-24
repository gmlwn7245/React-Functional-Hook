## Class Component
```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
1. React.Component를 상속받은 클래스를 이용하여 컴포넌트 정의
2. lifeCycle 함수 사용 가능
3. setState를 이용하여 state 값 변경 가능


## Function Component
```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
1. 순수 자바스크립트 함수를 이용하여 컴포넌트 정의
2. lifeCycle 함수 사용 불가
3. state를 갖지 못하므로 setState 사용 불가


## Function Component을 사용하는 이유
1. 기존 class 컴포넌트는 this의 사용으로 코드의 재사용성과 구성이 어려움
2. Function 컴포넌트를 사용하면 코드를 간결하게 작성할 수 있음
3. LifeCycle과 State 변경을 위해 Hook이 도입됨


## Hook
* 함수 컴포넌트에서 React state와 LifeCycle features를 연동(hook into)할 수 있게 해주는 함수
* Hook은 class 안에서 동작하지 않으나 class 없이 React를 사용할 수 있도록 해줌


## Context
* React.createContext : context 생성
```
const MyContext = React.createContext(defaultValue);

```
* React 컴포넌트 트리 안에서 전역적으로 데이터를 공유할 수 있도록 고안된 방법
* 일반적인 React 애플리케이션에서 데이터는 위에서 아래로 (부모 -> 자식) props를 통해 전달되지만, 애플리케이션 안의 여러 컴포넌트들에 전해줘야 하는 props의 경우 복잡함
* context를 이용하면 단계마다 일일이 props를 넘겨주지 않고 컴포넌트 트리 전체에 데이터를 제공할 수 있음
* 단, context를 사용하면 컴포넌트 재사용이 어려워짐
```
<MyContext.Provider value={/* 어떤 값 */}>
```
* Provider는 Context Object에 포함된 React 컴포넌트인 Provider는 context를 구독하는 컴포넌트들에게 context의 변화를 알리는 역할을 함
* Provider 컴포넌트는 value prop을 받아서 이 값을 하위에 있는 컴포넌트에게 전달 (전달받는 컴포넌트 수 제한 X)
```
<MyContext.Consumer>
  {value => /* context 값을 이용한 렌더링 */}
</MyContext.Consumer>
```
* Consumer은 Context의 변화를 구독하는 React 컴포넌트
* 이 컴포넌트를 사용하면 함수 컴포넌트 안에서 context를 구독할 수 있음
[Context]](https://ko.reactjs.org/docs/context.html "Context")

## 기본 Hook

1. useState
```
const [state, setState] = useState(initialState);
```
* state 값과 그 값을 갱신하는 함수 반환
* state = 최초로 렌더링하는 동안 반환된 state
* setState = state를 갱신할 때 사용하는 함수
* 새 state 값을 받아 컴포넌트 리렌더링 큐에 등록함

2. useEffect
```
useEffect(didUpdate);
```
* 명령형 또는 어떤 effect를 발생하는 함수를 인자로 받음
* Function 컴포넌트 안에서 허용되지 않는 변형, 구독, 타이머, 로깅 또는 다른 side effect를 수행할 수 있도록 해줌
* 기본적으로 동작은 모든 렌더링이 완료된 후에 수행하지만 어떤 값이 변경되었을 때만 실행되게 할 수도 있음
```
useEffect(function(){
    return function(){
      //clean up
      console.log('%cfunc => useEffect number Return');
    }
  }, [number]);
```
* 위 코드처럼 useEffect로 전달된 함수는 return을 통해 정리(clean-up) 함수를 반환 가능
* return되는 함수는 다음 effect가 수행되기 이전의 effect를 정리하기 위해 사용
* useEffect의 두 번째 인자에 있는 대괄호[]는 해당 대괄호 안의 값이 변경되었을 시에만 useEffect 함수를 실행시키기 위한 일종의 조건

3. useContext
```
const value = useContext(MyContext);
```
* context 객체를 받아 그 context의 현재 값을 반환
* context의 현재 값은 트리 안에서 Hook을 호출하는 컴포넌트에 가장 가까이에 있는 < MyContext.Provider > 의 value prop에 의해 결정
* 컴포넌트에서 가장 가까운 < MyContext.Provider > 가 갱신되면 이 Hook은 그 MyContext provider에게 전달된 가장 최신의 context value를 사용하여 렌더러를 트리거함
* useContext로 전달한 인자는 context 객체 그 자체여야 함
```
맞는 사용 : useContext(MyContext)
틀린 사용: useContext(MyContext.Consumer)
틀린 사용: useContext(MyContext.Provider)
```

4. useReducer
```
const [state, dispatch] = useReducer(reducer, initialArg, init);
```
* useState의 대체 함수
* (state,action) => newState의 형태로 reducer를 받고 dispatch 와 짝의 형태로 state를 반환함 (Redux 참조)
* 다수 하윗값을 포함하는 복잡한 정적 로직을 만드는 경우나 다음 state가 이전 state에 의존적인 경우 보통 useState 보다 useReducer 선호


### Reference
[Hook API](https://ko.reactjs.org/docs/hooks-reference.html "Hook API")
[React](https://ko.reactjs.org/docs/state-and-lifecycle.html "React")

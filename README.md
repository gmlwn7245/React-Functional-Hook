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


## 기본 Hook

1. useState
```
const [state, setState] = useState(initialState);
```
* state 값과 그 값을 갱신하는 함수 반환
* state = 최초로 렌더링하는 동안 반환된 state
* setState = state를 갱신할 때 사용하는 함수

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

.. 나머지는 나중에 ..

### Reference
[Hook API](https://ko.reactjs.org/docs/hooks-reference.html "Hook API")
[React](https://ko.reactjs.org/docs/state-and-lifecycle.html "React")

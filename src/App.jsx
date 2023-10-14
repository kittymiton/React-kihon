/* */
import React, { useEffect, useState } from "react";
import { ColorfulMassage } from "./components/ColorfulMessage";
const App = () => {
  console.log("さいしょ");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        //trueの場合に更新する必要がないのでset関数を呼ばないようにし、falseだけ呼ぶ←→true
        faceShowFlag || setFaceShowFlag(true);
      } else {
        //trueの場合←→false
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  // JSの中でreturnしてHTMLのタグを書くJSX記法
  return (
    //複数行は（）で囲う
    <>
      {/* JSを使用する場合は｛}で囲う 中身はオブジェクトなので{} 文字列なので''で囲う */}
      <h1 style={{ color: "red" }}>こんにちは</h1>

      {/* コンポーネントのプロパティに値を設定してpropsを渡す */}
      <ColorfulMassage color="blue">お元気ですか?</ColorfulMassage>
      <ColorfulMassage color="pink">元気です!</ColorfulMassage>
      {/* コンポーネントタグ内の要素をchildrenとして渡す */}

      {/* 変数で当てる */}
      {/* <p style={contentLadyStyle}>元気です！</p> */}

      {/* JSXで返しているHTMLタグの中で{}で囲うJSと認識されるので｛関数｝をかく */}
      <button onClick={onClickCountUp}>カウントアップ！</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>＼(^o^)／</p>}
    </>
  );
};

export default App;

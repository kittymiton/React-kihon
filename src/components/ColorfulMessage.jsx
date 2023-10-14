import React from "react";

// 親から決まった色と決まった文章をpropsとして受け取るコンポーネント
export const ColorfulMassage = (props) => {
  // コンポーネントに対して動的に変更したい部分をpropsとして受け取る
  const { color, children } = props; //　分割代入　propsから取り出す
  const contentStyle = {
    color, // propsで渡ってきたobjのcolorを設定
    fontSize: "18px"
  };

  // JSの中でreturn内でHTMLのタグを書くJSX記法なのでJSに{}が必要
  return <p style={contentStyle}>{children}</p>;
  // propsで渡ってきたobjのmessageを取り出す
};

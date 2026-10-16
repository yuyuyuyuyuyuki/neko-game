"use client";

import { useState } from "react";

export default function Home() {

  const [score, setScore] = useState(0);

  return (
<main style={{

      minHeight: "100vh",

      display: "flex",

      flexDirection: "column",

      alignItems: "center",

      justifyContent: "center",

      background: "#fff0f5",

      color: "#333",

      fontFamily: "sans-serif"

    }}>
<h1>ねこゲーム 🐱</h1>
<p>ボタンを押してスコアを増やそう！</p>
<h2>スコア：{score}</h2>
<button

        onClick={() => setScore(score + 1)}

        style={{

          padding: "20px 40px",

          fontSize: "24px",

          borderRadius: "12px",

          border: "none",

          background: "#ff69b4",

          color: "white",

          cursor: "pointer"

        }}
>

        クリック！
</button>
<button

        onClick={() => setScore(0)}

        style={{

          marginTop: "16px",

          padding: "10px 20px",

          cursor: "pointer"

        }}
>

        リセット
</button>
</main>

  );

}
 
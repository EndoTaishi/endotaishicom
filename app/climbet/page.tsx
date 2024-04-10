'use client';
import React from "react";

function ClimBet() {

    const [betAmount, setBetAmount] = React.useState("1000"); // デフォルトの値を文字列に変更

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => { // イベントの型をReact.ChangeEvent<HTMLInputElement>に変更
      setBetAmount(e.target.value);
    };
    
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <header className="bg-blue-900 text-white py-2 px-4">
        <div className="flex justify-between items-center">
          <div>Clim Bet</div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto px-4 py-2">
        <div className="flex items-center bg-yellow-400 px-3 py-1 rounded-full text-sm font-roboto mb-2">
          <span className="text-blue-900">本日の予想 🌐</span>
        </div>

        <div className="font-roboto text-blue-900 font-bold text-lg my-4">
          4月8日から4月12日の東京都（東京）の平均気温の平年差は2℃以上になるか？
        </div>

        <div className="flex flex-col bg-blue-100 p-4 rounded my-2">
          <p className="font-roboto text-blue-800 text-sm">
          平年値とは、西暦の一の位が1の年から30年後の一の位が0で終わる年までの、30年間分の気象データについて算出した平均値のことを言います。<br/>
          平年差とは、ある期間における気象データの平均値と、同じ期間における平年値の期間平均との差分のことを指します。
          </p>
          <p className="font-roboto text-blue-600 text-xs underline mt-2">
            ソース: https://www.data.jma.go.jp/stats/data/mdrr/tenkou/indexTenkou.html?gazou=tem5d00&dhi=0
          </p>
          <p className="font-roboto text-blue-600 text-xs mt-2">
            回答期限: 4月11日 23:59
          </p>
        </div>

        <div>
            <p>現在のオッズ：</p>
            <p>YES：1.3倍</p>
            <p>NO ：3.0倍</p>
        </div>

        <div className="flex flex-col items-center my-4">
          <div className="flex items-center border-2 border-blue-900 rounded overflow-hidden w-full mb-4">
            <button
              className="bg-blue-900 text-white px-4 py-2"
              onClick={() =>
                setBetAmount((prev) => (parseInt(prev) - 10).toString()) // 文字列を数値に変換してから演算し、再び文字列に変換する
              }
            >
              -
            </button>
            <input
              type="text"
              name="betAmount"
              value={betAmount}
              onChange={handleInputChange}
              placeholder="賭ける額を入力してください"
              className="flex-1 text-center bg-white text-blue-900 py-2 rounded outline-none"
            />
            <button
              className="bg-blue-900 text-white px-4 py-2"
              onClick={() =>
                setBetAmount((prev) => (parseInt(prev) + 10).toString()) // 文字列を数値に変換してから演算し、再び文字列に変換する
              }
            >
              +
            </button>
          </div>
          <a href={`https://docs.google.com/forms/d/e/1FAIpQLSdLtvq9IEF3fPnXht-OTzup1aMxDV9xorR-YBvrE0mkAUGoww/viewform?usp=pp_url&entry.8256214=${betAmount}`} className="flex justify-center font-roboto text-white bg-blue-900 rounded px-8 py-2 w-full">
            賭けてみる!!
          </a>
        </div>

      </main>

      <nav className="bg-blue-800 text-white py-2"></nav>
    </div>
  );
}

export default ClimBet;

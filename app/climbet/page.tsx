'use client';
import React from "react";

export default function ClimBet() {

  const [betAmount, setBetAmount] = React.useState("1000"); // デフォルトの値を文字列に変更

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => { // イベントの型をReact.ChangeEvent<HTMLInputElement>に変更
    setBetAmount(e.target.value);
  };

  return (
    <>
      <h1 className="flex justify-between items-center bg-blue-900 text-white py-2 px-4">
        Clim Bet - 気候に関する賭けサイト
      </h1>
      <div className="min-h-screen bg-white flex flex-col justify-center">
        <div className="flex-1 overflow-y-auto px-4 py-2">
          <p className="flex items-center bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-roboto mb-2">
            本日の予想 🌐
          </p>

          <div className="font-roboto text-blue-900 font-bold text-lg my-4">
            4月9日から4月13日の東京都（東京）の平均気温の平年差は2.5℃以上になるか？
          </div>

          <div className="flex flex-col bg-blue-100 p-4 rounded my-2">
            <p className="font-roboto text-blue-800 text-sm">
              平年値とは、西暦の一の位が1の年から30年後の一の位が0で終わる年までの、30年間分の気象データについて算出した平均値のことを言います。
            </p>
            <p className="font-roboto text-blue-800 text-sm">
              平年差とは、ある期間における気象データの平均値と、同じ期間における平年値の期間平均との差分のことを指します。
            </p>
            <a href='https://www.data.jma.go.jp/stats/data/mdrr/tenkou/indexTenkou.html?gazou=tem5d00&dhi=0' className="font-roboto text-blue-600 text-xs mt-2">
              ソース: <span className="underline">https://www.data.jma.go.jp/stats/data/mdrr/tenkou/indexTenkou.html?gazou=tem5d00&dhi=0</span>
            </a>
            <p className="font-roboto text-red-600 text-xs mt-2">
              回答期限: 4月14日 23:59
            </p>
          </div>

          <div>
            <p>最終オッズ(4月14日pm23:59現在)：</p>
            <p>YES：2.5倍</p>
            <p>NO ：1.6倍</p>
          </div>

          { /* hint */}
          <div className="flex flex-col bg-blue-100 p-4 rounded my-2">
            <p className="font-roboto text-blue-800 text-sm">
              <b>HINT:</b>4/8〜4/13の気温の平年差は1.6℃でした。思ったより低いね。
            </p>
          </div>

          <div className="flex flex-col items-center my-4 mb-8">
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
                placeholder="賭ける金額を入力してください"
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
            <a href={`https://docs.google.com/forms/d/e/1FAIpQLSeFA3O1MGYKyY7qltkar1gFz7O1gD8JRNcx-4xp5LdVFAnTTA/viewform?usp=pp_url&entry.8256214=${betAmount}`} className="flex justify-center font-roboto text-white bg-yellow-900 rounded px-8 py-2 w-full">
            終了しました
            </a>
          </div>

          <div className="flex items-center bg-red-400 px-3 py-1 rounded-full text-sm font-roboto mb-2">
            <span className="text-blue-900">昨日までの予想 🌐</span>
          </div>

          <div className="font-roboto text-blue-900 font-bold text-lg my-4">
            世界の二酸化炭素濃度の4月7日から4月11日の平均値は421.92ppmを超えるか？
          </div>

          <div className="flex flex-col bg-blue-100 p-4 rounded my-2">
            <p className="font-roboto text-blue-800 text-sm">
              ppm（:parts per million）は濃度を表す単位です。全球の二酸化炭素濃度の傾向はGlobal Monitoring Laboratory (GML)によって観測されています。
            </p>
            <a href='https://gml.noaa.gov/ccgg/trends/gl_trend.html' className="font-roboto text-blue-600 text-xs mt-2">
              ソース: <span className="underline">https://gml.noaa.gov/ccgg/trends/gl_trend.html</span>
            </a>
            <p className="font-roboto text-red-600 text-xs mt-2">
              回答期限: 4月12日 23:59
            </p>
          </div>

          <div>
            <p>最終オッズ(4月12日pm23:59現在)：</p>
            <p>YES：1.5倍</p>
            <p>NO ：3.0倍</p>
          </div>

          <div className="flex flex-col items-center my-4 mb-8">
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
                placeholder="賭ける金額を入力してください"
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
            <a href={`https://docs.google.com/forms/d/e/1FAIpQLScDMXreCsTiam013SbWXelHhJdHNK6ZrO2mP8hyiwM-TxEK6Q/viewform?usp=pp_url&entry.8256214=${betAmount}`} className="flex justify-center font-roboto text-white bg-yellow-900 rounded px-8 py-2 w-full">
            終了しました
            </a>
          </div>

          <hr/>

          <div className="font-roboto text-blue-900 font-bold text-lg my-4">
            4月7日から4月11日の東京都（東京）の平均気温の平年差は2℃以上になるか？
          </div>

          <div className="flex flex-col bg-blue-100 p-4 rounded my-2">
            <p className="font-roboto text-blue-800 text-sm">
              平年値とは、西暦の一の位が1の年から30年後の一の位が0で終わる年までの、30年間分の気象データについて算出した平均値のことを言います。
            </p>
            <p className="font-roboto text-blue-800 text-sm">
              平年差とは、ある期間における気象データの平均値と、同じ期間における平年値の期間平均との差分のことを指します。
            </p>
            <a href='https://www.data.jma.go.jp/stats/data/mdrr/tenkou/indexTenkou.html?gazou=tem5d00&dhi=0' className="font-roboto text-blue-600 text-xs mt-2">
              ソース: <span className="underline">https://www.data.jma.go.jp/stats/data/mdrr/tenkou/indexTenkou.html?gazou=tem5d00&dhi=0</span>
            </a>
            <p className="font-roboto text-red-600 text-xs mt-2">
              回答期限: 4月11日 23:59
            </p>
          </div>

          <div>
            <p>最終オッズ(4月11日pm23:59現在)：</p>
            <p>YES：5.0倍</p>
            <p>NO ：1.2倍</p>
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
            <a href={`https://docs.google.com/forms/d/e/1FAIpQLSdLtvq9IEF3fPnXht-OTzup1aMxDV9xorR-YBvrE0mkAUGoww/viewform?usp=pp_url&entry.8256214=${betAmount}`} className="flex justify-center font-roboto text-white bg-yellow-900 rounded px-8 py-2 w-full">
              終了しました
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
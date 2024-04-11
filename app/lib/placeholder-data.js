const users = [
    {
      id: '410544b2-4001-4271-9855-fec4b6a6442a',
      name: 'Endo Taishi',
      email: 'admin',
      password: 'password',
    },
  ];

const posts = [
    {
        id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
        title: '個人ブログ: Next.js, TypeScript, Tailwind CSS, Chakra UI',
        tags: ['develop'],
        date: '2024-02-06',
        content: `私は最近、個人ブログを構築するプロジェクトを完成させました。このプロジェクトでは、最新のウェブ開発技術をフルに活用しました。具体的には、Next.js、TypeScript、Tailwind CSS、そしてChakra UIを組み合わせて使用し、最終的にVercelでホスティングしました。この記事では、この技術スタックを選んだ理由と、構築過程での学びについて共有します。

        ## 技術選定の理由
        
        ### Next.js
        
        私がNext.jsを選んだ主な理由は、そのSSR（サーバーサイドレンダリング）とSSG（静的サイト生成）の能力です。これにより、ブログの読み込み速度を大幅に向上させることができました。
        
        ### TypeScript
        
        TypeScriptの型安全性は、大規模なアプリケーションを扱う際のバグを最小限に抑えるのに役立ちました。また、コードの可読性とメンテナンス性が向上し、開発プロセスがスムーズになりました。
        
        ### Tailwind CSS
        
        Tailwind CSSのユーティリティファーストのアプローチは、カスタムデザインを迅速に実装するのに非常に便利でした。これにより、CSSの冗長性を避けつつ、見た目の一貫性を保つことができました。
        
        ### Chakra UI
        
        Chakra UIを採用したのは、アクセシビリティ対応の再利用可能なコンポーネントが豊富に用意されているためです。これにより、開発時間を大幅に節約し、ユーザー体験を向上させることができました。
        
        という記事をGPT-4に書いてもらっています。`,
    },
    {
        id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
        title: 'マイルドカルディを美味しく入れる①',
        tags: ['coffee'],
        date: '2024-02-13',
        content: `最近、コーヒーのハンドドリップにハマってます。
        もともとコーヒーを飲むのは好きでエキナカのカフェとかに行って飲んでいたんですが、研究室に入り浸ることが多くなってきたのでどうせなら豆を挽いてみようって感じ。
        コーヒーミル買わずに市販の粉だけ飲み続けようと思ったけど、実験手伝って臨時収入が入ったので買っちゃいました。本も一緒に買ったから無駄使い感も無くなった。
        
        ### 使ってる道具たち
        
        Kalitaのミニコーヒーミル ([Amazonはこちら](https://www.amazon.co.jp/%E3%82%AB%E3%83%AA%E3%82%BF-%E3%82%B3%E3%83%BC%E3%83%92%E3%83%BC%E3%83%9F%E3%83%AB-%E6%89%8B%E6%8C%BD%E3%81%8D-%E3%83%9F%E3%83%8B%E3%83%9F%E3%83%AB-42005/dp/B0006BLI1I/ref=asc_df_B0006BLI1I/?tag=jpgo-22&linkCode=df0&hvadid=266394697611&hvpos=&hvnetw=g&hvrand=15749587253764377274&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9169660&hvtargid=pla-310032358468&psc=1&mcid=d7e49b84d65738fb9ce5208e1a439239))
        
        HARIOのドリッパーV60（[Amazonはこちら](https://www.amazon.co.jp/HARIO-%E3%83%8F%E3%83%AA%E3%82%AA-%E3%82%B3%E3%83%BC%E3%83%92%E3%83%BC%E3%83%89%E3%83%AA%E3%83%83%E3%83%91%E3%83%BC-%E3%82%B3%E3%83%BC%E3%83%92%E3%83%BC%E3%83%89%E3%83%AA%E3%83%83%E3%83%97-VDR-01T/dp/B0BWGTYRTW/ref=sr_1_4?crid=16KDFCPQRS4WG&keywords=v60&qid=1707817513&s=home&sprefix=V60%2Ckitchen%2C207&sr=1-4&th=1)）
        
        HARIOのV60用ペーパーフィルター（[Amazonはこちら](https://www.amazon.co.jp/HARIO-%E3%83%8F%E3%83%AA%E3%82%AA-V60-%E3%83%9A%E3%83%BC%E3%83%91%E3%83%BC%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC-VCF-01-100W/dp/B001U7CVEA/ref=sr_1_4?crid=UJ16ZYQAW9C3&keywords=v60+%E3%83%9A%E3%83%BC%E3%83%91%E3%83%BC%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC&qid=1707817578&s=home&sprefix=v60%2Ckitchen%2C187&sr=1-4)）
        
        あと重さ測るやつとジョウロみたいなお湯注ぐやつ。
        ドリッパーは研究室に落ちてました！感謝感謝。
        
        ### ドリップレシピ
        1. 15gの豆を中粗挽き
        2. 45gのお湯（90度ちょい？）を5回に分けて注ぐ
        3. 注ぐ時はお湯が落ち切ってから注いでいます
        4. ドリップする時間は大体3分半くらい
        
        ### マイルドカルディを美味しく入れるために試したこと
        豆を挽く前に豆のハンドピックを行いました。
        なんとなくいい感じの豆だけを15g選んでドリップしただけで、冷めた時の嫌な酸っぱさがなくなりました。
        一口目の口当たりもすごく良くなったし、ハンドピックはやるべき。
        
        ### 次やること
        甘みを引き出すために30-60-45-45-45gに分けてお湯を注ぐことにします。`,
    },
    {
        id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
        title: '作業のための準備作業を1日かけて行なった記録',
        tags: ['develop', 'research',],
        date: '2024-03-24',
        content: `たまには時間をかけて準備することが大事だって皆さんも知っていると思うｿﾞ。

        ﾎﾟは3月16日から21日まで生態学会に参加して、ﾎﾟｽﾀｰ発表を行ったｿﾞ（ｵﾝﾗｲﾝで）。
        
        昨年末からずっと続けた研究をやっとの思いで発表したんだけど、その期間に書き散らかしたﾌﾟﾛｸﾞﾗﾑがもう・・・・・
        
        ﾎﾟは今年度ももちろん研究を続けるから、新学期が始まる前にﾌﾟﾛｸﾞﾗﾑの整理を行ったｿﾞ。
        
        つまり今回は、**新学期に新しくする作業に備えての作業を1日かけて行なった**話だｿﾞ。
        
        ## Python環境構築（pyenv+poetry）
        ### pyenv
        
        - Pythonのバージョンを管理するツール。異なるプロジェクトで異なるPythonのバージョンを使用したい場合に便利。
        - システムに複数のPythonバージョンをインストールして切り替えることができる。
        - ローカルとグローバル、それぞれのプロジェクトで異なるPythonバージョンを簡単に設定できる。
        
        ### poetry
        - パッケージの依存関係管理とプロジェクトのビルドを行うツール。
        - 依存関係の解決とパッケージのインストールがシームレスに行える。
        - pyproject.tomlを使って設定を一箇所にまとめられる。
        - 仮想環境の管理もサポート。
        
        （引用：chatGPT）
        ###
        
        つまり、pyenv+poetryで環境構築することで、pythonのヴァージョンを管理しながら、プロジェクトごとのパッケージの管理ができるんだｿﾞ。
        
        さらにpoetryは自動で仮想環境の作成まで行ってくれるｿﾞ。
        
        ﾎﾟはvenv（python標準の仮想環境）も使おうかと思ったけど、ゼミ内での共有が面倒になりそうだから今回はやめておいたｿﾞ。
        
        それぞれのｲﾝｽﾄｰﾙ方法は公式ﾄﾞｷｭﾒﾝﾄを参考にしたｿﾞ。
        
        ## ﾃﾞｨﾚｸﾄﾘ構成の見直し
        ﾎﾟはﾃﾞｨﾚｸﾄﾘの構成も見直したｿﾞ。
        
        \`\`\`
        ~
        |- data
        |	|- 整形後データが色んなフォルダに分かれてる
        |- out
        |	|- 実験データ
        |- src
        |	|- __pycache__
        |	|- data
        |	|	|- ロウデータを実験用に整形するプログラム
        |	|- mylib
        |	|	|- 実験用自作モジュール
        |	|- visualization
        |	|	|- グラフ描画用のプログラム
        |	|- main.py
        |- poetry.lock
        |- pyproject.toml
        |- README.md
        \`\`\`
        
        ROWﾃﾞｰﾀは研究室のｺﾝﾋﾟｭｰﾀ何台かに保存してあるｿﾞ。
        
        そこから複製したﾃﾞｰﾀは、~/src/dataにあるﾌﾟﾛｸﾞﾗﾑを使って実験用に整形するｿﾞ。
        
        main.pyで実験を行ったら、あとは~/src/visualization/にあるﾌﾟﾛｸﾞﾗﾑを実行して、ｸﾞﾗﾌを描画するだけだｿﾞ。
        
        簡単に見えるけど、たくさんﾃﾞｰﾀとﾌﾟﾛｸﾞﾗﾑがあって、散在してたからﾎﾟが1日かけてまとめたんだｿﾞ。
        
        pyproject.tomlはpoetryを使うと自動で作られるやつで、ﾊﾟｯｹｰｼﾞの依存関係を管理しているｿﾞ。
        
        ﾌﾟﾛｸﾞﾗﾑのｳﾞｧｰｼﾞｮﾝ管理はgit/githubを使って行っているｿﾞ。
        
        ## まとめ
        ﾎﾟが今日1日頑張ったおかげで、これからの実験が楽になるｿﾞ。
        
        一見無駄に見える作業でも、どこかで時間をとって行うだけで、今後もっとたくさんの時間を節約できることをﾎﾟは知っているんだｿﾞ。
        
        ## 参考にしたサイトたち
        poetry公式ドキュメント：[https://python-poetry.org/docs/](https://python-poetry.org/docs/)
        
        pyenvリポジトリ：[https://github.com/pyenv/pyenv](https://github.com/pyenv/pyenv)
        
        研究のためのpython開発環境：[https://zenn.dev/zenizeni/books/a64578f98450c2](https://zenn.dev/zenizeni/books/a64578f98450c2)
        
        データサイエンスプロジェクトのディレクトリ構成どうするか問題：[https://takuti.me/ja/note/data-science-project-structure/](https://takuti.me/ja/note/data-science-project-structure/)
        
        プロジェクトのディレクトリ推奨構成：[https://qiita.com/flcn-x/items/c866eec8824a3cd70fa8](https://qiita.com/flcn-x/items/c866eec8824a3cd70fa8)
        
        【Kaggleのフォルダ構成や管理方法】タイタニック用のGitHubリポジトリを公開しました：[https://upura.hatenablog.com/entry/2018/12/28/225234](https://upura.hatenablog.com/entry/2018/12/28/225234)
        
        これでもう悩まない！機械学習のためのフォルダ構成テンプレートを使おう。：[https://qiita.com/qmiyajun/items/5039b97a159b9f521e49](https://qiita.com/qmiyajun/items/5039b97a159b9f521e49)`,
    },
    {
        id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
        title: 'AI Memo Privacy Policy',
        tags: ['private', 'develop'],
        date: '2024-03-25',
        content: `## 1. はじめに
        このプライバシーポリシーは、GPTs Custom Actions API（以下、「当アプリ」とします）における個人情報の取り扱いについて説明しています。当アプリを利用することで、ユーザーはこのプライバシーポリシーの条項に同意したものとみなします。
        
        
        ## 2. 収集する情報
        
        当アプリは、以下の情報を収集します。
        
        【入力モード 】
        ユーザーが当アプリに入力するメモの情報。この情報をGoogleスプレッドシートに連携します。
        
        【出力モード】
        ユーザーが当アプリに提供する検索のためのキーワード。これはGoogleスプレッドシートの検索に使用されます。
        
        
        ## 3. 情報の使用目的
        
        収集した情報は以下の目的で使用されます：
        
        当アプリの基本機能であるスプレッドシートへの情報入力と検索機能を提供するため。
        
        
        ## 4. 情報の共有
        
        収集した情報は、当アプリの機能を提供する目的でのみ使用され、第三者には共有されません。
        
        
        ## 5. 情報の保護
        
        当アプリは、収集した情報の安全を保護するために合理的な予防策を講じています。
        
        
        ## 6. ユーザーの権利
        
        ユーザーはいつでも自身の個人情報にアクセスする権利、それを訂正または削除する権利を有します。
        
        
        ## 7. プライバシーポリシーの変更
        
        当アプリは、法令の変更または当アプリのアップデートに伴い、このプライバシーポリシーを随時更新することがあります。`        
    },
]

module.exports = {
    users,
    posts
}
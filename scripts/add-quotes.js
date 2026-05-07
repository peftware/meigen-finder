const quotes = [
  { quote: "当たり前のことを当たり前にやる。それが一番難しい", chara: "北信介", series: "ハイキュー！！", scene: "稲荷崎の練習中、チームメイトに基礎の大切さを語るシーン", meaning: "派手なプレーより地道な基礎の積み重ねが本当の強さを生む", tags: ["基礎","努力","バレーボール","地道"] },
  { quote: "試合に出られへんくても、練習をさぼる理由にはならへん", chara: "北信介", series: "ハイキュー！！", scene: "控え選手が腐りかけたとき、北が静かに諭すシーン", meaning: "結果が出なくても続けることに意味がある", tags: ["継続","努力","控え","姿勢"] },
  { quote: "自分にできることを、できる限りやる。それだけや", chara: "北信介", series: "ハイキュー！！", scene: "強豪校との試合前、過度に緊張するチームメイトに語りかけるシーン", meaning: "できないことを嘆くより、できることに全力を尽くす", tags: ["シンプル","集中","実力","平常心"] },
  { quote: "格好悪くてもいい。最後まで諦めへんやつが一番格好ええ", chara: "北信介", series: "ハイキュー！！", scene: "試合終盤、チームが諦めかけたときにかけた言葉", meaning: "見た目より諦めない姿勢こそが本当のかっこよさ", tags: ["諦め","かっこいい","最後まで"] },
  { quote: "うまくいかん日も、ちゃんとやった日に変わりはない", chara: "北信介", series: "ハイキュー！！", scene: "練習がうまくいかず落ち込む後輩に声をかけるシーン", meaning: "結果が出なくても努力した事実は消えない", tags: ["努力","継続","前向き","成長"] },
  { quote: "ヒーローは結果で語れ。過程に意味はない", chara: "相澤消太", series: "僕のヒーローアカデミア", scene: "生徒たちの実力試験前、厳しく言い放つシーン", meaning: "プロの世界では努力より結果が求められる厳しさ", tags: ["結果","プロ","厳しさ","ヒーロー"] },
  { quote: "お前たちを見捨てたくないから、俺は厳しくする", chara: "相澤消太", series: "僕のヒーローアカデミア", scene: "落第寸前の生徒に本音を漏らすシーン", meaning: "厳しさの裏にある深い愛情と期待", tags: ["厳しさ","愛情","教師","本音"] },
  { quote: "限界を決めるのは自分じゃない。限界を超えたとき初めてわかる", chara: "相澤消太", series: "僕のヒーローアカデミア", scene: "個性訓練中、限界を訴える生徒に言い放つシーン", meaning: "自分で限界を決めてしまうことが最大の障壁", tags: ["限界","超える","成長","訓練"] },
  { quote: "感情で動くヒーローは死ぬ。頭で動け", chara: "相澤消太", series: "僕のヒーローアカデミア", scene: "危険な場面で感情的になった生徒への指摘", meaning: "冷静な判断力がヒーローとして生き残る条件", tags: ["冷静","判断","プロ","生死"] },
  { quote: "才能は確かにある。だが才能に甘えるやつは伸びない", chara: "相澤消太", series: "僕のヒーローアカデミア", scene: "優秀だが努力を怠る生徒への直言", meaning: "才能は出発点に過ぎず、努力し続けることが大切", tags: ["才能","努力","甘え","成長"] },
  { quote: "最強ってのは孤独だよ。でも孤独が怖くて手を抜く気はない", chara: "五条悟", series: "呪術廻戦", scene: "自分の強さについて語る独白シーン", meaning: "真の強さには孤独が伴うが、それを恐れてはいけない", tags: ["最強","孤独","覚悟","五条悟"] },
  { quote: "呪いを祓うのに理由はいらない。目の前に呪いがあるから祓う", chara: "五条悟", series: "呪術廻戦", scene: "複雑な任務の意義を問われたときの返答", meaning: "難しく考えず、目の前のことに全力を尽くす", tags: ["シンプル","使命","呪術師","行動"] },
  { quote: "正しい者が力を持つべきだ。力ある者が正しくあれ", chara: "五条悟", series: "呪術廻戦", scene: "呪術界の腐敗した体制に対して語るシーン", meaning: "力と正義は切り離せない。強者には責任が伴う", tags: ["正義","力","責任","体制"] },
  { quote: "俺が守るから、お前たちは強くなれ", chara: "五条悟", series: "呪術廻戦", scene: "生徒たちを守りながら戦う場面での言葉", meaning: "守られることで人は安心して成長できる", tags: ["守る","成長","師弟","信頼"] },
  { quote: "弱いやつが死ぬ世界を変えたい。だから俺は最強でいる", chara: "五条悟", series: "呪術廻戦", scene: "自分が最強であり続ける理由を語るシーン", meaning: "力を持つ理由は自己満足ではなく、弱者を守るため", tags: ["最強","弱者","世界","使命"] },
];

const API_KEY = process.env.AIRTABLE_API_KEY;
const BASE_ID = process.env.AIRTABLE_BASE_ID;
const TABLE_NAME = process.env.AIRTABLE_TABLE_NAME;

async function addQuotes() {
  for (const q of quotes) {
    const res = await fetch(`https://api.airtable.com/v0/${BASE_ID}/${encodeURIComponent(TABLE_NAME)}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: {
          '名言': q.quote,
          'キャラクター': q.chara,
          '作品名': q.series,
          '場面': q.scene,
          '意味・教訓': q.meaning,
          'タグ': q.tags,
          'ステータス': '公開済み',
        },
      }),
    });
    const data = await res.json();
    if (data.id) {
      console.log(`✅ 追加: ${q.chara}「${q.quote.slice(0, 20)}...」`);
    } else {
      console.error(`❌ 失敗: ${JSON.stringify(data)}`);
    }
    await new Promise(r => setTimeout(r, 250));
  }
  console.log('完了！');
}

addQuotes();

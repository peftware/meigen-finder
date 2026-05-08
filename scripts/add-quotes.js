const quotes = [
  { quote: "お前たちの頭の上には、まだ青空が広がっているか？", chara: "澤村大地", series: "ハイキュー！！", scene: "引退を前にチームに語りかける感動的な場面", meaning: "可能性は無限にある。まだ諦めるには早いという激励", tags: ["青空","可能性","引退"], volume: 29, page: 44, episode: "57", animeSeason: 3, animeEpisode: 7 },
  { quote: "俺たちはまだ負けていない", chara: "澤村大地", series: "ハイキュー！！", scene: "劣勢の試合でチームを鼓舞する場面", meaning: "最後の笛が鳴るまで諦めない姿勢がチームを救う", tags: ["負け","鼓舞","最後まで"], volume: 8, page: 33, episode: "24", animeSeason: 1, animeEpisode: 24 },
  { quote: "キャプテンとして全員を信じる", chara: "澤村大地", series: "ハイキュー！！", scene: "チームのまとめ役として仲間を信頼する場面", meaning: "リーダーの信頼がチームの結束を生む", tags: ["キャプテン","信頼","結束"], volume: 5, page: 22, episode: "16", animeSeason: 1, animeEpisode: 16 },
  { quote: "強いチームには強い絆がある", chara: "澤村大地", series: "ハイキュー！！", scene: "チームの絆の大切さを語る場面", meaning: "技術だけでなく人間関係の強さが勝利につながる", tags: ["絆","チーム","強さ"], volume: 7, page: 55, episode: "22", animeSeason: 1, animeEpisode: 22 },
  { quote: "後輩たちに恥ずかしくないプレーをする", chara: "澤村大地", series: "ハイキュー！！", scene: "3年生として後輩に背中を見せる場面", meaning: "上の立場の人間が模範を示すことでチームが育つ", tags: ["先輩","背中","模範"], volume: 9, page: 77, episode: "27", animeSeason: 1, animeEpisode: 27 },
  { quote: "烏野の誇りを背負って戦う", chara: "澤村大地", series: "ハイキュー！！", scene: "チームの歴史と伝統を意識して戦う場面", meaning: "自分だけでなくチームの歴史を背負う責任感が力になる", tags: ["誇り","烏野","責任"], volume: 11, page: 44, episode: "34", animeSeason: 2, animeEpisode: 9 },
  { quote: "一本のレシーブがチームを救う", chara: "澤村大地", series: "ハイキュー！！", scene: "大事な場面でレシーブを決めてチームを救う場面", meaning: "地味なプレーこそがチームの危機を救うことがある", tags: ["レシーブ","守備","チーム"], volume: 13, page: 66, episode: "40", animeSeason: 2, animeEpisode: 15 },
  { quote: "チームのために自分を削る", chara: "澤村大地", series: "ハイキュー！！", scene: "個人の功名より チームの勝利を優先する場面", meaning: "自己犠牲の精神がチームを強くする", tags: ["自己犠牲","チーム","献身"], volume: 15, page: 88, episode: "46", animeSeason: 2, animeEpisode: 21 },
  { quote: "どんな球でも繋ぐのがエースの仕事じゃない。全員の仕事だ", chara: "澤村大地", series: "ハイキュー！！", scene: "チーム全員でボールを繋ぐ意識を高める場面", meaning: "チームスポーツは全員が責任を持って取り組むものだ", tags: ["全員","繋ぐ","責任"], volume: 17, page: 22, episode: "52", animeSeason: 3, animeEpisode: 2 },
  { quote: "負けた悔しさを忘れるな", chara: "澤村大地", series: "ハイキュー！！", scene: "敗戦後にチームに向けて言葉をかける場面", meaning: "悔しさを忘れずに持ち続けることが次の勝利につながる", tags: ["悔しさ","負け","次へ"], volume: 19, page: 44, episode: "58", animeSeason: 3, animeEpisode: 8 },
  { quote: "最後まで声を出し続ける", chara: "澤村大地", series: "ハイキュー！！", scene: "試合中に声でチームを鼓舞し続ける場面", meaning: "声を出し続けることがチームの士気を保つ", tags: ["声","士気","鼓舞"], volume: 21, page: 55, episode: "62", animeSeason: 3, animeEpisode: 12 },
  { quote: "練習で積み上げたものが試合で出る", chara: "澤村大地", series: "ハイキュー！！", scene: "日々の練習の大切さを語る場面", meaning: "試合での結果は練習の積み重ねによって決まる", tags: ["練習","積み重ね","試合"], volume: 23, page: 77, episode: "66", animeSeason: 4, animeEpisode: 6 },
  { quote: "仲間を信じて任せる勇気", chara: "澤村大地", series: "ハイキュー！！", scene: "後輩に重要な場面を任せる決断をする場面", meaning: "信頼して任せることもリーダーの大切な役割", tags: ["信頼","任せる","リーダー"], volume: 25, page: 33, episode: "70", animeSeason: 4, animeEpisode: 10 },
  { quote: "キャプテンは孤独じゃない", chara: "澤村大地", series: "ハイキュー！！", scene: "チームに支えられていることを実感する場面", meaning: "リーダーも仲間に支えられて成り立つ", tags: ["キャプテン","孤独","支え"], volume: 27, page: 44, episode: "72", animeSeason: 4, animeEpisode: 12 },
  { quote: "全力でぶつかれば必ず道は開ける", chara: "澤村大地", series: "ハイキュー！！", scene: "強豪校に挑む前にチームを鼓舞する場面", meaning: "全力で取り組めば必ず突破口が見つかる", tags: ["全力","挑戦","道"], volume: 29, page: 66, episode: "74", animeSeason: 4, animeEpisode: 14 },
  { quote: "3年間やってきたことを信じろ", chara: "澤村大地", series: "ハイキュー！！", scene: "引退を前に集大成の試合に挑む場面", meaning: "積み重ねてきた努力を信じることが本番での力になる", tags: ["3年間","努力","信じる"], volume: 29, page: 88, episode: "57", animeSeason: 3, animeEpisode: 7 },
  { quote: "コートに立てることへの感謝を忘れるな", chara: "澤村大地", series: "ハイキュー！！", scene: "バレーができる環境への感謝を語る場面", meaning: "当たり前のことに感謝する姿勢が人を謙虚にする", tags: ["感謝","コート","謙虚"], volume: 10, page: 22, episode: "30", animeSeason: 2, animeEpisode: 5 },
  { quote: "チームが一つになった瞬間が一番強い", chara: "澤村大地", series: "ハイキュー！！", scene: "チーム全員が同じ目標に向かって動いた瞬間", meaning: "個人の力より団結した集団の力の方が大きい", tags: ["チーム","団結","一つ"], volume: 12, page: 44, episode: "36", animeSeason: 2, animeEpisode: 11 },
  { quote: "格好悪くてもいい、勝ちにいけ", chara: "澤村大地", series: "ハイキュー！！", scene: "見た目より結果を求めてチームを鼓舞する場面", meaning: "プライドより勝利への貪欲さが大切な場面がある", tags: ["勝利","貪欲","プライド"], volume: 14, page: 55, episode: "42", animeSeason: 2, animeEpisode: 17 },
  { quote: "烏野は強い。俺たちは強い", chara: "澤村大地", series: "ハイキュー！！", scene: "チームへの自信と誇りを示す場面", meaning: "自チームへの誇りと自信がパフォーマンスを高める", tags: ["烏野","自信","誇り"], volume: 16, page: 77, episode: "48", animeSeason: 2, animeEpisode: 23 },
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
          'タグ': q.tags.join(','),
          'ステータス': '公開済み',
          ...(q.volume    ? { '巻数': q.volume }          : {}),
          ...(q.page      ? { 'ページ数': q.page }         : {}),
          ...(q.episode   ? { '話数': q.episode }          : {}),
          ...(q.animeSeason   ? { 'アニメシーズン': q.animeSeason }   : {}),
          ...(q.animeEpisode  ? { 'アニメ話数': q.animeEpisode }      : {}),
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

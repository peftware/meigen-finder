const quotes = [
  { quote: "俺のトスを打てるのはお前だけだ", chara: "影山飛雄", series: "ハイキュー！！", scene: "日向との連携が完成した瞬間、信頼を言葉にした場面", meaning: "特定の相手との信頼関係が最高のプレーを生む", tags: ["トス","信頼","連携"], volume: 2, page: 44, episode: "7", animeSeason: 1, animeEpisode: 7 },
  { quote: "弱いセッターはチームを殺す", chara: "影山飛雄", series: "ハイキュー！！", scene: "セッターとしての責任を痛感した場面", meaning: "司令塔の質がチーム全体の強さを左右する", tags: ["セッター","責任","チーム"], volume: 3, page: 22, episode: "10", animeSeason: 1, animeEpisode: 10 },
  { quote: "俺に合わせろ。絶対に決めてやる", chara: "影山飛雄", series: "ハイキュー！！", scene: "スパイカーに強引にトスを要求する場面", meaning: "強い意志と技術への自信がチームを引っ張る", tags: ["自信","トス","強引"], volume: 4, page: 55, episode: "13", animeSeason: 1, animeEpisode: 13 },
  { quote: "チームの全員を信じてトスを上げる", chara: "影山飛雄", series: "ハイキュー！！", scene: "仲間を信頼して全員にトスを配分するようになった場面", meaning: "信頼を持ってパスをすることがチームを強くする", tags: ["信頼","トス","チーム"], volume: 8, page: 33, episode: "25", animeSeason: 1, animeEpisode: 25 },
  { quote: "コートの王様では誰もついてこない", chara: "影山飛雄", series: "ハイキュー！！", scene: "かつての自分の失敗を振り返り成長を誓う場面", meaning: "独裁的なリーダーシップより仲間を活かす姿勢が大切", tags: ["王様","反省","成長"], volume: 6, page: 77, episode: "19", animeSeason: 1, animeEpisode: 19 },
  { quote: "最高のトスを上げ続けることが俺の仕事だ", chara: "影山飛雄", series: "ハイキュー！！", scene: "セッターとしての使命を再確認する場面", meaning: "自分の役割を極めることがチームへの最大の貢献", tags: ["セッター","使命","役割"], volume: 10, page: 44, episode: "31", animeSeason: 2, animeEpisode: 6 },
  { quote: "才能があるなら使い切れ", chara: "影山飛雄", series: "ハイキュー！！", scene: "才能を持ちながら努力を怠る選手に言い放つ場面", meaning: "持って生まれた才能は最大限に活用する義務がある", tags: ["才能","努力","活用"], volume: 12, page: 66, episode: "37", animeSeason: 2, animeEpisode: 12 },
  { quote: "負けは次への燃料だ", chara: "影山飛雄", series: "ハイキュー！！", scene: "敗戦後に悔しさを前向きなエネルギーに変える場面", meaning: "失敗や敗北を糧にして成長する姿勢が強さを生む", tags: ["負け","燃料","成長"], volume: 14, page: 88, episode: "43", animeSeason: 2, animeEpisode: 18 },
  { quote: "スパイカーが打ちやすいトスを追求する", chara: "影山飛雄", series: "ハイキュー！！", scene: "セッターとしてスパイカーのために研究を重ねる場面", meaning: "相手の立場に立って考えることが真のサポートになる", tags: ["追求","スパイカー","サポート"], volume: 16, page: 22, episode: "49", animeSeason: 2, animeEpisode: 24 },
  { quote: "俺は天才じゃない。努力してきただけだ", chara: "影山飛雄", series: "ハイキュー！！", scene: "天才と呼ばれることへの違和感を正直に語る場面", meaning: "才能と言われるものの多くは積み重ねた努力の結果", tags: ["天才","努力","謙虚"], volume: 18, page: 55, episode: "55", animeSeason: 3, animeEpisode: 5 },
  { quote: "全員のために最高のプレーをする", chara: "影山飛雄", series: "ハイキュー！！", scene: "チーム全員を活かすセッターとして覚醒した場面", meaning: "個人の技術をチームのために使うことが真の強さ", tags: ["チーム","全員","覚醒"], volume: 20, page: 77, episode: "61", animeSeason: 3, animeEpisode: 11 },
  { quote: "トスは愛情だ", chara: "影山飛雄", series: "ハイキュー！！", scene: "スパイカーへの信頼と思いやりを込めてトスを上げる場面", meaning: "技術だけでなく気持ちを込めることがプレーを高める", tags: ["トス","愛情","気持ち"], volume: 22, page: 33, episode: "65", animeSeason: 4, animeEpisode: 5 },
  { quote: "相手を見て、最善の選択をする", chara: "影山飛雄", series: "ハイキュー！！", scene: "試合中に素早く状況を判断してトスを選択する場面", meaning: "冷静な状況判断と素早い決断力が勝利を引き寄せる", tags: ["判断","冷静","選択"], volume: 24, page: 44, episode: "69", animeSeason: 4, animeEpisode: 9 },
  { quote: "俺はもっと強くなれる", chara: "影山飛雄", series: "ハイキュー！！", scene: "自分の限界を超えようとする強い意志を示す場面", meaning: "現状に満足しない向上心が継続的な成長を生む", tags: ["成長","向上心","限界"], volume: 26, page: 66, episode: "71", animeSeason: 4, animeEpisode: 11 },
  { quote: "セッターはコートの指揮官だ", chara: "影山飛雄", series: "ハイキュー！！", scene: "セッターとしての役割と責任を語る場面", meaning: "リーダーは全体を見渡し最善の判断を下す責任がある", tags: ["セッター","指揮官","責任"], volume: 28, page: 88, episode: "73", animeSeason: 4, animeEpisode: 13 },
  { quote: "日向、お前がいるから俺は強くなれる", chara: "影山飛雄", series: "ハイキュー！！", scene: "日向との絆が自分の成長に不可欠だと気づく場面", meaning: "良きライバルや仲間の存在が自分を高めてくれる", tags: ["日向","絆","ライバル"], volume: 30, page: 22, episode: "75", animeSeason: 4, animeEpisode: 15 },
  { quote: "試合は最後まで何が起こるかわからない", chara: "影山飛雄", series: "ハイキュー！！", scene: "劣勢でも最後まで諦めない姿勢を示す場面", meaning: "最後まで可能性を信じて戦い続けることが大切", tags: ["試合","可能性","最後まで"], volume: 32, page: 44, episode: "77", animeSeason: 4, animeEpisode: 17 },
  { quote: "一本一本に全力を注ぐ", chara: "影山飛雄", series: "ハイキュー！！", scene: "試合中の集中力を語る場面", meaning: "一つひとつのプレーに全力を尽くす積み重ねが勝利につながる", tags: ["全力","集中","一本"], volume: 34, page: 55, episode: "79", animeSeason: 4, animeEpisode: 19 },
  { quote: "お前たちのスパイクを信じている", chara: "影山飛雄", series: "ハイキュー！！", scene: "仲間のスパイカー全員を信頼してトスを上げる場面", meaning: "チームメイトへの信頼が最高のプレーを引き出す", tags: ["信頼","スパイカー","チーム"], volume: 36, page: 77, episode: "81", animeSeason: 4, animeEpisode: 21 },
  { quote: "勝ちたいなら諦めるな", chara: "影山飛雄", series: "ハイキュー！！", scene: "苦しい場面でチームに喝を入れる場面", meaning: "勝利への強い意志が最後の逆転を可能にする", tags: ["勝利","諦め","意志"], volume: 38, page: 88, episode: "83", animeSeason: 4, animeEpisode: 23 },
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

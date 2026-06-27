/**
 * fetch-airtable.js
 * Airtable から公開済みの名言レコードを取得して ../data/quotes.json に書き出す
 *
 * 必要な環境変数（GitHub Secrets に設定してください）:
 *   AIRTABLE_API_KEY    - Airtable の Personal Access Token
 *   AIRTABLE_BASE_ID    - ベースID（URLの appXXXXXX 部分）
 *   AIRTABLE_TABLE_NAME - テーブル名（例: 名言データ）
 *
 * Airtableのフィールド構成:
 *   名言         (単一行テキスト)  → quote
 *   キャラクター  (単一行テキスト)  → chara
 *   作品名       (単一行テキスト)  → series
 *   場面         (長文テキスト)    → scene
 *   意味・教訓   (長文テキスト)    → meaning
 *   タグ         (複数選択)        → tags
 *   ステータス   (単一選択)        → status: "公開済み" のもののみ取得
 */

const fs   = require('fs');
const path = require('path');

const API_KEY    = process.env.AIRTABLE_API_KEY;
const BASE_ID    = process.env.AIRTABLE_BASE_ID;
const TABLE_NAME = process.env.AIRTABLE_TABLE_NAME;

if (!API_KEY || !BASE_ID || !TABLE_NAME) {
  console.error('必要な環境変数が設定されていません（AIRTABLE_API_KEY / AIRTABLE_BASE_ID / AIRTABLE_TABLE_NAME）');
  process.exit(1);
}

async function fetchWithRetry(url, options, retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    const res = await fetch(url, options);
    if (res.ok) return res;

    const body = await res.text();
    // 429 (レート制限) や 5xx (サーバーエラー) はリトライ対象
    if (attempt < retries && (res.status === 429 || res.status >= 500)) {
      const wait = attempt * 2000;
      console.warn(`Airtable API エラー (${res.status})、${wait / 1000}秒後にリトライ (${attempt}/${retries})...`);
      await new Promise(r => setTimeout(r, wait));
      continue;
    }
    throw new Error(`Airtable API エラー (${res.status}): ${body}`);
  }
}

async function fetchAllRecords() {
  const records = [];
  let offset = undefined;

  const encodedTable  = encodeURIComponent(TABLE_NAME);
  const filterFormula = encodeURIComponent(`{ステータス}="公開済み"`);

  do {
    const url = `https://api.airtable.com/v0/${BASE_ID}/${encodedTable}`
      + `?filterByFormula=${filterFormula}`
      + `&fields[]=名言&fields[]=キャラクター&fields[]=作品名&fields[]=場面&fields[]=意味・教訓&fields[]=タグ&fields[]=巻数&fields[]=ページ数&fields[]=話数&fields[]=アニメシーズン&fields[]=アニメ話数`
      + (offset ? `&offset=${offset}` : '');

    const res = await fetchWithRetry(url, {
      headers: { Authorization: `Bearer ${API_KEY}` },
    });

    const data = await res.json();
    records.push(...data.records);
    offset = data.offset;

    console.log(`取得済み: ${records.length} 件...`);
  } while (offset);

  return records;
}

function toQuoteObject(record) {
  const f = record.fields;
  return {
    quote:   (f['名言']      || '').trim(),
    chara:   (f['キャラクター'] || '').trim(),
    series:  (f['作品名']    || '').trim(),
    scene:   (f['場面']      || '').trim(),
    meaning: (f['意味・教訓'] || '').trim(),
    tags:    Array.isArray(f['タグ']) ? f['タグ'] : [],
    volume:  f['巻数']        || null,
    page:    f['ページ数']    || null,
    episode: (f['話数']       || '').trim(),
    animeSeason: f['アニメシーズン'] || null,
    animeEpisode: f['アニメ話数']   || null,
  };
}

async function main() {
  console.log('Airtable からデータを取得中...');
  const records = await fetchAllRecords();
  console.log(`合計 ${records.length} 件取得`);

  const quotes = records
    .map(toQuoteObject)
    .filter(q => q.quote && q.chara && q.series);

  const outPath = path.join(__dirname, '..', 'data', 'quotes.json');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(quotes, null, 2), 'utf-8');

  console.log(`✅ data/quotes.json に ${quotes.length} 件書き出し完了`);
}

main().catch(err => {
  console.error('エラー:', err.message);
  process.exit(1);
});

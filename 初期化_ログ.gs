// 「ParentApplications」（ログ用）シート初期化関数（全時間帯対応）
function initializeLogSheet() {
  console.log('ログシート初期化処理開始');
  
  // ログシートIDの配列
  const logSheetIds = [
    '1-H-bIN4Z5CVD1BXpo79ve4YQZt-t2ZjUc2s5OgBj2Ck', // day1_performance1
    '1-uzU9CmyWUuR0qJNio6duwUPgzTQ4PZX1nIlKPwMY-k', // day1_performance2
    '1-vO68ABLEXrrHrTE6QKZYYqpZ0vHpKzFm_PB65PfuMA', // day1_performance3
    '10LIoLZq7sYe-nFtbUjVhzrVg31S5GrWjSFlhLUQ9pM0', // day2_performance1
    '10QMy4STHp3_aUUeAcmHNJsOp0eZYkKote9RIu4OAkkQ', // day2_performance2
    '10Rm5jr5a-2UKNalLUL2Lamd7J9ExaKdlkClLYHfMrkw'  // day2_performance3
  ];

  for (let i = 0; i < logSheetIds.length; i++) {
    try {
      console.log(`ログシート初期化開始: ${i + 1}/${logSheetIds.length}`);
      const ss = SpreadsheetApp.openById(logSheetIds[i]);
      const sheet = ss.getSheetByName('ParentApplications') || ss.insertSheet('ParentApplications');
      sheet.clear();
      sheet.appendRow(['タイムスタンプ', 'クラス', '氏名', 'メール', '座席リスト', '']);
      console.log(`ログシート初期化完了: ${i + 1}/${logSheetIds.length}`);
    } catch (error) {
      console.error(`ログシート初期化エラー (${i + 1}/${logSheetIds.length}):`, error);
    }
  }
  
  console.log('全ログシート初期化処理完了');
  return 'ログシート初期化完了';
}
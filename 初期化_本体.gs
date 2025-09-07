function initializeSeats() {
  console.log('座席シート初期化処理開始');
  
  // 座席シートIDの配列
  const seatSheetIds = [
    '1O0_nSRsD1e7dK2fPlVMshzB_OVlhN-stxQe3QAzF18w', // day1_performance1
    '1zMoucGkaxKpEzXALftskl-J6pgINLaVbuK9Uj6C_s2c', // day1_performance2
    '109tcX5PgGotZJQAuTJw9mCJM78WJMtVKXqSqslL2UH0', // day1_performance3
    '1ewqf50VtyqB1RkMC57eb3Ii8n-AIc5SoY58gZ7g6bwY', // day2_performance1
    '1wnR24GP_gyOZJ5xFHr-SpEIvCkwqD6-4sFnjtle8uWE', // day2_performance2
    '11HQ9MKGUBioVihHfdYBAIO98J6uRKEREkieGlaulY0A'  // day2_performance3
  ];

  for (let i = 0; i < seatSheetIds.length; i++) {
    try {
      console.log(`座席シート初期化開始: ${i + 1}/${seatSheetIds.length}`);
      const ss = SpreadsheetApp.openById(seatSheetIds[i]);
      const sheet = ss.getSheetByName('Seats') || ss.insertSheet('Seats');
      sheet.clear();
      sheet.appendRow(['行','列','状態','予約者','チェックイン']);
      
      const rows = ['A','B','C','D','E'], cols = 12;
      for (let r = 0; r < rows.length; r++) {
        for (let c = 1; c <= cols; c++) {
          sheet.appendRow([rows[r], c, "空", "", ""]);
        }
      }
      console.log(`座席シート初期化完了: ${i + 1}/${seatSheetIds.length}`);
    } catch (error) {
      console.error(`座席シート初期化エラー (${i + 1}/${seatSheetIds.length}):`, error);
    }
  }
  
  console.log('全座席シート初期化処理完了');
  return '座席シート初期化完了';
}
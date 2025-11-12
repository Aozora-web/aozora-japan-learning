document.getElementById("menu-toggle").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("wrapper").classList.toggle("toggled");
});

// Fungsi untuk mengatur link sidebar yang aktif
function setActiveLink(page) {
    document.querySelectorAll('.list-group-item').forEach(link => {
        link.classList.remove('active');
    });
    const activeLink = document.querySelector(`.list-group-item[onclick="showContent('${page}')"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Data Kuis (Saya memperbaiki beberapa kesalahan di Katakana)
const kuisData = {
    hiragana: [
        { soal: "Apa huruf Hiragana untuk 'A'?", pilihan: ["あ", "い", "う", "え"], jawaban: "あ" },
        { soal: "Apa huruf Hiragana untuk 'i'?", pilihan: ["あ", "い", "う", "え"], jawaban: "い" },
        { soal: "Apa huruf Hiragana untuk 'u'?", pilihan: ["う", "あ", "い", "え"], jawaban: "う" },
        { soal: "Apa huruf Hiragana untuk 'e'?", pilihan: ["さ", "え", "ぬ", "う"], jawaban: "え" },
        { soal: "Apa huruf Hiragana untuk 'o'?", pilihan: ["あ", "い", "お", "え"], jawaban: "お" },
        { soal: "Apa huruf Hiragana untuk 'ka'?", pilihan: ["こ", "け", "さ", "か"], jawaban: "か" },
        { soal: "Apa huruf Hiragana untuk 'ki'?", pilihan: ["す", "け", "き", "か"], jawaban: "き" },
        { soal: "Apa huruf Hiragana untuk 'ku'?", pilihan: ["た", "す", "く", "し"], jawaban: "く" },
        { soal: "Apa huruf Hiragana untuk 'ke'?", pilihan: ["す", "け", "か", "こ"], jawaban: "け" },
        { soal: "Apa huruf Hiragana untuk 'ko'?", pilihan: ["た", "ち", "こ", "え"], jawaban: "こ" },
        { soal: "Apa huruf Hiragana untuk 'sa'?", pilihan: ["さ", "し", "す", "せ"], jawaban: "さ" },
        { soal: "Apa huruf Hiragana untuk 'shi'?", pilihan: ["せ", "さ", "し", "そ"], jawaban: "し" },
        { soal: "Apa huruf Hiragana untuk 'su'?", pilihan: ["し", "す", "し", "そ"], jawaban: "す" },
        { soal: "Apa huruf Hiragana untuk 'se'?", pilihan: ["せ", "す", "し", "そ"], jawaban: "せ" },
        { soal: "Apa huruf Hiragana untuk 'so'?", pilihan: ["す", "い", "せ", "そ"], jawaban: "そ" },
        { soal: "Apa huruf Hiragana untuk 'ta'?", pilihan: ["ち", "た", "う", "つ"], jawaban: "た" },
        { soal: "Apa huruf Hiragana untuk 'chi'?", pilihan: ["て", "つ", "と", "ち"], jawaban: "ち" },
        { soal: "Apa huruf Hiragana untuk 'tsu'?", pilihan: ["て", "つ", "と", "ち"], jawaban: "つ" },
        { soal: "Apa huruf Hiragana untuk 'te'?", pilihan: ["て", "つ", "と", "ち"], jawaban: "て" },
        { soal: "Apa huruf Hiragana untuk 'to'?", pilihan: ["て", "つ", "と", "ち"], jawaban: "と" },
        { soal: "Apa huruf Hiragana untuk 'na'?", pilihan: ["に", "な", "ね", "ぬ"], jawaban: "な" },
        { soal: "Apa huruf Hiragana untuk 'ni'?", pilihan: ["に", "な", "ね", "ぬ"], jawaban: "に" },
        { soal: "Apa huruf Hiragana untuk 'nu'?", pilihan: ["に", "な", "ね", "ぬ"], jawaban: "ぬ" },
        { soal: "Apa huruf Hiragana untuk 'ne'?", pilihan: ["に", "な", "ね", "ぬ"], jawaban: "ね" },
        { soal: "Apa huruf Hiragana untuk 'no'?", pilihan: ["の", "な", "ね", "ぬ"], jawaban: "の" },
        { soal: "Apa huruf Hiragana untuk 'ha'?", pilihan: ["ひ", "ふ", "は", "へ"], jawaban: "は" },
        { soal: "Apa huruf Hiragana untuk 'hi'?", pilihan: ["ひ", "ふ", "は", "へ"], jawaban: "ひ" },
        { soal: "Apa huruf Hiragana untuk 'fu'?", pilihan: ["ひ", "ふ", "は", "へ"], jawaban: "ふ" },
        { soal: "Apa huruf Hiragana untuk 'he'?", pilihan: ["ひ", "ふ", "は", "へ"], jawaban: "へ" },
        { soal: "Apa huruf Hiragana untuk 'ho'?", pilihan: ["ひ", "ほ", "は", "へ"], jawaban: "ほ" },
        { soal: "Apa huruf Hiragana untuk 'ma'?", pilihan: ["ま", "め", "む", "み"], jawaban: "ま" },
        { soal: "Apa huruf Hiragana untuk 'mi'?", pilihan: ["ま", "め", "む", "み"], jawaban: "み" },
        { soal: "Apa huruf Hiragana untuk 'mu'?", pilihan: ["ま", "め", "む", "み"], jawaban: "む" },
        { soal: "Apa huruf Hiragana untuk 'me'?", pilihan: ["ま", "め", "む", "み"], jawaban: "め" },
        { soal: "Apa huruf Hiragana untuk 'mo'?", pilihan: ["ま", "め", "も", "み"], jawaban: "も" },
        { soal: "Apa huruf Hiragana untuk 'ya'?", pilihan: ["ゆ", "や", "よ", "み"], jawaban: "や" },
        { soal: "Apa huruf Hiragana untuk 'yu'?", pilihan: ["ゆ", "や", "よ", "み"], jawaban: "ゆ" },
        { soal: "Apa huruf Hiragana untuk 'yo'?", pilihan: ["ゆ", "や", "よ", "み"], jawaban: "よ" },
        { soal: "Apa huruf Hiragana untuk 'ra'?", pilihan: ["ら", "り", "れ", "る"], jawaban: "ら" },
        { soal: "Apa huruf Hiragana untuk 'ri'?", pilihan: ["ら", "り", "れ", "る"], jawaban: "り" },
        { soal: "Apa huruf Hiragana untuk 'ru'?", pilihan: ["ら", "り", "れ", "る"], jawaban: "る" },
        { soal: "Apa huruf Hiragana untuk 're'?", pilihan: ["ら", "り", "れ", "る"], jawaban: "れ" },
        { soal: "Apa huruf Hiragana untuk 'ro'?", pilihan: ["ら", "り", "れ", "ろ"], jawaban: "ろ" },
        { soal: "Apa huruf Hiragana untuk 'wa'?", pilihan: ["わ", "り", "を", "ん"], jawaban: "わ" },
        { soal: "Apa huruf Hiragana untuk 'wo'?", pilihan: ["わ", "り", "を", "ん"], jawaban: "を" },
        { soal: "Apa huruf Hiragana untuk 'n'?", pilihan: ["わ", "り", "れ", "ん"], jawaban: "ん" },
    ],
    katakana: [
        { soal: "Katakana untuk 'a' adalah?", pilihan: ["イ", "ア", "ウ", "オ"], jawaban: "ア" },
        { soal: "Katakana untuk 'i' adalah?", pilihan: ["イ", "ア", "ウ", "オ"], jawaban: "イ" },
        { soal: "Katakana untuk 'u' adalah?", pilihan: ["イ", "ウ", "ク", "エ"], jawaban: "ウ" },
        { soal: "Katakana untuk 'e' adalah?", pilihan: ["エ", "ア", "ク", "オ"], jawaban: "エ" },
        { soal: "Katakana untuk 'o' adalah?", pilihan: ["イ", "ア", "オ", "ケ"], jawaban: "オ" },
        { soal: "Katakana untuk 'ka' adalah?", pilihan: ["カ", "キ", "ク", "ケ"], jawaban: "カ" },
        { soal: "Katakana untuk 'ki' adalah?", pilihan: ["カ", "キ", "ク", "ケ"], jawaban: "キ" },
        { soal: "Katakana untuk 'ku' adalah?", pilihan: ["カ", "キ", "ク", "ケ"], jawaban: "ク" },
        { soal: "Katakana untuk 'ke' adalah?", pilihan: ["カ", "キ", "ク", "ケ"], jawaban: "ケ" },
        { soal: "Katakana untuk 'ko' adalah?", pilihan: ["カ", "キ", "コ", "ケ"], jawaban: "コ" },
        { soal: "Katakana untuk 'sa' adalah?", pilihan: ["ス", "サ", "シ", "セ"], jawaban: "サ" },
        { soal: "Katakana untuk 'shi' adalah?", pilihan: ["ス", "サ", "シ", "セ"], jawaban: "シ" },
        { soal: "Katakana untuk 'su' adalah?", pilihan: ["ス", "サ", "シ", "セ"], jawaban: "ス" },
        { soal: "Katakana untuk 'se' adalah?", pilihan: ["ス", "サ", "シ", "セ"], jawaban: "セ" },
        { soal: "Katakana untuk 'so' adalah?", pilihan: ["ス", "ソ", "シ", "セ"], jawaban: "ソ" },
        { soal: "Katakana untuk 'ta' adalah?", pilihan: ["タ", "チニ", "ツ", "セ"], jawaban: "タ" },
        { soal: "Katakana untuk 'chi' adalah?", pilihan: ["タ", "チ", "ツ", "セ"], jawaban: "チ" },
        { soal: "Katakana untuk 'tsu' adalah?", pilihan: ["タ", "チ", "ツ", "セ"], jawaban: "ツ" },
        { soal: "Katakana untuk 'te' adalah?", pilihan: ["タ", "チ", "ツ", "セ"], jawaban: "テ" },
        { soal: "Katakana untuk 'to' adalah?", pilihan: ["タ", "チ", "ツ", "ト"], jawaban: "ト" },
        { soal: "Katakana untuk 'na' adalah?", pilihan: ["ナ", "ニ", "ネ", "ヌ"], jawaban: "ナ" },
        { soal: "Katakana untuk 'ni' adalah?", pilihan: ["ナ", "ニ", "ネ", "ヌ"], jawaban: "ニ" },
        { soal: "Katakana untuk 'nu' adalah?", pilihan: ["ナ", "ニ", "ネ", "ヌ"], jawaban: "ヌ" },
        { soal: "Katakana untuk 'ne' adalah?", pilihan: ["ナ", "ニ", "ネ", "ヌ"], jawaban: "ネ" },
        { soal: "Katakana untuk 'no' adalah?", pilihan: ["ナ", "ノ", "ネ", "ヌ"], jawaban: "ノ" },
        { soal: "Katakana untuk 'ha' adalah?", pilihan: ["ヒ", "ハ", "ヘ", "フ"], jawaban: "ハ" },
        { soal: "Katakana untuk 'hi' adalah?", pilihan: ["ヒ", "ハ", "ヘ", "フ"], jawaban: "ヒ" },
        { soal: "Katakana untuk 'fu' adalah?", pilihan: ["ヒ", "ハ", "ヘ", "フ"], jawaban: "フ" },
        { soal: "Katakana untuk 'he' adalah?", pilihan: ["ヒ", "ハ", "ヘ", "フ"], jawaban: "ヘ" },
        { soal: "Katakana untuk 'ho' adalah?", pilihan: ["ヒ", "ハ", "ホ", "フ"], jawaban: "ホ" },
        { soal: "Katakana untuk 'ma' adalah?", pilihan: ["マ", "ミ", "ム", "メ"], jawaban: "マ" },
        { soal: "Katakana untuk 'mi' adalah?", pilihan: ["マ", "ミ", "ム", "メ"], jawaban: "ミ" },
        { soal: "Katakana untuk 'mu' adalah?", pilihan: ["マ", "ミ", "ム", "メ"], jawaban: "ム" },
        { soal: "Katakana untuk 'me' adalah?", pilihan: ["マ", "ミ", "ム", "メ"], jawaban: "メ" },
        { soal: "Katakana untuk 'mo' adalah?", pilihan: ["マ", "ミ", "ム", "モ"], jawaban: "モ" },
        { soal: "Katakana untuk 'ya' adalah?", pilihan: ["ラ", "ヨ", "ユ", "ヤ"], jawaban: "ヤ" },
        { soal: "Katakana untuk 'yu' adalah?", pilihan: ["ラ", "ヨ", "ユ", "ヤ"], jawaban: "ユ" },
        { soal: "Katakana untuk 'yo' adalah?", pilihan: ["ラ", "ヨ", "ユ", "ヤ"], jawaban: "ヨ" },
        { soal: "Katakana untuk 'ra' adalah?", pilihan: ["ラ", "ル", "リ", "レ"], jawaban: "ラ" },
        { soal: "Katakana untuk 'ri' adalah?", pilihan: ["ラ", "ル", "リ", "レ"], jawaban: "リ" },
        { soal: "Katakana untuk 'ru' adalah?", pilihan: ["ラ", "ル", "リ", "レ"], jawaban: "ル" },
        { soal: "Katakana untuk 're' adalah?", pilihan: ["ラ", "ル", "リ", "レ"], jawaban: "レ" },
        { soal: "Katakana untuk 'ro' adalah?", pilihan: ["ラ", "ル", "ロ", "レ"], jawaban: "ロ" },
        { soal: "Katakana untuk 'wa' adalah?", pilihan: ["ワ", "ル", "ン", "ヲ"], jawaban: "ワ" },
        { soal: "Katakana untuk 'wo' adalah?", pilihan: ["ワ", "ル", "ン", "ヲ"], jawaban: "ヲ" },
        { soal: "Katakana untuk 'n' adalah?", pilihan: ["ワ", "ル", "ン", "ヲ"], jawaban: "ン" },
    ],
    kanji: [
        { soal: "Manakah Kanji untuk 'air'?", pilihan: ["火", "水", "木", "金"], jawaban: "水" },
        { soal: "Kanji untuk 'Nihon' adalah?", pilihan: ["日本", "日人", "本日", "日本人"], jawaban: "日本" },
        { soal: "Kanji untuk 'api' adalah?", pilihan: ["火", "水", "風", "土"], jawaban: "火" },
        { soal: "Kanji untuk 'pohon' adalah?", pilihan: ["木", "水", "金", "土"], jawaban: "木" },
        { soal: "Kanji untuk 'emas' atau 'uang' adalah?", pilihan: ["金", "銀", "銅", "火"], jawaban: "金" },
        { soal: "Kanji untuk 'tanah' adalah?", pilihan: ["風", "火", "土", "水"], jawaban: "土" },
        { soal: "Kanji untuk 'angin' adalah?", pilihan: ["水", "風", "火", "氷"], jawaban: "風" },
        { soal: "Kanji untuk 'hari' atau 'matahari' adalah?", pilihan: ["月", "日", "火", "星"], jawaban: "日" },
        { soal: "Kanji untuk 'bulan' adalah?", pilihan: ["日", "月", "火", "星"], jawaban: "月" },
        { soal: "Kanji untuk 'bintang' adalah?", pilihan: ["星", "空", "雲", "雪"], jawaban: "星" },
        { soal: "Kanji untuk 'salju' adalah?", pilihan: ["氷", "雲", "雪", "雨"], jawaban: "雪" },
        { soal: "Kanji untuk 'hujan' adalah?", pilihan: ["水", "雪", "雨", "風"], jawaban: "雨" },
        { soal: "Kanji untuk 'anak' adalah?", pilihan: ["子", "父", "母", "友"], jawaban: "子" },
        { soal: "Kanji untuk 'ayah' adalah?", pilihan: ["父", "母", "子", "兄"], jawaban: "父" },
        { soal: "Kanji untuk 'ibu' adalah?", pilihan: ["母", "父", "姉", "妹"], jawaban: "母" },
        { soal: "Kanji untuk 'kakak laki-laki' adalah?", pilihan: ["兄", "弟", "父", "男"], jawaban: "兄" },
        { soal: "Kanji untuk 'adik laki-laki' adalah?", pilihan: ["弟", "兄", "友", "子"], jawaban: "弟" },
        { soal: "Kanji untuk 'kakak perempuan' adalah?", pilihan: ["姉", "妹", "母", "女"], jawaban: "姉" },
        { soal: "Kanji untuk 'adik perempuan' adalah?", pilihan: ["妹", "姉", "女", "子"], jawaban: "妹" },
        { soal: "Kanji untuk 'teman' adalah?", pilihan: ["友", "人", "子", "兄"], jawaban: "友" },
        { soal: "Kanji untuk 'perempuan' adalah?", pilihan: ["女", "男", "子", "母"], jawaban: "女" },
        { soal: "Kanji untuk 'laki-laki' adalah?", pilihan: ["男", "女", "父", "兄"], jawaban: "男" },
        { soal: "Kanji untuk 'gunung' adalah?", pilihan: ["山", "川", "田", "木"], jawaban: "山" },
        { soal: "Kanji untuk 'sungai' adalah?", pilihan: ["川", "山", "海", "水"], jawaban: "川" },
        { soal: "Kanji untuk 'laut' adalah?", pilihan: ["海", "川", "湖", "水"], jawaban: "海" },
        { soal: "Kanji untuk 'mobil' adalah?", pilihan: ["車", "電", "道", "駅"], jawaban: "車" },
        { soal: "Kanji untuk 'listrik' adalah?", pilihan: ["電", "車", "光", "火"], jawaban: "電" },
        { soal: "Kanji untuk 'jalan' adalah?", pilihan: ["道", "町", "駅", "車"], jawaban: "道" },
        { soal: "Kanji untuk 'stasiun' adalah?", pilihan: ["駅", "道", "町", "電"], jawaban: "駅" },
        { soal: "Kanji untuk 'kota' adalah?", pilihan: ["町", "道", "市", "国"], jawaban: "町" },
        { soal: "Kanji untuk 'langit' adalah?", pilihan: ["空", "雲", "天", "海"], jawaban: "空" },
        { soal: "Kanji untuk 'awan' adalah?", pilihan: ["雲", "雪", "空", "風"], jawaban: "雲" },
        { soal: "Kanji untuk 'cahaya' adalah?", pilihan: ["光", "日", "火", "明"], jawaban: "光" },
        { soal: "Kanji untuk 'waktu' atau 'jam' adalah?", pilihan: ["時", "年", "分", "間"], jawaban: "時" },
        { soal: "Kanji untuk 'tahun' adalah?", pilihan: ["年", "時", "月", "日"], jawaban: "年" },
        { soal: "Kanji untuk 'depan' atau 'sebelumnya' adalah?", pilihan: ["先", "後", "前", "今"], jawaban: "先" },
        { soal: "Kanji untuk 'hidup' adalah?", pilihan: ["生", "死", "先", "元"], jawaban: "生" },
        { soal: "Kanji untuk 'sekolah' adalah?", pilihan: ["校", "学", "教", "室"], jawaban: "校" },
        { soal: "Kanji untuk 'belajar' adalah?", pilihan: ["学", "校", "読", "教"], jawaban: "学" },
        { soal: "Kanji untuk 'nama' adalah?", pilihan: ["名", "人", "字", "本"], jawaban: "名" },
        { soal: "Kanji untuk 'besar' adalah?", pilihan: ["大", "小", "中", "高"], jawaban: "大" },
        { soal: "Kanji untuk 'kecil' adalah?", pilihan: ["小", "中", "少", "短"], jawaban: "小" },
        { soal: "Kanji untuk 'atas' adalah?", pilihan: ["上", "下", "中", "高"], jawaban: "上" },
        { soal: "Kanji untuk 'bawah' adalah?", pilihan: ["下", "上", "中", "低"], jawaban: "下" },
        { soal: "Kanji untuk 'mata' adalah?", pilihan: ["目", "口", "耳", "手"], jawaban: "目" },
        { soal: "Kanji untuk 'telinga' adalah?", pilihan: ["耳", "目", "口", "声"], jawaban: "耳" },
        { soal: "Kanji untuk 'ikan' adalah?", pilihan: ["魚", "鳥", "虫", "肉"], jawaban: "魚" },
        { soal: "Kanji untuk 'teh' adalah?", pilihan: ["茶", "米", "水", "酒"], jawaban: "茶" },
        { soal: "Kanji untuk 'makan' adalah?", pilihan: ["食", "飲", "買", "読"], jawaban: "食" },
        { soal: "Kanji untuk 'minum' adalah?", pilihan: ["飲", "食", "買", "売"], jawaban: "飲" },
        { soal: "Kanji untuk 'bunga' adalah?", pilihan: ["花", "草", "木", "竹"], jawaban: "花" },
        { soal: "Kanji untuk 'bambu' adalah?", pilihan: ["竹", "草", "花", "木"], jawaban: "竹" },
        { soal: "Kanji untuk 'anjing' adalah?", pilihan: ["犬", "猫", "馬", "牛"], jawaban: "犬" },
        { soal: "Kanji untuk 'kucing' adalah?", pilihan: ["猫", "犬", "馬", "鳥"], jawaban: "猫" },
        { soal: "Kanji untuk 'burung' adalah?", pilihan: ["鳥", "虫", "馬", "牛"], jawaban: "鳥" },
        { soal: "Kanji untuk 'kerang' adalah?", pilihan: ["貝", "魚", "虫", "鳥"], jawaban: "貝" },
        { soal: "Kanji untuk 'rumah' adalah?", pilihan: ["家", "門", "町", "室"], jawaban: "家" },
        { soal: "Kanji untuk 'gerbang' adalah?", pilihan: ["門", "家", "室", "店"], jawaban: "門" },
        { soal: "Kanji untuk 'desa' adalah?", pilihan: ["村", "町", "市", "国"], jawaban: "村" },
        { soal: "Kanji untuk 'kota besar' adalah?", pilihan: ["市", "町", "国", "村"], jawaban: "市" },
        { soal: "Kanji untuk 'bahasa' adalah?", pilihan: ["語", "字", "文", "話"], jawaban: "語" },
        { soal: "Kanji untuk 'Inggris' adalah?", pilihan: ["英", "話", "国", "語"], jawaban: "英" },
        { soal: "Kanji untuk 'berbicara' adalah?", pilihan: ["話", "語", "聞", "読"], jawaban: "話" },
        { soal: "Kanji untuk 'mendengar' adalah?", pilihan: ["聞", "読", "話", "見"], jawaban: "聞" },
        { soal: "Kanji untuk 'melihat' adalah?", pilihan: ["見", "書", "話", "読"], jawaban: "見" },
        { soal: "Kanji untuk 'pergi' adalah?", pilihan: ["行", "来", "帰", "走"], jawaban: "行" },
        { soal: "Kanji untuk 'pulang' adalah?", pilihan: ["帰", "行", "来", "乗"], jawaban: "帰" },
        { soal: "Kanji untuk 'berlari' adalah?", pilihan: ["走", "歩", "立", "行"], jawaban: "走" },
        { soal: "Kanji untuk 'berdiri' adalah?", pilihan: ["立", "走", "休", "歩"], jawaban: "立" },
        { soal: "Kanji untuk 'istirahat' adalah?", pilihan: ["休", "立", "走", "止"], jawaban: "休" },
        { soal: "Kanji untuk 'masuk' adalah?", pilihan: ["入", "出", "開", "閉"], jawaban: "入" },
        { soal: "Kanji untuk 'keluar' adalah?", pilihan: ["出", "入", "開", "閉"], jawaban: "出" },
        { soal: "Kanji untuk 'pagi' adalah?", pilihan: ["朝", "昼", "夜", "今"], jawaban: "朝" },
        { soal: "Kanji untuk 'malam' adalah?", pilihan: ["夜", "朝", "昼", "今"], jawaban: "夜" },
        { soal: "Kanji untuk 'sekarang' adalah?", pilihan: ["今", "前", "後", "時"], jawaban: "今" },
        { soal: "Kanji untuk 'tinggi' atau 'mahal' adalah?", pilihan: ["高", "安", "長", "大"], jawaban: "高" },
        { soal: "Kanji untuk 'baru' adalah?", pilihan: ["新", "古", "高", "少"], jawaban: "新" },
        { soal: "Kanji untuk 'merah' adalah?", pilihan: ["赤", "青", "黄", "白"], jawaban: "赤" },
        { soal: "Kanji untuk 'biru' adalah?", pilihan: ["青", "赤", "白", "黄"], jawaban: "青" },
        { soal: "Kanji untuk 'film' adalah?", pilihan: ["映", "画", "写", "画"], jawaban: "映" },
        { soal: "Kanji untuk 'musik' atau 'menyenangkan' adalah?", pilihan: ["楽", "歌", "音", "絵"], jawaban: "楽" }
    ],
    kosakata: [
        { soal: "Apa arti dari いしゃ (isha)?", pilihan: ["Guru", "Dokter", "Perawat", "Pelajar"], jawaban: "Dokter" },
        { soal: "Apa arti dari かいしゃいん (kaishain)?", pilihan: ["Pegawai perusahaan", "Petani", "Ibu rumah tangga", "Siswa"], jawaban: "Pegawai perusahaan" },
        { soal: "Apa arti dari エンジニア (enjinia)?", pilihan: ["Teknisi", "Guru", "Dokter", "Polisi"], jawaban: "Teknisi" },
        { soal: "Apa arti dari かんごし (kangoshi)?", pilihan: ["Perawat", "Dokter", "Pengusaha", "Petani"], jawaban: "Perawat" },
        { soal: "Apa arti dari こうむいん (koomuin)?", pilihan: ["Pegawai negeri", "Guru", "Pedagang", "Pengusaha"], jawaban: "Pegawai negeri" },
        { soal: "Apa arti dari がくせい (gakusee)?", pilihan: ["Siswa", "Guru", "Wartawan", "Pengacara"], jawaban: "Siswa" },
        { soal: "Apa arti dari がっこう (gakkoo)?", pilihan: ["Sekolah", "Kelas", "Meja", "Pensil"], jawaban: "Sekolah" },
        { soal: "Apa arti dari ノート (nooto)?", pilihan: ["Buku tulis", "Papan tulis", "Meja", "Telepon"], jawaban: "Buku tulis" },
        { soal: "Apa arti dari コンピューター (konpyuutaa)?", pilihan: ["Komputer", "Pensil", "Buku pelajaran", "Televisi"], jawaban: "Komputer" },
        { soal: "Apa arti dari ペン (pen)?", pilihan: ["Pulpen", "Kursi", "Handphone", "Pensil"], jawaban: "Pulpen" },
        { soal: "Apa arti dari よみます (yomimasu)?", pilihan: ["Membaca", "Menulis", "Berbicara", "Mendengar"], jawaban: "Membaca" },
        { soal: "Apa arti dari はなします (hanashimasu)?", pilihan: ["Berbicara", "Membaca", "Menulis", "Mendengar"], jawaban: "Berbicara" },
        { soal: "Apa arti dari しつもん（を）します (shitsumon o shimasu)?", pilihan: ["Bertanya", "Membaca", "Berjalan", "Bekerja"], jawaban: "Bertanya" },
        { soal: "Apa arti dari かぞく (kazoku)?", pilihan: ["Keluarga", "Teman", "Saudara", "Anak"], jawaban: "Keluarga" },
        { soal: "Apa arti dari ちち (chichi)?", pilihan: ["Ayah", "Ibu", "Kakak", "Anak"], jawaban: "Ayah" },
        { soal: "Apa arti dari おとうと (otooto)?", pilihan: ["Adik laki-laki", "Kakak laki-laki", "Teman", "Anak"], jawaban: "Adik laki-laki" },
        { soal: "Apa arti dari いもうと (imooto)?", pilihan: ["Adik perempuan", "Ibu", "Kakak perempuan", "Teman"], jawaban: "Adik perempuan" },
        { soal: "Apa arti dari こども (kodomo)?", pilihan: ["Anak", "Suami", "Istri", "Teman"], jawaban: "Anak" },
        { soal: "Apa arti dari ねこ (neko)?", pilihan: ["Kucing", "Anjing", "Burung", "Tikus"], jawaban: "Kucing" },
        { soal: "Apa arti dari とり (tori)?", pilihan: ["Burung", "Tikus", "Kucing", "Kuda"], jawaban: "Burung" },
        { soal: "Apa arti dari サル (saru)?", pilihan: ["Monyet", "Gurita", "Anjing", "Kucing"], jawaban: "Monyet" },
        { soal: "Apa arti dari ムシ (mushi)?", pilihan: ["Serangga", "Ikan", "Kucing", "Burung"], jawaban: "Serangga" },
        { soal: "Apa arti dari たべもの (tabemono)?", pilihan: ["Makanan", "Minuman", "Sayur", "Buah"], jawaban: "Makanan" },
        { soal: "Apa arti dari ごはん (gohan)?", pilihan: ["Nasi", "Roti", "Daging", "Ikan"], jawaban: "Nasi" },
        { soal: "Apa arti dari パン (pan)?", pilihan: ["Roti", "Keju", "Daging", "Telur"], jawaban: "Roti" },
        { soal: "Apa arti dari さかな (sakana)?", pilihan: ["Ikan", "Daging", "Sayur", "Buah"], jawaban: "Ikan" },
        { soal: "Apa arti dari にんじん (ninjin)?", pilihan: ["Wortel", "Kentang", "Tomat", "Keju"], jawaban: "Wortel" },
        { soal: "Apa arti dari バナナ (banana)?", pilihan: ["Pisang", "Apel", "Jeruk", "Melon"], jawaban: "Pisang" },
        { soal: "Apa arti dari レモン (remon)?", pilihan: ["Lemon", "Pisang", "Apel", "Tomat"], jawaban: "Lemon" },
        { soal: "Apa arti dari アイスクリーム (aisu-kuriimu)?", pilihan: ["Es krim", "Permen", "Keju", "Kue"], jawaban: "Es krim" },
        { soal: "Apa arti dari かいごし (kaigoshi)?", pilihan: ["Perawat lansia", "Dokter", "Guru", "Pelajar"], jawaban: "Perawat lansia" },
        { soal: "Apa arti dari きょうし (kyooshi)?", pilihan: ["Guru", "Perawat", "Pegawai", "Dokter"], jawaban: "Guru" },
        { soal: "Apa arti dari じえいぎょう (jieegyoo)?", pilihan: ["Wiraswasta", "Dokter", "Guru", "Siswa"], jawaban: "Wiraswasta" },
        { soal: "Apa arti dari しゅふ (shufu)?", pilihan: ["Ibu rumah tangga", "Guru", "Perawat", "Siswa"], jawaban: "Ibu rumah tangga" },
        { soal: "Apa arti dari のうか (nooka)?", pilihan: ["Petani", "Pedagang", "Pengusaha", "Ibu rumah tangga"], jawaban: "Petani" },
        { soal: "Apa arti dari アルバイト（バイト）(arubaito)?", pilihan: ["Pekerjaan paruh waktu", "Pegawai tetap", "Guru privat", "Pengusaha"], jawaban: "Pekerjaan paruh waktu" },
        { soal: "Apa arti dari クラス (kurasu)?", pilihan: ["Kelas", "Meja", "Buku", "Sekolah"], jawaban: "Kelas" },
        { soal: "Apa arti dari いす (isu)?", pilihan: ["Kursi", "Meja", "Papan", "Lantai"], jawaban: "Kursi" },
        { soal: "Apa arti dari つくえ (tsukue)?", pilihan: ["Meja", "Kursi", "Lemari", "Papan tulis"], jawaban: "Meja" },
        { soal: "Apa arti dari えんぴつ (enpitsu)?", pilihan: ["Pensil", "Pulpen", "Kapur", "Penghapus"], jawaban: "Pensil" },
        { soal: "Apa arti dari きょうかしょ (kyookasho)?", pilihan: ["Buku pelajaran", "Kamus", "Buku tulis", "Kertas"], jawaban: "Buku pelajaran" },
        { soal: "Apa arti dari じしょ (jisho)?", pilihan: ["Kamus", "Buku cerita", "Majalah", "Buku catatan"], jawaban: "Kamus" },
        { soal: "Apa arti dari けいたいでんわ (keetai denwa)?", pilihan: ["Handphone", "Komputer", "Televisi", "Radio"], jawaban: "Handphone" },
        { soal: "Apa arti dari ホワイトボード (howaito-boodo)?", pilihan: ["Papan tulis putih", "Buku", "Kertas", "Pena"], jawaban: "Papan tulis putih" },
        { soal: "Apa arti dari けしごむ (keshigomu)?", pilihan: ["Karet penghapus", "Pulpen", "Pensil", "Buku"], jawaban: "Karet penghapus" },
        { soal: "Apa arti dari べんきょう（を）します (benkyou o shimasu)?", pilihan: ["Belajar", "Mengajar", "Membaca", "Menulis"], jawaban: "Belajar" },
        { soal: "Apa arti dari かきます (kakimasu)?", pilihan: ["Menulis", "Membaca", "Berbicara", "Bertanya"], jawaban: "Menulis" },
        { soal: "Apa arti dari ききます (kikimasu)?", pilihan: ["Mendengar", "Menjawab", "Berbicara", "Membaca"], jawaban: "Mendengar" },
        { soal: "Apa arti dari せつめい（を）します (setsumei o shimasu)?", pilihan: ["Menerangkan", "Bertanya", "Menjawab", "Menulis"], jawaban: "Menerangkan" },
        { soal: "Apa arti dari りょうしん?", pilihan: ["Orang tua", "Anak", "Keluarga", "Teman"], jawaban: "Orang tua" }
    ]
};

let indeksSoal = 0;
let skor = 0;
let kategoriDipilih = '';


function showContent(page) {
    const content = document.getElementById('content');
    setActiveLink(page); // Baris ini sudah ada

    // --- TAMBAHKAN 3 BARIS DI BAWAH INI ---
    // Cek jika layar 'mobile' (lebar di bawah 992px)
    if (window.innerWidth < 992) {
        document.getElementById("wrapper").classList.add("toggled");
    }

    if (page === 'dashboard') {
        content.innerHTML = `
            <div class="sakura-container-slow"> 
                <div class="sakura-flake">🌸</div>
                <div class="sakura-flake">🌸</div>
                <div class="sakura-flake">🌸</div>
                <div class="sakura-flake">🌸</div>
                <div class="sakura-flake">🌸</div>
                <div class="sakura-flake">🌸</div>
                <div class="sakura-flake">🌸</div>
                <div class="sakura-flake">🌸</div>
                <div class="sakura-flake">🌸</div>
                <div class="sakura-flake">🌸</div>
                <div class="sakura-flake">🌸</div>
                <div class="sakura-flake">🌸</div>
                <div class="sakura-flake">🌸</div>
                <div class="sakura-flake">🌸</div>
                <div class="sakura-flake">🌸</div>
                <div class="sakura-flake">🌸</div>
                <div class="sakura-flake">🌸</div>
                <div class="sakura-flake">🌸</div>
                <div class="sakura-flake">🌸</div>
                <div class="sakura-flake">🌸</div>
            </div>
            <div style="position: relative; z-index: 1;">
                <h1 class="mb-4">Selamat Datang di AOZORA JAPAN LEARNING 🌸</h1>
                <p class="fs-5 text-muted">「桜のように、私はまた咲く。」</p>
                 <p class="fs-5 text-muted">「Seperti sakura, aku pun akan mekar lagi.」</p>
                <hr class="my-4">
                
                <h3 class="mt-4"><b>Pengenalan Bahasa Jepang</b></h3>
                <div class="bg-white p-4 rounded shadow-sm mb-4">
                    <p>Bahasa Jepang adalah bahasa yang unik dengan sistem tulisan, tata bahasa, dan kosakata yang berbeda. Bahasa ini memiliki tiga sistem tulisan utama: <b>Hiragana</b>, <b>Katakana</b>, dan <b>Kanji</b>. </p>
                    
                    <p></p>
                    <p>Web ini didasarkan pada pembelajaran bahasa jepang dari awal pemula sampai yang sudah mahir dengan pembelajaran secara otodidak.</p>
                </div>
                <div class="row">
                    <div class="col-md-6 mb-4">
                        <a href="#" class="card-link" onclick="showContent('materi')">
                            <div class="card shadow-sm h-100 border-sakura">
                                <div class="card-body d-flex flex-column justify-content-between">
                                    <div>
                                        <h4 class="card-title text-sakura"><i class="bi bi-book-fill me-2"></i> Materi Belajar</h4>
                                        <p class="card-text">Pelajari huruf Hiragana, Katakana, Kanji, dan kosakata sehari-hari.</p>
                                    </div>
                                    <span class="fw-bold text-sakura">Lihat Materi &rarr;</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-6 mb-4">
                         <a href="#" class="card-link" onclick="showContent('latihan')">
                            <div class="card shadow-sm h-100 border-sakura">
                                <div class="card-body d-flex flex-column justify-content-between">
                                    <div>
                                        <h4 class="card-title text-sakura"><i class="bi bi-pencil-square me-2"></i> Latihan Soal</h4>
                                        <p class="card-text">Uji kemampuanmu dengan latihan soal interaktif untuk setiap kategori.</p>
                                    </div>
                                    <span class="fw-bold text-sakura">Mulai Latihan &rarr;</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <h3 class="mt-4"><b>Tata Bahasa</b></h3>
                <div class="bg-white p-4 rounded shadow-sm mb-4">
                <p>- Bahasa Jepang memiliki struktur kalimat subjek-objek-verba (SOV), yang berbeda dari bahasa Inggris (SVO).</p>
                <p>- Tata bahasa Jepang juga dikenal dengan penggunaan partikel, seperti "wa" (adalah), "ga" (subjek), "no" (genetif), dan "o" (objek) untuk menunjukkan fungsi kata dalam kalimat.</p>
                <p>- Bahasa Jepang juga menggunakan berbagai tingkat bahasa, mulai dari bahasa formal (keigo) yang digunakan dalam situasi resmi hingga bahasa kasual (katakana) yang digunakan dalam situasi santai. </p>
                </div>
                
                
                <h3 class="mt-4"><b>Kosakata (語彙 - Goi)</b></h3>
                <div class="bg-white p-4 rounded shadow-sm mb-4">
                    <p>Kosakata adalah fondasi utama dalam berbahasa. Penguasaan kosakata yang baik memungkinkan kita untuk berkomunikasi dengan efektif.</p>
                    <h5>Contoh Perkenalan Diri:</h5>
                    <ul class="list-unstyled">
                        <li><b>Hajimemashite.</b> (Salam kenal)</li>
                        <li><b>Watashi wa [nama] desu.</b> (Nama saya [nama])</li>
                        <li><b>Yoroshiku onegaishimasu.</b> (Senang berkenalan dengan Anda)</li>
                        <li><b>[Negara] kara kimashita.</b> (Saya berasal dari [Negara])</li>
                    </ul>
                <br>

                    <h5>Fugsi Kosakata:</h5>
                    <p>Kosakata adalah fondasi utama dalam berbahasa. Tanpa kosakata, kita tidak bisa mengungkapkan ide, pikiran, atau emosi kita. Penguasaan kosakata yang baik memungkinkan kita untuk berkomunikasi dengan efektif, memahami berbagai teks dan materi, dan bahkan belajar lebih banyak. </p>
                <br>

                <h5>Jenis Kosakata:</h5>
                    <ul class="list-unstyled">
                        <li><b>Wago (和語) :</b> Kosakata asli bahasa Jepang yang sudah ada sejak lama.</li>
                        <li><b>Kango (漢語) :</b> Kosakata yang berasal dari bahasa Mandarin.</li>
                        <li><b>Gairaigo (外来語) :</b> Kosakata yang berasal dari bahasa asing (contoh: bahasa Inggris, Prancis, dll) yang sudah disesuaikan dengan aturan bahasa Jepang. </li>
                    </ul>
                <br>

                <h5>Angka & Sistem Perhitungan :</h5>
                <p>Bangsa Jepang pada zaman dahulu (dan dalam jumlah yang cukup terbatas pada zaman sekarang)
                    menggunakan angka-angka Tionghoa, yang lalu dibawa ke Korea dan sampai ke Jepang.
                    Berikut ini adalah daftar angka-angka Jepang.</p>
                    <p><b>一 Ichi 1 二 Ni 2 三 San 3 四 Yon 4 五 Go 5 六 Roku 6 七 Nana 7 八 Hachi 8 九 Kyū 9 十 Jū 10</b></p> 
                </div>
            </div> `;

    } else if (page === 'materi') {
        content.innerHTML = `
            <h1><b>Materi Bahasa Jepang Lengkap</b></h1>
            <p>Pilih materi di bawah untuk dipelajari. Gunakan tabel sebagai referensi.</p>
            
            <div class="accordion" id="accordionMateri">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <h3><b>1. 🌸 Hiragana (ひらがな)</b></h3>
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionMateri">
                        <div class="accordion-body">
                            <p>Hiragana adalah sistem penulisan dasar dalam bahasa Jepang. Setiap karakter dalam Hiragana mewakili satu suku kata. Hiragana terdiri dari 46 karakter dasar.</p>
                            <h4><b>Tabel Karakter Hiragana</b></h4>
                            <div class="table-responsive">
                                <table class="table table-bordered table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>Karakter</th>
                                        <th>Bunyi</th>
                                        <th>Contoh</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td>あ</td><td>a</td><td>あさ (asa) - Pagi</td></tr>
                                    <tr><td>い</td><td>i</td><td>いぬ (inu) - Anjing</td></tr>
                                    <tr><td>う</td><td>u</td><td>うみ (umi) - Laut</td></tr>
                                    <tr><td>え</td><td>e</td><td>えき (eki) - Stasiun</td></tr>
                                    <tr><td>お</td><td>o</td><td>おかね (okane) - Uang</td></tr>
                                    <tr><td>か</td><td>ka</td><td>かさ (kasa) - Payung</td></tr>
                                    <tr><td>き</td><td>ki</td><td>き (ki) - Pohon</td></tr>
                                    <tr><td>く</td><td>ku</td><td>くつ (kutsu) - Sepatu</td></tr>
                                    <tr><td>け</td><td>ke</td><td>けむり (kemuri) - Asap</td></tr>
                                    <tr><td>こ</td><td>ko</td><td>ここ (koko) - Sini</td></tr>
                                    <tr><td>さ</td><td>sa</td><td>さくら (sakura) - Bunga sakura</td></tr>
                                    <tr><td>し</td><td>shi</td><td>しろ (shiro) - Kastil</td></tr>
                                    <tr><td>す</td><td>su</td><td>すし (sushi) - Sushi</td></tr>
                                    <tr><td>せ</td><td>se</td><td>せんせい (sensei) - Guru</td></tr>
                                    <tr><td>そ</td><td>so</td><td>そら (sora) - Langit</td></tr>
                                    <tr><td>た</td><td>ta</td><td>たけ (take) - Bambu</td></tr>
                                    <tr><td>ち</td><td>chi</td><td>ちず (chizu) - Peta</td></tr>
                                    <tr><td>つ</td><td>tsu</td><td>つき (tsuki) - Bulan</td></tr>
                                    <tr><td>て</td><td>te</td><td>てがみ (tegami) - Surat</td></tr>
                                    <tr><td>と</td><td>to</td><td>とけい (tokei) - Jam</td></tr>
                                    <tr><td>な</td><td>na</td><td>なつ (natsu) - Musim panas</td></tr>
                                    <tr><td>に</td><td>ni</td><td>にんぎょう (ningyō) - Boneka</td></tr>
                                    <tr><td>ぬ</td><td>nu</td><td>ぬる (nuru) - Melumasi</td></tr>
                                    <tr><td>ね</td><td>ne</td><td>ねこ (neko) - Kucing</td></tr>
                                    <tr><td>の</td><td>no</td><td>のり (nori) - Rumput laut</td></tr>
                                    <tr><td>は</td><td>ha</td><td>はな (hana) - Bunga</td></tr>
                                    <tr><td>ひ</td><td>hi</td><td>ひと (hito) - Orang</td></tr>
                                    <tr><td>ふ</td><td>fu</td><td>ふね (fune) - Kapal</td></tr>
                                    <tr><td>へ</td><td>he</td><td>へや (heya) - Kamar</td></tr>
                                    <tr><td>ほ</td><td>ho</td><td>ほし (hoshi) - Bintang</td></tr>
                                    <tr><td>ま</td><td>ma</td><td>まち (machi) - Kota</td></tr>
                                    <tr><td>み</td><td>mi</td><td>みず (mizu) - Air</td></tr>
                                    <tr><td>む</td><td>mu</td><td>むし (mushi) - Serangga</td></tr>
                                    <tr><td>め</td><td>me</td><td>め (me) - Mata</td></tr>
                                    <tr><td>も</td><td>mo</td><td>もも (momo) - Persik</td></tr>
                                    <tr><td>や</td><td>ya</td><td>やま (yama) - Gunung</td></tr>
                                    <tr><td>ゆ</td><td>yu</td><td>ゆき (yuki) - Salju</td></tr>
                                    <tr><td>よ</td><td>yo</td><td>よる (yoru) - Malam</td></tr>
                                    <tr><td>ら</td><td>ra</td><td>らくだ (rakuda) - Unta</td></tr>
                                    <tr><td>り</td><td>ri</td><td>りんご (ringo) - Apel</td></tr>
                                    <tr><td>る</td><td>ru</td><td>るす (rusu) - Tidak ada di rumah</td></tr>
                                    <tr><td>れ</td><td>re</td><td>れい (rei) - Etiket</td></tr>
                                    <tr><td>ろ</td><td>ro</td><td>ろうか (rōka) - Lorong</td></tr>
                                    <tr><td>わ</td><td>wa</td><td>わたし (watashi) - Saya</td></tr>
                                    <tr><td>を</td><td>wo</td><td>(partikel objek langsung)</td></tr>
                                    <tr><td>ん</td><td>n</td><td>ほん (hon) - Buku</td></tr>
                                </tbody>
                                </table>
                            <br>

                                <h4><b>Contoh Penggunaan Hiragana dalam Kalimat :</b></h4>
                                <p><b>"私は犬が好きです" (watashi wa inu ga suki desu):</b> "Saya suka anjing". </p>
            <p><b>- "私" (watashi):</b> Saya.</p>
            <p><b>- "は" (wa):</b> Partikel yang menandakan topik.</p>
            <p><b>- "犬" (inu):</b> Anjing.</p>
            <p><b>- "が" (ga):</b> Partikel yang menandakan objek yang disukai.</p>
            <p><b>- "好きです" (suki desu):</b> Suka.</p>
            <br><br>
            <p><b>"あなたはどこに住んでいますか" (anata wa doko ni sunde imasu ka):</b> "Kamu tinggal dimana?". </p>
            <p><b>- "あなた" (anata):</b> Kamu.</p>
            <p><b>- "は" (wa):</b> Partikel yang menandakan topik.</p>
            <p><b>- "どこに" (doko ni):</b> Di mana.</p>
            <p><b>- "住んでいます" (sunde imasu):</b> Tinggal.</p>
            <p><b>- "か" (ka):</b> Partikel tanya.</p>
    
            <br><br>
            <h4><b>Contoh Penggunaan Hiragana dalam Kalimat:</b></h4><br>
            <p>- Hiragana juga digunakan untuk menulis katakana dan kanji yang sulit dibaca dalam bentuk kanji. </p>
            <p>- Hiragana juga digunakan untuk menulis nama-nama yang tidak memiliki karakter kanji, seperti nama-nama orang atau tempat. </p>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                             <h3><b>2. 🌸 Katakana (カタカナ)</b></h3>
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionMateri">
                        <div class="accordion-body">
                            <p>Katakana adalah sistem penulisan yang digunakan untuk menulis kata-kata yang berasal dari bahasa asing (loanwords), nama orang, nama tempat, dan onomatope.</p>
                             <h4><b>Tabel Karakter Katakana</b></h4>
                             <div class="table-responsive">
                                <table class="table table-bordered table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>Karakter</th>
                                        <th>Bunyi</th>
                                        <th>Contoh</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td>ア</td><td>a</td><td>アメリカ (Amerika) - Amerika</td></tr>
                                    <tr><td>イ</td><td>i</td><td>イギリス (Igirisu) - Inggris</td></tr>
                                    <tr><td>ウ</td><td>u</td><td>ウェブ (Webu) - Web</td></tr>
                                    <tr><td>エ</td><td>e</td><td>エレベーター (Erebētā) - Lift</td></tr>
                                    <tr><td>オ</td><td>o</td><td>オレンジ (Orenji) - Jeruk</td></tr>
                                    <tr><td>カ</td><td>ka</td><td>カメラ (Kamera) - Kamera</td></tr>
                                    <tr><td>キ</td><td>ki</td><td>キャンプ (Kyanpu) - Camping</td></tr>
                                    <tr><td>ク</td><td>ku</td><td>クラブ (Kurabu) - Klub</td></tr>
                                    <tr><td>ケ</td><td>ke</td><td>ケーキ (Kēki) - Kue</td></tr>
                                    <tr><td>コ</td><td>ko</td><td>コーヒー (Kōhī) - Kopi</td></tr>
                                    <tr><td>サ</td><td>sa</td><td>サンドイッチ (Sandoicchi) - Sandwich</td></tr>
                                    <tr><td>シ</td><td>shi</td><td>システム (Shisutemu) - Sistem</td></tr>
                                    <tr><td>ス</td><td>su</td><td>スポーツ (Supōtsu) - Olahraga</td></tr>
                                    <tr><td>セ</td><td>se</td><td>セーター (Sētā) - Sweater</td></tr>
                                    <tr><td>ソ</td><td>so</td><td>ソファ (Sofa) - Sofa</td></tr>
                                    <tr><td>タ</td><td>ta</td><td>タクシー (Takushī) - Taksi</td></tr>
                                    <tr><td>チ</td><td>chi</td><td>チーズ (Chīzu) - Keju</td></tr>
                                    <tr><td>ツ</td><td>tsu</td><td>ツアー (Tsuā) - Tur</td></tr>
                                    <tr><td>テ</td><td>te</td><td>テレビ (Terebi) - Televisi</td></tr>
                                    <tr><td>ト</td><td>to</td><td>トマト (Tomato) - Tomat</td></tr>
                                    <tr><td>ナ</td><td>na</td><td>ナイフ (Naifu) - Pisau</td></tr>
                                    <tr><td>ニ</td><td>ni</td><td>ニュース (Nyūsu) - Berita</td></tr>
                                    <tr><td>ヌ</td><td>nu</td><td>ヌードル (Nūdoru) - Mi instan</td></tr>
                                    <tr><td>ネ</td><td>ne</td><td>ネット (Netto) - Internet</td></tr>
                                    <tr><td>ノ</td><td>no</td><td>ノート (Nōto) - Buku catatan</td></tr>
                                    <tr><td>ハ</td><td>ha</td><td>ハンバーガー (Hanbāgā) - Hamburger</td></tr>
                                    <tr><td>ヒ</td><td>hi</td><td>ヒーター (Hītā) - Pemanas</td></tr>
                                    <tr><td>フ</td><td>fu</td><td>フラッシュ (Furasshu) - Flash</td></tr>
                                    <tr><td>ヘ</td><td>he</td><td>ヘリコプター (Herikoputā) - Helikopter</td></tr>
                                    <tr><td>ホ</td><td>ho</td><td>ホテル (Hoteru) - Hotel</td></tr>
                                    <tr><td>マ</td><td>ma</td><td>マイケル (Maikeru) - Michael</td></tr>
                                    <tr><td>ミ</td><td>mi</td><td>ミュージック (Myūjikku) - Musik</td></tr>
                                    <tr><td>ム</td><td>mu</td><td>ムービー (Mūbī) - Film</td></tr>
                                    <tr><td>メ</td><td>me</td><td>メニュー (Menyū) - Menu</td></tr>
                                    <tr><td>モ</td><td>mo</td><td>モード (Mōdo) - Mode</td></tr>
                                    <tr><td>ヤ</td><td>ya</td><td>ヤフー (Yafū) - Yahoo</td></tr>
                                    <tr><td>ユ</td><td>yu</td><td>ユニフォーム (Yunifōmu) - Seragam</td></tr>
                                    <tr><td>ヨ</td><td>yo</td><td>ヨガ (Yoga) - Yoga</td></tr>
                                    <tr><td>ラ</td><td>ra</td><td>ラジオ (Rajio) - Radio</td></tr>
                                    <tr><td>リ</td><td>ri</td><td>リンゴ (Ringo) - Apel</td></tr>
                                    <tr><td>ル</td><td>ru</td><td>ルビー (Rubī) - Ruby</td></tr>
                                    <tr><td>レ</td><td>re</td><td>レストラン (Resutoran) - Restoran</td></tr>
                                    <tr><td>ロ</td><td>ro</td><td>ロボット (Robotto) - Robot</td></tr>
                                    <tr><td>ワ</td><td>wa</td><td>ワイン (Wain) - Anggur</td></tr>
                                    <tr><td>ヲ</td><td>wo</td><td>(digunakan untuk partikel objek dalam teks lama)</td></tr>
                                    <tr><td>ン</td><td>n</td><td>コンピュータ (Konpyūta) - Komputer</td></tr>
                                </tbody>
                                </table>

                                 <br>
            <h4><b>Contoh Penggunaan Katakana dalam Kalimat:</b></h4><br>
            <p><b>- ワタシハ アズカデス - Watashi no shumi wa dokusho desu -</b> Saya (adalah) Azuka.</p>
            <p><b>- ワタシノ シュミハ ドクショデス -  Watashi no shumi wa dokusho desu -</b> Hobi saya (adalah) membaca.</p>
            <p><b>- ワタシハ ヘヤヲ ソウジシマス - Watashi wa heya o souji shimasu -</b> Saya membersihkan kamar.</p>
            <p><b>- チチハ ヤサシーデス - Chichi wa yasashii desu -</b>  Ayah saya baik hati.</p>
            <p><b>- ハハハ リョウリガ ジョウズデス - Haha wa ryouri ga jouzu desu -</b>   Ibu saya pandai masak.</p>
            
                            </div>
                        </div>
                    </div>
                </div>


                
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <h3><b>3. 🌸 Kamus Kosakata</b></h3>
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionMateri">
                        <div class="accordion-body vocab-tabs">
                            <p>Pilih kategori kosakata yang ingin Anda lihat:</p>

                            <ul class="nav nav-pills mb-3" id="vocabTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="pekerjaan-tab" data-bs-toggle="tab" data-bs-target="#pekerjaan-pane" type="button" role="tab" aria-controls="pekerjaan-pane" aria-selected="true">Pekerjaan</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="sekolah-tab" data-bs-toggle="tab" data-bs-target="#sekolah-pane" type="button" role="tab" aria-controls="sekolah-pane" aria-selected="false">Sekolah</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="keluarga-tab" data-bs-toggle="tab" data-bs-target="#keluarga-pane" type="button" role="tab" aria-controls="keluarga-pane" aria-selected="false">Keluarga</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="binatang-tab" data-bs-toggle="tab" data-bs-target="#binatang-pane" type="button" role="tab" aria-controls="binatang-pane" aria-selected="false">Binatang</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="makanan-tab" data-bs-toggle="tab" data-bs-target="#makanan-pane" type="button" role="tab" aria-controls="makanan-pane" aria-selected="false">Makanan</button>
                                </li>
                                 <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="warna-tab" data-bs-toggle="tab" data-bs-target="#warna-pane" type="button" role="tab" aria-controls="warna-pane" aria-selected="false">Warna</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="tempat-tab" data-bs-toggle="tab" data-bs-target="#tempat-pane" type="button" role="tab" aria-controls="tempat-pane" aria-selected="false">Tempat</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="alat-tab" data-bs-toggle="tab" data-bs-target="#alat-pane" type="button" role="tab" aria-controls="alat-pane" aria-selected="false">Alat Rumah</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pakaian-tab" data-bs-toggle="tab" data-bs-target="#pakaian-pane" type="button" role="tab" aria-controls="pakaian-pane" aria-selected="false">Pakaian</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="cuaca-tab" data-bs-toggle="tab" data-bs-target="#cuaca-pane" type="button" role="tab" aria-controls="cuaca-pane" aria-selected="false">Cuaca</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="tumbuhan-tab" data-bs-toggle="tab" data-bs-target="#tumbuhan-pane" type="button" role="tab" aria-controls="tumbuhan-pane" aria-selected="false">Tumbuhan</button>
                                </li>
                                 <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="buah-tab" data-bs-toggle="tab" data-bs-target="#buah-pane" type="button" role="tab" aria-controls="buah-pane" aria-selected="false">Buah & Sayur</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="bunga-tab" data-bs-toggle="tab" data-bs-target="#bunga-pane" type="button" role="tab" aria-controls="bunga-pane" aria-selected="false">Bunga</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="transportasi-tab" data-bs-toggle="tab" data-bs-target="#transportasi-pane" type="button" role="tab" aria-controls="transportasi-pane" aria-selected="false">transportasi</button>
                                </li>
                            </ul>

                            <div class="tab-content" id="vocabTabContent">
                                <div class="tab-pane fade show active" id="pekerjaan-pane" role="tabpanel" aria-labelledby="pekerjaan-tab">
                                    <h5>Kosakata Bahasa Jepang Tentang Pekerjaan</h5>
                                    <div class="vocab-list">
                                        <!-- Kosakata Bahasa Jepang Tentang Pekerjaan (しごと - Shigoto) -->
<p>1. <b>いしゃ:</b> isha (dokter)</p>
<p>2. <b>かいしゃいん:</b> kaishain (pegawai perusahaan)</p>
<p>3. <b>エンジニア:</b> enjinia (teknisi / insinyur)</p>
<p>4. <b>かいごし:</b> kaigoshi (perawat lansia)</p>
<p>5. <b>きょうし:</b> kyoushi (guru / pendidik)</p>
<p>6. <b>かんごし:</b> kangoshi (perawat)</p>
<p>7. <b>こうむいん:</b> koomuin (pegawai negeri)</p>
<p>8. <b>じえいぎょう:</b> jieigyoo (wiraswasta)</p>
<p>9. <b>しゅふ:</b> shufu (ibu rumah tangga)</p>
<p>10. <b>のうか:</b> nooka (petani)</p>
<p>11. <b>アルバイト（バイト）:</b> arubaito (pekerjaan paruh waktu)</p>
<p>12. <b>がくせい:</b> gakusee (pelajar / siswa)</p>
<p>13. <b>けいさつかん:</b> keisatsukan (polisi)</p>
<p>14. <b>しょうぼうし:</b> shouboushi (pemadam kebakaran)</p>
<p>15. <b>びようし:</b> biyoushi (penata rambut)</p>
<p>16. <b>てんいん:</b> ten'in (pegawai toko)</p>
<p>17. <b>ウェイター／ウェイトレス:</b> weitā / weitoresu (pelayan restoran)</p>
<p>18. <b>せんせい:</b> sensei (guru / dosen)</p>
<p>19. <b>べんごし:</b> bengoshi (pengacara)</p>
<p>20. <b>せいじか:</b> seijika (politikus)</p>
<p>21. <b>けんちくか:</b> kenchikuka (arsitek)</p>
<p>22. <b>じゅうい:</b> juui (dokter hewan)</p>
<p>23. <b>えいがかんとく:</b> eigakantoku (sutradara film)</p>
<p>24. <b>かしゅ:</b> kashu (penyanyi)</p>
<p>25. <b>はいゆう:</b> haiyuu (aktor)</p>
<p>26. <b>じょゆう:</b> joyuu (aktris)</p>
<p>27. <b>スポーツせんしゅ:</b> supootsusen'shu (atlet)</p>
<p>28. <b>しゃしんか:</b> shashinka (fotografer)</p>
<p>29. <b>かいけいし:</b> kaikeishi (akuntan)</p>
<p>30. <b>じょむいん:</b> jomu'in (staf administrasi)</p>
<p>31. <b>えきいん:</b> ekiin (petugas stasiun)</p>
<p>32. <b>うちゅうひこうし:</b> uchuuhikoushi (astronot)</p>
<p>33. <b>すししょくにん:</b> sushishokunin (koki sushi)</p>
<p>34. <b>りょうりにん:</b> ryourinin (koki / juru masak)</p>
<p>35. <b>パイロット:</b> pairotto (pilot)</p>
<p>36. <b>スチュワーデス:</b> suchuwaadesu (pramugari)</p>
<p>37. <b>けんきゅうしゃ:</b> kenkyuusha (peneliti)</p>
<p>38. <b>こうちょう:</b> kouchou (kepala sekolah)</p>
<p>39. <b>のうぎょうしゃ:</b> nougyousha (petani / pekerja pertanian)</p>
<p>40. <b>アナウンサー:</b> anaunsaa (penyiar berita)</p>
<p>41. <b>じゅうぎょういん:</b> juugyouin (karyawan)</p>
<p>42. <b>おまわりさん:</b> omawari-san (polisi - panggilan sopan)</p>
<p>43. <b>シェフ:</b> shefu (chef)</p>
<p>44. <b>かんこうガイド:</b> kankou gaido (pemandu wisata)</p>
<p>45. <b>パンや:</b> pan'ya (tukang roti)</p>
<p>46. <b>さかなや:</b> sakanaya (penjual ikan)</p>
<p>47. <b>にくや:</b> nikuya (penjual daging)</p>
<p>48. <b>やおや:</b> yaoya (penjual sayur)</p>
<p>49. <b>はなや:</b> hanaya (penjual bunga)</p>
<p>50. <b>ほいくし:</b> hoikushi (guru TK / pengasuh anak)</p>
<p>51. <b>つうやく:</b> tsuuyaku (penerjemah lisan)</p>
<p>52. <b>ほんやくか:</b> honyakuka (penerjemah tulisan)</p>
<p>53. <b>ライター:</b> raitaa (penulis)</p>
<p>54. <b>しんぶんきしゃ:</b> shinbun kisha (wartawan)</p>
<p>55. <b>さっか:</b> sakka (pengarang)</p>
<p>56. <b>マンガか:</b> mangaka (komikus)</p>
<p>57. <b>イラストレーター:</b> irasutoreetaa (ilustrator)</p>
<p>58. <b>カメラマン:</b> kameraman (juru foto)</p>
<p>59. <b>アイドル:</b> aidoru (idola / entertainer)</p>
<p>60. <b>ダンサー:</b> dansaa (penari)</p>
<p>61. <b>モデル:</b> moderu (model)</p>
<p>62. <b>ミュージシャン:</b> myuujishan (musisi)</p>
<p>63. <b>えんそうしゃ:</b> ensousha (pemain musik)</p>
<p>64. <b>せんしゅ:</b> senshu (pemain olahraga)</p>
<p>65. <b>こうがくしゃ:</b> kougakusha (insinyur teknik)</p>
<p>66. <b>かがくしゃ:</b> kagakusha (ilmuwan)</p>
<p>67. <b>きぎょうか:</b> kigyouka (pengusaha)</p>
<p>68. <b>じえいしゃ:</b> jieisha (pebisnis mandiri)</p>
<p>69. <b>ぎんこういん:</b> ginkouin (pegawai bank)</p>
<p>70. <b>ゆうびんきょくいん:</b> yuubinkyokuin (petugas pos)</p>
<p>71. <b>せいそういん:</b> seisouin (petugas kebersihan)</p>
<p>72. <b>けんせつぎょうしゃ:</b> kensetsugyousha (pekerja bangunan)</p>
<p>73. <b>でんきこう:</b> denkikou (teknisi listrik)</p>
<p>74. <b>みせのしゅじん:</b> mise no shujin (pemilik toko)</p>
<p>75. <b>バリスタ:</b> barisuta (barista)</p>
<p>76. <b>コーチ:</b> koochi (pelatih)</p>
<p>77. <b>ガイド:</b> gaido (pemandu)</p>
<p>78. <b>アナリスト:</b> anarisuto (analis)</p>
<p>79. <b>インストラクター:</b> insutorakutaa (instruktur)</p>
<p>80. <b>エコノミスト:</b> ekonomisuto (ekonom)</p>
<p>81. <b>メカニック:</b> mekanikku (montir)</p>
<p>82. <b>セールスマン:</b> seerusuman (salesman)</p>
<p>83. <b>エンジニアリングマネージャー:</b> enjinia ringu manejyaa (manajer teknik)</p>
<p>84. <b>システムアドミニストレーター:</b> shisutemu adominisutureetaa (admin sistem)</p>
<p>85. <b>ネットワークエンジニア:</b> nettowaaku enjinia (teknisi jaringan)</p>
<p>86. <b>カスタマーサポート:</b> kasutamaa sapooto (layanan pelanggan)</p>
<p>87. <b>マネージャー:</b> manejyaa (manajer)</p>
<p>88. <b>ディレクター:</b> direkutaa (direktur)</p>
<p>89. <b>オーナー:</b> oonaa (pemilik bisnis)</p>
<p>90. <b>ショップマネージャー:</b> shoppu manejyaa (manajer toko)</p>
<p>91. <b>エディター:</b> editaa (editor)</p>
<p>92. <b>プロデューサー:</b> purodyuusaa (produser)</p>
<p>93. <b>じどうしゃせいびこう:</b> jidousha seibikou (mekanik mobil)</p>
<p>94. <b>パティシエ:</b> patishie (pembuat kue)</p>
<p>95. <b>デリバリーいん:</b> deribarii-in (kurir / pengantar barang)</p>
<p>96. <b>セキュリティーガード:</b> sekyuriti gaado (satpam / penjaga keamanan)</p>
<p>97. <b>しょくにん:</b> shokunin (pengrajin / tukang)</p>
<p>98. <b>のうぎょうか:</b> nougyouka (petani profesional)</p>
<p>99. <b>どうぶつえんのしょくいん:</b> doubutsuen no shokuin (petugas kebun binatang)</p>
<p>100. <b>しごとをしているひと:</b> shigoto o shiteiru hito (pekerja)</p>

                                    </div>
                                </div>


                                <div class="tab-pane fade" id="sekolah-pane" role="tabpanel" aria-labelledby="sekolah-tab">
                                    <h5>Kosakata Bahasa Jepang Tentang Sekolah</h5>
                                    <div class="vocab-list">
                                        <!-- Kosakata Bahasa Jepang Tentang Sekolah (がっこう - Gakkou) -->
<p>1. <b>がっこう:</b> gakkou (sekolah)</p>
<p>2. <b>せんせい:</b> sensei (guru)</p>
<p>3. <b>がくせい:</b> gakusei (siswa / murid)</p>
<p>4. <b>せいと:</b> seito (murid / pelajar)</p>
<p>5. <b>クラス:</b> kurasu (kelas)</p>
<p>6. <b>きょうしつ:</b> kyoushitsu (ruang kelas)</p>
<p>7. <b>つくえ:</b> tsukue (meja)</p>
<p>8. <b>いす:</b> isu (kursi)</p>
<p>9. <b>えんぴつ:</b> enpitsu (pensil)</p>
<p>10. <b>ペン:</b> pen (pulpen)</p>
<p>11. <b>ノート:</b> nooto (buku tulis)</p>
<p>12. <b>きょうかしょ:</b> kyoukasho (buku pelajaran)</p>
<p>13. <b>じしょ:</b> jisho (kamus)</p>
<p>14. <b>けしごむ:</b> keshigomu (penghapus)</p>
<p>15. <b>ホワイトボード:</b> howaito boodo (papan tulis putih)</p>
<p>16. <b>チョーク:</b> chooku (kapur tulis)</p>
<p>17. <b>コンピューター:</b> konpyuutaa (komputer)</p>
<p>18. <b>ノートパソコン:</b> nooto pasokon (laptop)</p>
<p>19. <b>けいたいでんわ:</b> keitai denwa (ponsel)</p>
<p>20. <b>えんぴつけずり:</b> enpitsu kezuri (rautan pensil)</p>
<p>21. <b>じゅぎょう:</b> jugyou (pelajaran)</p>
<p>22. <b>テスト:</b> tesuto (ujian)</p>
<p>23. <b>しけん:</b> shiken (tes / ujian resmi)</p>
<p>24. <b>べんきょう:</b> benkyou (belajar)</p>
<p>25. <b>しゅくだい:</b> shukudai (pekerjaan rumah / PR)</p>
<p>26. <b>せんこう:</b> senkou (jurusan)</p>
<p>27. <b>こうちょう:</b> kouchou (kepala sekolah)</p>
<p>28. <b>がくちょう:</b> gakuchou (rektor)</p>
<p>29. <b>だいがく:</b> daigaku (universitas)</p>
<p>30. <b>こうこう:</b> koukou (SMA)</p>
<p>31. <b>ちゅうがっこう:</b> chuugakkou (SMP)</p>
<p>32. <b>しょうがっこう:</b> shougakkou (SD)</p>
<p>33. <b>ようちえん:</b> youchien (TK)</p>
<p>34. <b>としょかん:</b> toshokan (perpustakaan)</p>
<p>35. <b>じむしつ:</b> jimushitsu (ruang tata usaha)</p>
<p>36. <b>たいそうかん:</b> taisoukan (gedung olahraga)</p>
<p>37. <b>うんどうじょう:</b> undoujou (lapangan olahraga)</p>
<p>38. <b>こうてい:</b> koutei (halaman sekolah)</p>
<p>39. <b>じかんわり:</b> jikanwari (jadwal pelajaran)</p>
<p>40. <b>せいふく:</b> seifuku (seragam)</p>
<p>41. <b>うわばき:</b> uwabaki (sepatu dalam sekolah)</p>
<p>42. <b>かばん:</b> kaban (tas sekolah)</p>
<p>43. <b>れんらくちょう:</b> renrakuchou (buku komunikasi sekolah)</p>
<p>44. <b>おべんとう:</b> obentou (bekal makan)</p>
<p>45. <b>おひるやすみ:</b> ohiruyasumi (istirahat siang)</p>
<p>46. <b>チャイム:</b> chaimu (bel sekolah)</p>
<p>47. <b>せんたく:</b> sentaku (pilihan mata pelajaran)</p>
<p>48. <b>じゅぎょうりょう:</b> jugyouryou (biaya kuliah)</p>
<p>49. <b>しょうろんぶん:</b> shouronbun (esai pendek)</p>
<p>50. <b>レポート:</b> repooto (laporan)</p>
<p>51. <b>こうろん:</b> kouron (diskusi / debat)</p>
<p>52. <b>プレゼンテーション:</b> purezenteeshon (presentasi)</p>
<p>53. <b>はっぴょう:</b> happyou (presentasi / pengumuman)</p>
<p>54. <b>けんきゅう:</b> kenkyuu (penelitian)</p>
<p>55. <b>こうぎ:</b> kougi (kuliah / ceramah)</p>
<p>56. <b>けいさんき:</b> keisanki (kalkulator)</p>
<p>57. <b>じょうぎ:</b> jougi (penggaris)</p>
<p>58. <b>コンパス:</b> konpasu (jangka)</p>
<p>59. <b>ノリ:</b> nori (lem)</p>
<p>60. <b>ハサミ:</b> hasami (gunting)</p>
<p>61. <b>テープ:</b> teepu (selotip)</p>
<p>62. <b>ふで:</b> fude (kuas tulis Jepang)</p>
<p>63. <b>すずり:</b> suzuri (batu tinta)</p>
<p>64. <b>インク:</b> inku (tinta)</p>
<p>65. <b>しゅうじ:</b> shuuji (kaligrafi Jepang)</p>
<p>66. <b>せいせき:</b> seiseki (nilai / hasil belajar)</p>
<p>67. <b>テストけっか:</b> tesuto kekka (hasil ujian)</p>
<p>68. <b>そつぎょう:</b> sotsugyou (kelulusan)</p>
<p>69. <b>にゅうがく:</b> nyuugaku (masuk sekolah)</p>
<p>70. <b>きょうか:</b> kyouka (mata pelajaran)</p>
<p>71. <b>すうがく:</b> suugaku (matematika)</p>
<p>72. <b>りか:</b> rika (IPA / sains)</p>
<p>73. <b>しゃかい:</b> shakai (IPS / sosial)</p>
<p>74. <b>こくご:</b> kokugo (bahasa Jepang)</p>
<p>75. <b>えいご:</b> eigo (bahasa Inggris)</p>
<p>76. <b>たいいく:</b> taiiku (olahraga)</p>
<p>77. <b>びじゅつ:</b> bijutsu (seni rupa)</p>
<p>78. <b>おんがく:</b> ongaku (musik)</p>
<p>79. <b>じゅく:</b> juku (bimbingan belajar)</p>
<p>80. <b>けいさん:</b> keisan (perhitungan)</p>
<p>81. <b>じっけん:</b> jikken (eksperimen)</p>
<p>82. <b>レッスン:</b> ressun (pelajaran)</p>
<p>83. <b>おしえます:</b> oshiemasu (mengajar)</p>
<p>84. <b>まなびます:</b> manabimasu (belajar / menuntut ilmu)</p>
<p>85. <b>ききます:</b> kikimasu (mendengar)</p>
<p>86. <b>かきます:</b> kakimasu (menulis)</p>
<p>87. <b>よみます:</b> yomimasu (membaca)</p>
<p>88. <b>はなします:</b> hanashimasu (berbicara)</p>
<p>89. <b>れんしゅうします:</b> renshuu shimasu (berlatih)</p>
<p>90. <b>しつもんします:</b> shitsumon shimasu (bertanya)</p>
<p>91. <b>せつめいします:</b> setsumei shimasu (menjelaskan)</p>
<p>92. <b>かいわ:</b> kaiwa (percakapan)</p>
<p>93. <b>クイズ:</b> kuizu (kuis)</p>
<p>94. <b>テストをうけます:</b> tesuto o ukemasu (mengikuti ujian)</p>
<p>95. <b>こうかんりゅうがく:</b> koukan ryuugaku (pertukaran pelajar)</p>
<p>96. <b>ともだち:</b> tomodachi (teman sekolah)</p>
<p>97. <b>がくねん:</b> gakunen (tingkat kelas)</p>
<p>98. <b>がくひ:</b> gakuhi (biaya sekolah)</p>
<p>99. <b>こうどう:</b> koudou (aula sekolah)</p>
<p>100. <b>せんぱい:</b> senpai (kakak kelas / senior)</p>

                                    </div>
                                </div>


                                <div class="tab-pane fade" id="keluarga-pane" role="tabpanel" aria-labelledby="keluarga-tab">
                                    <h5>Kosakata Bahasa Jepang Tentang Keluarga</h5>
                                    <div class="vocab-list">
                                        <!-- Kosakata Bahasa Jepang Tentang Keluarga (かぞく - Kazoku) -->
<p>1. <b>かぞく:</b> kazoku (keluarga)</p>
<p>2. <b>りょうしん:</b> ryoushin (orang tua)</p>
<p>3. <b>ちち:</b> chichi (ayah - digunakan untuk diri sendiri)</p>
<p>4. <b>はは:</b> haha (ibu - digunakan untuk diri sendiri)</p>
<p>5. <b>おとうさん:</b> otousan (ayah - digunakan untuk orang lain)</p>
<p>6. <b>おかあさん:</b> okaasan (ibu - digunakan untuk orang lain)</p>
<p>7. <b>むすこ:</b> musuko (anak laki-laki)</p>
<p>8. <b>むすめ:</b> musume (anak perempuan)</p>
<p>9. <b>あに:</b> ani (kakak laki-laki - diri sendiri)</p>
<p>10. <b>おにいさん:</b> oniisan (kakak laki-laki - orang lain)</p>
<p>11. <b>あね:</b> ane (kakak perempuan - diri sendiri)</p>
<p>12. <b>おねえさん:</b> oneesan (kakak perempuan - orang lain)</p>
<p>13. <b>おとうと:</b> otouto (adik laki-laki)</p>
<p>14. <b>いもうと:</b> imouto (adik perempuan)</p>
<p>15. <b>そふ:</b> sofu (kakek - diri sendiri)</p>
<p>16. <b>おじいさん:</b> ojiisan (kakek - orang lain)</p>
<p>17. <b>そぼ:</b> sobo (nenek - diri sendiri)</p>
<p>18. <b>おばあさん:</b> obaasan (nenek - orang lain)</p>
<p>19. <b>おじ:</b> oji (paman)</p>
<p>20. <b>おば:</b> oba (bibi)</p>
<p>21. <b>いとこ:</b> itoko (sepupu)</p>
<p>22. <b>おい:</b> oi (keponakan laki-laki)</p>
<p>23. <b>めい:</b> mei (keponakan perempuan)</p>
<p>24. <b>まご:</b> mago (cucu)</p>
<p>25. <b>ぎりのちち:</b> giri no chichi (ayah mertua)</p>
<p>26. <b>ぎりのはは:</b> giri no haha (ibu mertua)</p>
<p>27. <b>ぎりのむすこ:</b> giri no musuko (menantu laki-laki)</p>
<p>28. <b>ぎりのむすめ:</b> giri no musume (menantu perempuan)</p>
<p>29. <b>おっと:</b> otto (suami - diri sendiri)</p>
<p>30. <b>しゅじん:</b> shujin (suami - untuk diri sendiri)</p>
<p>31. <b>ごしゅじん:</b> goshujin (suami - orang lain)</p>
<p>32. <b>つま:</b> tsuma (istri - diri sendiri)</p>
<p>33. <b>おくさん:</b> okusan (istri - orang lain)</p>
<p>34. <b>ふうふ:</b> fuufu (suami istri)</p>
<p>35. <b>けっこん:</b> kekkon (pernikahan)</p>
<p>36. <b>りこん:</b> rikon (perceraian)</p>
<p>37. <b>どくしん:</b> dokushin (lajang / belum menikah)</p>
<p>38. <b>しんせき:</b> shinseki (kerabat / saudara jauh)</p>
<p>39. <b>なかよし:</b> nakayoshi (akrab / rukun)</p>
<p>40. <b>おとうとさん:</b> otouto-san (adik laki-laki orang lain)</p>
<p>41. <b>いもうとさん:</b> imouto-san (adik perempuan orang lain)</p>
<p>42. <b>こども:</b> kodomo (anak-anak)</p>
<p>43. <b>おや:</b> oya (orang tua)</p>
<p>44. <b>かれし:</b> kareshi (pacar laki-laki)</p>
<p>45. <b>かのじょ:</b> kanojo (pacar perempuan)</p>
<p>46. <b>だんな:</b> danna (suami)</p>
<p>47. <b>かない:</b> kanai (istri - sebutan sopan)</p>
<p>48. <b>ともだち:</b> tomodachi (teman)</p>
<p>49. <b>しんゆう:</b> shinyuu (sahabat dekat)</p>
<p>50. <b>なかま:</b> nakama (rekan / teman sepergaulan)</p>
<p>51. <b>うちのひと:</b> uchi no hito (orang di rumah / anggota keluarga)</p>
<p>52. <b>おみあい:</b> omiai (perjodohan)</p>
<p>53. <b>しゅじんこう:</b> shujinkou (kepala keluarga / tokoh utama)</p>
<p>54. <b>かぞくみんな:</b> kazoku minna (seluruh keluarga)</p>
<p>55. <b>おじょうさん:</b> ojousan (putri / anak perempuan orang lain)</p>
<p>56. <b>ぼっちゃん:</b> bocchan (putra orang lain / panggilan sopan)</p>
<p>57. <b>こいびと:</b> koibito (kekasih)</p>
<p>58. <b>なか:</b> naka (hubungan / kedekatan)</p>
<p>59. <b>しんるい:</b> shinrui (sanak saudara)</p>
<p>60. <b>ぎりのきょうだい:</b> giri no kyoudai (ipar laki-laki)</p>
<p>61. <b>ぎりのしまい:</b> giri no shimai (ipar perempuan)</p>
<p>62. <b>そふぼ:</b> sofubo (kakek-nenek)</p>
<p>63. <b>おじおば:</b> oji oba (paman dan bibi)</p>
<p>64. <b>おとうとたち:</b> otouto-tachi (adik-adik laki-laki)</p>
<p>65. <b>いもうとたち:</b> imouto-tachi (adik-adik perempuan)</p>
<p>66. <b>こふうふ:</b> kofuu-fu (pasangan muda)</p>
<p>67. <b>りょうふうふ:</b> ryoufuu-fu (pasangan tua)</p>
<p>68. <b>まごむすこ:</b> mago musuko (cucu laki-laki)</p>
<p>69. <b>まごむすめ:</b> mago musume (cucu perempuan)</p>
<p>70. <b>ふうふげんか:</b> fuufu genka (pertengkaran suami istri)</p>
<p>71. <b>けっこんしき:</b> kekkon shiki (upacara pernikahan)</p>
<p>72. <b>あかちゃん:</b> akachan (bayi)</p>
<p>73. <b>ようじ:</b> youji (anak kecil / balita)</p>
<p>74. <b>せいねん:</b> seinen (orang muda / dewasa muda)</p>
<p>75. <b>ちょうなん:</b> chounan (anak laki-laki pertama)</p>
<p>76. <b>じなん:</b> jinan (anak laki-laki kedua)</p>
<p>77. <b>ちょうじょ:</b> choujo (anak perempuan pertama)</p>
<p>78. <b>じじょ:</b> jijo (anak perempuan kedua)</p>
<p>79. <b>ふたご:</b> futago (kembar)</p>
<p>80. <b>さんきょうだい:</b> sankyoudai (tiga bersaudara)</p>
<p>81. <b>しんこんりょこう:</b> shinkon ryokou (bulan madu)</p>
<p>82. <b>おとうとさんのつま:</b> otouto-san no tsuma (istri adik laki-laki)</p>
<p>83. <b>おねえさんのだんな:</b> oneesan no danna (suami kakak perempuan)</p>
<p>84. <b>いもうとのこども:</b> imouto no kodomo (anak adik perempuan)</p>
<p>85. <b>おにいさんのこども:</b> oniisan no kodomo (anak kakak laki-laki)</p>
<p>86. <b>そぼのいえ:</b> sobo no ie (rumah nenek)</p>
<p>87. <b>かぞくのしゃしん:</b> kazoku no shashin (foto keluarga)</p>
<p>88. <b>なかがいい:</b> naka ga ii (hubungannya baik)</p>
<p>89. <b>けんかします:</b> kenka shimasu (bertengkar)</p>
<p>90. <b>しんせつ:</b> shinsetsu (baik hati)</p>
<p>91. <b>やさしい:</b> yasashii (ramah / lembut)</p>
<p>92. <b>うち:</b> uchi (rumah / keluarga sendiri)</p>
<p>93. <b>そと:</b> soto (luar / bukan keluarga sendiri)</p>
<p>94. <b>いえ:</b> ie (rumah)</p>
<p>95. <b>じたく:</b> jitaku (rumah sendiri)</p>
<p>96. <b>きょうだい:</b> kyoudai (saudara kandung)</p>
<p>97. <b>しまい:</b> shimai (saudari kandung)</p>
<p>98. <b>おやこ:</b> oyako (hubungan orang tua dan anak)</p>
<p>99. <b>そふぼとすごします:</b> sofubo to sugoshimasu (menghabiskan waktu dengan kakek-nenek)</p>
<p>100. <b>かぞくあい:</b> kazoku ai (kasih sayang keluarga)</p>

                                    </div>
                                </div>


                                <div class="tab-pane fade" id="binatang-pane" role="tabpanel" aria-labelledby="binatang-tab">
                                    <h5>Kosakata Bahasa Jepang Tentang Binatang</h5>
                                    <div class="vocab-list">
                                        <!-- Kosakata Bahasa Jepang Tentang Binatang (どうぶつ - Doubutsu) -->
<p>1. <b>どうぶつ:</b> doubutsu (hewan / binatang)</p>
<p>2. <b>ねこ:</b> neko (kucing)</p>
<p>3. <b>いぬ:</b> inu (anjing)</p>
<p>4. <b>うさぎ:</b> usagi (kelinci)</p>
<p>5. <b>とり:</b> tori (burung)</p>
<p>6. <b>さかな:</b> sakana (ikan)</p>
<p>7. <b>うま:</b> uma (kuda)</p>
<p>8. <b>うし:</b> ushi (sapi)</p>
<p>9. <b>ぶた:</b> buta (babi)</p>
<p>10. <b>ひつじ:</b> hitsuji (domba)</p>
<p>11. <b>やぎ:</b> yagi (kambing)</p>
<p>12. <b>とら:</b> tora (harimau)</p>
<p>13. <b>らいおん:</b> raion (singa)</p>
<p>14. <b>くま:</b> kuma (beruang)</p>
<p>15. <b>ぞう:</b> zou (gajah)</p>
<p>16. <b>きりん:</b> kirin (jerapah)</p>
<p>17. <b>さる:</b> saru (monyet)</p>
<p>18. <b>へび:</b> hebi (ular)</p>
<p>19. <b>とかげ:</b> tokage (kadal)</p>
<p>20. <b>かめ:</b> kame (kura-kura)</p>
<p>21. <b>たこ:</b> tako (gurita)</p>
<p>22. <b>いか:</b> ika (cumi-cumi)</p>
<p>23. <b>かに:</b> kani (kepiting)</p>
<p>24. <b>えび:</b> ebi (udang)</p>
<p>25. <b>かえる:</b> kaeru (katak)</p>
<p>26. <b>あり:</b> ari (semut)</p>
<p>27. <b>はち:</b> hachi (lebah)</p>
<p>28. <b>ちょう:</b> chou (kupu-kupu)</p>
<p>29. <b>とんぼ:</b> tonbo (capung)</p>
<p>30. <b>くも:</b> kumo (laba-laba)</p>
<p>31. <b>はえ:</b> hae (lalat)</p>
<p>32. <b>ねずみ:</b> nezumi (tikus)</p>
<p>33. <b>はと:</b> hato (merpati)</p>
<p>34. <b>からす:</b> karasu (gagak)</p>
<p>35. <b>すずめ:</b> suzume (burung pipit)</p>
<p>36. <b>にわとり:</b> niwatori (ayam)</p>
<p>37. <b>ひよこ:</b> hiyoko (anak ayam)</p>
<p>38. <b>かも:</b> kamo (bebek)</p>
<p>39. <b>がちょう:</b> gachou (angsa)</p>
<p>40. <b>ぺんぎん:</b> pengin (pinguin)</p>
<p>41. <b>いるか:</b> iruka (lumba-lumba)</p>
<p>42. <b>くじら:</b> kujira (ikan paus)</p>
<p>43. <b>さめ:</b> same (hiu)</p>
<p>44. <b>たい:</b> tai (ikan kakap)</p>
<p>45. <b>きんぎょ:</b> kingyo (ikan mas)</p>
<p>46. <b>にしきごい:</b> nishikigoi (ikan koi)</p>
<p>47. <b>ハムスター:</b> hamusutaa (hamster)</p>
<p>48. <b>モルモット:</b> morumotto (marmut)</p>
<p>49. <b>フェレット:</b> feretto (ferret)</p>
<p>50. <b>リス:</b> risu (tupai)</p>
<p>51. <b>コアラ:</b> koara (koala)</p>
<p>52. <b>カンガルー:</b> kangaruu (kanguru)</p>
<p>53. <b>パンダ:</b> panda (panda)</p>
<p>54. <b>レッサーパンダ:</b> ressa panda (panda merah)</p>
<p>55. <b>きつね:</b> kitsune (rubah)</p>
<p>56. <b>たぬき:</b> tanuki (anjing rakun / tanuki)</p>
<p>57. <b>おおかみ:</b> ookami (serigala)</p>
<p>58. <b>しか:</b> shika (rusa)</p>
<p>59. <b>いのしし:</b> inoshishi (babi hutan)</p>
<p>60. <b>とら:</b> tora (macan)</p>
<p>61. <b>ひょう:</b> hyou (macan tutul)</p>
<p>62. <b>くじゃく:</b> kujaku (merak)</p>
<p>63. <b>わし:</b> washi (elang)</p>
<p>64. <b>たか:</b> taka (rajawali)</p>
<p>65. <b>ふくろう:</b> fukurou (burung hantu)</p>
<p>66. <b>こうもり:</b> koumori (kelelawar)</p>
<p>67. <b>へび:</b> hebi (ular)</p>
<p>68. <b>とかげ:</b> tokage (kadal)</p>
<p>69. <b>とかげもどき:</b> tokage modoki (gecko)</p>
<p>70. <b>ワニ:</b> wani (buaya)</p>
<p>71. <b>イルカ:</b> iruka (lumba-lumba)</p>
<p>72. <b>アシカ:</b> ashika (anjing laut)</p>
<p>73. <b>トド:</b> todo (anjing laut besar)</p>
<p>74. <b>ラッコ:</b> rakko (berang-berang laut)</p>
<p>75. <b>カメレオン:</b> kamereon (bunglon)</p>
<p>76. <b>ヒョウモントカゲモドキ:</b> hyoumon tokagemodoki (gecko leopard)</p>
<p>77. <b>ナマケモノ:</b> namakemono (kemalasan / sloth)</p>
<p>78. <b>アリクイ:</b> arikui (pemakan semut)</p>
<p>79. <b>ハリネズミ:</b> harinezumi (landak mini)</p>
<p>80. <b>ゾウガメ:</b> zougame (kura-kura raksasa)</p>
<p>81. <b>サメ:</b> same (ikan hiu)</p>
<p>82. <b>クラゲ:</b> kurage (ubur-ubur)</p>
<p>83. <b>タツノオトシゴ:</b> tatsu no otoshigo (kuda laut)</p>
<p>84. <b>ヒトデ:</b> hitode (bintang laut)</p>
<p>85. <b>カタツムリ:</b> katatsumuri (siput)</p>
<p>86. <b>ナメクジ:</b> namekuji (bekicot tanpa cangkang)</p>
<p>87. <b>バッタ:</b> batta (belalang)</p>
<p>88. <b>カマキリ:</b> kamakiri (belalang sembah)</p>
<p>89. <b>セミ:</b> semi (tonggeret)</p>
<p>90. <b>ミミズ:</b> mimizu (cacing)</p>
<p>91. <b>スズメバチ:</b> suzumebachi (tawon besar / lebah pembunuh)</p>
<p>92. <b>ホタル:</b> hotaru (kunang-kunang)</p>
<p>93. <b>カブトムシ:</b> kabutomushi (kumbang badak)</p>
<p>94. <b>クワガタ:</b> kuwagata (kumbang tanduk rusa)</p>
<p>95. <b>ミツバチ:</b> mitsubachi (lebah madu)</p>
<p>96. <b>アリ:</b> ari (semut)</p>
<p>97. <b>ドジョウ:</b> dojo (ikan loach / ikan rawa Jepang)</p>
<p>98. <b>ウナギ:</b> unagi (belut)</p>
<p>99. <b>カエル:</b> kaeru (katak)</p>
<p>100. <b>ペット:</b> petto (hewan peliharaan)</p>

                                    </div>
                                </div>


                                <div class="tab-pane fade" id="makanan-pane" role="tabpanel" aria-labelledby="makanan-tab">
                                    <h5>Kosakata Bahasa Jepang Tentang Makanan</h5>
                                    <div class="vocab-list">
                                       <!-- Kosakata Bahasa Jepang Tentang Makanan (たべもの - Tabemono) -->
<p>1. <b>たべもの:</b> tabemono (makanan)</p>
<p>2. <b>ごはん:</b> gohan (nasi / makanan pokok)</p>
<p>3. <b>すし:</b> sushi (sushi)</p>
<p>4. <b>おにぎり:</b> onigiri (nasi kepal)</p>
<p>5. <b>さしみ:</b> sashimi (ikan mentah)</p>
<p>6. <b>てんぷら:</b> tenpura (gorengan Jepang)</p>
<p>7. <b>そば:</b> soba (mi soba / mi gandum)</p>
<p>8. <b>うどん:</b> udon (mi tebal Jepang)</p>
<p>9. <b>らーめん:</b> raamen (ramen)</p>
<p>10. <b>やきそば:</b> yakisoba (mi goreng Jepang)</p>
<p>11. <b>おこのみやき:</b> okonomiyaki (pancake asin Jepang)</p>
<p>12. <b>たこやき:</b> takoyaki (bola gurita)</p>
<p>13. <b>からあげ:</b> karaage (ayam goreng Jepang)</p>
<p>14. <b>ぎょうざ:</b> gyouza (pangsit goreng / rebus)</p>
<p>15. <b>すきやき:</b> sukiyaki (hot pot daging sapi)</p>
<p>16. <b>しゃぶしゃぶ:</b> shabushabu (hot pot irisan daging tipis)</p>
<p>17. <b>やきにく:</b> yakiniku (barbekyu Jepang)</p>
<p>18. <b>にく:</b> niku (daging)</p>
<p>19. <b>ぎゅうにく:</b> gyuuniku (daging sapi)</p>
<p>20. <b>ぶたにく:</b> butaniku (daging babi)</p>
<p>21. <b>とりにく:</b> toriniku (daging ayam)</p>
<p>22. <b>さかな:</b> sakana (ikan)</p>
<p>23. <b>えび:</b> ebi (udang)</p>
<p>24. <b>かに:</b> kani (kepiting)</p>
<p>25. <b>いか:</b> ika (cumi-cumi)</p>
<p>26. <b>たこ:</b> tako (gurita)</p>
<p>27. <b>やさい:</b> yasai (sayuran)</p>
<p>28. <b>にんじん:</b> ninjin (wortel)</p>
<p>29. <b>じゃがいも:</b> jagaimo (kentang)</p>
<p>30. <b>たまねぎ:</b> tamanegi (bawang bombay)</p>
<p>31. <b>にんにく:</b> ninniku (bawang putih)</p>
<p>32. <b>だいこん:</b> daikon (lobak putih)</p>
<p>33. <b>きゃべつ:</b> kyabetsu (kubis)</p>
<p>34. <b>ほうれんそう:</b> hourensou (bayam)</p>
<p>35. <b>なす:</b> nasu (terong)</p>
<p>36. <b>きゅうり:</b> kyuuri (mentimun)</p>
<p>37. <b>とまと:</b> tomato (tomat)</p>
<p>38. <b>れたす:</b> retasu (selada)</p>
<p>39. <b>ぴーまん:</b> piiman (paprika / cabai hijau)</p>
<p>40. <b>かぼちゃ:</b> kabocha (labu Jepang)</p>
<p>41. <b>ねぎ:</b> negi (daun bawang)</p>
<p>42. <b>しいたけ:</b> shiitake (jamur shiitake)</p>
<p>43. <b>まつたけ:</b> matsutake (jamur matsutake)</p>
<p>44. <b>くだもの:</b> kudamono (buah-buahan)</p>
<p>45. <b>りんご:</b> ringo (apel)</p>
<p>46. <b>みかん:</b> mikan (jeruk)</p>
<p>47. <b>ばなな:</b> banana (pisang)</p>
<p>48. <b>いちご:</b> ichigo (strawberi)</p>
<p>49. <b>ぶどう:</b> budou (anggur)</p>
<p>50. <b>すいか:</b> suika (semangka)</p>
<p>51. <b>めろん:</b> meron (melon)</p>
<p>52. <b>もも:</b> momo (persik)</p>
<p>53. <b>なし:</b> nashi (pir Jepang)</p>
<p>54. <b>さくらんぼ:</b> sakuranbo (ceri)</p>
<p>55. <b>かき:</b> kaki (kesemek)</p>
<p>56. <b>れもん:</b> remon (lemon)</p>
<p>57. <b>ぱいなっぷる:</b> painappuru (nanas)</p>
<p>58. <b>すとろべりー:</b> sutoroberii (stroberi)</p>
<p>59. <b>まんごー:</b> mangoo (mangga)</p>
<p>60. <b>こめ:</b> kome (beras)</p>
<p>61. <b>パン:</b> pan (roti)</p>
<p>62. <b>けーき:</b> keeki (kue)</p>
<p>63. <b>くっきー:</b> kukkii (kue kering / cookie)</p>
<p>64. <b>ちょこれーと:</b> chokoreeto (cokelat)</p>
<p>65. <b>あめ:</b> ame (permen)</p>
<p>66. <b>あいすくりーむ:</b> aisukuriimu (es krim)</p>
<p>67. <b>ぷりん:</b> purin (puding karamel)</p>
<p>68. <b>もち:</b> mochi (kue beras)</p>
<p>69. <b>だんご:</b> dango (bola tepung beras)</p>
<p>70. <b>あんぱん:</b> anpan (roti isi kacang merah)</p>
<p>71. <b>まんじゅう:</b> manjuu (kue kukus isi manis)</p>
<p>72. <b>せんべい:</b> senbei (kerupuk nasi Jepang)</p>
<p>73. <b>おちゃづけ:</b> ochazuke (nasi dengan teh hijau)</p>
<p>74. <b>みそしる:</b> misoshiru (sup miso)</p>
<p>75. <b>なっとう:</b> nattou (kedelai fermentasi)</p>
<p>76. <b>とうふ:</b> toufu (tahu)</p>
<p>77. <b>たまご:</b> tamago (telur)</p>
<p>78. <b>おべんとう:</b> obentou (bekal makan)</p>
<p>79. <b>やきざかな:</b> yakizakana (ikan bakar)</p>
<p>80. <b>やさいいため:</b> yasai itame (tumis sayur)</p>
<p>81. <b>すーぷ:</b> suupu (sup)</p>
<p>82. <b>からいもの:</b> karaimono (makanan pedas)</p>
<p>83. <b>あまいもの:</b> amaimono (makanan manis)</p>
<p>84. <b>すっぱいもの:</b> suppaimono (makanan asam)</p>
<p>85. <b>しおからいもの:</b> shiokaraimono (makanan asin)</p>
<p>86. <b>てんどん:</b> tendon (nasi dengan tempura)</p>
<p>87. <b>かつどん:</b> katsudon (nasi dengan babi goreng tepung)</p>
<p>88. <b>おやこどん:</b> oyakodon (nasi ayam dan telur)</p>
<p>89. <b>ぎゅうどん:</b> gyuudon (nasi daging sapi)</p>
<p>90. <b>からーげどん:</b> karaagedon (nasi ayam goreng)</p>
<p>91. <b>すぱげってぃ:</b> supagetti (spaghetti)</p>
<p>92. <b>ぴざ:</b> piza (pizza)</p>
<p>93. <b>はんばーがー:</b> hanbaagaa (hamburger)</p>
<p>94. <b>ふらいどぽてと:</b> furaido poteto (kentang goreng)</p>
<p>95. <b>ほっとどっぐ:</b> hottodoggu (hotdog)</p>
<p>96. <b>さらだ:</b> sarada (salad)</p>
<p>97. <b>すーぷ:</b> suupu (sup)</p>
<p>98. <b>かれーらいす:</b> karee raisu (nasi kari)</p>
<p>99. <b>おやつ:</b> oyatsu (camilan)</p>
<p>100. <b>りょうり:</b> ryouri (masakan / hidangan)</p>

                                    </div>
                                </div>


                                <div class="tab-pane fade" id="warna-pane" role="tabpanel" aria-labelledby="warna-tab">
                                    <h5>Kosakata Bahasa Jepang Tentang Warna</h5>
                                    <div class="vocab-list">
                                        <!-- Kosakata Bahasa Jepang Tentang Warna (いろ - Iro) -->
<p>1. <b>いろ:</b> iro (warna)</p>
<p>2. <b>あか:</b> aka (merah)</p>
<p>3. <b>あお:</b> ao (biru)</p>
<p>4. <b>きいろ:</b> kiiro (kuning)</p>
<p>5. <b>みどり:</b> midori (hijau)</p>
<p>6. <b>しろ:</b> shiro (putih)</p>
<p>7. <b>くろ:</b> kuro (hitam)</p>
<p>8. <b>ちゃいろ:</b> chairo (cokelat)</p>
<p>9. <b>むらさき:</b> murasaki (ungu)</p>
<p>10. <b>ぴんく:</b> pinku (merah muda)</p>
<p>11. <b>オレンジ:</b> orenji (oranye)</p>
<p>12. <b>グレー:</b> guree (abu-abu)</p>
<p>13. <b>ベージュ:</b> beeju (krem / beige)</p>
<p>14. <b>きんいろ:</b> kin'iro (emas)</p>
<p>15. <b>ぎんいろ:</b> gin'iro (perak)</p>
<p>16. <b>こんいろ:</b> kon’iro (biru tua / navy)</p>
<p>17. <b>みずいろ:</b> mizuiro (biru muda / biru air)</p>
<p>18. <b>はいいろ:</b> haiiro (abu-abu)</p>
<p>19. <b>クリームいろ:</b> kuriimu iro (warna krim)</p>
<p>20. <b>だいだいいろ:</b> daidaiiro (oranye tua)</p>
<p>21. <b>あかるいあお:</b> akarui ao (biru cerah)</p>
<p>22. <b>あかるいみどり:</b> akarui midori (hijau cerah)</p>
<p>23. <b>こいあお:</b> koi ao (biru tua)</p>
<p>24. <b>こいみどり:</b> koi midori (hijau tua)</p>
<p>25. <b>うすいあか:</b> usui aka (merah muda muda / pucat)</p>
<p>26. <b>うすいみずいろ:</b> usui mizuiro (biru pucat)</p>
<p>27. <b>くすんだちゃいろ:</b> kusunda chairo (cokelat kusam)</p>
<p>28. <b>はなやかなあか:</b> hanayaka na aka (merah cerah)</p>
<p>29. <b>まっしろ:</b> masshiro (putih bersih / putih sekali)</p>
<p>30. <b>まっくろ:</b> makkuro (hitam pekat)</p>
<p>31. <b>まっあお:</b> massao (biru pekat)</p>
<p>32. <b>まっかな:</b> makkana (merah pekat)</p>
<p>33. <b>まっきいろ:</b> makkiiro (kuning cerah sekali)</p>
<p>34. <b>しぶいあお:</b> shibui ao (biru keabu-abuan / lembut)</p>
<p>35. <b>しぶいみどり:</b> shibui midori (hijau lembut)</p>
<p>36. <b>しぶいちゃいろ:</b> shibui chairo (cokelat lembut)</p>
<p>37. <b>にじいろ:</b> niji iro (warna pelangi)</p>
<p>38. <b>レインボー:</b> reinboo (rainbow / pelangi)</p>
<p>39. <b>カラフル:</b> karafuru (berwarna-warni)</p>
<p>40. <b>ももいろ:</b> momoiro (warna peach / merah muda lembut)</p>
<p>41. <b>あさぎいろ:</b> asagiiro (biru kehijauan muda)</p>
<p>42. <b>あおみどり:</b> ao midori (biru kehijauan)</p>
<p>43. <b>あかちゃいろ:</b> akachairo (cokelat kemerahan)</p>
<p>44. <b>うぐいすいろ:</b> uguisuiro (hijau lumut)</p>
<p>45. <b>きみどり:</b> kimidori (hijau kekuningan)</p>
<p>46. <b>そらいろ:</b> sorairo (warna langit / biru muda)</p>
<p>47. <b>くさのいろ:</b> kusa no iro (warna rumput / hijau daun)</p>
<p>48. <b>すなはまのいろ:</b> sunahama no iro (warna pasir)</p>
<p>49. <b>かわのいろ:</b> kawa no iro (warna sungai / abu kebiruan)</p>
<p>50. <b>よるのいろ:</b> yoru no iro (warna malam / biru gelap)</p>
<p>51. <b>ひのいろ:</b> hi no iro (warna api / oranye kemerahan)</p>
<p>52. <b>こがねいろ:</b> kogane iro (warna emas kekuningan)</p>
<p>53. <b>ぎんいろ:</b> gin iro (warna perak)</p>
<p>54. <b>どういろ:</b> dou iro (warna tembaga)</p>
<p>55. <b>くろみどり:</b> kuromidori (hijau tua gelap)</p>
<p>56. <b>しんく:</b> shinku (merah tua / scarlet)</p>
<p>57. <b>べにいろ:</b> beniiro (merah terang tradisional Jepang)</p>
<p>58. <b>あかねいろ:</b> akaneiro (merah kecokelatan / crimson)</p>
<p>59. <b>あい:</b> ai (nila / indigo)</p>
<p>60. <b>あいねず:</b> ainezu (abu kebiruan)</p>
<p>61. <b>こげちゃいろ:</b> kogechairo (cokelat gelap / gosong)</p>
<p>62. <b>こげあか:</b> kokeaka (merah gelap / merah gosong)</p>
<p>63. <b>つちいろ:</b> tsuchi iro (warna tanah)</p>
<p>64. <b>はだいろ:</b> hadairo (warna kulit / krem)</p>
<p>65. <b>おうどいろ:</b> oudo iro (kuning tanah)</p>
<p>66. <b>ひいろ:</b> hiro (warna api merah kekuningan)</p>
<p>67. <b>べーじゅ:</b> beeju (warna beige / krem)</p>
<p>68. <b>まっちゃいろ:</b> maccha iro (warna teh hijau / matcha)</p>
<p>69. <b>こいちゃいろ:</b> koichairo (cokelat tua)</p>
<p>70. <b>うすちゃいろ:</b> usuchairo (cokelat muda)</p>
<p>71. <b>うすみどり:</b> usumidori (hijau muda)</p>
<p>72. <b>うすあお:</b> usuao (biru muda)</p>
<p>73. <b>きつねいろ:</b> kitsune iro (warna cokelat kekuningan / seperti rubah)</p>
<p>74. <b>くりいろ:</b> kuri iro (warna kastanye / cokelat kemerahan)</p>
<p>75. <b>ちゃねず:</b> chanezu (abu kecokelatan)</p>
<p>76. <b>ねずみいろ:</b> nezumiiro (warna abu-abu tikus)</p>
<p>77. <b>しんねず:</b> shinnezu (abu gelap)</p>
<p>78. <b>すみいろ:</b> sumi iro (warna arang / hitam keabu-abuan)</p>
<p>79. <b>くろにちかい:</b> kuro ni chikai (mendekati hitam)</p>
<p>80. <b>まっしろけ:</b> masshiro ke (sangat putih)</p>
<p>81. <b>しろっぽい:</b> shiroppoi (agak putih)</p>
<p>82. <b>くろっぽい:</b> kuroppoi (agak hitam)</p>
<p>83. <b>あかっぽい:</b> akappoi (agak merah)</p>
<p>84. <b>きいろっぽい:</b> kiiroppoi (agak kuning)</p>
<p>85. <b>あおっぽい:</b> aoppoi (agak biru)</p>
<p>86. <b>みどりっぽい:</b> midorippoi (agak hijau)</p>
<p>87. <b>ちゃいろっぽい:</b> chairoppoi (agak cokelat)</p>
<p>88. <b>にじのいろ:</b> niji no iro (warna pelangi)</p>
<p>89. <b>ほのおのいろ:</b> honoo no iro (warna api)</p>
<p>90. <b>そらのいろ:</b> sora no iro (warna langit)</p>
<p>91. <b>うみのいろ:</b> umi no iro (warna laut)</p>
<p>92. <b>やまのいろ:</b> yama no iro (warna gunung / hijau tua)</p>
<p>93. <b>もりのいろ:</b> mori no iro (warna hutan / hijau gelap)</p>
<p>94. <b>ゆきのいろ:</b> yuki no iro (warna salju / putih bersih)</p>
<p>95. <b>はなのいろ:</b> hana no iro (warna bunga)</p>
<p>96. <b>ちのいろ:</b> chi no iro (warna darah / merah tua)</p>
<p>97. <b>そめもののいろ:</b> somemono no iro (warna kain celupan)</p>
<p>98. <b>こうようのいろ:</b> kouyou no iro (warna daun musim gugur)</p>
<p>99. <b>たいようのいろ:</b> taiyou no iro (warna matahari / oranye terang)</p>
<p>100. <b>いろいろ:</b> iroiro (bermacam-macam warna)</p>

                                    </div>
                                </div>


                                <div class="tab-pane fade" id="tempat-pane" role="tabpanel" aria-labelledby="tempat-tab">
                                    <h5>Kosakata Bahasa Jepang Tentang Tempat</h5>
                                    <div class="vocab-list">
                                        <!-- Kosakata Bahasa Jepang Tentang Tempat (ばしょ - Basho) -->
<p>1. <b>ばしょ:</b> basho (tempat)</p>
<p>2. <b>いえ / うち:</b> ie / uchi (rumah)</p>
<p>3. <b>へや:</b> heya (kamar)</p>
<p>4. <b>だいどころ:</b> daidokoro (dapur)</p>
<p>5. <b>おふろ:</b> ofuro (kamar mandi)</p>
<p>6. <b>トイレ:</b> toire (toilet)</p>
<p>7. <b>にわ:</b> niwa (taman rumah)</p>
<p>8. <b>まど:</b> mado (jendela)</p>
<p>9. <b>ドア:</b> doa (pintu)</p>
<p>10. <b>かいだん:</b> kaidan (tangga)</p>
<p>11. <b>まち:</b> machi (kota)</p>
<p>12. <b>むら:</b> mura (desa)</p>
<p>13. <b>とし:</b> toshi (kota besar)</p>
<p>14. <b>がっこう:</b> gakkou (sekolah)</p>
<p>15. <b>しょうがっこう:</b> shougakkou (SD)</p>
<p>16. <b>ちゅうがっこう:</b> chuugakkou (SMP)</p>
<p>17. <b>こうこう:</b> koukou (SMA)</p>
<p>18. <b>だいがく:</b> daigaku (universitas)</p>
<p>19. <b>じむしょ:</b> jimusho (kantor)</p>
<p>20. <b>かいしゃ:</b> kaisha (perusahaan)</p>
<p>21. <b>ぎんこう:</b> ginkou (bank)</p>
<p>22. <b>ゆうびんきょく:</b> yuubinkyoku (kantor pos)</p>
<p>23. <b>えき:</b> eki (stasiun)</p>
<p>24. <b>バスてい:</b> basu tei (halte bus)</p>
<p>25. <b>くうこう:</b> kuukou (bandara)</p>
<p>26. <b>ホテル:</b> hoteru (hotel)</p>
<p>27. <b>レストラン:</b> resutoran (restoran)</p>
<p>28. <b>カフェ:</b> kafe (kafe)</p>
<p>29. <b>みせ:</b> mise (toko)</p>
<p>30. <b>スーパー:</b> suupaa (supermarket)</p>
<p>31. <b>コンビニ:</b> konbini (minimarket)</p>
<p>32. <b>デパート:</b> depaato (toserba / department store)</p>
<p>33. <b>ほんや:</b> honya (toko buku)</p>
<p>34. <b>パンや:</b> pan'ya (toko roti)</p>
<p>35. <b>にくや:</b> nikuya (toko daging)</p>
<p>36. <b>やおや:</b> yaoya (toko sayur)</p>
<p>37. <b>さかなや:</b> sakanaya (toko ikan)</p>
<p>38. <b>くすりや:</b> kusuriya (apotek)</p>
<p>39. <b>びょういん:</b> byouin (rumah sakit)</p>
<p>40. <b>クリニック:</b> kurinikku (klinik)</p>
<p>41. <b>はなや:</b> hanaya (toko bunga)</p>
<p>42. <b>えいがかん:</b> eigakan (bioskop)</p>
<p>43. <b>としょかん:</b> toshokan (perpustakaan)</p>
<p>44. <b>こうえん:</b> kouen (taman umum)</p>
<p>45. <b>びじゅつかん:</b> bijutsukan (museum seni)</p>
<p>46. <b>はくぶつかん:</b> hakubutsukan (museum umum)</p>
<p>47. <b>じんじゃ:</b> jinja (kuil Shinto)</p>
<p>48. <b>おてら:</b> otera (kuil Buddha)</p>
<p>49. <b>きょうかい:</b> kyoukai (gereja)</p>
<p>50. <b>モスク:</b> mosuku (masjid)</p>
<p>51. <b>えきまえ:</b> ekimae (depan stasiun)</p>
<p>52. <b>まえ:</b> mae (depan / sebelum)</p>
<p>53. <b>うしろ:</b> ushiro (belakang)</p>
<p>54. <b>なか:</b> naka (dalam)</p>
<p>55. <b>そと:</b> soto (luar)</p>
<p>56. <b>ちか:</b> chika (bawah tanah)</p>
<p>57. <b>うえ:</b> ue (atas)</p>
<p>58. <b>した:</b> shita (bawah)</p>
<p>59. <b>みぎ:</b> migi (kanan)</p>
<p>60. <b>ひだり:</b> hidari (kiri)</p>
<p>61. <b>どうろ:</b> douro (jalan / jalan raya)</p>
<p>62. <b>みち:</b> michi (jalan kecil / jalan umum)</p>
<p>63. <b>こうさてん:</b> kousaten (perempatan jalan)</p>
<p>64. <b>しんごう:</b> shingou (lampu lalu lintas)</p>
<p>65. <b>バスのりば:</b> basu noriba (tempat naik bus)</p>
<p>66. <b>でんしゃのりば:</b> densha noriba (peron kereta)</p>
<p>67. <b>くうこうロビー:</b> kuukou robii (lobi bandara)</p>
<p>68. <b>ホテルのへや:</b> hoteru no heya (kamar hotel)</p>
<p>69. <b>へやのなか:</b> heya no naka (di dalam kamar)</p>
<p>70. <b>こうばん:</b> kouban (pos polisi)</p>
<p>71. <b>しょうぼうしょ:</b> shoubousho (kantor pemadam kebakaran)</p>
<p>72. <b>けいさつしょ:</b> keisatsusho (kantor polisi)</p>
<p>73. <b>じどうしゃこうじょう:</b> jidousha koujou (pabrik mobil)</p>
<p>74. <b>こうじょう:</b> koujou (pabrik)</p>
<p>75. <b>たてもの:</b> tatemono (gedung / bangunan)</p>
<p>76. <b>アパート:</b> apaato (apartemen)</p>
<p>77. <b>マンション:</b> manshon (rumah susun / apartemen besar)</p>
<p>78. <b>ビル:</b> biru (gedung bertingkat)</p>
<p>79. <b>しょくどう:</b> shokudou (kantin / ruang makan)</p>
<p>80. <b>きっさてん:</b> kissaten (kedai kopi tradisional)</p>
<p>81. <b>コンビニ:</b> konbini (toko serba ada / convenience store)</p>
<p>82. <b>マーケット:</b> maaketto (pasar modern)</p>
<p>83. <b>いちば:</b> ichiba (pasar tradisional)</p>
<p>84. <b>うみ:</b> umi (laut)</p>
<p>85. <b>かわ:</b> kawa (sungai)</p>
<p>86. <b>やま:</b> yama (gunung)</p>
<p>87. <b>もり:</b> mori (hutan)</p>
<p>88. <b>はなばたけ:</b> hanabatake (ladang bunga)</p>
<p>89. <b>のはら:</b> nohara (padang rumput)</p>
<p>90. <b>たんぼ:</b> tanbo (sawah)</p>
<p>91. <b>はたけ:</b> hatake (ladang / kebun)</p>
<p>92. <b>どうぶつえん:</b> doubutsuen (kebun binatang)</p>
<p>93. <b>すいぞくかん:</b> suizokukan (akuarium)</p>
<p>94. <b>ゆうえんち:</b> yuenchi (taman bermain)</p>
<p>95. <b>スタジアム:</b> sutajiamu (stadion)</p>
<p>96. <b>グラウンド:</b> guraundo (lapangan)</p>
<p>97. <b>プール:</b> puuru (kolam renang)</p>
<p>98. <b>ビーチ:</b> biichi (pantai)</p>
<p>99. <b>じゅうたくち:</b> juutakuchi (daerah perumahan)</p>
<p>100. <b>まちなか:</b> machi naka (pusat kota / tengah kota)</p>

                                    </div>
                                </div>


                                <div class="tab-pane fade" id="alat-pane" role="tabpanel" aria-labelledby="alat-tab">
                                    <h5>Kosakata Bahasa Jepang Tentang Alat Rumah Tangga</h5>
                                    <div class="vocab-list">
                                        <!-- Kosakata Bahasa Jepang Tentang Alat Rumah Tangga (かぐ・どうぐ) -->
<p>1. <b>かぐ:</b> kagu (perabot rumah)</p>
<p>2. <b>いす:</b> isu (kursi)</p>
<p>3. <b>テーブル:</b> teeburu (meja makan)</p>
<p>4. <b>つくえ:</b> tsukue (meja tulis)</p>
<p>5. <b>ベッド:</b> beddo (tempat tidur)</p>
<p>6. <b>ふとん:</b> futon (kasur lipat ala Jepang)</p>
<p>7. <b>まくら:</b> makura (bantal)</p>
<p>8. <b>もうふ:</b> moufu (selimut)</p>
<p>9. <b>カーテン:</b> kaaten (gorden)</p>
<p>10. <b>ソファー:</b> sofaa (sofa)</p>
<p>11. <b>たんす:</b> tansu (lemari pakaian)</p>
<p>12. <b>クローゼット:</b> kuroozetto (lemari baju modern)</p>
<p>13. <b>ドレッサー:</b> doressaa (meja rias)</p>
<p>14. <b>かがみ:</b> kagami (cermin)</p>
<p>15. <b>とけい:</b> tokei (jam dinding)</p>
<p>16. <b>でんき:</b> denki (listrik / lampu)</p>
<p>17. <b>でんきスタンド:</b> denki sutando (lampu meja)</p>
<p>18. <b>でんきストーブ:</b> denki sutoobu (pemanas listrik)</p>
<p>19. <b>エアコン:</b> eakon (AC)</p>
<p>20. <b>せんぷうき:</b> senpuuki (kipas angin)</p>
<p>21. <b>ヒーター:</b> hiitaa (pemanas ruangan)</p>
<p>22. <b>テレビ:</b> terebi (televisi)</p>
<p>23. <b>リモコン:</b> rimokon (remote control)</p>
<p>24. <b>ステレオ:</b> sutereo (stereo / speaker)</p>
<p>25. <b>コンピューター:</b> konpyuutaa (komputer)</p>
<p>26. <b>ノートパソコン:</b> nooto pasokon (laptop)</p>
<p>27. <b>せんたくき:</b> sentakuki (mesin cuci)</p>
<p>28. <b>そうじき:</b> soujiki (penyedot debu / vacuum cleaner)</p>
<p>29. <b>アイロン:</b> airon (setrika)</p>
<p>30. <b>アイロンだい:</b> airon dai (meja setrika)</p>
<p>31. <b>れいぞうこ:</b> reizouko (kulkas)</p>
<p>32. <b>でんしレンジ:</b> denshi renji (microwave)</p>
<p>33. <b>トースター:</b> toosutaa (pemanggang roti)</p>
<p>34. <b>オーブン:</b> oobun (oven)</p>
<p>35. <b>ガスコンロ:</b> gasu konro (kompor gas)</p>
<p>36. <b>なべ:</b> nabe (panci)</p>
<p>37. <b>フライパン:</b> furaipan (wajan)</p>
<p>38. <b>やかん:</b> yakan (teko / ketel)</p>
<p>39. <b>ちゃわん:</b> chawan (mangkuk nasi)</p>
<p>40. <b>さら:</b> sara (piring)</p>
<p>41. <b>はし:</b> hashi (sumpit)</p>
<p>42. <b>スプーン:</b> supuun (sendok)</p>
<p>43. <b>フォーク:</b> fooku (garpu)</p>
<p>44. <b>ナイフ:</b> naifu (pisau makan)</p>
<p>45. <b>まないた:</b> manaita (talenan)</p>
<p>46. <b>ほうちょう:</b> houchou (pisau dapur)</p>
<p>47. <b>ボウル:</b> bouru (mangkuk besar)</p>
<p>48. <b>ざる:</b> zaru (saringan)</p>
<p>49. <b>コップ:</b> koppu (gelas)</p>
<p>50. <b>きゅうす:</b> kyuusu (teko teh)</p>
<p>51. <b>ポット:</b> potto (teko air panas / dispenser air)</p>
<p>52. <b>はしおき:</b> hashioki (penyangga sumpit)</p>
<p>53. <b>れいとうこ:</b> reitouko (freezer)</p>
<p>54. <b>シンク:</b> shinku (wastafel dapur)</p>
<p>55. <b>スポンジ:</b> suponji (spons cuci piring)</p>
<p>56. <b>せっけん:</b> sekken (sabun)</p>
<p>57. <b>ハンドソープ:</b> hando soopu (sabun tangan)</p>
<p>58. <b>タオル:</b> taoru (handuk)</p>
<p>59. <b>バスタオル:</b> basu taoru (handuk besar)</p>
<p>60. <b>ハブラシ:</b> haburashi (sikat gigi)</p>
<p>61. <b>はみがきこ:</b> hamigakiko (pasta gigi)</p>
<p>62. <b>トイレットペーパー:</b> toiretto peepaa (tisu toilet)</p>
<p>63. <b>シャワー:</b> shawaa (shower)</p>
<p>64. <b>せんめんじょ:</b> senmenjo (tempat cuci muka)</p>
<p>65. <b>おふろば:</b> ofuroba (ruang mandi)</p>
<p>66. <b>トイレ:</b> toire (toilet)</p>
<p>67. <b>バスルーム:</b> basuruumu (kamar mandi)</p>
<p>68. <b>カーペット:</b> kaapetto (karpet)</p>
<p>69. <b>ラグ:</b> ragu (karpet kecil / permadani)</p>
<p>70. <b>カレンダー:</b> karendaa (kalender)</p>
<p>71. <b>でんわ:</b> denwa (telepon rumah)</p>
<p>72. <b>インターホン:</b> intaahon (bel pintu)</p>
<p>73. <b>かぎ:</b> kagi (kunci)</p>
<p>74. <b>ポスト:</b> posuto (kotak surat)</p>
<p>75. <b>ごみばこ:</b> gomibako (tempat sampah)</p>
<p>76. <b>ほうき:</b> houki (sapu)</p>
<p>77. <b>ちりとり:</b> chiritori (pengki)</p>
<p>78. <b>ぞうきん:</b> zoukin (lap pel / kain pel)</p>
<p>79. <b>モップ:</b> moppu (pel)</p>
<p>80. <b>バケツ:</b> baketsu (ember)</p>
<p>81. <b>せんたくもの:</b> sentakumono (pakaian yang dicuci)</p>
<p>82. <b>ハンガー:</b> hangaa (gantungan baju)</p>
<p>83. <b>ものほしざお:</b> monohoshizao (jemuran pakaian)</p>
<p>84. <b>ドライヤー:</b> doraiyaa (pengering rambut)</p>
<p>85. <b>ヘアブラシ:</b> heaburashi (sisir rambut)</p>
<p>86. <b>ミラー:</b> miraa (cermin kecil)</p>
<p>87. <b>ティッシュ:</b> tisshu (tisu)</p>
<p>88. <b>れいとうしつ:</b> reitoushitsu (ruang pendingin)</p>
<p>89. <b>ガレージ:</b> gareeji (garasi)</p>
<p>90. <b>じてんしゃ:</b> jitensha (sepeda)</p>
<p>91. <b>くるま:</b> kuruma (mobil)</p>
<p>92. <b>でんきポット:</b> denki potto (teko listrik)</p>
<p>93. <b>ホットプレート:</b> hotto pureeto (alat panggang listrik)</p>
<p>94. <b>コーヒーメーカー:</b> koohii meekaa (pembuat kopi)</p>
<p>95. <b>ミキサー:</b> mikisaa (blender)</p>
<p>96. <b>けしょうだい:</b> keshoudai (meja rias tradisional)</p>
<p>97. <b>しょうじ:</b> shouji (pintu geser Jepang)</p>
<p>98. <b>たたみ:</b> tatami (tikar Jepang)</p>
<p>99. <b>ざぶとん:</b> zabuton (bantal duduk Jepang)</p>
<p>100. <b>こたつ:</b> kotatsu (meja berpemanas khas Jepang)</p>

                                    </div>
                                </div>


                                <div class="tab-pane fade" id="pakaian-pane" role="tabpanel" aria-labelledby="pakaian-tab">
                                    <h5>Kosakata Bahasa Jepang Tentang Pakaian</h5>
                                    <div class="vocab-list">
                                        <!-- Kosakata Bahasa Jepang Tentang Pakaian (ふく - Fuku) -->
<p>1. <b>ふく:</b> fuku (pakaian)</p>
<p>2. <b>シャツ:</b> shatsu (kemeja)</p>
<p>3. <b>Tシャツ:</b> tii shatsu (kaos)</p>
<p>4. <b>ブラウス:</b> burausu (blus)</p>
<p>5. <b>ズボン:</b> zubon (celana panjang)</p>
<p>6. <b>ジーンズ:</b> jiinzu (celana jeans)</p>
<p>7. <b>ショートパンツ:</b> shooto pantsu (celana pendek)</p>
<p>8. <b>スカート:</b> sukaato (rok)</p>
<p>9. <b>ワンピース:</b> wanpiisu (gaun / dress)</p>
<p>10. <b>ジャケット:</b> jaketto (jaket)</p>
<p>11. <b>コート:</b> kooto (mantel)</p>
<p>12. <b>セーター:</b> seetaa (sweater)</p>
<p>13. <b>パーカー:</b> paakaa (hoodie / jaket bertudung)</p>
<p>14. <b>スーツ:</b> suutsu (setelan jas)</p>
<p>15. <b>ネクタイ:</b> nekutai (dasi)</p>
<p>16. <b>シャツドレス:</b> shatsu doresu (gaun kemeja)</p>
<p>17. <b>ブレザー:</b> burezaa (blazer)</p>
<p>18. <b>ベスト:</b> besuto (rompi)</p>
<p>19. <b>ベルト:</b> beruto (ikat pinggang)</p>
<p>20. <b>したぎ:</b> shitagi (pakaian dalam)</p>
<p>21. <b>パンツ:</b> pantsu (celana dalam)</p>
<p>22. <b>ブラジャー:</b> burajaa (bra)</p>
<p>23. <b>ストッキング:</b> sutokkingu (stoking)</p>
<p>24. <b>くつ:</b> kutsu (sepatu)</p>
<p>25. <b>スニーカー:</b> sunikaa (sepatu olahraga)</p>
<p>26. <b>サンダル:</b> sandaru (sandal)</p>
<p>27. <b>ブーツ:</b> buutsu (sepatu bot)</p>
<p>28. <b>ハイヒール:</b> haihiiru (sepatu hak tinggi)</p>
<p>29. <b>うわばき:</b> uwabaki (sepatu dalam ruangan sekolah)</p>
<p>30. <b>ながぐつ:</b> nagagutsu (sepatu hujan)</p>
<p>31. <b>くつした:</b> kutsushita (kaus kaki)</p>
<p>32. <b>ぼうし:</b> boushi (topi)</p>
<p>33. <b>キャップ:</b> kyappu (topi baseball)</p>
<p>34. <b>マフラー:</b> mafuraa (syal)</p>
<p>35. <b>てぶくろ:</b> tebukuro (sarung tangan)</p>
<p>36. <b>スカーフ:</b> sukaafu (selendang)</p>
<p>37. <b>ハンカチ:</b> hankachi (sapu tangan)</p>
<p>38. <b>めがね:</b> megane (kacamata)</p>
<p>39. <b>サングラス:</b> sangurasu (kacamata hitam)</p>
<p>40. <b>イヤリング:</b> iyaringu (anting)</p>
<p>41. <b>ピアス:</b> piasu (anting tindik)</p>
<p>42. <b>ネックレス:</b> nekkuresu (kalung)</p>
<p>43. <b>ブレスレット:</b> buresuretto (gelang)</p>
<p>44. <b>リング:</b> ringu (cincin)</p>
<p>45. <b>うでどけい:</b> udedokei (jam tangan)</p>
<p>46. <b>バッグ:</b> baggu (tas)</p>
<p>47. <b>かばん:</b> kaban (tas tangan / ransel)</p>
<p>48. <b>リュック:</b> ryukku (ransel)</p>
<p>49. <b>ハンドバッグ:</b> handobaggu (tas wanita)</p>
<p>50. <b>さいふ:</b> saifu (dompet)</p>
<p>51. <b>ポケット:</b> poketto (saku)</p>
<p>52. <b>ボタン:</b> botan (kancing)</p>
<p>53. <b>ファスナー:</b> fasunaa (resleting)</p>
<p>54. <b>えり:</b> eri (kerah)</p>
<p>55. <b>そで:</b> sode (lengan baju)</p>
<p>56. <b>すそ:</b> suso (ujung bawah pakaian)</p>
<p>57. <b>サイズ:</b> saizu (ukuran)</p>
<p>58. <b>Sサイズ:</b> esu saizu (ukuran kecil)</p>
<p>59. <b>Mサイズ:</b> emu saizu (ukuran sedang)</p>
<p>60. <b>Lサイズ:</b> eru saizu (ukuran besar)</p>
<p>61. <b>しみ:</b> shimi (noda)</p>
<p>62. <b>アイロン:</b> airon (setrika)</p>
<p>63. <b>せんたく:</b> sentaku (cuci pakaian)</p>
<p>64. <b>せんたくき:</b> sentakuki (mesin cuci)</p>
<p>65. <b>ドライクリーニング:</b> dorai kuriiningu (dry cleaning)</p>
<p>66. <b>ほす:</b> hosu (menjemur)</p>
<p>67. <b>たたむ:</b> tatamu (melipat pakaian)</p>
<p>68. <b>きる:</b> kiru (memakai - untuk pakaian atas)</p>
<p>69. <b>はく:</b> haku (memakai - untuk bawahan/sepatu)</p>
<p>70. <b>ぬぐ:</b> nugu (melepas pakaian)</p>
<p>71. <b>かぶる:</b> kaburu (memakai - untuk topi)</p>
<p>72. <b>する:</b> suru (memakai aksesori)</p>
<p>73. <b>ぬいもの:</b> nuimono (jahitan / hasil menjahit)</p>
<p>74. <b>ミシン:</b> mishin (mesin jahit)</p>
<p>75. <b>いと:</b> ito (benang)</p>
<p>76. <b>はり:</b> hari (jarum jahit)</p>
<p>77. <b>ボタンをつける:</b> botan o tsukeru (memasang kancing)</p>
<p>78. <b>アイロンをかける:</b> airon o kakeru (menyetrika)</p>
<p>79. <b>クリーニングや:</b> kuriininguya (toko laundry)</p>
<p>80. <b>ゆかた:</b> yukata (kimono musim panas)</p>
<p>81. <b>きもの:</b> kimono (pakaian tradisional Jepang)</p>
<p>82. <b>はかま:</b> hakama (pakaian bawah tradisional Jepang)</p>
<p>83. <b>おび:</b> obi (sabuk kimono)</p>
<p>84. <b>げた:</b> geta (sandal kayu Jepang)</p>
<p>85. <b>ぞうり:</b> zouri (sandal tradisional Jepang)</p>
<p>86. <b>たび:</b> tabi (kaus kaki tradisional Jepang)</p>
<p>87. <b>かっぱ:</b> kappa (jas hujan)</p>
<p>88. <b>レインコート:</b> rein kooto (mantel hujan)</p>
<p>89. <b>ゆびわ:</b> yubiwa (cincin)</p>
<p>90. <b>アクセサリー:</b> akusesarii (perhiasan / aksesori)</p>
<p>91. <b>ファッション:</b> fasshon (fesyen)</p>
<p>92. <b>スタイル:</b> sutairu (gaya berpakaian)</p>
<p>93. <b>コーディネート:</b> koodeineeto (padu padan busana)</p>
<p>94. <b>ブランド:</b> burando (merek)</p>
<p>95. <b>おしゃれ:</b> oshare (modis / bergaya)</p>
<p>96. <b>はで:</b> hade (mencolok / terang)</p>
<p>97. <b>じみ:</b> jimi (sederhana / polos)</p>
<p>98. <b>ぴったり:</b> pittari (pas di badan)</p>
<p>99. <b>ゆったり:</b> yuttari (longgar / nyaman)</p>
<p>100. <b>ぬの:</b> nuno (kain)</p>

                                    </div>
                                </div>


                                <div class="tab-pane fade" id="cuaca-pane" role="tabpanel" aria-labelledby="cuaca-tab">
                                    <h5>Kosakata Bahasa Jepang Tentang Cuaca & Musim</h5>
                                    <div class="vocab-list">
                                        <!-- Kosakata Bahasa Jepang Tentang Cuaca & Musim (てんき・きせつ) -->
<p>1. <b>てんき:</b> tenki (cuaca)</p>
<p>2. <b>はれ:</b> hare (cerah)</p>
<p>3. <b>くもり:</b> kumori (berawan)</p>
<p>4. <b>あめ:</b> ame (hujan)</p>
<p>5. <b>ゆき:</b> yuki (salju)</p>
<p>6. <b>かぜ:</b> kaze (angin)</p>
<p>7. <b>たいふう:</b> taifuu (topan / badai)</p>
<p>8. <b>あらし:</b> arashi (badai / angin ribut)</p>
<p>9. <b>かみなり:</b> kaminari (petir / guntur)</p>
<p>10. <b>にじ:</b> niji (pelangi)</p>
<p>11. <b>きり:</b> kiri (kabut)</p>
<p>12. <b>ひょう:</b> hyou (hujan es)</p>
<p>13. <b>しも:</b> shimo (embun beku)</p>
<p>14. <b>そら:</b> sora (langit)</p>
<p>15. <b>くも:</b> kumo (awan)</p>
<p>16. <b>たいよう:</b> taiyou (matahari)</p>
<p>17. <b>つき:</b> tsuki (bulan)</p>
<p>18. <b>ほし:</b> hoshi (bintang)</p>
<p>19. <b>あつい:</b> atsui (panas - suhu udara)</p>
<p>20. <b>さむい:</b> samui (dingin - suhu udara)</p>
<p>21. <b>すずしい:</b> suzushii (sejuk)</p>
<p>22. <b>あたたかい:</b> atatakai (hangat)</p>
<p>23. <b>つめたい:</b> tsumetai (dingin - benda/sentuhan)</p>
<p>24. <b>むしあつい:</b> mushiatsui (gerah / lembab dan panas)</p>
<p>25. <b>しずか:</b> shizuka (tenang / sunyi)</p>
<p>26. <b>つよいかぜ:</b> tsuyoi kaze (angin kencang)</p>
<p>27. <b>よわいかぜ:</b> yowai kaze (angin sepoi)</p>
<p>28. <b>たいようがでる:</b> taiyou ga deru (matahari terbit)</p>
<p>29. <b>たいようがしずむ:</b> taiyou ga shizumu (matahari terbenam)</p>
<p>30. <b>あさひ:</b> asahi (cahaya matahari pagi)</p>
<p>31. <b>ゆうひ:</b> yuuhi (matahari sore)</p>
<p>32. <b>つゆ:</b> tsuyu (musim hujan di Jepang)</p>
<p>33. <b>きせつ:</b> kisetsu (musim)</p>
<p>34. <b>はる:</b> haru (musim semi)</p>
<p>35. <b>なつ:</b> natsu (musim panas)</p>
<p>36. <b>あき:</b> aki (musim gugur)</p>
<p>37. <b>ふゆ:</b> fuyu (musim dingin)</p>
<p>38. <b>しき:</b> shiki (empat musim)</p>
<p>39. <b>はながさく:</b> hana ga saku (bunga mekar)</p>
<p>40. <b>きがかわる:</b> ki ga kawaru (daun berubah warna)</p>
<p>41. <b>ゆきがふる:</b> yuki ga furu (turun salju)</p>
<p>42. <b>あめがふる:</b> ame ga furu (turun hujan)</p>
<p>43. <b>かぜがふく:</b> kaze ga fuku (angin bertiup)</p>
<p>44. <b>そらがあおい:</b> sora ga aoi (langit biru)</p>
<p>45. <b>くもがながれる:</b> kumo ga nagareru (awan bergerak)</p>
<p>46. <b>ひがさ:</b> higasa (payung untuk matahari)</p>
<p>47. <b>かさ:</b> kasa (payung untuk hujan)</p>
<p>48. <b>たいようのひかり:</b> taiyou no hikari (sinar matahari)</p>
<p>49. <b>つよいひざし:</b> tsuyoi hizashi (terik matahari)</p>
<p>50. <b>ひがかがやく:</b> hi ga kagayaku (matahari bersinar terang)</p>
<p>51. <b>うみ:</b> umi (laut)</p>
<p>52. <b>やま:</b> yama (gunung)</p>
<p>53. <b>かわ:</b> kawa (sungai)</p>
<p>54. <b>いけ:</b> ike (kolam)</p>
<p>55. <b>もり:</b> mori (hutan)</p>
<p>56. <b>はな:</b> hana (bunga)</p>
<p>57. <b>はっぱ:</b> happa (daun)</p>
<p>58. <b>くさ:</b> kusa (rumput)</p>
<p>59. <b>たいようのあたたかさ:</b> taiyou no atatakasa (kehangatan matahari)</p>
<p>60. <b>ゆきだるま:</b> yukidaruma (manusia salju)</p>
<p>61. <b>こおり:</b> koori (es)</p>
<p>62. <b>みず:</b> mizu (air)</p>
<p>63. <b>おんど:</b> ondo (suhu)</p>
<p>64. <b>きおん:</b> kion (temperatur udara)</p>
<p>65. <b>てんきよほう:</b> tenki yohou (ramalan cuaca)</p>
<p>66. <b>きしょう:</b> kishou (iklim / kondisi atmosfer)</p>
<p>67. <b>くうき:</b> kuuki (udara)</p>
<p>68. <b>しつど:</b> shitsudo (kelembapan)</p>
<p>69. <b>あつさ:</b> atsusa (kepanasan)</p>
<p>70. <b>さむさ:</b> samusa (kedinginan)</p>
<p>71. <b>あらしのひ:</b> arashi no hi (hari badai)</p>
<p>72. <b>あめのひ:</b> ame no hi (hari hujan)</p>
<p>73. <b>ゆきのひ:</b> yuki no hi (hari bersalju)</p>
<p>74. <b>はれのひ:</b> hare no hi (hari cerah)</p>
<p>75. <b>くもりのひ:</b> kumori no hi (hari berawan)</p>
<p>76. <b>かみなりのひ:</b> kaminari no hi (hari petir)</p>
<p>77. <b>そらをみる:</b> sora o miru (melihat langit)</p>
<p>78. <b>ひがし:</b> higashi (timur)</p>
<p>79. <b>にし:</b> nishi (barat)</p>
<p>80. <b>みなみ:</b> minami (selatan)</p>
<p>81. <b>きた:</b> kita (utara)</p>
<p>82. <b>あさ:</b> asa (pagi)</p>
<p>83. <b>ひる:</b> hiru (siang)</p>
<p>84. <b>ゆうがた:</b> yuugata (sore)</p>
<p>85. <b>よる:</b> yoru (malam)</p>
<p>86. <b>あけがた:</b> akegata (fajar / dini hari)</p>
<p>87. <b>けっしょう:</b> kesshou (kristal es)</p>
<p>88. <b>なだれ:</b> nadare (longsoran salju)</p>
<p>89. <b>たいようこう:</b> taiyoukou (cahaya matahari / sinar surya)</p>
<p>90. <b>うちゅう:</b> uchuu (angkasa / luar angkasa)</p>
<p>91. <b>オーロラ:</b> oorora (aurora)</p>
<p>92. <b>しんせつ:</b> shinsetsu (salju baru turun)</p>
<p>93. <b>こさめ:</b> kosame (gerimis)</p>
<p>94. <b>おおあめ:</b> ooame (hujan deras)</p>
<p>95. <b>おおゆき:</b> ooyuki (salju lebat)</p>
<p>96. <b>ひがのぼる:</b> hi ga noboru (matahari naik / terbit)</p>
<p>97. <b>ひがしずむ:</b> hi ga shizumu (matahari terbenam)</p>
<p>98. <b>そらがくらい:</b> sora ga kurai (langit gelap)</p>
<p>99. <b>そらがあかるい:</b> sora ga akarui (langit terang)</p>
<p>100. <b>てんきがかわる:</b> tenki ga kawaru (cuaca berubah)</p>

                                    </div>
                                </div>


                                <div class="tab-pane fade" id="tumbuhan-pane" role="tabpanel" aria-labelledby="tumbuhan-tab">
                                    <h5>Kosakata Bahasa Jepang Tentang Tumbuhan</h5>
                                    <div class="vocab-list">
                                       <!-- Kosakata Bahasa Jepang Tentang Tumbuhan (しょくぶつ) -->
<p>1. <b>しょくぶつ:</b> shokubutsu (tumbuhan)</p>
<p>2. <b>き:</b> ki (pohon)</p>
<p>3. <b>はな:</b> hana (bunga)</p>
<p>4. <b>はっぱ:</b> happa (daun)</p>
<p>5. <b>くさ:</b> kusa (rumput)</p>
<p>6. <b>ね:</b> ne (akar)</p>
<p>7. <b>たね:</b> tane (biji / benih)</p>
<p>8. <b>えだ:</b> eda (cabang)</p>
<p>9. <b>みき:</b> miki (batang pohon)</p>
<p>10. <b>はなびら:</b> hanabira (kelopak bunga)</p>
<p>11. <b>つぼみ:</b> tsubomi (kuncup bunga)</p>
<p>12. <b>くだもの:</b> kudamono (buah-buahan)</p>
<p>13. <b>やさい:</b> yasai (sayuran)</p>
<p>14. <b>きのみ:</b> kinomi (buah pohon / kacang-kacangan)</p>
<p>15. <b>まつ:</b> matsu (pohon pinus)</p>
<p>16. <b>さくら:</b> sakura (bunga sakura)</p>
<p>17. <b>うめ:</b> ume (plum Jepang)</p>
<p>18. <b>もみじ:</b> momiji (daun maple merah)</p>
<p>19. <b>たけ:</b> take (bambu)</p>
<p>20. <b>すぎ:</b> sugi (pohon cedar Jepang)</p>
<p>21. <b>ひまわり:</b> himawari (bunga matahari)</p>
<p>22. <b>チューリップ:</b> chuuriippu (tulip)</p>
<p>23. <b>ばら:</b> bara (mawar)</p>
<p>24. <b>ゆり:</b> yuri (lili)</p>
<p>25. <b>あじさい:</b> ajisai (hortensia)</p>
<p>26. <b>すいれん:</b> suiren (teratai)</p>
<p>27. <b>きく:</b> kiku (krisan / bunga nasional Jepang)</p>
<p>28. <b>ラン:</b> ran (anggrek)</p>
<p>29. <b>さぼてん:</b> saboten (kaktus)</p>
<p>30. <b>シダ:</b> shida (pakis)</p>
<p>31. <b>まつぼっくり:</b> matsubokkuri (buah pinus)</p>
<p>32. <b>かしのき:</b> kashi no ki (pohon oak)</p>
<p>33. <b>けやき:</b> keyaki (pohon elm Jepang)</p>
<p>34. <b>いちょう:</b> ichou (pohon ginkgo)</p>
<p>35. <b>はっぱがおちる:</b> happa ga ochiru (daun gugur)</p>
<p>36. <b>はながさく:</b> hana ga saku (bunga mekar)</p>
<p>37. <b>みがなる:</b> mi ga naru (berbuah)</p>
<p>38. <b>たねをまく:</b> tane o maku (menanam benih)</p>
<p>39. <b>そだつ:</b> sodatsu (tumbuh / berkembang)</p>
<p>40. <b>そだてる:</b> sodateru (menumbuhkan / memelihara)</p>
<p>41. <b>さいばい:</b> saibai (budidaya / menanam)</p>
<p>42. <b>のうぎょう:</b> nougyou (pertanian)</p>
<p>43. <b>こうえん:</b> kouen (taman / kebun umum)</p>
<p>44. <b>はたけ:</b> hatake (kebun sayur)</p>
<p>45. <b>たんぼ:</b> tanbo (sawah padi)</p>
<p>46. <b>もり:</b> mori (hutan)</p>
<p>47. <b>はやし:</b> hayashi (rimbunan pohon / hutan kecil)</p>
<p>48. <b>じゅもく:</b> jumoku (pepohonan)</p>
<p>49. <b>りんごのき:</b> ringo no ki (pohon apel)</p>
<p>50. <b>なしのき:</b> nashi no ki (pohon pir Jepang)</p>
<p>51. <b>みかんのき:</b> mikan no ki (pohon jeruk)</p>
<p>52. <b>ぶどうのき:</b> budou no ki (pohon anggur)</p>
<p>53. <b>バナナのき:</b> banana no ki (pohon pisang)</p>
<p>54. <b>ココナッツのき:</b> kokonattsu no ki (pohon kelapa)</p>
<p>55. <b>とうもろこし:</b> toumorokoshi (jagung)</p>
<p>56. <b>こめ:</b> kome (padi / beras)</p>
<p>57. <b>むぎ:</b> mugi (gandum / barley)</p>
<p>58. <b>だいず:</b> daizu (kedelai)</p>
<p>59. <b>まめ:</b> mame (kacang)</p>
<p>60. <b>いも:</b> imo (umbi / kentang)</p>
<p>61. <b>さつまいも:</b> satsumaimo (ubi jalar)</p>
<p>62. <b>にんじん:</b> ninjin (wortel)</p>
<p>63. <b>はくさい:</b> hakusai (sawi putih)</p>
<p>64. <b>ねぎ:</b> negi (daun bawang)</p>
<p>65. <b>たまねぎ:</b> tamanegi (bawang bombay)</p>
<p>66. <b>にんにく:</b> ninniku (bawang putih)</p>
<p>67. <b>きゅうり:</b> kyuuri (mentimun)</p>
<p>68. <b>なす:</b> nasu (terong)</p>
<p>69. <b>トマト:</b> tomato (tomat)</p>
<p>70. <b>ピーマン:</b> piiman (paprika hijau)</p>
<p>71. <b>キャベツ:</b> kyabetsu (kubis)</p>
<p>72. <b>レタス:</b> retasu (selada)</p>
<p>73. <b>ほうれんそう:</b> hourensou (bayam)</p>
<p>74. <b>ブロッコリー:</b> burokkorii (brokoli)</p>
<p>75. <b>カリフラワー:</b> karifurawaa (kembang kol)</p>
<p>76. <b>えだまめ:</b> edamame (kedelai muda)</p>
<p>77. <b>しいたけ:</b> shiitake (jamur shiitake)</p>
<p>78. <b>きのこ:</b> kinoko (jamur)</p>
<p>79. <b>くさき:</b> kusaki (tanaman liar)</p>
<p>80. <b>やまのはな:</b> yama no hana (bunga gunung)</p>
<p>81. <b>みずうみのくさ:</b> mizuumi no kusa (tanaman air)</p>
<p>82. <b>すいれん:</b> suiren (teratai air)</p>
<p>83. <b>はす:</b> hasu (bunga lotus)</p>
<p>84. <b>あおば:</b> aoba (daun hijau)</p>
<p>85. <b>あかば:</b> akaba (daun merah)</p>
<p>86. <b>やまのき:</b> yama no ki (pohon gunung)</p>
<p>87. <b>のはら:</b> nohara (padang rumput / lapangan terbuka)</p>
<p>88. <b>そうげん:</b> sougen (dataran rumput / sabana)</p>
<p>89. <b>ジャングル:</b> janguru (hutan tropis / rimba)</p>
<p>90. <b>しぜん:</b> shizen (alam)</p>
<p>91. <b>たいようのひかり:</b> taiyou no hikari (sinar matahari)</p>
<p>92. <b>みず:</b> mizu (air)</p>
<p>93. <b>つち:</b> tsuchi (tanah)</p>
<p>94. <b>ひりょう:</b> hiryou (pupuk)</p>
<p>95. <b>はなをそだてる:</b> hana o sodateru (menanam bunga)</p>
<p>96. <b>きをきる:</b> ki o kiru (menebang pohon)</p>
<p>97. <b>きをうえる:</b> ki o ueru (menanam pohon)</p>
<p>98. <b>しぜんをまもる:</b> shizen o mamoru (melindungi alam)</p>
<p>99. <b>はながちる:</b> hana ga chiru (bunga gugur)</p>
<p>100. <b>みのる:</b> minoru (berbuah / matang)</p>

                                    </div>
                                </div>


                                 <div class="tab-pane fade" id="buah-pane" role="tabpanel" aria-labelledby="buah-tab">
                                    <h5>Kosakata Bahasa Jepang Tentang Buah-buahan & Sayuran</h5>
                                    <div class="vocab-list">
                                        <!-- Kosakata Bahasa Jepang Tentang Buah-buahan dan Sayuran (くだもの・やさい) -->
<p>1. <b>くだもの:</b> kudamono (buah-buahan)</p>
<p>2. <b>やさい:</b> yasai (sayuran)</p>
<p>3. <b>りんご:</b> ringo (apel)</p>
<p>4. <b>みかん:</b> mikan (jeruk Jepang)</p>
<p>5. <b>バナナ:</b> banana (pisang)</p>
<p>6. <b>すいか:</b> suika (semangka)</p>
<p>7. <b>ぶどう:</b> budou (anggur)</p>
<p>8. <b>なし:</b> nashi (pir Jepang)</p>
<p>9. <b>もも:</b> momo (persik / peach)</p>
<p>10. <b>さくらんぼ:</b> sakuranbo (ceri)</p>
<p>11. <b>いちご:</b> ichigo (stroberi)</p>
<p>12. <b>パイナップル:</b> painappuru (nanas)</p>
<p>13. <b>キウイ:</b> kiui (kiwi)</p>
<p>14. <b>レモン:</b> remon (lemon)</p>
<p>15. <b>メロン:</b> meron (melon)</p>
<p>16. <b>かき:</b> kaki (kesemek)</p>
<p>17. <b>すもも:</b> sumomo (prem)</p>
<p>18. <b>マンゴー:</b> mangoo (mangga)</p>
<p>19. <b>パパイヤ:</b> papaiya (pepaya)</p>
<p>20. <b>ココナッツ:</b> kokonattsu (kelapa)</p>
<p>21. <b>グアバ:</b> guaba (jambu)</p>
<p>22. <b>ドリアン:</b> dorian (durian)</p>
<p>23. <b>ライチ:</b> raichi (leci)</p>
<p>24. <b>ドラゴンフルーツ:</b> doragon furuutsu (buah naga)</p>
<p>25. <b>チェリー:</b> cherii (ceri/barat)</p>
<p>26. <b>ブルーベリー:</b> buruuberii (blueberry)</p>
<p>27. <b>ラズベリー:</b> razuberii (raspberry)</p>
<p>28. <b>アボカド:</b> abokado (alpukat)</p>
<p>29. <b>スイートポテト:</b> suiito poteto (ubi manis)</p>
<p>30. <b>キャロット:</b> kyarotto (wortel)</p>
<p>31. <b>じゃがいも:</b> jagaimo (kentang)</p>
<p>32. <b>たまねぎ:</b> tamanegi (bawang bombay)</p>
<p>33. <b>ねぎ:</b> negi (daun bawang)</p>
<p>34. <b>にんにく:</b> ninniku (bawang putih)</p>
<p>35. <b>しょうが:</b> shouga (jahe)</p>
<p>36. <b>だいこん:</b> daikon (lobak putih Jepang)</p>
<p>37. <b>れんこん:</b> renkon (akar teratai)</p>
<p>38. <b>ごぼう:</b> gobou (akar burdock)</p>
<p>39. <b>キャベツ:</b> kyabetsu (kubis)</p>
<p>40. <b>レタス:</b> retasu (selada)</p>
<p>41. <b>はくさい:</b> hakusai (sawi putih)</p>
<p>42. <b>ブロッコリー:</b> burokkorii (brokoli)</p>
<p>43. <b>カリフラワー:</b> karifurawaa (kembang kol)</p>
<p>44. <b>ほうれんそう:</b> hourensou (bayam)</p>
<p>45. <b>ピーマン:</b> piiman (paprika hijau)</p>
<p>46. <b>パプリカ:</b> papurika (paprika warna)</p>
<p>47. <b>なす:</b> nasu (terong)</p>
<p>48. <b>きゅうり:</b> kyuuri (mentimun)</p>
<p>49. <b>トマト:</b> tomato (tomat)</p>
<p>50. <b>とうもろこし:</b> toumorokoshi (jagung)</p>
<p>51. <b>えだまめ:</b> edamame (kedelai muda)</p>
<p>52. <b>まめ:</b> mame (kacang)</p>
<p>53. <b>だいず:</b> daizu (kedelai)</p>
<p>54. <b>さつまいも:</b> satsumaimo (ubi jalar)</p>
<p>55. <b>ごま:</b> goma (wijen)</p>
<p>56. <b>あずき:</b> azuki (kacang merah kecil)</p>
<p>57. <b>なっとう:</b> nattou (kedelai fermentasi)</p>
<p>58. <b>しそ:</b> shiso (daun perilla)</p>
<p>59. <b>みょうが:</b> myouga (jahe Jepang)</p>
<p>60. <b>せり:</b> seri (seledri air Jepang)</p>
<p>61. <b>モヤシ:</b> moyashi (tauge)</p>
<p>62. <b>カボチャ:</b> kabocha (labu)</p>
<p>63. <b>ズッキーニ:</b> zukkiini (zucchini)</p>
<p>64. <b>セロリ:</b> serori (seledri)</p>
<p>65. <b>オクラ:</b> okura (bendi / okra)</p>
<p>66. <b>にら:</b> nira (kucai)</p>
<p>67. <b>しいたけ:</b> shiitake (jamur shiitake)</p>
<p>68. <b>まいたけ:</b> maitake (jamur maitake)</p>
<p>69. <b>えのき:</b> enoki (jamur enoki)</p>
<p>70. <b>しめじ:</b> shimeji (jamur shimeji)</p>
<p>71. <b>トリュフ:</b> toryufu (truffle)</p>
<p>72. <b>アスパラガス:</b> asuparagasu (asparagus)</p>
<p>73. <b>カイワレ:</b> kaiware (tauge lobak)</p>
<p>74. <b>クレソン:</b> kureson (watercress / selada air)</p>
<p>75. <b>ラディッシュ:</b> radisshu (lobak merah kecil)</p>
<p>76. <b>パセリ:</b> paseri (peterseli)</p>
<p>77. <b>バジル:</b> bajiru (kemangi / basil)</p>
<p>78. <b>ローズマリー:</b> roozumarii (rosemary)</p>
<p>79. <b>ミント:</b> minto (daun mint)</p>
<p>80. <b>タイム:</b> taimu (daun thyme)</p>
<p>81. <b>しょうがのはな:</b> shouga no hana (bunga jahe)</p>
<p>82. <b>おちゃのは:</b> ocha no ha (daun teh)</p>
<p>83. <b>コーヒーまめ:</b> koohii mame (biji kopi)</p>
<p>84. <b>こめ:</b> kome (beras)</p>
<p>85. <b>むぎ:</b> mugi (gandum)</p>
<p>86. <b>ライス:</b> raisu (nasi / beras matang)</p>
<p>87. <b>パンプキンシード:</b> panpukin shiido (biji labu)</p>
<p>88. <b>くるみ:</b> kurumi (kenari / walnut)</p>
<p>89. <b>アーモンド:</b> aamondo (almond)</p>
<p>90. <b>ピーナッツ:</b> piinattsu (kacang tanah)</p>
<p>91. <b>カシューナッツ:</b> kashuuna ttsu (kacang mete)</p>
<p>92. <b>ピスタチオ:</b> pisutachio (pistachio)</p>
<p>93. <b>ひまわりのたね:</b> himawari no tane (biji bunga matahari)</p>
<p>94. <b>マカダミアナッツ:</b> makadamia nattsu (macadamia)</p>
<p>95. <b>ドライフルーツ:</b> dorai furuutsu (buah kering)</p>
<p>96. <b>ジャム:</b> jamu (selai)</p>
<p>97. <b>くだものジュース:</b> kudamono juusu (jus buah)</p>
<p>98. <b>やさいスープ:</b> yasai suupu (sup sayur)</p>
<p>99. <b>サラダ:</b> sarada (salad)</p>
<p>100. <b>スムージー:</b> sumuujii (smoothie)</p>

                                    </div>
                                </div>

<div class="tab-pane fade" id="bunga-pane" role="tabpanel" aria-labelledby="bunga-tab">
                                    <h5>Kosakata Bahasa Jepang Tentang Bunga</h5>
                                    <div class="vocab-list">
                                        <!-- Kosakata Bahasa Jepang Tentang Bunga (はな - Hana) -->
<p>1. <b>はな:</b> hana (bunga)</p>
<p>2. <b>さくら:</b> sakura (bunga sakura / cherry blossom)</p>
<p>3. <b>うめ:</b> ume (bunga plum)</p>
<p>4. <b>もも:</b> momo (bunga persik)</p>
<p>5. <b>あじさい:</b> ajisai (bunga hydrangea)</p>
<p>6. <b>ひまわり:</b> himawari (bunga matahari)</p>
<p>7. <b>ゆり:</b> yuri (lili)</p>
<p>8. <b>ばら:</b> bara (mawar)</p>
<p>9. <b>チューリップ:</b> chuuriippu (tulip)</p>
<p>10. <b>カーネーション:</b> kaaneeshon (anyelir)</p>
<p>11. <b>すみれ:</b> sumire (violet)</p>
<p>12. <b>きく:</b> kiku (krisan / bunga seruni)</p>
<p>13. <b>コスモス:</b> kosumosu (kosmos)</p>
<p>14. <b>ポピー:</b> popii (bunga poppy)</p>
<p>15. <b>パンジー:</b> panjii (pansy)</p>
<p>16. <b>シクラメン:</b> shikuramen (cyclamen)</p>
<p>17. <b>アイリス:</b> airisu (iris)</p>
<p>18. <b>スズラン:</b> suzuran (lily of the valley)</p>
<p>19. <b>ラベンダー:</b> rabendaa (lavender)</p>
<p>20. <b>ハイビスカス:</b> haibisukasu (hibiscus / kembang sepatu)</p>
<p>21. <b>ボタン:</b> botan (peony / bunga peoni)</p>
<p>22. <b>ツツジ:</b> tsutsuji (azalea)</p>
<p>23. <b>サボテンのはな:</b> saboten no hana (bunga kaktus)</p>
<p>24. <b>カトレア:</b> katorea (cattleya / anggrek)</p>
<p>25. <b>ラン:</b> ran (anggrek)</p>
<p>26. <b>ジャスミン:</b> jasumin (melati)</p>
<p>27. <b>マリーゴールド:</b> mariigoorudo (marigold / kenikir)</p>
<p>28. <b>ダリア:</b> dariya (dahlia)</p>
<p>29. <b>チューベローズ:</b> chuuberouzu (sedap malam)</p>
<p>30. <b>リンドウ:</b> rindou (gentian / bunga gunung biru)</p>
<p>31. <b>シャクヤク:</b> shakuyaku (peony / pion)</p>
<p>32. <b>スイセン:</b> suisan (narsis)</p>
<p>33. <b>フリージア:</b> furiijia (freesia)</p>
<p>34. <b>クロッカス:</b> kurokasu (crocus)</p>
<p>35. <b>ネモフィラ:</b> nemofira (baby blue eyes)</p>
<p>36. <b>デイジー:</b> deijii (daisy)</p>
<p>37. <b>ガーベラ:</b> gaarbera (gerbera)</p>
<p>38. <b>ベゴニア:</b> begonia (begonia)</p>
<p>39. <b>ペチュニア:</b> pechunia (petunia)</p>
<p>40. <b>アネモネ:</b> anemone (anemone)</p>
<p>41. <b>カモミール:</b> kamomiiru (chamomile)</p>
<p>42. <b>クリスマスローズ:</b> kurisumasu roozu (christmas rose)</p>
<p>43. <b>ナデシコ:</b> nadeshiko (dianthus / bunga pink Jepang)</p>
<p>44. <b>コスモス:</b> kosumosu (cosmos)</p>
<p>45. <b>オーキッド:</b> ookiddo (anggrek / orchid)</p>
<p>46. <b>サクラソウ:</b> sakurasou (primrose Jepang)</p>
<p>47. <b>ヒガンバナ:</b> higanbana (red spider lily)</p>
<p>48. <b>ツバキ:</b> tsubaki (camellia)</p>
<p>49. <b>アジアンタム:</b> ajiantamu (adiantum / pakis hias)</p>
<p>50. <b>ホトトギス:</b> hototogisu (toad lily)</p>
<p>51. <b>オダマキ:</b> odamaki (columbine)</p>
<p>52. <b>サフラン:</b> safuran (saffron flower)</p>
<p>53. <b>ヘリオトロープ:</b> heriotoroopu (heliotrope)</p>
<p>54. <b>スミレ:</b> sumire (violet)</p>
<p>55. <b>アサガオ:</b> asagao (morning glory / bunga seruni pagi)</p>
<p>56. <b>ユリノキ:</b> yurinoki (tulip tree flower)</p>
<p>57. <b>キンモクセイ:</b> kinmokusei (osmanthus)</p>
<p>58. <b>モクレン:</b> mokuren (magnolia)</p>
<p>59. <b>レンゲ:</b> renge (lotus / bunga teratai)</p>
<p>60. <b>スイレン:</b> suiren (bunga teratai air)</p>
<p>61. <b>ハス:</b> hasu (lotus / teratai suci)</p>
<p>62. <b>ハナミズキ:</b> hanamizuki (dogwood flower)</p>
<p>63. <b>タンポポ:</b> tanpopo (dandelion)</p>
<p>64. <b>カーネーション:</b> kaaneeshon (anyelir)</p>
<p>65. <b>ヒヤシンス:</b> hiyashinsu (hyacinth)</p>
<p>66. <b>グラジオラス:</b> gurajiorasu (gladiolus)</p>
<p>67. <b>アマリリス:</b> amaririsu (amaryllis)</p>
<p>68. <b>サザンカ:</b> sazanka (sasanqua camellia)</p>
<p>69. <b>マツリカ:</b> matsurika (melati arab)</p>
<p>70. <b>チョウセンアサガオ:</b> chousen asagao (datura)</p>
<p>71. <b>ガーベラ:</b> gaarbera (gerbera)</p>
<p>72. <b>ミモザ:</b> mimoza (mimosa)</p>
<p>73. <b>ユーカリのはな:</b> yuukari no hana (bunga eukaliptus)</p>
<p>74. <b>ロータス:</b> rootasu (lotus / teratai barat)</p>
<p>75. <b>プルメリア:</b> purumeria (kamboja)</p>
<p>76. <b>オーキッド:</b> ookiddo (anggrek)</p>
<p>77. <b>セイヨウタンポポ:</b> seiyou tanpopo (dandelion barat)</p>
<p>78. <b>ハナショウブ:</b> hanashoubu (iris Jepang)</p>
<p>79. <b>ショウブ:</b> shoubu (sweet flag / calamus)</p>
<p>80. <b>ハイビスカス:</b> haibisukasu (kembang sepatu)</p>
<p>81. <b>フジ:</b> fuji (bunga wisteria)</p>
<p>82. <b>アカシア:</b> akashia (akasia)</p>
<p>83. <b>バオバブのはな:</b> baobabu no hana (bunga baobab)</p>
<p>84. <b>マリーゴールド:</b> mariigoorudo (kenikir / marigold)</p>
<p>85. <b>トケイソウ:</b> tokeisou (passion flower)</p>
<p>86. <b>ケイトウ:</b> keitou (cockscomb / jengger ayam)</p>
<p>87. <b>ラナンキュラス:</b> ranankyurasu (ranunculus)</p>
<p>88. <b>デルフィニウム:</b> derufiniumu (delphinium)</p>
<p>89. <b>オステオスペルマム:</b> osuteosuperumamu (daisy afrika)</p>
<p>90. <b>ペラルゴニウム:</b> perarugoniumu (geranium)</p>
<p>91. <b>アジサイ:</b> ajisai (hydrangea)</p>
<p>92. <b>ヒマワリ:</b> himawari (bunga matahari)</p>
<p>93. <b>ハナ:</b> hana (bunga umum)</p>
<p>94. <b>ソメイヨシノ:</b> someiyoshino (varietas sakura terkenal)</p>
<p>95. <b>ヤマザクラ:</b> yamazakura (sakura gunung)</p>
<p>96. <b>オオシマザクラ:</b> ooshimazakura (sakura putih besar)</p>
<p>97. <b>カトレア:</b> katorea (anggrek cattleya)</p>
<p>98. <b>リリィ:</b> ririi (lily barat)</p>
<p>99. <b>スズラン:</b> suzuran (lily of the valley)</p>
<p>100. <b>ロ－ズ:</b> roo zu (mawar barat / rose)</p>

                                    </div>
                                </div>


                                <div class="tab-pane fade" id="transportasi-pane" role="tabpanel" aria-labelledby="transportasi-tab">
                                    <h5>Kosakata Bahasa Jepang Tentang Transportasi</h5>
                                    <div class="vocab-list">
                                        <!-- Kosakata Bahasa Jepang Tentang Transportasi (のりもの - Norimono) -->
<p>1. <b>のりもの:</b> norimono (alat transportasi / kendaraan)</p>
<p>2. <b>くるま:</b> kuruma (mobil)</p>
<p>3. <b>じどうしゃ:</b> jidousha (kendaraan bermotor)</p>
<p>4. <b>でんしゃ:</b> densha (kereta listrik)</p>
<p>5. <b>しんかんせん:</b> shinkansen (kereta peluru)</p>
<p>6. <b>バス:</b> basu (bus)</p>
<p>7. <b>タクシー:</b> takushii (taksi)</p>
<p>8. <b>じてんしゃ:</b> jitensha (sepeda)</p>
<p>9. <b>オートバイ:</b> ootobai (sepeda motor)</p>
<p>10. <b>バイク:</b> baiku (motor)</p>
<p>11. <b>トラック:</b> torakku (truk)</p>
<p>12. <b>ひこうき:</b> hikouki (pesawat terbang)</p>
<p>13. <b>ヘリコプター:</b> herikoputaa (helikopter)</p>
<p>14. <b>ボート:</b> booto (perahu)</p>
<p>15. <b>ふね:</b> fune (kapal)</p>
<p>16. <b>フェリー:</b> ferii (feri)</p>
<p>17. <b>ヨット:</b> yotto (yacht)</p>
<p>18. <b>ちかてつ:</b> chikatetsu (kereta bawah tanah / MRT)</p>
<p>19. <b>モノレール:</b> monoreeru (monorel)</p>
<p>20. <b>バスてい:</b> basu-tei (halte bus)</p>
<p>21. <b>えき:</b> eki (stasiun)</p>
<p>22. <b>くうこう:</b> kuukou (bandara)</p>
<p>23. <b>ひこうじょう:</b> hikoujou (lapangan terbang)</p>
<p>24. <b>ふなば:</b> funaba (dermaga / pelabuhan)</p>
<p>25. <b>みなと:</b> minato (pelabuhan)</p>
<p>26. <b>どうろ:</b> douro (jalan raya)</p>
<p>27. <b>こうさてん:</b> kousaten (perempatan jalan)</p>
<p>28. <b>しんごう:</b> shingou (lampu lalu lintas)</p>
<p>29. <b>じどうしゃどう:</b> jidoushadou (jalan tol)</p>
<p>30. <b>こうそくどうろ:</b> kousokudouro (jalan bebas hambatan)</p>
<p>31. <b>ブレーキ:</b> bureeki (rem)</p>
<p>32. <b>アクセル:</b> akuseru (gas / pedal akselerator)</p>
<p>33. <b>ハンドル:</b> handoru (setir mobil)</p>
<p>34. <b>エンジン:</b> enjin (mesin)</p>
<p>35. <b>タイヤ:</b> taiya (ban)</p>
<p>36. <b>ガソリン:</b> gasorin (bensin)</p>
<p>37. <b>ガソリンスタンド:</b> gasorin sutando (pom bensin)</p>
<p>38. <b>ナンバープレート:</b> nanbaa pureeto (plat nomor)</p>
<p>39. <b>ドア:</b> doa (pintu mobil)</p>
<p>40. <b>シートベルト:</b> shiito beruto (sabuk pengaman)</p>
<p>41. <b>うんてんしゅ:</b> untenshu (sopir)</p>
<p>42. <b>きっぷ:</b> kippu (tiket)</p>
<p>43. <b>きっぷうりば:</b> kippuuriba (loket tiket)</p>
<p>44. <b>ホーム:</b> hoomu (peron stasiun)</p>
<p>45. <b>でぐち:</b> deguchi (pintu keluar)</p>
<p>46. <b>いりぐち:</b> iriguchi (pintu masuk)</p>
<p>47. <b>のりば:</b> noriba (tempat naik kendaraan)</p>
<p>48. <b>のりかえ:</b> norikae (ganti kendaraan / transit)</p>
<p>49. <b>こうつう:</b> koutsuu (lalu lintas / transportasi)</p>
<p>50. <b>じこ:</b> jiko (kecelakaan)</p>
<p>51. <b>けいさつ:</b> keisatsu (polisi)</p>
<p>52. <b>パトカー:</b> patokaa (mobil polisi)</p>
<p>53. <b>しょうぼうしゃ:</b> shoubousha (mobil pemadam kebakaran)</p>
<p>54. <b>きゅうきゅうしゃ:</b> kyuukyuusha (ambulans)</p>
<p>55. <b>トンネル:</b> tonneru (terowongan)</p>
<p>56. <b>ばしょ:</b> basho (tempat)</p>
<p>57. <b>くうこうターミナル:</b> kuukou taaminaru (terminal bandara)</p>
<p>58. <b>ひこうきのチケット:</b> hikouki no chiketto (tiket pesawat)</p>
<p>59. <b>しゅっぱつ:</b> shuppatsu (keberangkatan)</p>
<p>60. <b>とうちゃく:</b> touchaku (kedatangan)</p>
<p>61. <b>びん:</b> bin (penerbangan / flight)</p>
<p>62. <b>チェックイン:</b> chekku in (check-in)</p>
<p>63. <b>パスポート:</b> pasupooto (paspor)</p>
<p>64. <b>スーツケース:</b> suutsukeesu (koper)</p>
<p>65. <b>にもつ:</b> nimotsu (barang bawaan / bagasi)</p>
<p>66. <b>てにもつ:</b> tenimotsu (barang bawaan tangan)</p>
<p>67. <b>けんえん:</b> ken’en (larangan membawa barang tertentu)</p>
<p>68. <b>くうこうけいび:</b> kuukou keibi (petugas keamanan bandara)</p>
<p>69. <b>フライトアテンダント:</b> furaito atendanto (pramugari)</p>
<p>70. <b>パイロット:</b> pairotto (pilot)</p>
<p>71. <b>すちゅわーです:</b> suchuwaadesu (stewardess / pramugari)</p>
<p>72. <b>りょこう:</b> ryokou (perjalanan / wisata)</p>
<p>73. <b>りょかん:</b> ryokan (penginapan Jepang tradisional)</p>
<p>74. <b>ホテル:</b> hoteru (hotel)</p>
<p>75. <b>ターミナル:</b> taaminaru (terminal)</p>
<p>76. <b>バスのうんてんしゅ:</b> basu no untenshu (sopir bus)</p>
<p>77. <b>ちず:</b> chizu (peta)</p>
<p>78. <b>ナビ:</b> nabi (navigasi / GPS)</p>
<p>79. <b>こうそくバス:</b> kousoku basu (bus antar kota / ekspres)</p>
<p>80. <b>ちかてつのえき:</b> chikatetsu no eki (stasiun MRT)</p>
<p>81. <b>ホームドア:</b> hoomu doa (pintu pengaman peron)</p>
<p>82. <b>まど:</b> mado (jendela)</p>
<p>83. <b>シート:</b> shiito (kursi)</p>
<p>84. <b>チケットマシン:</b> chiketto mashin (mesin tiket)</p>
<p>85. <b>きっぷかいさつぐち:</b> kippu kaisatsu guchi (gerbang tiket otomatis)</p>
<p>86. <b>うんてん:</b> unten (mengemudi)</p>
<p>87. <b>うんてんめんきょ:</b> unten menkyo (SIM / surat izin mengemudi)</p>
<p>88. <b>しゅうりこうば:</b> shuuri kouba (bengkel)</p>
<p>89. <b>タイヤこうかん:</b> taiya koukan (ganti ban)</p>
<p>90. <b>タクシーのりば:</b> takushii noriba (tempat naik taksi)</p>
<p>91. <b>バスうんこうじかん:</b> basu unkou jikan (jadwal bus)</p>
<p>92. <b>えきいん:</b> ekiin (petugas stasiun)</p>
<p>93. <b>しゅっぱつじかん:</b> shuppatsu jikan (waktu keberangkatan)</p>
<p>94. <b>とうちゃくじかん:</b> touchaku jikan (waktu kedatangan)</p>
<p>95. <b>じこてつづき:</b> jiko tetsuzuki (prosedur kecelakaan / laporan)</p>
<p>96. <b>しゅうり:</b> shuuri (perbaikan)</p>
<p>97. <b>ガレージ:</b> gareeji (garasi)</p>
<p>98. <b>ターミナルビル:</b> taaminaru biru (gedung terminal)</p>
<p>99. <b>スピード:</b> supiido (kecepatan)</p>
<p>100. <b>シグナル:</b> shigunaru (sinyal / lampu lalu lintas)</p>

                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>




                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFour">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            <h3><b>4. 🌸 Kanji (漢字)</b></h3>
                        </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionMateri">
                        <div class="accordion-body">
                            <p>Kanji (漢字), secara harfiah berarti "aksara dari Han", adalah aksara Tionghoa yang digunakan dalam bahasa Jepang. Kanji adalah salah satu dari empat set aksara yang digunakan dalam tulisan modern Jepang selain kana (katakana, hiragana) dan romaji.</p>
                            
                            <p>Kanji dulunya juga disebut mana (真名) atau shinji (真字) untuk membedakannya dari kana.
            Aksara kanji dipakai untuk melambangkan konsep atau ide (kata benda, akar kata kerja, akar kata sifat, dan kata keterangan).
            Sementara itu, hiragana umumnya dipakai sebagai okurigana untuk menuliskan infleksi kata kerja dan kata-kata yang akar katanya ditulis
            dengan kanji, atau kata-kata asli bahasa Jepang. Selain itu, hiragana dipakai menulis kata-kata yang sulit ditulis dan diingat bila ditulis
            dalam aksara kanji. Kecuali kata serapan, aksara kanji dipakai untuk menulis hampir semua kosakata yang berasal dari bahasa Tionghoa maupun bahasa Jepang.</p>
            <br>

                            <h3><b>Tabel Kanji Dasar</b></h3>
                            <br>
                            <h5><b>Bagian 1: Kanji Alam & Unsur Dasar (自然と元素の漢字)</b></h5>
<div class="table-responsive">
  <table class="table table-bordered table-striped table-hover text-center">
    <thead class="table-dark">
      <tr>
        <th>Kanji</th>
        <th>Arti</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>日</td><td>Matahari, Hari</td></tr>
      <tr><td>月</td><td>Bulan</td></tr>
      <tr><td>火</td><td>Api</td></tr>
      <tr><td>水</td><td>Air</td></tr>
      <tr><td>木</td><td>Pohon, Kayu</td></tr>
      <tr><td>金</td><td>Emas, Uang</td></tr>
      <tr><td>土</td><td>Tanah</td></tr>
      <tr><td>山</td><td>Gunung</td></tr>
      <tr><td>川</td><td>Sungai</td></tr>
      <tr><td>空</td><td>Langit, Kosong</td></tr>
      <tr><td>雨</td><td>Hujan</td></tr>
      <tr><td>風</td><td>Angin</td></tr>
      <tr><td>花</td><td>Bunga</td></tr>
      <tr><td>草</td><td>Rumput</td></tr>
      <tr><td>石</td><td>Batu</td></tr>
      <tr><td>光</td><td>Cahaya</td></tr>
      <tr><td>海</td><td>Laut</td></tr>
      <tr><td>湖</td><td>Danau</td></tr>
      <tr><td>森</td><td>Hutan lebat</td></tr>
      <tr><td>林</td><td>Hutan kecil</td></tr>
      <tr><td>星</td><td>Bintang</td></tr>
      <tr><td>雪</td><td>Salju</td></tr>
      <tr><td>天</td><td>Langit, Surga</td></tr>
      <tr><td>地</td><td>Bumi, Tanah</td></tr>
      <tr><td>岩</td><td>Batu besar, Karang</td></tr>
      <tr><td>野</td><td>Padang, Alam liar</td></tr>
      <tr><td>火山</td><td>Gunung berapi</td></tr>
      <tr><td>太陽</td><td>Matahari (secara ilmiah)</td></tr>
      <tr><td>空気</td><td>Udara</td></tr>
      <tr><td>火花</td><td>Bunga api</td></tr>
    </tbody>
  </table>
</div>
<br><br>

<h5><b>Bagian 2: Kanji Tubuh, Binatang, dan Alam Sekitar (体・動物・環境の漢字)</b></h5>
<div class="table-responsive">
  <table class="table table-bordered table-striped table-hover text-center">
    <thead class="table-dark">
      <tr>
        <th>Kanji</th>
        <th>Arti</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>人</td><td>Orang</td></tr>
      <tr><td>男</td><td>Laki-laki</td></tr>
      <tr><td>女</td><td>Perempuan</td></tr>
      <tr><td>子</td><td>Anak</td></tr>
      <tr><td>父</td><td>Ayah</td></tr>
      <tr><td>母</td><td>Ibu</td></tr>
      <tr><td>兄</td><td>Kakak laki-laki</td></tr>
      <tr><td>弟</td><td>Adik laki-laki</td></tr>
      <tr><td>姉</td><td>Kakak perempuan</td></tr>
      <tr><td>妹</td><td>Adik perempuan</td></tr>
      <tr><td>手</td><td>Tangan</td></tr>
      <tr><td>足</td><td>Kaki</td></tr>
      <tr><td>目</td><td>Mata</td></tr>
      <tr><td>耳</td><td>Telinga</td></tr>
      <tr><td>口</td><td>Mulut</td></tr>
      <tr><td>鼻</td><td>Hidung</td></tr>
      <tr><td>顔</td><td>Wajah</td></tr>
      <tr><td>頭</td><td>Kepala</td></tr>
      <tr><td>心</td><td>Hati, Perasaan</td></tr>
      <tr><td>体</td><td>Tubuh</td></tr>
      <tr><td>犬</td><td>Anjing</td></tr>
      <tr><td>猫</td><td>Kucing</td></tr>
      <tr><td>鳥</td><td>Burung</td></tr>
      <tr><td>魚</td><td>Ikan</td></tr>
      <tr><td>馬</td><td>Kuda</td></tr>
      <tr><td>牛</td><td>Sapi</td></tr>
      <tr><td>羊</td><td>Domba</td></tr>
      <tr><td>虫</td><td>Serangga</td></tr>
      <tr><td>貝</td><td>Kerang</td></tr>
      <tr><td>象</td><td>Gajah</td></tr>
      <tr><td>熊</td><td>Beruang</td></tr>
      <tr><td>虎</td><td>Harimau</td></tr>
      <tr><td>鳥類</td><td>Jenis burung</td></tr>
      <tr><td>草原</td><td>Padang rumput</td></tr>
      <tr><td>森林</td><td>Hutan rimba</td></tr>
      <tr><td>山羊</td><td>Kambing gunung</td></tr>
      <tr><td>虫歯</td><td>Gigi berlubang (serangga + gigi)</td></tr>
      <tr><td>足跡</td><td>Jejak kaki</td></tr>
      <tr><td>羽</td><td>Bulu, Sayap</td></tr>
      <tr><td>皮</td><td>Kulit luar</td></tr>
      <tr><td>肉</td><td>Daging</td></tr>
      <tr><td>骨</td><td>Tulang</td></tr>
    </tbody>
  </table>
</div>
<br><br>

<h5><b>Bagian 3: Kanji Aktivitas Sehari-hari (生活・行動の漢字)</b></h5>
<div class="table-responsive">
  <table class="table table-bordered table-striped table-hover text-center">
    <thead class="table-dark">
      <tr>
        <th>Kanji</th>
        <th>Arti</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>食</td><td>Makan</td></tr>
      <tr><td>飲</td><td>Minum</td></tr>
      <tr><td>買</td><td>Membeli</td></tr>
      <tr><td>売</td><td>Menjual</td></tr>
      <tr><td>行</td><td>Pergi</td></tr>
      <tr><td>来</td><td>Datang</td></tr>
      <tr><td>帰</td><td>Pulang</td></tr>
      <tr><td>見</td><td>Melihat</td></tr>
      <tr><td>聞</td><td>Mendengar</td></tr>
      <tr><td>話</td><td>Berbicara</td></tr>
      <tr><td>書</td><td>Menulis</td></tr>
      <tr><td>読</td><td>Membaca</td></tr>
      <tr><td>立</td><td>Berdiri</td></tr>
      <tr><td>座</td><td>Duduk</td></tr>
      <tr><td>走</td><td>Berlari</td></tr>
      <tr><td>歩</td><td>Berjalan</td></tr>
      <tr><td>休</td><td>Istirahat</td></tr>
      <tr><td>寝</td><td>Tidur</td></tr>
      <tr><td>起</td><td>Bangun</td></tr>
      <tr><td>開</td><td>Membuka</td></tr>
      <tr><td>閉</td><td>Menutup</td></tr>
      <tr><td>使</td><td>Menggunakan</td></tr>
      <tr><td>作</td><td>Membuat</td></tr>
      <tr><td>働</td><td>Bekerja</td></tr>
      <tr><td>学</td><td>Belajar</td></tr>
      <tr><td>教</td><td>Mengajar</td></tr>
      <tr><td>習</td><td>Berlatih</td></tr>
      <tr><td>遊</td><td>Bermain</td></tr>
      <tr><td>洗</td><td>Mencuci</td></tr>
      <tr><td>掃</td><td>Menyapu</td></tr>
      <tr><td>料理</td><td>Memasak</td></tr>
      <tr><td>勉強</td><td>Belajar (serius)</td></tr>
      <tr><td>運転</td><td>Menyetir</td></tr>
      <tr><td>旅行</td><td>Bepergian</td></tr>
      <tr><td>仕事</td><td>Pekerjaan</td></tr>
      <tr><td>読書</td><td>Membaca buku</td></tr>
      <tr><td>食事</td><td>Makan (waktu makan)</td></tr>
      <tr><td>買物</td><td>Belanja</td></tr>
      <tr><td>散歩</td><td>Jalan-jalan</td></tr>
      <tr><td>勉学</td><td>Studi, pendidikan</td></tr>
    </tbody>
  </table>
</div>
<br><br>

<h5><b>Bagian 4: Kanji Waktu, Angka, dan Arah (時間・数字・方向の漢字)</b></h5>
<div class="table-responsive">
  <table class="table table-bordered table-striped table-hover text-center">
    <thead class="table-dark">
      <tr>
        <th>Kanji</th>
        <th>Arti</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>一</td><td>Satu</td></tr>
      <tr><td>二</td><td>Dua</td></tr>
      <tr><td>三</td><td>Tiga</td></tr>
      <tr><td>四</td><td>Empat</td></tr>
      <tr><td>五</td><td>Lima</td></tr>
      <tr><td>六</td><td>Enam</td></tr>
      <tr><td>七</td><td>Tujuh</td></tr>
      <tr><td>八</td><td>Delapan</td></tr>
      <tr><td>九</td><td>Sembilan</td></tr>
      <tr><td>十</td><td>Sepuluh</td></tr>
      <tr><td>百</td><td>Seratus</td></tr>
      <tr><td>千</td><td>Seribu</td></tr>
      <tr><td>万</td><td>Sepuluh ribu</td></tr>
      <tr><td>円</td><td>Yen (mata uang Jepang)</td></tr>
      <tr><td>時</td><td>Waktu, Jam</td></tr>
      <tr><td>分</td><td>Menit, Bagian</td></tr>
      <tr><td>秒</td><td>Detik</td></tr>
      <tr><td>年</td><td>Tahun</td></tr>
      <tr><td>月</td><td>Bulan (kalender)</td></tr>
      <tr><td>日</td><td>Hari</td></tr>
      <tr><td>週</td><td>Minggu (pekan)</td></tr>
      <tr><td>今</td><td>Sekarang</td></tr>
      <tr><td>昨</td><td>Kemarin</td></tr>
      <tr><td>明</td><td>Besok, Terang</td></tr>
      <tr><td>午</td><td>Tengah hari</td></tr>
      <tr><td>前</td><td>Sebelum, Depan</td></tr>
      <tr><td>後</td><td>Sesudah, Belakang</td></tr>
      <tr><td>朝</td><td>Pagi</td></tr>
      <tr><td>昼</td><td>Siang</td></tr>
      <tr><td>夕</td><td>Sore</td></tr>
      <tr><td>夜</td><td>Malam</td></tr>
      <tr><td>春</td><td>Musim semi</td></tr>
      <tr><td>夏</td><td>Musim panas</td></tr>
      <tr><td>秋</td><td>Musim gugur</td></tr>
      <tr><td>冬</td><td>Musim dingin</td></tr>
      <tr><td>東</td><td>Timur</td></tr>
      <tr><td>西</td><td>Barat</td></tr>
      <tr><td>南</td><td>Selatan</td></tr>
      <tr><td>北</td><td>Utara</td></tr>
      <tr><td>左</td><td>Kiri</td></tr>
      <tr><td>右</td><td>Kanan</td></tr>
      <tr><td>中</td><td>Tengah, Dalam</td></tr>
      <tr><td>外</td><td>Luar</td></tr>
      <tr><td>上</td><td>Atas</td></tr>
      <tr><td>下</td><td>Bawah</td></tr>
      <tr><td>前後</td><td>Depan dan belakang</td></tr>
      <tr><td>時間</td><td>Waktu, Durasi</td></tr>
      <tr><td>日曜日</td><td>Hari Minggu</td></tr>
      <tr><td>午前</td><td>Pagi (a.m.)</td></tr>
      <tr><td>午後</td><td>Siang/sore (p.m.)</td></tr>
    </tbody>
  </table>
</div>
<br><br>


<h5><b>Daftar Kanji Umum</b></h5>
<div class="vocab-list">
  <h5><b>Bagian 1: Alam & Unsur</b></h5>
  <p>水 : mizu (air)</p>
  <p>火 : hi (api)</p>
  <p>木 : ki (pohon)</p>
  <p>金 : kane (emas / uang)</p>
  <p>土 : tsuchi (tanah)</p>
  <p>風 : kaze (angin)</p>
  <p>日 : hi / nichi (hari / matahari)</p>
  <p>月 : tsuki (bulan)</p>
  <p>星 : hoshi (bintang)</p>
  <p>山 : yama (gunung)</p>
  <p>川 : kawa (sungai)</p>
  <p>空 : sora (langit)</p>
  <p>雨 : ame (hujan)</p>
  <p>雪 : yuki (salju)</p>
  <p>花 : hana (bunga)</p>
  <p>草 : kusa (rumput)</p>
  <p>森 : mori (hutan lebat)</p>
  <p>林 : hayashi (hutan kecil)</p>
  <p>石 : ishi (batu)</p>
  <p>海 : umi (laut)</p>
  <p>天 : ten (langit / surga)</p>
  <p>地 : chi (tanah / bumi)</p>
  <p>光 : hikari (cahaya)</p>
  <p>星空 : hoshizora (langit berbintang)</p>

  <br>
 <h5><b>Bagian 2: Tubuh & Makhluk Hidup</b></h5>
  <p>人 : hito (orang)</p>
  <p>子 : ko (anak)</p>
  <p>男 : otoko (laki-laki)</p>
  <p>女 : onna (perempuan)</p>
  <p>目 : me (mata)</p>
  <p>耳 : mimi (telinga)</p>
  <p>口 : kuchi (mulut)</p>
  <p>手 : te (tangan)</p>
  <p>足 : ashi (kaki)</p>
  <p>心 : kokoro (hati / perasaan)</p>
  <p>体 : karada (tubuh)</p>
  <p>頭 : atama (kepala)</p>
  <p>顔 : kao (wajah)</p>
  <p>鼻 : hana (hidung)</p>
  <p>歯 : ha (gigi)</p>
  <p>首 : kubi (leher)</p>
  <p>骨 : hone (tulang)</p>
  <p>血 : chi (darah)</p>
  <p>犬 : inu (anjing)</p>
  <p>猫 : neko (kucing)</p>
  <p>鳥 : tori (burung)</p>
  <p>魚 : sakana (ikan)</p>
  <p>馬 : uma (kuda)</p>
  <p>牛 : ushi (sapi)</p>
  <p>羊 : hitsuji (domba)</p>
  <p>虫 : mushi (serangga)</p>
  <p>貝 : kai (kerang)</p>
  <p>熊 : kuma (beruang)</p>
  <p>猿 : saru (monyet)</p>

  <br>
<h5><b>Bagian 3: Aktivitas Sehari - hari</b></h5>
  <p>食 : shoku / taberu (makan)</p>
  <p>飲 : nomu (minum)</p>
  <p>見 : miru (melihat)</p>
  <p>聞 : kiku (mendengar / bertanya)</p>
  <p>話 : hanasu (berbicara)</p>
  <p>読 : yomu (membaca)</p>
  <p>書 : kaku (menulis)</p>
  <p>買 : kau (membeli)</p>
  <p>売 : uru (menjual)</p>
  <p>行 : iku (pergi)</p>
  <p>来 : kuru (datang)</p>
  <p>帰 : kaeru (pulang)</p>
  <p>立 : tatsu (berdiri)</p>
  <p>座 : suwaru (duduk)</p>
  <p>使 : tsukau (menggunakan)</p>
  <p>作 : tsukuru (membuat)</p>
  <p>働 : hataraku (bekerja)</p>
  <p>休 : yasumu (beristirahat)</p>
  <p>遊 : asobu (bermain)</p>
  <p>学 : manabu (belajar)</p>
  <p>教 : oshieru (mengajar)</p>
  <p>会 : au (bertemu)</p>
  <p>住 : sumu (tinggal)</p>
  <p>洗 : arau (mencuci)</p>
  <p>開 : hiraku (membuka)</p>
  <p>閉 : tojiru (menutup)</p>
  <p>使 : tsukau (memakai)</p>
  <p>歩 : aruku (berjalan)</p>
  <p>走 : hashiru (berlari)</p>
  <p>乗 : noru (naik kendaraan)</p>

 <h5><b>Bagian 4: Waktu, Angka, Arah</b></h5>
  <p>時 : toki (waktu / jam)</p>
  <p>分 : fun / bun (menit / bagian)</p>
  <p>年 : toshi (tahun)</p>
  <p>月 : tsuki (bulan)</p>
  <p>日 : hi (hari)</p>
  <p>週 : shuu (minggu)</p>
  <p>今 : ima (sekarang)</p>
  <p>先 : saki (sebelumnya / depan)</p>
  <p>前 : mae (depan / sebelum)</p>
  <p>後 : ato / ushiro (belakang / setelah)</p>
  <p>東 : higashi (timur)</p>
  <p>西 : nishi (barat)</p>
  <p>南 : minami (selatan)</p>
  <p>北 : kita (utara)</p>
  <p>上 : ue (atas)</p>
  <p>下 : shita (bawah)</p>
  <p>中 : naka (tengah / dalam)</p>
  <p>外 : soto (luar)</p>
  <p>左 : hidari (kiri)</p>
  <p>右 : migi (kanan)</p>
  <p>一 : ichi (satu)</p>
  <p>二 : ni (dua)</p>
  <p>三 : san (tiga)</p>
  <p>四 : shi / yon (empat)</p>
  <p>五 : go (lima)</p>
  <p>六 : roku (enam)</p>
  <p>七 : shichi / nana (tujuh)</p>
  <p>八 : hachi (delapan)</p>
  <p>九 : kyuu (sembilan)</p>
  <p>十 : juu (sepuluh)</p>
  <p>百 : hyaku (seratus)</p>
  <p>千 : sen (seribu)</p>
  <p>万 : man (sepuluh ribu)</p>

 <h5><b>Bagian 5: Konsep Abstrak & Kata Kerja Umum</b></h5>
  <p>愛 : ai (cinta)</p>
  <p>力 : chikara (kekuatan)</p>
  <p>音 : oto (suara)</p>
  <p>色 : iro (warna)</p>
  <p>名 : namae (nama)</p>
  <p>心 : kokoro (hati)</p>
  <p>思 : omou (berpikir / merasa)</p>
  <p>信 : shinjiru (percaya)</p>
  <p>知 : shiru (mengetahui)</p>
  <p>計 : hakaru (menghitung / mengukur)</p>
  <p>始 : hajimeru (memulai)</p>
  <p>終 : owaru (berakhir)</p>
  <p>強 : tsuyoi (kuat)</p>
  <p>弱 : yowai (lemah)</p>
  <p>高 : takai (tinggi / mahal)</p>
  <p>低 : hikui (rendah)</p>
  <p>新 : atarashii (baru)</p>
  <p>古 : furui (lama)</p>
  <p>明 : akarui (terang)</p>
  <p>暗 : kurai (gelap)</p>
  <p>白 : shiro (putih)</p>
  <p>黒 : kuro (hitam)</p>
  <p>赤 : aka (merah)</p>
  <p>青 : ao (biru)</p>
  <p>黄 : ki (kuning)</p>
  <p>静 : shizuka (tenang)</p>
  <p>楽 : tanoshii (menyenangkan)</p>
  <p>早 : hayai (cepat / pagi)</p>
  <p>遅 : osoi (lambat)</p>
  <p>多 : ooi (banyak)</p>
  <p>少 : sukunai (sedikit)</p>
  <p>長 : nagai (panjang)</p>
  <p>短 : mijikai (pendek)</p>
  <p>広 : hiroi (luas)</p>
  <p>近 : chikai (dekat)</p>
  <p>遠 : tooi (jauh)</p>
</div>

                            </div>
                    </div>
                </div>
            </div>
        `;
    } else if (page === 'latihan') {
        showLatihanMenu();
    } else if (page === 'tentang') {
        content.innerHTML = `
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="card shadow-sm border-0" style="border: 1px solid var(--sakura-light) !important; position: relative; overflow: hidden;">
                        <div class="card-body p-5">
                            
                            <div class="sakura-container">
                                <div class="sakura-flake">🌸</div>
                                <div class="sakura-flake">🌸</div>
                                <div class="sakura-flake">🌸</div>
                                <div class="sakura-flake">🌸</div>
                                <div class="sakura-flake">🌸</div>
                                <div class="sakura-flake">🌸</div>
                                <div class="sakura-flake">🌸</div>
                                <div class="sakura-flake">🌸</div>
                                <div class="sakura-flake">🌸</div>
                                <div class="sakura-flake">🌸</div>
                            </div>
                            <div style="position: relative; z-index: 1;">
                                <h1 class="text-center text-sakura">Kepada Dirimu di Dalam Ingatan 🌸</h1>
                                <p class="text-center text-muted fs-5">Meski waktu terus berlalu, hatiku masih tertinggal di hari itu.
    Suaramu masih bergema di telingaku.
    Semakin aku mencoba melupakanmu, semakin dalam dirimu terukir di hatiku.
    Mungkinkah suatu hari nanti perasaan ini akan menjadi kenangan yang lembut?</p>
                                <hr classs="my-4" style="color: var(--sakura-light);">
                                
                                <h3 class="text-center mt-5 text-sakura">Contact Saya</h3>
                                <div class="text-center">
                                    <p class="fs-5 mb-2"><strong>Nama:</strong> Aozora</p>
                                    <p class="fs-5 mb-2"><strong>Email:</strong> <a href="mailto:khoirulimann15@gmail.com" class="text-sakura">khoirulimann15@gmail.com</a></p>
                                    <p class="fs-5 mb-2"><strong>No WA:</strong> <a href="https://wa.me/6287826108793" target="_blank" class="text-sakura">+62 878-2610-8793</a></p>
                                    <p class="fs-5 mb-4"><strong>Instagram:</strong> <a href="https://www.instagram.com/yuu_aozora" target="_blank" class="text-sakura">@yuu_aozora</a></p>
                                </div>
                                
                                <div class="text-center mt-4">
                                    <button class="btn btn-selanjutnya" onclick="showContent('dashboard')">Kembali ke Dashboard</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    }

function showLatihanMenu() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="text-center">
            <h2>Pilih Kategori Latihan 🌸</h2>
            <p class="text-muted">Uji pemahaman Anda pada materi yang telah dipelajari.</p>
            <hr class="my-4" style="color: var(--sakura-light);">
            <div class="d-grid gap-3 col-md-6 mx-auto">
                <button class="btn btn-sakura-main" onclick="mulaiLatihan('hiragana')">Hiragana</button>
                <button class="btn btn-sakura-main" onclick="mulaiLatihan('katakana')">Katakana</button>
                <button class="btn btn-sakura-main" onclick="mulaiLatihan('kanji')">Kanji</button>
                <button class="btn btn-sakura-main" onclick="mulaiLatihan('kosakata')">Kosakata</button>
            </div>
        </div>
    `;
}

function mulaiLatihan(kategori) {
    kategoriDipilih = kategori;
    indeksSoal = 0;
    skor = 0;
    tampilkanSoal();
}

function tampilkanSoal() {
    const content = document.getElementById('content');
    const dataKategori = kuisData[kategoriDipilih];

    if (indeksSoal < dataKategori.length) {
        const soalSekarang = dataKategori[indeksSoal];
        
        // Acak urutan pilihan
        const pilihanAcak = [...soalSekarang.pilihan].sort(() => Math.random() - 0.5);
        
        let pilihanHTML = '';
        pilihanAcak.forEach(pilihan => {
            // Kita gunakan data-pilihan untuk menyimpan nilainya
            pilihanHTML += `<button class="btn btn-pilihan" data-pilihan="${pilihan}">${pilihan}</button>`;
        });

        const progress = Math.round(((indeksSoal + 1) / dataKategori.length) * 100);

        content.innerHTML = `
            <div class="row justify-content-center">
                <div class="col-lg-8 text-center">
                    <h2 class="text-sakura">${kategoriDipilih.toUpperCase()}</h2>
                    <p class="text-muted">Soal ${indeksSoal + 1} dari ${dataKategori.length}</p>
                    
                    <div class="progress mb-4" style="height: 25px;">
                        <div class="progress-bar progress-bar-striped progress-bar-animated bg-sakura" role="progressbar" style="width: ${progress}%;" aria-valuenow="${progress}" aria-valuemin="0" aria-valuemax="100">${progress}%</div>
                    </div>
                    
                    <div class="card shadow-sm border-0">
                        <div class="card-body p-5">
                            <p class="fs-4 mb-4">${soalSekarang.soal}</p>
                            <div class="d-grid gap-2" id="pilihan-container">${pilihanHTML}</div>
                        </div>
                    </div>

                    <div id="feedback-container" class="mt-3"></div>
                    <div id="next-btn-container" class="mt-3"></div>

                    <p class="mt-4 fs-5">Skor saat ini: <strong>${skor}</strong></p>
                    <div class="mt-4">
                        <button class="btn btn-secondary" onclick="showLatihanMenu()">Kembali ke Menu</button>
                    </div>
                </div>
            </div>
        `;

        // Tambahkan event listener ke tombol pilihan
        document.querySelectorAll('.btn-pilihan').forEach(button => {
            button.addEventListener('click', cekJawaban);
        });

    } else {
        tampilkanHasil();
    }
}

function cekJawaban(event) {
    const pilihanUser = event.target.getAttribute('data-pilihan');
    const soalSekarang = kuisData[kategoriDipilih][indeksSoal];
    const feedbackContainer = document.getElementById('feedback-container');
    const nextBtnContainer = document.getElementById('next-btn-container');

    // Nonaktifkan semua tombol pilihan
    document.querySelectorAll('.btn-pilihan').forEach(button => {
        button.disabled = true;
        // Hapus event listener agar tidak bisa diklik lagi
        button.removeEventListener('click', cekJawaban); 
    });

    if (pilihanUser === soalSekarang.jawaban) {
        skor++;
        event.target.classList.add('correct');
        feedbackContainer.innerHTML = `<span class="feedback-benar">Benar! (すごい!)</span>`;
    } else {
        event.target.classList.add('incorrect');
        feedbackContainer.innerHTML = `<span class="feedback-salah">Salah! Jawaban benar: ${soalSekarang.jawaban}</span>`;
        // Tunjukkan jawaban yang benar
        const tombolBenar = document.querySelector(`.btn-pilihan[data-pilihan="${soalSekarang.jawaban}"]`);
        if (tombolBenar) {
            tombolBenar.classList.add('correct');
        }
    }

    // Tampilkan tombol "Selanjutnya"
    nextBtnContainer.innerHTML = `<button class="btn btn-selanjutnya" onclick="lanjutSoal()">Selanjutnya &rarr;</button>`;
}

function lanjutSoal() {
    indeksSoal++;
    tampilkanSoal();
}

function tampilkanHasil() {
    const content = document.getElementById('content');
    const total = kuisData[kategoriDipilih].length;
    const persentase = Math.round((skor / total) * 100);
    
    let pesan = '';
    if (persentase == 100) {
        pesan = 'Sempurna! 完璧! (Kanpeki!) 🌸';
    } else if (persentase >= 80) {
        pesan = 'Luar biasa! 素晴らしい! (Subarashii!)';
    } else if (persentase >= 60) {
        pesan = 'Bagus! いいですね! (Ii desu ne!)';
    } else {
        pesan = 'Terus berlatih! 頑張って! (Ganbatte!)';
    }

    content.innerHTML = `
        <div class="text-center">
            <div class="hasil-kuis col-md-6 mx-auto">
                <h2>Latihan ${kategoriDipilih.toUpperCase()} Selesai!</h2>
                <hr style="color: var(--sakura-light);">
                <p class="fs-4">Skor akhir kamu:</p>
                <h1 class="display-1 fw-bold text-sakura">${skor} / ${total}</h1>
                <p class="fs-3 fw-bold">${persentase}%</p>
                <h4 class="mt-3">${pesan}</h4>
                
                <div class="mt-5">
                    <button class="btn btn-selanjutnya" onclick="mulaiLatihan('${kategoriDipilih}')">Ulangi Kategori</button>
                    <button class="btn btn-secondary ms-2" onclick="showLatihanMenu()">Pilih Kategori Lain</button>
                </div>
            </div>
        </div>
    `;
}

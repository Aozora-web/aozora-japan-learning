document.getElementById("menu-toggle").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("wrapper").classList.toggle("toggled");
});

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
        { soal: "Apa huruf Hiragana untuk 'wa'?", pilihan: ["わ", "り", "を", "ん"], jawaban: "を" },
        { soal: "Apa huruf Hiragana untuk 'wa'?", pilihan: ["わ", "り", "れ", "ん"], jawaban: "ん" },



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

        { soal: "Katakana untuk 'ma' adalah?", pilihan: ["マ", "ミ", "ム", "メ"], jawaban: "ホ" },
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
        { soal: "Katakana untuk 'wa' adalah?", pilihan: ["ワ", "ル", "ン", "ヲ"], jawaban: "ヲ" },
        { soal: "Katakana untuk 'wa' adalah?", pilihan: ["ワ", "ル", "ン", "ヲ"], jawaban: "ン" },

        
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
    if (page === 'dashboard') {
        content.innerHTML = `
            <h1 class="mb-4">Komori Japan</h1>
            <hr><br>
            <h3><b>Pengenalan Bahasa Jepang</b></h3><hr>
            <p>Bahasa Jepang adalah bahasa yang unik dengan sistem tulisan, tata bahasa,
            dan kosakata yang berbeda dari bahasa lain. Bahasa ini memiliki tiga sistem tulisan utama: 
            Hiragana, Katakana, dan Kanji, serta banyak kosa kata yang berasal dari bahasa asing.
            Bahasa Jepang juga dikenal dengan struktur kalimat yang berbeda, di mana subjek, objek, dan verba biasanya berada di akhir kalimat. </p>
            <div class="row">
                <div class="col-md-6 mb-3">
                    <div class="card shadow-sm h-100">
                        <div class="card-body d-flex flex-column justify-content-between">
                            <div>
                                <h5 class="card-title">Materi Belajar</h5>
                                <p class="card-text">Pelajari huruf Hiragana, Katakana, Kanji, dan kalimat sehari-hari.</p>
                            </div>
                            <a href="#" class="btn btn-primary mt-3" onclick="showContent('materi')">Lihat Materi</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="card shadow-sm h-100">
                        <div class="card-body d-flex flex-column justify-content-between">
                            <div>
                                <h5 class="card-title">Latihan Soal</h5>
                                <p class="card-text">Uji kemampuanmu dengan latihan soal bahasa Jepang interaktif.</p>
                            </div>
                            <a href="#" class="btn btn-success mt-3" onclick="showContent('latihan')">Mulai Latihan</a>
                        </div>
                    </div>
                </div>
                <p>Bahasa Jepang memiliki tiga jenis huruf : Hiragana, Katakana dan Kanji. Hiragana dan katakana merupakan simbol fonetik, setiap hurufnya mewakili penyebutan satu suku kata. Sedangkan Kanji adalah ideogram, yang dipakai untuk menggambarkan makna dari setiap ujaran.</p>
                <p>Web ini didasarkan pada pembelajaran bahasa jepang dari awal pemula sampai yang sudah mahir dalam bahasa jepang dengan menggunakan pembelajaran secara otodidak yang mencakup tentang aksara bahasa jepang, kosa kata, ucapan kalimat, kata bilangan, ungkapan waktu, kata bantu bilangan, konjungsi kata kerja, dll.</p>
                <br><br><br>

                <br><br>
    
               
                <h3><b>Sistem Tulisan</b><h3><hr>
                <h5>Hiragana</h5>
                <p>Sistem tulisan fonetik yang digunakan untuk menulis kata-kata asli Jepang dan kata-kata asing yang telah di-Jepang-kan.</p>
                <div class="row">
                <div class="col-md-6 mb-3">
                    <div class="card shadow-sm h-100">
                        <div class="card-body d-flex flex-column justify-content-between">
                            <div>
                                <h5 class="card-title">Materi Hiragana</h5>
                                <p class="card-text">Pelajari huruf Hiragana</p>
                            </div>
                            <a href="#" class="btn btn-primary mt-3" onclick="showContent('materi')">Lihat Materi</a>
                        </div>
                    </div>
                </div>
                <h5><b>Katakana</b></h5>
                <p>Sistem tulisan fonetik yang digunakan untuk menulis kata-kata asing yang belum di-Jepang-kan, nama orang asing, dan kata-kata seruan.</p>
                 <div class="row">
                <div class="col-md-6 mb-3">
                    <div class="card shadow-sm h-100">
                        <div class="card-body d-flex flex-column justify-content-between">
                            <div>
                                <h5 class="card-title">Materi Katakana</h5>
                                <p class="card-text">Pelajari huruf Katakana</p>
                            </div>
                            <a href="#" class="btn btn-primary mt-3" onclick="showContent('materi')">Lihat Materi</a>
                        </div>
                    </div>
                </div>
                <h5><b>Kanji</b></h5>
                <p>Sistem tulisan yang dipinjam dari Tiongkok dan digunakan untuk menulis kata-kata yang memiliki arti atau makna tertentu, serta untuk membedakan kata-kata yang memiliki pengucapan yang sama.</p>
                 <div class="row">
                <div class="col-md-6 mb-3">
                    <div class="card shadow-sm h-100">
                        <div class="card-body d-flex flex-column justify-content-between">
                            <div>
                                <h5 class="card-title">Materi Kanji</h5>
                                <p class="card-text">Pelajari Kanji</p>
                            </div>
                            <a href="#" class="btn btn-primary mt-3" onclick="showContent('materi')">Lihat Materi</a>
                        </div>
                    </div>
                </div>
                <br><br>
                <br><br>

            <h3><b>Tata Bahasa</b></h3><hr>
            <p>- Bahasa Jepang memiliki struktur kalimat subjek-objek-verba (SOV), yang berbeda dari bahasa Inggris (SVO).</p>
            <p>- Tata bahasa Jepang juga dikenal dengan penggunaan partikel, seperti "wa" (adalah), "ga" (subjek), "no" (genetif), dan "o" (objek) untuk menunjukkan fungsi kata dalam kalimat.</p>
            <p>- Bahasa Jepang juga menggunakan berbagai tingkat bahasa, mulai dari bahasa formal (keigo) yang digunakan dalam situasi resmi hingga bahasa kasual (katakana) yang digunakan dalam situasi santai. </p>

            <br><br><br>

            <br>
            <h3><b>Kosakata</b></h3><hr>
            <p>Kosakata dalam bahasa Jepang disebut goi (語彙). Goi adalah perbendaharaan kata-kata atau kosakata yang digunakan dalam bahasa Jepang. Penguasaan kosakata yang luas dan tepat sangat penting untuk berkomunikasi dengan baik dalam bahasa Jepang, baik secara lisan maupun tulisan. </p>
            <h5>Berikut adalah contoh perkenalan diri dalam bahasa Jepang</h5>
            <p>- <b>Hajimemashite.</b> (Salam kenal)</p>
            <p>- <b>Watashi wa [nama] desu.</b> (Nama saya [nama])</p>
            <p>- <b>[Negara] kara kimashita.</b> (Saya berasal dari [Negara])</p>
            <p>- <b>Yoroshiku onegaishimasu.</b> (Senang berkenalan dengan Anda)</p>
            <br><br>
            <h5><b>Fungsi Kosakata</b></h5>
            <p>Kosakata adalah fondasi utama dalam berbahasa. Tanpa kosakata, kita tidak bisa mengungkapkan ide, pikiran, atau emosi kita. Penguasaan kosakata yang baik memungkinkan kita untuk berkomunikasi dengan efektif, memahami berbagai teks dan materi, dan bahkan belajar lebih banyak. </p>
            <br><br><br>
            <br><br>
            <h5><b>Jenis Kosakata</b></h5>
            <p>Kosakata dalam bahasa Jepang dapat dibagi menjadi beberapa jenis, seperti:</p>
            <p>- <b>Wago (和語) :</b> Kosakata asli bahasa Jepang yang sudah ada sejak lama. </p>
            <p>- <b>Kango (漢語) :</b> Kosakata yang berasal dari bahasa Mandarin. </p>
            <p>- <b>Gairaigo (外来語): </b> Kosakata yang berasal dari bahasa asing (contoh: bahasa Inggris, Prancis, dll) yang sudah disesuaikan dengan aturan bahasa Jepang. </p>
            <br><br><br>
            <h3><b>Angka dan Sistem Penghitungan</b></h3><hr>
            <p>Bangsa Jepang pada zaman dahulu (dan dalam jumlah yang cukup terbatas pada zaman sekarang)
                menggunakan angka-angka Tionghoa, yang lalu dibawa ke Korea dan sampai ke Jepang.
                Berikut ini adalah daftar angka-angka Jepang.</p>
                <p>一 Ichi 1 二 Ni 2 三 San 3 四 Yon 4 五 Go 5 六 Roku 6 七 Nana 7 八 Hachi 8 九 Kyū 9 十 Jū 10</p>
            </div>
        `;
    } else if (page === 'materi') {
        content.innerHTML = `
            <h1><b>Materi Bahasa Jepang Lengkap</b></h1>
    
            <br>
            <h3><b>1. Hiragana (ひらがな)</b></h3><hr>
            <p>Hiragana adalah sistem penulisan dasar dalam bahasa Jepang. Setiap karakter dalam Hiragana mewakili satu suku kata. Hiragana digunakan untuk menulis kata-kata asli Jepang, partikel, dan juga kata bantu yang tidak ada bentuk kanjinya. Hiragana terdiri dari 46 karakter dasar.</p>
            
            <br>
            <h4><b>Tabel Karakter Hiragana</b></h4>
            <table class="table table-bordered">
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
            <h4><b>Contoh Penggunaan Hiragana dalam Kalimat:</b></h4><br>
            <p><b>"私は犬が好きです" (watashi wa inu ga suki desu):</b> "Saya suka anjing". </p>
            <p><b>- "私" (watashi):</b> Saya.</p>
            <p><b>- "は" (wa):</b> Partikel yang menandakan topik.</p>
            <p><b>- "犬" (inu):</b> Anjing.</p>
            <p><b>- "が" (ga):</b> Partikel yang menandakan objek yang disukai.</p>
            <p><b>- "好きです" (suki desu):</b> Suka.</p>
            <br>
            <p><b>"あなたはどこに住んでいますか" (anata wa doko ni sunde imasu ka):</b> "Kamu tinggal dimana?". </p>
            <p><b>- "あなた" (anata):</b> Kamu.</p>
            <p><b>- "は" (wa):</b> Partikel yang menandakan topik.</p>
            <p><b>- "どこに" (doko ni):</b> Di mana.</p>
            <p><b>- "住んでいます" (sunde imasu):</b> Tinggal.</p>
            <p><b>- "か" (ka):</b> Partikel tanya.</p>
    
            <br>
            <h4><b>Contoh Penggunaan Hiragana dalam Kalimat:</b></h4><br>
            <p>- Hiragana juga digunakan untuk menulis katakana dan kanji yang sulit dibaca dalam bentuk kanji. </p>
            <p>- Hiragana juga digunakan untuk menulis nama-nama yang tidak memiliki karakter kanji, seperti nama-nama orang atau tempat. </p>
            <br><br><br>


            <h3><b>2. Katakana (カタカナ)</b></h3><hr>
            <p>Katakana adalah sistem penulisan yang digunakan untuk menulis kata-kata yang berasal dari bahasa asing (loanwords), nama orang, nama tempat, dan onomatope (kata yang menggambarkan suara). Katakana juga digunakan untuk menulis kata teknis, ilmiah, atau untuk menekankan sesuatu.</p>
    
            <br>
            <h4><b>Tabel Karakter Katakana</b></h4>
            <table class="table table-bordered">
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

            <br><br>



            <h3><b>3. Kamus Kosataka</b><h3><hr>
            <h5>Kosakata Bahasa Jepang Ke Indonesia</h5>
            <p>Jika kamu berencana untuk belajar bahasa Jepang, maka kamu terlebih dahulu harus mengetahui kosakata bahasa Jepang yang digunakan dalam percakapan sehari-hari.
                Dikutip dari buku Marugoto: Bahasa dan Kebudayaan Jepang oleh Japan Foundation, berikut ini kumpulan kosa kata bahasa Jepang beserta artinya dalam bahasa Indonesia.</p>
            <br>
            <h5><b>Kosakata Bahasa Jepang Tentang Pekerjaan</b></h5>
            <p>Berikut ini kosa kata seputar pekerjaan dalam bahasa Jepang beserta artinya.</p>
            <p>1. いしゃ: isha (dokter)</p>
            <p>2. かいしゃいん: kaishain (pegawai perusahaan)</p>
            <p>3. エンジニア: enjinia (teknisi)</p>
            <p>4. かいごし: kaigoshi (perawat lansia)</p>
            <p>5. きょうし: kyooshi (guru)</p>
            <p>6. かんごし: kangoshi (perawat)</p>
            <p>7. こうむいん: koomuin (pegawai negeri)</p>
            <p>8. じえいぎょう: jieegyoo (wiraswasta)</p>
            <p>9. しゅふ: shufu (ibu rumah tangga)</p>
            <p>10. のうか: nooka (petani)</p>
            <p>11. アルバイト（バイト: arubaito (pekerjaan paruh waktu)</p>
            <p>12. がくせい: gakusee (pelajar/siswa)</p>

            <br>
            <h5><b>Kosakata Bahasa Jepang Tentang Sekolah</b></h5>
            <p>1. がっこう: gakoo (sekolah)</p>
            <p>2. クラス: kurasu (kelas)</p>
            <p>3. いす: isu (kursi)</p>
            <p>4. つくえ: tsukue (meja)</p>
            <p>5. えんぴつ: enpitsu (pensil)</p>
            <p>6. ノート: nooto (buku tulis)</p>
            <p>7. きょうかしょ: kyookasho (buku pelajaran)</p>
            <p>8. じしょ: jisho (kamus)</p>
            <p>9. けいたいでんわ: keetai-denwa (handphone)</p>
            <p>10. コンピューター: konpyuutaa (komputer)</p>
            <p>11. ホワイトボード: howaito-boodo (papan tulis putih)</p>
            <p>12. けしごむ: keshigomu (karet penghapus)</p>
            <p>13. ペン: pen (pulpen)</p>
            <p>14. べんきょう（を）します: benkyoo shimasu (belajar)</p>
            <p>15. かきます: kakimasu (menulis)</p>
            <p>16. よみます: yomimasu (membaca)</p>
            <p>17. ききます: kikimasu (mendengar)</p>
            <p>18. はなします: hanashimasu (berbicara)</p>
            <p>19. せつめい（を）します: setsumee (o) shimasu (menerangkan)</p>
            <p>20. しつもん（を）します: shitsumon (o) shimasu (bertanya)</p>

            <br>
            <h5><b>Kosakata Bahasa Jepang Tentang Keluarga</b></h5>
            <p>1. かぞく: kazoku (keluarga)</p>
            <p>2. りょうしん: orang tua</p>
            <p>3. ちち: chichi (bapak)</p>
            <p>4. はは: haha (ibu)</p>
            <p>5. あに: ani (kakak laki-laki)</p>
            <p>6. あね: ane (kakak perempuan)</p>
            <p>7. おとうと: otooto (adik laki-laki)</p>
            <p>8. いもうと: imooto (adik perempuan)</p>
            <p>9. おっと: otto (suami)</p>
            <p>10. こども: kodomo (anak)</p>

            <br>
            <h5><b>Kosakata Bahasa Jepang Tentang Binatang</b></h5>
            <p>1. ねこ: neko (kucing)</p>
            <p>2. いぬ: inu (anjing)</p>
            <p3. うさぎ: usagi (kelinci)></p>
            <p>4. とり:tori (burung)</p>
            <p>5. ハツカネズミ: hatsukanezumi (tikus)</p>
            <p>6. きんぎょ: kingyo (ikan emas)</p>
            <p>7. ハムスター: hamusutaa (hamster)</p>
            <p>8. サル (saru): Monyet</p>
            <p>9. タコ (tako): Gurita</p>
            <p>10. ムシ (mushi): Serangga</p>

            <br>
            <h5><b>Kosakata Bahasa Jepang Tentang Makanan</b></h5>
            <p>1. たべもの: tabemono (makanan)</p>
            <p>2. ごはん／ライス: gohan (nasi)</p>
            <p>3. パン: pan (roti)</p>
            <p>4. さかな: sakana (ikan)</p>
            <p>5. にく: niku (daging)</p>
            <p>6. チーズ: chiizu (keju)</p>
            <p>7. たまご: tamago (telur)</p>
            <p>8. やさい: yasai (sayuran)</p>
            <p>9. トマト: tomato (tomat)</p>
            <p>10. じゃがいも: jagaimo (kentang)</p>
            <p>11. にんじん: ninjin (wortel)</p>
            <p>12. すいか: suika (semangka)</p>
            <p>13. バナナ: banana (pisang)</p>
            <p>14. りんご: ringo (apel)</p>
            <p>15. レモン: remon (lemon)</p>
            <p>16. アイスクリーム: aisu-kuriimu (es krim)</p>
            <p>17. あめ: ame (permen)</p>
            <p>18. のり: nori (rumput laut)</p>

            <br>
            <p>Nah, itulah beberapa kosa kata dalam bahasa Jepang ke Indonesia yang bisa menjadi referensi untuk memulai percakapan dalam bahasa Jepang. Semoga informasi ini bermanfaat.</p>




            <br><br>
            <h3><b>4. Kanji (漢字)</b></h3><hr>
            <p>Kanji (漢字), secara harfiah berarti "aksara dari Han", adalah aksara Tionghoa yang digunakan dalam bahasa Jepang.
            Kanji adalah salah satu dari empat set aksara yang digunakan dalam tulisan modern Jepang selain kana (katakana, hiragana) dan romaji.</p>
            <br>
            <p>Kanji dulunya juga disebut mana (真名) atau shinji (真字) untuk membedakannya dari kana.
            Aksara kanji dipakai untuk melambangkan konsep atau ide (kata benda, akar kata kerja, akar kata sifat, dan kata keterangan).
            Sementara itu, hiragana umumnya dipakai sebagai okurigana untuk menuliskan infleksi kata kerja dan kata-kata yang akar katanya ditulis
            dengan kanji, atau kata-kata asli bahasa Jepang. Selain itu, hiragana dipakai menulis kata-kata yang sulit ditulis dan diingat bila ditulis
            dalam aksara kanji. Kecuali kata serapan, aksara kanji dipakai untuk menulis hampir semua kosakata yang berasal dari bahasa Tionghoa maupun bahasa Jepang.</p>
            <br>

            <h5><b>Sejarah</b></h5>
            <p>Secara resmi, aksara Tionghoa pertama kali dikenal di Jepang lewat barang-barang yang diimpor dari Tionghoa melalui Semenanjung Korea mulai abad ke-5 Masehi.
            Sejak itu pula, aksara Tionghoa banyak dipakai untuk menulis di Jepang, termasuk untuk prasasti dari batu dan barang-barang lain.</p>
            <p>Sebelumnya di awal abad ke-3 Masehi, dua orang bernama Achiki dan Wani datang dari Baekje pada masa pemerintahan Kaisar Ōjin.
            Keduanya konon menjadi pengajar aksara Tionghoa bagi putra kaisar.[1] Wani membawa buku Analek karya Kong Hu Chu dan buku pelajaran
            menulis aksara Tionghoa untuk anak-anak dengan judul Seribu Karakter Klasik.[2] Walaupun demikian, orang Jepang mungkin sudah mengenal
            aksara Tionghoa sejak abad ke-1 Masehi. Di Kyushu ditemukan stempel emas asal tahun 57 Masehi yang diterima sebagai hadiah dari Tiongkok
            untuk raja negeri Wa (Jepang).</p>
            <p>Dokumen tertua yang ditulis di Jepang menurut perkiraan ditulis keturunan imigran dari Tiongkok.
            Istana mempekerjakan keturunan imigran dari Tiongkok bekerja di istana sebagai juru tulis.
            Mereka menuliskan bahasa Jepang kuno yang disebut yamato kotoba dalam aksara Tionghoa.
            Selain itu, mereka juga menuliskan berbagai peristiwa dan kejadian penting.</p>
            <p>Sebelum aksara kanji dikenal orang Jepang, bahasa Jepang berkembang tanpa bentuk tertulis.
            Pada awalnya, dokumen bahasa Jepang ditulis dalam bahasa Tionghoa, dan dilafalkan menurut cara membaca bahasa Tionghoa.
            Sistem kanbun (漢文) merupakan cara penulisan bahasa Jepang menurut bahasa Tionghoa yang dilengkapi tanda diakritik.
            Sewaktu dibaca, tanda diakritik membantu penutur bahasa Jepang mengubah susunan kata-kata, menambah partikel, dan infleksi
            sesuai aturan tata bahasa Jepang.</p>
            <p>Selanjutnya berkembang sistem penulisan man'yōgana yang memakai aksara Tionghoa untuk melambangkan bunyi bahasa Jepang.
            Sistem ini dipakai dalam antologi puisi klasik Man'yōshū. Sewaktu menulis man'yōgana, aksara Tionghoa ditulis dalam bentuk kursif
            agar menghemat waktu. Hasilnya adalah hiragana yang merupakan bentuk sederhana dari man'yōgana.
            Hiragana menjadi sistem penulisan yang mudah dikuasai wanita. Kesusastraan zaman Heian diwarnai karya-karya
            besar sastrawan wanita yang menulis dalam hiragana.
            Sementara itu, katakana diciptakan oleh biksu yang hanya mengambil sebagian kecil coretan dari sebagian karakter kanji yang dipakai dalam man'yōgana.</p>
            <br>
            <h5><b>Cara Pengucapan</b></h5>
            <p>Satu aksara kanji bisa memiliki cara membaca yang berbeda-beda.
            Selain itu tidak jarang, satu bunyi bisa dilambangkan oleh aksara kanji yang berbeda-beda.
            Aksara kanji memiliki dua cara pengucapan, ucapan Tionghoa (on'yomi) dan ucapan Jepang (kun'yomi).</p>
            <br>

            <h5><b>Ucapan Tionghoa (ON'YOMI)</b></h5>
            <p><b>On'yomi (音読み) atau ucapan Tionghoa</b> adalah cara membaca aksara kanji mengikuti cara membaca orang Tionghoa sewaktu karakter tersebut diperkenalkan di Jepang.
            Pengucapan karakter kanji menurut bunyi bahasa Tionghoa bergantung kepada zaman ketika karakter tersebut diperkenalkan di Jepang.
            Akibatnya, sebagian besar karakter kanji memiliki lebih dari satu on'yomi. Kanji juga dikenal orang Jepang secara bertahap dan tidak langsung dilakukan pembakuan.</p>
            <br>
            <b>On'yomi dibagi menjadi 4 jenis :</b><br>
            <br>
            <p><b>- Go-on (呉音, "ucapan Wu")</b> adalah cara pengucapan dari daerah Wu di bagian selatan zaman Enam Dinasti Tiongkok.
            Walaupun tidak pernah ditemukan bukti-bukti, ucapan Wu diperkirakan dibawa masuk ke Jepang melalui Semenanjung Korea dari abad ke-5 hingga abad ke-6.
            Ucapan Wu diperkirakan berasal dari cara membaca literatur agama Buddha yang diwariskan secara turun temurun sebelum diketahui cara membaca Kan-on (ucapan Han).
            Semuanya cara pengucapan sebelum Kan-on digolongkan sebagai Go-on walaupun mungkin saja berbeda zaman dan asal-usulnya bukan dari daerah Wu.</p>
            <p><B>- Kan-on (漢音, "ucapan Han")</b> adalah cara pengucapan seperti dipelajari dari zaman Nara hingga zaman Heian oleh utusan Jepang ke Dinasti Tang dan biksu yang belajar ke Tiongkok.
            Secara khusus, cara pengucapan yang ditiru adalah cara pengucapan orang Chang'an.</p>
            <p><b>- Tō-on (唐音, "ucapan Tang")</b> adalah cara pengucapan karakter seperti dipelajari oleh biksu Zen antara zaman Kamakura dan zaman Muromachi yang belajar ke Dinasti Song, dan perdagangan dengan Tiongkok.</p>
            <p><b>- Kan'yō-on (慣用音, "ucapan populer")</b> adalah cara pengucapan on'yomi yang salah (tidak ada dalam bahasa Tionghoa), tetapi telah diterima sebagai kelaziman.</p>
            <br>

            <h5><b>Ucapan Jepang (Kun'Yomi)</b></h5>  
            <p>Kun'yomi (訓読み) atau ucapan Jepang adalah cara pengucapan kata asli bahasa Jepang untuk karakter kanji yang artinya sama atau paling mendekati.
                Kanji tidak diucapkan menurut pengucapan orang Tionghoa, melainkan menurut pengucapan orang Jepang. Bila karakter kanji dipakai untuk menuliskan
                kata asli bahasa Jepang, okurigana sering perlu ditulis mengikuti karakter tersebut.</p>       
            <p>Seperti halnya, on'yomi sebuah karakter kadang-kadang memiliki beberapa kun'yomi yang bisa dibedakan berdasarkan konteks dan okurigana yang mengikutinya.
                Beberapa karakter yang berbeda-beda sering juga memiliki kun'yomi yang sama, namun artinya berbeda-beda. Selain itu, tidak semua karakter memiliki kun'yomi.</p>   
            <p>Kata "kun" dalam kun'yomi berasal kata "kunko" (訓詁) (pinyin: xungu) yang berarti penafsiran kata demi kata dari bahasa kuno atau dialek dengan bahasa modern.
                Aksara Tionghoa adalah aksara asing bagi orang Jepang, sehingga kunko berarti penerjemahan aksara Tionghoa ke dalam bahasa Jepang.
                Arti kanji dalam bahasa Tionghoa dicarikan padanannya dengan kosakata asli bahasa Jepang.</p>
            <p>Sebagai aksara asing, aksara Tionghoa tidak dapat diterjemahkan semuanya ke dalam bahasa Jepang.
                Akibatnya, sebuah karakter kanji mulanya dipakai untuk melambangkan beberapa kun'yomi.</p>
            <p>Pada masa itu, orang Jepang mulai sering membaca tulisan bahasa Tionghoa (kanbun) dengan cara membaca bahasa Jepang.
                Sebagai usaha membakukan cara membaca kanji, satu karakter ditetapkan hanya memiliki satu cara pengucapan Jepang (kun'yomi).
                Pembakuan ini merupakan dasar bagi tulisan campuran Jepang dan Tiongkok (wa-kan konkōbun) yang merupakan cikal bakal bahasa Jepang modern.</p>

            <br>
            <h5><b>Kokkun</b></h5>
            <p><b>Kokkun (国訓) Kokkun (国訓)</b> adalah karakter kanji yang mendapat arti baru yang sama sekali berbeda dari arti semula karakter tersebut dalam bahasa Tionghoa, misalnya:</p>
            <p>- 沖 chū, okitsu, oki (jauh di laut, lepas pantai; pinyin: chōng, membilas; chòng, kuat)</p>
            <p>- 椿 tsubaki (Kamelia; pinyin: chūn, Ailanthus)</p>
            <br>

            
            <h5><b>Jūbakoyomi dan yutōyomi</b></h5>
            <p>Gabungan dua karakter sering tidak mengikuti cara membaca on'yomi dan kun'yomi melainkan campuran keduanya yang disebut jūbakoyomi (重箱読み).
                Karakter pertama dibaca menurut on'yomi dan karakter kedua menurut kun'yomi, misalnya:</p>
            <p>- 重箱 (jūbako)</p>
            <p>- 音読み (on'yomi)</p>
            <p>- 台所 (daidokoro)</p>
            <p>- 役場 (yakuba)</p>
            <p>- 試合 (shiai)</p>
            <p>- 団子 (dango).</p>
            <p>Sebaliknya dalam yutōyomi (湯桶読み), karakter pertama dibaca menurut kun'yomi dan karakter kedua menurut on'yomi, misalnya:</p>
            <p>- 湯桶 (yutō)</p>
            <p>- 合図 (aizu)</p>
            <p>- 雨具 (amagu)</p>
            <p>- 手帳 (techō)</p>
            <p>- 鶏肉 (toriniku).</p>
            <br>

            <h5><b>karakter Buatan Jepang</b></h5>
            <p><b>okuji (国字, aksara nasional) atau wasei kanji (和製漢字, kanji buatan Jepang)</b> adalah karakter kanji yang asli dibuat di Jepang dan tidak berasal dari Tiongkok.
                Kokuji sering hanya memiliki cara pembacaan kun'yomi dan tidak memiliki on'yomi, misalnya:</p>
                <p>- 峠 (tōge): lintasan pegunungan</p>
                <p>- 榊 (sakaki): pohon sakaki (Cleyera japonica)</p>
                <p>- 畑 (hatake, hata): ladang, perkebunan</p>
                <p>- 辻 (tsuji): sudut jalan, perempatan jalan</p>
                <p>- 腺 (sen): kelenjar</p>
                <p>- 働 (hatara(ku); on'yomi: dō): bekerja.</p>
                <p>Beberapa kokuji diserap oleh bahasa Tionghoa, misalnya: 腺 (xiàn).</p>

            <br>
            <h5><b>Daftar Kanji</b></h5>
            <p>Pemerintah Jepang mengeluarkan daftar aksara kanji yang disebut <b>Tōyō Kanji pada 16 November 1946 yang seluruhnya berjumlah 1.850 karakter.</b>
                Daftar ini memuat aksara kanji yang telah disederhanakan atau <b>shinjitai (新字体, karakter bentuk baru).</b>
                Sebaliknya, aksara kanji yang belum disederhanakan disebut <b>kyūjitai (旧字体).</b></p>
            <p>Daftar Tōyō Kanji digantikan dengan daftar <b>Jōyō Kanji berisi 1.945 karakter</b>
                yang dikeluarkan Kementerian Pendidikan Jepang pada 10 Oktober 1981.
                Hingga sebelum akhir Perang Dunia II, Kementerian Pendidikan Jepang sudah 4 kali menyusun daftar <b>Jōyō Kanji (1923, 1931, 1942, dan 1945).</b></p>
            <p>Kementerian Pendidikan juga memiliki daftar Kyōiku Kanji yang diambil dari daftar <b>Jōyō Kanji, daftar ini berisi 1.006 karakter</b>
                untuk dipelajari anak sekolah dasar di Jepang. Selain itu, pemerintah Jepang mengeluarkan daftar <b>Jinmeiyō Kanji (kanji nama orang)</b>
                yang dipakai untuk menulis nama orang. Hingga 27 September 2004, daftar <b>Jinmeiyō Kanji berisi 2.928 karakter (daftar Jōyō Kanji ditambah 983 kanji nama orang).</b></p>

                <br>

<h5><b>Tabel Kanji Dasar</b></h5>
<table border="1">
    <thead>
        <tr>
            <th>Kanji</th>
            <th>Bacaannya</th>
            <th>Arti</th>
        </tr>
    </thead>
    
    <tbody>
        <tr><td>日</td><td>にち (nichi), ひ (hi)</td><td>Matahari, Hari</td></tr>
        <tr><td>本</td><td>ほん (hon)</td><td>Buku, Jepang</td></tr>
        <tr><td>学</td><td>がく (gaku)</td><td>Belajar</td></tr>
        <tr><td>校</td><td>こう (kō)</td><td>Sekolah</td></tr>
        <tr><td>人</td><td>じん (jin), ひと (hito)</td><td>Orang</td></tr>
        <tr><td>口</td><td>こう (kō), くち (kuchi)</td><td>Mulut</td></tr>
        <tr><td>水</td><td>すい (sui), みず (mizu)</td><td>Air</td></tr>
        <tr><td>木</td><td>もく (moku), き (ki)</td><td>Pohon</td></tr>
        <tr><td>山</td><td>さん (san), やま (yama)</td><td>Gunung</td></tr>
        <tr><td>川</td><td>せん (sen), かわ (kawa)</td><td>Sungai</td></tr>
    </tbody>
</table>
<br>
<h5><b>Kanji</b></h5>
        <p>水 : mizu (air)</p>
        <p>火 : hi (api)</p>
        <p>木 : ki (pohon)</p>
        <p>金 : kane (emas / uang)</p>
        <p>土 : tsuchi (tanah)</p>
        <p>風 : kaze (angin)</p>
        <p>日 : hi / nichi (hari / matahari)</p>
        <p>月 : tsuki (bulan)</p>
        <p>星 : hoshi (bintang)</p>
        <p>雪 : yuki (salju)</p>
        <p>雨 : ame (hujan)</p>
        <p>子 : ko (anak)</p>
        <p>父 : chichi (ayah)</p>
        <p>母 : haha (ibu)</p>
        <p>兄 : ani (kakak laki-laki)</p>
        <p>弟 : otooto (adik laki-laki)</p>
        <p>姉 : ane (kakak perempuan)</p>
        <p>妹 : imooto (adik perempuan)</p>
        <p>友 : tomo (teman)</p>
        <p>女 : onna (perempuan)</p>
        <p>男 : otoko (laki-laki)</p>
        <p>山 : yama (gunung)</p>
        <p>川 : kawa (sungai)</p>
        <p>海 : umi (laut)</p>
        <p>車 : kuruma (mobil)</p>
        <p>電 : den (listrik)</p>
        <p>道 : michi (jalan)</p>
        <p>駅 : eki (stasiun)</p>
        <p>町 : machi (kota)</p>
        <p>日本 : nihon (Jepang)</p>
        <p>空 : sora (langit)</p>
        <p>雲 : kumo (awan)</p>
        <p>光 : hikari (cahaya)</p>
        <p>時 : toki (waktu / jam)</p>
        <p>年 : toshi (tahun)</p>
        <p>先 : saki (depan / sebelumnya)</p>
<p>生 : sei / ikiru (hidup)</p>
<p>校 : kou (sekolah)</p>
<p>学 : gaku (belajar)</p>
<p>名 : na (nama)</p>
<p>本 : hon (buku / asal)</p>
<p>大 : oo(kii) (besar)</p>
<p>小 : chii(sai) (kecil)</p>
<p>中 : naka (tengah)</p>
<p>上 : ue (atas)</p>
<p>下 : shita (bawah)</p>
<p>左 : hidari (kiri)</p>
<p>右 : migi (kanan)</p>
<p>手 : te (tangan)</p>
<p>足 : ashi (kaki)</p>
<p>目 : me (mata)</p>
<p>口 : kuchi (mulut)</p>
<p>耳 : mimi (telinga)</p>
<p>心 : kokoro (hati / perasaan)</p>
<p>体 : karada (tubuh)</p>
<p>魚 : sakana (ikan)</p>
<p>肉 : niku (daging)</p>
<p>米 : kome (beras)</p>
<p>茶 : cha (teh)</p>
<p>食 : shoku / taberu (makan)</p>
<p>飲 : nomu (minum)</p>
        <p>花 : hana (bunga)</p>
<p>草 : kusa (rumput)</p>
<p>木 : ki (pohon)</p>
<p>竹 : take (bambu)</p>
<p>石 : ishi (batu)</p>
<p>金 : kane (emas / uang)</p>
<p>銀 : gin (perak)</p>
<p>鉄 : tetsu (besi)</p>
<p>紙 : kami (kertas)</p>
<p>糸 : ito (benang)</p>
<p>犬 : inu (anjing)</p>
<p>猫 : neko (kucing)</p>
<p>鳥 : tori (burung)</p>
<p>馬 : uma (kuda)</p>
<p>牛 : ushi (sapi)</p>
<p>虫 : mushi (serangga)</p>
<p>魚 : sakana (ikan)</p>
<p>貝 : kai (kerang)</p>
<p>人 : hito (orang)</p>
<p>名 : na (nama)</p>
<p>友 : tomo (teman)</p>
<p>家 : ie (rumah)</p>
<p>門 : mon (gerbang)</p>
<p>国 : kuni (negara)</p>
<p>町 : machi (kota kecil)</p>
<p>村 : mura (desa)</p>
<p>市 : shi (kota besar)</p>
<p>校 : kou (sekolah)</p>
<p>教 : oshieru / kyou (mengajar)</p>
<p>室 : shitsu (ruangan)</p>
<p>店 : mise (toko)</p>
<p>本 : hon (buku / asal)</p>
<p>文 : bun (kalimat)</p>
<p>字 : ji (huruf)</p>
<p>語 : go (bahasa)</p>
<p>英 : ei (Inggris)</p>
<p>話 : hanasu (berbicara)</p>
<p>聞 : kiku (mendengar)</p>
<p>読 : yomu (membaca)</p>
<p>書 : kaku (menulis)</p>
<p>見 : miru (melihat)</p>
<p>買 : kau (membeli)</p>
<p>売 : uru (menjual)</p>
<p>行 : iku (pergi)</p>
<p>来 : kuru (datang)</p>
<p>帰 : kaeru (pulang)</p>
<p>乗 : noru (naik kendaraan)</p>
<p>歩 : aruku (berjalan)</p>
<p>走 : hashiru (berlari)</p>
<p>立 : tatsu (berdiri)</p>
<p>休 : yasumu (istirahat)</p>
<p>入 : hairu (masuk)</p>
<p>出 : deru (keluar)</p>
<p>開 : hiraku / aku (membuka)</p>
<p>閉 : tojiru / shimaru (menutup)</p>
<p>朝 : asa (pagi)</p>
<p>昼 : hiru (siang)</p>
<p>夜 : yoru (malam)</p>
<p>今 : ima (sekarang)</p>
<p>前 : mae (sebelum / depan)</p>
<p>後 : ato (setelah / belakang)</p>
<p>毎 : mai (setiap)</p>
<p>週 : shuu (minggu)</p>
<p>月 : tsuki / getsu (bulan)</p>
<p>年 : toshi / nen (tahun)</p>
<p>時 : toki / ji (waktu / jam)</p>
<p>分 : fun / bun (menit / bagian)</p>
<p>半 : han (setengah)</p>
<p>高 : takai (tinggi / mahal)</p>
<p>安 : yasui (murah / aman)</p>
<p>新 : atarashii (baru)</p>
<p>古 : furui (lama)</p>
<p>長 : nagai (panjang)</p>
<p>短 : mijikai (pendek)</p>
<p>多 : ooi (banyak)</p>
<p>少 : sukunai (sedikit)</p>
<p>白 : shiro (putih)</p>
<p>黒 : kuro (hitam)</p>
<p>赤 : aka (merah)</p>
<p>青 : ao (biru)</p>
<p>黄 : ki (kuning)</p>
<p>色 : iro (warna)</p>
<p>天 : ten (langit)</p>
<p>気 : ki (energi / suasana)</p>
<p>電 : den (listrik)</p>
<p>音 : oto (suara)</p>
<p>楽 : tanoshii / raku (menyenangkan / musik)</p>
<p>歌 : uta (lagu)</p>
<p>絵 : e (gambar)</p>
<p>画 : ga (lukisan / gambar)</p>
<p>写真 : shashin (foto)</p>
<p>映 : utsuru (memantulkan / film)</p>
<p>画 : eiga (film)</p>




        <br>
<br>
<h5><b>Contoh Penggunaan Kanji dalam Kalimat:</b></h5>
<ul>
    <li>日本へ行きます (にほんへいきます) - Saya akan pergi ke Jepang.</li>
    <li>学校は楽しいです (がっこうはたのしいです) - Sekolah itu menyenankan.</li>
    <li>私は学生です (わたしはがくせいです) - Saya adalah seorang siswa.</li>
</ul>

        <br>
        <h5><b>Referensi</b><h5>
        <p>1. Nagano, Tadashi (1994). Nihongo hyōgenhō (日本語表現法). Tamagawa University Press. ISBN 4-4721-0431-8.</p>
        <p>2. TB kaigai guide book henshūbu, ed. (1989). Illustrated Japanese character Lawrence B. Greenberg (penerjemah). JTB Nihon Kōtsū Kōsha Shuppan Jigyōkyoku. ISBN 4-5330-1359-7.</p>
        <p>3. Minoda, Masaharu (2005). Shōgaku kanji raku raku masutā 6-nen sei (小学漢字らくらくマスター 6年生). Tamagawa University Press. ISBN 4-4720-5883-9.</p>
        <p>4. Tamura, Hideyuki (2007). Nihongo ryoku no migaki-kata: kanken nanka ukeruna! (日本語力の磨き方: 漢検なんか受けるな!). PHP. ISBN 4-5696-9652-X.</p>
        <br>

        <h5><b>Bacaan Lanjutan</b></h5>
        <p>- DeFrancis, John (1990). The Chinese Language: Fact and Fantasy. Honolulu: University of Hawaii Press. ISBN 0-8248-1068-6.</p>
        <p>- Hadamitzky, W., and Spahn, M., (1981) Kanji and Kana, Boston: Tuttle.</p>
        <p>- Hannas, William. C. (1997). Asia's Orthographic Dilemma. Honolulu: University of Hawaii Press. ISBN 0-8248-1892-X (paperback); ISBN 0-8248-1842-3(hardcover).</p>
        <p>- www.japan-guide.com</p>
        <p>- Kaiser, Stephen (1991). Introduction to the Japanese Writing System. In Kodansha's Compact Kanji Guide. Tokyo: Kondansha International. ISBN 4-7700-1553-4.</p>
        <p>- Morohashi Tetsuji, 大漢和辞典/Daikanwajiten (Comprehensive Chinese-Japanese Dictionary) 1984-1986. Tokyo: Taishukan (generally regarded as the most authoritative kanji dictionary)</p>
        <p>- Mitamura, Joyce Yumi and Mitamura, Yasuko Kosaka (1997). Let's Learn Kanji. Tokyo: Kondansha International. ISBN 4-7700-2068-6.</p>
        <p>- Unger, J. Marshall (1996). Literacy and Script Reform in Occupation Japan: Reading Between the Lines. ISBN 0-19-510166-9</p>

        
        `;
    
    
     } else if (page === 'latihan') {
            showLatihanMenu(); // bukan tampilkanSoal langsung
        
        
        } else if (page === 'tentang') {
            content.innerHTML = `
                <h1>Tentang Aplikasi Ini</h1>
                <p>Aplikasi ini dibuat untuk membantu kamu belajar bahasa Jepang dasar melalui materi dan latihan soal yang interaktif. Selamat belajar!</p>
                <p class="mt-4">Developer: <strong>AOZORA</strong></p>
                
        
                <h1 class="mt-4">Contact Saya</h1>
                <p>Jika ada pertanyaan atau feedback, jangan ragu untuk menghubungi saya!</p>
                <p><strong>Nama :</strong> Aozoera</p>
                <p><strong>Email :</strong> <a href="mailto:khoirulimann15@gmail.com">aozoera</a></p>
                <p><strong>No WA :</strong> <a href="https://wa.me/6287826108793" target="_blank">+62 878-2610-8793</a></p>
                <p><strong>Instagram :</strong> <a href="https://www.instagram.com/yuu_aozora" target="_blank">@yuu_aozora</a></p>
                <br>
                <button class="btn btn-secondary" onclick="showContent('dashboard')">Kembali ke Dashboard</button>
            `;
        }
        
}

function showLatihanMenu() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Pilih Kategori Latihan</h2><hr>
        <br>
        <div class="d-grid gap-2">
            <button class="btn btn-dark" onclick="mulaiLatihan('hiragana')">Hiragana</button>
            <button class="btn btn-dark" onclick="mulaiLatihan('katakana')">Katakana</button>
            <button class="btn btn-dark" onclick="mulaiLatihan('kanji')">Kanji</button>
            <button class="btn btn-dark" onclick="mulaiLatihan('kosakata')">Kosakata</button>
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
        let pilihanHTML = '';
        soalSekarang.pilihan.forEach(pilihan => {
            pilihanHTML += `<button class="btn btn-outline-dark m-2" onclick="cekJawaban('${pilihan}')">${pilihan}</button>`;
        });

        const progress = Math.round((indeksSoal / dataKategori.length) * 100);

        content.innerHTML = `
            <h2>${kategoriDipilih.toUpperCase()} - Soal ${indeksSoal + 1} dari ${dataKategori.length}</h2>
            <div class="progress mb-3">
                <div class="progress-bar bg-dark" role="progressbar" style="width: ${progress}%;" aria-valuenow="${progress}" aria-valuemin="0" aria-valuemax="100">${progress}%</div>
            </div>
            <p class="mb-3">${soalSekarang.soal}</p>
            <div class="mb-4">${pilihanHTML}</div>
            <p>Skor saat ini: <strong>${skor}</strong></p>
            <div class="mt-4">
                <button class="btn btn-secondary" onclick="showLatihanMenu()">Kembali</button>
            </div>
        `;
    } else {
        tampilkanHasil();
    }
}



function cekJawaban(pilihanUser) {
    const soalSekarang = kuisData[kategoriDipilih][indeksSoal];
    if (pilihanUser === soalSekarang.jawaban) {
        skor++;
        alert("Benar!");
    } else {
        alert(`Salah! Jawaban yang benar: ${soalSekarang.jawaban}`);
    }
    indeksSoal++;
    tampilkanSoal();
}

function tampilkanHasil() {
    const content = document.getElementById('content');
    const total = kuisData[kategoriDipilih].length;
    content.innerHTML = `
        <h2>Latihan ${kategoriDipilih.toUpperCase()} Selesai!</h2>
        <p>Skor akhir kamu: <strong>${skor} dari ${total}</strong></p>
        <p>Persentase: <strong>${Math.round((skor / total) * 100)}%</strong></p>
        <div class="mt-4">
            <button class="btn btn-success" onclick="mulaiLatihan('${kategoriDipilih}')">Ulangi Kategori</button>
            <button class="btn btn-secondary ms-2" onclick="showLatihanMenu()">Kembali</button>
        </div>
    `;
}



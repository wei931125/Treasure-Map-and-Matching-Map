/* =================資料設定================= */
// 第一階段：畫間尋寶 
const stage1Data = [
    { artwork: "《賞花鍾馗》", hint: "請在畫中找出大師用來隱喻「世俗的權力與金錢虛幻不實(如水中月、鏡中花)」的物品。", answer: "鍾馗一手緊握著的劍鞘", 
      imgSrc: "賞花鍾馗.png", options: ["鍾馗一手緊握著的劍鞘", "頭戴的金帽", "身穿的紅袍", "遠處的山水景觀"],
      explanation: "大師以此隱喻：世俗的權力與金錢，都不過是水中月、鏡中花，虛幻不實，提醒世人切勿貪圖不義之財，一輩子心安身健才是真正的福氣。" },
    { artwork: "《遊春圖》", hint: "畫面的中心是帝王，請找出與之產生對比，藉此呈現出「國泰民安春日祥和」的百姓活動。", answer: "對角處聚集觀看鬥雞的平民", 
      imgSrc: "遊春圖.png", options: ["騎白馬的帝王", "隨行的帶刀護衛", "華麗的宮殿建築", "對角處聚集觀看鬥雞的平民"],
      explanation: "畫面中權貴與平民的強烈對比，不僅使畫面富有張力，更呈現出國泰民安的春日祥和。" },
    { artwork: "《松林高仕圖》", hint: "請找出半隱蔽於松樹之下，增添畫面活潑逗趣氛圍的動物。", answer: "隱蔽的白鶴", 
      imgSrc: "松林高仕圖.png", options: ["隱蔽的白鶴", "盤旋的飛鷹", "水中的游魚", "草叢中的野兔"],
      explanation: "畫面採「一河兩岸式」構圖，一隻白鶴半隱蔽於松樹下活潑逗趣；畫中更以松、竹、梅象徵文人的高貴氣節。" },
    { artwork: "《霜秋雅遊》", hint: "除了彈琴的鍾馗與聆聽的鍾馗妹，請找出前方正在營造仙境意境的隨從。", answer: "正在焚燒薰香的小鬼", 
      imgSrc: "霜秋雅遊.png", options: ["正在焚燒薰香的小鬼", "負責撐傘的侍女", "牽著馬匹的童子", "吹奏玉笛的仙人"],
      explanation: "前方正在焚燒薰香的小鬼與遠景被染紅的山林景物，在雲霧裊裊中，讓鍾馗宛如遺世獨立的文人雅士，充滿仙境意境。" },
    { artwork: "《鍾馗戲鶴圖》", hint: "這幅畫中的鍾馗展現了極其隨意、自在的氣息，請找出他用來喝酒的器具。", answer: "鍾馗褪去烏紗帽，左手握著的酒杯", 
      imgSrc: "鍾馗戲鶴圖.png", options: ["精美的青花瓷壺", "鍾馗褪去烏紗帽，左手握著的酒杯", "地上的巨大酒甕", "掛在腰間的酒葫蘆"],
      explanation: "鍾馗褪去了烏紗帽，左手握酒杯，右手持著象徵「事事如意」的柿子，展現極其隨意、自在的氣息。" },
    { artwork: "《鍾馗戲鶴圖》", hint: "這項物品原本是古代大臣上朝面聖時所持的工具，鍾馗卻隨意地將它放在腳邊，請找出它。", answer: "放入鞋履中的奏板(笏板)", 
      imgSrc: "鍾馗戲鶴圖.png", options: ["丟在地上的官帽", "折斷的佩劍", "放入鞋履中的奏板(笏板)", "散落的皇帝聖旨"],
      explanation: "奏板又稱笏板，鍾馗身為「賜福鎮宅聖君」，手持奏板象徵其具備上天授與的權力，向玉皇大帝請旨以除妖降魔。" },
    { artwork: "《鎮宅納福 ‧ 祛邪真君鍾馗》", hint: "請找出畫面中伴隨在鍾馗身旁，強烈凸顯正氣驅邪寓意的神獸。", answer: "象徵吉犬臨門的神獸犬兒", 
      imgSrc: "鎮宅納福 ‧ 祛邪真君鍾馗.png", options: ["威風凜凜的石獅", "象徵吉犬臨門的神獸犬兒", "盤旋的青龍", "展翅的鳳凰"],
      explanation: "鍾馗正襟圍坐在大石上，身旁伴隨象徵「吉犬臨門」的神獸犬兒，強烈凸顯其正氣驅邪的寓意。" },
    { artwork: "《納福雙壽祛邪圖》", hint: "請在畫中找出象徵著「執劍福來，福在眼前」吉祥寓意的動物。", answer: "鍾馗身後跟著的兩隻蝙蝠", 
      imgSrc: "納福雙壽祛邪圖.png", options: ["樹枝上的喜鵲", "草地上的梅花鹿", "鍾馗身後跟著的兩隻蝙蝠", "池塘裡的錦鯉"],
      explanation: "鍾馗手持鋒芒寶劍，身後跟著兩隻蝙蝠，象徵著「執劍福來」，福在眼前的吉祥寓意。" },
    { artwork: "《福祿雙全》", hint: "畫面中有神獸麒麟相襯，請找出另一側比喻「福壽綿綿」的人物。", answer: "獻上長壽酒與王母娘娘蟠桃的麻姑", 
      imgSrc: "福祿雙全.png", options: ["手持拂塵的太上老君", "獻上長壽酒與王母娘娘蟠桃的麻姑", "笑口常開的彌勒佛", "托著淨瓶的觀音"],
      explanation: "麻姑獻上長壽酒與王母娘娘的蟠桃，比喻福壽綿綿。展現了只要心地光明正大，萬生自然會受到護佑的哲思。" },
    { artwork: "《秋嬉賞菊》", hint: "大師將豐富典雅的設色相融合，請找出畫面中除了人物以外，營造歲月靜好的兩種植物/景觀。", answer: "畫面中的芭蕉與太湖石", 
      imgSrc: "秋嬉賞菊.png", options: ["畫面中的芭蕉與太湖石", "盛開的牡丹與涼亭", "飄落的楓葉與小橋", "挺拔的青松與瀑布"],
      explanation: "夏爺爺巧妙地將芭蕉、太湖石與豐富典雅的設色相融合，情景交融，惟妙惟肖地帶領我們走入歲月靜好之中。" }
];

// 第二階段：禪意連線大題庫 (20 題)
const stage2Data = [
    { imgSrc: "鍾馗（接地氣的神尊）.png", meaning: "介於人格跟神格之間最接地氣的神尊。", explanation: "【鍾馗】在中國圖像傳統中，屬於釋道佛畫的範疇，是介於人格跟神格之間最接地氣的神尊。" },
    { imgSrc: "人生八雅（琴棋書畫詩酒花茶）.png", meaning: "中國傳統文化中的「人生八雅」。", explanation: "【琴、棋、書、畫、詩、酒、花、茶】代表中國傳統文化中的人生八雅，大師將其融入畫中，翻轉了鍾馗彪形大漢的傳統樣貌。" },
    { imgSrc: "柿子（事事如意）.png", meaning: "象徵「事事如意」。", explanation: "【柿子】在東方傳統美學與諧音寓意中，象徵著「事事如意」。" },
    { imgSrc: "奏板  笏板（上天授與的權力）.png", meaning: "象徵具備上天授與的權力，向玉皇大帝請旨以除妖降魔。", explanation: "【奏板（笏板）】原是古代大臣上朝面聖的工具，鍾馗手持奏板，象徵其具備上天授與的權力。" },
    { imgSrc: "丹頂鶴與松樹（松鶴延年）.png", meaning: "代表君子之德，更蘊含松鶴延年、長壽吉祥的雙重寓意。", explanation: "【丹頂鶴與松樹】不僅代表著君子之德，更蘊含了松鶴延年、長壽吉祥的雙重文化寓意。" },
    { imgSrc: "緊握劍鞘（隱喻虛幻不實）.png", meaning: "隱喻世俗的權力與金錢虛幻不實，提醒世人切勿貪圖不義之財。", explanation: "【緊握劍鞘】大師以此隱喻：世俗的權力與金錢都是虛幻不實，一輩子心安身健才是真正的福氣。" },
    { imgSrc: "神獸犬兒（吉犬臨門）.png", meaning: "象徵「吉犬臨門」，強烈凸顯正氣驅邪的寓意。", explanation: "【神獸犬兒】伴隨在鍾馗身旁，象徵「吉犬臨門」，強烈凸顯了鎮宅納福、正氣驅邪的寓意。" },
    { imgSrc: "兩隻蝙蝠（執劍福來）.png", meaning: "象徵著「執劍福來」，福在眼前的吉祥寓意。", explanation: "【兩隻蝙蝠】蝙蝠諧音「福」，跟隨在持劍鍾馗身後，象徵著「執劍福來，福在眼前」。" },
    { imgSrc: "兩棵交織的蒼綠松樹（福祿綿延）.png", meaning: "象徵「福祿綿延，好運不斷」。", explanation: "【兩棵交織的蒼綠松樹】從地面蔓延至雲霧外，展現了生生不息的意象，象徵「福祿綿延，好運不斷」。" },
    { imgSrc: "雙手合十的鍾馗（虔誠祈福）.png", meaning: "收起殺戮之氣，呈現虔誠祈福的樣態。", explanation: "【雙手合十的鍾馗】有別於傳統武將形象，紅衣鍾馗將寶劍置於胸前雙手合十，呈現虔誠祈福的樣態。" },
    { imgSrc: "神獸麒麟（祥瑞與權貴）.png", meaning: "中國古代神話傳說中的傳統祥瑞，是吉祥之寶與權貴的象徵。", explanation: "【神獸麒麟】是中國古代神話傳說中的傳統祥瑞，既是吉祥之寶，也是權貴的象徵。" },
    { imgSrc: "麻姑獻上蟠桃／長壽酒（福壽綿綿）.png", meaning: "比喻福壽綿綿。", explanation: "【麻姑獻上蟠桃／長壽酒】麻姑獻壽是傳統吉祥圖案，獻上長壽酒與王母娘娘的蟠桃，比喻福壽綿綿。" },
    { imgSrc: "天人合一（和諧關係）.png", meaning: "東方文化看待人與自然、宇宙的和諧關係。", explanation: "【天人合一】夏爺爺集儒釋道三家大成，只要心地光明正大，讓天地與人合為一體，萬生自然會受到護佑。" },
    { imgSrc: "權貴與平民的強烈對比（春日祥和）.png", meaning: "使畫面富有張力，呈現出國泰民安的春日祥和。", explanation: "【權貴與平民的強烈對比】帝王出巡與觀看鬥雞的平民產生對比，使畫面富有張力，呈現出國泰民安的春日祥和。" },
    { imgSrc: "松、竹、梅（高貴氣節）.png", meaning: "在畫中用來象徵文人的高貴氣節。", explanation: "【松、竹、梅】被稱為歲寒三友，在山水人物畫中常被用來象徵文人雅士的高貴氣節。" },
    { imgSrc: "斧劈皴（山石體積感）.png", meaning: "表現堅硬、稜角分明岩石的技法，常用於描繪乾淨、銳利的山石體積感。", explanation: "【斧劈皴】其運筆如同斧頭劈木，側鋒並重，是中國山水畫中一種表現堅硬、稜角分明岩石的重要技法。" },
    { imgSrc: "界筆（精準繪製）.png", meaning: "傳統繪畫中，用來繪製筆直長線（如樑柱、門窗、欄杆）的特殊畫筆。", explanation: "【界筆】常搭配界尺使用，讓畫家能精準地畫出建築物精細入微、位置遠近相宜的直線。" },
    { imgSrc: "《寒夜雅會》與《秋嬉賞菊》（仿宋人畫風）.png", meaning: "展現了極其細膩的「仿宋人」畫風。", explanation: "【《寒夜雅會》與《秋嬉賞菊》】這兩幅畫作展現了極其細膩的「仿宋人」畫風，將芭蕉、太湖石與豐富典雅的設色相融合。" },
    { imgSrc: "眉眼妝容、髮飾與服飾（宋代柔美情致）.png", meaning: "完美重現了宋代女子的柔美情致。", explanation: "【眉眼妝容、髮飾與服飾】夏爺爺以秀勁的筆法勾勒出仕女們靈活生動的體態，完美重現宋代女子的柔美情致。" },
    { imgSrc: "芭蕉、太湖石與典雅設色（歲月靜好）.png", meaning: "情景交融，惟妙惟肖地帶領觀者走入古代女性清麗、優雅的歲月靜好之中。", explanation: "【芭蕉、太湖石與典雅設色】這些元素的精巧佈局，情景交融，帶領我們穿越時空走入歲月靜好的時光。" }
];

/* =================全域狀態================= */
let finalScoreS1 = 0;
let finalScoreS2 = 0;
let gameStartTime = null; 

/* === 音樂控制邏輯 === */
document.addEventListener("DOMContentLoaded", () => {
    const bgMusic = document.getElementById('bg-music');
    const volumeSlider = document.getElementById('volume-slider');
    const muteBtn = document.getElementById('mute-btn');
    let isMuted = false;

    // 初始音量設定 (0.3，避免一開始太大聲嚇到玩家)
    bgMusic.volume = volumeSlider.value;

    // 滑桿調整音量
    volumeSlider.addEventListener('input', (e) => {
        bgMusic.volume = e.target.value;
        if (bgMusic.volume == 0) {
            muteBtn.innerText = '🔇';
            isMuted = true;
        } else {
            muteBtn.innerText = '🔊';
            isMuted = false;
        }
    });

    // 點擊喇叭圖示切換靜音
    muteBtn.addEventListener('click', () => {
        if (isMuted) {
            // 恢復聲音 (如果滑桿是0，給個預設值 0.3)
            bgMusic.volume = volumeSlider.value > 0 ? volumeSlider.value : 0.3;
            if (volumeSlider.value == 0) volumeSlider.value = 0.3;
            muteBtn.innerText = '🔊';
            isMuted = false;
        } else {
            // 靜音
            bgMusic.volume = 0;
            muteBtn.innerText = '🔇';
            isMuted = true;
        }
    });
});

/* 第一階段變數 */
let currentS1Data = []; 
let s1Index = 0;
let s1Score = 50; 
let s1TimeLeft = 300; 
let s1TimerId = null;

/* 第二階段變數 */
let s2Score = 50; 
let matchedCount = 0;
let selectedLeft = null;
let selectedRight = null;

/* =================工具函式================= */
function shuffleArray(array) {
    let curr = array.length, random;
    while (curr != 0) {
        random = Math.floor(Math.random() * curr);
        curr--;
        [array[curr], array[random]] = [array[random], array[curr]];
    }
    return array;
}

function switchScreen(screenId) {
    document.querySelectorAll('.screen').forEach(el => el.classList.remove('active'));
    setTimeout(() => {
        document.getElementById(screenId).classList.add('active');
    }, 100);
}

function formatTime(seconds) {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
}

/* =================流程控制================= */
function startGame() {
    gameStartTime = Date.now(); // 玩家按下「進入遊戲」時開始計時
    
    // ✅ 補上這兩行：讓遊戲開始時，自動播放背景音樂
    const bgMusic = document.getElementById('bg-music');
    bgMusic.play().catch(e => console.log("等待互動後播放"));

    startStage1();
    switchScreen('stage1-screen');
}

/* --- 第一階段邏輯 --- */
function startStage1() {
    s1Index = 0;
    s1Score = 50; 
    s1TimeLeft = 300; 
    
    // 洗牌邏輯：《鍾馗戲鶴圖》綁定在一起
    const specialGroup = stage1Data.filter(q => q.artwork === "《鍾馗戲鶴圖》");
    const normalQuestions = stage1Data.filter(q => q.artwork !== "《鍾馗戲鶴圖》");
    shuffleArray(specialGroup);
    let pool = [...normalQuestions, specialGroup];
    shuffleArray(pool);
    
    currentS1Data = [];
    pool.forEach(item => {
        if (Array.isArray(item)) {
            currentS1Data.push(...item); 
        } else {
            currentS1Data.push(item);
        }
    });

    document.getElementById('stage1-content').classList.remove('hidden');
    document.getElementById('stage1-result').classList.add('hidden');
    document.getElementById('btn-s1-retry').classList.add('hidden');
    document.getElementById('btn-s1-next').classList.add('hidden');
    
    if (s1TimerId) clearInterval(s1TimerId);
    s1TimerId = setInterval(updateTimerDisplay, 1000);
    
    renderS1Question();
}

function updateTimerDisplay() {
    s1TimeLeft--;
    const timerDisplay = document.getElementById('s1-timer');
    timerDisplay.innerText = formatTime(s1TimeLeft);

    if (s1TimeLeft <= 60) {
        timerDisplay.parentElement.classList.add('warning');
    } else {
        timerDisplay.parentElement.classList.remove('warning');
    }

    if (s1TimeLeft <= 0) {
        timeUp();
    }
}

function timeUp() {
    clearInterval(s1TimerId);
    document.getElementById('s1-timer').innerText = "00:00";
    
    document.getElementById('stage1-content').classList.add('hidden');
    const resultBox = document.getElementById('stage1-result');
    const msg = document.getElementById('s1-result-msg');
    
    resultBox.classList.remove('hidden');
    
    if (s1Score >= 35) {
        finalScoreS1 = s1Score; 
        msg.innerText = `時間到！第一階段結束。得分：${s1Score} / 50`;
        msg.style.color = "var(--secondary-color)";
        document.getElementById('btn-s1-next').classList.remove('hidden');
    } else {
        msg.innerText = `時間到！得分：${s1Score} / 50。分數低於門檻 (35分)，需重新測驗。`;
        msg.style.color = "var(--error-color)";
        document.getElementById('btn-s1-retry').classList.remove('hidden');
    }
}

function renderS1Question() {
    document.getElementById('s1-score').innerText = s1Score;
    document.getElementById('s1-progress').innerText = s1Index + 1;
    document.getElementById('s1-explanation-box').classList.add('hidden');
    document.getElementById('s1-feedback').innerText = "";
    document.getElementById('s1-feedback').style.color = "var(--text-color)";

    const q = currentS1Data[s1Index];
    document.getElementById('s1-artwork-title').innerText = `【畫作】${q.artwork}`;
    document.getElementById('s1-hint').innerText = `提示：${q.hint}`;
    document.getElementById('s1-artwork-img').src = q.imgSrc;

    const optionsContainer = document.getElementById('s1-options');
    optionsContainer.innerHTML = '';
    
    const shuffledOptions = shuffleArray([...q.options]);
    
    shuffledOptions.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'opt-btn';
        btn.innerText = opt;
        btn.onclick = () => handleS1Click(btn, opt, q.answer, q.explanation);
        optionsContainer.appendChild(btn);
    });
}

function handleS1Click(btn, selected, correct, explanation) {
    const feedbackEl = document.getElementById('s1-feedback');
    const explanationBox = document.getElementById('s1-explanation-box');

    document.querySelectorAll('.opt-btn').forEach(b => {
        b.disabled = true;
        if (b.innerText === correct) {
            b.classList.add('correct');
        }
    });

    if (selected === correct) {
        feedbackEl.innerHTML = "✅ 點選正確！<br><br>" + explanation;
        feedbackEl.style.color = "var(--text-color)";
    } else {
        btn.classList.add('wrong'); 
        s1Score = Math.max(0, s1Score - 5);
        document.getElementById('s1-score').innerText = s1Score;
        
        feedbackEl.innerHTML = `❌ 點選錯誤（扣 5 分）。正確解答為：「${correct}」<br><br>${explanation}`;
        feedbackEl.style.color = "var(--error-color)";
    }

    explanationBox.classList.remove('hidden');
    document.getElementById('btn-s1-next-q').classList.remove('hidden');
}

function nextS1Question() {
    s1Index++;
    if (s1Index < currentS1Data.length) { 
        renderS1Question();
    } else {
        endStage1();
    }
}

function endStage1() {
    clearInterval(s1TimerId); 
    
    document.getElementById('stage1-content').classList.add('hidden');
    const resultBox = document.getElementById('stage1-result');
    const msg = document.getElementById('s1-result-msg');
    
    resultBox.classList.remove('hidden');
    
    if (s1Score >= 35) {
        finalScoreS1 = s1Score; 
        msg.innerText = `第一階段完成！得分：${s1Score} / 50`;
        msg.style.color = "var(--secondary-color)";
        document.getElementById('btn-s1-next').classList.remove('hidden');
    } else {
        msg.innerText = `得分：${s1Score} / 50。分數低於門檻 (35分)，需重新測驗。`;
        msg.style.color = "var(--error-color)";
        document.getElementById('btn-s1-retry').classList.remove('hidden');
    }
}

/* --- 第二階段邏輯 --- */
function enterStage2() {
    startStage2();
    switchScreen('stage2-screen');
}

function startStage2() {
    s2Score = 50; 
    matchedCount = 0;
    selectedLeft = null;
    selectedRight = null;
    
    document.getElementById('stage2-content').classList.remove('hidden');
    document.getElementById('stage2-result').classList.add('hidden');
    document.getElementById('btn-s2-retry').classList.add('hidden');
    document.getElementById('btn-s2-next').classList.add('hidden');
    document.getElementById('s2-score').innerText = s2Score;
    document.getElementById('s2-explanation-box').classList.add('hidden');

    const leftCol = document.getElementById('match-left');
    const rightCol = document.getElementById('match-right');
    leftCol.innerHTML = '';
    rightCol.innerHTML = '';

    const leftItems = shuffleArray(stage2Data.map((d, index) => ({ src: d.imgSrc, id: index })));
    const rightItems = shuffleArray(stage2Data.map((d, index) => ({ text: d.meaning, id: index })));

    leftItems.forEach(d => {
        const div = document.createElement('div');
        div.className = 'match-item-img';
        div.dataset.id = d.id;
        const img = document.createElement('img');
        img.src = d.src;
        div.appendChild(img);
        div.onclick = () => handleS2Click(div, 'left');
        leftCol.appendChild(div);
    });

    rightItems.forEach(d => {
        const div = document.createElement('div');
        div.className = 'match-item-text';
        div.innerText = d.text;
        div.dataset.id = d.id;
        div.onclick = () => handleS2Click(div, 'right');
        rightCol.appendChild(div);
    });
}

function handleS2Click(element, side) {
    if (element.classList.contains('matched')) return;

    if (side === 'left') {
        if(selectedLeft) selectedLeft.classList.remove('selected');
        selectedLeft = element;
        selectedLeft.classList.add('selected');
    } else {
        if(selectedRight) selectedRight.classList.remove('selected');
        selectedRight = element;
        selectedRight.classList.add('selected');
    }

    if (selectedLeft && selectedRight) {
        checkS2Match();
    }
}

function checkS2Match() {
    const id1 = selectedLeft.dataset.id;
    const id2 = selectedRight.dataset.id;
    const explanationBox = document.getElementById('s2-explanation-box');
    const feedbackEl = document.getElementById('s2-feedback');

    if (id1 === id2) {
        selectedLeft.classList.remove('selected');
        selectedRight.classList.remove('selected');
        selectedLeft.classList.add('matched');
        selectedRight.classList.add('matched');
        
        const currentData = stage2Data[id1];
        feedbackEl.innerHTML = "✅ 配對成功！<br><br>" + currentData.explanation;
        feedbackEl.style.color = "var(--text-color)";
        explanationBox.classList.remove('hidden');
        
        matchedCount++;
        selectedLeft = null;
        selectedRight = null;

        if (matchedCount === stage2Data.length) {
            setTimeout(endStage2, 2500); 
        }
    } else {
        s2Score = Math.max(0, s2Score - 2.5);
        document.getElementById('s2-score').innerText = s2Score;
        
        selectedLeft.classList.add('error-shake');
        selectedRight.classList.add('error-shake');
        
        feedbackEl.innerHTML = "❌ 意境不符（扣 2.5 分）";
        feedbackEl.style.color = "var(--error-color)";
        explanationBox.classList.remove('hidden');

        setTimeout(() => {
            if(selectedLeft) {
                selectedLeft.classList.remove('selected', 'error-shake');
                selectedLeft = null;
            }
            if(selectedRight) {
                selectedRight.classList.remove('selected', 'error-shake');
                selectedRight = null;
            }
        }, 500);
    }
}

function endStage2() {
    document.getElementById('stage2-content').classList.add('hidden');
    const resultBox = document.getElementById('stage2-result');
    const msg = document.getElementById('s2-result-msg');
    
    resultBox.classList.remove('hidden');
    
    if (s2Score >= 35) {
        finalScoreS2 = s2Score;
        msg.innerText = `第二階段完成！得分：${s2Score} / 50`;
        msg.style.color = "var(--secondary-color)";
        document.getElementById('btn-s2-next').classList.remove('hidden');
    } else {
        msg.innerText = `得分：${s2Score} / 50。分數低於門檻 (35分)，需重新測驗。`;
        msg.style.color = "var(--error-color)";
        document.getElementById('btn-s2-retry').classList.remove('hidden');
    }
}

/* --- 最終結算 --- */
function enterFinalResult() {
    const totalScore = finalScoreS1 + finalScoreS2; 
    document.getElementById('final-score').innerText = totalScore;

    // ✅ 計算總通關耗時並顯示
    if (gameStartTime) {
        const totalSeconds = Math.floor((Date.now() - gameStartTime) / 1000);
        document.getElementById('final-time-text').innerText = formatTime(totalSeconds);
    }

    const titleEl = document.getElementById('final-title');
    const descEl = document.getElementById('final-desc');

    if (totalScore >= 90) {
        titleEl.innerText = "【天人合一 悟道行者】";
        descEl.innerText = "你的慧眼已能看透畫中禪機，不僅識別了傳統文化的精髓，更深刻理解了夏爺爺天人合一的哲思。願這份通透伴隨你的人生旅途。";
    } else if (totalScore >= 70) {
        titleEl.innerText = "【畫境尋幽 雅士】";
        descEl.innerText = "你對東方美學與畫中寓意已有相當的體會。繼續保持對萬物的細緻觀察，你將發掘更多隱藏在藝術背後的生命感悟。";
    } else {
        titleEl.innerText = "【潛力賞畫學徒】";
        descEl.innerText = "悟道之路需要耐心，你已經在傳統文化中踏出了尋寶的第一步，請繼續保持對藝術的熱忱與初衷。";
    }

    switchScreen('result-screen');
}

function resetGame() {
    finalScoreS1 = 0;
    finalScoreS2 = 0;
    gameStartTime = null; // ✅ 重置時間，以便下次遊玩重新計算
    switchScreen('cover-screen');
}
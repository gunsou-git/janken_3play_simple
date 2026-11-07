// 0 = グー, 1 = チョキ, 2 = パー
var names = ["グー", "チョキ", "パー"];

function janken(me) {
    // 相手2人の手をランダムに決める
    var cpu1 = Math.floor(Math.random() * 3);
    var cpu2 = Math.floor(Math.random() * 3);
    console.log("あなた：" + names[me], "相手1：" + names[cpu1], "相手2：" + names[cpu2]);

    // 3人の手を表示
    $(".b").html("あなた：" + names[me]);
    $(".c").html("相手1：" + names[cpu1]);
    $(".d").html("相手2：" + names[cpu2]);

    // ① 3人とも同じ手 → あいこ
    // ② 3人ともバラバラ（グー・チョキ・パーが全部出た）→ あいこ
    if (me === cpu1 && cpu1 === cpu2) {
        $(".a").html("あいこ");
    } else if (me !== cpu1 && cpu1 !== cpu2 && me !== cpu2) {
        $(".a").html("あいこ");
    } else {
        // 自分の手に勝つ手（＝負ける相手の手）を決める
        var loseTo;
        if (me === 0) {
            loseTo = 2; // グーはパーに負ける
        } else if (me === 1) {
            loseTo = 0; // チョキはグーに負ける
        } else if (me === 2) {
            loseTo = 1; // パーはチョキに負ける
        }

        // 相手のどちらかがその手を出していたら負け、いなければ勝ち
        if (cpu1 === loseTo || cpu2 === loseTo) {
            $(".a").html("あなたの負け");
        } else {
            $(".a").html("あなたの勝ち");
        }
    }
}

$(".aa").on("click", function() {
    janken(0); // グー
});

$(".bb").on("click", function() {
    janken(1); // チョキ
});

$(".cc").on("click", function() {
    janken(2); // パー
});

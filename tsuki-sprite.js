// 月ちゃんの ドット絵（トップページと おさんぽゲームで 共通）
// 白くて ふわふわ、耳は茶色、おでこに白いすじ、鼻に そばかす、くるんと巻いた しっぽ
(() => {
    const PAL = {
        k: '#3A2E2A', W: '#F7F2E8', s: '#D6CCBE', o: '#E07A2E', O: '#B4561C',
        e: '#14111C', n: '#14111C', f: '#C9733A', r: '#E8343A'
    };
    const BODY = [
        '................k..k....',
        '...............kokkok...',
        '..kkk.........kooWoook..',
        '.kWWWk........koWWWeok..',
        'kWWsWWk.......kWWWWWfWWn',
        'kWsWWWk......kWWWWWWWkk.',
        '.kWWWWk....krWWWWWWk....',
        '..kWWWkkkkkWWWWWWWWk....',
        '...kWWWWooWWWWWWWWk.....',
        '...kWWWooWWWWWWWWsk.....',
        '...ksWWWWWWWWWWWssk.....'
    ];
    const FRAMES = {
        a: [...BODY,
            '....kWk.kWk...kWk.kWk...',
            '....kWk.kWk...kWk.kWk...',
            '....kk..kk....kk..kk....'],
        b: [...BODY,
            '.....kWk.kWk.kWk.kWk....',
            '....kWk...kWkkWk...kWk..',
            '...kk......kkkk.....kk..'],
        jump: [...BODY,
            '...kWk..kWk..kWk..kWk...',
            '..kWk....kk...kWk..kWk..',
            '..kk...........kk...kk..'],
        sleep: ['', '', '', ...BODY.map(r => r.replace('e', 'k'))]
    };
    // rows を (x, y) から 1マス = 1px で 描く
    function draw(ctx, rows, x = 0, y = 0) {
        rows.forEach((row, r) => [...row].forEach((ch, i) => {
            if (PAL[ch]) { ctx.fillStyle = PAL[ch]; ctx.fillRect(x + i, y + r, 1, 1); }
        }));
    }
    function paint(canvas, rows) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        draw(ctx, rows);
    }
    window.TSUKI = { PAL, FRAMES, W: 24, H: 14, draw, paint };
})();

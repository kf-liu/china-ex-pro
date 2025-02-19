const 图例纵向位置起始 = 450;
const 图例行高 = 50;
const 图例色相起始 = 0;

let 等级们 = [
    '更多 7',
    '五个 6',
    '四个 4',
    '三个 3',
    '两个 2',
    '一个 1',
    '没去过',
];

const 拆分等级文字分数 = (等级) => 等级?.split(' ');
const 提取所有分数 = (等级们) => 等级们?.map((等级) => (parseInt(拆分等级文字分数(等级)?.pop()) || 0)).sort();
const 获取分数跨度 = (等级们) => {
    const 所有分数 = 提取所有分数(等级们);
    return 所有分数?.length ? 所有分数.pop() - 所有分数[0] : 0;
};

const 更新等级 = () => {
    const 等级数量 = 等级们?.length;
    const 分数跨度 = 获取分数跨度(等级们);
    如何做爱元素.style.setProperty('--level-colors-range', 分数跨度);
    const 色相步幅 = 360 / 分数跨度;

    等级样式 = '<style>';

    // 图例
    let 图例纵向位置 = 图例纵向位置起始;
    let 等级图例文档 = '';
    // 选择弹窗
    let 等级选择弹窗文档 = '';

    等级们.forEach((等级, 下标) => {
        const [文字, 分数] = 拆分等级文字分数(等级);
        const 图例色相 = 图例色相起始 + (分数跨度 - 分数) * 色相步幅;
        const 颜色 = (下标 === 等级数量 - 1)
            ? "#fff"
            : `hsl(${图例色相}, 100%, 75%)`;

        等级图例文档 += `<path fill="${颜色}" d="M983 ${图例纵向位置}h120v50H983Z"/>`;
        等级图例文档 += `<text x="1000" y=${图例纵向位置 + 35}>${等级}</text>`;
        等级选择弹窗文档 += `<a data-level=${分数 || 0} style="background:${颜色}">${文字}</a>`;
        等级样式 += `#地区 path[level="${分数}"] { fill: ${颜色}; } `;

        图例纵向位置 += 图例行高;
    });
    等级图例文档 += `<path class="边框" d="M983 ${图例纵向位置起始}h120v${图例行高 * 等级数量}H983Z"/>`;
    等级样式 += '</style>';
    等级图例.innerHTML = 等级图例文档;
    设置等级列表.innerHTML = 等级选择弹窗文档;
};

// 更新等级();

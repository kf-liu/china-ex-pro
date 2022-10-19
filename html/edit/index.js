const 表单 = 文档.forms;
const 编辑弹窗样式 = 编辑弹窗.style;

const 配置 = {
    标题: '中国制霸Pro',
    描述: '点击下方编辑和分享自定义标题、等级和分数和描述！',
    等级与分数: 等级们.join(','),
};

const 更新配置 = (新配置) => {
    const 表单结果 = 表单['编辑弹窗表单'];
    表单结果.标题.value = 新配置.标题;
    表单结果.描述.value = 新配置.描述;
    表单结果.等级与分数.value = 新配置.等级与分数;
    标题.innerHTML = 新配置.标题;
    描述.innerHTML = 新配置.描述;
    等级们 = 新配置.等级与分数?.split(',');
    更新等级();
};

const 初始化 = () => {
    const 初始化配置 = {
        标题: 获取查询参数('标题') || 配置.标题,
        描述: 获取查询参数('描述') || 配置.描述,
        等级与分数: 获取查询参数('等级与分数') || 配置.等级与分数,
    };
    更新配置(初始化配置);
};

初始化();

const 编辑配置 = () => {
    编辑弹窗样式.display = 'block';
};

const 取消编辑配置 = () => {
    编辑弹窗样式.display = 'none';
};

const 提交编辑弹窗 = () => {
    const 确认提交 = confirm("即将保存修改");
    if (!确认提交) return;
    const 表单结果 = 表单['编辑弹窗表单'];
    配置.标题 = 表单结果.标题.value;
    配置.描述 = 表单结果.描述.value;
    配置.等级与分数 = 表单结果.等级与分数.value;
    等级们 = 表单结果.等级与分数.value?.split(',');
    更新配置(配置);
    取消编辑配置();
};

const 点击分享按钮 = () => {
    const 链接 = 生成查询参数完整链接(配置);
    if (复制(链接)) {
        alert('链接已复制，快去分享转发吧！（目前链接中仅支持分享模板，可以和保存后的图片搭配使用，效果更佳哦）');
    } else {
        alert(`${链接}，以上链接复制失败，请重试`);
    };
};

添加事件监控(编辑按钮, 'click', 编辑配置);

添加事件监控(提交编辑弹窗按钮, 'click', 提交编辑弹窗);

添加事件监控(取消编辑弹窗按钮, 'click', 取消编辑配置);

添加事件监控(分享按钮, 'click', 点击分享按钮);

const 获取查询参数 = (variable) => {
    var query = decodeURIComponent(window.location.search.substring(1));
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return false;
}

const 生成查询参数 = (对象) => encodeURIComponent(Object.keys(对象)
    ?.map((键) => `${键}=${对象[键]}`)
    ?.join('&'));

const 生成查询参数完整链接 = (对象) => `http://china-ex-pro.kfliu.com?${生成查询参数(对象)}`;

const 复制 = (文本) => {
    let flag = false;
    const input = document.createElement('input');
    document.body.appendChild(input);
    input.setAttribute('value', 文本);
    input.select();
    if (document.execCommand('copy')) {
        document.execCommand('copy');
        console.log('复制成功', 文本);
        flag = true;
    }
    document.body.removeChild(input);
    return flag;
};

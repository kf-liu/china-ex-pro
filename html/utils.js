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

function downloadImage(image, url) {
    image.setAttribute("crossOrigin", "anonymous");
    image.src = url
    return new Promise((resolve, reject) => {
        image.onload = function () {
            resolve(image)
        };
    })
};

const 地址生成二维码 = async (地址) => {
    const 二维码地址 = `https://api.qrserver.com/v1/create-qr-code/?data=${地址}`;
    return await downloadImage(二维码图片, 二维码地址);
    // return await fetch(二维码地址);
};

const 对象生成二维码 = async (对象) => {
    return await 地址生成二维码(生成查询参数完整链接(对象));
};

async function createPoster(bgImageUrl, 是否模板) {
    var bgImage = new Image();
    await downloadImage(bgImage, bgImageUrl)
    var imgQrcode = 二维码图片;
    var can = document.createElement('canvas');

    can.setAttribute("crossOrigin", 'Anonymous');
    let ctx = can.getContext("2d");

    can.width = 1134;
    can.height = 1134;
    ctx.fillStyle = '#EFB4B4';
    ctx.fillRect(0, 0, 1134, 1134);

    // 背景图片
    ctx.drawImage(bgImage, 0, 0, 1134, 1134);
    // 二维码
    ctx.lineJoin = "round";
    ctx.lineWidth = 3;
    ctx.fillStyle = '#000';
    ctx.fillRect(33, 是否模板 ? 848 : 918, 是否模板 ? 264 : 204, 是否模板 ? 264 : 204);
    ctx.drawImage(imgQrcode, 35, 是否模板 ? 850 : 920, 是否模板 ? 260 : 200, 是否模板 ? 260 : 200);

    await can.toBlob((res) => {
        const 地址 = URL.createObjectURL(res);
        输出图像.querySelector('img').src = 地址;
        输出图像样式.display = '';
        设置延时(_=>{
            下载文件(地址,`[中国制霸Pro]${+new Date()}.png`);
            如何做爱元素.removeAttribute('data-running');
        },50);
    });
};

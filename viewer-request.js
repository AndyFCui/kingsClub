exports.handler = async (event) => {
    const request = event.Records[0].cf.request;
    const headers = request.headers;
    
    // 获取用户 IP
    const ip = headers['x-forwarded-for'][0].value;
    
    // 使用 AWS IP 范围数据判断区域
    const isChineseIP = await checkIfChineseIP(ip);
    
    // 设置自定义头部用于后续处理
    request.headers['x-country-code'] = [{
        key: 'X-Country-Code',
        value: isChineseIP ? 'CN' : 'US'
    }];
    
    // 设置语言
    request.headers['x-language'] = [{
        key: 'X-Language',
        value: isChineseIP ? 'zh' : 'en'
    }];
    
    return request;
};

async function checkIfChineseIP(ip) {
    // 这里可以使用 IP 地理位置数据库或 AWS IP 范围
    // 简化版本的判断逻辑
    const cnIPRanges = [
        // 中国 IP 范围列表
    ];
    return cnIPRanges.some(range => ipInRange(ip, range));
} 
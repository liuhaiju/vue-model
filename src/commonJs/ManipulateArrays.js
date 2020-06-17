export default {
    // 数组排序,正序
    ArraySort(ArraryValue) {
        let s = ''
        for(let i=0;i<ArraryValue.length;i++) {
            for(let j=0;j<ArraryValue.length-1;j++) {
                if (ArraryValue[j].loan_period > ArraryValue[j + 1].loan_period){ 
                    s = ArraryValue[j]; 
                    ArraryValue[j]=ArraryValue[j+1]; 
                    ArraryValue[j+1]=s; 
                }
            }
        }
        return ArraryValue
    },
    // 生成随机数
    // 生成随机数的范围为min～max-1
    getRndInteger(min, max) {
        let a = min,b=max;
        let c = Math.floor(Math.random() * (b - a)) + min;
        if(Number(c)<10) {
            c = `00${c}`
        }
        if(Number(c)>=10&&Number(c)<100) {
            c = `0${c}`
        }
      return c.toString()
    }
}
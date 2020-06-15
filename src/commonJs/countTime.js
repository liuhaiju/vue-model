// 引入时间戳工具
import moment from 'moment'
export default {
    // 记算时间时，分，秒函数方法
    CalculationTime(time) {
        // 剩余多少小时
        let h = parseInt(time/3600)
        console.log('小时',h)
        // 剩余多少分钟
        let m = parseInt((Math.ceil(time - (h*3600)))/60)
        //剩余多少秒
        let s = Math.ceil(time - (m*60) - (h*3600))

        if(h<10) {
            h = '0'+h
        } else {
            h = h
        }
        if(m<10) {
            m = '0'+m
        } else {
            m = m
        }
        if(s<10) {
            s = '0'+s
        } else {
            s = s
        }
        let params = {
            h: h,
            m: m,
            s: s
        }
        return params
    },
    // 时间戳转换工具，需引入moment工具才可使用[timeValue是必传值，时间戳的数；weishu解析时间戳的位数]
    Timestamp(timeValue,timeFormatValue,weishu) {
        let ConversionValue
        let timeFormat = 'YYYY.MM.DD HH:mm:ss'
        if(timeFormatValue) {
            timeFormat = timeFormatValue
        } else {
            timeFormat = 'YYYY.MM.DD HH:mm:ss'
        }
        if(weishu == 13) {
            ConversionValue = moment(Number(timeValue)).format(timeFormat)
        }else {
            ConversionValue = moment.unix(Number(timeValue)).format(timeFormat)
        }
        return ConversionValue
    },
}
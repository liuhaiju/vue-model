import config from "@/config";
import i18n from "@/utils/i18n/i18n";
// 引入‘计算规则’方法
import countRules from "@/commonJs/countRules.js"
// 引入‘时间戳’方法
import countTime from "@/commonJs/countTime.js"
// 引入‘校验规则’方法
import CheckRule from "@/commonJs/CheckRule.js"
export default {
  // 画图 - 分享商品的图片
  DrawingTwo(params, callback) {

    try {
      // 获取设备像素比
      // let proportion = window.devicePixelRatio
      let proportion = 2
      // var canvas = document.getElementById("canvasTwo")
      var canvas = document.createElement("canvas");
      canvas.style.width = 375 + 'px'
      canvas.style.height = 580 + 'px'
      canvas.width = 375 * proportion;
      canvas.height = 580 * proportion;
      let context = canvas.getContext("2d");
      context.scale(proportion, proportion)
      context.fillStyle = "#f5f5f5"
      context.fillRect(0, 0, 375, 580)
      // 背景图片
      // var img = new Image()
      // img.crossOrigin = "anonymous";
      // img.src = config.Qiniu_URL + 'putonghongbao@3x.png';
      // if (params.language == 'zh') {
      //   img.src = config.Qiniu_URL + 'fenxiangImg-logo%403x.png';
      // } else {
      //   img.src = config.Qiniu_URL + 'fenxianglogoEnglish%403x.png';
      // }

      // img.onload = () => {
        // 将图片画到canvas上面上去
        // 图片x轴的位置
        let xPosition = (canvas.width / proportion / 2) - (82 / 2)
        // context.drawImage(img, xPosition, 25, 82, 24);
        context.font = "18px PingFangSC-Regular";
        context.fillStyle = "#b1b7c5";
        context.textAlign = 'center';
        context.fillText('YBay.com', 187, 68); //显示填充文本
        var imgTwo = new Image()
        imgTwo.crossOrigin = "anonymous";
        // 商品图片
        imgTwo.src = params.prodectImg
        imgTwo.onload = function () {

          // 图片x轴的位置
          let xPositionTwo = (canvas.width / proportion / 2) - (220 / 2)
          context.drawImage(imgTwo, xPositionTwo, 107, 220, 220);
          context.font = "18px PingFangSC-Regular";
          context.fillStyle = "#484d5c";
          context.textAlign = 'center';
          // 商品标题
          let temp = '',
            row = [],
            maxwidth = 300,
            name = params.title
          for (var a = 0; a < name.length; a++) {
            // #将文本按最大宽度换行
            // #判断文本是否超出，是则换行
            (context.measureText(temp).width >= maxwidth) && (row.push(temp), temp = "")
            temp += name[a];
          }
          row.push(temp);
          for (var b = 0; b < row.length; b++) {
            // #按行写入文本
            // #40是行高
            // context.fillText(row[b], 187, 349+40*b,maxwidth);
            if (b > 0) {
              context.textAlign = 'left';
              context.fillText(row[b], 38, 359 + 20 * b, maxwidth);
            } else {
              context.fillText(row[b], 187, 359 + 20 * b, maxwidth);
            }
          }
          context.font = "24px PingFangSC-Regular";
          context.fillStyle = "#f26a3a";
          context.textAlign = 'left';
          // 商品的金额
          let amountNumber = params.amount
          context.fillText(amountNumber, 38, 410);
          let amountWidth = context.measureText(amountNumber).width
          context.font = "13px PingFangSC-Regular";
          // 价格单位
          context.fillText(params.unit, amountWidth + 40, 410);
          context.font = "13px PingFangSC-Regular";
          context.fillStyle = "#b1b7c5";
          context.textAlign = 'left';

          context.fillText(i18n.t('koKRKsyeAWvIkwqf'), 38, 526);

          setTimeout(function () {
            var imgThree = new Image()
            imgThree.crossOrigin = "anonymous";
            imgThree.src = params.shareQRcode
            imgThree.onload = function () {
              context.drawImage(imgThree, 262, 448, 80, 80);
              let base64 = canvas.toDataURL("image/png"); //"image/png" 这里注意一下
              callback(base64)
              // var imgFour = new Image()
              // imgFour.crossOrigin = "anonymous"
              // imgFour.src =config.Qiniu_URL + 'sq-bixin%403x.png';
              // imgFour.onload = function () {
              //   context.drawImage(imgFour, 289, 475, 26, 26);
              //   let base64 = canvas.toDataURL("image/png"); //"image/png" 这里注意一下
              //   callback(base64)

              // }

            }
          }, 0)
        }
      // }
    } catch (error) {
      console.log(error);
    }

  },
  // 画图 - 分享商品的图片
  DrawingThree(params, callback) {
    console.log("获取到的东东",params)
    try {
      // 获取设备像素比
      let proportion = window.devicePixelRatio
      var canvas = document.createElement("canvas");
      canvas.style.width = 375 + 'px'
      canvas.style.height = 580 + 'px'
      canvas.width = 375 * proportion;
      canvas.height = 580 * proportion;
      let canvasWidth = 375
      let canvasHeight = 580
      let context = canvas.getContext("2d");
      context.scale(proportion, proportion)
      context.fillStyle = "#f5f5f5"
      context.fillRect(0, 0, 375, 580)
      // 头部图片
      var img = new Image()
      img.crossOrigin = "anonymous";
      img.src = params.prodectImg
      img.onload = function () {
        context.drawImage(img, 0, 0, 375, 375);
        context.font = "700 18px PingFangSC-Regular";
        context.fillStyle = "#484d5c";
        context.textAlign = 'center';
        context.textBaseline = 'top'
        // context.fillText('YBay.com', canvasWidth/2, 395);
        // 商品标题
        let temp = '',row = [],maxwidth = 335,name = params.title
        for (let a = 0; a < name.length; a++) {
          // #将文本按最大宽度换行
          // #判断文本是否超出，是则换行
          (context.measureText(temp).width >= maxwidth) && (row.push(temp), temp = "")
          temp += name[a];
        }
        row.push(temp);
        for (let b = 0; b < row.length; b++) {
          // #按行写入文本
          // #40是行高
          // context.fillText(row[b], 187, 349+40*b,maxwidth);
          if (b > 0) {
            context.textAlign = 'left';
            context.fillText(row[b], 20, 395 + 20 * b, maxwidth);
          } else {
            context.textAlign = 'left';
            context.fillText(row[b], 20, 395 + 20 * b, maxwidth);
            // context.fillText(row[b], canvasWidth/2, 395 + 20 * b, maxwidth);
          }
        }
        // 商品的金额
        let amountNumber = params.amount
        context.font = "700 24px PingFangSC-Regular";
        context.fillStyle = "#f26a3a";
        context.textAlign = 'left';
        context.fillText(amountNumber, 20, 395+20*row.length+4);
        // 价格单位
        let amountWidth = context.measureText(amountNumber).width
        context.font = "700 13px PingFangSC-Regular";
        context.fillText(params.unit, amountWidth + 20 + 5, 395+20*row.length+4+9);
        var imgTwo = new Image()
        imgTwo.crossOrigin = "anonymous";
        imgTwo.src = params.shareQRcode
        imgTwo.onload = function () {
          context.drawImage(imgTwo, 20, 500+4, 56, 56);
          context.font = "700 13px PingFangSC-Regular";
          context.fillStyle = "#b1b7c5";
          // 二维码说明
          let tempTwo = '',rowTwo = [],maxwidthTwo = 90,nameTwo = i18n.t('koKRKsyeAWvIkwqf')
          for (let a = 0; a < nameTwo.length; a++) {
            (context.measureText(tempTwo).width >= maxwidthTwo) && (rowTwo.push(tempTwo), tempTwo = "")
            tempTwo += nameTwo[a];
          }
          rowTwo.push(tempTwo);
          console.log("获取到的数组",rowTwo)
          for (let b = 0; b < rowTwo.length; b++) {
            // #按行写入文本
            // #40是行高
            // context.fillText(row[b], 187, 349+40*b,maxwidth);
            if (b > 0) {
              context.textAlign = 'left';
              context.fillText(rowTwo[b], 90, 518 + (13+5) * b);
            } else {
              context.fillText(rowTwo[b], 90, 518 + (13+5) * b);
            }
          }
          // let base64 = canvas.toDataURL("image/png"); //"image/png" 这里注意一下
          // callback(base64)
          // 换一下ui右下角图标
          var imgThree = new Image()
          imgThree.crossOrigin = "anonymous";
          imgThree.src = "https://prod.243096.com/bishop/ybay_logo.png"
          imgThree.onload = function () {
            context.drawImage(imgThree, 301, 511, 51, 51);
            let base64 = canvas.toDataURL("image/png"); //"image/png" 这里注意一下
            callback(base64)
          }
        }
      }

    } catch (error) {
      console.log(error);
    }

  },
  // 画图 - 分享商品的图片
  DrawingFour(params, callback) {
    console.log("获取到的东东",params)
    try {
      // 获取设备像素比
      let proportion = window.devicePixelRatio
      var canvas = document.createElement("canvas");
      canvas.style.width = 375 + 'px'
      canvas.style.height = 560 + 'px'
      canvas.width = 375 * proportion;
      canvas.height = 560 * proportion;
      let canvasWidth = 375
      let canvasHeight = 560
      let context = canvas.getContext("2d");
      context.scale(proportion, proportion)
      // 头部图片
      let img = new Image()
      img.crossOrigin = "anonymous";
      img.src = "https://prod.243096.com/leverage/bg@3x.png"
      img.onload = function () {
        context.drawImage(img, 0, 0, canvasWidth, canvasHeight);
        context.font = "600 19px PingFangSC-Regular";
        context.fillStyle = "#ffe99c";
        context.textAlign = 'center';
        context.textBaseline = 'top'
        context.fillText(Number(params.CumulativeProfitAndLoss)<0?i18n.t('ZeyZZBVTnjXTOMxFt'):i18n.t('BluycdxHLNahMllTd'), canvasWidth/2, 204, canvasWidth);
        let imgTwo = new Image()
        imgTwo.crossOrigin = "anonymous";
        imgTwo.src = "https://prod.243096.com/leverage/baidi@3x.png"
        imgTwo.onload = function () {
            context.drawImage(imgTwo, (canvasWidth-353)/2, 236, 353, 313);
            context.font = "13px PingFangSC-Regular";
            context.fillStyle = "#484d5c";
            context.fillText(i18n.t('QMCKalIFMspEUlzJDTW'), canvasWidth/2, 269);
            context.font = "600 42px PingFangSC-Regular";
            context.fillStyle = Number(params.CumulativeProfitAndLoss)<0?"#f26a3a":"#30c28b";
            context.fillText(countRules.Multiplication(params.CumulativeProfitAndLoss,100)+'%', canvasWidth/2, 291);
            context.font = "13px PingFangSC-Regular";
            context.textAlign = 'left';
            context.fillStyle = "rgba(72,77,92,0.8)";
            context.fillText(params.leverLittleTitle, 55, 373);
            context.fillText(params.date, 55, 396);
            context.textAlign = 'right';
            context.fillText(i18n.t("duopWIzSKeNRfLIjPA"), (canvasWidth-55), 373);
            context.fillText(params.CurrentPrice, (canvasWidth-55), 396);
            let imgThree = new Image()
            imgThree.crossOrigin = "anonymous"
            imgThree.src = "https://prod.243096.com/leverage/fenxiangImg-logo@3x.png"
            imgThree.onload = function () {
                context.drawImage(imgThree, 50, 471, 44, 44);
                context.font = "14px PingFangSC-Regular";
                context.textAlign = 'left';
                context.fillStyle = "#484d5c";
                context.fillText(i18n.t("LgafKQOXsIvNIWYTE"), 107, 473);
                context.font = "300 12px PingFangSC-Regular";
                context.fillText(i18n.t("miNWuWOQTmdjAquuTGy"), 107, 497,168);
                let imgFour = new Image()
                imgFour.crossOrigin = "anonymous"
                imgFour.src = "https://prod.243096.com/leverage/bitmap@3x.png"
                imgFour.onload = function () {
                    context.drawImage(imgFour, 275, 464, 50, 51);
                    let base64 = canvas.toDataURL("image/png"); //"image/png" 这里注意一下
                    callback(base64)
                }
            }
        }
      }

    } catch (error) {
      console.log(error);
    }
  },
  // 画图 - 走势图
  // 折线图
  paintingCanvasThree() {
    // 获取设备像素比
    let proportion = window.devicePixelRatio
    let canvasThree = document.getElementById("canvasThree");
    // 设置canvas的css宽高
    canvasThree.style.width = (window.innerWidth-32)+'px'
    canvasThree.style.height = 150+'px'
    // 设置canvas的画板宽高
    canvasThree.width = (window.innerWidth-32)*proportion
    canvasThree.height = 150*proportion
    // 可见区域的宽度
    let visibleX = (window.innerWidth-32)
    let visibleY = 150
    let ctxThree = canvasThree.getContext('2d');
    // 设置画板的显示比例
    ctxThree.scale(proportion, proportion)
    // 坐标轴x坐标文案	
    // let xText = this.interest_period_ship_info[0].interest_chat_info.chat_point_list
    let xText = this.Current_profit_and_loss_analysis.profit_chart_info.chart_point_list
    //==============================获取y轴坐标的参数--以下============================
    // let DataInformation = this.interest_period_ship_info[0].interest_chat_info
    // 对象参数，参数内包含，最小值坐标和最大值坐标
    let DataInformation = this.Current_profit_and_loss_analysis.profit_chart_info
    // y坐标轴,点与点之间的距离
    let yspacing = countRules.division(countRules.Subtraction(DataInformation.max_profit_rate,DataInformation.min_profit_rate),4)
    //坐标轴y坐标文案
    let ydata = []
    // 当（最高点-最低点）为0时
    if(yspacing==0) {
        for(let i=0;i<2;i++) {
            let a = ''
            if(i==0) {
                a = 0
            } else {
                a = countRules.addition(DataInformation.min_profit_rate,countRules.Multiplication(yspacing,i))
                a = CheckRule.DecimalDown(a,6)
                a = countRules.Multiplication(a,100) + '%'
            }
            ydata.push(a)
        }
    } else {
        for(let i=0;i<5;i++) {
            // y轴每个点的坐标,从低到高
            let a = countRules.addition(DataInformation.min_profit_rate,countRules.Multiplication(yspacing,i))
            a = CheckRule.DecimalDown(a,6)
            a = countRules.Multiplication(a,100) + '%'
            ydata.push(a)
        }
    }
    //==============================获取y坐标间隔--以上=============================
    // 坐标系‘原点’,x轴位置
    let startX = 45;
    // 坐标系y轴的长度
    let startY = visibleY-28;
    // 顶部边界点向下移动的差值
    let marginTop = 7
    // ==============================获取坐标点的集合==================================
    // 折线相连点的结合
    let point = []
    // x轴坐标结合
    let xCoordinateSet = []
    // y轴坐标集合
    let yCoordinateSet = []
    // 判断x坐标的长度
    if(xText.length!==1) {
      for(let i=0;i<xText.length;i++) {
          // 坐标点x轴的间距
          // 间距 = 横坐标单个内容的长度 + (横坐标的总长度 - 横坐标单个内容的长度*横坐标的数量)/(两两横坐标的间距数量)
          // 高精度的计算
          let xSpacing = ''
          let a = countRules.Subtraction(visibleX,startX)
          a = countRules.Subtraction(a,countRules.Multiplication(ctxThree.measureText(xText[i].snap_at).width,xText.length))
          a = countRules.division(a,xText.length-1)
          a = countRules.addition(ctxThree.measureText(xText[i].snap_at).width,a)
          xSpacing = a
          if(i==0) {
              xCoordinateSet.push(0)
          }
          if(i>0&&i<(xText.length-1)) {
              let xlength = xSpacing*i
              xCoordinateSet.push(xlength)
          }
          if(i==(xText.length-1)) {
              let xlength = (visibleX-6-startX)
              xCoordinateSet.push(xlength)
          }
          // 折线图y点的坐标
          let CoordinatePointsY = xText[i].daliy_profit_rate
          // 与原点相差的大小
          CoordinatePointsY = countRules.Subtraction(CoordinatePointsY,DataInformation.min_profit_rate)
          // 与原点相差的距离
          if(yspacing!=0) {
              // 坐标是原点坐标的几倍距离
              let multiple = countRules.division(CoordinatePointsY,yspacing)
              // 纵坐标的总长度的四分之一是多少
              // yLength = (startY-marginTop)/4
              let yLength = countRules.division(countRules.Subtraction(startY,marginTop),4)
              CoordinatePointsY = multiple*yLength
              if(multiple == 0) {
                  CoordinatePointsY = 0
              }
          } else {
              CoordinatePointsY = startY - marginTop
          }
          yCoordinateSet.push(CoordinatePointsY)
          point.push([xCoordinateSet[i],yCoordinateSet[i]])
      }
    } else {
      // 当x坐标的长度为1时
      let xlength = (visibleX-6-startX)
      let CoordinatePointsY = startY - marginTop
      point = [[0,CoordinatePointsY],[xlength,CoordinatePointsY]]
    }
    //建立坐标系
    function creat(){
      //=======y轴======
      // beginPath() 方法开始一条路径，或重置当前的路径。
      ctxThree.beginPath();
      // 起点
      ctxThree.moveTo(startX,0);
      // 终点
      ctxThree.lineTo(startX,startY);
      ctxThree.strokeStyle = "#ffffff"
      ctxThree.stroke();
      //=======x轴，及每个对应y坐标轴坐标的虚线======
      for(var i = 0; i < ydata.length; i++){
        // y轴上坐标离原点的距离
        // y轴离原点的距离 = y轴最远距离 - 纵坐标间距* 在y轴第几个做标上画线
        // let dashedY = startY - ((startY-marginTop)/(ydata.length-1))*i;
        let dashedY = countRules.Subtraction(startY,countRules.Multiplication(countRules.division(countRules.Subtraction(startY,marginTop),ydata.length-1),i))
        ctxThree.beginPath();
        if(i!=0) {
            // 设置虚线，当为[]时为实线
            ctxThree.setLineDash([1]);
        } else {
            ctxThree.setLineDash([]);
        }
        // 起点
        ctxThree.moveTo(startX,dashedY);
        // 终点，visibleX可见区域的最大宽度
        ctxThree.lineTo(visibleX,dashedY);
        // stroke() 方法会实际地绘制出通过 moveTo() 和 lineTo() 方法定义的路径。默认颜色是黑色
        ctxThree.strokeStyle = "#ebebeb"
        ctxThree.stroke();
      }
    }
    //填充横纵坐标系，标尺
    function insert(){
      // 坐标轴的原点
      // 原点横坐标
      let x = 0;
      // 原点纵坐标
      let y = startY;
      // ===================纵坐标填充
      // 纵坐标间距
      // ySpacing = startY/(ydata.length-1)
      let ySpacing = countRules.division(countRules.Subtraction(startY,marginTop),ydata.length-1)
  //绘制y纵坐标
  for(let i in ydata){
              ctxThree.font = "normal normal normal 10px HelveticaNeue";
              ctxThree.fillStyle ="#b3b3b3"
              ctxThree.textAlign = "end"
              ctxThree.textBaseline = 'middle'
              ctxThree.fillText(ydata[i],startX-10,y);
              // 下一个y坐标的值
              // y = y - ySpacing
              y = countRules.Subtraction(y,ySpacing)
          }
          x = startX
          y = startY+12
          ctxThree.fillText("日期",startX-10,y)
          ctxThree.font = "normal normal normal 10px HelveticaNeue";
          ctxThree.fillStyle ="#b3b3b3"
          ctxThree.textAlign = "start"
          if(xText.length===1) {
              x = visibleX-ctxThree.measureText(xText[0].snap_at).width
              ctxThree.fillText(xText[0].snap_at,x,y)
          } else {
              for(let i in xText) {
                  let xTextContent = xText[i].snap_at
                  // 商品标题
                  let temp='',row=[],maxwidth = 51,name = xTextContent
                  for (let a = 0; a < name.length; a++) {
                      // #将文本按最大宽度换行
                      // #判断文本是否超出，是则换行
                      (ctxThree.measureText(temp).width >= maxwidth)&&(row.push(temp),temp = "")
                      temp += name[a];
                  }
                  row.push(temp);
                  for (var b = 0; b < row.length; b++) {
                      // #按行写入文本
                      if(b>0) {
                          ctxThree.textAlign = 'left';
                          ctxThree.fillText(row[b], x+3, y+12,maxwidth);
                      } else {
                          ctxThree.fillText(row[b], x, y, maxwidth);
                      }
                  }
                  if(row.length==1) {
                      x += ctxThree.measureText(xTextContent).width+(((visibleX-startX)-ctxThree.measureText(xTextContent).width*xText.length)/(xText.length-1)) 
                  } else {
                      x += maxwidth+(((visibleX-startX)-maxwidth*xText.length)/(xText.length-1))
                  }
                  // ctxThree.fillText(xTextContent,x,y)
                  // x += ctxThree.measureText(xTextContent).width+(((visibleX-startX)-ctxThree.measureText(xTextContent).width*xText.length)/(xText.length-1))
              }
          }
      }
      // 添加渐变阴影
      function GradientFill() {
          for(let j=0;j<point.length-1;j++) {
              // 横做标起使位置
              let xFirstEnvoy = point[j][0]+startX
              // '渐变层'两点之间x坐标最大区间
              let ArrayDataOnex = (point[j+1][0]-point[j][0])
              // ‘渐变层’y轴坐标随着x轴递增的区间
              let yLength = (point[j+1][1]-point[j][1])/ArrayDataOnex
              for(let i=0;i<=ArrayDataOnex;i++){
                  let x1 = i+xFirstEnvoy,y1= startY - (point[j][1]+i*yLength)
                  ctxThree.beginPath();
                  ctxThree.setLineDash([]);
                  ctxThree.moveTo(x1,y1);
                  ctxThree.lineTo(x1,startY);
                  // createLinearGradient() 方法创建线性的渐变对象
                  let linear = ctxThree.createLinearGradient(x1,y1,x1,startY);
                  linear.addColorStop(0,"#e2e9ff");
                  linear.addColorStop(0.5,"#e2e9ff");
                  linear.addColorStop(1,"#ffffff");
                  //strokeStyle 属性设置或返回用于笔触的颜色、渐变或模式。
                  ctxThree.strokeStyle= linear; 
                  // ctx.strokeStyle = "#4063d5"
                  ctxThree.stroke();
              }
          }
      }
      //绘制折线
      function Polyline() {
          for(let i=0;i<point.length;i++) {
              //只有第一个点重新开始绘制
            if(i == 0) {
                  ctxThree.beginPath();
              }
            let x = point[i][0];
              let y = point[i][1];
              //转换坐标
              x += startX;
              y = startY - y;
              if(i == (point.length-1)&&point.length!=1){
                  const _k = (y - (startY - point[i - 1][1])) / 45
                  const _b = y - _k * x
                  const _x = x - Math.sqrt(9 / (_k * _k + 1))
                  const _y = _k * _x + _b
                  ctxThree.lineTo(_x, _y);
                  ctxThree.stroke();
                  ctxThree.beginPath();
                  ctxThree.arc(x,y,3, 0, 2*Math.PI,false);
              }
              if(point.length==1) {
                  const _k = (y - (startY - point[i][1])) / 45
                  const _b = y - _k * x
                  const _x = x - Math.sqrt(9 / (_k * _k + 1))
                  const _y = _k * _x + _b
                  ctxThree.lineTo(_x, _y);
                  ctxThree.stroke();
                  ctxThree.beginPath();
                  ctxThree.arc(x,y,3, 0, 2*Math.PI,false);
              }
              ctxThree.lineWidth = 2
              //进行点的内部连接
              if(i != 0 && i !== (point.length-1)) {
                  ctxThree.lineTo(x,y);
              }
              ctxThree.setLineDash([]);
              if(i != (point.length-1)) {
                  ctxThree.moveTo(x,y);
              }
              ctxThree.strokeStyle = "#4063d5";
              //连接边框
              ctxThree.stroke();
          }
      }
      /**该方法用来绘制一个有填充色的圆角矩形 
      *@param cxt:canvas的上下文环境 
      *@param x:左上角x轴坐标 
      *@param y:左上角y轴坐标 
      *@param width:矩形的宽度 
      *@param height:矩形的高度 
      *@param radius:圆的半径 
      *@param fillColor:填充颜色 
      *@param text:填充文本
      *@param Long:三角形的边长
      **/
      function fillRoundRect(ctx, x1, y1, radius, /*optional*/ fillColor, text, Long) {
          //圆的直径必然要小于矩形的宽高          
          // if (2 * radius > width || 2 * radius > height) { return false; }
          let textLength = ctx.measureText(text).width
          let width = textLength+9
          let height = 21
          // y轴顶点坐标
          let VertexCoordinates = countRules.Subtraction(startY,marginTop)
          // 纵坐标的总长度的四分之一是多少
          let yLength = countRules.division(startY,4)
          // y轴4等分时，顶点下第一个点的坐标
          let SecondY = countRules.Subtraction(VertexCoordinates,yLength)
          if(y1>SecondY&&y1<=VertexCoordinates) {
              // 做标轴转化
              let x = x1+startX
              let y = startY-(y1-radius*2-marginTop)
              //绘制圆角矩形的各个边  
              ctx.beginPath();
              if(point.length==1) {
                  // 右上角起始点坐标
                  ctx.moveTo(x,y)
                  ctx.lineTo(x, y-Long)
                  ctx.lineTo(x+Long-2, y)
                  //右上角圆弧  
                  ctx.arc(x+width-radius, y+radius, radius, Math.PI * 3 / 2, Math.PI * 2);
                  // 右下角圆弧，弧度从0到1/2PI  
                  ctx.arc(x+width-radius, y+height-radius, radius, 0, Math.PI / 2);
                  // 左下角圆弧，弧度从1/2PI到PI  
                  ctx.arc(x+radius, y+height-radius, radius, Math.PI / 2, Math.PI);
                  ctx.closePath();
                  // cxt.font = "normal normal normal 12px HelveticaNeue";
                  ctx.fillStyle = fillColor || "#000"; //若是给定了值就用给定的值否则给予默认值
                  ctx.strokeStyle = fillColor||"red"
                  ctx.stroke();
                  // 方法填充当前的图像（路径）。默认颜色是黑色。
                  ctx.fill();
                  // 方法填充当前的图像（路径）。默认颜色是黑色。
                  ctx.fill();
                  ctx.fillStyle ="#ffffff"
                  ctx.font = "500 12px HelveticaNeue";
                  ctx.fillText(text,x+3,y+height-10)
              } else {
                  // 右上角起始点坐标
                  ctx.moveTo(x,y)
                  ctx.lineTo(x, y-Long)
                  ctx.lineTo(x-Long+2, y)
                  // 左上角圆弧，弧度从PI到3/2PI  
                  ctx.arc(x-width+radius, y+radius, radius, Math.PI * 3 / 2, Math.PI ,true);
                  // 左下角圆弧，弧度从1/2PI到PI  
                  ctx.arc(x-width+radius, y+height-radius, radius, Math.PI, Math.PI/2,true);
                  // 右下角圆弧，弧度从0到1/2PI  
                  ctx.arc(x-radius, y+height-radius, radius,  Math.PI / 2,0,true);
                  // 方法创建从当前点到开始点的路径
                  ctx.closePath();
                  // cxt.font = "normal normal normal 12px HelveticaNeue";
                  ctx.fillStyle = fillColor || "#000"; //若是给定了值就用给定的值否则给予默认值
                  ctx.strokeStyle = fillColor||"red"
                  ctx.stroke();
                  // 方法填充当前的图像（路径）。默认颜色是黑色。
                  ctx.fill();
                  ctx.fillStyle ="#ffffff"
                  ctx.font = "500 12px HelveticaNeue";
                  ctx.fillText(text,x-width+3,y+height-10)
              }
          } else {
              // 做标轴转化
              let x = x1+startX
              let y = startY-(y1+radius*2+marginTop)
              //绘制圆角矩形的各个边  
              ctx.beginPath();
              if(point.length == 1) {
                  // 左下角起始点坐标
                  ctx.moveTo(x,y)
                  ctx.lineTo(x, y+Long)
                  ctx.lineTo(x+Long-2, y)
                  // 右下角圆弧，弧度从0到1/2PI  
                  ctx.arc(x+width-radius, y-radius, radius,  Math.PI / 2,0,true);
                  //右上角圆弧  
                  ctx.arc(x+width-radius, y-height+radius, radius, Math.PI * 2, Math.PI * 3 / 2,true);
                  //左上角圆弧，弧度从PI到3/2PI  
                  ctx.arc(x+radius, y-height+radius, radius, Math.PI*3/2, Math.PI, true);
                  // 方法创建从当前点到开始点的路径
                  ctx.closePath();
                  ctx.fillStyle = fillColor || "#000"; //若是给定了值就用给定的值否则给予默认值
                  ctx.strokeStyle = fillColor||"red"
                  ctx.stroke();
                  // 方法填充当前的图像（路径）。默认颜色是黑色。
                  ctx.fill();
                  ctx.fillStyle ="#ffffff"
                  ctx.font = "500 12px HelveticaNeue";
                  ctx.fillText(text,x+3,y-height+12)
              } else {
                  // 右下角起始点坐标
                  ctx.moveTo(x,y)
                  ctx.lineTo(x, y+Long)
                  ctx.lineTo(x-Long-2, y)
                  // 左下角圆弧，弧度从1/2PI到PI  
                  ctx.arc(x-width+radius, y-radius, radius, Math.PI / 2, Math.PI);
                  //左上角圆弧，弧度从PI到3/2PI  
                  ctx.arc(x-width+radius, y-height+radius, radius, Math.PI, Math.PI * 3 / 2);
                  //右上角圆弧  
                  ctx.arc(x-radius, y-height+radius, radius, Math.PI * 3 / 2, Math.PI * 2);
                  // 方法创建从当前点到开始点的路径
                  ctx.closePath();
                  ctx.fillStyle = fillColor || "#000"; //若是给定了值就用给定的值否则给予默认值
                  ctx.strokeStyle = fillColor||"red"
                  ctx.stroke();
                  // 方法填充当前的图像（路径）。默认颜色是黑色。
                  ctx.fill();
                  ctx.fillStyle ="#ffffff"
                  ctx.font = "500 12px HelveticaNeue";
                  ctx.fillText(text,x-width+3,y-height+12)
              }
          }
      }
      creat();
      insert();
      GradientFill();
      Polyline();
      let ExplanatoryCopy = countRules.Multiplication(xText[xText.length-1].daliy_profit_rate,100)+'%'
      fillRoundRect(ctxThree,point[point.length-1][0], point[point.length-1][1], 3, (xText[xText.length-1].daliy_profit_rate>0)?'#30c28b':'#f26a3a',ExplanatoryCopy,5);
  },
  // 折线图2
  paintingCanvasThreeTwo(data,callback) {
    // 获取设备像素比
    const proportion = window.devicePixelRatio
    // let canvasThree = document.getElementById("canvasThree");
    let canvasThree = document.createElement("canvas");
    // 设置canvas的css宽高
    canvasThree.style.width = (window.innerWidth-32)+'px'
    canvasThree.style.height = 150+'px'
    // 设置canvas的画板宽高
    canvasThree.width = (window.innerWidth-32)*proportion
    canvasThree.height = 150*proportion
    let ctxThree = canvasThree.getContext('2d');
    // 设置画板的显示比例
    ctxThree.scale(proportion, proportion)
    // 可见区域的宽度
    const visibleX = (window.innerWidth-32)
    const visibleY = 150
    // 坐标轴x坐标文案	
    let arr = data.chart_point_list
    let arr2 = [...arr]
    const xText = arr2.reverse()
    //==============================获取y轴坐标的参数--以下============================
    // 对象参数，参数内包含，最小值坐标和最大值坐标
    const DataInformation = data
    // 最大值与0的差值
    const MaximumMinuZero = countRules.absoluteValue(countRules.Subtraction(DataInformation.max_profit_rate,0))
    // 最小值与0的差值
    const MinimumMinuZero = countRules.absoluteValue(countRules.Subtraction(DataInformation.min_profit_rate,0))
    // 区间最大界限
    const MaximumLimit = '0.1'
    // y轴间距,会改变，当区间超出 ‘区间最大界限’时，以新的值为准
    let ySpacingNew = '0.05'
    // y轴最小值，会改变，当区间超出 ‘区间最大界限’时，以新的值为准
    let yMinValue = '-0.1'
    // 坐标轴y坐标文案
    let ydata = []
    if(Number(MaximumMinuZero)>Number(MinimumMinuZero)) {
      if(Number(MaximumMinuZero)>Number(MaximumLimit)) {
          // y轴间距
          ySpacingNew = countRules.division(MaximumMinuZero,2)
          // y轴最小值
          yMinValue = countRules.Subtraction('0',MaximumMinuZero)
          // y轴的最大值
          let yMaxValue = countRules.Multiplication(MaximumMinuZero,100)
          // y轴的间距
          let yValue = CheckRule.DecimalDown(countRules.division(yMaxValue,2),2)
          ydata = [`-${yMaxValue}%`,`-${yValue}%`,'0',`${yValue}%`,`${yMaxValue}%`]
      } else {
          // y轴的最大值
          let yMaxValue = countRules.Multiplication(MaximumLimit,100)
          // y轴的间距
          let yValue = CheckRule.DecimalDown(countRules.division(yMaxValue,2),4)
          ydata = [`-${yMaxValue}%`,`-${yValue}%`,'0',`${yValue}%`,`${yMaxValue}%`]
      }
    } else {
        if(Number(MinimumMinuZero)>Number(MaximumLimit)) {
            // y轴间距
            ySpacingNew = countRules.division(MinimumMinuZero,2)
            // y轴最小值
            yMinValue = countRules.Subtraction('0',MinimumMinuZero)
            // y轴的最大值
            let yMaxValue = countRules.Multiplication(MinimumMinuZero,100)
            // y轴的间距
            let yValue = CheckRule.DecimalDown(countRules.division(yMaxValue,2),2)
            ydata = [`-${yMaxValue}%`,`-${yValue}%`,'0',`${yValue}%`,`${yMaxValue}%`]
        } else {
            // y轴的最大值
            let yMaxValue = countRules.Multiplication(MaximumLimit,100)
            // y轴的间距
            let yValue = CheckRule.DecimalDown(countRules.division(yMaxValue,2),2)
            ydata = [`-${yMaxValue}%`,`-${yValue}%`,'0',`${yValue}%`,`${yMaxValue}%`]
        }
    }
    let yspacing = countRules.division(countRules.Subtraction(DataInformation.max_profit_rate,DataInformation.min_profit_rate),4)
    //==============================获取y坐标间隔--以上=============================
    // 坐标系‘原点’,x轴位置
    let startX = 45;
    // 坐标系y轴的长度
    let startY = visibleY-28;
    // 顶部边界点向下移动的差值
    let marginTop = 7
    // ==============================获取坐标点的集合==================================
    // 折线相连点的结合
    let point = []
    // x轴坐标结合
    let xCoordinateSet = []
    // y轴坐标集合
    let yCoordinateSet = []
    // 判断x坐标的长度
    if(xText.length!==1) {
        for(let i=0;i<xText.length;i++) {
            // 坐标点x轴的间距
            // 间距 = 横坐标单个内容的长度 + (横坐标的总长度 - 横坐标单个内容的长度*横坐标的数量)/(两两横坐标的间距数量)
            // 高精度的计算
            let xSpacing = ''
            let a = countRules.Subtraction(visibleX,startX)
            a = countRules.Subtraction(a,countRules.Multiplication(ctxThree.measureText(xText[i].snap_at).width,xText.length))
            a = countRules.division(a,xText.length-1)
            a = countRules.addition(ctxThree.measureText(xText[i].snap_at).width,a)
            xSpacing = a
            if(i==0) {
                xCoordinateSet.push(0)
            }
            if(i>0&&i<(xText.length-1)) {
                let xlength = xSpacing*i
                xCoordinateSet.push(xlength)
            }
            if(i==(xText.length-1)) {
                let xlength = (visibleX-6-startX)
                xCoordinateSet.push(xlength)
            }
            // 折线图y点的坐标 与y轴最小值相差的大小
            let CoordinatePointsY = countRules.Subtraction(xText[i].daliy_profit_rate,yMinValue)
            // 与原点相差的距离
            // 当前y坐标是y轴间距的倍数
            let multiple = countRules.division(CoordinatePointsY,ySpacingNew)
            // 纵坐标的等长度
            // yLength = (startY-marginTop)/4
            let yLength = countRules.division(countRules.Subtraction(startY,marginTop),4)
            CoordinatePointsY = multiple*yLength
            if(multiple == 0) {
                CoordinatePointsY = 0
            }
            yCoordinateSet.push(CoordinatePointsY)
            point.push([xCoordinateSet[i],yCoordinateSet[i]])
        }
    } else {
        // 当x坐标的长度为1时
        let xlength = (visibleX-6-startX)
        let CoordinatePointsY = startY - marginTop
        point = [[0,CoordinatePointsY],[xlength,CoordinatePointsY]]
    }
    //建立坐标系
  function creat(){
        //=======y轴======
        // beginPath() 方法开始一条路径，或重置当前的路径。
        ctxThree.beginPath();
        // 起点
        ctxThree.moveTo(startX,0);
        // 终点
        ctxThree.lineTo(startX,startY);
        ctxThree.strokeStyle = "#ffffff"
        ctxThree.stroke();
        //=======x轴，及每个对应y坐标轴坐标的虚线======
        for(var i = 0; i < ydata.length; i++){
            // y轴上坐标离原点的距离
            // y轴离原点的距离 = y轴最远距离 - 纵坐标间距* 在y轴第几个做标上画线
            // let dashedY = startY - ((startY-marginTop)/(ydata.length-1))*i;
            let dashedY = countRules.Subtraction(startY,countRules.Multiplication(countRules.division(countRules.Subtraction(startY,marginTop),ydata.length-1),i))
            ctxThree.beginPath();
            if(i!=0) {
                // 设置虚线，当为[]时为实线
                ctxThree.setLineDash([1]);
            } else {
                ctxThree.setLineDash([]);
            }
            // 起点
            ctxThree.moveTo(startX,dashedY);
            // 终点，visibleX可见区域的最大宽度
            ctxThree.lineTo(visibleX,dashedY);
            // stroke() 方法会实际地绘制出通过 moveTo() 和 lineTo() 方法定义的路径。默认颜色是黑色
            ctxThree.strokeStyle = "#ebebeb"
            ctxThree.stroke();
        }

    }
    //填充横纵坐标系，标尺
    function insert(){
        // 坐标轴的原点
        // 原点横坐标
        let x = 0;
        // 原点纵坐标
        let y = startY;
        // ===================纵坐标填充
        // 纵坐标间距
        // ySpacing = startY/(ydata.length-1)
        let ySpacing = countRules.division(countRules.Subtraction(startY,marginTop),ydata.length-1)
        //绘制y纵坐标
        for(let i in ydata){
            ctxThree.font = "10px HelveticaNeue";
            ctxThree.fillStyle ="#b3b3b3"
            ctxThree.textAlign = "end"
            ctxThree.textBaseline = 'middle'
            ctxThree.fillText(ydata[i],startX-10,y,startX-10);
            // 下一个y坐标的值
            // y = y - ySpacing
            y = countRules.Subtraction(y,ySpacing)
        }
        x = startX
        y = startY+12
        ctxThree.fillText(i18n.t("IaFcGMccLnIZEuYaD"),startX-10,y)
        ctxThree.font = "normal normal normal 10px HelveticaNeue";
        ctxThree.fillStyle ="#b3b3b3"
        ctxThree.textAlign = "start"
        if(xText.length===1) {
            x = visibleX-ctxThree.measureText(xText[0].snap_at).width
            ctxThree.fillText(xText[0].snap_at,x,y)
        } else {
            for(let i in xText) {
                let xTextContent = countTime.Timestamp(xText[i].snap_at,'MM-DD',13)
                // 商品标题
                let temp='',row=[],maxwidth = 51,name = xTextContent
                for (let a = 0; a < name.length; a++) {
                    // #将文本按最大宽度换行
                    // #判断文本是否超出，是则换行
                    (ctxThree.measureText(temp).width >= maxwidth)&&(row.push(temp),temp = "")
                    temp += name[a];
                }
                row.push(temp);
                for (var b = 0; b < row.length; b++) {
                    // #按行写入文本
                    if(b>0) {
                        ctxThree.textAlign = 'left';
                        ctxThree.fillText(row[b], x+3, y+12,maxwidth);
                    } else {
                        ctxThree.fillText(row[b], x, y, maxwidth);
                    }
                }
                if(row.length==1) {
                    x += ctxThree.measureText(xTextContent).width+(((visibleX-startX)-ctxThree.measureText(xTextContent).width*xText.length)/(xText.length-1)) 
                } else {
                    x += maxwidth+(((visibleX-startX)-maxwidth*xText.length)/(xText.length-1))
                }
                // ctxThree.fillText(xTextContent,x,y)
                // x += ctxThree.measureText(xTextContent).width+(((visibleX-startX)-ctxThree.measureText(xTextContent).width*xText.length)/(xText.length-1))
            }
        }
    }
    // 添加渐变阴影
    function GradientFill() {
        for(let j=0;j<point.length-1;j++) {
            // 横做标起使位置
            let xFirstEnvoy = point[j][0]+startX
            // '渐变层'两点之间x坐标最大区间
            let ArrayDataOnex = (point[j+1][0]-point[j][0])
            // ‘渐变层’y轴坐标随着x轴递增的区间
            let yLength = (point[j+1][1]-point[j][1])/ArrayDataOnex
            for(let i=0;i<=ArrayDataOnex;i++){
                let x1 = i+xFirstEnvoy,y1= startY - (point[j][1]+i*yLength)
                ctxThree.beginPath();
                ctxThree.setLineDash([]);
                ctxThree.moveTo(x1,y1);
                ctxThree.lineTo(x1,startY);
                // createLinearGradient() 方法创建线性的渐变对象
                let linear = ctxThree.createLinearGradient(x1,y1,x1,startY);
                linear.addColorStop(0,"rgba(226, 233, 255, 0.62)");
                // linear.addColorStop(0,"#e2e9ff");
                linear.addColorStop(1,"#ffffff");
                //strokeStyle 属性设置或返回用于笔触的颜色、渐变或模式。
                ctxThree.strokeStyle= linear; 
                // ctx.strokeStyle = "#4063d5"
                ctxThree.stroke();
            }
        }
    }
    //绘制折线
    function Polyline() {
        for(let i=0;i<point.length;i++) {
            //只有第一个点重新开始绘制
          if(i == 0) {
                ctxThree.beginPath();
            }
          let x = point[i][0];
            let y = point[i][1];
            //转换坐标
            x += startX;
            y = startY - y;
            if(i == (point.length-1)&&point.length!=1){
                const _k = (y - (startY - point[i - 1][1])) / 45
                const _b = y - _k * x
                const _x = x - Math.sqrt(9 / (_k * _k + 1))
                const _y = _k * _x + _b
                ctxThree.lineTo(_x, _y);
                ctxThree.stroke();
                ctxThree.beginPath();
                ctxThree.arc(x,y,3, 0, 2*Math.PI,false);
            }
            if(point.length==1) {
                const _k = (y - (startY - point[i][1])) / 45
                const _b = y - _k * x
                const _x = x - Math.sqrt(9 / (_k * _k + 1))
                const _y = _k * _x + _b
                ctxThree.lineTo(_x, _y);
                ctxThree.stroke();
                ctxThree.beginPath();
                ctxThree.arc(x,y,3, 0, 2*Math.PI,false);
            }
            ctxThree.lineWidth = 2
            //进行点的内部连接
            if(i != 0 && i !== (point.length-1)) {
                ctxThree.lineTo(x,y);
            }
            ctxThree.setLineDash([]);
            if(i != (point.length-1)) {
                ctxThree.moveTo(x,y);
            }
            ctxThree.strokeStyle = "#4063d5";
            //连接边框
            ctxThree.stroke();
        }
    }
    /**该方法用来绘制一个有填充色的圆角矩形 
    *@param cxt:canvas的上下文环境 
    *@param x:左上角x轴坐标 
    *@param y:左上角y轴坐标 
    *@param width:矩形的宽度 
    *@param height:矩形的高度 
    *@param radius:圆的半径 
    *@param fillColor:填充颜色 
    *@param text:填充文本
    *@param Long:三角形的边长
    **/
    function fillRoundRect(ctx, x1, y1, radius, /*optional*/ fillColor, text, Long) {
        //圆的直径必然要小于矩形的宽高          
        // if (2 * radius > width || 2 * radius > height) { return false; }
        let textLength = ctx.measureText(text).width
        let width = textLength+9
        let height = 21
        // y轴顶点坐标
        let VertexCoordinates = countRules.Subtraction(startY,marginTop)
        // 纵坐标的总长度的四分之一是多少
        let yLength = countRules.division(startY,4)
        // y轴4等分时，顶点下第一个点的坐标
        let SecondY = countRules.Subtraction(VertexCoordinates,yLength)
        if(y1>SecondY&&y1<=VertexCoordinates) {
            // 做标轴转化
            let x = x1+startX
            let y = startY-(y1-radius*2-marginTop)
            //绘制圆角矩形的各个边  
            ctx.beginPath();
            if(point.length==1) {
                // 右上角起始点坐标
                ctx.moveTo(x,y)
                ctx.lineTo(x, y-Long)
                ctx.lineTo(x+Long-2, y)
                //右上角圆弧  
                ctx.arc(x+width-radius, y+radius, radius, Math.PI * 3 / 2, Math.PI * 2);
                // 右下角圆弧，弧度从0到1/2PI  
                ctx.arc(x+width-radius, y+height-radius, radius, 0, Math.PI / 2);
                // 左下角圆弧，弧度从1/2PI到PI  
                ctx.arc(x+radius, y+height-radius, radius, Math.PI / 2, Math.PI);
                ctx.closePath();
                // cxt.font = "normal normal normal 12px HelveticaNeue";
                ctx.fillStyle = fillColor || "#000"; //若是给定了值就用给定的值否则给予默认值
                ctx.strokeStyle = fillColor||"red"
                ctx.stroke();
                // 方法填充当前的图像（路径）。默认颜色是黑色。
                ctx.fill();
                // 方法填充当前的图像（路径）。默认颜色是黑色。
                ctx.fill();
                ctx.fillStyle ="#ffffff"
                ctx.font = "500 12px HelveticaNeue";
                ctx.fillText(text,x+3,y+height-10)
            } else {
                // 右上角起始点坐标
                ctx.moveTo(x,y)
                ctx.lineTo(x, y-Long)
                ctx.lineTo(x-Long+2, y)
                // 左上角圆弧，弧度从PI到3/2PI  
                ctx.arc(x-width+radius, y+radius, radius, Math.PI * 3 / 2, Math.PI ,true);
                // 左下角圆弧，弧度从1/2PI到PI  
                ctx.arc(x-width+radius, y+height-radius, radius, Math.PI, Math.PI/2,true);
                // 右下角圆弧，弧度从0到1/2PI  
                ctx.arc(x-radius, y+height-radius, radius,  Math.PI / 2,0,true);
                // 方法创建从当前点到开始点的路径
                ctx.closePath();
                // cxt.font = "normal normal normal 12px HelveticaNeue";
                ctx.fillStyle = fillColor || "#000"; //若是给定了值就用给定的值否则给予默认值
                ctx.strokeStyle = fillColor||"red"
                ctx.stroke();
                // 方法填充当前的图像（路径）。默认颜色是黑色。
                ctx.fill();
                ctx.fillStyle ="#ffffff"
                ctx.font = "500 12px HelveticaNeue";
                ctx.fillText(text,x-width+3,y+height-10)
            }
        } else {
            // 做标轴转化
            let x = x1+startX
            let y = startY-(y1+radius*2+marginTop)
            //绘制圆角矩形的各个边  
            ctx.beginPath();
            if(point.length == 1) {
                // 左下角起始点坐标
                ctx.moveTo(x,y)
                ctx.lineTo(x, y+Long)
                ctx.lineTo(x+Long-2, y)
                // 右下角圆弧，弧度从0到1/2PI  
                ctx.arc(x+width-radius, y-radius, radius,  Math.PI / 2,0,true);
                //右上角圆弧  
                ctx.arc(x+width-radius, y-height+radius, radius, Math.PI * 2, Math.PI * 3 / 2,true);
                //左上角圆弧，弧度从PI到3/2PI  
                ctx.arc(x+radius, y-height+radius, radius, Math.PI*3/2, Math.PI, true);
                // 方法创建从当前点到开始点的路径
                ctx.closePath();
                ctx.fillStyle = fillColor || "#000"; //若是给定了值就用给定的值否则给予默认值
                ctx.strokeStyle = fillColor||"red"
                ctx.stroke();
                // 方法填充当前的图像（路径）。默认颜色是黑色。
                ctx.fill();
                ctx.fillStyle ="#ffffff"
                ctx.font = "500 12px HelveticaNeue";
                ctx.fillText(text,x+3,y-height+12)
            } else {
                // 右下角起始点坐标
                ctx.moveTo(x,y)
                ctx.lineTo(x, y+Long)
                ctx.lineTo(x-Long-2, y)
                // 左下角圆弧，弧度从1/2PI到PI  
                ctx.arc(x-width+radius, y-radius, radius, Math.PI / 2, Math.PI);
                //左上角圆弧，弧度从PI到3/2PI  
                ctx.arc(x-width+radius, y-height+radius, radius, Math.PI, Math.PI * 3 / 2);
                //右上角圆弧  
                ctx.arc(x-radius, y-height+radius, radius, Math.PI * 3 / 2, Math.PI * 2);
                // 方法创建从当前点到开始点的路径
                ctx.closePath();
                ctx.fillStyle = fillColor || "#000"; //若是给定了值就用给定的值否则给予默认值
                ctx.strokeStyle = fillColor||"red"
                ctx.stroke();
                // 方法填充当前的图像（路径）。默认颜色是黑色。
                ctx.fill();
                ctx.fillStyle ="#ffffff"
                ctx.font = "500 12px HelveticaNeue";
                ctx.fillText(text,x-width+3,y-height+12)
            }
        }
    }
    creat();
    insert();
    GradientFill();
    Polyline();
    let ExplanatoryCopy = countRules.Multiplication(xText[xText.length-1].daliy_profit_rate,100)+'%'
    fillRoundRect(ctxThree,point[point.length-1][0], point[point.length-1][1], 3, (xText[xText.length-1].daliy_profit_rate>0)?'#30c28b':'#f26a3a',ExplanatoryCopy,5);
    let base64 = canvasThree.toDataURL("image/png"); //"image/png" 这里注意一下
    callback(base64)
  }
  }

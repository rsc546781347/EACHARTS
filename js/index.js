//设备监控
(function() {
    //点击的h3
    var h3 = document.querySelectorAll('.monitor-t h3');
    //要切换的下面内容
    var monitor_c = document.querySelectorAll('.monitor-c');
    for (var i = 0; i < h3.length; i++) {
        h3[i].setAttribute('index', i)
        h3[i].onclick = function() {
            var index = this.getAttribute('index');
            for (var j = 0; j < h3.length; j++) {
                h3[j].classList.remove('cf');
                h3[index].classList.add('cf');
            }
            for (var k = 0; k < monitor_c.length; k++) {
                monitor_c[k].style.display = "none";
                monitor_c[index].style.display = "block";
            }
        }
    }
})();


// 点位分布统计
(function() {
    var myChart = echarts.init(document.getElementsByClassName('picture-l')[0]);
    var option = {

        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],

        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },

        series: [

            {
                name: '老陈学员分布',
                type: 'pie',
                radius: ['10%', '65%'],
                center: ['50%', '50%'],
                roseType: 'area',
                itemStyle: {
                    borderRadius: 5
                },

                label: {
                    fontSize: 10
                },
                // 线长度
                labelLine: {
                    length: 4,
                    length2: 8
                },
                data: [
                    { value: 20, name: '云南' },
                    { value: 26, name: '北京' },
                    { value: 24, name: '山东' },
                    { value: 25, name: '河北' },
                    { value: 20, name: '江苏' },
                    { value: 25, name: '浙江' },
                    { value: 30, name: '四川' },
                    { value: 42, name: '河南' }
                ]
            },


        ]
    };
    myChart.setOption(option);

    // 解决设置option后图片变小
    window.addEventListener('load', function() {
        myChart.resize();
    });

    // 自动适应当前屏幕
    window.addEventListener('resize', function() {
        myChart.resize();
    })

})();


// 全国用户总量统计
(function() {
    var myChart = echarts.init(document.getElementsByClassName('user-l')[0]);

    var item = {
        name: '',
        value: 1200,
        // 柱子颜色
        itemStyle: {
            color: '#254065'
        },
        // 鼠标经过柱子颜色
        emphasis: {
            itemStyle: {
                color: '#254065'
            }
        },
        // 在trigger: 'item'下有效,
        tooltip: {
            extraCssText: 'opacity:0'
        },
    }

    var option = {

        // 颜色渐变
        color: {

            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0,
                color: '#00fffb' // 0% 处的颜色
            }, {
                offset: 1,
                color: '#0061ce' // 100% 处的颜色
            }],
            global: false // 缺省为 false

        },

        tooltip: {
            trigger: 'item',
            // 触发有阴影
            axisPointer: {
                type: 'none'
            }
        },
        grid: {
            top: '3%',
            left: '3%',
            right: '4%',
            bottom: '0%',
            // 是否包含文本 溢出
            containLabel: true,
            // 是否显示直角坐标系网格 两边线
            show: true,
            //边框的颜色
            borderColor: 'rgba(0, 240, 255, 0.3)'
        },
        xAxis: [{
            type: 'category',
            data: ['郑州', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],

            axisTick: {
                alignWithLabel: true,
            },
            axisTick: {
                // 是否显示坐标轴刻度
                show: false,
                // 显示在两刻度中间
                alignWithLabel: false
            },
            // x坐标轴文字标签样式设置
            axisLabel: {
                color: '#71f2fb',
            },
            axisLine: {
                lineStyle: {
                    // x坐标轴颜色
                    color: 'rgba(0, 240, 255, 0.3)',
                }
            }

        }],
        yAxis: [{
            type: 'value',
            // y坐标轴文字标签样式设置
            axisLabel: {
                color: '#71f2fb',
            },
            // axisLine: {
            //     lineStyle: {
            //         // y坐标轴颜色
            //         color: 'rgba(0, 240, 255, 0.3)',
            //     }
            // },
            // y轴 分割线的样式 
            splitLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)'
                }
            }

        }],
        series: [{
            name: '用户',
            type: 'bar',
            barWidth: '60%',
            // 数据
            data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240],
        }]
    };
    myChart.setOption(option);

    // 解决设置option后图片变小
    window.addEventListener('load', function() {
        myChart.resize();
    });

    // 自动适应当前屏幕
    window.addEventListener('resize', function() {
        myChart.resize();
    })

})();





//订单量 销售额部分
(function() {
    // 点击不同的时间
    var day = document.getElementsByClassName('day');
    // 下面变化的样式
    var number = document.getElementsByClassName('number');

    var index = 0;
    var timer = null; //计时器

    for (var i = 0; i < day.length; i++) {
        day[i].setAttribute('index', i);
        day[i].onclick = function() {
            index = this.getAttribute('index');
            for (var j = 0; j < day.length; j++) {
                day[j].classList.remove('cf');
                day[index].classList.add('cf');
            }
            for (var k = 0; k < number.length; k++) {
                number[k].style.display = 'none';
                number[index].style.display = 'block';
            }
        }
    }

    // 通过计时器来实现自动切换
    function voluntarily() {

        timer = setInterval(function() {
            index++;
            if (index >= day.length) {
                index = 0;
            }
            day[index].click();
        }, 1500)
    }
    voluntarily();


    var order = document.getElementsByClassName('order')[0];
    // 鼠标移入计时器停
    order.onmouseenter = function() {
        clearInterval(timer);
    }

    // 鼠标移出计时器继续
    order.onmouseleave = function() {
        voluntarily();
    }
})();

//销售额统计 
(function() {
    var data = {
        //自定义属性  切换需要依赖的数据
        year: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ],
        quarter: [
            [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
            [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
        ],
        month: [
            [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
            [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
        ],
        week: [
            [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
            [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
        ]
    }


    // 初始化一个echarts 对象
    var myChart = echarts.init(document.querySelector(".lines"));

    // 完成echarts图标的定制
    var option = {

        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['预期销售额', '实际销售额'],
            textStyle: {
                color: '#4c9bfd' // 图例文字颜色
            },
            right: '10%' // 距离右边10%
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '0%',
            containLabel: true,
            show: true, // 显示边框
            borderColor: '#012f4a', // 边框颜色
            // containLabel: true // 包含刻度文字在内
        },

        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisTick: {
                show: false // 去除刻度线
            },
            axisLabel: {
                color: '#4c9bfd' // 文本颜色
            },
            axisLine: {
                show: false // 去除轴线使用Y轴分割线
            },
            // boundaryGap: false // 去除轴内间距
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false // 去除刻度线
            },
            axisLabel: {
                color: '#4c9bfd' // 文本颜色
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a' // 分割线颜色
                }
            },

            // 坐标轴名称。
            name: "单位:万",
            nameTextStyle: {
                color: "#4c9bfd",
                align: "left",
                fontSize: 14,
                // 文字垂直对齐方式，默认自动。
                verticalAlign: "middle"
            },

        },
        color: ['#00f2f1', '#ed3f35'],
        series: [{
                name: '预期销售额',
                type: 'line',
                stack: 'Total',
                data: data.year[0],
                // 折线修饰为圆滑
                smooth: true,
            },
            {
                name: '实际销售额',
                type: 'line',
                stack: 'Total',
                data: data.year[1],
                smooth: true,
            }
        ]
    };
    // 设置echarts的选项
    myChart.setOption(option);


    var index = 0;
    var timer = null; //定时器
    // 找到点击年季月周
    var li = document.querySelectorAll('.time li');
    for (var i = 0; i < li.length; i++) {
        li[i].setAttribute('index', i);
        li[i].onclick = function() {
            index = this.getAttribute('index');
            for (var j = 0; j < li.length; j++) {
                li[j].id = '';
                li[index].id = 'bj';
            }

            // 获取自定义属性携带的时间
            var dataTime = this.getAttribute('data-time');


            // 通过字符串取值data[dataTime]
            option.series[0].data = data[dataTime][0];
            option.series[1].data = data[dataTime][1];

            // 修改过还要重新配置option
            myChart.setOption(option);
        }
    }



    function fn() {
        timer = setInterval(function() {
            index++;
            if (index >= li.length) {
                index = 0;
            }

            // 调用点击事件
            li[index].click()
        }, 1000)
    }
    fn();

    // 找到 '销售额统计'部分
    var sales = document.getElementsByClassName('sales')[0];
    // 移入定时器停止
    sales.onmouseenter = function() {
            clearInterval(timer);
        }
        // 移出定时器停止
    sales.onmouseleave = function() {
        fn();
    }



    // 页面加载的时候 调用echarts实例对象的reszie（）方法
    window.addEventListener('load', function() {
        myChart.resize();
    });

    // 当屏幕重置大小的时候
    window.addEventListener('resize', function() {
        myChart.resize();
    })
})();


// 渠道分布  雷达图
(function() {
    var myChart = echarts.init(document.querySelector(".channel"));



    const lineStyle = {
        width: 1,
        opacity: 0.5
    };
    var option = {
        radar: {

            center: ['50%', '50%'],
            // 外半径占据容器大小
            // 雷达图大小
            radius: '60%',

            indicator: [
                { name: '机场', max: 100 },
                { name: '商场', max: 100 },
                { name: '火车站', max: 100 },
                { name: '汽车站', max: 100 },
                { name: '地铁', max: 100 }
            ],
            shape: 'circle',
            splitNumber: 4,
            axisName: {
                //文字的颜色
                color: '#4c9bfd'

            },
            splitLine: {
                lineStyle: {
                    // 分割线设为白色 0.5透明
                    color: 'rgba(255, 255, 255, 0.5)',
                }
            },
            splitArea: {
                show: false
            },
            // 轴线相关设置
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'
                }
            }
        },
        series: [{
            name: 'Beijing',
            type: 'radar',
            lineStyle: {
                normal: {
                    // 线条颜色
                    color: '#fff',
                }
            },
            data: [
                [90, 100, 56, 40, 34]
            ],
            symbol: 'circle',
            // 拐点的大小
            symbolSize: 5,
            // 小圆点颜色
            itemStyle: {
                color: '#fff'
            },
            // 在圆点上显示数据
            label: {
                show: true,
                color: '#fff',
                fontSize: 10
            },
            areaStyle: {

                // 区域填充的背景颜色
                color: 'rgba(238, 197, 102, 0.6)',
            }
        }, ],

        tooltip: {

            show: true,
            //框组件的显示位置
            position: ['45%', '0%'],
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            textStyle: {
                fontSize: 10,
            }
        },
    };
    myChart.setOption(option);

    window.addEventListener('load', function() {
        myChart.resize()
    })
    window.addEventListener('resize', function() {
        myChart.resize()
    })
})()
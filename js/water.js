// 水球图
(function() {
    var myChart = echarts.init(document.getElementsByClassName('finish-l')[0]);

    data7 = [0.64, 0.64, 0.64];
    var option = {

        series: [{
                type: 'liquidFill',
                radius: '95%',
                center: ['50%', '50%'],
                data: data7,
                backgroundStyle: {
                    borderWidth: 1,
                    color: 'rgb(225,0,225)',
                },
                color: ['yellow', 'pink', 'blue'],
                label: {
                    normal: {
                        formatter: (data7[0] * 100).toFixed(2) + '%',
                        textStyle: {
                            fontSize: 25,
                        },
                    },
                },
                outline: {
                    show: true,
                }

            },
            {
                type: 'pie',
                center: ['0%', '0%'],
                radius: ['50%', '52%'],
                hoverAnimation: false,
                data: [{
                        name: '',
                        value: data7[0] * 100,
                        labelLine: {
                            show: false
                        },
                        itemStyle: {
                            color: '#5886f0',
                        }
                    },
                    {
                        name: '',
                        value: 0.5,
                        labelLine: {
                            show: false
                        },
                        itemStyle: {
                            color: '#5886f0',
                            borderColor: "#5886f0",
                            borderWidth: 8,
                        },
                    },
                    {
                        name: '',
                        value: 0.3,
                        labelLine: {
                            show: false
                        },
                        itemStyle: {
                            color: '#5886f0',
                        },

                    },
                    {
                        name: '',
                        value: 99.2 - data7[0] * 100,
                        itemStyle: {
                            color: '#050038',
                        },
                        label: {
                            show: false,
                        },
                        labelLine: {
                            show: false,
                        },
                    },
                ]

            }
        ]
    };


    myChart.setOption(option);

    window.addEventListener('load', function() {
        myChart.resize();
    })
    window.addEventListener('resize', function() {
        myChart.resize();
    })
})()
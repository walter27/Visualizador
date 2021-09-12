async function getData() {
    const [categoriesResponse, dataResponse] = await Promise.all([
        fetch('../../../data/scatter/primera_vuelta/instagram/categories.json'),
        fetch('../../../data/scatter/primera_vuelta/instagram/data.json')
    ]);
    const categories = await categoriesResponse.json();
    const data = await dataResponse.json();
    return [categories, data];
}

getData().then(([categories, data]) => {

    $(function() {
        $('#container').highcharts({
            chart: {
                type: 'scatter',
                zoomType: 'xy',
                style: {
                    fontFamily: 'century gothic'
                }
            },
            title: {
                text: 'Elecciones presidenciales 2021 (1era vuelta)',
                style: {
                    fontWeight: 'bold'
                }
            },
            subtitle: {
                text: 'Relación entre el gasto estimado y el número de posts por partidos políticos en Instagram',
                style: {
                    fontWeight: 'bold'
                }
            },
            xAxis: {
                title: {
                    enabled: true,
                    text: categories[0].xAxis,
                    style: {
                        fontWeight: 'bold'
                    }
                },
                labels: {
                    style: {
                        fontWeight: 'bold'
                    }
                },
                startOnTick: true,
                endOnTick: true,
                showLastLabel: true
            },
            yAxis: {
                title: {
                    text: categories[1].yAxis,
                    style: {
                        fontWeight: 'bold'
                    }
                },
                labels: {
                    style: {
                        fontWeight: 'bold'
                    }
                }
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 100,
                y: 70,
                floating: true,
                backgroundColor: Highcharts.defaultOptions.chart.backgroundColor,
                borderWidth: 1
            },
            plotOptions: {
                series: {
                    states: {
                        inactive: {
                            opacity: 1
                        }
                    }
                },
                scatter: {
                    marker: {
                        radius: 8,
                        states: {
                            hover: {
                                enabled: true,
                                lineColor: 'rgb(100,100,100)'
                            }
                        }
                    },
                    states: {
                        hover: {
                            marker: {
                                enabled: false
                            }
                        }
                    },
                    tooltip: {
                        headerFormat: '<b>{series.name}</b><br>',
                        pointFormat: '{point.x} post, gastos estimados ${point.y}'
                    }
                }
            },
            exporting: {
                chartOptions: {
                    legend: {
                        enabled: false
                    }
                },
                buttons: {
                    contextButton: {
                        enabled: true,
                        menuItems: [{
                                text: 'Descargar PNG',
                                onclick() { this.exportChart({ type: 'image/png' }); }
                            },
                            {
                                text: 'Descargar JPEG',
                                onclick() { this.exportChart({ type: 'image/jpeg' }); }
                            },
                            {
                                text: 'Descargar PDF',
                                onclick() { this.exportChart({ type: 'application/pdf' }); }
                            },
                            {
                                text: 'Descargar CSV',
                                onclick() { this.downloadCSV(); }
                            },
                            {
                                text: 'Descargar XLSX',
                                onclick() { this.downloadXLSX(); }
                            }

                        ]
                    }
                },
                xlsx: {
                    workbook: {
                        fileProperties: {
                            Author: "grupofaro",
                            Company: "grupofaro",
                            CreatedDate: new Date(Date.now())
                        }
                    }
                }
            },
            series: data,
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            enabled: false
                        },
                        title: {
                            text: null
                        },
                    }
                }]
            }
        })
    })
}).catch(error => {
    console.log(error);
});
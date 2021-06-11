async function getData() {
    const [categoriesResponse, dataResponse] = await Promise.all([
        fetch('../data/streamgraph/categories.json'),
        fetch('../data/streamgraph/data.json')
    ]);
    const categories = await categoriesResponse.json();
    const data = await dataResponse.json();
    return [categories, data];
}

getData().then(([categories, data]) => {
    let chartCategories = [];
    for (let i = 0; i < categories.length; i++) {
        chartCategories.push(categories[i].name);
    }
    $(function() {
        $('#container').highcharts({
            chart: {
                type: 'streamgraph',
            },
            title: {
                floating: true,
                align: 'left',
                text: 'Winter Olympic Medal Wins'
            },
            subtitle: {
                floating: true,
                align: 'left',
                y: 30,
                text: 'Source: <a href="https://www.sports-reference.com/olympics/winter/1924/">sports-reference.com</a>'
            },

            xAxis: {
                maxPadding: 0,
                type: 'category',
                crosshair: true,
                categories: chartCategories,
                labels: {
                    align: 'left',
                    reserveSpace: false,
                    rotation: 270
                },
                lineWidth: 0,
                margin: 20,
                tickWidth: 0
            },
            yAxis: {
                visible: true,
                startOnTick: true,
                endOnTick: true
            },

            legend: {
                enabled: false
            },
            plotOptions: {
                column: {
                    zones: [{
                        value: 50, // Values up to 10 (not including) ...
                        color: 'blue' // ... have the color blue.
                    }, {
                        color: 'red' // Values from 10 (including) and up have the color red
                    }]
                }
            },
            series: data,
            exporting: {

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

        })
    })
})